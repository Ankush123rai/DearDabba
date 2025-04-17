import FoodCard from "../components/FoodCard";
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

const Home = () => {
  return (
    <div>
      <Herosection />
      <LocationSearchBar />
      <Recommended />
      <div className="flex mx-[6rem] items-center my-4 ">
        <div className="flex-grow border-t border-gray-500 p-2"></div>
        <span className="mx-8 text-[30px] font-extrabold">For You</span>
        <div className="flex-grow border-t border-gray-500 p-2"></div>
      </div>

      <div className="p-4 mx-6">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((item, index) => (
            <FoodCard key={index} {...item} />
          ))}
        </div>
      </div>
      <div className="flex justify-center sm:my-10 my-5 sm:gap-10 gap:5">
        <img
          src={Instagram}
          alt="Instagram"
          className="sm:w-10 w-8 sm:h-10 h-8 cursor-pointer"
        />
        <img
          src={facebook}
          alt="Facebook"
          className="sm:w-10 w-8 sm:h-10 h-8 cursor-pointer"
        />
        <img
          src={Linkedin}
          alt="Linkedin"
          className="sm:w-10 w-8 sm:h-10 h-8 cursor-pointer"
        />
        <img
          src={SnapchatSquare}
          alt="Snapchat"
          className="sm:w-10 w-8 sm:h-10 h-8 cursor-pointer"
        />
        <img
          src={tweeter}
          alt="tweeter"
          className="sm:w-10 w-8 sm:h-10 h-8 cursor-pointer"
        />
      </div>
      <AppDownloadSection />
      <Footer />
    </div>
  );
};

export default Home;
