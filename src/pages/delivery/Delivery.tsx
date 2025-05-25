import { useState } from "react";
import { FiChevronUp, FiChevronDown, FiPhone, FiMic } from "react-icons/fi";
import { MdPets, MdOutlineDirectionsWalk } from "react-icons/md";
import {
  HiOutlineBell,
  HiOutlineHome,
  HiOutlineShieldCheck,
} from "react-icons/hi";

import Breadcrumb from "../../components/Breadcrumb";
import { FaPhoneAlt, FaBiking } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { RiHomeLine, RiMotorbikeLine } from "react-icons/ri";
import { MdArrowForwardIos } from "react-icons/md";
import indianFood from "../../assets/images/indian.png";
import { BiFoodTag } from "react-icons/bi";
import { PiCookingPotBold } from "react-icons/pi";
import { GoPlusCircle } from "react-icons/go";
import handShake from "../../assets/images/handshake.png";
import Modal from "../../components/Modal";
import CancelOrder from "../../components/modal/CancelOrder";
import ConfirmCancelOrder from "../../components/modal/ConfirmCancelOrder";
import EditDelivery from "../../components/modal/EditDelivery";
import EditAddress from "../../components/modal/EditAddress";

const tipOptions = [20, 30, 50];

const instructionOptions = [
  { label: "Avoid ringing bell", icon: <HiOutlineBell /> },
  { label: "Leave at the door", icon: <HiOutlineHome /> },
  { label: "Directions to reach", icon: <FiMic /> },
  { label: "Avoid calling", icon: <FiPhone /> },
  { label: "Leave with security", icon: <HiOutlineShieldCheck /> },
  { label: "Pet at home", icon: <MdPets /> },
];

