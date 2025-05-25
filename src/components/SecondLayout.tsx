import { Outlet, NavLink } from 'react-router-dom';

import Home from '../assets/images/home.png';
import Bookmark from '../assets/images/bookmark.png';
import Cart from '../assets/images/Vector.png';
import User from '../assets/images/user.png';

const SecondLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#5BB834] to-green-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="w-full z-50 sticky top-0 left-0 bg-transparent backdrop-blur-md p-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-0">
            
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 md:gap-[30px] sm:px-8 px-0">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center gap-2 ${isActive ? 'font-bold' : 'font-normal'}`
                }
              >
                <img src={Home} alt="Home" className="w-5 h-5 md:w-6 md:h-6" />
                <span className="text-[18px] md:text-[20px] text-[#415227]">Home</span>
              </NavLink>

              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  `flex items-center gap-1.5 ${isActive ? 'font-bold' : 'font-normal'}`
                }
              >
                <img src={Cart} alt="Cart" className="w-5 h-5 md:w-6 md:h-6" />
                <span className="text-[18px] md:text-[20px] text-[#36731D]">Cart</span>
              </NavLink>

              <NavLink
                to="/collection"
                className={({ isActive }) =>
                  `flex items-center gap-1.5 ${isActive ? 'font-bold' : 'font-normal'}`
                }
              >
                <img src={Bookmark} alt="Collection" className="w-5 h-5 md:w-6 md:h-6" />
                <span className="text-[18px] md:text-[20px] text-[#36731D]">Collection</span>
              </NavLink>

              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  `flex items-center gap-1.5 ${isActive ? 'font-bold' : 'font-normal'}`
                }
              >
                <img src={User} alt="Profile" className="w-5 h-5 md:w-6 md:h-6" />
                <span className="text-[18px] md:text-[20px] text-[#36731D]">Profile</span>
              </NavLink>
            </div>

            <div className="flex justify-center md:justify-end items-center gap-3 md:gap-4">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `text-[16px] underline md:text-[18px] ${isActive ? 'font-semibold text-[#415227]' : 'font-extrabold text-[#415227]'}`
                }
              >
                Login
              </NavLink>

              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  `text-[16px] underline md:text-[18px] ${isActive ? 'font-semibold text-[#415227]' : 'font-extrabold text-[#415227]'}`
                }
              >
                Signup
              </NavLink>
            </div>
          </div>
        </nav>

        <div className="bg-white rounded-xl mt-4">
          <Outlet />
        </div>
      </div>
      {/* <div className="text-center w-[100vw]">
        <h2 className="text-[rgba(91,184,52,0.48)] ml-[-2.6rem] text-6xl sm:text-8xl lg:text-[230px] font-medium tracking-tighter mb-[-2.7rem]">
          DearDabba
        </h2>
      </div> */}
    </div>
  );
};

export default SecondLayout;
