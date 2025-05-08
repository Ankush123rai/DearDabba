import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import LocationSearchBar from "../../components/LocationSearchBar";
import KitchenCard from "../../components/cards/KitchenCard";
import { FaPlus, FaShareAlt, FaStar } from "react-icons/fa";
import { useState } from "react";
import Footer from "../../components/Footer";

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
      image:
        "https://eastindianrecipes.net/wp-content/uploads/2023/02/Chicken-Thali-Indian-Thali-Recipe7.jpg",
    },
    kitchenImage:
      "https://t3.ftcdn.net/jpg/03/11/19/38/360_F_311193887_0aXFwwXXHu4PsBAVNW1USeypg1clOH8E.jpg",
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
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2OEtfeMBNPMmnq5vegUyHkTBej6JaJLKjhg&s",
    },
    kitchenImage:
      "https://t4.ftcdn.net/jpg/02/78/24/39/360_F_278243908_fmvDBDwC3iF97GbvAjB8319sYvlWfNyA.jpg",
  },
  {
    name: "Lilly’s kitchen",
    location: "Mira road, Mumbai",
    time: "15 mins",
    distance: "1 km",
    rating: 4.1,
    dish: {
      title: "Jumbo Veg Thali",
      price: "₹150 per plate",
      image:
        "https://eastindianrecipes.net/wp-content/uploads/2023/02/Chicken-Thali-Indian-Thali-Recipe7.jpg",
    },
    kitchenImage:
      "https://t3.ftcdn.net/jpg/03/11/19/38/360_F_311193887_0aXFwwXXHu4PsBAVNW1USeypg1clOH8E.jpg",
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
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2OEtfeMBNPMmnq5vegUyHkTBej6JaJLKjhg&s",
    },
    kitchenImage:
      "https://t4.ftcdn.net/jpg/02/78/24/39/360_F_278243908_fmvDBDwC3iF97GbvAjB8319sYvlWfNyA.jpg",
  },
  {
    name: "Lilly’s kitchen",
    location: "Mira road, Mumbai",
    time: "15 mins",
    distance: "1 km",
    rating: 4.1,
    dish: {
      title: "Jumbo Veg Thali",
      price: "₹150 per plate",
      image:
        "https://eastindianrecipes.net/wp-content/uploads/2023/02/Chicken-Thali-Indian-Thali-Recipe7.jpg",
    },
    kitchenImage:
      "https://t3.ftcdn.net/jpg/03/11/19/38/360_F_311193887_0aXFwwXXHu4PsBAVNW1USeypg1clOH8E.jpg",
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
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2OEtfeMBNPMmnq5vegUyHkTBej6JaJLKjhg&s",
    },
    kitchenImage:
      "https://t4.ftcdn.net/jpg/02/78/24/39/360_F_278243908_fmvDBDwC3iF97GbvAjB8319sYvlWfNyA.jpg",
  },
];