const Delivery = () => {
  const [selectedTip, setSelectedTip] = useState<number | "other" | null>(null);
    const [editAddress, setEditAddress] = useState(false);
    const [editDetails, setEditDetails] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [selectedInstructions, setSelectedInstructions] = useState<string[]>(
    []
  );
  const [customInstructions, setCustomInstructions] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const handleInstructionToggle = (label: string) => {
    setSelectedInstructions((prev) =>
      prev.includes(label) ? prev.filter((i) => i !== label) : [...prev, label]
    );
  };

  return (
    <div>
      <Breadcrumb
        paths={[{ label: "Home" }, { label: "Delivery", isActive: true }]}
      />

      <div className="flex flex-col md:flex-row p-4 mx-4 gap-9 ">
        <div className="md:w-2/3 w-full">
          <h2 className="text-center text-sm text-gray-700">Lunch Box</h2>
          <p className="text-center text-lg font-semibold text-[text-[#415227] my-3">
            Preparing your order
          </p>
          <p className="text-center text-green-600 bg-green-100 rounded-lg p-1 text-sm w-[180px] mx-auto">
            27 Mins • On Time
          </p>

          <div className="w-full h-64 bg-gray-200 rounded-lg mt-4 flex items-center justify-center">
            <span className="text-gray-600">[Map Component]</span>
          </div>

          <div className=" bg-white rounded-2xl p-5 space-y-5 border border-gray-100 mt-5">
            <div className="flex items-center gap-3 px-7">
              <img
                src="https://cdn-icons-png.flaticon.com/128/1046/1046784.png"
                alt="delivery"
                className="w-10 h-10"
              />
              <span className="text-lg ">
                Assigning delivery partner shortly
              </span>
            </div>
            <p className="text-gray-500 text-xl px-7">
              "Hot food, cool driver—keep the good vibes rolling with a tip!"
            </p>


            <div className="grid grid-cols-4 gap-2 mx-1">
              {tipOptions.map((tip) => (
                <button
                  key={tip}
                  onClick={() => setSelectedTip(tip)}
                  className={`border rounded-lg p-1 py-3 text-center font-semibold ${
                    selectedTip === tip
                      ? "bg-green-100 border-green-500 text-green-700"
                      : "bg-white text-gray-700"
                  }`}
                >
                  ₹{tip}
                  {tip === 30 && (
                    <p className="text-[10px] text-green-600 font-semibold">
                      Most Tipped
                    </p>
                  )}
                </button>
              ))}
              <button
                onClick={() => setSelectedTip("other")}
                className={`border rounded-lg p-2 text-center font-semibold ${
                  selectedTip === "other"
                    ? "bg-green-100 border-green-500 text-green-700"
                    : "bg-white text-gray-700"
                }`}
              >
                Other
              </button>
            </div>

            {/* Delivery Instructions Toggle */}
            <div
              className="flex items-center justify-between cursor-pointer mt-4"
              onClick={() => setShowInstructions(!showInstructions)}
            >
              <div className="flex items-center gap-2 text-[#415227] font-semibold text-lg">
                <RiMotorbikeLine className="text-xl" />
                <span>Add delivery instructions</span>
              </div>
              {showInstructions ? (
                <FiChevronUp className="text-green-700 text-xl" />
              ) : (
                <FiChevronDown className="text-green-700 text-xl" />
              )}
            </div>

            {/* Instruction Options */}
            {showInstructions && (
              <>
                <div className="grid grid-cols-6 gap-3">
                  {instructionOptions.map(({ label, icon }) => (
                    <button
                      key={label}
                      onClick={() => handleInstructionToggle(label)}
                      className={`flex flex-col items-center justify-center text-sm p-3 rounded-xl border ${
                        selectedInstructions.includes(label)
                          ? "bg-green-100 border-green-500 text-green-700"
                          : "bg-white text-gray-700"
                      }`}
                    >
                      <div className="text-xl mb-1">{icon}</div>
                      <span className="text-[10px] leading-none">{label}</span>
                    </button>
                  ))}
                </div>

                {/* Custom Text Input */}
                <div className="mt-4">
                  <p className="italic text-sm text-green-800 mb-2">
                    Or Additional Delivery Instructions
                  </p>
                  <textarea
                    className="w-full p-3 border rounded-xl text-green-800 placeholder-gray-400"
                    placeholder="Add here"
                    rows={3}
                    value={customInstructions}
                    onChange={(e) => setCustomInstructions(e.target.value)}
                  />
                </div>
                <button className="w-full bg-[#5BB834] text-white py-3 rounded-xl mt-2 font-semibold">
              Add
            </button>
              </>
            )}

           
          </div>
        </div>

        <div className="md:w-1/2 w-full p-6 space-y-4 rounded-2xl bg-[#5BB8342E]">
          <div className="bg-white p-5 px-7 rounded-xl shadow-sm space-y-2">
            <div className="border-b-2 border-gray-200 pb-4">
              <p className="text-gray-700 font-medium flex items-center justify-between mb-2">
                <div className="flex items-center gap-4 text-[#415227] ">
                  <IoCallOutline className="text-2xl" />
                  <span>Nupur 9652XXXXXX </span>
                </div>
                <span
                onClick={() => setEditDetails(true)}
                 className="text-green-600 ml-2 text-xs underline cursor-pointer">
                  Edit
                </span>
              </p>
              <p className="text-gray-600 text-sm">
                Delivery partner may call on this number
              </p>
            </div>
            <p className="text-gray-700 font-medium flex items-center justify-between mb-2">
              <span className="flex items-center gap-4 text-[#415227] ">
                <RiHomeLine className="text-2xl" />
                Delivery at home
              </span>
              <span
                onClick={() => setEditAddress(true)}
               className="text-green-600 ml-2 text-xs underline cursor-pointer">
                Edit
              </span>
            </p>
            <p className="text-sm text-gray-600 border-b-2 border-gray-200 pb-5">
              Posh complex, Hatkesh udyog nagar, Mira Road (East), C/202
            </p>
            <div className="items-center gap-2 font-medium mt-6 cursor-pointer flex justify-between">
              <p className="flex gap-3 items-center text-[#415227] ">
                <FaBiking /> <span>Add delivery instructions</span>
              </p>
              <MdArrowForwardIos />
            </div>
          </div>

          {[{ name: "Lunch Box" }, { name: "Ram’s Kitchen" }].map(
            (res, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <img
                      src={indianFood}
                      alt="logo"
                      className="w-10 h-10 object-contain"
                    />
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg">
                        Ram’s Kitchen
                      </h3>
                      <p className="text-sm text-gray-500">Pune, Maharashtra</p>
                    </div>
                  </div>
                  <FaPhoneAlt className="text-green-600 text-lg" />
                </div>

                {/* Order Info */}
                <div className="bg-white rounded-lg shadow-sm">
                  <div className="p-3 border-b flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-700 font-semibold">
                        Order #256215620
                      </p>
                      <div className="text-sm text-gray-600">
                        <BiFoodTag className="inline-block mr-1 text-green-600" />
                        <span className="text-sm text-gray-700">
                          Kanda Poha
                        </span>
                      </div>
                    </div>
                    <span className="text-lg"></span>
                  </div>

                  <div className="p-3 border-b flex justify-between items-center hover:bg-gray-50 cursor-pointer">
                    <div className="flex items-center gap-2 text-[#415227]">
                      <PiCookingPotBold className="text-lg" />
                      <span className="text-sm   font-medium">
                        Add Cooking Requests
                      </span>
                    </div>
                    <MdArrowForwardIos className="text-lg" />
                  </div>

                  {/* Add more items */}
                  <div className="p-3 flex justify-between items-start hover:bg-gray-50 cursor-pointer">
                    <div>
                      <div className="flex items-center gap-2 text-[#415227] ">
                        <GoPlusCircle className="text-lg" />
                        <span className="text-sm font-medium">
                          Add more items
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 ml-6">
                        Get free delivery on additional items
                      </p>
                    </div>
                    <MdArrowForwardIos className="text-lg" />
                  </div>
                </div>
              </div>
            )
          )}

          <div className="">
            {/* Header */}

            <button
                onClick={() => setIsModalOpen(true)}
             className="w-full bg-[#5BB834] text-white font-semibold py-4 mb-3 rounded-lg">
              Cancel Order <span className="text-red-500">(05:00)</span>
            </button>

            <button className="w-full bg-[#5BB8342E] text-green-700 font-semibold py-4  mb-3 rounded-lg">
              Chats With Us
            </button>
            <div className="flex items-center justify-between cursor-pointer  p-3 rounded-lg">
              <div className="flex items-center gap-2">
                <img src={handShake} alt="handshake" className="w-10 h-10" />
                <div>
                  <p className="text-md font-medium text-[#415227] mb-2">
                    Need help with your order ?
                  </p>
                  <p className="text-xs text-gray-500">Get help & support</p>
                </div>
              </div>
              <MdArrowForwardIos className="text-lg" />
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        >
            <CancelOrder 
            onClose={() => setIsModalOpen(false)}
             setIsConfirmModalOpen={setIsConfirmModalOpen}/>
        </Modal>

        <Modal
        isOpen={isConfirmModalOpen}
        onClose={() => setIsConfirmModalOpen(false)}
        >
            <ConfirmCancelOrder />
        </Modal>

        
        <Modal
        isOpen={editDetails}
        onClose={() => setEditDetails(false)}
        >
            < EditDelivery
            onClose={() => setEditDetails(false)}
            />
        </Modal>

        <Modal
        isOpen={editAddress}
        onClose={() => setEditAddress(false)}
        >
            < EditAddress
            onClose={() => setEditAddress(false)}
            />
        </Modal>

    </div>
  );
};

export default Delivery;
