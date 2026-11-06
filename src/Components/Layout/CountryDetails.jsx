import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Loader } from "../UI/Loader";
import { getCountryDataIndv } from "../../api/Postapi";

export const CountryDetails = () => {
  // URL se alphaCode lo (e.g., AFG, IND, PAK)
  const { id } = useParams();

  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        setLoading(true);
        setError("");

        // API call with alphaCode
        const response = await getCountryDataIndv(id);
        setCountry(response.data);

        console.log("Country Data:", response.data); // Debug ke liye
      } catch (err) {
        console.error("Error:", err);
        setError("Country not found");
        setCountry(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchCountry();
    }
  }, [id]); // Jab bhi id change ho, fetch karo

  // Loading State
  if (loading) return <Loader />;

  // Error State
  if (error) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-2xl text-red-500">{error}</h2>
        <button
          onClick={() => window.history.back()}
          className="mt-4 bg-blue-500 text-white px-6 py-2 rounded"
        >
          ← Go Back
        </button>
      </div>
    );
  }

  // No Country Found
  if (!country) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-2xl text-gray-500">No country found</h2>
      </div>
    );
  }

  // ✅ Country Details Display
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Flag and Name */}
      <div className="flex items-center gap-6 mb-6">
        {country.flags?.svg && (
          <img
            src={country.flags.svg}
            alt={`${country.name} flag`}
            className="w-32 h-20 object-cover rounded shadow"
          />
        )}
        <div>
          <h1 className="text-4xl font-bold">{country.name}</h1>
          <p className="text-gray-600">
            Native Name: {country.nativeName || "N/A"}
          </p>
        </div>
      </div>

      {/* Country Details Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-3">
          <div>
            <span className="font-semibold">Capital:</span>
            <span className="ml-2">{country.capital || "N/A"}</span>
          </div>
          <div>
            <span className="font-semibold">Population:</span>
            <span className="ml-2">
              {country.population?.toLocaleString() || "N/A"}
            </span>
          </div>
          <div>
            <span className="font-semibold">Region:</span>
            <span className="ml-2">
              {country.region}{" "}
              {country.subregion ? `(${country.subregion})` : ""}
            </span>
          </div>
          <div>
            <span className="font-semibold">Area:</span>
            <span className="ml-2">
              {country.area?.toLocaleString() || "N/A"} km²
            </span>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-3">
          <div>
            <span className="font-semibold">Currency:</span>
            <span className="ml-2">
              {country.currencies
                ?.map((c) => `${c.name} (${c.symbol})`)
                .join(", ") || "N/A"}
            </span>
          </div>
          <div>
            <span className="font-semibold">Languages:</span>
            <span className="ml-2">
              {country.languages?.map((l) => l.name).join(", ") || "N/A"}
            </span>
          </div>
          <div>
            <span className="font-semibold">Time Zone:</span>
            <span className="ml-2">
              {country.timezones?.join(", ") || "N/A"}
            </span>
          </div>
          {country.borders && country.borders.length > 0 && (
            <div>
              <span className="font-semibold">Borders:</span>
              <span className="ml-2">{country.borders.join(", ")}</span>
            </div>
          )}
        </div>
      </div>

      {/* Back Button */}
      <button
        onClick={() => window.history.back()}
        className="mt-8 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition cursor-pointer"
      >
        ← Back to Countries
      </button>
    </div>
  );
};
