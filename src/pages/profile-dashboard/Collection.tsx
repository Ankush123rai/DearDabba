import { FaShareAlt, FaStar } from 'react-icons/fa'


const Collection = () => {
  return (
    <div className='grid grid-cols-2 gap-5'>
       {Array.from({length:4}).map((_, ind)=>(
        <div key={ind} className="bg-white w-[315px] h-[250px] rounded-2xl shadow">
              <img
                src="https://www.shutterstock.com/image-photo/baked-fried-salmon-salad-paleo-600nw-1907858902.jpg"
                alt="kitchen image"
                className="w-full h-32 object-cover rounded-lg"
              />
              <div className=" p-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-md font-semibold text-gray-800">
                    Lilly’s kitchen
                    </h3>
                    <p className="text-sm text-gray-500">Borivali West, Mumbai </p>
                    <p className="text-[9px] text-gray-500">Restaurant . Dinning . ₹250 for one</p>
                    <p className="text-sm text-green-600 mt-1">
                    15 mins  • 1km
                    </p>
                    <p className="text-md text-green-600 mt-1 font-medium"> 30% OFF</p>
                  </div>
                  <div className="text-right">
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
                    <p className="text-green-600 bg-[#F6FFFF] mt-1 p-1 rounded-s-md text-sm font-semibold flex items-center gap-1 justify-end">
                      4.1 <FaStar className="text-green-400" />
                    </p>
                  </div>
                </div>
        
               
              </div>
            </div>
            ))} 
    </div>
  )
}

export default Collection
