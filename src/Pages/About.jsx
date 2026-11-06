import countryFacts from "../api/countryData.json";

export const About = () => {
  return (
    // About Container
    <section className="px-10 md:px-40 mb-18">
      {/* heading */}
      <div className="flex justify-center">
        <h1 className="font-bold text-2xl w-[20ch] md:w-[25ch] text-center pt-3 pb-7 font-serif">
          Here are the interesting Facts we're Proud of
        </h1>
      </div>
      {/* Api Card */}
      {/* Card Outer Layer */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {countryFacts.map((country) => {
          const { id, countryName, capital, population, interestingFact } =
            country;

          return (
            <div key={id}>
              {/* Card Inner Layer */}
              <div
                className="p-10 h-70 rounded-[45px] border-2 border-transparent 
                bg-[linear-gradient(71deg,#080509,#1a171c,#080509)]"
              >
                <h1 className="text-2xl font-bold text-white mb-4">
                  {countryName}
                </h1>

                <p className="text-gray-300 mb-2 font-light">
                  Capital:{" "}
                  <span className="text-white font-medium">{capital}</span>
                </p>

                <p className="text-gray-300 mb-2 font-light">
                  Population:{" "}
                  <span className="text-white font-medium">{population}</span>
                </p>

                <p className="text-gray-300 font-light">
                  Interesting Fact:{" "}
                  <span className="text-white font-medium max-w-[65ch]">
                    {interestingFact}
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
