import { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import LocationSearchBar from "../../components/LocationSearchBar";
import healthyFood from "../../assets/images/healthy-food.png";

import HeathlyFoodCard from "../../components/cards/HealthyFoodCard";
import DinningFoodCard from "../../components/cards/DinningFoodCard";
import booktable from "../../assets/images/bookTable.png";
import nearBy from "../../assets/images/nearBy.png";
import Offers from "../../assets/images/offer.png";
import star from "../../assets/images/star.png";
import topRated from "../../assets/images/topRated  .png";
import map from "../../assets/images/map.png";
import topcuisines from "../../assets/images/topcuisines.png";
import MoodCarousel from "../../components/MoodCarousel";

const Dining = () => {
  const exploreItems = [
    {
      title: "Book A Table",
      image: booktable,
    },
    {
      title: "Near Me",
      image: nearBy,
    },
    {
      title: "Offers",
      image: Offers,
    },
    {
      title: "Event & Experiences",
      image: star,
    },
    {
      title: "Top Rated",
      image: topRated,
    },
    {
      title: "Popular Areas",
      image: map,
    },
    {
      title: "Top Cuisines",
      image: topcuisines,
    },
  ];

  return (
    <div>
      <Breadcrumb
        paths={[{ label: "Lunch Box" }, { label: "Dinning", isActive: true }]}
      />
      <LocationSearchBar isMic={true} />
      <img src={healthyFood} alt="healthyFood" className="w-[100vw] mt-8" />

      <div className="m-6 relative ">
        <div className="flex items-center my-10 mx-4 md:mx-[6rem]">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-xl md:text-2xl font-bold text-[#415227] whitespace-nowrap">
            Must visit
          </span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <div className="flex flex-row gap-5 overflow-x-auto whitespace-nowrap px-4">
          {Array.from({ length: 12 }).map((_, ind) => (
            <div key={ind} className="flex-shrink-0">
              <DinningFoodCard />
            </div>
          ))}
        </div>

        <div className="mb-8 sm:mb-12">
          <h2 className="text-xl text-center sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 text-[#415227]">
            Explore
          </h2>

          <div className="w-full px-4 sm:px-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 sm:gap-6 max-w-7xl mx-auto">
              {exploreItems.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-2 gap-2 cursor-pointer bg-white border border-opacity-15 border-gray-700 rounded-xl hover:shadow-md transition-all duration-200"
                >
                  <div className=" sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-xs sm:text-sm md:text-base font-medium text-center text-[#415227] line-clamp-2">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>


        <MoodCarousel/>

        <div className="flex justify-between items-center mt-8 mx-4">
          <span className="mx-4 text-xl md:text-2xl font-bold text-[#415227] whitespace-nowrap">
            For You
          </span>

          <span className="mx-4 text-xl md:text-2xl font-bold text-green-500 underline whitespace-nowrap">
            View All
          </span>
        </div>

        <div className="p-4 md:p-6">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 12 }).map((_, ind) => (
              <HeathlyFoodCard key={ind} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dining;
