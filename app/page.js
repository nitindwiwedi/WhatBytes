"use client";
import ComparisonGraph from "@/components/ComparisonGraph";
import QuickStatistics from "@/components/QuickStatics";
import Leftside from "@/components/Leftside";
import Htmltest from "@/components/Htmltest";
import Questionanalysis from "@/components/Questionanalysis";
import Syllabuswiseanalysis from "@/components/Syllabuswiseanalysis";
import Navbar from "@/components/Navbar";
import Form from "@/components/Form";
import { useState } from "react";
import React from "react";

const page = () => {
  const [rank, setRank] = useState(0);
  const [percentile, setPercentile] = useState(0);
  const [score, setScore] = useState(0);
  const [panel, setpanel] = useState(false);
  return (
    <div className="relative">
      <div
        className={`${
          panel ? "block" : "hidden"
        } absolute w-full h-full flex items-center justify-center bg-transparent backdrop-blur-sm shadow-md z-10`}
      >
        <Form setpanel={setpanel} setRank={setRank} setScore={setScore} setPercentile={setPercentile} rank={rank} score={score} percentile={percentile}/>
      </div>
      <Navbar />
      <section className="flex">
        <div className="w-[17%] border-r-[1px] h-screen px-5 py-10">
          <Leftside />
        </div>
        <div className="w-[80%] mt-8 flex flex-col">
          <div className="ml-[2.1rem] mb-5 text-gray-700 font-medium">
            Skill Test
          </div>
          <div className="flex">
            <div className="w-[60%] px-8 flex flex-col gap-5">
              <div>
                <Htmltest setpanel={setpanel} />
              </div>
              <div>
                <QuickStatistics rank={rank} score={score} percentile={percentile}/>
              </div>
              <div>
                <ComparisonGraph />
              </div>
            </div>
            <div className="flex flex-col w-[40%] gap-5">
              <div>
                <Syllabuswiseanalysis />
              </div>
              <div>
                <Questionanalysis />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
