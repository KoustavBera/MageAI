import React, { useContext } from "react";
import { assets } from "../assets/assets.js";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext.jsx";
const Navbar = () => {
  const { user, setShowLogin, logout, credit } = useContext(AppContext);

  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between py-4">
      <NavLink to={"/"}>
        <div className="w-20 sm:w-20 lg:w-32">
          <img
            src={assets.MyLogo}
            alt="Image failed to load"
            className="w-full h-auto object-contain cursor-pointer"
          />
        </div>
      </NavLink>

      <div>
        {user ? (
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => navigate("/buy")}
              className="flex items-center gap-2 border-black border-2 border-b-4 bg-white px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700"
            >
              <i
                className="fa-regular fa-star text-xl animate-spin "
                style={{ color: "#FFD43B" }}
              ></i>
              <p className="text-xs sm:text-sm font-medium text-black ">
                Credit left : {credit}
              </p>
            </button>
            <p className="text-gray-600 max-sm:hidden pl-4  bg-white rounded-full border-2 border-b-4 border-black p-3">
              Hi,
              <span className="font-semibold text-[#c90050] text-2xl mx-5 ">
                {user.name}
              </span>{" "}
            </p>
            <div className="relative group">
              <img
                src={assets.profile_icon}
                alt=""
                className="w-10 drop-shadow  "
              />
              <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12 ">
                <ul className="list-none m-0 p-2 bg-white rounded-md border text-sm drop-shadow-sm hover:bg-zinc-200 hver:text-black">
                  <li
                    onClick={logout}
                    className="py-1 px-2 cursor-pointer pr-10 "
                  >
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 sm:gap-5">
            <p className="cursor-pointer " onClick={() => navigate("/buy")}>
              Pricing
            </p>
            <button
              className="bg-zinc-800 text-white px-10 py-2 sm:py-2 text-sm rounded-full"
              onClick={() => setShowLogin(true)}
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
