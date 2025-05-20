import React, { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import LocationSearchBar from "../../components/LocationSearchBar";
import { GoChevronDown, GoChevronLeft, GoChevronRight } from "react-icons/go";
import Footer from "../../components/Footer";
import { CiEdit } from "react-icons/ci";
import TiffinFoodCard from "../../components/cards/TiffinFoodCard";

const menuData = {
  "Breakfast Menu": [
    "Kanda Poha",
    "Misal Pav",
    "Sabudana Khichdi",
    "Idli Sambhar",
    "Omelet",
    "Dhokla",
    "Moong Dal Chilla",
    "Aloo Paratha",
  ],
  Beverages: [
    "Green Tea",
    "Haldi Doodh",
    "Oats & Berry Smoothie",
    "Protein Shake With Nuts",
    "Banana & Peanut Butter Smoothie",
    "Coconut Water",
    "Amla Juice",
  ],
};

const data = new Array(6).fill({
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
});

const WeeklyMenu = () => {
  const [activeTab, setActiveTab] = useState("Lunch");
  const [toggle, setToggle] = useState("");
  const [selectedItems, setSelectedItems] = useState({});
  const [selectedTime, setSelectedTime] = useState(null);

  const timeSlots = ["8am–8:30am", "8:30am–9am", "9am–9:30am", "9:30am–10am"];
  const tabs = [
    { label: "Breakfast", timing: "8am - 11:30am" },
    { label: "Lunch", timing: "11:30am - 4pm" },
    { label: "Snack", timing: "4pm - 7pm" },
    { label: "Dinner", timing: "7pm - 10:30pm" },
  ];

  const toggleItem = (category, item) => {
    const key = `${category}-${item}`;
    setSelectedItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="w-full">
      <Breadcrumb
        paths={[
          { label: "Lunch Box" },
          {
            label: toggle === "schedule" ? "Schedule your order" : "Weekly menu",
            isActive: true,
          },
        ]}
      />

      {/* Location Search */}
      <div className="mt-5 flex flex-col items-center gap-4 px-4">
        <LocationSearchBar isMic={true} />
        <button
          onClick={() => setToggle("schedule")}
          className="w-full sm:w-[350px] py-3 px-4 rounded-lg text-white bg-[#5BB834]"
        >
          Schedule your order
        </button>
      </div>

      {/* Schedule Section */}
      {toggle === "schedule" && (
        <div className="mt-5">
          <div className="bg-[#5BB834] text-white px-4 py-2 flex justify-between items-center">
            <div>
              <p className="font-bold text-sm">Delivery At Home</p>
              <p className="text-xs text-gray-100">Posh Complex, Hatesh...</p>
            </div>
            <button>
              <CiEdit />
            </button>
          </div>

          <div className="bg-[#F3FFEE] rounded-3xl p-4 mt-6 mx-4 md:mx-14">
            <div className="flex justify-center items-center gap-6">
              <GoChevronLeft className="text-2xl" />
              <span className="text-[#5BB834] text-xl sm:text-2xl font-semibold">
                Tomorrow, Mar 10
              </span>
              <GoChevronRight className="text-2xl" />
            </div>
          </div>

          <div className="space-y-6 mt-6 mx-4 md:mx-14">
            {/* Time Selection */}
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDdO8Maj9zH2UmJhO4KVfYTyuHUgMHPr2kvw&s"
                  alt="breakfast"
                  className="w-10 h-10"
                />
                <div>
                  <span className="font-semibold text-xl text-gray-800">Breakfast</span>
                  <p className="text-gray-500 text-lg mb-3">Choose your delivery time</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => setSelectedTime(slot)}
                    className={`px-3 py-1 rounded-lg border text-sm ${
                      selectedTime === slot
                        ? "bg-[#5BB834] text-white"
                        : "border-green-300 text-[#5BB834]"
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Other Meals */}
            {[
              {
                label: "Lunch",
                icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsqIMC-7AUBn-HTXSdqBf1MnsuCrkxQvPwrQ&s",
                time: "11:30am–4pm",
              },
              {
                label: "Snacks",
                icon: "https://img.icons8.com/color/48/sandwich.png",
                time: "4pm–7pm",
              },
              {
                label: "Dinner",
                icon: "https://img.icons8.com/color/48/dinner.png",
                time: "7pm–10pm",
              },
            ].map((meal) => (
              <div key={meal.label}>
                <div className="flex items-center space-x-2">
                  <img
                    src={meal.icon}
                    alt={meal.label.toLowerCase()}
                    className="w-8 h-8 sm:w-10 sm:h-10"
                  />
                  <div>
                    <span
                      className={`font-semibold ${
                        meal.label === "Lunch" ? "text-red-700" : "text-gray-700"
                      }`}
                    >
                      {meal.label}
                    </span>
                    <p className="text-sm text-gray-500">{meal.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Proceed Button */}
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setToggle("proceed")}
              className="bg-[#5BB834] text-white w-2/3 sm:w-1/3 py-3 rounded-md text-lg font-semibold"
            >
              Proceed
            </button>
          </div>
        </div>
      )}

      {/* Proceed Section */}
      {toggle === "proceed" && (
        <div className="mx-4">
          <div className="bg-[#5BB8342E] rounded-3xl px-4 py-8 mt-4 mx-4 md:mx-14">
            <p className="mb-3 text-xl">
              <span className="font-medium">Delivery Time</span>{" "}
              <span className="text-[#5BB834]">10 march, 8am–8:30am</span>
            </p>
            <p className="text-xl flex gap-2 items-end">
              <span className="font-medium">Delivery at home</span>{" "}
              <span className="text-[#5BB834]">Posh complex, hatkesh...</span>{" "}
              <GoChevronDown className="text-2xl font-extrabold" />
            </p>
          </div>

          <div className="flex items-center my-10 mx-4 md:mx-[6rem]">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-xl md:text-2xl font-bold text-[#415227] whitespace-nowrap">
              Breakfast
            </span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <div className="p-4 md:p-6">
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
              {data.map((item, index) => (
                <TiffinFoodCard key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Default Weekly Menu View */}
      {toggle === "" && (
        <>
          <div className="bg-[#F3FFEE] rounded-3xl p-4 mt-6 mx-4 md:mx-14">
            <div className="flex justify-center items-center gap-6">
              <GoChevronLeft className="text-2xl" />
              <span className="text-[#5BB834] text-xl sm:text-2xl font-semibold">
                Tomorrow, Mar 10
              </span>
              <GoChevronRight className="text-2xl" />
            </div>
          </div>

          <div className="mt-10 flex justify-center w-full px-4">
            <div className="flex flex-wrap justify-center gap-4 md:gap-10 border-b border-gray-300 w-full max-w-2xl">
              {tabs.map((tab) => (
                <button
                  key={tab.label}
                  onClick={() => setActiveTab(tab.label)}
                  className={`pb-2 text-lg sm:text-xl transition-all text-center ${
                    activeTab === tab.label
                      ? "text-[#5BB834] font-semibold border-b-2 border-[#5BB834]"
                      : "text-gray-400 border-b-2 border-transparent hover:text-green-700"
                  }`}
                >
                  {tab.label}
                  <br />
                  <span className="text-sm text-gray-500">{tab.timing}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 sm:px-10">
            {Object.entries(menuData).map(([category, items]) => (
              <div
                key={category}
                className="bg-white border border-green-100 rounded-xl shadow-sm p-4"
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-2 border-b pb-2">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex justify-between items-center"
                    >
                      <label className="flex items-center gap-2 cursor-pointer text-gray-800">
                        <input
                          type="checkbox"
                          checked={selectedItems[`${category}-${item}`] || false}
                          onChange={() => toggleItem(category, item)}
                          className="form-checkbox h-5 w-5 text-green-500"
                        />
                        <span className="text-sm sm:text-base">{item}</span>
                      </label>
                      <span className="text-gray-800 font-medium text-sm sm:text-base">
                        ₹150
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </>
      )}

      <Footer />
    </div>
  );
};

export default WeeklyMenu;
