import React, { useEffect, useState } from "react";
import share from "../assets/images/share.png";

const recommendedItems = [
  {
    id: 1,
    image:
      "https://s3-ap-south-1.amazonaws.com/betterbutterbucket-silver/femina-shiraz1483418163586b2a32afe74.jpeg",
    title: "Lunch Box",
    discount: "30% OFF",
    location: "Pune, Maharashtra",
  },
  {
    id: 2,
    image:
      "https://s3-ap-south-1.amazonaws.com/betterbutterbucket-silver/femina-shiraz1483418163586b2a32afe74.jpeg",
    title: "Lunch Box",
    discount: "30% OFF",
    location: "Pune, Maharashtra",
  },
  {
    id: 3,
    image:
      "https://s3-ap-south-1.amazonaws.com/betterbutterbucket-silver/femina-shiraz1483418163586b2a32afe74.jpeg",
    title: "Lunch Box",
    discount: "30% OFF",
    location: "Pune, Maharashtra",
  },
];

type RecommendedProps = {
  title: string;
  isVegMode?: boolean;
};

const Recommended: React.FC<RecommendedProps> = ({
  title,
  isVegMode = false,
}) => {
  const [current, setCurrent] = useState(0);
  const total = recommendedItems.length;
  const [vegModeOn, setVegModeOn] = useState(false);

  const nextSlide = () => setCurrent((current + 1) % total);

  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(interval);
  }, [current]);

  const getPositionClass = (index: number) => {
    if (index === current) return "z-10 scale-100 opacity-100";
    if (index === (current - 1 + total) % total)
      return "-translate-x-[250px] scale-75 opacity-30 z-0";
    if (index === (current + 1) % total)
      return "translate-x-[250px] scale-75 opacity-30 z-0";
    return "opacity-0 scale-25 z-0";
  };
  

  return (
    <div className="relative w-[80vw] max-w-[900px] mx-auto flex flex-col items-center justify-center">
      <div
        className={`w-full flex items-center mb-16 ${
          isVegMode ? "justify-between" : "justify-center"
        }`}
      >
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-[#415227]">
          {title}
        </h2>
        {isVegMode && (
          <div className="flex flex-col items-center">
            <div className="text-[#415227] font-medium text-sm leading-4 text-center mb-3">
              VEG <br />
              <span className="text-xs">Mode</span>
            </div>
            {vegModeOn?(
              <img onClick={()=>setVegModeOn(!vegModeOn)} className="w-10" src="https://www.shutterstock.com/image-vector/on-off-green-switch-button-260nw-2265132911.jpg" alt="" />
            ):(
            <svg
            onClick={()=>setVegModeOn(!vegModeOn)}
              width="41"
              height="21"
              viewBox="0 0 61 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="-mt-2"
            >
              <rect
                x="0.29"
                y="0.4"
                width="60.42"
                height="30.21"
                rx="15.1"
                fill="#D9D9D9"
              />
              <circle cx="15.4" cy="15.5" r="15.1" fill="white" />
              <circle
                cx="15.4"
                cy="15.5"
                r="14.7"
                stroke="#5BB834"
                strokeOpacity="0.18"
                strokeWidth="0.82"
              />
            </svg>)}
          </div>
        )}
      </div>

      {/* Carousel */}
      <div className="relative w-full h-[350px] flex items-center justify-center">
        {recommendedItems.map((item, index) => (
          <div
            key={item.id}
            className={`absolute w-56 transition-all duration-500 ease-in-out ${getPositionClass(
              index
            )}`}
          >
            <div className="bg-[#F2FFEC] rounded-2xl sm:rounded-3xl py-4 h-[280px] flex flex-col justify-between shadow-sm hover:shadow-xl transition-shadow relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-[35%]">
                <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-[216px] md:h-[216px] bg-white rounded-full flex items-center justify-center shadow-md overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              <div className="mt-auto pt-6 px-3 pb-3">
                <div className="">
                  <h3 className="text-lg sm:text-2xl font-medium text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {item.location}
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-base sm:text-2xl font-medium text-[#5BB834]">
                    {item.discount}
                  </p>
                  <button className="bg-green-100 w-8 h-8 sm:w-12 sm:h-12 flex justify-center items-center rounded-full hover:bg-green-200 transition-colors">
                    <img
                      src={share}
                      alt="Share"
                      className="w-4 h-4 sm:w-5 sm:h-5"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {recommendedItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === index ? "bg-green-600 scale-125" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Recommended;
