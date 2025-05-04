import { X } from "lucide-react";
import { useState } from "react";
import CalenderModal from "./CalenderModal";

type TiffinSummaryProps = {
  onClose: () => void;
  onConfirm: () => void;
};

const TiffinSummaryModal = ({ onClose, onConfirm }: TiffinSummaryProps) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [dateType, setDateType] = useState<"from" | "to">("from");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const handleDateClick = (type: "from" | "to") => {
    setDateType(type);
    setShowCalendar(true);
  };

  const handleDateSelect = (date: string) => {
    if (dateType === "from") {
      setFromDate(date);
    } else {
      setToDate(date);
    }
    setShowCalendar(false);
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
        <div className="bg-white rounded-2xl w-full max-w-4xl p-6 sm:p-[3rem] shadow-lg relative flex flex-col gap-6">
          <button 
            className="absolute top-4 right-4 text-gray-600 hover:text-black"
            onClick={onClose}
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex justify-between items-center gap-6 sm:gap-[3rem]">
            <div className="w-full">
              <h2 className="text-center font-semibold text-gray-800 text-lg mb-6">
                Add Date
              </h2>
              <div className="mb-4">
                <label className="block text-gray-800 font-medium mb-1">
                  From
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder:text-gray-400 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Add here..."
                  value={fromDate}
                  onClick={() => handleDateClick("from")}
                  readOnly
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-800 font-medium mb-1">
                  To
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder:text-gray-400 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Add here..."
                  value={toDate}
                  onClick={() => handleDateClick("to")}
                  readOnly
                />
              </div>
            </div>

            <div className="w-full border rounded-2xl border-green-200 p-6">
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">
                Mini Tiffin
              </h3>
              <div className="flex items-center justify-start text-[#5BB834] font-semibold text-lg mb-4">
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
                ₹328.75 To pay
              </div>

              <div className="text-gray-700 text-sm space-y-3">
                <div className="flex justify-between">
                  <span>Total Item</span>
                  <span>₹250</span>
                </div>
                <div className="flex justify-between">
                  <span className="underline underline-offset-2 decoration-dotted">
                    Delivery fee | 1.2kms
                  </span>
                  <span>₹50.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery tip</span>
                  <span className="text-purple-600 cursor-pointer">Add tip</span>
                </div>
                <div className="flex justify-between">
                  <span className="underline underline-offset-2 decoration-dotted">
                    Platform fee
                  </span>
                  <span>₹10.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="underline underline-offset-2 decoration-dotted">
                    GST & Restaurant charges
                  </span>
                  <span>₹48.75</span>
                </div>
                <hr />
                <div className="flex justify-between font-semibold">
                  <span>To Pay</span>
                  <span>₹328.75</span>
                </div>
              </div>
            </div>
          </div>

          <div className="sm:w-[400px] w-full mx-auto">
            <button
              onClick={() => {
                onConfirm();
                onClose();
              }}
              className="bg-[#5BB834] text-white font-semibold rounded-lg w-full py-2 hover:bg-[#4ea22e] transition-all"
            >
              Proceed
            </button>
          </div>
        </div>
      </div>

      {showCalendar && (
        <CalenderModal
        dateType={dateType}
          onClose={() => setShowCalendar(false)}
          onConfirm={(date) => handleDateSelect(date)}
        />
      )}
    </>
  );
};

export default TiffinSummaryModal;