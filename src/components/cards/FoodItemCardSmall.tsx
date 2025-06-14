import { FaStar, FaPlus, FaShareAlt } from "react-icons/fa";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

interface ItemProps {
  isReOrder: boolean;
}

const FoodItemCardSmall = ({ isReOrder = false }: ItemProps) => {
  const navigate = useNavigate();
  return (
    <div className="w-full max-w-[360px] h-auto md:h-[177px] bg-[#F2FFEC] border border-[rgba(91,184,52,0.18)] rounded-[20px] relative flex flex-col md:flex-row">
      <div className="w-full md:w-[150px] rounded-[20px] shadow-xl relative -top-[50px] md:top-0 md:left-0 md:translate-y-0 mb-[-40px] md:mb-0">
        <div className="w-[140px] h-[150px] relative bottom-[2rem] rounded-t-[20px] mx-auto">
          <img
            src="https://png.pngtree.com/png-clipart/20240810/original/pngtree-best-food-samosa-png-image_15743214.png"
            alt="Samosa"
            className="absolute w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col items-center relative bottom-[3rem] p-1 md:p-0">
          <div className="flex items-center">
            <span className="text-[12px] text-[#7D7D7D] line-through mr-2">
              ₹150
            </span>
            <span className="text-[18px] font-medium">₹150</span>
          </div>
          <div className="flex items-center text-[12px] gap-2">
            <span className="text-[#7D7D7D]">15 mins</span>
            <div className="w-2 h-2 bg-[#7D7D7D] rounded-full"></div>
            <span className="text-[12px] text-[#7D7D7D]">1 km</span>
          </div>
          <span className="text-[18px] text-[#5BB834] font-medium">
            30% OFF
          </span>
        </div>
      </div>

      {/* Content section */}
      <div className="flex flex-col justify-between p-3 md:p-4 flex-grow">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-[20px] font-semibold text-[#2A334A]">
              Aloo Tiki
            </h2>
            <div className="w-5 h-5 border-2 border-[#267F00] rounded-sm flex items-center justify-center">
              <div className="w-3 h-3 bg-[#267F00] rounded-full"></div>
            </div>
          </div>

          <p className="text-[13px] text-[#7D7D7D] leading-5 mt-1 line-clamp-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt...
          </p>

          <div className="flex items-center gap-2 mt-1.5">
            <div className="flex gap-1">
              {[...Array(4)].map((_, i) => (
                <FaStar key={i} className="text-[#5BB834] w-4 h-4" />
              ))}
              <FaStar className="text-[#CFCFCF] w-4 h-4" />
            </div>
            <span className="text-[13px] text-[#7D7D7D]">(334)</span>
          </div>
        </div>

        <div className="flex justify-between items-center ">
          {isReOrder ? (
            <button className="flex w-[90px] items-center gap-1 bg-[rgba(91,184,52,0.1)] hover:bg-[rgba(91,184,52,0.2)] border border-[#267F00] rounded-lg px-3 py-1.5 transition-colors">
              <FaArrowRotateLeft className="text-[#267F00] text-xs" />
              <span className="text-[#267F00] text-xs">Reorder</span>
            </button>
          ) : (
            <button className="flex items-center gap-1 bg-[rgba(91,184,52,0.1)] hover:bg-[rgba(91,184,52,0.2)] border border-[#267F00] rounded-lg px-3 py-1.5 transition-colors">
              <FaPlus className="text-[#267F00] text-xs" />
              <span className="text-[#267F00] text-xs">Add</span>
            </button>
          )}

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
              <FaShareAlt className="text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItemCardSmall;
