import { FaEllipsisH, FaShareAlt, FaStar } from "react-icons/fa";
import Breadcrumb from "../../components/Breadcrumb";
import { useNavigate, useParams } from "react-router-dom";
import LocationSearchBar from "../../components/LocationSearchBar";
import { PiMapPinLineDuotone } from "react-icons/pi";
import { IoMdCall } from "react-icons/io";
import { FaCheckSquare } from "react-icons/fa";
import { useState } from "react";
import menucard from '../../assets/images/menucard.png'
import Footer from "../../components/Footer";

const tabs = ["Menu", "Gallery", "Reviews", "About"];


const popularDishes = [
  "Kanda Poha",
  "Idli Sambhar",
  "Sabudana Khichdi",
  "Misal Pav",
];

const images = [
    { id: 1, src: "https://media.gettyimages.com/id/836012728/photo/holiday-turkey-dinner.jpg?s=612x612&w=gi&k=20&c=D3w14fuRLN_NDX9ad14cKpC4PxDfd4GBWcTccePxTU8=",},
    { id: 2, src: "https://plus.unsplash.com/premium_photo-1676690615607-e3a0da62b191?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D" },
    { id: 3, src: "/https://plus.unsplash.com/premium_photo-1681841594224-ad729a249113?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlubmVyfGVufDB8fDB8fHww" },
    { id: 4, src: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 5, src: "https://images.unsplash.com/photo-1611765083444-a3ce30f1c885?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRpbm5lcnxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 6, src: "https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 7, src: "https://images.unsplash.com/photo-1595440432061-e6c25f9feaf0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGRpbm5lcnxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 8, src: "https://plus.unsplash.com/premium_photo-1676690609665-81a13b514110?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8" },
    
  ];

const DinningDetail = () => {
  const { id } = useParams();
    const [activeTab, setActiveTab] = useState("Menu");

  const navigate = useNavigate();
  return (
    <div>
      <Breadcrumb
        paths={[{ label: "Lunch Box" }, { label: "Dinning", isActive: true }]}
        onBack={() => navigate(-1)}
      />
      <LocationSearchBar isMic={true} />
      <div className=" cursor-pointer mt-6 bg-white rounded-xl shadow-md  mx-3 sm:mx-[3rem] text-sm text-gray-700">
        <img
          src="https://www.shutterstock.com/image-photo/baked-fried-salmon-salad-paleo-600nw-1907858902.jpg"
          alt="kitchen image"
          className="w-full h-[450px] object-cover rounded-t-2xl"
        />

        <div className="p-4">
          <div className="flex justify-between">
            <div className="w-3/4">
              <h3 className="text-2xl font-semibold text-gray-800 mb-1">
                Dimsum wu
              </h3>
              <p className="text-lg text-gray-500 leading-tight mb-1">
                12345 Oceanview Boulevard, Suite 6789, Downtown District, Sunset
                City, California, 90210, United States of America
              </p>
              <p className="text-sm text-gray-500 mb-1">
                Restaurant • Dining • ₹250 for one
              </p>
              <p className="text-md text-green-600">15 mins • 1 km</p>
              <p className="text-lg">
                <span className="text-green-600 ">Open -</span> 11AM -11:30PM
              </p>
            </div>

            <div className="text-right">
              <div className="flex gap-5 justify-end">
                <button className="text-gray-400 hover:text-green-600 transition-colors">
                  <svg
                    width="26"
                    height="26"
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
                <button className="text-gray-400 text-2xl hover:text-green-600 transition-colors">
                  <FaShareAlt />
                </button>
              </div>
              <p className="text-green-600 bg-[#F6FFFF] mt-1 p-1 rounded-md text-lg font-semibold flex items-center justify-end gap-1">
                4.1 <FaStar className="text-green-400 text-lg" />
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-5">
            <div className="flex gap-4">
              <button className="bg-[#CFFFBB2E] text-lg rounded-md text-green-500 px-3 py-1">
                <PiMapPinLineDuotone className="text-green-500 mr-1 inline-block" />
                Directions
              </button>
              <button className="bg-[#CFFFBB2E] text-lg rounded-md text-green-500 px-3 py-1">
                <IoMdCall className="text-green-500 mr-1 inline-block" />
                Call Now
              </button>
              <button className="bg-[#CFFFBB2E] text-lg rounded-md text-green-500 px-3 py-1">
                <FaShareAlt className="text-green-500 mr-1 inline-block" />
                Share
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => navigate(`/dinning/${id}/booking`)}
               className="bg-[#5BB834] text-white rounded-lg p-5">
                Book a table
              </button>
              <button className="bg-[#5BB8342E] text-green-500 rounded-lg p-5">
                Pay Bill
              </button>
            </div>
          </div>
        </div>

        <div className="w-full max-w-6xl mx-auto px-4 py-8">

      <div className="flex justify-center items-center border-b border-gray-200 mb-8">
      <div className="flex items-center space-x-8 ">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 text-lg font-medium ${
              activeTab === tab
                ? "text-green-600 border-b-2 border-green-600"
                : "text-gray-500 hover:text-green-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      </div>

      {/* Tab Content */}
      {activeTab === "Menu" && (
        <div className="flex flex-col md:flex-row gap-8">

          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-gray-800 mb-1">Menu</h2>
            <p className="text-sm text-gray-500 mb-4">Last updated 4 Jan 2025</p>
            <img
              src={menucard} 
              alt="Menu"
              className="rounded-xl border shadow-md"
            />
          </div>


          <div className="flex-1">
            <h2 className="text-xl font-semibold text-green-800 mb-4">
              Popular Dishes
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {popularDishes.map((dish) => (
                <div key={dish} className="flex items-center space-x-2 text-green-900">
                  <FaCheckSquare className="text-green-600" />
                  <span>{dish}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {activeTab === "Gallery" && (
       <div className="max-w-5xl mx-auto px-4 py-10">
       <div className="sm:max-w-lg max-w-5xl mx-auto flex justify-between items-center mb-6 flex-wrap gap-3">
         <h2 className="text-2xl font-semibold text-green-900">Gallery</h2>
         <a href="#" className="text-green-700 underline text-lg">View All</a>
       </div>
     
       <div className="flex flex-col justify-center lg:flex-row gap-5 mb-6">
         <div className="w-full lg:w-[39%] h-[380px]">
           <img
             src={images[0].src}
             alt="Large Dish"
             className="w-full h-full object-cover rounded-2xl"
           />
         </div>
     
         <div className="flex lg:flex-col flex-row gap-5 w-full lg:w-[20%]">
           <div className="h-[180px] w-full lg:w-[180px]">
             <img
               src={images[1].src}
               alt="Top Right 1"
               className="w-full h-full object-cover rounded-2xl"
             />
           </div>
           <div className="h-[180px] w-full lg:w-[180px]">
             <img
               src="https://plus.unsplash.com/premium_photo-1672199330043-d6d2690229e9?w=500&auto=format&fit=crop&q=60"
               alt="Top Right 2"
               className="w-full h-full object-cover rounded-2xl"
             />
           </div>
         </div>
       </div>
     
       <div className="flex gap-6 justify-center">
         {[images[3], images[4], images[6], images[5]].map((img, index) => (
           <div key={index} className="w-full sm:w-[130px] aspect-square">
             <img
               src={img.src}
               alt={`Bottom ${index + 1}`}
               className="w-full h-full object-cover rounded-2xl"
             />
           </div>
         ))}
       </div>
     </div>
      )}

      {activeTab==="Reviews" &&(
       <section className="py-10 px-4 bg-white relative">
       <div className="max-w-2xl mx-auto relative z-10">
         {/* Header */}
         <div className="flex justify-between items-center mb-[4rem]">
           <h2 className="text-2xl font-semibold text-green-800">Reviews</h2>
           <a href="#" className="text-green-700 underline font-medium">View All</a>
         </div>
 
         {/* Background shapes */}
         <div className="absolute top-12 left-10 w-28 h-28 bg-green-100 rounded-2xl z-0 mt-6"></div>
         <div className="absolute top-[33px] right-[-2rem] w-32 h-[8rem] bg-green-100 rounded-2xl z-0"></div>
         <div className="absolute bottom-[-1.5rem] left-[-4rem] w-56 h-[7rem] bg-green-100 rounded-2xl z-0"></div>
 
         {/* Card */}
         <div className="relative flex items-center z-10 bg-green-500 h-[200px] rounded-2xl">
           {/* Image */}
           <div className="relative z-20 rounded-xl ml-[3rem] mb-[39px] overflow-hidden w-40 h-60 shadow-lg">
             <img
               src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80"
               alt="Reviewer"
               className="w-full h-full object-cover"
             />
           </div>
 
           {/* Green box */}
           <div className="ml-[10px] text-white rounded-xl p-6 flex-1 relative z-10">
             <div className="flex items-center text-yellow-300 mb-2">
               {[...Array(5)].map((_, i) => (
                 <FaStar key={i} className="mr-1" />
               ))}
               <span className="ml-2 text-sm text-white">5.0 rating</span>
             </div>
             <p className="text-sm mb-4">
               Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
             </p>
             <div>
               <p className="font-semibold">Elisa Grant</p>
               <p className="text-sm">Legacy Solutions Engineer</p>
             </div>
             {/* Ellipsis */}
             <FaEllipsisH className="absolute top-4 right-4 text-white cursor-pointer" />
           </div>
         </div>
 
         {/* Pagination Dots */}
         <div className="flex justify-center mt-6 space-x-2">
           <span className="w-3 h-3 bg-green-600 rounded-full"></span>
           <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
           <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
           <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
         </div>
       </div>
     </section>
      )}

      {activeTab ==="About" &&(
        <div>
          <div className="mb-4">
            <p className="text-[#415227] text-xl font-medium mb-3">About</p> 
            <p className="text-slate-600">1600 for two</p>
            <p className="text-slate-600">Pizza. Burger, Fast Food, Coffee</p>
          </div>

          <div>
            <p className="text-[#415227] text-xl font-medium mb-3">Available facilities</p> 
            <p className="text-slate-600">Home Delivery</p>
            <p className="text-slate-600">Takeaway Available</p>
            <p className="text-slate-600">Indoor Seating</p>
            <p className="text-slate-600">Outdoor Seating</p>
            <p className="text-slate-600">Brunch</p>
            <p className="text-slate-600">Valet Parking Aval</p>
          </div>

          

        </div>
      )}
    </div>
      </div>
      <Footer/>
    </div>
  );
};

export default DinningDetail;
