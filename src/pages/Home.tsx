import FoodCard from "../components/cards/FoodCard";
import Herosection from "../components/Herosection";
import LocationSearchBar from "../components/LocationSearchBar";
import Recommended from "../components/Recommended";
import foodImage from "../assets/images/foodImage.png";
import Footer from "../components/Footer";
import facebook from "../assets/images/facebook.png";
import Instagram from "../assets/images/instagram.png";
import Linkedin from "../assets/images/linkedin.png";
import SnapchatSquare from "../assets/images/snapchat.png";
import tweeter from "../assets/images/twitter.png";
import AppDownloadSection from "../components/AppDownloadSection";
import restaurant from "../assets/images/restaurant.png";
import tiffin from "../assets/images/tiffin.png";
import Service from "../assets/images/service.png";
import chef from "../assets/images/chef.png";

import healthy from "../assets/images/healthy.png";
import dinning from "../assets/images/dinning.png";
import offers from "../assets/images/offers.png";
import events from "../assets/images/events.png";
import { useNavigate } from "react-router-dom";
import InitialModal from "../components/modal/InitialModal";
import { useEffect, useState } from "react";

const data = [
  {
    image: foodImage,
    title: "Food panda",
    time: "15 mins",
    distance: "1 km",
    type: ["Restaurant", "Bar"],
    price: "₹50 for one",
    rating: "4.1",
  },
  {
    image: foodImage,
    title: "Food panda",
    time: "15 mins",
    distance: "1 km",
    type: ["Restaurant", "Bar"],
    price: "₹50 for one",
    rating: "4.1",
  },
  {
    image: foodImage,
    title: "Food panda",
    time: "15 mins",
    distance: "1 km",
    type: ["Restaurant", "Bar"],
    price: "₹50 for one",
    rating: "4.1",
  },
  {
    image: foodImage,
    title: "Food panda",
    time: "15 mins",
    distance: "1 km",
    type: ["Restaurant", "Bar"],
    price: "₹50 for one",
    rating: "4.1",
  },
  {
    image: foodImage,
    title: "Food panda",
    time: "15 mins",
    distance: "1 km",
    type: ["Restaurant", "Bar"],
    price: "₹50 for one",
    rating: "4.1",
  },
  {
    image: foodImage,
    title: "Food panda",
    time: "15 mins",
    distance: "1 km",
    type: ["Restaurant", "Bar"],
    price: "₹50 for one",
    rating: "4.1",
  },
  {
    image: foodImage,
    title: "Food panda",
    time: "15 mins",
    distance: "1 km",
    type: ["Restaurant", "Bar"],
    price: "₹50 for one",
    rating: "4.1",
  },
  {
    image: foodImage,
    title: "Food panda",
    time: "15 mins",
    distance: "1 km",
    type: ["Restaurant", "Bar"],
    price: "₹50 for one",
    rating: "4.1",
  },
  {
    image: foodImage,
    title: "Food panda",
    time: "15 mins",
    distance: "1 km",
    type: ["Restaurant", "Bar"],
    price: "₹50 for one",
    rating: "4.1",
  },
];

const section = [
  {
    image: restaurant,
    title: "Restaurants",
    link: "/search",
  },
  {
    image: tiffin,
    title: "Tiffin Services",
    link: "/tiffin-service-order-flow",
  },
  {
    image: Service,
    title: "Catering services",
    link: "/catering-service",
  },
  {
    image: chef,
    title: "Home chefs",
    link: "/home-chef-order",
  },
];

const exploreItems = [
  {
    title: "Healthy",
    image: healthy,
    link: "/healthy-order",
  },
  {
    title: "Dining",
    image: dinning,
    link: "/dinning",
  },
  {
    title: "Offers",
    image: offers,
    link: "/coupons",
  },
  {
    title: "Food Events",
    image: events,
    link: "/",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false)

  useEffect(()=>{
    setIsOpen(true)
  },[])
  return (
    <div>
      <Herosection />
      <div className="relative bottom-0 md:bottom-10">
        <LocationSearchBar isMic={false} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-8 w-full max-w-[950px] sm:mt-0 mt-3">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12">
          {section.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(item.link)}
              className="flex flex-col hover:scale-125 cursor-pointer sm:flex-row items-center justify-center p-3 sm:p-4 gap-2 bg-white border border-opacity-15 border-gray-700 rounded-xl sm:rounded-2xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
              />
              <p className="text-sm sm:text-lg font-medium text-center text-[#415227]">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        <div className="mb-8 sm:mb-12">
          <Recommended title="Recommended" />
        </div>

        <div className="mb-8 sm:mb-12">
          <h2 className="text-xl text-center sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 text-[#415227]">
            Explore
          </h2>

          <div className="w-full px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
              {exploreItems.map((item, index) => (
                <div
                  key={index}
                  onClick={() => navigate(item.link)}
                  className="flex flex-col cursor-pointer w-full sm:w-[190px] h-[217px] items-center justify-center p-1 sm:p-2 gap-3 bg-white border border-opacity-15 border-gray-700 rounded-xl hover:shadow-md transition-all duration-200"
                >
                  <div className=" flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full max-h-32 object-contain"
                    />
                  </div>
                  <p className="text-xs sm:text-sm md:text-xl font-medium text-center text-[#415227] line-clamp-2">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex mx-[6rem] items-center my-4 ">
        <div className="flex-grow border-t border-gray-500 p-2 mt-[16px]"></div>
        <span className="mx-8 text-[25px] font-bold text-[#415227]">
          For You
        </span>
        <div className="flex-grow border-t border-gray-500 p-2 mt-[16px]"></div>
      </div>

      <div className="p-4 mx-6">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((item, index) => (
            <FoodCard key={index} {...item} />
          ))}
        </div>
      </div>
      <div className="flex justify-center sm:mt-10 mt-5 sm:gap-[5rem] gap:5">
        <img
          src={Instagram}
          alt="Instagram"
          className="sm:w-16 w-8 sm:h-16 h-8 cursor-pointer"
        />
        <img
          src={facebook}
          alt="Facebook"
          className="sm:w-16 w-8 sm:h-16 h-8 cursor-pointer"
        />
        <img
          src={Linkedin}
          alt="Linkedin"
          className="sm:w-16 w-8 sm:h-16 h-8 cursor-pointer"
        />
        <img
          src={SnapchatSquare}
          alt="Snapchat"
          className="sm:w-16 w-8 sm:h-16 h-8 cursor-pointer"
        />
        <img
          src={tweeter}
          alt="tweeter"
          className="sm:w-16 w-8 sm:h-16 h-8 cursor-pointer"
        />
      </div>
      <AppDownloadSection />
      <Footer />

       {isOpen && <InitialModal onClose={() => setIsOpen(false)} />}

    </div>
  );
};

export default Home;
