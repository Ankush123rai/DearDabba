"use client";

import { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import TiffinFoodCard from "../../components/cards/TiffinFoodCard";
import Footer from "../../components/Footer";
import LocationSearchBar from "../../components/LocationSearchBar";
import { BiFoodTag } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { FaTimes } from "react-icons/fa";
import deliveryGuy from "../../assets/images/delivery-guy.png";
import { Link } from "react-router-dom";


const Page1 = () => {
  
  const allData = new Array(6).fill({
    image:
      "https://www.shutterstock.com/image-photo/baked-fried-salmon-salad-paleo-600nw-1907858902.jpg",
    title: "Food panda",
    shopName: "Sunita kitchens",
    time: "15 mins",
    distance: "1 km",
    type: ["Restaurant", "Bar"],
    price: "₹50 for one",
    rating: "4.1",
    isveg: true,
  }).map((item, i) => ({
    ...item,
    isveg: i % 2 === 0,
    priceValue: 50 + i * 10, 
    ratingValue: 4.1 - i * 0.2,
  }));

  const [filter, setFilter] = useState("All");
  const [showFilter, setShowFilter] = useState(false);
  const [selected, setSelected] = useState({
    lowToHigh: false,
    highToLow: false,
    rating: false,
  });

  const handleChange = (type: keyof typeof selected) => {
    setSelected((prev) => ({
      ...Object.fromEntries(Object.keys(prev).map((key) => [key, false])),
      [type]: !prev[type],
    }));
  };

  let filteredData =
    filter === "All"
      ? allData
      : allData.filter((item) => (filter === "Veg" ? item.isveg : !item.isveg));

  // Apply sorting
  if (selected.lowToHigh) {
    filteredData = [...filteredData].sort((a, b) => a.priceValue - b.priceValue);
  } else if (selected.highToLow) {
    filteredData = [...filteredData].sort((a, b) => b.priceValue - a.priceValue);
  } else if (selected.rating) {
    filteredData = [...filteredData].sort((a, b) => b.ratingValue - a.ratingValue);
  }

  return (
    <div>
      <Breadcrumb
        paths={[
          { label: "Lunch Box" },
          { label: "Tiffin Service", isActive: true },
        ]}
      />

      <div className="mt-5 flex gap-4 flex-col items-center">
        <LocationSearchBar isMic={true} />
        <Link to="/schedule-your-order">
          <button className="my-4 sm:w-[350px] w-3xl py-2 px-4 rounded-lg text-white bg-[#5BB834]">
            Schedule your order
          </button>
        </Link>
      </div>

      {/* Filter Button */}
      <div className="flex flex-wrap justify-center gap-6 my-4 relative">
        <button
          className="flex items-center gap-2 text-[#5BB834] font-semibold"
          onClick={() => setShowFilter(!showFilter)}
        >
          Filter <IoIosArrowDown />
        </button>

        {/* Filter Menu UI */}
        {showFilter && (
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-80 sm:w-[400px] bg-white rounded-3xl shadow-2xl p-6 z-50">
            <div className="flex justify-between items-center mb-4">
              <div></div>
              <h2 className="text-lg text-center font-semibold text-gray-800">Filter</h2>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={() => setShowFilter(false)}
              >
                <FaTimes />
              </button>
            </div>
            <hr className="border-t border-green-400 mb-4" />
            <div className="space-y-4">
              <label className="flex justify-between items-center cursor-pointer">
                <span className="text-gray-700">Price: Low - High</span>
                <input
                  type="checkbox"
                  checked={selected.lowToHigh}
                  onChange={() => handleChange("lowToHigh")}
                  className="orm-checkbox h-5 w-5 accent-green-500"
                />
              </label>
              <label className="flex justify-between items-center cursor-pointer">
                <span className="text-gray-700">Price: High - Low</span>
                <input
                  type="checkbox"
                  checked={selected.highToLow}
                  onChange={() => handleChange("highToLow")}
                  className="form-checkbox h-5 w-5 accent-green-500"
                />
              </label>
              <label className="flex justify-between items-center cursor-pointer">
                <span className="text-gray-700">Rating: High - Low</span>
                <input
                  type="checkbox"
                  checked={selected.rating}
                  onChange={() => handleChange("rating")}
                  className="orm-checkbox h-5 w-5 accent-green-500"
                />
              </label>
            </div>
            <button
              onClick={() => setShowFilter(false)}
              className="mt-6 w-full bg-[#5BB834] text-white font-semibold py-4 rounded-lg"
            >
              Done
            </button>
          </div>
        )}

        <div className="flex items-center gap-1">
          <BiFoodTag className="text-green-600 text-2xl" />
          <p>Veg</p>
        </div>
        <div className="flex items-center gap-1">
          <BiFoodTag className="text-red-600 text-2xl" />
          <p>Non-Veg</p>
        </div>
      </div>

      <div className="flex items-center my-10 mx-4 md:mx-[6rem]">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 text-xl md:text-2xl font-bold text-[#415227] whitespace-nowrap">
          Recommended for you
        </span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      <div className="p-4 md:p-6">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <TiffinFoodCard key={index} {...item} />
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              No items found for selected filter.
            </p>
          )}
        </div>
      </div>

      <div className="w-full py-10 md:py-14 mt-2 mx-auto max-w-[1240px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-[#F1FFEB] rounded-[18px] px-6 sm:px-[3rem]">
        <div className="text-center md:text-left">
            <h2 className="text-[#4D4D4D] text-xl md:text-[41px] font-medium mb-2">
              Don't miss out on your favorites...
            </h2>
            <h1 className="text-[#267F00] text-2xl md:text-[47px] font-medium leading-tight sm:mt-6 mt-2">
              Place your order now <br className="hidden md:block" /> in advance
            </h1>
            <button className="mt-5  rounded-xl bg-[#5BB834] hover:bg-green-700 text-white font-semibold py-4 px-6 text-2xl">
              Schedule Order
            </button>
          </div>

          <img
            src={deliveryGuy}
            alt="Delivery Guy"
            className="w-[390px] md:w-[360px] object-contain"
          />
        </div>

        <div className="mt-6 text-[23px] text-center text-sm text-gray-700">
          <span className="mx-2">• Daily changing menu by chefs.</span>
          <span className="mx-2">• Freshly Made With Quality Ingredients</span>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Page1;
