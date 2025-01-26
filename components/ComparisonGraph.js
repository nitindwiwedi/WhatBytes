"use client"
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

export default function ComparisonGraph() {
  const data = {
    labels: [0, 25, 50, 75],
    datasets: [
      {
        label: "Number of Students",
        data: [0, 22, 50, 20],
        borderColor: "#6366F1",
        backgroundColor: "rgba(99, 102, 241, 0.5)",
        pointBorderColor: "#6366F1",
        pointBackgroundColor: "#ffffff",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            return `numberOfStudent: ${context.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
        },
        grid:{
            display: false
        }
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
        },
        grid: {
            display: false
        }
      },
    },
  };

  return (
    <div className="px-6 py-3 bg-white border-[1px] rounded-lg w-full max-w-3xl">
      <h2 className="text-lg font-bold mb-4">Comparison Graph</h2>
      <p className="mb-4 text-gray-600">
        <span className="font-bold">You scored 30% percentile</span> which is lower than the
        average percentile <span className="font-bold">72%</span> of all the engineers who took
        this assessment.
      </p>
      <div className="relative mb-[-3%]">
        <Line data={data} options={options} />
        <div
          className="absolute left-[30%] bottom-36 text-sm text-gray-500"
          style={{ transform: "translateX(-50%)" }}
        >
          your percentile
        </div>
      </div>
    </div>
  );
}
