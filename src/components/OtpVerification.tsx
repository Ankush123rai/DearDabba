import { useState, useEffect } from "react";

const OtpVerification = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [resendTimer, setResendTimer] = useState(30);

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
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  };

  return (
    <div className="text-center max-w-md mx-auto space-y-6">
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
          otp.length === 4 && otp.every((d) => d !== "")
            ? "bg-green-500 text-white hover:bg-green-600 cursor-pointer"
            : "bg-gray-300 text-white cursor-not-allowed"
        }`}
        disabled={otp.length !== 4 || otp.some((digit) => digit === "")}
      >
        Continue
      </button>

      <p className="text-sm text-red-600">Resend OTP in {resendTimer} Sec.</p>

      <p className="text-sm text-gray-600">
        Already Have An Account?{" "}
        <a href="/login" className="text-green-600 font-medium hover:underline">
          Login
        </a>
      </p>
    </div>
  );
};

export default OtpVerification;
