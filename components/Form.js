"use client";
import React from "react";
import { useState } from "react";

const Form = (props) => {

  
  const [count, setCount] = useState(0);
  console.log(count);

  const handleSave = () => {
    // Add logic to save or process the scores here
    props.setpanel(false);
    
  };

  const handleCancel = () => {
    props.setRank(1);
    props.setPercentile(30);
    props.setScore(10);
    props.setpanel(false);
  };

  return (
    <div>
      <div className="flex rounded-md border-[1px] bg-blur flex-col items-center justify-center">
        <div className="bg-white rounded-2xl p-6 w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6">Update scores</h1>

          <div className="space-y-4">
            <div className="flex justify-between">
              <label className="flex items-center text-sm text-nowrap font-medium mb-1">
                <span className="bg-blue-500 text-white w-6 h-6 flex items-center justify-center rounded-full mr-2">
                  1
                </span>
                Update your <span className="ml-1 font-semibold">Rank</span>
              </label>
              <input
                type="text"
                value={props.rank}
                onChange={(e) => props.setRank(e.target.value)}
                className="w-[40%] border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex justify-between">
              <label className="flex items-center text-sm text-nowrap font-medium mb-1">
                <span className="bg-blue-500 text-white w-6 h-6 flex items-center justify-center rounded-full mr-2">
                  2
                </span>
                Update your{" "}
                <span className="ml-1 font-semibold">Percentile</span>
              </label>
              <input
                type="text"
                value={props.percentile}
                onChange={(e) => props.setPercentile(e.target.value)}
                className="w-[40%] border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex justify-between">
              <label className="flex items-center text-sm text-nowrap font-medium mb-1">
                <span className="bg-blue-500 text-white w-6 h-6 flex items-center justify-center rounded-full mr-2">
                  3
                </span>
                Update your{" "}
                <span className="ml-1 font-semibold">
                  Current Score (out of 15)
                </span>
              </label>
              <input
                type="text"
                value={props.score}
                onChange={(e) => props.setScore(e.target.value)}
                className="w-[40%] border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex justify-between mt-6">
            <button
              onClick={handleCancel}
              variant="outline"
              className="w-1/5 mr-2 bg-red-600 p-2 text-white rounded-lg"
            >
              cancel
            </button>
            <button
              onClick={handleSave}
              className="w-1/5 bg-indigo-600 p-2 text-white rounded-lg"
            >
              save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
