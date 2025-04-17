import facebook from "../assets/images/facebook.png";
import Instagram from "../assets/images/instagram.png";
import Linkedin from "../assets/images/linkedin.png";
import SnapchatSquare from "../assets/images/snapchat.png";
import tweeter from '../assets/images/twitter.png'
import BrandLogo from "./BrandLogo";

const Footer = () => {
  return (
    <footer className="relative max-w-5xl pt-12 pb-24 md:pb-12">
      <div className=" container mx-auto px-4 mb-12">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          <p className="text-gray-500 text-md md:text-xl text-center">
            For better experience, download the DearDabba app now
          </p>
          <div className="flex gap-4">
            <button className="border border-gray-700 rounded-md px-4 py-2 flex items-center gap-2">
              <div className="w-5 h-5 relative">
                <div className="absolute inset-0">
                  <div className="absolute left-0.5 right-28 top-full -bottom-52 bg-[#EA4335]"></div>
                  <div className="absolute left-45 right-0 top-71 -bottom-14 bg-[#FBBC04]"></div>
                  <div className="absolute left-0 right-51 top-91 -bottom-75 bg-[#4285F4]"></div>
                  <div className="absolute left-0.5 right-29 top-1/2 bottom-0 bg-[#34A853]"></div>
                </div>
              </div>
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
      </div>

      <div className="container mx-auto sm:mx-10 px-4">
        <div className="flex flex-col md:flex-row justify-center items-start gap-12 md:gap-24 mb-12">
          <div className="flex flex-col md:flex-row justify-center items-start gap-12 md:gap-16 lg:gap-24">
            <BrandLogo />

            <div className="flex flex-col">
              <h3 className="text-[#415227] text-xl md:text-2xl font-medium mb-2 tracking-tighter">
                DearDabba
              </h3>
              <ul className="space-y-1">
                <li className="text-gray-500 text-base md:text-lg">About Us</li>
                <li className="text-gray-500 text-base md:text-lg">Team</li>
                <li className="text-gray-500 text-base md:text-lg">Career</li>
                <li className="text-gray-500 text-base md:text-lg">
                  Contact Us
                </li>
              </ul>
            </div>

            <div className="flex flex-col">
              <h3 className="text-[#415227] text-xl md:text-2xl font-medium mb-2 tracking-tighter">
                Support
              </h3>
              <ul className="space-y-1">
                <li className="text-gray-500 text-base md:text-lg">
                  Help & Support
                </li>
                <li className="text-gray-500 text-base md:text-lg">
                  Partner With Us
                </li>
                <li className="text-gray-500 text-base md:text-lg">
                  Ride With Us
                </li>
              </ul>
            </div>

            <div className="flex flex-col">
              <h3 className="text-[#415227] text-xl md:text-2xl font-medium mb-2 tracking-tighter">
                Legal
              </h3>
              <ul className="space-y-1">
                <li className="text-gray-500 text-base md:text-lg">
                  Terms & Condition
                </li>
                <li className="text-gray-500 text-base md:text-lg">
                  Cookie Policy
                </li>
                <li className="text-gray-500 text-base md:text-lg">
                  Privacy Policy
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start mt-4 md:mt-0">
            <h3 className="text-[#415227] text-xl font-medium mb-4">
              Social Links
            </h3>
            <div className="flex gap-3">
              <img
                src={Instagram}
                alt="Instagram"
                className="sm:w-5 w-3 sm:h-5 h-3 cursor-pointer"
              />
              <img
                src={facebook}
                alt="Facebook"
                 className="sm:w-5 w-3 sm:h-5 h-3 cursor-pointer"
              />
              <img
                src={Linkedin}
                alt="Linkedin"
                 className="sm:w-5 w-3 sm:h-5 h-3 cursor-pointer"
              />
              <img
                src={SnapchatSquare}
                alt="Snapchat"
                 className="sm:w-5 w-3 sm:h-5 h-3 cursor-pointer"
              />
              <img
                src={tweeter}
                alt="tweeter"
                 className="sm:w-5 w-3 sm:h-5 h-3 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" bottom-0 max-w-3xl text-center">
        <h2 className="text-[rgba(91,184,52,0.48)] text-6xl md:text-8xl lg:text-[200px] font-medium tracking-tighter">
          DearDabba
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
