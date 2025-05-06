import React from "react";
import { FaStar, FaPlus, FaShareAlt } from "react-icons/fa";

const KitchenCard: React.FC = () => {
  return (
    <div className="max-w-md mx-auto rounded-2xl shadow-lg overflow-hidden bg-white font-sans">
      {/* Top Image */}
      <img
        src="/274b2bd5-bdca-452f-aa14-9dadf0e629fc.png"
        alt="Kitchen"
        className="w-full h-52 object-cover"
      />

      {/* Kitchen Info */}
      <div className="p-4 space-y-2">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Lilly’s kitchen</h2>
            <p className="text-sm text-gray-500">Mira road, Mumbai</p>
            <p className="text-sm text-green-600 mt-1">15 mins • 1 km</p>
          </div>

          <div className="flex flex-col items-end space-y-1">
            <button className="text-gray-400 hover:text-gray-600">
              <FaShareAlt />
            </button>
            <div className="text-green-600 font-semibold text-sm flex items-center space-x-1">
              <span>4.1</span>
              <FaStar className="text-green-400" />
            </div>
          </div>
        </div>

        {/* Dish Card */}
        <div className="mt-4 border rounded-xl p-3 flex justify-between items-center">
          <div>
            <h3 className="text-base font-semibold text-gray-900">Jumbo Veg Thali</h3>
            <p className="text-green-600 text-sm mt-1">₹150 per plate</p>
            <p className="text-gray-500 text-sm mt-1">
              View Details <span className="ml-1">➔</span>
            </p>
            <button className="mt-2 flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
              <FaPlus className="mr-1" /> Add
            </button>
          </div>
          <img
            src="/jumbo-veg-thali.jpg"
            alt="Jumbo Veg Thali"
            className="w-24 h-20 rounded-lg object-cover ml-4"
          />
        </div>

        {/* Full Menu Link */}
        <div className="text-center mt-4">
          <a href="#" className="text-green-600 font-semibold hover:underline">
            View Full Menu
          </a>
        </div>
      </div>
    </div>
  );
};

export default KitchenCard;
