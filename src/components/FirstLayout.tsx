import { Children } from "react";
import facebook from "../assets/images/facebook.png";
import Instagram from "../assets/images/instagram.png";
import Linkedin from "../assets/images/linkedin.png";
import SnapchatSquare from "../assets/images/snapchat.png";

type FirstLayoutProps = {
    children: React.ReactNode;
};
const FirstLayout = ({ children }: FirstLayoutProps) => {
  return (
    <div className="h-96 bg-gradient-to-b from-[#5BB834] to-green-0">
      <div className="max-w-6xl mx-auto ">
        <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 py-4">
          <div></div>
          <div className="flex items-center gap-4">
            <span className="text-white text-base font-medium">
              follow us on
            </span>
            <div className="flex gap-5">
              <img
                src={Instagram}
                alt="Instagram"
                className="sm:w-10 w-8 sm:h-10 h-8 cursor-pointer"
              />
              <img
                src={facebook}
                alt="Facebook"
                className="sm:w-10 w-8 sm:h-10 h-8 cursor-pointer"
              />
              <img
                src={Linkedin}
                alt="Linkedin"
                className="sm:w-10 w-8 sm:h-10 h-8 cursor-pointer"
              />
              <img
                src={SnapchatSquare}
                alt="Snapchat"
                className="sm:w-10 w-8 sm:h-10 h-8 cursor-pointer"
              />
            </div>
          </div>
          <div className="flex gap-4 sm:mt-0 mt-4">
            <a
              href="#"
              className="text-[#415227] opacity-20 font-extrabold text-lg underline"
            >
              Login
            </a>
            <a
              href="#"
              className="text-[#415227] font-extrabold text-lg underline"
            >
              Signup
            </a>
          </div>
        </div>
        <div className=" bg-white rounded-xl p-8 m-4">
            {children}
        </div>
      </div>
    </div>
  );
};

export default FirstLayout;
