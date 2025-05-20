import React from "react";
import { BiFoodTag } from "react-icons/bi";
import { FaShareAlt, FaStar } from "react-icons/fa";

interface FoodCardProps {
  image: string;
  title: string;
  shopName?: string;
  time: string;
  distance: string;
  type: string[];
  price: string;
  rating: string;
  isveg?: boolean;
}

const TiffinFoodCard: React.FC<FoodCardProps> = ({
  image,
  title,
  shopName,
  time,
  distance,
  type,
  price,
  rating,
  isveg = true,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer">
      <img
        src={image}
        alt={title}
        className="w-full h-36 object-cover rounded-t-xl"
      />

      <div className="flex items-center justify-between gap-2 w-full p-3">
        <BiFoodTag
          className="text-2xl"
          style={{ color: isveg ? "green" : "red" }}
        />
        <div className="flex gap-3">
          <button className="text-gray-400 hover:text-[#5BB834] transition-colors">
            <svg width="16" height="16" viewBox="0 0 18 21" fill="currentColor">
              <path
                opacity="0.4"
                d="M0.898 19.249V2.943C0.898 1.78 1.84 0.838 3.003 0.838H15.634c1.163 0 2.105.942 2.105 2.105L17.739 19.25c0 1.315-1.514 2.054-2.55 1.245l-4.575-4.165c-.761-.594-1.83-.594-2.591 0l-4.575 4.165c-1.037.81-2.55.07-2.55-1.245z"
              />
              <path d="M3.003 0.838H15.634c1.163 0 2.105.942 2.105 2.105V6.1H0.898V2.943c0-1.163.942-2.105 2.105-2.105z" />
            </svg>
          </button>

          <button className="text-gray-400 hover:text-[#5BB834] transition-colors">
                      <FaShareAlt className="text-gray-400" />
          </button>
        </div>
      </div>
      
      <div className="flex justify-between items-center px-3 pb-3">
        <div className="flex flex-col space-y-1 w-full">
          <div className="flex justify-between items-center gap-2 w-full">
            <span className="text-lg font-medium text-[#415227]">{title}</span>
            <span className="text-sm text-[#7D7D7D]">{shopName}</span>
            <div className="bg-[#F6FFFF] rounded-md px-2 py-1 flex items-center gap-1">
              <span className="text-[#5BB834] font-semibold text-sm">
                {rating}
              </span>
              <FaStar size={14} className="text-[#5BB834]" />
            </div>
          </div>

          <div className="flex items-center text-sm text-[#5BB834] gap-2">
            <span>{time}</span>
            <span className="w-1 h-1 bg-[#5BB834] rounded-full"></span>
            <span>{distance}</span>
          </div>
          <div className="flex items-center text-xs text-[#7D7D7D] gap-2 flex-wrap">
            {type.map((t, index) => (
              <React.Fragment key={index}>
                <span>{t}</span>
                {index < type.length - 1 && (
                  <span className="w-1 h-1 bg-[#989898] rounded-full"></span>
                )}
              </React.Fragment>
            ))}
            <span className="w-1 h-1 bg-[#989898] rounded-full"></span>
            <span>{price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TiffinFoodCard;
