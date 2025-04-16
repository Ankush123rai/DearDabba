import { FiChevronDown } from "react-icons/fi";
import { useState } from "react";
import location from '../assets/images/location.png'

const LocationSearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Pune, Maharashtra");

  const locations = [
    "Pune, Maharashtra",
    "Nagpur, Maharashtra",
    "Mumbai, Maharashtra",
    "Delhi, India",
    "Bangalore, Karnataka"
  ];

  return (
    <div className="flex justify-center relative bottom-0 md:bottom-10 px-4">
      <div className="bg-white w-full max-w-[900px] h-[60px] md:h-[90px] flex flex-col md:flex-row gap-2 md:gap-3 rounded-xl md:rounded-[25px] shadow-sm md:shadow-none">
        {/* Location Selector */}
        <div className="relative w-full md:w-[313px] h-full rounded-xl md:rounded-[24.74px] border border-[rgba(42,51,74,0.15)] p-2 md:p-4 flex items-center gap-2 md:gap-4">
          <div 
            className="flex items-center gap-2 md:gap-4 cursor-pointer w-full" 
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="relative w-[25px] h-[25px] md:w-[35px] md:h-[35px] flex items-center justify-center text-[#5BB834]">
              <img src={location} alt="location" className="w-full h-full" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1 md:gap-2 text-[#5BB834] font-semibold text-sm md:text-[25px] leading-tight md:leading-[44px]">
                Location
                <FiChevronDown size={20} className="md:w-[30px] md:h-[30px]" />
              </div>
              <div className="text-[#5BB834] font-normal text-xs md:text-[15px] leading-tight md:leading-[26px] truncate">
                {selectedLocation}
              </div>
            </div>
          </div>

          {isOpen && (
            <div className="absolute top-[60px] md:top-[90px] left-0 w-full bg-white shadow-md rounded-[15px] border border-[rgba(42,51,74,0.15)] z-10 max-h-[300px] overflow-y-auto">
              {locations.map((loc, index) => (
                <div
                  key={index}
                  className={`p-2 md:p-3 cursor-pointer hover:bg-[#f0f0f0] ${
                    loc === selectedLocation ? "text-[#5BB834] font-semibold" : "text-gray-700"
                  }`}
                  onClick={() => {
                    setSelectedLocation(loc);
                    setIsOpen(false);
                  }}
                >
                  {loc}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Search Bar */}
        <div className="flex items-center justify-between gap-2 md:gap-5 w-full md:w-[calc(100%-313px-12px)] h-full rounded-xl md:rounded-[24.74px] border border-[rgba(42,51,74,0.15)] p-2 md:p-4">
          <div className="flex items-center gap-3 md:gap-6 w-full">
            <svg 
              className="text-[#929292] w-5 h-5 md:w-[35px] md:h-[35px]" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="#929292" 
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="outline-none text-[#929292] text-sm md:text-[30px] placeholder-[#929292] font-light leading-tight md:leading-[43px] w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSearchBar;