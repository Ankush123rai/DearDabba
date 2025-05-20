import {FaShareAlt, FaStar } from "react-icons/fa";

const DinningFoodCard = () => {
  return (
      <div className="w-[350px] cursor-pointer max-w-sm bg-white rounded-xl shadow-md overflow-hidden text-sm text-gray-700">
        <img
          src="https://www.shutterstock.com/image-photo/baked-fried-salmon-salad-paleo-600nw-1907858902.jpg"
          alt="kitchen image"
          className="w-full h-36 object-cover"
        />

        <div className="p-4">
          <div className="flex justify-between">
            <div className="w-3/4">
              <h3 className="text-md font-semibold text-gray-800 mb-1">Dimsum wu</h3>
              <p className="text-xs text-gray-500 leading-tight mb-1">
                1Borivali West, Mumbai 
              </p>
              <p className="text-[10px] text-gray-500 mb-1">
                Restaurant • Dining • ₹250 for one
              </p>
              <p className="text-xs text-green-600">15 mins • 1 km</p>
              <p className="text-lg">
                <span className="text-green-600 font-medium">30% OFF</span>
              </p>
            </div>

            {/* Icons & Rating */}
            <div className="text-right">
              <div className="flex gap-2 justify-end">
                <button className="text-gray-400 hover:text-green-600 transition-colors">
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
                <button className="text-gray-400 hover:text-green-600 transition-colors">
                  <FaShareAlt />
                </button>
              </div>
              <p className="text-green-600 bg-[#F6FFFF] mt-1 p-1 rounded-md text-xs font-semibold flex items-center justify-end gap-1">
                4.1 <FaStar className="text-green-400" />
              </p>
            </div>
          </div>
        </div>
      </div>
  );

};

export default DinningFoodCard;
