import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/Postapi";
import { Loader } from "../Components/UI/Loader";
import { CountryCard } from "../Components/Layout/CountryCard";
import { SearchFilter } from "../Components/UI/SearchFilter";

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  // ✅ Naya state - Show More ke liye
  const [visibleCount, setVisibleCount] = useState(12);

  useEffect(() => {
    startTransition(async () => {
      const response = await getCountryData();
      setCountries(response.data);
    });
  }, []);

  if (isPending) return <Loader />;

  // Filter Search PART
  const searchCountry = (country) => {
    if (search) {
      return country.name.toLowerCase().includes(search.toLowerCase());
    }
    return true; // ✅ true return karo (country nahi)
  };

  // Filter Region PART
  const filterRegion = (country) => {
    if (filter === "all") {
      return true; // ✅ true return karo (country nahi)
    }
    return country.region === filter;
  };

  // Filter logic
  const filterCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country),
  );

  // ✅ Show More Logic
  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 12, filterCountries.length));
  };

  // ✅ Visible countries (slice karo)
  const visibleCountries = filterCountries.slice(0, visibleCount);
  const hasMore = visibleCount < filterCountries.length;

  return (
    <section className="px-10 md:px-20 lg:px-40 pt-10">
      {/* Search filter and all */}
      <div>
        <SearchFilter
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
          countries={countries}
          setCountries={setCountries}
        />
      </div>

      {/* ✅ Results count */}
      <p className="text-gray-400 mt-4">
        Showing {visibleCountries.length} of {filterCountries.length} countries
      </p>

      {/* ✅ Cards Grid - visibleCountries */}
      <ul className="grid grid-cols md:grid-cols-2 lg:grid-cols-4 mt-3 gap-5">
        {visibleCountries.map((currCountry, index) => {
          return <CountryCard country={currCountry} key={index} />;
        })}
      </ul>

      {/* ✅ Show More Button */}
      {hasMore && (
        <div className="text-center m-8">
          <button
            onClick={handleShowMore}
            className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition duration-300 cursor-pointer"
          >
            Show More ({visibleCount}/{filterCountries.length})
          </button>
        </div>
      )}

      {/* ✅ All loaded message */}
      {!hasMore && filterCountries.length > 0 && (
        <div className="text-center m-8">
          <p className="text-gray-400">
            🎉 All {filterCountries.length} countries loaded!
          </p>
        </div>
      )}

      {/* ✅ No results */}
      {filterCountries.length === 0 && (
        <div className="text-center m-10">
          <p className="text-gray-400 text-xl">
            No countries found matching your search.
          </p>
        </div>
      )}
    </section>
  );
};
