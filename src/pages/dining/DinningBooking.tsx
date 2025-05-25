import { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { useNavigate } from "react-router-dom";
import LocationSearchBar from "../../components/LocationSearchBar";
import { ChevronLeft, ChevronRight, Share2 } from "lucide-react";
import Modal from "../../components/Modal";
import bag from "../../assets/images/bag.png";

const DinningBooking = () => {
  const navigate = useNavigate();

  const [selectedDate, setSelectedDate] = useState(11);
  const [open, setOpen] = useState(false);
  const [selectedMeal, setSelectedMeal] =
    useState<keyof typeof meals>("Dinner");
  const [selectedTime, setSelectedTime] = useState("7pm-7:30pm");
  const [guests, setGuests] = useState(2);

  const dates = [
    { day: "10", label: "Sunday" },
    { day: "11", label: "Monday" },
    { day: "12", label: "Tuesday" },
    { day: "13", label: "Wednesday" },
    { day: "14", label: "Thursday" },
    { day: "15", label: "Friday" },
    { day: "16", label: "Saturday" },
    { day: "17", label: "Sunday" },
  ];

  const meals = {
    Breakfast: {
      fromTo: "8am-11:30am",
      times: [
        "8am-8:30am",
        "8:30am-9am",
        "9am-9:30am",
        "9:30am-10am",
        "10am-10:30am",
        "10:30am-11am",
        "11am-11:30am",
      ],
    },
    Lunch: {
      fromTo: "12pm-3:30pm",
      times: [
        "12pm-12:30pm",
        "12:30pm-1pm",
        "1pm-1:30pm",
        "1:30pm-2pm",
        "2pm-2:30pm",
        "2:30pm-3pm",
        "3pm-3:30pm",
      ],
    },
    Dinner: {
      fromTo: "7pm-10:30pm",
      times: [
        "7pm-7:30pm",
        "7:30pm-8pm",
        "8pm-8:30pm",
        "8:30pm-9pm",
        "9pm-9:30pm",
        "9:30pm-10pm",
        "10pm-10:30pm",
      ],
    },
  };

  return (
    <div className="px-4 md:px-6 lg:px-10 py-6 max-w-[1400px] mx-auto">
      <Breadcrumb
        paths={[{ label: "Lunch Box" }, { label: "Dinning", isActive: true }]}
        onBack={() => navigate(-1)}
      />
      <LocationSearchBar isMic={true} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        {/* Left Section */}
        <div className="p-6 text-center font-sans bg-white rounded-2xl shadow-sm">
          <h1 className="text-2xl font-semibold text-gray-800">Dimsum wu</h1>
          <p className="text-sm text-gray-500 mt-1">
            12345 Oceanview Boulevard, Suite 6789, Downtown District, Sunset
            City, California, 90210, United States of America
          </p>
          <div className="flex justify-end mt-2">
            <Share2 className="h-5 w-5 text-gray-400 cursor-pointer" />
          </div>

          <div className="flex items-center justify-center gap-8 mt-6 mb-2 text-[#5BB834] font-medium">
            <ChevronLeft className="cursor-pointer" />
            <span className="mx-6 mb-4">March</span>
            <ChevronRight className="cursor-pointer" />
          </div>

          <div className="grid grid-cols-4 gap-3 my-6 sm:px-6">
            {dates.map(({ day, label }) => (
              <div
                key={day}
                onClick={() => setSelectedDate(Number(day))}
                className={`rounded-xl p-2 py-5 cursor-pointer ${
                  selectedDate === Number(day)
                    ? "bg-[#5BB834] text-white"
                    : "bg-green-100 text-green-800"
                }`}
              >
                <div className="font-semibold">{day}</div>
                <div className="text-xs">{label}</div>
              </div>
            ))}
          </div>

          <hr />

          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {Object.keys(meals).map((meal) => (
              <button
                key={meal}
                onClick={() => setSelectedMeal(meal as keyof typeof meals)}
                className={`px-4 py-3 rounded-xl text-sm w-[140px] font-bold ${
                  selectedMeal === meal
                    ? "bg-[#5BB834] text-white"
                    : "bg-green-100 text-green-800"
                }`}
              >
                {meal}
                <div
                  className={`text-xs ${
                    selectedMeal === meal ? "text-white" : "text-green-800"
                  }`}
                >
                  {meals[meal as keyof typeof meals].fromTo}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {meals[selectedMeal].times.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`px-4 py-1 rounded-md text-sm ${
                  selectedTime === time
                    ? "bg-[#5BB834] text-white"
                    : "bg-green-100 text-green-800"
                }`}
              >
                {time}
              </button>
            ))}
          </div>

          <div className="mt-6 text-sm text-left font-semibold">
            Add Number Of Guests
          </div>
          <div className="flex justify-center mt-2 bg-gray-100 p-2 rounded-lg flex-wrap">
            {Array.from({ length: 9 }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                onClick={() => setGuests(n)}
                className={`w-8 h-8 mx-1 rounded-full text-sm ${
                  guests === n ? "bg-[#5BB834] text-white" : "text-gray-600"
                }`}
              >
                {n}
              </button>
            ))}
          </div>

          <button className="mt-6 bg-[#5BB834] w-full text-white px-8 py-2 rounded-lg font-semibold">
            Confirm
          </button>
        </div>

        {/* Right Section */}
        <div className="bg-[#5BB8342E] rounded-2xl p-4 sm:p-8">
          <div className="bg-white p-5 sm:p-7 rounded-2xl">
            <h2 className="font-semibold text-gray-800">
              Review Booking Details
            </h2>
            <div className="text-gray-700 mt-4">
              <p className="text-sm">Date & Time:</p>
              <p className="font-medium mb-3">Mar 10 At 7pm</p>
              <p className="text-sm">Location:</p>
              <p className="font-medium mb-3">Dimsum wu</p>
              <p className="text-sm">Numbers Of Guests:</p>
              <p className="font-medium mb-3">2</p>
              <p className="text-sm">Your Details:</p>
              <p className="font-medium mb-3">Nupur, 9321456820</p>
              <p className="font-medium">Offer:</p>
              <p className="font-medium mb-2">30% off on 9000 above bill</p>
            </div>
          </div>

          <div className="bg-white p-7 rounded-2xl mt-5">
            <div className="border border-gray-200 rounded-md px-3 py-2">
              <label className="text-sm text-slate-600">
                Add A Request If Any
              </label>
              <input
                type="text"
                className="w-full  focus:outline-none focus:ring-2 focus:ring-green-300 text-gray-700"
              />
            </div>

            <div className="mt-5 flex justify-between items-center bg-green-50 p-4 rounded-md">
              <span className="font-semibold text-gray-700">Bill To Pay</span>
              <span className="text-green-700 font-bold text-lg">₹50</span>
            </div>

            <div className="mt-4">
              <h3 className="font-semibold text-gray-700 mb-1">
                Terms & Conditions
              </h3>
              <ul className="list-disc list-inside text-gray-500  text-lg space-y-3 p-4">
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor
                </li>
              </ul>
            </div>

            <button
            onClick={() => setOpen(true)}
             className="w-full my-[4rem] bg-[#5BB834]  text-white py-5 rounded-md font-semibold">
              Proceed To Pay
            </button>
          </div>
        </div>
      </div>
      <Modal isOpen={open} onClose={() => setOpen(false)}>

        <div className="sm:w-[800px] w-[90%]  mx-auto  relative flex flex-col md:flex-row items-center justify-between">
          
          <div className="text-center ">
            <div className="flex justify-center mb-2">
              <img
                src={bag}
                alt="Bill Icon"
                className="w-30 h-30"
              />
            </div>
            <h3 className="text-lg font-semibold">Your Bill</h3>
            <div className="text-gray-400 line-through text-lg">₹5000</div>
            <div className="text-green-600 text-2xl font-bold">₹4000</div>
            <div className="text-sm text-gray-800 mt-1">
              You Saved <span className="font-semibold">₹1000</span>
            </div>
          </div>

          {/* Right Side - Bill Breakdown */}
          <div className="mt-6 md:mt-0 md:ml-10 w-full md:w-1/2">
            <div className="text-sm space-y-2">
              <div className="flex justify-between">
                <span>Total Bill</span>
                <span>₹5000</span>
              </div>
              <div className="flex justify-between">
                <span>Extra discount for you</span>
                <span className="text-green-500">-₹1000</span>
              </div>
              <div className="flex justify-between">
                <span>Convenience fee</span>
                <span>₹5000</span>
              </div>
              <hr />
              <div className="flex justify-between text-violet-500">
                <span className="underline cursor-pointer">Add tip</span>
                <span>₹0.00</span>
              </div>
            </div>

            <div className="border-t border-gray-200 my-3"></div>

            <div className="flex justify-between font-semibold text-lg">
              <span>To Pay</span>
              <span>₹4000</span>
            </div>

            <button className="mt-6 w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-all">
              Proceed To Pay ₹4000
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DinningBooking;