const Page2 = () => {
  const { name } = useParams();

  const [showDetails, setShowDetails] = useState(false);

  const includedItems = [
    "Paneer Korma",
    "Mix Masala",
    "Naan",
    "Jira Rice",
    "Veg Biryani",
    "Dal Tadka",
    "Papad",
    "Gulab Jamun",
    "Chas (Buttermilk)",
  ];

  const additionalItems = [
    {
      category: "Main Course",
      items: [
        { name: "Paneer Butter Masala", price: 200 },
        { name: "Dal Makhani", price: 180 },
        { name: "Chole Bhature", price: 150 },
      ],
    },
    {
      category: "Breads",
      items: [
        { name: "Roti", price: 15, checked: true },
        { name: "Butter Roti", price: 18 },
        { name: "Butter Naan", price: 25 },
      ],
    },
    {
      category: "Rice",
      items: [
        { name: "Pulav", price: 50 },
        { name: "Plain Rice", price: 30 },
        { name: "Red Rice", price: 30 },
      ],
    },
    {
      category: "Sweets",
      items: [{ name: "Raasmalai", price: 50 }],
    },
  ];

  return (
    <>
      <div className="mx-4 mt-2">
        <Breadcrumb
          paths={[
            { label: "Home" },
            { label: "Catering Service" },
            { label: name || "", isActive: true },
          ]}
        />

        <LocationSearchBar isMic={true} />
        <p className="mt-[3rem] ml-5 font-medium">Veg</p>
        <div className=" mt-2 flex gap-10 mx-5">
          <div>
            <div className="grid grid-cols-2 gap-8">
              {vegKitchens.map((item, ind) => (
                <KitchenCard kitchen={item} key={ind} />
              ))}
            </div>
          </div>
          <div className="w-[420px] h-[860px] overflow-y-auto bg-[#5BB8342E] rounded-xl">
            <p className="text-center my-4 text-xl text-[#415227] font-semibold">
              Pure Veg, Lilly’s kitchen
            </p>

            <div className="flex items-center my-10 mx-4 md:mx-[2rem]">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-4 text-xs md:text-sm font-bold text-[#415227] whitespace-nowrap">
                Dinner
              </span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {showDetails ? (
              <div className="flex flex-col items-center gap-4">
                <div className=" w-[300px] rounded-2xl shadow">
                  <img
                    src="https://t3.ftcdn.net/jpg/03/11/19/38/360_F_311193887_0aXFwwXXHu4PsBAVNW1USeypg1clOH8E.jpg"
                    alt="kitchen"
                    className="w-full h-32 object-cover rounded-t-2xl"
                  />
                  <div className="p-3 bg-white">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-md font-semibold text-gray-800">
                          Jumbo Veg Thali
                        </h3>
                        <p className="text-sm text-green-600 mt-1">
                          ₹150 per plate
                        </p>
                        <p
                          onClick={() => setShowDetails(!showDetails)}
                          className="text-sm text-gray-500 mt-1 cursor-pointer"
                        >
                          View Details {showDetails ? "▲" : "▼"}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="flex gap-3">
                          <button className="text-gray-400 hover:text-[#5BB834] transition-colors">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 18 21"
                              fill="currentColor"
                            >
                              <path
                                opacity="0.4"
                                d="M0.898 19.249V2.943C0.898 1.78 1.84 0.838 3.003 0.838H15.634c1.163 0 2.105.942 2.105 2.105L17.739 19.25c0 1.315-1.514 2.054-2.55 1.245l-4.575-4.165c-.761-.594-1.83-.594-2.591 0l-4.575 4.165c-1.037.81-2.55.07-2.55-1.245z"
                              />
                              <path d="M3.003 0.838H15.634c1.163 0 2.105.942 2.105 2.105V6.1H0.898V2.943c0-1.163.942-2.105 2.105-2.105z" />
                            </svg>
                          </button>

                          <button className="text-gray-400 hover:text-[#5BB834] transition-colors">
                            <FaShareAlt />
                          </button>
                        </div>
                        <p className="text-green-600 text-sm font-semibold flex items-center gap-1 justify-end mt-1">
                          4.1 <FaStar className="text-green-400" />
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center mt-2">
                      <button className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm flex items-center">
                        <FaPlus className="mr-1" /> Add
                      </button>
                      <p className="text-sm">₹3000 for 20 people</p>
                    </div>

                    {showDetails && (
                      <div className="mt-4 text-sm">
                        <div className="mb-2">
                          {includedItems.map((item, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-2"
                            >
                              <input type="checkbox" checked readOnly />
                              <label>{item}</label>
                            </div>
                          ))}
                        </div>
                        <hr className="my-2" />
                        <div className="text-gray-500 font-medium text-xs">
                          You can also add
                        </div>
                        {additionalItems.map((section, idx) => (
                          <div key={idx} className="mt-2">
                            <p className="font-semibold text-gray-700">
                              {section.category}
                            </p>
                            {section.items.map((item, subIdx) => (
                              <div
                                key={subIdx}
                                className="flex items-center gap-2"
                              >
                                <input
                                  type="checkbox"
                                  defaultChecked={item.checked || false}
                                />
                                <label>
                                  {item.name}{" "}
                                  <span className="text-gray-400">
                                    ₹{item.price}
                                  </span>
                                </label>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <button className="bg-[#5BB834] w-full py-3 my-4 rounded-md text-white">
                    Add to cart
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-4">
                {Array.from({ length: 10 }).map((_, ind) => (
                  <div
                    className="bg-white w-[300px] rounded-2xl shadow"
                    key={ind}
                  >
                    <img
                      src="https://t3.ftcdn.net/jpg/03/11/19/38/360_F_311193887_0aXFwwXXHu4PsBAVNW1USeypg1clOH8E.jpg"
                      alt="kitchen"
                      className="w-full h-32 object-cover rounded-t-2xl"
                    />
                    <div className="p-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-md font-semibold text-gray-800">
                            Jumbo Veg Thali
                          </h3>
                          <p className="text-sm text-green-600 mt-1">
                            ₹150 per plate
                          </p>
                          <p
                            onClick={() => setShowDetails(!showDetails)}
                            className="text-sm text-gray-500 mt-1 cursor-pointer"
                          >
                            View Details {showDetails ? "▲" : "▼"}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="flex gap-3">
                            <button className="text-gray-400 hover:text-[#5BB834] transition-colors">
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 18 21"
                                fill="currentColor"
                              >
                                <path
                                  opacity="0.4"
                                  d="M0.898 19.249V2.943C0.898 1.78 1.84 0.838 3.003 0.838H15.634c1.163 0 2.105.942 2.105 2.105L17.739 19.25c0 1.315-1.514 2.054-2.55 1.245l-4.575-4.165c-.761-.594-1.83-.594-2.591 0l-4.575 4.165c-1.037.81-2.55.07-2.55-1.245z"
                                />
                                <path d="M3.003 0.838H15.634c1.163 0 2.105.942 2.105 2.105V6.1H0.898V2.943c0-1.163.942-2.105 2.105-2.105z" />
                              </svg>
                            </button>

                            <button className="text-gray-400 hover:text-[#5BB834] transition-colors">
                              <FaShareAlt />
                            </button>
                          </div>
                          <p className="text-green-600 text-sm font-semibold flex items-center gap-1 justify-end mt-1">
                            4.1 <FaStar className="text-green-400" />
                          </p>
                        </div>
                      </div>

                      <div className="flex justify-between items-center mt-2">
                        <button className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm flex items-center">
                          <FaPlus className="mr-1" /> Add
                        </button>
                        <p className="text-sm">₹3000 for 20 people</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Page2;
