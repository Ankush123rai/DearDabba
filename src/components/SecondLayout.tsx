import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

import Home from '../assets/images/home.png';
import Bookmark from '../assets/images/bookmark.png';
import Cart from '../assets/images/Vector.png';
import User from '../assets/images/user.png';

const SecondLayout = () => {
  return (
    <div className="h-96 bg-gradient-to-b from-[#5BB834] to-green-0">
      <div className="max-w-6xl mx-auto mt-[-1rem]">
        <nav className="w-full px-5 z-50">
          <div className="max-w-7xl mx-auto sm:px-8 px-4 h-[94px] flex items-center justify-between">
            <div className="flex items-center gap-[60px]">
              <div className="flex items-center gap-5">

                <NavLink
                  to="/"
                  className={({ isActive }) => `flex items-center gap-2.5 ${isActive ? 'font-bold' : 'font-normal'}`}
                >
                  <img src={Home} alt="Home" className="w-6 h-6" />
                  <span className="text-[20px] text-[#415227]">Home</span>
                </NavLink>

                <NavLink
                  to="/cart"
                  className={({ isActive }) => `flex items-center gap-1.5 ${isActive ? 'font-bold' : 'font-normal'}`}
                >
                  <img src={Cart} alt="Cart" className="w-6 h-6" />
                  <span className="text-[20px] text-[#36731D]">Cart</span>
                </NavLink>

                <NavLink
                  to="/collection"
                  className={({ isActive }) => `flex items-center gap-1.5 ${isActive ? 'font-bold' : 'font-normal'}`}
                >
                  <img src={Bookmark} alt="Collection" className="w-6 h-6" />
                  <span className="text-[20px] text-[#36731D]">Collection</span>
                </NavLink>

                <NavLink
                  to="/profile"
                  className={({ isActive }) => `flex items-center gap-1.5 ${isActive ? 'font-bold' : 'font-normal'}`}
                >
                  <img src={User} alt="Profile" className="w-6 h-6" />
                  <span className="text-[20px] text-[#36731D]">Profile</span>
                </NavLink>

              </div>
            </div>

            <div className="flex items-center gap-4">
              <NavLink
                to="/login"
                className={({ isActive }) => `text-[18px] underline ${isActive ? 'font-semibold text-[#415227]' : 'font-extrabold text-[#415227]'}`}
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                className={({ isActive }) => `text-[18px] underline ${isActive ? 'font-semibold text-[#415227]' : 'font-extrabold text-[#415227]'}`}
              >
                Signup
              </NavLink>
            </div>
          </div>
        </nav>

        <div className="bg-white rounded-xl p-8 m-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SecondLayout;
