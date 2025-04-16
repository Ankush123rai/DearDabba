import restaurant from "../assets/images/restaurant.png";
import tiffin from "../assets/images/tiffin.png";
import Service from "../assets/images/service.png";
import chef from "../assets/images/chef.png";
import share from "../assets/images/share.png";

const section = [
  {
    image: restaurant,
    title: "Restaurants",
  },
  {
    image: tiffin,
    title: "Tiffin Services",
  },
  {
    image: Service,
    title: "Catering services",
  },
  {
    image: chef,
    title: "Home chefs",
  },
];

const recommendedItems = [
  {
    image:
      "https://s3-ap-south-1.amazonaws.com/betterbutterbucket-silver/femina-shiraz1483418163586b2a32afe74.jpeg",
    title: "Lunch Box",
    discount: "30% OFF",
    location: "Pune, Maharashtra",
  },
  {
    image:
      "https://s3-ap-south-1.amazonaws.com/betterbutterbucket-silver/femina-shiraz1483418163586b2a32afe74.jpeg",
    title: "Lunch Box",
    discount: "30% OFF",
    location: "Pune, Maharashtra",
  },
  {
    image:
      "https://s3-ap-south-1.amazonaws.com/betterbutterbucket-silver/femina-shiraz1483418163586b2a32afe74.jpeg",
    title: "Lunch Box",
    discount: "30% OFF",
    location: "Pune, Maharashtra",
  },
];

const exploreItems = [
  {
    title: "Healthy",
    image: "", 
  },
  {
    title: "Dining",
    image: "", 
  },
  {
    title: "Offers",
    image: "", 
  },
  {
    title: "Food Events",
    image: "", 
  },
];

const Recommended = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 w-full max-w-[950px] sm:mt-0 mt-3">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12">
        {section.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-center justify-center p-3 sm:p-4 gap-2 bg-white border border-opacity-15 border-gray-700 rounded-xl sm:rounded-2xl"
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
        <h2 className="text-xl text-center sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-[5rem] text-[#415227]">
          Recommended
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
          {recommendedItems.map((item, index) => (
            <div
              key={index}
              className={`relative w-full sm:w-1/3 max-w-[200px] ${
                index === 1 ? "sm:scale-110 z-10" : "sm:opacity-90"
              }`}
            >
              <div className="bg-[#F2FFEC] rounded-2xl sm:rounded-3xl p-4 h-[280px] sm:h-[320px] flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-[30%]">
                  <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 bg-white rounded-full flex items-center justify-center shadow-md overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="mt-auto pt-6 px-3 pb-3">
                  <div className="mb-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500">
                      {item.location}
                    </p>
                  </div>

                  <div className="flex justify-between items-center">
                    <p className="text-base sm:text-lg font-bold text-[#5BB834]">
                      {item.discount}
                    </p>
                    <button className="bg-green-100 w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center rounded-full hover:bg-green-200 transition-colors">
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

        <div className="flex justify-center items-center gap-2">
          {[1, 2, 3, 4, 5].map((dot, index) => (
            <div
              key={index}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                index === 1 ? "bg-[#5BB834] sm:w-4 sm:h-4" : "bg-gray-200"
              }`}
            ></div>
          ))}
        </div>
      </div>

      <div className="mb-8 sm:mb-12">
        <h2 className="text-xl text-center sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 text-[#415227]">
          Explore
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {exploreItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-3 sm:p-4 gap-2 bg-white border border-opacity-15 border-gray-700 rounded-xl sm:rounded-2xl"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gray-200 rounded-full mb-1 sm:mb-2"></div>
              <p className="text-sm sm:text-base md:text-lg font-medium text-center text-[#415227]">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommended;
