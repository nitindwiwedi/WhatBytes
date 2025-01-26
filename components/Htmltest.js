"use client";
import React from "react";
import { useState } from "react";

const Htmltest = ({setpanel}) => {

  return (
    <div className="relative">
      
      <div className="flex items-center p-4 bg-white border-[1px] rounded-lg w-full">
        {/* Logo */}
        <div className="mr-4">
          <img
            src="https://mblogthumb-phinf.pstatic.net/MjAyNDA0MTlfMjMy/MDAxNzEzNDkyMzE3NDI4.SMN9SlM9LP5HVZtKz9kLALPHPHkBAd7iLdDqjAL-RPQg.4vVlEX40IZ3jqEPYYjKzJDzPxaz0aEsTAwEWhHoJ0tog.PNG/html_%EB%A1%9C%EA%B3%A0.png?type=w800"
            alt="HTML5 Logo"
            className="h-12 w-12"
          />
        </div>

        {/* Content */}
        <div className="flex-1">
          <h1 className="text-lg font-bold">Hyper Text Markup Language</h1>
          <p className="text-sm text-gray-500">
            Questions: <span className="font-medium">08</span> | Duration:{" "}
            <span className="font-medium">15 mins</span> | Submitted on{" "}
            <span className="font-medium">5 June 2021</span>
          </p>
        </div>

        {/* Update Button */}
        <button onClick={()=>{setpanel(true)}} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Update
        </button>
      </div>
    </div>
  );
};

export default Htmltest;
