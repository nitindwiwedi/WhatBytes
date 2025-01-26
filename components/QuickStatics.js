"use client"
import { Trophy, Clipboard, CheckCircle } from "lucide-react"; // Icons for stats

export default function QuickStatistics({rank, score, percentile}) {
  const stats = [
    {
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
      value: rank,
      label: "YOUR RANK",
    },
    {
      icon: <Clipboard className="w-8 h-8 text-blue-500" />,
      value: `${percentile}%`,
      label: "PERCENTILE",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-500" />,
      value: `${score}/15`,
      label: "CORRECT ANSWERS",
    },
  ];

  return (
    <div className="px-6 py-3 bg-white border-[1px] rounded-lg">
      <h2 className="text-lg font-bold mb-4">Quick Statistics</h2>
      <div className="flex justify-between items-center">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex items-center gap-3"
          >
            <div className="flex items-center justify-center w-14 h-14 bg-gray-100 rounded-full">
              {stat.icon}
            </div>
            <div className="flex flex-col justify-start">
            <p className="text-sm font-bold">{stat.value}</p>
            <p className="text-gray-500 text-sm">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
