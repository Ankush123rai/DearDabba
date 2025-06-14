import React from "react";
import share from '../../assets/images/share.png'
import logo from '../../assets/images/logo.png';
import { IoIosArrowBack } from "react-icons/io";

interface ChatProps{
  step: () => void;
}

const ChatInterface: React.FC<ChatProps> = ({ step }) => {
  const options = [
    "I want to know my refund status",
    "I have payment failure related issues",
    "I want an invoice for this order",
    "I have bill related issues",
    "My coupon did not work as expected",
  ];

  return (
    <div className="flex px-3 flex-col items-center w-full ">
      <div className="w-full relative flex items-center mb-4 p-4">
  <IoIosArrowBack 
    onClick={step}
    className="text-xl cursor-pointer absolute left-4"
  />
  <h2 className="text-xl font-semibold mx-auto">Chats</h2>
</div>


      <div className="w-full flex-1 p-4 space-y-4 overflow-y-auto">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="DearDabba" className="w-10 h-10 rounded-full" />
          <div>
            <p className="font-semibold text-[#3a5c0c]">DearDabba</p>
            <p className="text-green-600 text-xs">Online</p>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#5BB8342E] text-white text-sm px-4 py-2 rounded-lg max-w-xs shadow">
            Payment and billing related query
            <div className="text-xs text-right text-white/70">11:11am ✓</div>
          </div>
        </div>
  

        <div className="flex justify-start">
          <div className="bg-[#d0e7b6] text-sm p-3 rounded-lg max-w-xs shadow">
            Hi there! I am your DearDabba bot and I’m here to help you. Please choose the option which best describes your issue for me to help you better.
          </div>
        </div>

         {options.map((option, index) => (
          <div key={index} className="flex justify-start w-[250px]">
            <div className="bg-white rounded-md text-sm px-4 py-2 shadow hover:bg-gray-100 transition w-full">
              {option}
            </div>
          </div>
        ))}

        
      </div>

      <div className="w-full p-5">
        <div className="flex items-center bg-white rounded-3xl p-3 shadow">
          <input
            type="text"
            placeholder="Type here..."
            className="flex-1 outline-none text-sm text-gray-700"
          />
          <button className="bg-[#c0f0ab] p-3 rounded-full text-lg">
            <img src={share} className="w-4" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
