import Breadcrumb from "../../components/Breadcrumb";
import TiffinFoodCard from "../../components/cards/TiffinFoodCard";
import Footer from "../../components/Footer";
import LocationSearchBar from "../../components/LocationSearchBar";
import { BiFoodTag } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import deliveryGuy from "../../assets/images/delivery-guy.png";

const page1 = () => {
  const data = new Array(6).fill({
    image:
      "https://www.shutterstock.com/image-photo/baked-fried-salmon-salad-paleo-600nw-1907858902.jpg",
    title: "Food panda",
    shopName: "Sunita kitchens",
    time: "15 mins",
    distance: "1 km",
    type: ["Restaurant", "Bar"],
    price: "₹50 for one",
    rating: "4.1",
    isveg: true,
  });

  return (
    <div>
      <Breadcrumb
        paths={[
          { label: "Lunch Box" },
          { label: "Tiffin Service", isActive: true },
        ]}
      />

      <div className="mt-5 flex gap-4 flex-col items-center">
        <LocationSearchBar isMic={true} />
        <button className="my-4 sm:w-[350px] w-3xl py-2 px-4 rounded-lg text-white bg-[#5BB834]">
          Schedule your order
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-6 my-4">
        <div className="flex items-center gap-2 text-[#5BB834]">
          <p>Filter</p>
          <IoIosArrowDown />
        </div>
        <div className="flex items-center gap-1">
          <BiFoodTag className="text-green-600 text-2xl" />
          <p>Veg</p>
        </div>
        <div className="flex items-center gap-1">
          <BiFoodTag className="text-red-600 text-2xl" />
          <p>Non-Veg</p>
        </div>
      </div>

      <div className="flex items-center my-10 mx-4 md:mx-[6rem]">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 text-xl md:text-2xl font-bold text-[#415227] whitespace-nowrap">
          Recommended for you
        </span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      <div className="p-4 md:p-6">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
          {data.map((item, index) => (
            <TiffinFoodCard key={index} {...item} />
          ))}
        </div>
      </div>

      <div className="w-full py-10 md:py-14 mt-2 mx-auto max-w-[1240px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-[#F1FFEB] rounded-[18px] px-6 sm:px-[3rem]">
          <div className="text-center md:text-left">
            <h2 className="text-[#4D4D4D] text-xl md:text-[30px] font-medium mb-2">
              Don't miss out on your favorites...
            </h2>
            <h1 className="text-[#267F00] text-2xl md:text-[40px] font-medium leading-tight sm:mt-6 mt-2">
              Place your order now <br className="hidden md:block" /> in advance
            </h1>
            <button className="mt-5 bg-[#267F00] hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg text-xl">
              Schedule Order
            </button>
          </div>

          <img
            src={deliveryGuy}
            alt="Delivery Guy"
            className="w-[390px] md:w-[360px] object-contain"
          />
        </div>

        <div className="mt-6 text-center text-sm text-gray-700">
          <span className="mx-2">• Daily changing menu by chefs.</span>
          <span className="mx-2">• Freshly Made With Quality Ingredients</span>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page1;
