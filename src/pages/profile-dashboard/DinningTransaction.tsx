import { FaArrowLeft, FaShareAlt, FaStar } from "react-icons/fa";

const DinningTransaction = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 relative p-4">
      <button className="absolute top-6 left-4 text-gray-700 hover:text-green-600">
        <FaArrowLeft size={20} />
      </button>

      <div className="w-[350px] max-w-sm bg-white rounded-xl shadow-md overflow-hidden text-sm text-gray-700">
        <img
          src="https://www.shutterstock.com/image-photo/baked-fried-salmon-salad-paleo-600nw-1907858902.jpg"
          alt="kitchen image"
          className="w-full h-36 object-cover"
        />

        <div className="p-4">
          <div className="flex justify-between">
            <div className="w-3/4">
              <h3 className="text-md font-semibold text-gray-800 mb-1">Lilly’s Kitchen</h3>
              <p className="text-xs text-gray-500 leading-tight mb-1">
                12345 Oceanview Boulevard, Suite 6789, Downtown District, Sunset City, California
              </p>
              <p className="text-[10px] text-gray-500 mb-1">
                Restaurant • Dining • ₹250 for one
              </p>
              <p className="text-xs text-green-600">15 mins • 1 km</p>
              <p className="text-xs">
                <span className="text-green-600">Open -</span> 11AM - 11:30PM
              </p>
            </div>

            {/* Icons & Rating */}
            <div className="text-right">
              <div className="flex gap-2 justify-end">
                <button className="text-gray-400 hover:text-green-600 transition-colors">
                  <svg
                    width="16"
                    height="16"
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
                <button className="text-gray-400 hover:text-green-600 transition-colors">
                  <FaShareAlt />
                </button>
              </div>
              <p className="text-green-600 bg-[#F6FFFF] mt-1 p-1 rounded-md text-xs font-semibold flex items-center justify-end gap-1">
                4.1 <FaStar className="text-green-400" />
              </p>
            </div>
          </div>
        </div>

        <div className="px-4 pb-4 text-gray-800">
          <h2 className="text-green-800 font-semibold mb-4">
            Review Booking Details
          </h2>

          <div className="space-y-3">
            {[
              ["Date & Time", "Mar 10 At 7pm"],
              ["Location", "Dimsum wu"],
              ["Number Of Guests", "2"],
              ["Your Details", "Nupur, 9321456820"],
              ["Special Requests", "Vegetarian options, window seating"],
              ["Bill", "6000"],
              ["Payment Status", "Done"],
              ["Reservation ID", "R123456"],
              ["Confirmation Status", "Confirmed"],
              ["Notes", "Please arrive 15 minutes early."],
              ["Follow-up Contact", "Email: nupur@example.com"],
              ["Feedback Request", "We would love your feedback after :)"],
              ["Last Updated", "Mar 10, 2023 at 7:00 PM"],
            ].map(([label, value], index) => (
              <div key={index}>
                <p className="font-semibold text-xs text-gray-600">{label}</p>
                <p className="text-sm">{value}</p>
              </div>
            ))}
          </div>

          <button className="w-full mt-6 bg-green-500 hover:bg-green-600 text-white py-2 rounded-md font-semibold text-sm">
            Book Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default DinningTransaction;
