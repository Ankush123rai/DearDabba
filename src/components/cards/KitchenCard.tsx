import React from "react";
import { FaStar, FaPlus, FaShareAlt } from "react-icons/fa";

interface Dish {
  title: string;
  price: string;
  image: string;
}

interface Kitchen {
  name: string;
  location: string;
  time: string;
  distance: string;
  rating: number;
  dish: Dish;
  kitchenImage: string;
}



const KitchenCard: React.FC<{ kitchen: Kitchen }> = ({ kitchen }) => {
  return (
    <div className="bg-white w-[300px] h-[405px] rounded-2xl shadow">
      <img
        src={kitchen.kitchenImage}
        alt={kitchen.name}
        className="w-full h-32 object-cover rounded-lg"
      />
      <div className=" p-3">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-md font-semibold text-gray-800">
              {kitchen.name}
            </h3>
            <p className="text-sm text-gray-500">{kitchen.location}</p>
            <p className="text-sm text-green-600 mt-1">
              {kitchen.time} • {kitchen.distance}
            </p>
          </div>
          <div className="text-right">
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
            <p className="text-green-600 text-sm font-semibold flex items-center gap-1 justify-end">
              {kitchen.rating} <FaStar className="text-green-400" />
            </p>
          </div>
        </div>

        <div className="mt-3 flex justify-between items-center border rounded-xl p-3">
          <div>
            <p className="font-semibold">{kitchen.dish.title}</p>
            <p className="text-green-600 text-sm">{kitchen.dish.price}</p>
            <p className="text-sm text-gray-500 mt-1">View Details ➔</p>
            <button className="mt-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm flex items-center">
              <FaPlus className="mr-1" /> Add
            </button>
          </div>
          <img
            src={kitchen.dish.image}
            alt={kitchen.dish.title}
            className="w-24 h-20 object-cover rounded-lg ml-4"
          />
        </div>

        <p className="text-center text-green-600 font-semibold mt-3 cursor-pointer hover:underline">
          View Full Menu
        </p>
      </div>
    </div>
  );
};

export default KitchenCard;
