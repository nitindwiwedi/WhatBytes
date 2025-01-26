"use client"
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between px-7 py-5 text-black border-b-[1px]">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img
            src="/images/logo.png"// Replace with your logo path
            width={60}
            height={60}
            className="object-cover text-black"
          />
          <span className="text-2xl font-semibold">WhatBytes</span>
        </div>

        {/* Profile Section */}
        <div className="flex items-center space-x-2 border-[1px] px-2 py-1 rounded-md">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/034/210/205/small/3d-cartoon-baby-genius-photo.jpg" // Replace with your profile picture path
            width={30}
            height={30}
            className="border-[1px] border-black rounded-full object-cover"
          />
          <span className="text-sm font-bold">John Doe</span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
