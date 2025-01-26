"use client";
import React from "react";

const Syllabuswiseanalysis = () => {
  const syllabusData = [
    { name: "HTML Tools, Forms, History", level: 80, color: "bg-blue-500" },
    { name: "Tags & References in HTML", level: 60, color: "bg-orange-500" },
    { name: "Tables & References in HTML", level: 24, color: "bg-red-500" },
    { name: "Tables & CSS Basics", level: 96, color: "bg-green-500" },
  ];
  return (
    <div>
      <div className="p-6 bg-white rounded-lg border-[1px]">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">
          Syllabus Wise Analysis
        </h2>
        <div className="space-y-4">
          {syllabusData.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">
                  {item.name}
                </span>
                <span className="text-sm font-medium text-gray-700">
                  {item.level}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className={`${item.color} h-3 rounded-full`}
                  style={{ width: `${item.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Syllabuswiseanalysis;
