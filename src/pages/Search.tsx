import { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import { useNavigate } from "react-router-dom";
import LocationSearchBar from "../components/LocationSearchBar";
import topTrend from "../assets/images/top-trend.png";
import insta from "../assets/images/insta-worthy.png";
import romantc from "../assets/images/romantic-mood.png";
import nearBy from "../assets/images/nearBy.svg";
import foodImage from "../assets/images/foodImage.png";
import FoodCard from "../components/cards/FoodCard";
import Footer from "../components/Footer";

const Search = () => {
  const navigate = useNavigate();

  const tabs = [
    {
      title: "Restaurant",
      link: "/search/restaurant",
    },
    {
      title: "Tiffin Services",
      link: "/search/tiffin-services",
    },
    {
      title: "Catering",
      link: "/search/catering",
    },
    {
      title: "Home Chefs",
      link: "/search/home-chefs",
    },
    {
      title: "Delivery",
      link: "/search/delivery",
    },
  ];

  const data = new Array(9).fill({
    image: foodImage,
    title: "Food panda",
    time: "15 mins",
    distance: "1 km",
    type: ["Restaurant", "Bar"],
    price: "₹50 for one",
    rating: "4.1",
  });

  const [activeTab, setActiveTab] = useState<keyof DummyData>("Restaurant");

  const dummyDataType = {
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

  type DummyData = typeof dummyDataType;

  return (
    <>
      <div className="mx-4 md:mx-8">
        <Breadcrumb
          paths={[
            { label: "Home" },
            { label: "Search" },
            { label: "Restaurants", isActive: true },
          ]}
          onBack={() => navigate(-1)}
        />

        <LocationSearchBar />

        <div className="sm:mt-10 mt-14 flex justify-center">
          <div className="flex flex-wrap justify-center gap-4 md:gap-10 border-b border-gray-300 mb-4">
            {tabs.map((tab) => (
              <button
                key={tab.title}
                onClick={() => {
                  setActiveTab(tab.title as keyof DummyData);
                  navigate(tab.link);
                }}
                className={`pb-2 text-sm md:text-xl transition-all ${
                  activeTab === tab.title
                    ? "text-green-700 font-bold border-b-2 border-green-700"
                    : "text-gray-400 border-b-2 border-transparent hover:text-green-700"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>

        <div className="relative mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[95%] md:max-w-[880px]">
          <div className="relative bg-white rounded-3xl overflow-hidden ml-12 aspect-[16/9] md:aspect-auto md:h-[464px] md:w-[354px]">
            <div className="absolute inset-0 md:h-[464px] md:left-[-192px]">
              <img
                src={topTrend}
                alt="Top Trending Spots"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-b from-transparent to-[#252424] z-10" />
            <div className="absolute bottom-6 w-full flex items-center justify-center px-4">
              <div className="px-4 py-2 rounded-lg">
                <h2 className="text-white z-40 font-poppins font-semibold text-[24px] md:text-[40px] leading-tight text-center capitalize">
                  Top Trending Spots
                </h2>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-4">
            {[insta, romantc].map((img, idx) => (
              <div
                key={idx}
                className="relative bg-white rounded-3xl overflow-hidden aspect-[16/9] md:h-[203.59px]"
              >
                <div className="absolute inset-0 md:w-[471px] md:h-[331px] md:top-[-57px] md:left-[-7px]">
                  <img
                    src={img}
                    alt="Highlight"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-b from-transparent to-[#332D19] z-10" />
                <div className="absolute bottom-4 w-full flex items-center justify-center px-4">
                  <div className=" px-4 py-2 rounded-lg">
                    <h2 className="text-white font-poppins font-semibold text-[20px] md:text-[40px] leading-tight text-center capitalize">
                      {idx === 0 ? "Instaworthy Place" : "Romantic Moods"}
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row justify-between items-center border-[#5BB83473] bg-[#EBFFE2] rounded-xl px-4 gap-4 md:gap-0">
          <p className="text-lg md:text-xl font-semibold">Restaurant Near Me</p>
          <img src={nearBy} alt="Nearby" className="w-24 md:w-auto" />
        </div>

        <div className="p-4 md:p-6">
          <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {data.map((item, index) => (
              <FoodCard key={index} {...item} />
            ))}
          </div>
        </div>

        <div className="mr-8"></div>
      </div>
      <Footer />
    </>
  );
};

export default Search;
