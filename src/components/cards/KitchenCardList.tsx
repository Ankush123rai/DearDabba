import React from "react";
import KitchenCard from "./KitchenCard";

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
