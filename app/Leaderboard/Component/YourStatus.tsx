import React from "react";
import Image from "next/image";
import Trophy from "../../../../assets/Icons/trophy-01.svg";
import TrophyLight from "../../../../assets/Icons/trophy-light.svg";
import { useTheme } from "next-themes";

const YourStatus = () => {
  const { theme } = useTheme();
  return (
       <div className=" flex flex-col w-full">
        <div className="rounded-[1rem] border-2 border-[#ffffff1a] dark:border-[#e3e8ef] xxl:w-[26.813rem] xl:w-[26.813rem] lg:w-[26.813rem] md:w-auto sm:w-auto xd:w-auto bg-[#17181A] dark:bg-[#FCFDFE] h-[12rem] shadow-[#E4F2F3] xxl:ml-4 xl:ml-4 lg:ml-4 md:ml-0 sm:ml-0 xd:ml-0">
          <div className=" bg-[#111213] dark:bg-[#f2f9f9] h-[4.625rem] border-b-2 border-[#ffffff1a] dark:border-[#e3e8ef] rounded-t-[1rem]">
            <div className=" flex p-6">
              <Image
                src={theme  === "dark" ? TrophyLight : Trophy}
                alt="Trophy"
              />
              <div className="text-[#FFFFFF] dark:text-[#0C0C0D] font-[800] text-[0.875rem] pl-2 font-manrop">
                Last month winners
              </div>
            </div>
          </div>
          <ul>
            <li className=" flex justify-between text-[#FFFFFF] dark:text-[#0C0C0D] font-[400] text-[0.75rem] pt-3.5 gap-[1rem]">
              <div className=" pl-6">0x07742e9b...66e4fa3227</div>
              <div className=" mr-4">$431.10</div>
            </li>
            <li className=" flex justify-between text-[#FFFFFF] dark:text-[#0C0C0D] font-[400] text-[0.75rem] pt-3.5 gap-[1rem]">
              <div className=" pl-6">0x07742e9b...66e4fa3227</div>
              <div className=" mr-4">$431.10</div>
            </li>
            <li className=" flex justify-between text-[#FFFFFF] dark:text-[#0C0C0D] font-[400] text-[0.75rem] pt-3.5 gap-[1rem]">
              <div className=" pl-6">0x07742e9b...66e4fa3227</div>
              <div className=" mr-4">$431.10</div>
            </li>
          </ul>
        </div>
        <div className="rounded-[1rem] border-2 border-[#ffffff1a] dark:border-[#e3e8ef] xxl:w-[26.813rem] xl:w-[26.813rem] lg:w-[26.813rem] md:w-auto sm:w-auto xd:w-auto bg-[#17181A] dark:bg-[#FCFDFE] shadow-[#E4F2F3] xxl:ml-4 xl:ml-4 lg:ml-4 md:ml-0 sm:ml-0 xd:ml-0 mt-4">
          <div className=" h-[3.5rem] border-b-2 border-[#ffffff1a] dark:border-[#e3e8ef] rounded-t-[1rem]">
            <div className="text-[#A5A5A6] dark:text-[#777879] font-[800] text-[0.875rem] px-6 py-3.5 font-manrop">
              Your Stats
            </div>
          </div>
          <ul>
            <li className=" flex justify-between text-[#FFFFFF] dark:text-[#0C0C0D] font-[400] text-[0.75rem] pt-3.5 gap-[1rem]">
              <div className=" pl-6">Wallet Address</div>
              <div className=" mr-4">0xc01f..b05738</div>
            </li>
            <li className=" flex justify-between text-[#FFFFFF] dark:text-[#0C0C0D] font-[400] text-[0.75rem] pt-3.5 gap-[1rem]">
              <div className=" pl-6">Chain Rank</div>
              <div className=" mr-4">0</div>
            </li>
            <li className=" flex justify-between text-[#FFFFFF] dark:text-[#0C0C0D] font-[400] text-[0.75rem] pt-3.5 gap-[1rem]">
              <div className=" pl-6">Times won</div>
              <div className=" mr-4">0</div>
            </li>
            <li className=" flex justify-between text-[#FFFFFF] dark:text-[#0C0C0D] font-[400] text-[0.75rem] pt-3.5 gap-[1rem]">
              <div className=" pl-6">Overall Rank</div>
              <div className=" mr-4">0</div>
            </li>
          </ul>
          <div className=" flex justify-center items-center">
            <button className="text-[#17181A] dark:text-[#FCFDFE] w-[24.813rem] bg-[#2ED3B7] rounded-[0.5rem] h-[2rem] mt-5 font-[800] text-[0.75rem]">
              Connect wallet to see your stats
            </button>
          </div>
          <div className=" mt-4"></div>
        </div>
      </div>
   );
};

export default YourStatus;
