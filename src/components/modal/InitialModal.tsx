import { MdAdd } from "react-icons/md";
import chicken from "../../assets/images/chicken.png";
import { RxCross2 } from "react-icons/rx";
import React from "react";

// ✅ Fix typing
type Props = {
  onClose: () => void;
};

const InitialModal: React.FC<Props> = ({ onClose }) => {
  return (
    <div className="fixed  inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 px-4">
      <div className="relative flex items-center bg-white rounded-[40px] py-5 gap-4 shadow-xl sm:w-[699px] h-[240px] w-full mx-auto">
      <button
          onClick={onClose}
          className="absolute z-10 top-4 right-4 text-gray-500 hover:text-black"
        >
          <RxCross2 size={28} />
        </button>
        <img
          src={chicken}
          alt="Chicken Biryani"
          className=" object-cover rounded-2xl"
        />

        <div className="flex-1 relative mr-[1rem]">
          {/* Title and Icon */}
          <div className="flex items-center gap-2">
            <h2 className="text-[25px] font-extrabold text-[#2C2C2C] leading-snug">
              Chicken Biryani
            </h2>
            <div className="w-6 h-6 border-2 ml-4 border-red-500 rounded-sm flex items-center justify-center">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
            </div>
          </div>

          {/* Description */}
          <p className="text-[#374151] text-lg mt-1 mb-2 leading-snug">
            This Order Got Cancelled ... You Can Get It On Half Price
          </p>

          {/* Price */}
          <div className="flex items-center gap-3 mb-2">
            <span className="text-gray-400 font-semibold line-through text-xl">
              ₹150
            </span>
            <span className="text-[#5BB834] text-[28px] font-medium">₹75</span>
          </div>

          {/* Time, Distance, Add */}
          <div className="flex items-center gap-16 ">
            <p className="text-gray-500 text-lg">
              15 mins <span className="mx-2">•</span> 1 km
            </p>
            <button className="flex items-center gap-2 bg-[#5BB8342E] text-[#4CAF50] font-medium text-xl px-8 py-2 rounded-xl hover:bg-[#caeab7]">
              <MdAdd size={28} /> Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InitialModal;
