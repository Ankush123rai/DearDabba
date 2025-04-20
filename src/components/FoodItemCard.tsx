import React from "react";
import { FaPlus, FaStar } from "react-icons/fa";
import piza from "../assets/images/piza.png";

const FoodItemCard: React.FC = () => {
  return (
    <div className="w-[462px] h-[233px] bg-[#F2FFEC] border border-[rgba(91,184,52,0.18)] rounded-[25px] relative flex">
      <div className="w-[322px] bg-white rounded-[28px] shadow-2xl relative translate-x-[2px] translate-y-[2px]">
        <img
          src={piza}
          alt="Food Item"
          className="w-full object-cover rounded-t-[28px] relative bottom-10"
        />
        <div className="flex flex-col items-center gap-1 relative bottom-7">
          <div className="flex items-center">
            <span className="text-[16px] text-[#7D7D7D] line-through mr-2">
              ₹150
            </span>
            <span className="text-[25px] font-medium">₹150</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[16px] text-[#7D7D7D]">15 mins</span>
            <div className="w-2 h-2 bg-[#7D7D7D] rounded-full"></div>
            <span className="text-[16px] text-[#7D7D7D]">1 km</span>
          </div>
          <span className="text-[25px] text-[#5BB834] font-medium">
            30% OFF
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-between mx-3  py-6">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-[25px] font-semibold text-[#2A334A]">Samosa</h2>
            <div className=" w-6 h-6 border-2 border-[#267F00] rounded-sm flex items-center justify-center">
              <div className="w-3.5 h-3.5 bg-[#267F00] rounded-full"></div>
            </div>
          </div>

          <p className="text-[15px] text-[#7D7D7D] leading-6 ">
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

        <div className="flex justify-between items-center w-[300px] mt-4">
          <button className="flex items-center justify-center gap-3 bg-[rgba(91,184,52,0.18)] border border-[#267F00] rounded-[10px] px-5 py-1">
            <span className="text-[#267F00] flex items-center gap-2">
              {" "}
              <FaPlus /> Add
            </span>
          </button>
          <div className="flex gap-4">
            <button className="text-[#CFCFCF] w-7 h-7">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M16 2H8C6.9 2 6 2.9 6 4V20L12 16L18 20V4C18 2.9 17.1 2 16 2Z"
                  opacity="0.4"
                />
                <path d="M16 2H8V16L12 14L16 16V2Z" />
              </svg>
            </button>
            <button className="text-[#CFCFCF] w-7 h-7">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 5.12548 15.0077 5.24917 15.0227 5.37061L8.0826 9.84066C7.54305 9.32015 6.8089 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15C6.8089 15 7.54305 14.6799 8.0826 14.1593L15.0227 18.6294C15.0077 18.7508 15 18.8745 15 19C15 20.6569 16.3431 22 18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C17.1911 16 16.457 16.3201 15.9174 16.8407L8.9773 12.3706C8.99229 12.2492 9 12.1255 9 12C9 11.8745 8.99229 11.7508 8.9773 11.6294L15.9174 7.15934C16.457 7.67985 17.1911 8 18 8Z"
                  opacity="0.4"
                />
                <path d="M18 10C19.1046 10 20 9.10457 20 8C20 6.89543 19.1046 6 18 6C16.8954 6 16 6.89543 16 8C16 9.10457 16.8954 10 18 10ZM6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14ZM18 22C19.1046 22 20 21.1046 20 20C20 18.8954 19.1046 18 18 18C16.8954 18 16 18.8954 16 20C16 21.1046 16.8954 22 18 22Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItemCard;
