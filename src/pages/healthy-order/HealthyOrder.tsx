import React, { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import LocationSearchBar from "../../components/LocationSearchBar";
import healthyFood from "../../assets/images/healthy-food.png";
import { GoChevronDown } from "react-icons/go";
import { BiFoodTag } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import Recommended from "../../components/Recommended";
import HeathlyFoodCard from "../../components/cards/HealthyFoodCard";
import Footer from "../../components/Footer";

const HealthyOrder = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const [proteinFilters, setProteinFilters] = useState({
    paneer: false,
    soya: false,
    eggs: false,
    chicken: false,
    pulses:false
  });

  const [moreFilters, setMoreFilters] = useState({
    lowFat:false,
    highFiber: false,
    glutenFree: false,
  });

  const handleProteinChange = (key) => {
    setProteinFilters((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleMoreChange = (key) => {
    setMoreFilters((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div>
      <Breadcrumb
        paths={[
          { label: "Lunch Box" },
          { label: "Healthy Order", isActive: true },
        ]}
      />
      <LocationSearchBar isMic={true} />
      <img src={healthyFood} alt="healthyFood" className="w-[100vw] mt-8" />

      <div className="m-6 relative ">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-xl text-center sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 text-[#415227]">
            Explore
          </h2>

          <div className="w-full flex flex-wrap gap-4 justify-evenly items-center text-green-800 text-lg font-medium relative">

            {/* Sort Dropdown */}
            <div className="relative">
              <p
                className="flex items-center gap-1 cursor-pointer"
                onClick={() =>
                  setActiveDropdown(activeDropdown === "sort" ? null : "sort")
                }
              >
                Sort <GoChevronDown />
              </p>
              {activeDropdown === "sort" && (
                <div className="py-4 px-6 mt-2 rounded-3xl shadow-xl w-[300px] bg-white absolute z-10">
                  <p className="flex items-center gap-2 mb-2 cursor-pointer">
                    <BiFoodTag className="text-green-600 w-5 h-5" />
                    <span>Pure VEG</span>
                  </p>
                  <p className="flex items-center gap-2 mb-2 cursor-pointer">
                    <BiFoodTag className="text-red-600 w-5 h-5" />
                    <span>Non VEG</span>
                  </p>
                  <p className="flex items-center gap-2 mb-2 cursor-pointer">
                    <img
                      src="https://pngimg.com/d/vegan_PNG1.png"
                      alt="vegan"
                      className="w-5 h-5"
                    />
                    <span>Vegan</span>
                  </p>
                  <p className="flex items-center gap-2 mb-2 cursor-pointer">
                    <img
                      src="https://media.istockphoto.com/id/1079744534/vector/green-leaf-vector-logo-isolated-icon-for-vegetarian-or-vegan-cafe-ecology-environment-and.jpg?s=612x612&w=0&k=20&c=ejznTSSwcanr-YiM9bXdIKwB9OpbhxBXcKpWnoPz5ak="
                      alt="jain"
                      className="w-6 h-6"
                    />
                    <span>Jain</span>
                  </p>
                </div>
              )}
            </div>

            {/* Protein Type Dropdown */}
            <div className="relative">
              <p
                className="flex items-center gap-1 cursor-pointer"
                onClick={() =>
                  setActiveDropdown(
                    activeDropdown === "protein" ? null : "protein"
                  )
                }
              >
                Protein Type <GoChevronDown />
              </p>
              {activeDropdown === "protein" && (
                <div className="absolute top-10 left-0 w-80 sm:w-[350px] bg-white rounded-3xl shadow-2xl p-6 z-50">
                  <div className="flex justify-between items-center mb-4">
                    <div></div>
                    <h2 className="text-lg font-semibold text-gray-800">
                      Protein Type
                    </h2>
                    <button
                      className="text-gray-500 hover:text-gray-700"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <FaTimes />
                    </button>
                  </div>
                  <hr className="border-t border-green-400 mb-4" />
                  <div className="space-y-4">
                    {Object.keys(proteinFilters).map((item) => (
                      <label
                        key={item}
                        className="flex justify-between items-center cursor-pointer"
                      >
                        <span className="capitalize text-gray-700">{item}</span>
                        <input
                          type="checkbox"
                          checked={proteinFilters[item]}
                          onChange={() => handleProteinChange(item)}
                          className="form-checkbox h-5 w-5 accent-green-500"
                        />
                      </label>
                    ))}
                  </div>
                  <button className="mt-6 w-full bg-[#5BB834] text-white font-semibold py-4 rounded-lg">
                    Done
                  </button>
                </div>
              )}
            </div>

            
            <p>Low Calories</p>
            <p>Low Carbs</p>

            <div className="relative">
              <p
                className="flex items-center gap-1 cursor-pointer"
                onClick={() =>
                  setActiveDropdown(activeDropdown === "more" ? null : "more")
                }
              >
                More <GoChevronDown />
              </p>
              {activeDropdown === "more" && (
                <div className="absolute top-10 left-[-13rem] w-80 sm:w-[300px] bg-white rounded-3xl shadow-2xl p-6 z-50">
                  <div className="flex justify-between items-center mb-4">
                    <div></div>
                    <h2 className="text-lg font-semibold text-gray-800">
                      More Options
                    </h2>
                    <button
                      className="text-gray-500 hover:text-gray-700"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <FaTimes />
                    </button>
                  </div>
                  <hr className="border-t border-green-400 mb-4" />
                  <div className="space-y-4">
                    {Object.entries(moreFilters).map(([key, value]) => (
                      <label
                        key={key}
                        className="flex justify-between items-center cursor-pointer"
                      >
                        <span className="capitalize text-gray-700">
                          {key.replace(/([A-Z])/g, " $1")}
                        </span>
                        <input
                          type="checkbox"
                          checked={value}
                          onChange={() => handleMoreChange(key)}
                          className="form-checkbox h-5 w-5 accent-green-500"
                        />
                      </label>
                    ))}
                  </div>
                  <button className="mt-6 w-full bg-[#5BB834] text-white font-semibold py-4 rounded-lg">
                    Done
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

         <Recommended title="Handpicked for you " isVegMode={true} />


         <div className="flex items-center my-10 mx-4 md:mx-[6rem]">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 text-xl md:text-2xl font-bold text-[#415227] whitespace-nowrap">
          Recommended
        </span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      <div className="p-4 md:p-6">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
            {Array.from({length:12}).map((_,ind)=>
                <HeathlyFoodCard key={ind}/>
            )}
         </div>
         </div>
      </div>
      <Footer/>
    </div>
  );
};

export default HealthyOrder;
