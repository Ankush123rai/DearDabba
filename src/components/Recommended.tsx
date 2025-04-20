import share from "../assets/images/share.png";


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

type RecommendedItem = {
  // image: string;
  title: string;        
  // discount: string;
  // location: string;
};

const Recommended = ({title}:RecommendedItem) => {
  return (
   

      <div className="mb-8 sm:mb-12">
        <h2 className="text-xl text-center sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-[5rem] text-[#415227]">
          {title}
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
          {recommendedItems.map((item, index) => (
            <div
              key={index}
              className={`relative w-full sm:w-1/3 max-w-[200px] ${
                index === 1 ? "sm:scale-110 z-10" : "sm:opacity-90"
              }`}
            >
              <div className="bg-[#F2FFEC] rounded-2xl sm:rounded-3xl p-4 h-[280px] sm:h-[250px] flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md transition-shadow">
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
        </div>
        

  
  );
};

export default Recommended;
