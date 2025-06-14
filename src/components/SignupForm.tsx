import { useState } from "react";
import BrandLogo from "./BrandLogo";
import OtpVerification from "./OtpVerification";

const LoginForm = () => {
  const [whatsappOption, setWhatsappOption] = useState("same");
  const [showOtp, setShowOtp] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowOtp(true);
  };

  return (
    <div>
      <div className="flex justify-center mb-8">
        <BrandLogo />
      </div>

      {!showOtp ? (
        <>
          <h2 className="text-xl font-semibold text-[#415227] mb-6">
            Basic Details
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  defaultValue="Nupur Kadam"
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email address<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  defaultValue="cfvg@gamil.com"
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mobile number<span className="text-red-500">*</span>
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-l-md">
                    +91
                  </span>
                  <input
                    type="tel"
                    className="sm:flex-1 w-full px-4 py-2.5 bg-gray-50 border border-l-0 border-gray-200 rounded-r-md focus:outline-none focus:ring-1 focus:ring-green-500"
                  />
                </div>
              </div>
            </div>

            <p className="text-sm text-[#267F00]">
              We'll send an OTP to verify this number
            </p>

            <div className="space-y-4">
              <p className="text-[18px] font- text-gray-600">
                Provide your WhatsApp number to get notify on trendy offers &
                deals on time
              </p>

              <div className="space-y-3">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="whatsapp"
                    checked={whatsappOption === "same"}
                    onChange={() => setWhatsappOption("same")}
                    className="text-green-500 focus:ring-green-500"
                  />
                  <span className="text-sm text-gray-600">
                    My WhatsApp number is same as above
                  </span>
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="whatsapp"
                    checked={whatsappOption === "different"}
                    onChange={() => setWhatsappOption("different")}
                    className="text-[#5BB834] focus:ring-green-500"
                  />
                  <span className="text-sm text-gray-600">
                    I have a different WhatsApp number
                  </span>
                </label>
              </div>

              {whatsappOption === "different" && (
                <div className="px-4 py-2.5 bg-[#F9F9F9] border border-l-0 border-gray-200 rounded-xl">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    WhatsApp number<span className="text-red-500">*</span>
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center bg-[#F9F9F9] pr-3 border-r-2 border-gray-400">
                      +91
                    </span>
                    <input
                      type="tel"
                      className="sm:flex-1 bg-[#F9F9F9] w-full px-2 focus:outline-none focus:ring-1 focus:ring-gray-50"
                    />
                  </div>
                </div>
              )}
            </div>

            <div>
              <label className="block text-xl font-medium text-gray-700 mb-1">
                Add your address <span className="text-red-500">*</span>
              </label>
              <label className=" text-gray-600 text-md mb-5">
              Adding your proper delivery address would allow our delivery guy to make an effortless delivery
              </label>

              <div className="px-4 py-2.5 bg-[#F9F9F9] border border-l-0 border-gray-200 rounded-xl">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                Address<span className="text-red-500">*</span>
                </label>
                <textarea
                rows={2}
                className="w-full px-4  bg-[#F9F9F9] focus:outline-none focus:ring-1 focus:ring-green-500"
              ></textarea>

              </div>
            </div>

            <div className="flex items-center justify-center">
            <button
              type="submit"
              className="w-full sm:w-[554px] py-3 bg-[#5BB834] text-white rounded-md hover:bg-green-600 transition-colors font-medium"
            >
              Continue
            </button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already Have An Account?{" "}
            <a href="#" className="text-green-500 font-medium">
              Login
            </a>
          </p>
        </>
      ) : (
        <OtpVerification />
      )}
    </div>
  );
};

export default LoginForm;
