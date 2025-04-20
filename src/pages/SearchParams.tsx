
import { useParams } from 'react-router-dom'

import Breadcrumb from '../components/Breadcrumb'
import { useNavigate } from 'react-router-dom'
import LocationSearchBar from '../components/LocationSearchBar'
import { FaStar } from 'react-icons/fa'
import indianChilli from '../assets/images/indian.png'
import Recommended from '../components/Recommended'
import FoodItemCard from '../components/FoodItemCard'
import Footer from '../components/Footer'

const SearchParams = () => {
    const { name } = useParams()
    const navigate = useNavigate();
  return (
    <div className="mx-4 md:mx-8">
      <Breadcrumb
        paths={[
          { label: 'Home', },
          { label: 'Search', },
          { label: name || '', isActive: true },
        ]}
        onBack={() => navigate(-1)}
      />
      <LocationSearchBar isMic={true}/>

      <div className="sm:mt-10 mt-14 flex justify-between">
        <div className="flex flex-wrap justify-center gap-4 md:gap-10 mb-4">
            <button className='bg-[#5BB8342E] rounded-lg py-2 px-4 border-none'>Schedule order </button>
            <button className='bg-[#5BB8342E] rounded-lg py-2 px-4 border-none'>Group Order</button>
        </div>
        <button className='bg-[#5BB8342E] rounded-lg py-2 px-2 border-none'>menu</button>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center md:items-start p-4 md:p-6 max-w-6xl mx-auto mt-5">
     
      <div className="flex justify-center items-center mb-4 md:mb-0 md:mr-6">
        <img
          src={indianChilli}
          alt="Restaurant Logo"
          className="w-32 h-32 md:w-44 md:h-44 rounded-full border border-green-400"
        />
      </div>

      <div className="flex flex-col flex-grow space-y-2">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#415227]">Ramji's</h2>
        <p className="text-gray-500 text-base md:text-lg">Pune, Maharashtra</p>

        <div className="flex flex-wrap items-center text-gray-500 text-sm md:text-base space-x-2">
          <span>Restaurant</span>
          <span className="w-1 h-1 bg-gray-400 rounded-full inline-block"></span>
          <span>Bar</span>
          <span className="w-1 h-1 bg-gray-400 rounded-full inline-block"></span>
          <span>₹50 for one</span>
        </div>

        <div className="flex flex-wrap items-center text-green-700 text-sm md:text-base space-x-2">
          <span>15 mins</span>
          <span className="w-1 h-1 bg-green-700 rounded-full inline-block"></span>
          <span>1 km</span>
        </div>
      </div>

      {/* Rating Section */}
      <div className="flex justify-center items-center mt-4 md:mt-0">
        <div className="flex items-center bg-green-500 text-white text-lg font-medium px-3 py-1 rounded-xl space-x-2">
          <span>4.1</span>
          <FaStar className="text-white opacity-70" size={20} />
        </div>
      </div>
    </div>

    <Recommended title="Bestsellers of Ramji’s" />

    <div className="flex flex-col my-4 ">
        <div className="flex justify-between items-center my-4 ">
            <h2 className='text-[30px] font-semibold'>Your Order & collections</h2>
            <div>Mode</div>
        </div>
        <div className="flex flex-wrap gap-4 mt-4">
        <FoodItemCard/>
        <FoodItemCard/>
        </div>
    </div>

    <div className="flex mx-[6rem] items-center my-10 ">
        <div className="flex-grow border-t border-gray-500 p-2 mt-[16px]"></div>
        <span className="mx-8 text-[25px] font-bold text-[#415227]">Special offer @ ₹150</span>
        <div className="flex-grow border-t border-gray-500 p-2 mt-[16px]"></div>
      </div>

      <Footer/>
      
    </div>
  )
}

export default SearchParams
