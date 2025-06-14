import { FaChevronDown } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Breadcrumb from "../../components/Breadcrumb";
import qrcode from "../../assets/images/qrcode.png";
import Footer from "../../components/Footer";
import { GoPlus } from "react-icons/go";
import { useState } from "react";
import DeleteGroupModal from "../../components/modal/DeleteGroupModal";
import { Link } from "react-router-dom";
import { BiLinkAlt } from "react-icons/bi";
import logo from "../../assets/images/logo.png";

const Page4 = () => {
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
      <div className="flex flex-col md:flex-row ">
        <div className="flex-1 p-4 md:p-8">
          <div className="flex justify-between items-center mb-4">
            <button className="flex items-center gap-2 border border-[#5BB834] text-[#2A334A]  py-2 px-4 rounded-lg">
              <GoPlus /> Add People
            </button>
            <div className="text-red-500 font-bold">20 Mins Left</div>
          </div>

          <div className="mb-6">
            <h1 className="text-2xl font-bold text-green-400">
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

          <div className="text-center text-gray-400 mt-10">
            <p>No Friends Have Joined Yet</p>
            <Link to="/group-order-flow/5">
              <button className="bg-[#5BB834] w-[400px] hover:bg-green-600 text-white font-semibold py-3 px-10 rounded-lg mt-6">
                Add People
              </button>
            </Link>
          </div>
        </div>

        <div className="bg-[#5BB8342E] flex flex-col items-center flex-1 p-4 rounded-2xl mx-8">
          <div className="self-end">
            <IoClose className="text-2xl cursor-pointer" />
          </div>

          <div className="text-center mt-6 flex flex-col items-center">
            <h2 className="text-sm text-slate-700 mb-2">
              Lets get your party started!
            </h2>
            <p className="text-lg font-semibold text-black mb-6">
              Share This QR Code With Others To Start Group Order
            </p>
            <div className="relative w-40 h-40 mx-auto mb-6">
              <img
                src={qrcode}
                alt="QR Code"
                className="w-full h-full bg-white p-2 rounded-lg"
              />

              <img
                src={logo}
                alt="Logo"
                className="absolute top-1/2 left-1/2 w-12 h-12 transform -translate-x-1/2 -translate-y-1/2 rounded-md"
              />
            </div>

            <p className="text-center mb-4">or</p>
            <button className="bg-[#5BB834] sm:w-[360px] font-semibold text-white w-full text-center py-3 px-6 rounded-lg flex items-center justify-center gap-2 ">
              <BiLinkAlt className="text-white text-lg" />
              Share A Link
            </button>
          </div>
        </div>
      </div>
      {showModal && (
        <DeleteGroupModal
          onClose={() => setShowModal(false)}
          onConfirm={handleDelete}
        />
      )}

      <Footer />
    </div>
  );
};

export default Page4;
