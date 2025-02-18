import React from "react";
import { assets } from "../assets/assets";

const NavBar = ({ setToken }) => {
  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <div className="flex justify-between items-center px-[4%] py-2">
      {/* logo */}
      <img className="w-[max(10%,80px)]  " src={assets.logo} alt="" />
      <button
        onClick={logout}
        className="bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm"
      >
        Logout
      </button>
    </div>
  );
};

export default NavBar;
