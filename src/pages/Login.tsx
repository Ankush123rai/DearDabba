import FirstLayout from "../components/FirstLayout";
import BrandLogo from "../components/BrandLogo";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSent, setIsSent] = useState(false);
   const [otp, setOtp] = useState(["", "", "", ""]);
    const [resendTimer, setResendTimer] = useState(30);

  const handleSentOtp =()=>{
    setIsSent(true)
  }

  const navigate = useNavigate()

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
    <FirstLayout>
      <div className="flex flex-col items-center min-h-screen px-4">
        <div className="flex justify-center mb-8">
          <BrandLogo />
        </div>

        {isSent ? (
          <div className="w-full max-w-[400px] bg-white p-4 text-center shadow-2xl">
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
            onClick={()=>navigate('/')}
          >
            Continue
          </button>

          <p className="text-sm text-red-600">Resend OTP in {resendTimer} sec.</p>

          <p className="text-sm text-gray-600">
          Don't have an account ? {" "}
            <a
              href="/signup"
              className="text-[#5BB834] font-medium hover:underline"
            >
              sign up
            </a>
          </p>
        </div>
          </div>
        ) : (
          <div className="w-full max-w-[400px] bg-white p-4 text-center">
            <p className="text-[20px] font-semibold mb-2">Login</p>
            <p className="text-[14px] text-slate-500 mb-6">
              Enter Mobile Number To Continue
            </p>

            <div className="bg-slate-300 rounded-lg px-6 py-2 mb-3 flex flex-col justify-start">
              <label className="text-left text-slate-600">Mobile no</label>
              <input
                type="text"
                placeholder="."
                className="w-full bg-transparent focus:outline-none focus:ring-2 focus:ring-slate-300"
                defaultValue="9000000"
              />
            </div>

            <button onClick={handleSentOtp} className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition mb-4">
              OTP
            </button>

            <div className="flex items-center mb-4">
              <div className="flex-grow border-t border-gray-300" />
              <span className="mx-3 text-gray-400">Or</span>
              <div className="flex-grow border-t border-gray-300" />
            </div>

            <div className="flex justify-center gap-4 mb-6">
              <button className="border p-3 rounded-lg hover:bg-gray-100 transition">
                <FcGoogle className="text-[20px]" />
              </button>
              <button className="border p-3 rounded-lg hover:bg-gray-100 transition">
                <FaApple className="text-[20px]" />
              </button>
              <button className="border p-3 rounded-lg hover:bg-gray-100 transition">
                <FaFacebook className="text-[20px] text-blue-600" />
              </button>
            </div>

            <p className="text-sm text-gray-600 mt-12">
              Don't Have An Account?{" "}
              <a
                href="#"
                className="text-green-600 font-semibold hover:underline"
              >
                Sign Up
              </a>
            </p>
          </div>
        )}
      </div>
    </FirstLayout>
  );
};

export default Login;
