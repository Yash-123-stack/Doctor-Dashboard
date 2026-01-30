"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type TopbarProps = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
};

export default function Topbar({ isSidebarOpen, toggleSidebar }: TopbarProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(!(currentScrollY > lastScrollY && currentScrollY > 100));
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <header
      className={`
        fixed top-0 right-0 h-16 bg-white shadow z-50
        flex items-center justify-between  px-4 sm:px-6
        transition-all duration-500
        ${isSidebarOpen ? "left-64" : "left-0"}
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      {/* Left Section (Burger + Title) */}
      <button
        onClick={toggleSidebar}
        className="group flex items-center gap-4 cursor-pointer"
      >
        <Image
          src="/images/burger-menu.svg"
          alt="Menu"
          width={20}
          height={20}
          className={`transition-transform duration-300
            ${isSidebarOpen ? "rotate-0" : "rotate-90"}
            group-hover:scale-110
          `}
        />

        <div className="hidden sm:block">
          <p className="text-black font-medium transition-colors group-hover:text-blue-600">
            BlueCare Hospital
          </p>
          <p className="text-gray-500 text-[12px] transition-colors group-hover:text-blue-400">
            Admin Dashboard
          </p>
        </div>
      </button>

      {/* Search */}
      <div className="relative w-full max-w-60 sm:max-w-md sm:mx-6 mx-3  group">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg
            className="h-4 w-4 text-gray-400 group-hover:text-blue-500 transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <input
          type="text"
          placeholder="Search patients, doctors, departments..."
          className="
            block w-full pl-10 pr-3 py-2 text-sm
            border border-gray-200 rounded-xl
            bg-[#F9FAFB] placeholder-gray-400
            outline-none transition-all duration-300
            hover:border-blue-400
            hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]
            focus:ring-2 focus:ring-blue-500/20
            focus:border-blue-500 focus:bg-white
          "
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        {/* Notifications */}
        <button className="relative p-2  rounded-full hover:bg-blue-50 transition-colors">
          <svg
            className="w-6 h-6 text-gray-500 hover:text-blue-600 transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11
              a6.002 6.002 0 00-4-5.659V5
              a2 2 0 10-4 0v.341
              C7.67 6.165 6 8.388 6 11v3.159
              c0 .538-.214 1.055-.595 1.436L4 17h5
              m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>

          <span className="absolute top-2 right-2 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
        </button>

        {/* User */}
        <button className="flex items-center gap-3 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:border-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all">
          <svg
            className="w-5 h-5 text-gray-500 hover:text-blue-600 transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586
              a1 1 0 01-.293.707l-6.414 6.414
              a1 1 0 00-.293.707V17l-4 4v-6.586
              a1 1 0 00-.293-.707L3.293 7.293
              A1 1 0 013 6.586V4z"
            />
          </svg>

          <span className="hidden sm:inline text-sm font-semibold text-gray-700">
            Super Admin
          </span>

          <svg
            className="w-4 h-4 text-gray-400 hover:text-blue-500 transition-all"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
