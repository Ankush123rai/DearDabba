import { BiFoodTag } from 'react-icons/bi';
import { FaStar, FaPlus, FaShareAlt } from 'react-icons/fa';
import { FaArrowRotateLeft } from 'react-icons/fa6';

interface ItemProps{
  isReOrder: boolean
}

const FoodItemCardSmall = ({isReOrder=false}:ItemProps) => {
  return (
    <div className="w-full max-w-[400px] h- sm:h-[180px] bg-[#F2FFEC] border border-[rgba(91,184,52,0.18)] rounded-2xl shadow-sm relative flex flex-col md:flex-row transition-all duration-300 hover:shadow-md">
      <div className="w-full md:w-[40%] bg-white rounded-2xl shadow-2xl">
        <div className="relative pb-[100%] bottom-8"> 
          <img
            src='https://png.pngtree.com/png-clipart/20240810/original/pngtree-best-food-samosa-png-image_15743214.png'
            alt="Samosa"
            className="absolute w-full h-full object-cover"
          />
        </div>
        
        <div className="p-3 text-center relative bottom-12">
          <div className="flex justify-center items-center gap-2">
            <span className="text-sm text-gray-500 line-through">₹150</span>
            <span className="text-lg font-medium">₹105</span>
          </div>
          <div className="flex justify-center items-center gap-2 text-xs text-gray-500 mt-1">
            <span>15 mins</span>
            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
            <span>1 km</span>
          </div>
          <span className="inline-block mt-1 text-[#5BB834] font-medium text-sm">
            30% OFF
          </span>
        </div>
      </div>

      <div className="w-full md:w-[60%] p-4 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-semibold text-gray-800">Samosa</h2>
            <BiFoodTag className="text-[green] text-2xl" />
          </div>

          <p className="text-xs text-gray-500 line-clamp-2 mb-2">
            Crispy pastry filled with spiced potatoes and peas, served with chutney.
          </p>

          <div className="flex items-center gap-1.5">
            <div className="flex gap-0.5">
              {[...Array(4)].map((_, i) => (
                <FaStar key={i} className="text-[#5BB834] text-xs" />
              ))}
              <FaStar className="text-gray-300 text-xs" />
            </div>
            <span className="text-xs text-gray-500">(334 reviews)</span>
          </div>
        </div>

        <div className="flex justify-between items-center ">
          {isReOrder?(
            <button className="flex items-center gap-1 bg-[rgba(91,184,52,0.1)] hover:bg-[rgba(91,184,52,0.2)] border border-[#267F00] rounded-lg px-3 py-1.5 transition-colors">
            <FaArrowRotateLeft  className="text-[#267F00] text-xs"/>
            <span className="text-[#267F00] text-xs">Re Order</span>
          </button>
          ):
          (<button className="flex items-center gap-1 bg-[rgba(91,184,52,0.1)] hover:bg-[rgba(91,184,52,0.2)] border border-[#267F00] rounded-lg px-3 py-1.5 transition-colors">
            <FaPlus className="text-[#267F00] text-xs" />
            <span className="text-[#267F00] text-xs">Add</span>
          </button>)}

          <div className="flex gap-3">
            <button className="text-gray-400 hover:text-[#5BB834] transition-colors">
              <svg width="16" height="16" viewBox="0 0 18 21" fill="currentColor">
                <path
                  opacity="0.4"
                  d="M0.898 19.249V2.943C0.898 1.78 1.84 0.838 3.003 0.838H15.634c1.163 0 2.105.942 2.105 2.105L17.739 19.25c0 1.315-1.514 2.054-2.55 1.245l-4.575-4.165c-.761-.594-1.83-.594-2.591 0l-4.575 4.165c-1.037.81-2.55.07-2.55-1.245z"
                />
                <path
                  d="M3.003 0.838H15.634c1.163 0 2.105.942 2.105 2.105V6.1H0.898V2.943c0-1.163.942-2.105 2.105-2.105z"
                />
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