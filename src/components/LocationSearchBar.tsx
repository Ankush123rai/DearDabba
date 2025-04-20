import { FiChevronDown } from "react-icons/fi";
import { useState } from "react";
import location from "../assets/images/location.png";

type LocationSearchBarProps = {
  isMic?: boolean;
};

const LocationSearchBar = ({ isMic = false }: LocationSearchBarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Pune, Maharashtra");

  const locations = [
    "Pune, Maharashtra",
    "Nagpur, Maharashtra",
    "Mumbai, Maharashtra",
    "Delhi, India",
    "Bangalore, Karnataka",
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
                    loc === selectedLocation
                      ? "text-[#5BB834] font-semibold"
                      : "text-gray-700"
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

            {isMic ? (
              <div className="border-l-2 border-[#929292] h-[20px] md:h-[30px] pl-2 flex items-center justify-center">
                <svg
                  width="42"
                  height="41"
                  viewBox="0 0 52 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M15.6899 14.958C15.6899 9.13528 20.4102 4.41504 26.2329 4.41504C32.0556 4.41504 36.7758 9.13528 36.7758 14.958V29.7181C36.7758 35.5408 32.0556 40.2611 26.2329 40.2611C20.4102 40.2611 15.6899 35.5408 15.6899 29.7181V14.958Z"
                    fill="#415227"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M26.76 17.0668C26.76 16.1934 27.468 15.4854 28.3415 15.4854H36.7758V18.6482H28.3415C27.468 18.6482 26.76 17.9402 26.76 17.0668ZM26.76 27.6097C26.76 26.7363 27.468 26.0283 28.3415 26.0283H36.7758V29.1912H28.3415C27.468 29.1912 26.76 28.4832 26.76 27.6097Z"
                    fill="#415227"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.36416 23.9199C10.2376 23.9199 10.9456 24.628 10.9456 25.5014V29.7185C10.9456 38.1615 17.7899 45.0058 26.2329 45.0058C34.6758 45.0058 41.5202 38.1615 41.5202 29.7185V25.5014C41.5202 24.628 42.2282 23.9199 43.1016 23.9199C43.975 23.9199 44.683 24.628 44.683 25.5014V29.7185C44.683 39.9083 36.4226 48.1687 26.2329 48.1687C16.0431 48.1687 7.78271 39.9083 7.78271 29.7185V25.5014C7.78271 24.628 8.49075 23.9199 9.36416 23.9199Z"
                    fill="#415227"
                  />
                </svg>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSearchBar;
