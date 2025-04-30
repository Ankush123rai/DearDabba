import { FaChevronDown, FaMinus } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { BsFillPersonFill } from "react-icons/bs";
import { MdOutlineDiscount } from "react-icons/md";
import Breadcrumb from "../../components/Breadcrumb";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";

const Page5 = () => {
  return (
    <div className="p-5">
      <Breadcrumb
        paths={[
          { label: "Lunch Box" },
          { label: "Group Order Flow", isActive: true },
        ]}
      />

      <div className="flex flex-col md:flex-row gap-[3rem] p-6">
        <div className="flex-1 p-4 md:p-8">
          <div className="flex justify-between items-center mb-4">
            <button className="flex items-center gap-2 border border-[#5BB834] text-[#2A334A]  py-2 px-4 rounded-lg">
              <GoPlus className="text-xl" /> Add People
            </button>
            <div className="text-red-500 font-bold">20 Mins Left</div>
          </div>

          <div className="mb-4">
            <h1 className="text-2xl font-bold text-[#415227]">
              Nupur’s Group Order
            </h1>
            <p className="text-gray-400 text-sm">From Lunch Box</p>
          </div>

          <div className="bg-white text-black rounded-lg p-4 mb-6 flex justify-between items-center">
            <div>
              <p className="text-gray-600 text-sm font-semibold">
                Delivery Address
              </p>
              <p className="truncate">Posh Complex, Hatkesh Udyod Naga...</p>
            </div>
            <FaChevronDown className="text-gray-500" />
          </div>
          <div className="mb-4">
            <div className="flex justify-between items-end">
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <img
                    src="https://media.istockphoto.com/id/1418260625/photo/headshot-portrait-beautiful-african-teenage-girl-posing-standing-indoor.jpg?s=612x612&w=0&k=20&c=RRaViSHTM-PPxBH_SmXGovajB6UJ5LDxk6AHfowDYI4="
                    alt="User"
                    className="w-10 h-10 rounded-full"
                  />

                  <h2 className="font-bold text-lg">Nupur (you)</h2>
                </div>
                <p className="text-gray-400 text-sm">0 Item Added</p>
              </div>

              <button className="flex items-center gap-1 text-green-400 font-semibold ml-auto">
                <GoPlus className="text-xl" /> Add Item
              </button>
            </div>

            <div className="flex justify-between items-center p-3 rounded-lg mb-2"><div className="flex items-center gap-2">
                <div className="w-4 h-4 border border-[#267F00] rounded-sm flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#267F00] rounded-full"></div>
                </div>
                <span className="text-xl">Aloo Tiki</span>
              </div>
              <span>₹150</span>
            </div>

            <div className="flex items-center gap-2 mb-2 bg-[#5BB8342E] rounded-lg w-[150px] justify-evenly p-2">
              <GoPlus className="text-xl" />
              <span className="text-xl">2</span>
              <FiMinus className="text-xl" />
            </div>

            <div className="bg-white text-black rounded-lg p-3 mb-4 border border-gray-300 ">
              <p className="text-lg ">Cooking Instauration</p>
              <p className="text-md text-gray-600">Please don’t add onions</p>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-end">
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <img
                    src="https://media.istockphoto.com/id/1418260625/photo/headshot-portrait-beautiful-african-teenage-girl-posing-standing-indoor.jpg?s=612x612&w=0&k=20&c=RRaViSHTM-PPxBH_SmXGovajB6UJ5LDxk6AHfowDYI4="
                    alt="User"
                    className="w-10 h-10 rounded-full"
                  />

                  <h2 className="font-bold text-lg">Buku</h2>
                </div>
                <p className="text-gray-400 text-sm">2 Item Added</p>
              </div>
            </div>

            <div className="flex justify-between items-center p-3 rounded-lg mt-3">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border border-[#267F00] rounded-sm flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#267F00] rounded-full"></div>
                </div>
                <span className="text-xl">Aloo Tiki</span>
              </div>

              <span>₹150</span>
            </div>
          </div>

          {/* Coupon View */}
          <div className="bg-green-100 text-black rounded-lg p-4 flex items-center justify-between cursor-pointer">
            <div className="flex items-center gap-2">
              <MdOutlineDiscount className="text-xl" />
              <span className="font-semibold">View All Coupons</span>
            </div>
            <FaChevronDown />
          </div>
        </div>

        <div className="bg-[#5BB8342E] w-full md:w-[500px] h-[600px] p-7 flex flex-col rounded-2xl md:rounded-none text-black">
          <div className="flex justify-between items-center mb-4">
            <button className="bg-green-700 text-white px-4 py-2 rounded-full font-bold">
              Order Details <FaChevronDown className="inline ml-1" />
            </button>
            <button className="bg-white text-green-700 px-4 py-2 rounded-full font-bold">
              Place Order ₹250
            </button>
          </div>

          <div className='bg-white border border-[rgba(42,51,74,0.15)] rounded-3xl p-4 mb-4'>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full">
            <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M8.20222 3.8916H30.0846C31.811 3.8916 33.2106 5.29118 33.2106 7.01765V30.7043C33.2106 32.8694 31.0628 34.3789 29.0257 33.6455L26.5846 32.7668C25.8219 32.4922 24.9823 32.5246 24.243 32.8573L20.4262 34.5748C19.6104 34.942 18.6764 34.942 17.8606 34.5748L14.0438 32.8573C13.3045 32.5246 12.4649 32.4922 11.7022 32.7668L9.26108 33.6455C7.22395 34.3789 5.07617 32.8694 5.07617 30.7043V7.01765C5.07617 5.29118 6.47575 3.8916 8.20222 3.8916ZM12.8913 10.5345C12.2439 10.5345 11.719 11.0593 11.719 11.7067C11.719 12.3542 12.2439 12.879 12.8913 12.879H19.1434C19.7908 12.879 20.3157 12.3542 20.3157 11.7067C20.3157 11.0593 19.7908 10.5345 19.1434 10.5345H12.8913ZM12.8913 16.7866C12.2439 16.7866 11.719 17.3114 11.719 17.9588C11.719 18.6063 12.2439 19.1311 12.8913 19.1311H25.3955C26.0429 19.1311 26.5678 18.6063 26.5678 17.9588C26.5678 17.3114 26.0429 16.7866 25.3955 16.7866H12.8913ZM12.8913 23.0387C12.2439 23.0387 11.719 23.5635 11.719 24.2109C11.719 24.8584 12.2439 25.3832 12.8913 25.3832H25.3955C26.0429 25.3832 26.5678 24.8584 26.5678 24.2109C26.5678 23.5635 26.0429 23.0387 25.3955 23.0387H12.8913Z" fill="#5BB834"/>
            </svg>
          </div>
          <div>
            <div className="text-gray-600">To pay ₹250 </div>
            <div className="text-xl font-medium text-[#5BB834]">₹20 saved on the total!</div>
          </div>
        </div>

        <div className="border-t border-[rgba(42,51,74,0.15)] my-4"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
          <div className="space-y-3">
            <div className="text-gray-600">Total Item</div>
            <div className="text-gray-600 underline decoration-dashed">Delivery fee | 1.2 km</div>
            <div className="text-sm text-gray-600">Order above ₹250 to save ₹10</div>
            <div className="text-gray-600 underline decoration-dashed">Extra discount for you</div>
          </div>
          <div className="text-right space-y-3">
            <div className="text-gray-600">₹₹250</div>
            <div className="text-gray-600">₹₹250</div>
            <div className="h-5"></div>
            <div className="text-[#5BB834]">-₹₹250</div>
          </div>
        </div>

        <div className="border-t border-[rgba(42,51,74,0.15)] my-4"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
          <div className="space-y-3">
            <div className="text-gray-600">Delivery tip</div>
            <div className="text-gray-600 underline decoration-dashed">Platform fee</div>
            <div className="text-gray-600 underline decoration-dashed">GST & Restaurant charges</div>
          </div>
          <div className="text-right space-y-3">
            <div className="text-[#9747FF] cursor-pointer">
              Add tip
            </div>
            <div className="text-gray-600">₹10</div>
            <div className="text-gray-600">₹47</div>
          </div>
        </div>

        <div className="border-t border-[rgba(42,51,74,0.15)] my-4"></div>

        <div className="flex justify-between items-center">
          <div className="text-xl font-semibold text-[#2A334A]">To Pay</div>
          <div className="text-xl font-semibold text-[#2A334A]">₹250</div>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Page5;
