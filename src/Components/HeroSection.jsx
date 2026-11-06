import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export const HeroSection = () => {
  return (
    <main>
      {/* Container */}
      <div className="flex gap-3.5 flex-col lg:flex-row justify-between md:w-100rem py-8 m-auto px-10 md:px-40">
        {/* Child 1 */}
        <div className="flex flex-col">
          <h1 className="text-xl font-serif md:text-3xl font-bold w-[25ch] py-4">
            Explore the World, One Country at a Time.
          </h1>
          <p className="md:w-[60ch] w-[40ch] font-light py-4">
            Discover the history, culture and beautyof every nation. Start
            search and filter through countriesto find the details you need.
          </p>
          <NavLink to="/country">
            <button className="self-start flex gap-5 justify-center items-center my-3 py-1 px-4 border-2 border-white bg-gray-800 rounded-3xl hover:cursor-pointer hover:bg-amber-200 hover:text-black">
              Start Exploring <FaArrowRightLong />
            </button>
          </NavLink>
        </div>
        {/* Child 2 */}
        <div>
          <img
            src="/images/world.png"
            alt="World Beauty Image"
            className="py-3"
          />
        </div>
      </div>
    </main>
  );
};
