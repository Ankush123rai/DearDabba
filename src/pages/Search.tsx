import { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import { useNavigate } from "react-router-dom";
import LocationSearchBar from "../components/LocationSearchBar";
import topTrend from "../assets/images/top-trend.png";
import insta from "../assets/images/insta-worthy.png";
import romantc from "../assets/images/romantic-mood.png";

const Search = () => {
  const navigate = useNavigate();
  const tabs: Array<keyof typeof dummyData> = [
    "Restaurant",
    "Tiffin Services",
    "Catering",
    "Home Chefs",
    "Delivery",
  ];

  const [activeTab, setActiveTab] =
    useState<keyof typeof dummyData>("Restaurant");
  const dummyData = {
    Restaurant: [
      "Spice Hub",
      "Urban Tadka",
      "The Tandoori House",
      "Nagpur Kitchen",
    ],
    "Tiffin Services": [
      "Rai Tiffin Center",
      "Mom's Kitchen",
      "Healthy Tiffins",
    ],
    Catering: ["Royal Caterers", "Food Fiesta", "Event Delight"],
    "Home Chefs": ["Ankush's Homemade", "Tasmin's Flavours", "Chef Neha"],
    Delivery: ["Zomato Partner", "Swiggy Certified", "Local Bites"],
  };
  return (
    <div className="mx-4">
      <Breadcrumb
        paths={[
          { label: "Home" },
          { label: "Search" },
          { label: "Restaurants", isActive: true },
        ]}
        onBack={() => navigate(-1)}
      />
      <LocationSearchBar />

      <div className="mt-8">
        <div className="flex flex-col items-center">
          <div className="flex gap-6 md:gap-10 border-b border-gray-300 mb-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 text-sm md:text-xl transition-all ${
                  activeTab === tab
                    ? "text-green-700 font-bold border-b-2 border-green-700"
                    : "text-gray-400 border-b-2 border-transparent hover:text-green-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 bg-red-400">
          {dummyData[activeTab].map((item, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-green-700">{item}</h3>
              <p className="text-sm text-gray-500">Description for {item}</p>
            </div>
          ))}
        </div> */}
        </div>
      </div>

      <div className="relative max-w-[95%] md:max-w-[700px] mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative bg-white rounded-3xl overflow-hidden aspect-[16/9] md:aspect-auto md:h-[464px]">
          <div className="absolute inset-0 md:w-[694px] md:h-[464px] md:left-[-192px] md:top-0">
            <img
              src={topTrend}
              alt="Top Trending Spots"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-b from-[rgba(149,149,149,0)] to-[#2B2614]" />
          <div className="absolute bottom-6 w-full flex items-center justify-center px-4">
            <div className="backdrop-blur-md bg-white/10 px-4 py-2 rounded-lg">
              <h2 className="text-white font-poppins font-semibold text-[24px] md:text-[30px] leading-tight tracking-[-0.6px] text-center capitalize">
                Top Trending Spots
              </h2>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4">
          <div className="relative bg-white rounded-3xl overflow-hidden aspect-[16/9] md:h-[203.59px]">
            <div className="absolute inset-0 md:w-[471px] md:h-[331px] md:left-[-7px] md:top-[-57px]">
              <img
                src={insta}
                alt="Insta Worthy Place"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-b from-[rgba(189,189,189,0)] to-[#332D19]" />
            <div className="absolute bottom-4 w-full flex items-center justify-center px-4">
              <div className="backdrop-blur-md bg-white/10 px-4 py-2 rounded-lg">
                <h2 className="text-white font-poppins font-semibold text-[20px] md:text-[30px] leading-tight tracking-[-0.6px] text-center capitalize">
                  Instaworthy Place
                </h2>
              </div>
            </div>
          </div>

          <div className="relative bg-white rounded-3xl overflow-hidden aspect-[16/9] md:h-[203.59px]">
            <div className="absolute inset-0 md:w-[464px] md:h-[258px] md:left-0 md:top-[-40px]">
              <img
                src={romantc}
                alt="Romantic Moods"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-b from-[rgba(150,150,150,0)] to-[#37301A]" />
            <div className="absolute bottom-4 w-full flex items-center justify-center px-4">
              <div className="backdrop-blur-md bg-white/10 px-4 py-2 rounded-lg">
                <h2 className="text-white font-poppins font-semibold text-[20px] md:text-[30px] leading-tight tracking-[-0.6px] text-center capitalize">
                  Romantic Moods
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
