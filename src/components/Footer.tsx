import { FaApple } from "react-icons/fa";
import facebook from "../assets/images/facebook.png";
import Instagram from "../assets/images/instagram.png";
import Linkedin from "../assets/images/linkedin.png";
import SnapchatSquare from "../assets/images/snapchat.png";
import tweeter from "../assets/images/twitter.png";
import BrandLogo from "./BrandLogo";

const Footer = () => {
  return (
    <footer className="bg-white mt-12 px-4 sm:px-8">
      {/* App Promotion Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-16 mb-12 max-w-5xl mx-auto">
        <p className="text-gray-500 text-center text-sm sm:text-md md:text-xl tracking-tighter">
          For better experience, download the DearDabba app now
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
                      <button className="flex items-center gap-2 px-4 py-2 border border-gray-800 rounded-md hover:bg-gray-50 transition-colors">
                        <div className="relative w-5 h-5">
                          <img src="https://cdn-icons-png.flaticon.com/512/732/732208.png" alt="" />
                        </div>
                        <div className="flex flex-col items-start">
                          <span className="text-xs uppercase text-gray-600">GET IT ON</span>
                          <span className="text-sm font-bold">Google Play</span>
                        </div>
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 border border-gray-800 rounded-md hover:bg-gray-50 transition-colors">
                        <div className="relative w-5 h-5">
                        <FaApple className='text-[25px]'/>
                        </div>
                        <div className="flex flex-col items-start">
                          <span className="text-xs text-gray-600">Download on the</span>
                          <span className="text-sm font-bold">App Store</span>
                        </div>
                      </button>
                    </div>
      </div>

      {/* Main Footer Content */}
      <div className="flex flex-col lg:flex-row items-start max-w-5xl mx-auto gap-8 flex-wrap px-2 sm:px-4 mb-12">
        <BrandLogo />

        <div className="flex flex-col  gap-4 sm:gap-[5rem] sm:flex-row flex-wrap">
          <div>
            <h3 className="text-[#415227] text-xl font-medium mb-2">DearDabba</h3>
            <ul className="space-y-2">
              <li className="text-gray-500 text-sm cursor-pointer">About Us</li>
              <li className="text-gray-500 text-sm cursor-pointer">Team</li>
              <li className="text-gray-500 text-sm cursor-pointer">Career</li>
              <li className="text-gray-500 text-sm cursor-pointer">Contact Us</li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#415227] text-xl font-medium mb-2">Support</h3>
            <ul className="space-y-2">
              <li className="text-gray-500 text-sm cursor-pointer">Help & Support</li>
              <li className="text-gray-500 text-sm cursor-pointer">Partner With Us</li>
              <li className="text-gray-500 text-sm cursor-pointer">Ride With Us</li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#415227] text-xl font-medium mb-2">Legal</h3>
            <ul className="space-y-2">
              <li className="text-gray-500 text-sm cursor-pointer">Terms & Condition</li>
              <li className="text-gray-500 text-sm cursor-pointer">Cookie Policy</li>
              <li className="text-gray-500 text-sm cursor-pointer">Privacy Policy</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-[#415227] text-sm font-medium mb-3">Social Links</h3>
          <div className="flex gap-3">
            <img src={Instagram} alt="Instagram" className="w-5 h-5 cursor-pointer" />
            <img src={facebook} alt="Facebook" className="w-5 h-5 cursor-pointer" />
            <img src={Linkedin} alt="Linkedin" className="w-5 h-5 cursor-pointer" />
            <img src={SnapchatSquare} alt="Snapchat" className="w-5 h-5 cursor-pointer" />
            <img src={tweeter} alt="Twitter" className="w-5 h-5 cursor-pointer" />
          </div>
        </div>
      </div>

     
    </footer>
  );
};

export default Footer;
