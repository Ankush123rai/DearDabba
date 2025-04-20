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
    <div className="flex justify-center px-4">
      <div className="bg-white w-full max-w-[900px] h-[50px] md:h-[75px] flex flex-col md:flex-row gap-2 md:gap-3 rounded-xl md:rounded-[20px] shadow-sm md:shadow-none">
        
        <div className="relative w-full md:w-[280px] h-full rounded-xl md:rounded-[20px] border border-[rgba(42,51,74,0.15)] p-2 md:p-3 flex items-center gap-2 md:gap-3">
          <div 
            className="flex items-center gap-2 md:gap-3 cursor-pointer w-full" 
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="relative w-[22px] h-[22px] md:w-[30px] md:h-[30px] flex items-center justify-center text-[#5BB834]">
              <img src={location} alt="location" className="w-full h-full" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1 md:gap-2 text-[#5BB834] font-semibold text-xs md:text-[20px] leading-tight md:leading-[30px]">
                Location
                <FiChevronDown size={18} className="md:w-[24px] md:h-[24px]" />
              </div>
              <div className="text-[#5BB834] font-normal text-[10px] md:text-[13px] leading-tight md:leading-[20px] truncate">
                {selectedLocation}
              </div>
            </div>
          </div>

          {isOpen && (
            <div className="absolute top-[50px] md:top-[75px] left-0 w-full bg-white shadow-md rounded-[12px] border border-[rgba(42,51,74,0.15)] z-10 max-h-[250px] overflow-y-auto">
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

        <div className="flex items-center justify-between gap-2 md:gap-4 w-full md:w-[calc(100%-280px-12px)] h-full rounded-xl md:rounded-[20px] border border-[rgba(42,51,74,0.15)] p-2 md:p-3">
          <div className="flex items-center gap-3 md:gap-5 w-full">
            <svg 
              className="text-[#929292] w-4 h-4 md:w-[30px] md:h-[30px]" 
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
              className="outline-none text-[#929292] text-xs md:text-[24px] placeholder-[#929292] font-light leading-tight md:leading-[34px] w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSearchBar;
