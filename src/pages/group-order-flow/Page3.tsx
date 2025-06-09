import { FaChevronDown, FaPlus } from "react-icons/fa";
import Breadcrumb from "../../components/Breadcrumb";
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";

const Page3 = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Breadcrumb
        paths={[
          { label: "Lunch Box" },
          { label: "Group Order Flow", isActive: true },
        ]}
      />

      <div className="flex flex-wrap items-center justify-between p-4 md:px-8">
        <button className="flex items-center gap-2 border border-green-600 text-green-600 font-semibold py-2 px-4 rounded-lg">
          <FaPlus /> Add People
        </button>
        <div className="text-red-600 font-semibold text-sm mt-2 md:mt-0">
          20 Mins Left
        </div>

        <div className="flex items-center gap-2 mt-2 md:mt-0 text-gray-800 font-semibold">
          Delivery Address
          <FaChevronDown className="text-gray-500" />
        </div>
      </div>

      <div className="px-4 md:px-8 mb-4">
        <p className="text-gray-500 text-sm">
          Posh Complex, Hatkesh Udyog Naga...
        </p>
      </div>

      <hr />
      <div className="px-4 md:px-8 py-4 flex items-start gap-[4rem]">
        <div className="flex items-center gap-4">
          <div>
            <h2 className="font-bold text-green-800">Nupur’s Group Order</h2>
            <p className="text-gray-500 text-sm">From Lunch Box</p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="https://media.istockphoto.com/id/1418260625/photo/headshot-portrait-beautiful-african-teenage-girl-posing-standing-indoor.jpg?s=612x612&w=0&k=20&c=RRaViSHTM-PPxBH_SmXGovajB6UJ5LDxk6AHfowDYI4="
            alt="User"
            className="w-10 h-10 rounded-full"
          />
          <p className="text-sm text-gray-600 mt-1">Just You</p>
        </div>
      </div>

      <hr />

      <div className="px-4 md:px-8 py-4 flex justify-between items-end">
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

      <div className="flex-1 flex flex-col items-center justify-center text-gray-400">
        <p>No Friends Have Joined Yet</p>
        <Link to='/group-order-flow/4'>
        <button className="bg-[#5BB834] hover:bg-green-600 text-white font-semibold py-3 px-10 rounded-lg mt-6">
          Add People
        </button></Link>
      </div>
    </div>
  );
};

export default Page3;
