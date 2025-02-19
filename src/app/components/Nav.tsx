import React, { useEffect } from "react";
import { House, Vote, CalendarDays, Cog } from "lucide-react";
import "./Nav.css";

export const Nav = ({ nav = "Home" }) => {
  const navs = [
    {
      title: "Home",
      url: "#",
      icon: House,
    },
    {
      title: "Results",
      url: "#",
      icon: Vote,
    },
    {
      title: "Upcoming",
      url: "#",
      icon: CalendarDays,
    },
    {
      title: "Settings",
      url: "#",
      icon: Cog,
    },
  ];

  return (
    <nav className="flex z-10 items-center justify-center w-[375px] self-center pl-4 pr-4 fixed bottom-0 bg-blue-500  ">
      <ul className="flex flex-1 transition-all duration-300 ease-linear">
        {navs.map((item) => {
          const isSelected = item.title === nav;
          return (
            <li
              key={item.title}
              className={`p-1 mb-2 flex-1 transition-all duration-300 ease-linear rounded-b-xl cursor-pointer flex flex-row justify-center items-center slide-in ${
                isSelected ? "bg-white font-bold" : ""
              }`}
            >
              <div className="flex flex-col items-center justify-center self-center">
                <span className={`${isSelected ? "text-black" : "text-white"}`}>
                  <item.icon size={18} />
                </span>
                <p
                  className={`block text-xs mt-1 ${
                    isSelected ? "text-black" : "text-white"
                  }`}
                >
                  {item.title}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
