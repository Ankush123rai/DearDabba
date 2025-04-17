import React from 'react';
import { FaStar } from 'react-icons/fa';

interface FoodCardProps {
  image: string;
  title: string;
  time: string;
  distance: string;
  type: string[];
  price: string;
  rating: string;
}

const FoodCard: React.FC<FoodCardProps> = ({ image, title, time, distance, type, price, rating }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer">
      <img src={image} alt={title} className="w-full h-36 object-cover rounded-t-xl" />

      <div className="flex justify-between items-center p-3">
        <div className="flex flex-col space-y-1">
          <h3 className="text-lg font-medium text-[#415227]">{title}</h3>
          <div className="flex items-center text-sm text-[#5BB834] gap-2">
            <span>{time}</span>
            <span className="w-1 h-1 bg-[#5BB834] rounded-full"></span>
            <span>{distance}</span>
          </div>
          <div className="flex items-center text-xs text-[#7D7D7D] gap-2 flex-wrap">
            {type.map((t, index) => (
              <React.Fragment key={index}>
                <span>{t}</span>
                {index < type.length - 1 && <span className="w-1 h-1 bg-[#989898] rounded-full"></span>}
              </React.Fragment>
            ))}
            <span className="w-1 h-1 bg-[#989898] rounded-full"></span>
            <span>{price}</span>
          </div>
        </div>

        <div className="bg-[#F6FFFF] rounded-md px-2 py-1 flex items-center gap-1">
          <span className="text-[#5BB834] font-semibold text-sm">{rating}</span>
          <FaStar size={14} className="text-[#5BB834]" />
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
