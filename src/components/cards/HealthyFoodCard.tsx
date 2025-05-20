import { BiFoodTag } from "react-icons/bi";
import { FaShareAlt, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HeathlyFoodCard = () => {
  const navigate = useNavigate();
  return (
    
    <div
      onClick={() => navigate("/dinning/1")}
     className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer">
      <img
        src="https://www.shutterstock.com/image-photo/baked-fried-salmon-salad-paleo-600nw-1907858902.jpg" 
        alt="Jain Thali"
       className="w-full h-36 object-cover rounded-t-xl"
      />

      <div className="p-4">
        <div className="flex items-center justify-between gap-2 w-full px-3">
                <BiFoodTag
                  className="text-2xl text-green-800"
                />
                <div className="flex gap-3">
                  <button className="text-gray-400 hover:text-[#5BB834] transition-colors">
                    <svg width="16" height="16" viewBox="0 0 18 21" fill="currentColor">
                      <path
                        opacity="0.4"
                        d="M0.898 19.249V2.943C0.898 1.78 1.84 0.838 3.003 0.838H15.634c1.163 0 2.105.942 2.105 2.105L17.739 19.25c0 1.315-1.514 2.054-2.55 1.245l-4.575-4.165c-.761-.594-1.83-.594-2.591 0l-4.575 4.165c-1.037.81-2.55.07-2.55-1.245z"
                      />
                      <path d="M3.003 0.838H15.634c1.163 0 2.105.942 2.105 2.105V6.1H0.898V2.943c0-1.163.942-2.105 2.105-2.105z" />
                    </svg>
                  </button>
        
                  <button className="text-gray-400 hover:text-[#5BB834] transition-colors">
                              <FaShareAlt className="text-gray-400" />
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center px-3 pb-3">
                <div className="flex flex-col space-y-1 w-full">
                  <div className="flex justify-between items-center gap-2 w-full">
                  <div className="flex flex-col">
                  <span className="text-[12px] text-[#7D7D7D]">GYM khana </span>
                  <span className="text-lg font-medium text-[#415227]">Jain thali <span className="text-[#5BB834]">309 kcal</span></span>
                  </div>
                    <div className="bg-[#F6FFFF] rounded-md px-2 py-1 flex items-center gap-1">
                      <span className="text-[#5BB834] font-semibold text-sm">
                        4.1
                      </span>
                      <FaStar size={14} className="text-[#5BB834]" />
                    </div>
                  </div>
        
                  <div className="flex justify-between mt-4 text-center">
          <div>
            <p className="text-[#5BB834] font-semibold text-lg">11g</p>
            <p className="text-xs text-gray-500">Protein</p>
          </div>
          <div>
            <p className="text-[#5BB834] font-semibold text-lg">58g</p>
            <p className="text-xs text-gray-500">Carbs</p>
          </div>
          <div>
            <p className="text-[#5BB834] font-semibold text-lg">4g</p>
            <p className="text-xs text-gray-500">Fats</p>
          </div>
          <div>
            <p className="text-[#5BB834] font-semibold text-lg">8g</p>
            <p className="text-xs text-gray-500">Fiber</p>
          </div>
        </div>
                 
                </div>
              </div>

        <div className="mt-4 grid grid-cols-2 gap-5">
          <button className="text-[#5BB834] font-semibold text-lg bg-[#5BB83412] px-4 py-1 rounded-lg">
            ₹150
          </button>
          <button className="bg-[#5BB834] hover:bg-[#5BB834] text-white font-medium px-6 py-1.5 rounded-lg">
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeathlyFoodCard;
