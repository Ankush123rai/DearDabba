import React from "react";
import { FaPlus, FaStar } from "react-icons/fa";
import piza from "../../assets/images/piza.png";
import { useNavigate } from "react-router-dom";

const FoodItemCard: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div className="w-full max-w-[502px] h-auto md:h-[244px] bg-[#F2FFEC] border border-[rgba(91,184,52,0.18)] rounded-[25px] relative flex flex-col md:flex-row">
    <div className="w-full md:w-[190px]  rounded-[25px] shadow-2xl relative -top-[60px] md:top-0 md:left-0 md:translate-y-0 mb-[-40px] md:mb-0">
      <div className="w-[171px] h-[175px] relative bottom-[3.5rem] rounded-t-[25px] mx-auto">
       <img src={piza} alt="pizza" />
      </div>
      <div className="flex flex-col items-center relative bottom-[3.5rem] p-2 md:p-0">
        <div className="flex items-center">
          <span className="text-[19px] text-[#7D7D7D] line-through mr-2">
            ₹150
          </span>
          <span className="text-[26px] font-medium">₹150</span>
        </div>
        <div className="flex items-center text-[17px] gap-3">
          <span className="text-[#7D7D7D]">15 mins</span>
          <div className="w-2 h-2 bg-[#7D7D7D] rounded-full"></div>
          <span className="text-[14px] text-[#7D7D7D]">1 km</span>
        </div>
        <span className="text-[26px] text-[#5BB834] font-medium">
          30% OFF
        </span>
      </div>
    </div>

    {/* Content section */}
    <div className="flex flex-col justify-between p-4 md:p-6 flex-grow">
      <div>
        <div className="flex items-center gap-2">
          <h2 className="text-[25px] font-semibold text-[#2A334A]">
            Aloo Tiki
          </h2>
          <div className="w-6 h-6 border-2 border-[#267F00] rounded-sm flex items-center justify-center">
            <div className="w-3.5 h-3.5 bg-[#267F00] rounded-full"></div>
          </div>
        </div>

        <p className="text-[15px] text-[#7D7D7D] leading-6 mt-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt...
        </p>

        <div className="flex items-center gap-2 mt-2">
          <div className="flex gap-1">
            {[...Array(4)].map((_, i) => (
              <FaStar key={i} className="text-[#5BB834] w-5 h-5" />
            ))}
            <FaStar className="text-[#CFCFCF] w-5 h-5" />
          </div>
          <span className="text-[15px] text-[#7D7D7D]">(334)</span>
        </div>
      </div>

      <div className="flex justify-between items-center w-full mt-4">
        <button onClick={()=>navigate('/cart')} className="flex items-center justify-center gap-2 bg-[rgba(91,184,52,0.18)] border border-[#267F00] rounded-[10px] px-5 py-1">
          <span className="text-[#267F00] flex items-center gap-2">
            <FaPlus /> Add
          </span>
        </button>

        <div className="flex gap-4">
          <button className="text-[#5BB834] w-7 h-7">
            <svg
              width="18"
              height="21"
              viewBox="0 0 18 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M0.897766 19.2493V2.94308C0.897766 1.78042 1.84029 0.837891 3.00295 0.837891H15.6341C16.7967 0.837891 17.7393 1.78042 17.7393 2.94308L17.7393 19.2493C17.7393 20.5644 16.2257 21.3031 15.189 20.494L10.6138 16.3286C9.85247 15.7344 8.78457 15.7344 8.02329 16.3286L3.44808 20.494C2.41136 21.3031 0.897766 20.5644 0.897766 19.2493Z"
                fill="#5BB834"
              />
              <path
                d="M3.00295 0.837891H15.6341C16.7968 0.837891 17.7393 1.78042 17.7393 2.94308V6.10086H0.897766V2.94308C0.897766 1.78042 1.84029 0.837891 3.00295 0.837891Z"
                fill="#5BB834"
              />
            </svg>
          </button>

          <button className="text-[#CFCFCF] w-7 h-7">
            <svg
              width="27"
              height="26"
              viewBox="0 0 27 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.9727 6.76372C20.1677 7.15369 20.0096 7.62788 19.6197 7.82287L8.53882 13.3633L19.6197 18.9037C20.0096 19.0987 20.1677 19.5729 19.9727 19.9629C19.7777 20.3528 19.3035 20.5109 18.9136 20.3159L7.61119 14.6647C7.22122 14.4697 7.06315 13.9955 7.25814 13.6056C7.30572 13.5104 7.36992 13.4291 7.44547 13.3633C7.36992 13.2975 7.30572 13.2162 7.25814 13.121C7.06315 12.731 7.22122 12.2568 7.61119 12.0619L18.9136 6.41067C19.3035 6.21568 19.7777 6.37375 19.9727 6.76372Z"
                fill="#CFCFCF"
              />
              <path
                d="M24.1413 6.52197C24.1413 8.55663 22.4919 10.2061 20.4572 10.2061C19.0149 10.2061 17.7662 9.37724 17.1614 8.1699C16.9129 7.67404 16.7731 7.11433 16.7731 6.52197C16.7731 4.48731 18.4226 2.83789 20.4572 2.83789C22.4919 2.83789 24.1413 4.48731 24.1413 6.52197Z"
                fill="#CFCFCF"
              />
              <path
                d="M24.1413 20.2057C24.1413 22.2404 22.4919 23.8898 20.4572 23.8898C18.4226 23.8898 16.7731 22.2404 16.7731 20.2057C16.7731 19.6133 16.9129 19.0536 17.1614 18.5578C17.7662 17.3504 19.0149 16.5216 20.4572 16.5216C22.4919 16.5216 24.1413 18.171 24.1413 20.2057Z"
                fill="#CFCFCF"
              />
              <path
                d="M10.4576 13.3638C10.4576 13.9562 10.3178 14.5159 10.0694 15.0118C9.46451 16.2191 8.2158 17.0479 6.7735 17.0479C4.73884 17.0479 3.08942 15.3985 3.08942 13.3638C3.08942 11.3292 4.73884 9.67975 6.7735 9.67975C8.2158 9.67975 9.46451 10.5086 10.0694 11.7159C10.3178 12.2118 10.4576 12.7715 10.4576 13.3638Z"
                fill="#CFCFCF"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default FoodItemCard;
