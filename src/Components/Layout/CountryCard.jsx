import { NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

export const CountryCard = ({ country }) => {
  const { flags, name, population, region, capital, alpha3Code } = country;
  return (
    <li className="mt-8">
      <div
        className="shadow-[rgba(168,163,184,0.15)_0px_48px_100px_0px] p-5 rounded-3xl border-2 border-transparent 
                bg-[linear-gradient(71deg,#080509,#1a171c,#080509)] hover:scale-105 cursor-pointer transition-transform duration-300 ease-in-out"
      >
        <img
          src={flags.svg}
          alt={flags.alt}
          className="w-full h-48 object-cover rounded-lg"
        />
        <div className="mt-4 space-y-2">
          <p className="text-gray-300 mb-2 font-light">
            Name:
            <span className="text-white font-medium">
              {name.length > 11 ? name.slice(0, 11) + "..." : name}
            </span>
          </p>
          <p className="text-gray-300 mb-2 font-light">
            Population:
            <span className="text-white font-medium">{population}</span>
          </p>
          <p className="text-gray-300 mb-2 font-light">
            Region: <span className="text-white font-medium">{region}</span>
          </p>
          <p className="text-gray-300 mb-2 font-light">
            Capital: <span className="text-white font-medium">{capital}</span>
          </p>

          <NavLink to={`/alpha/${alpha3Code}`}>
            <button className="self-start flex gap-5 justify-center items-center my-3 py-1 px-4 border border-white bg-black rounded-3xl hover:cursor-pointer hover:bg-amber-200 hover:text-black">
              Read More <FaArrowRightLong />
            </button>
          </NavLink>
        </div>
      </div>
    </li>
  );
};
