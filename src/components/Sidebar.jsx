import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-[18%] min-h-[100vh] border-[1.5px] border-solid border-gray-400 border-t-0 text-[max(1vw,10px)] ">
      {/* sidebar options */}
      <div className="pt-[50px] pl-[20%] flex flex-col gap-5">
        {/* sidebar option */}
        <NavLink
          to="/add"
          className={({ isActive }) =>
            `flex items-center gap-3 border-solid border-r-0 border px-[10px] py-2 rounded-[3px_0px_0px_3px] cursor-pointer ${
              isActive ? "bg-orange-300 border-orange-600 " : "border-gray-400"
            }`
          }
        >
          <img src={assets.add_icon} alt="" />
          <p className="max-900:hidden">Add Items</p>
        </NavLink>
        {/* sidebar option */}
        <NavLink
          to="/list"
          className={({ isActive }) =>
            `flex items-center gap-3 border-solid border-r-0 border px-[10px] py-2 rounded-[3px_0px_0px_3px] cursor-pointer ${
              isActive ? "bg-orange-300 border-orange-600 " : "border-gray-400"
            }`
          }
        >
          <img src={assets.order_icon} alt="" />
          <p className="max-900:hidden">List Items</p>
        </NavLink>
        {/* sidebar option */}
        <NavLink
          to="/orders"
          className={({ isActive }) =>
            `flex items-center gap-3 border-solid border-r-0 border px-[10px] py-2 rounded-[3px_0px_0px_3px] cursor-pointer ${
              isActive ? "bg-orange-300 border-orange-600 " : "border-gray-400"
            }`
          }
        >
          <img src={assets.order_icon} alt="" />
          <p className="max-900:hidden">Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
