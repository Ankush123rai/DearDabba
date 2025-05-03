import { useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { FaCross, FaStar, FaTimes } from "react-icons/fa";
import Breadcrumb from "../components/Breadcrumb";
import LocationSearchBar from "../components/LocationSearchBar";
import indianChilli from "../assets/images/indian.png";
import Recommended from "../components/Recommended";
import FoodItemCard from "../components/cards/FoodItemCard";
import Footer from "../components/Footer";
import FoodItemCardSmall from "../components/cards/FoodItemCardSmall";
import { RxCross2 } from 'react-icons/rx';

const SearchParams = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDeliveryModalOpen, setIsDeliveryModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState('08 Mar');
  const [selectedTime, setSelectedTime] = useState('7:00 - 7:30 PM');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const toggleDeliveryModal = () => {
    setIsDeliveryModalOpen(!isDeliveryModalOpen);
  };

  const menuItems = [
    { name: "Your Order & collections", count: "2" },
    { name: "Special offer @ ₹150", count: "12" },
    { name: "Daily Specials", count: "12" },
    { name: "Recommended for you", count: "6" },
    { name: "Veg thali", count: "50", isActive: true },
    { name: "Non-veg thali", count: "50" },
    { name: "Starters", count: "42" },
    { name: "Desserts", count: "14" },
    { name: "Beverages", count: "12" }
  ];

  const dates = [
    { id: 1, date: '08 Mar', day: 'Today' },
    { id: 2, date: '09 Mar', day: 'Tomorrow' },
    { id: 3, date: '10 Mar', day: 'Monday' }
  ];

  const times = [
    '6:30 - 7 PM',
    '7:00 - 7:30 PM',
    '7:30 - 8 PM'
  ];

  return (
    <div className="mx-4 md:mx-8 relative">

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
          <div 
            className="relative w-[90%] max-w-[500px] h-auto bg-white border border-[rgba(91,184,52,0.28)] rounded-[27px] shadow-2xl overflow-hidden"
            style={{
              boxShadow: "0px 175px 70px rgba(0, 0, 0, 0.02), 0px 98px 59px rgba(0, 0, 0, 0.07), 0px 44px 44px rgba(0, 0, 0, 0.12), 0px 11px 24px rgba(0, 0, 0, 0.14)"
            }}
          >
            {/* Close Button */}
            <button 
              onClick={toggleMenu}
              className="absolute w-9 h-9 right-4 top-4 flex items-center justify-center bg-gray-100 rounded-full transition-colors"
            >
              <div className="relative w-5 h-5">
               <RxCross2 className="absolute w-5 h-5 text-[#5BB834] transition-transform duration-300" />
              </div>
            </button>


            <div className="flex flex-col justify-center items-center gap-6 w-[90%] max-w-[430px] h-[496px] mx-auto my-10 py-5 overflow-y-auto">
              {menuItems.map((item, index) => (
                <div 
                  key={index} 
                  className={`flex justify-between items-center w-full min-h-[33px] px-2 ${
                    item.isActive ? "text-[#5BB834]" : "text-[#2A334A]"
                  }`}
                >
                  <span className="text-xl md:text-[22px] font-medium tracking-tight capitalize">
                    {item.name}
                  </span>
                  <span className="text-xl md:text-[22px] font-medium tracking-tight capitalize">
                    {item.count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

{isDeliveryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black bg-opacity-30 ">
          <div 
            className="relative w-full max-w-[467px]  bg-white rounded-[53px] shadow-lg sm:p-3 p-0"
            style={{
              boxShadow: '0px 83.646px 33.1271px rgba(0, 51, 13, 0.01), 0px 47.2062px 28.1581px rgba(0, 51, 13, 0.05), 0px 20.7045px 20.7045px rgba(0, 51, 13, 0.09), 0px 4.96907px 11.5945px rgba(0, 51, 13, 0.1)'
            }}
          >
            <button 
              onClick={toggleDeliveryModal}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            >
              <FaTimes className="text-gray-500" />
            </button>

            <div className="p-6">
              <h2 className="text-xl font-semibold text-center text-[#2A334A] mb-6">
                Select Your Delivery Time
              </h2>

              <div className="w-full h-px bg-gray-200 mb-8"></div>

              <div className="flex justify-between mb-8">
                {dates.map((item) => (
                  <div 
                    key={item.id}
                    className="flex flex-col items-center cursor-pointer"
                    onClick={() => setSelectedDate(item.date)}
                  >
                    <div className={`py-2 px-6 rounded-md ${selectedDate === item.date ? 'bg-green-100' : ''}`}>
                      <span className={`text-sm font-semibold ${selectedDate === item.date ? 'text-[#5BB834]' : 'text-gray-400'}`}>
                        {item.date}
                      </span>
                    </div>
                    <span className={`text-xs ${selectedDate === item.date ? 'text-[#5BB834]' : 'text-gray-400'}`}>
                      {item.day}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-4 mb-8">
                {times.map((time) => (
                  <div 
                    key={time}
                    className={`flex justify-center items-center py-3 px-8 rounded-md cursor-pointer ${selectedTime === time ? ' text-[#5BB834]' : 'opacity-40 bg-gray-100'}`}
                    onClick={() => setSelectedTime(time)}
                  >
                    <span className={`text-lg ${selectedTime === time ? 'font-medium' : 'font-normal'}`}>
                      {time}
                    </span>
                  </div>
                ))}
              </div>

              <button 
                className="w-full py-3 bg-[#5BB834] text-white rounded-lg font-medium text-lg"
                onClick={toggleDeliveryModal}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      <Breadcrumb
        paths={[
          { label: "Home" },
          { label: "Search" },
          { label: name || "", isActive: true },
        ]}
        onBack={() => navigate(-1)}
      />
      
      <LocationSearchBar isMic={true} />

      <div className="flex justify-between mt-10 sm:mt-14">
        <div className="flex flex-wrap justify-center gap-4 md:gap-10 mb-4">
        <button 
            onClick={toggleDeliveryModal}
            className="bg-[#5BB8342E] rounded-lg py-2 px-4 border-none hover:bg-[#5BB8343A] transition-colors"
          >
            Schedule order
          </button>
          <button className="bg-[#5BB8342E] rounded-lg py-2 px-4 border-none hover:bg-[#5BB8343A] transition-colors">
            Group Order
          </button>
        </div>
        <button 
          onClick={toggleMenu}
          className={`rounded-lg py-2 px-4 border-none transition-colors ${
            isMenuOpen ? "bg-[#5BB834] text-white" : "bg-[#5BB8342E] hover:bg-[#5BB8343A]"
          }`}
        >
          Menu
        </button>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center md:items-start p-4 md:p-6 max-w-6xl mx-auto mt-5">
        <div className="flex justify-center items-center mb-4 md:mb-0 md:mr-6">
          <img
            src={indianChilli}
            alt="Restaurant Logo"
            className="w-32 h-32 md:w-44 md:h-44 rounded-full border-2 border-green-400 object-cover"
          />
        </div>

        <div className="flex flex-col flex-grow space-y-2">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#415227]">
            Ramji's
          </h2>
          <p className="text-gray-500 text-base md:text-lg">
            Pune, Maharashtra
          </p>

          <div className="flex flex-wrap items-center text-gray-500 text-sm md:text-base space-x-2">
            <span>Restaurant</span>
            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
            <span>Bar</span>
            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
            <span>₹50 for one</span>
          </div>

          <div className="flex flex-wrap items-center text-green-700 text-sm md:text-base space-x-2">
            <span>15 mins</span>
            <span className="w-1 h-1 bg-green-700 rounded-full"></span>
            <span>1 km</span>
          </div>
        </div>

        <div className="flex justify-center items-center mt-4 md:mt-0">
          <div className="flex items-center bg-green-500 text-white text-lg font-medium px-3 py-1 rounded-xl space-x-2">
            <span>4.1</span>
            <FaStar className="text-white opacity-70" size={20} />
          </div>
        </div>
      </div>

      <Recommended title="Bestsellers of Ramji's" />

      <div className="flex flex-col my-4">
        <div className="flex justify-between items-center my-4">
          <h2 className="text-2xl md:text-[30px] font-semibold">
            Your Order & collections
          </h2>
          <div className="flex flex-col items-center">
            <div>
              VEG <br />
              <p className="text-xs">Mode</p> <br />
            </div>
            <svg
              width="41"
              height="21"
              viewBox="0 0 61 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginTop: "-16px" }}
            >
              <rect
                x="0.290405"
                y="0.395508"
                width="60.4192"
                height="30.2096"
                rx="15.1048"
                fill="#D9D9D9"
              />
              <circle cx="15.3952" cy="15.5003" r="15.1048" fill="white" />
              <circle
                cx="15.3952"
                cy="15.5003"
                r="14.6966"
                stroke="#5BB834"
                strokeOpacity="0.18"
                strokeWidth="0.816476"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 mt-4">
          <FoodItemCard />
          <FoodItemCard />
        </div>

        <div className="flex items-center justify-center gap-4 my-4">
          <div className="flex items-center relative w-[112px] h-[56px]">
            {[0, 1, 2].map((_, index) => (
              <div
                key={index}
                className="absolute w-14 h-14 bg-white rounded-full shadow-sm"
                style={{ left: `${index * 28}px` }}
              >
                <img
                  src="https://png.pngtree.com/png-clipart/20231017/original/pngtree-burger-food-png-free-download-png-image_13329458.png"
                  alt="Burger"
                  className="w-12 h-12 absolute top-1 left-1"
                />
              </div>
            ))}
          </div>

          <span className="text-[#5BB834] text-lg md:text-xl underline capitalize font-medium cursor-pointer hover:text-[#4aa02c] transition-colors">
            View All
          </span>
        </div>
      </div>

      <div className="flex items-center my-10 mx-4 md:mx-[6rem]">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 text-xl md:text-2xl font-bold text-[#415227] whitespace-nowrap">
          Special offer @ ₹150
        </span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      <div className="flex flex-wrap gap-4 mt-6">
        <FoodItemCard />
        <FoodItemCard />
      </div>

      <div className="flex items-center my-10 mx-4 md:mx-[6rem]">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 text-xl md:text-2xl font-bold text-[#415227] whitespace-nowrap">
          Daily Specials
        </span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {Array(12)
          .fill()
          .map((_, index) => (
            <FoodItemCardSmall key={index} />
          ))}
      </div>

     <div className='mr-4'>
     <Footer />
     </div>
    </div>
  );
};

export default SearchParams;