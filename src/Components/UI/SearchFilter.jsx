import { IoIosSearch } from "react-icons/io";

export const SearchFilter = ({
  search,
  setSearch,
  filter,
  setFilter,
  countries,
  setCountries,
}) => {
  const handleInput = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };
  const handleSelect = (event) => {
    event.preventDefault();
    setFilter(event.target.value);
  };

  //   ASCENDING OR DECENDING ORDER LOGIC CODE HERE
  const sortCountries = (value) => {
    const sortCountry = [...countries].sort((a, b) => {
      return value === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    });
    setCountries(sortCountry);
  };

  return (
    <section className="flex flex-col gap-3 lg:flex-row justify-between">
      {/* Search Country part */}
      <div className="flex border gap-2 px-2 cursor-pointer bg-black text-white border-white max-w-55 justify-center items-center rounded-2xl">
        <input
          type="text"
          placeholder="Search Country"
          value={search}
          onChange={handleInput}
          className="py-1"
        />
        <IoIosSearch />
      </div>
      {/* Ascending Part */}
      <div>
        <button
          className="border rounded-2xl py-0.5 px-1 cursor-pointer hover:bg-blue-800"
          onClick={() => sortCountries("asc")}
        >
          Ascending Order
        </button>
      </div>
      {/* Descending Part */}
      <div>
        <button
          className="border rounded-2xl py-0.5 px-1 cursor-pointer hover:bg-blue-800"
          onClick={() => sortCountries("des")}
        >
          Descending Order
        </button>
      </div>

      {/* Filter Part */}
      <div>
        <select
          value={filter}
          className="border px-2 rounded-2xl cursor-pointer bg-black"
          onChange={handleSelect}
        >
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};
