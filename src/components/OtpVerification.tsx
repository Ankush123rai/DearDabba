import { useState, useEffect } from "react";
import LocationPopup from "./LocationPopup";

const OtpVerification = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [resendTimer, setResendTimer] = useState(30);
  const [isVerified, setVerified] = useState(false);

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  const handleChange = (index: number, value: string) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < 3) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  return (
    <>
      {isVerified ? (
        <LocationPopup />
      ) : (
        <div className="text-center max-w-md mx-auto space-y-6 py-10">
          <h2 className="text-xl font-semibold">Enter OTP</h2>
          <p className="text-gray-500">Enter the OTP sent on XXXXXX7214</p>

          <div className="flex justify-center space-x-4">
            {otp.map((digit, idx) => (
              <input
                key={idx}
                id={`otp-${idx}`}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(idx, e.target.value)}
                className="w-12 sm:w-[75px] h-12 sm:h-[75px] border-none bg-gray-200 rounded-2xl text-center text-xl font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            ))}
          </div>

          <button
            className={`w-full py-3 rounded transition-colors ${
              otp.every((d) => d !== "")
                ? "bg-[#5BB834] text-white hover:bg-[#5BB834] cursor-pointer"
                : "bg-gray-300 text-white cursor-not-allowed"
            }`}
            disabled={otp.some((digit) => digit === "")}
            onClick={() => setVerified(true)}
          >
            Continue
          </button>

          <p className="text-sm text-red-600">Resend OTP in {resendTimer} sec.</p>

          <p className="text-sm text-gray-600">
            Already Have An Account?{" "}
            <a
              href="/login"
              className="text-[#5BB834] font-medium hover:underline"
            >
              Login
            </a>
          </p>
        </div>
      )}
    </>
  );
};

export default OtpVerification;
