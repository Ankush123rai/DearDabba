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
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-16 mb-12 max-w-7xl mx-auto">
        <p className="text-gray-500 text-center text-sm sm:text-md md:text-lg">
          For better experience, download the DearDabba app now
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <button className="border border-gray-700 rounded-md px-4 py-2 flex items-center gap-2">
            <div className="flex flex-col items-start">
              <span className="text-xs uppercase font-sans">GET IT ON</span>
              <span className="text-sm font-bold">Google Play</span>
            </div>
          </button>
          <button className="border border-gray-700 rounded-md px-4 py-2 flex items-center gap-2">
            <div className="w-5 h-5 relative">
              <div className="absolute inset-0">
                <div className="absolute inset-0 top-1/4 bg-gray-800"></div>
                <div className="absolute left-1/2 right-1/4 top-0 bottom-3/4 bg-gray-800"></div>
              </div>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-xs">Download on the</span>
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

      {/* Bottom Brand Name */}
      <div className="text-center max-w-7xl mx-auto">
        <h2 className="text-[rgba(91,184,52,0.48)] ml-[-2.6rem] text-6xl sm:text-8xl lg:text-[205px] font-medium tracking-tighter mb-[-2.7rem]">
          DearDabba
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
