import { ChartNoAxesColumn, Award, StickyNote } from "lucide-react";
import React from "react";

const leftside = () => {
  const left = [
    {
      icon: <ChartNoAxesColumn className="w-4 h-4 text-black" />,
      label: "Dashboard",
    },
    {
      icon: <Award className="w-4 h-4 text-black" />,
      label: "Skill Test",
    },
    {
      icon: <StickyNote className="w-4 h-4 text-black" />,
      label: "Internships",
    },
  ];
  return (
    <div className="space-y-8">
      {left.map((val, index) => (
        <div key={index} className="p-4 bg-white rounded-lg cursor-pointer active:bg-gray-200 active:text-blue-600">
          <div className="flex items-center gap-2">
            <div className="text-xl">{val.icon}</div>
            <div className="font-bold">{val.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default leftside;
