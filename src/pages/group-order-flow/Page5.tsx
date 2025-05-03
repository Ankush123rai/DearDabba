import { FaChevronDown } from "react-icons/fa";
import { MdOutlineDiscount } from "react-icons/md";
import Breadcrumb from "../../components/Breadcrumb";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import DeleteGroupModal from "../../components/modal/DeleteGroupModal";
import { useState } from "react";

const Page5 = () => {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    console.log("Group deleted");
    setShowModal(false);
  };
  return (
    <div className="p-3 md:p-5">
      <div className="flex justify-between items-center mb-4">
        <Breadcrumb
          paths={[
            { label: "Lunch Box" },
            { label: "Group Order Flow", isActive: true },
          ]}
        />
        <button
          className="w-[200px] border px-4 py-3 rounded-lg"
          onClick={() => setShowModal(true)}
        >
          Delete group
        </button>
      </div>

      <div className=" flex items-center flex-col gap-3 mb-4">
        <div className=" max-w-3xl">
        <p className="text-lg text-green-500 text-center mb-3">This group has split billing system </p>
        <p className="text-[12px] text-gray-800 text-center">
          Once you place an order, every member in this group (including you)
          will receive a notification for payment. After they pay their bill in
          given time, the order will proceed for preparation.
        </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 md:gap-[3rem] p-3 md:p-6">
        <div className="flex-1 p-2 md:p-4 lg:p-8 order-2 lg:order-1">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-2">
            <button className="flex items-center gap-2 border border-[#5BB834] text-[#2A334A] py-2 px-4 rounded-lg w-full sm:w-auto justify-center">
              <GoPlus className="text-xl" /> Add People
            </button>
            <div className="text-red-500 font-bold w-full sm:w-auto text-center sm:text-right">
              20 Mins Left
            </div>
          </div>

          <div className="mb-4">
            <h1 className="text-xl md:text-2xl font-bold text-[#415227]">
              Nupur's Group Order
            </h1>
            <p className="text-gray-400 text-sm">From Lunch Box</p>
          </div>

          <div className="bg-white text-black rounded-lg p-3 md:p-4 mb-6 flex justify-between items-center">
            <div className="overflow-hidden">
              <p className="text-gray-600 text-sm font-semibold">
                Delivery Address
              </p>
              <p className="truncate">Posh Complex, Hatkesh Udyod Naga...</p>
            </div>
            <FaChevronDown className="text-gray-500 flex-shrink-0" />
          </div>

          <div className="mb-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2">
              <div className="flex-1">
                <div className="flex items-center gap-2 md:gap-4 mb-2">
                  <img
                    src="https://media.istockphoto.com/id/1418260625/photo/headshot-portrait-beautiful-african-teenage-girl-posing-standing-indoor.jpg?s=612x612&w=0&k=20&c=RRaViSHTM-PPxBH_SmXGovajB6UJ5LDxk6AHfowDYI4="
                    alt="User"
                    className="w-8 h-8 md:w-10 md:h-10 rounded-full"
                  />
                  <h2 className="font-bold text-base md:text-lg">
                    Nupur (you)
                  </h2>
                </div>
                <p className="text-gray-400 text-sm">0 Item Added</p>
              </div>

              <button className="flex items-center gap-1 text-green-400 font-semibold ml-0 sm:ml-auto">
                <GoPlus className="text-xl" /> Add Item
              </button>
            </div>

            <div className="flex justify-between items-center p-3 rounded-lg mb-2">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border border-[#267F00] rounded-sm flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#267F00] rounded-full"></div>
                </div>
                <span className="text-base md:text-xl">Aloo Tiki</span>
              </div>
              <span>₹150</span>
            </div>

            <div className="flex items-center gap-2 mb-2 bg-[#5BB8342E] rounded-lg w-[120px] md:w-[150px] justify-evenly p-2">
              <GoPlus className="text-lg md:text-xl" />
              <span className="text-lg md:text-xl">2</span>
              <FiMinus className="text-lg md:text-xl" />
            </div>

            <div className="bg-white text-black rounded-lg p-3 mb-4 border border-gray-300">
              <p className="text-base md:text-lg">Cooking Instruction</p>
              <p className="text-sm md:text-md text-gray-600">
                Please don't add onions
              </p>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2">
              <div className="flex-1">
                <div className="flex items-center gap-2 md:gap-4 mb-2">
                  <img
                    src="https://media.istockphoto.com/id/1418260625/photo/headshot-portrait-beautiful-african-teenage-girl-posing-standing-indoor.jpg?s=612x612&w=0&k=20&c=RRaViSHTM-PPxBH_SmXGovajB6UJ5LDxk6AHfowDYI4="
                    alt="User"
                    className="w-8 h-8 md:w-10 md:h-10 rounded-full"
                  />
                  <h2 className="font-bold text-base md:text-lg">Buku</h2>
                </div>
                <p className="text-gray-400 text-sm">2 Item Added</p>
              </div>
            </div>

            <div className="flex justify-between items-center p-3 rounded-lg mt-3">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border border-[#267F00] rounded-sm flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#267F00] rounded-full"></div>
                </div>
                <span className="text-base md:text-xl">Aloo Tiki</span>
              </div>
              <span>₹150</span>
            </div>
          </div>

          {/* Coupon View */}
          <div className="bg-green-100 text-black rounded-lg p-3 md:p-4 flex items-center justify-between cursor-pointer">
            <div className="flex items-center gap-2">
              <MdOutlineDiscount className="text-lg md:text-xl" />
              <span className="font-semibold text-sm md:text-base">
                View All Coupons
              </span>
            </div>
            <FaChevronDown />
          </div>
        </div>

        {/* Right Column - Order Summary */}
        <div className="bg-[#5BB8342E] w-full lg:w-[400px] xl:w-[480px] h-auto lg:h-[600px] p-4 md:p-7 flex flex-col rounded-2xl lg:rounded-none text-black order-1 lg:order-2 mb-4 lg:mb-0">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 mb-4 mx-2">
            <button className="bg-[#5BB8342E] text-black px-4 py-2 rounded-lg w-full sm:w-auto">
              Order Details <FaChevronDown className="inline ml-1" />
            </button>
            <button className="text-white bg-[#5BB834] px-4 py-2 rounded-lg w-full sm:w-auto">
              Place Order ₹250
            </button>
          </div>

          <div className="bg-white border border-[rgba(42,51,74,0.15)] rounded-2xl xl:rounded-3xl p-3 md:p-4 mb-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full">
                <svg
                  width="38"
                  height="39"
                  viewBox="0 0 38 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.20222 3.8916H30.0846C31.811 3.8916 33.2106 5.29118 33.2106 7.01765V30.7043C33.2106 32.8694 31.0628 34.3789 29.0257 33.6455L26.5846 32.7668C25.8219 32.4922 24.9823 32.5246 24.243 32.8573L20.4262 34.5748C19.6104 34.942 18.6764 34.942 17.8606 34.5748L14.0438 32.8573C13.3045 32.5246 12.4649 32.4922 11.7022 32.7668L9.26108 33.6455C7.22395 34.3789 5.07617 32.8694 5.07617 30.7043V7.01765C5.07617 5.29118 6.47575 3.8916 8.20222 3.8916ZM12.8913 10.5345C12.2439 10.5345 11.719 11.0593 11.719 11.7067C11.719 12.3542 12.2439 12.879 12.8913 12.879H19.1434C19.7908 12.879 20.3157 12.3542 20.3157 11.7067C20.3157 11.0593 19.7908 10.5345 19.1434 10.5345H12.8913ZM12.8913 16.7866C12.2439 16.7866 11.719 17.3114 11.719 17.9588C11.719 18.6063 12.2439 19.1311 12.8913 19.1311H25.3955C26.0429 19.1311 26.5678 18.6063 26.5678 17.9588C26.5678 17.3114 26.0429 16.7866 25.3955 16.7866H12.8913ZM12.8913 23.0387C12.2439 23.0387 11.719 23.5635 11.719 24.2109C11.719 24.8584 12.2439 25.3832 12.8913 25.3832H25.3955C26.0429 25.3832 26.5678 24.8584 26.5678 24.2109C26.5678 23.5635 26.0429 23.0387 25.3955 23.0387H12.8913Z"
                    fill="#5BB834"
                  />
                </svg>
              </div>
              <div>
                <div className="text-gray-600 text-sm md:text-base">
                  To pay ₹250
                </div>
                <div className="text-lg md:text-xl font-medium text-[#5BB834]">
                  ₹20 saved on the total!
                </div>
              </div>
            </div>

            <div className="border-t border-[rgba(42,51,74,0.15)] my-3 md:my-4"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
              <div className="space-y-2 md:space-y-3">
                <div className="text-gray-600 text-sm md:text-base">
                  Total Item
                </div>
                <div className="text-gray-600 text-sm md:text-base underline decoration-dashed">
                  Delivery fee | 1.2 km
                </div>
                <div className="text-xs md:text-sm text-gray-600">
                  Order above ₹250 to save ₹10
                </div>
                <div className="text-gray-600 text-sm md:text-base underline decoration-dashed">
                  Extra discount for you
                </div>
              </div>
              <div className="text-right space-y-2 md:space-y-3">
                <div className="text-gray-600 text-sm md:text-base">₹250</div>
                <div className="text-gray-600 text-sm md:text-base">₹250</div>
                <div className="h-4 md:h-5"></div>
                <div className="text-[#5BB834] text-sm md:text-base">-₹250</div>
              </div>
            </div>

            <div className="border-t border-[rgba(42,51,74,0.15)] my-3 md:my-4"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
              <div className="space-y-2 md:space-y-3">
                <div className="text-gray-600 text-sm md:text-base">
                  Delivery tip
                </div>
                <div className="text-gray-600 text-sm md:text-base underline decoration-dashed">
                  Platform fee
                </div>
                <div className="text-gray-600 text-sm md:text-base underline decoration-dashed">
                  GST & Restaurant charges
                </div>
              </div>
              <div className="text-right space-y-2 md:space-y-3">
                <div className="text-[#9747FF] cursor-pointer text-sm md:text-base">
                  Add tip
                </div>
                <div className="text-gray-600 text-sm md:text-base">₹10</div>
                <div className="text-gray-600 text-sm md:text-base">₹47</div>
              </div>
            </div>

            <div className="border-t border-[rgba(42,51,74,0.15)] my-3 md:my-4"></div>

            <div className="flex justify-between items-center">
              <div className="text-lg md:text-xl font-semibold text-[#2A334A]">
                To Pay
              </div>
              <div className="text-lg md:text-xl font-semibold text-[#2A334A]">
                ₹250
              </div>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <DeleteGroupModal
          onClose={() => setShowModal(false)}
          onConfirm={handleDelete}
        />
      )}
    </div>
  );
};

export default Page5;
