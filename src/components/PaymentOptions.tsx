
import { FcGoogle } from "react-icons/fc";
import { CiCreditCard1 } from "react-icons/ci";
import { SiPhonepe } from "react-icons/si";
import { RiBankLine } from "react-icons/ri";
import { TbCash } from "react-icons/tb";
import upi from "../assets/images/upi.svg";

const PaymentOptions = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-[rgba(91,184,52,0.18)] rounded-2xl">
      <div className="text-center mb-8">
        <h1 className="text-xl font-normal text-[#415227]">Place Order ₹250</h1>
      </div>

      <div className="space-y-7">
        <div>
          <h2 className="text-xl font-semibold mb-4 text-[#2A334A]">Recommended</h2>
          <div className="bg-white rounded-xl p-6">
            <div className="flex items-center gap-4">
              <FcGoogle className="text-3xl" />
              <span className="text-xl font-medium text-[#2A334A]">Google Pay UPI</span>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4 text-[#2A334A]">Cards</h2>
          <div className="bg-white rounded-xl p-6">
            <div className="flex items-center gap-4">
              <CiCreditCard1 className="text-3xl text-[#2A334A]" />
              <span className="text-xl font-medium text-[#2A334A]">Add Credit card or Debit card</span>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4 text-[#2A334A]">Pay By Any UPI App</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-center gap-4">
                <SiPhonepe className="text-3xl text-[#5B42F3]" />
                <span className="text-xl font-medium text-[#2A334A]">PhonePe UPI</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="flex items-center gap-4">
                <div className="w-20 h-8 bg-gray-200 rounded">
                    <img src={upi} alt="UPI" className="w-full h-full object-cover rounded" />
                </div>
                <span className="text-xl font-medium text-[#2A334A]">iamkalatamk@kkim</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="flex items-center gap-4">
                <div className="w-20 h-8 bg-gray-200 rounded">
                    <img src={upi} alt="UPI" className="w-full h-full object-cover rounded" />
                </div>
                <span className="text-xl font-medium text-[#2A334A]">Add new</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4 text-[#2A334A]">Net Banking</h2>
          <div className="bg-white rounded-xl p-6">
            <div className="flex items-center gap-4">
              <RiBankLine className="text-3xl text-[#2A334A]" />
              <span className="text-xl font-medium text-[#2A334A]">Net Banking</span>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4 text-[#2A334A]">Pay On Delivery</h2>
          <div className="bg-white rounded-xl p-6">
            <div className="flex items-center gap-4">
              <TbCash className="text-3xl text-[#2A334A]" />
              <span className="text-xl font-medium text-[#2A334A]">Cash on Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentOptions;
