import React from "react";

const LeaderBoard = () => {
  return (
    <div>
      <div className="xxl:w-[40.75rem] xl:w-[40.75rem] lg:w-auto md:w-full sm:w-full xd:w-full bg-[#17181A] dark:bg-[#FCFDFE] border-2 border-[#ffffff1a] dark:border-[#E3E8EF]  rounded-[1rem] font-manrop my-4">
        <div className=" flex justify-between p-4 border-b-2 border-[#ffffff1a] dark:border-[#E3E8EF]">
          <div className=" text-[#A5A5A6] dark:text-[#777879] font-[800] text-[0.875rem]">
            Leaderboard
          </div>
          <div className=" border-2 rounded-[0.5rem] text-[#2ED3B7] dark:text-[#0E9384] dark:border-[#0E9384] font-[800] border-[#2ED3B7] flex justify-center items-center w-[5.063rem] h-[2rem] cursor-pointer">
            View all
          </div>
        </div>
        <div className=" overscroll-auto">
          <div className=" flex justify-between px-5 py-2">
            <div className=" flex ">
              <div className="text-[#4A4B4D] dark:text-[#D2D2D2] text-[1.5rem] font-[700]">
                1
              </div>
              <div className="text-[#FFFFFFCC] dark:text-[#4A4B4D] text-[0.875rem] pl-7 font-[700] pt-2">
                Name
              </div>
            </div>
            <div className="text-[#FFFFFFCC] text-[0.75rem] font-[400] dark:text-[#4A4B4D] pt-2">
              Score
            </div>
          </div>
          <div className=" flex justify-between px-5 py-2">
            <div className=" flex ">
              <div className="text-[#4A4B4D] dark:text-[#D2D2D2] text-[1.5rem] font-[700]">
                2
              </div>
              <div className="text-[#FFFFFFCC] dark:text-[#4A4B4D] text-[0.875rem] pl-6 font-[700] pt-2">
                Name
              </div>
            </div>
            <div className="text-[#FFFFFFCC] text-[0.75rem] font-[400] dark:text-[#4A4B4D] pt-2">
              Score
            </div>
          </div>
          <div className=" flex justify-between px-5 py-2">
            <div className=" flex ">
              <div className="text-[#4A4B4D] dark:text-[#D2D2D2] text-[1.5rem] font-[700]">
                3
              </div>
              <div className="text-[#FFFFFFCC] dark:text-[#4A4B4D] text-[0.875rem] pl-6 font-[700] pt-2">
                Name
              </div>
            </div>
            <div className="text-[#FFFFFFCC] text-[0.75rem] font-[400] dark:text-[#4A4B4D] pt-2">
              Score
            </div>
          </div>
          <div className=" flex justify-between px-5 py-2">
            <div className=" flex ">
              <div className="text-[#4A4B4D] dark:text-[#D2D2D2] text-[1.5rem] font-[700]">
                4
              </div>
              <div className="text-[#FFFFFFCC] dark:text-[#4A4B4D] text-[0.875rem] pl-6 font-[700] pt-2">
                Name
              </div>
            </div>
            <div className="text-[#FFFFFFCC] text-[0.75rem] font-[400] dark:text-[#4A4B4D] pt-2">
              Score
            </div>
          </div>
          <div className=" flex justify-between px-5 py-2">
            <div className=" flex ">
              <div className="text-[#4A4B4D] dark:text-[#D2D2D2] text-[1.5rem] font-[700]">
                5
              </div>
              <div className="text-[#FFFFFFCC] dark:text-[#4A4B4D] text-[0.875rem] pl-6 font-[700] pt-2">
                Name
              </div>
            </div>
            <div className="text-[#FFFFFFCC] text-[0.75rem] font-[400] dark:text-[#4A4B4D] pt-2">
              Score
            </div>
          </div>
          <div className=" flex justify-between px-5 py-2">
            <div className=" flex ">
              <div className="text-[#4A4B4D] dark:text-[#D2D2D2] text-[1.5rem] font-[700]">
                6
              </div>
              <div className="text-[#FFFFFFCC] dark:text-[#4A4B4D] text-[0.875rem] pl-6 font-[700] pt-2">
                Name
              </div>
            </div>
            <div className="text-[#FFFFFFCC] text-[0.75rem] font-[400] dark:text-[#4A4B4D] pt-2">
              Score
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
