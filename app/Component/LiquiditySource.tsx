import React from "react";
import Image from "next/image";
import Close from "../../assets/Icons/x-close.svg";
import { Switch } from "antd";
import Search from "../../assets/Icons/search-md.svg";
import Token from "../../assets/Icons/Token.svg";
import { useTheme } from "next-themes";
import closelight from "../../assets/Icons/x-close-light.svg";

const LiquiditySource = () => {
  const { theme } = useTheme();
  return (
    <>
      <div>
        <div className="fixed font-manrop z-[2] inset-0 h-full w-full bg-[rgba(0,0,0,0.20)] backdrop-blur-[0.75rem] flex flex-row justify-center 2xl:items-center xl:items-center lg:items-center md:items-center sm:items-center max-sm:items-center">
          <div className=" rounded-[1rem] border-2 border-[#2e2f31] dark:border-[#E3E8EF]  w-[35rem]">
            <div className=" bg-[#ffffff0f] dark:bg-[#EFF7F8] w-auto h-[4.5rem] rounded-t-[1rem] flex justify-between text-[#FFFFFF] dark:text-[#0C0C0D] font-[800] text-[1.125rem] p-[2%_6%]">
              <div className=" py-3">Liquidity Sources</div>
              <Image
                src={theme === "light" ? Close : closelight}
                alt="Close"
                className=" cursor-pointer"
              />
            </div>
            <div className=" flex justify-center py-6">
              <div className=" w-[33rem] h-[3rem] rounded-[1rem] bg-[#111213] dark:bg-[#F2F9F9] gap-[0.5rem] border-2 border-[#2e2f31] dark:border-[#E3E8EF]">
                <div className=" flex p-2">
                  <Image src={Search} alt="/" className="mt-1" />
                  <input
                    placeholder="Search Aggregator/Bridge/DEX"
                    className="text-[1rem] text-[#A5A5A6] dark:text-[#777879] w-full font-[400] bg-transparent outline-none h-full pt-1.5 pl-2"
                  />
                </div>
              </div>
            </div>
            <div className=" flex justify-center">
              <div className="bg-[#17181A] dark:bg-[#FCFDFE] rounded-[1rem] w-[33rem] h-[20rem] mb-4 gap-[0.5rem] overflow-y-scroll scrollbar-hide">
                <div className="flex justify-between px-8 pt-5 ">
                  <div className=" text-[#FFFFFFCC] dark:text-[#4A4B4D] dark:font-[700] text-[1rem] font-[400] flex">
                    <Image src={Token} alt="Token" />
                    <span className=" pl-3 font-[700]">Token</span>
                  </div>
                  <Switch />
                </div>
                <div className="flex justify-between px-8 pt-10 ">
                  <div className=" text-[#FFFFFFCC] dark:text-[#4A4B4D] dark:font-[700] text-[1rem] font-[400] flex">
                    <Image src={Token} alt="Token" />
                    <span className=" pl-3 font-[700]">Token</span>
                  </div>
                  <Switch />
                </div>
                <div className="flex justify-between px-8 pt-10 ">
                  <div className=" text-[#FFFFFFCC] dark:text-[#4A4B4D] dark:font-[700] text-[1rem] font-[400] flex">
                    <Image src={Token} alt="Token" />
                    <span className=" pl-3 font-[700]">Token</span>
                  </div>
                  <Switch />
                </div>
                <div className="flex justify-between px-8 pt-10 ">
                  <div className=" text-[#FFFFFFCC] dark:text-[#4A4B4D] dark:font-[700] text-[1rem] font-[400] flex">
                    <Image src={Token} alt="Token" />
                    <span className=" pl-3 font-[700]">Token</span>
                  </div>
                  <Switch />
                </div>
                <div className="flex justify-between px-8 pt-10 ">
                  <div className=" text-[#FFFFFFCC] dark:text-[#4A4B4D] dark:font-[700] text-[1rem] font-[400] flex">
                    <Image src={Token} alt="Token" />
                    <span className=" pl-3 font-[700]">Token</span>
                  </div>
                  <Switch />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LiquiditySource;
