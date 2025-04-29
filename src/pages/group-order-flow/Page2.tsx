import { useState } from "react";
import groupOder from "../../assets/images/group-order.svg";
import Breadcrumb from "../../components/Breadcrumb";
import Footer from "../../components/Footer";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Page2 = () => {
  const [paymentTypeOpen, setPaymentTypeOpen] = useState(true);

  return (
    <>
      <div className="bg-gradient-to-b from-[#69c641] to-green-0 min-h-screen flex flex-col">
        <Breadcrumb
          paths={[
            { label: "Lunch Box" },
            { label: "Group Order Flow", isActive: true },
          ]}
        />

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-4 py-6 md:px-12 lg:px-24 flex-1">
          
          {/* Left Section */}
          <div className="w-full md:w-1/2 flex flex-col items-center text-green-800">
            <div className="mb-8">
              <img
                src={groupOder}
                alt="Group Order"
                className="w-40 h-auto md:w-48 mx-auto"
              />
            </div>

            <div className="flex flex-col items-center">
              <h2 className="text-2xl font-bold mb-6">Group Order</h2>
              <ul className="text-green-800 space-y-4 text-base md:text-lg mb-6">
                <li>• Share link & start a group of up to 10 friends</li>
                <li>• Everyone can add their favorite dishes to the same order</li>
                <li>• Only host can edit the cart and track the order</li>
                <li>
                  • Final amount can be split between all the members as per
                  their order and coupon can be applied by host only
                </li>
              </ul>

              <button className="bg-[#5BB834] hover:bg-green-600 w-full max-w-xs text-white text-lg font-medium py-3 px-8 rounded-lg">
                Interesting, let's go ahead
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <div className="bg-white/30 backdrop-blur-md rounded-2xl p-6 w-full max-w-md text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-1">
                Nupur’s Group
              </h2>
              <p className="text-gray-700 mb-6">
                You Can Invite Up to 50 People
              </p>

              <div className="bg-white rounded-xl p-4 mb-4 text-left shadow">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-gray-800">Delivery Address</h3>
                  <FaChevronDown className="text-gray-500" />
                </div>
                <p className="text-gray-500 text-sm">
                  Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed
                  Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna...
                </p>
              </div>

              <div className="bg-white rounded-xl p-4 mb-4 flex justify-between items-center shadow">
                <span className="font-semibold text-gray-800">
                  30 Minutes To Order Item
                </span>
                <FaChevronDown className="text-gray-500" />
              </div>

              <div className="bg-white rounded-xl p-4 mb-4 text-left shadow">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => setPaymentTypeOpen(!paymentTypeOpen)}
                >
                  <h3 className="font-bold text-gray-800">Payment Type</h3>
                  {paymentTypeOpen ? (
                    <FaChevronUp className="text-gray-500" />
                  ) : (
                    <FaChevronDown className="text-gray-500" />
                  )}
                </div>

                {paymentTypeOpen && (
                  <div className="mt-4 space-y-3">
                    <label className="flex items-center gap-2 text-gray-800">
                      <input
                        type="radio"
                        name="payment"
                        className="form-radio text-green-600"
                      />
                      Self-payment
                    </label>
                    <label className="flex items-center gap-2 text-gray-800">
                      <input
                        type="radio"
                        name="payment"
                        className="form-radio text-green-600"
                      />
                      Split the bill
                    </label>
                  </div>
                )}
              </div>

              <button className="w-full bg-[#5BB834] hover:bg-green-700 text-white font-semibold py-3 rounded-xl mt-4">
                Start Group Order
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Page2;
