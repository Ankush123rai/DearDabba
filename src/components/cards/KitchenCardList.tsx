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

const vegKitchens: Kitchen[] = [
  {
    name: "Lilly’s kitchen",
    location: "Mira road, Mumbai",
    time: "15 mins",
    distance: "1 km",
    rating: 4.1,
    dish: {
      title: "Jumbo Veg Thali",
      price: "₹150 per plate",
      image: "https://eastindianrecipes.net/wp-content/uploads/2023/02/Chicken-Thali-Indian-Thali-Recipe7.jpg",
    },
    kitchenImage: "https://t3.ftcdn.net/jpg/03/11/19/38/360_F_311193887_0aXFwwXXHu4PsBAVNW1USeypg1clOH8E.jpg",
  },
  {
    name: "Ram’s Kitchen",
    location: "Borivali West, Mumbai",
    time: "15 mins",
    distance: "1 km",
    rating: 4.1,
    dish: {
      title: "Veg Thali",
      price: "₹150 per plate",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2OEtfeMBNPMmnq5vegUyHkTBej6JaJLKjhg&s",
    },
    kitchenImage: "https://t4.ftcdn.net/jpg/02/78/24/39/360_F_278243908_fmvDBDwC3iF97GbvAjB8319sYvlWfNyA.jpg",
  },
];

const nonVegKitchens: Kitchen[] = [
  {
    name: "Food Mood",
    location: "Mira road, Mumbai",
    time: "15 mins",
    distance: "1 km",
    rating: 4.1,
    dish: {
      title: "Chicken thali",
      price: "₹250 per plate",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2OEtfeMBNPMmnq5vegUyHkTBej6JaJLKjhg&s",
    },
    kitchenImage: "https://t4.ftcdn.net/jpg/02/78/24/39/360_F_278243908_fmvDBDwC3iF97GbvAjB8319sYvlWfNyA.jpg",
  },
  {
    name: "Hakims Biryani",
    location: "Bandra East, Mumbai",
    time: "15 mins",
    distance: "1 km",
    rating: 4.1,
    dish: {
      title: "Shai non-veg platter",
      price: "₹650 per plate",
      image: "https://t4.ftcdn.net/jpg/02/78/24/39/360_F_278243908_fmvDBDwC3iF97GbvAjB8319sYvlWfNyA.jpg",
    },
    kitchenImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2OEtfeMBNPMmnq5vegUyHkTBej6JaJLKjhg&s",
  },
];

const KitchenCard: React.FC<{ kitchen: Kitchen }> = ({ kitchen }) => {
  return (
    <div className="bg-white w-[320px] rounded-2xl shadow">
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
            <FaShareAlt className="text-gray-400 mb-1" />
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

const KitchenCardList: React.FC = () => {
  return (
    <div className="bg-[#5BB8342E] min-h-screen p-6 space-y-10 rounded-2xl w-[500px] overflow-x-auto">
      {/* Veg Section */}
      <div>
        <div className="flex justify-between items-center mb-3 ">
          <h2 className="text-xl">Veg</h2>
          <a href="#" className=" underline">
            View All
          </a>
        </div>
        <div className="flex  gap-5 overflow-x-auto pb-3 scrollbar-hide">
          {vegKitchens.map((kitchen, idx) => (
            <div key={idx} >
              <KitchenCard kitchen={kitchen} />
            </div>
          ))}
        </div>
      </div>

      {/* Non-Veg Section */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <h2 className=" text-xl font-bold">Non-Veg</h2>
          <a href="#" className="text-green-600 underline">
            View All
          </a>
        </div>
        <div className="flex gap-5 overflow-x-auto pb-3 scrollbar-hide">
          {nonVegKitchens.map((kitchen, idx) => (
            <div key={idx} >
              <KitchenCard kitchen={kitchen} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KitchenCardList;
