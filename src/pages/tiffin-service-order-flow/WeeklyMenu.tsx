import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import LocationSearchBar from "../../components/LocationSearchBar";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { ChevronDown } from "lucide-react";
import TiffinSummaryModal from "../../components/modal/TiffinSummaryModal";

const WeeklyItem = ({ label, day }) => {
  return (
    <div className="flex justify-between py-1 px-2 hover:bg-gray-50 rounded">
      <span>{label}</span>
      <span className="text-gray-500">{day}</span>
    </div>
  );
};

const LunchMenuItem = ({ title, price, items = [], weeklyItems = [] }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [expandedItem, setExpandedItem] = React.useState(null);

  const toggleItem = (itemLabel) => {
    setExpandedItem(expandedItem === itemLabel ? null : itemLabel);
  };

  return (
    <div className="mb-6">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            className="w-5 h-5 text-green-500 border-green-500"
          />
          <span className="font-semibold text-lg text-gray-800">{title}</span>
          <ChevronDown
            className={`w-4 h-4 text-gray-600 transform transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
        <div className="text-lg font-semibold text-gray-800">₹{price}</div>
      </div>

      {isOpen && (
        <div>
          <ul className="mt-4 ml-7 list-disc text-gray-700">
            {items.map((item, i) => {
              // Check if this item has weekly variations
              const hasWeeklyVariations = weeklyItems.some(
                (weeklyItem) => weeklyItem.label.includes(item)
              );
              const weeklyVariations = weeklyItems.filter((weeklyItem) =>
                weeklyItem.label.includes(item)
              );

              return (
                <li key={i} className="mb-1">
                  {hasWeeklyVariations ? (
                    <div>
                      <div
                        className="flex items-center gap-1 cursor-pointer hover:text-green-700"
                        onClick={() => toggleItem(item)}
                      >
                        <span>{item}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-gray-600 transform transition-transform ${
                            expandedItem === item ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                      {expandedItem === item && (
                        <div className="ml-4 mt-1 mb-2 text-sm bg-gray-50 rounded p-2">
                          {weeklyVariations.map((variation, idx) => (
                            <WeeklyItem
                              key={idx}
                              label={variation.label}
                              day={variation.day}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    item
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

const WeeklyMenu = () => {
  const [activeTab, setActiveTab] = React.useState("Lunch");
  const [onpenModal, setOpenModal] = React.useState(false);

  const tabs = [
    { label: "Lunch", timing: "11:30-4pm " },
    { label: "Dinner", timing: "7pm-10:30pm" },
  ];

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
        <button
            onClick={() => setOpenModal(true)}
         className="my-4 sm:w-[350px] w-3xl py-2 px-4 rounded-lg text-white bg-[#5BB834]">
          Schedule your order
        </button>
      </div>

      <div className="bg-[#F3FFEE] rounded-3xl p-3 md:p-4 m-4 md:m-14">
        <div className="flex justify-center items-center gap-6">
          <GoChevronLeft className="text-2xl" />
          <span className="text-[#5BB834] text-2xl font-semibold">
            Tomorrow, Mar 10
          </span>
          <GoChevronRight className="text-2xl" />
        </div>
      </div>

      <div className="sm:mt-10 mt-14 flex justify-center w-full border-gray-300 border-b mb-4">
        <div className="flex flex-wrap justify-between gap-4 md:gap-10 border-b border-gray-300 w-[600px]">
          {tabs.map((tab, ind) => (
            <button
              key={ind}
              onClick={() => setActiveTab(tab.label)}
              className={`pb-2 text-lg md:text-2xl transition-all ${
                activeTab === tab.label
                  ? "text-green-700 font-semibold border-b-2 border-green-700"
                  : "text-gray-400 border-b-2 border-transparent hover:text-green-700"
              }`}
            >
              {tab.label} <br />
              <span className="text-sm text-gray-500">{tab.timing}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-md m-10 rounded-2xl shadow border bg-white">
        <h2 className="text-xl px-3 my-4 font-semibold text-gray-800 mb-4">
          {activeTab} Menu
        </h2>
        <hr />
        <div className="p-6">
          <LunchMenuItem
            title="Mini Tiffin"
            price={450}
            items={["Roti/ Paratha/ Poori", "Salad", "Bhaji"]}
            weeklyItems={[
              { label: "Mixed Vegetable Bhaji", day: "Monday" },
              { label: "Spicy Potato Bhaji", day: "Tuesday" },
              { label: "Paneer Bhaji", day: "Wednesday" },
              { label: "Spinach And Cheese Bhaji", day: "Thursday" },
              { label: "Cauliflower Bhaji", day: "Friday" },
              { label: "Sukha Chicken", day: "Saturday" },
              { label: "Chicken", day: "Sunday" },
            ]}
          />

          <LunchMenuItem
            title="Regular Tiffin"
            price={600}
            items={["Roti", "2 Veg Curries", "Rice", "Dal", "Salad"]}
          />

          <LunchMenuItem
            title="Shahi Tiffin"
            price={700}
            items={[
              "Roti",
              "Paneer Curry",
              "Rice",
              "Dal Makhani",
              "Sweet Dish",
            ]}
          />
        </div>
      </div>
      {onpenModal && (
        <TiffinSummaryModal
            onClose={() => setOpenModal(false)}
            onConfirm={() => {
                setOpenModal(false);
            }}
        />
      )}
    </div>
  );
};

export default WeeklyMenu;