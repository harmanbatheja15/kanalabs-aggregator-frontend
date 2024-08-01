import React, { useState } from "react";
import ActiveTAsk from "../../../../assets/Icons/ActiveTasks.svg";
import ActivetasSelect from "../../../../assets/Icons/ActiveTasks-selected.svg";
import Stats from "../../../../assets/Icons/stats.svg";
import Achievements from "../../../../assets/Icons/Achievements.svg";
import Image from "next/image";
const Footer = () => {
  const [activeTasks, setActiveTasks] = useState(false);
  const [activeStats, setcActiveStats] = useState(false);
  const [activeAchievements, setActiveAchievments] = useState(false);

  const handleActiveTasks = () => {
    setActiveTasks(true);
    setcActiveStats(false);
    setActiveAchievments(false);
  };
  const handleStats = () => {
    setActiveTasks(false);
    setcActiveStats(true);
    setActiveAchievments(false);
  };
  const handleAchievements = () => {
    setActiveTasks(false);
    setcActiveStats(false);
    setActiveAchievments(true);
  };
  return (
    <div className="dark:bg-[#FCFDFE] bg-[#111213] xxl:h-auto xl:h-auto lg:h-auto md:h-screen sm:h-screen xd:h-screen w-screen">
      <div className="h-24 z-[1] dark:bg-[#FCFDFE] bg-[#111213] mt-40 !fixed !bottom-0 flex flex-row  items-start justify-evenly px-[0.5rem] w-full !font-inter ml-0 xxl:hidden bxl:hidden xl:hidden sxl:hidden lg:hidden md:flex sm:flex xd:flex">
        <div className="flex flex-row  items-start justify-evenly border-t-[#0E9384] dark:border-t-[#2ED3B7] border-t-[1px]  w-full">
          <div className="w-[20%] py-6 flex flex-col justify-center items-center gap-[0.5rem] text-[#A5A5A6] dark:text-[#777879] font-[400]">
            <Image src={ActivetasSelect} alt="ActiveTask" />
            <div className="text-[#2ED3B7]">ActiveStats</div>
          </div>
        </div>
        {/* <div className="flex flex-row  items-start justify-evenly  w-full">
          <div className="w-[20%] py-6 flex flex-col justify-center items-center gap-[0.5rem] text-[#A5A5A6] dark:text-[#777879] font-[400]">
            <Image src={Stats} alt="ActiveTask" />
            <div>Stats</div>
          </div>
        </div>
        <div className="flex flex-row  items-start justify-evenly  w-full">
          <div className="w-[20%] py-6 flex flex-col justify-center items-center gap-[0.5rem] text-[#A5A5A6] dark:text-[#777879] font-[400]">
            <Image src={Achievements} alt="ActiveTask" />
            <div>Achievement</div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
