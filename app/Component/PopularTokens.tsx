import React from "react";
import Image from "next/image";
import Bsc from "../../assets/Icons/BTC.svg";
import USdc from "../../assets/Icons/USDC.svg";

const PopularTokens = () => {
  return (
    <div>
      <div className="xxl:w-[40.75rem] xl:w-[40.75rem] lg:w-[33.5rem] md:w-full sm:w-full xd:w-full bg-[#17181A] dark:bg-[#FCFDFE]  border-2 border-[#ffffff1a] dark:border-[#E3E8EF] rounded-[1rem] font-manrop dark:font-manrop mt-4">
        <div className=" flex justify-between p-4 border-b-2 border-[#ffffff1a] dark:border-[#E3E8EF]">
          <div className=" text-[#A5A5A6] font-[800] text-[0.875rem]">
            Popular tokens
          </div>
          <div className=" border-2 rounded-[0.5rem] text-[#2ED3B7] dark:text-[#0E9384] dark:border-[#0E9384] border-[#2ED3B7] flex text-[0.75rem] font-[800] justify-center items-center w-[5.063rem] h-[2rem] cursor-pointer">
            View Chart
          </div>
        </div>
        <div>
          <ul className=" overscroll-auto scrollbar-hide ">
            <li className=" flex justify-between p-4 gap-[1rem]">
              <div className="flex">
                <Image src={Bsc} alt="Token" />
                <div className=" flex flex-col pl-2 pt-1">
                  <span className="text-[1rem] text-[#FFFFFFCC] dark:text-[#4A4B4D] font-[800]">
                    Ether
                  </span>
                  <span className=" text-[0.875rem] text-[#A5A5A6] font-[400]">
                    ETH
                  </span>
                </div>
              </div>
              <div className=" flex flex-col">
                <span className="text-[1rem] text-[#FFFFFFCC] dark:text-[#4A4B4D] font-[800]">
                  $1628.99
                </span>
                <span className=" text-[0.875rem] text-[#12B76A] text-right font-[400] pt-2">
                  1.94%
                </span>
              </div>
            </li>
            <li className=" flex justify-between p-4 gap-[1rem]">
              <div className="flex">
                <Image src={USdc} alt="Token" />
                <div className=" flex flex-col pl-2 pt-1">
                  <span className="text-[1rem] text-[#FFFFFFCC] dark:text-[#4A4B4D] font-[800]">
                    USDCoin
                  </span>
                  <span className=" text-[0.875rem] text-[#A5A5A6] font-[400]">
                    USDC
                  </span>
                </div>
              </div>
              <div className=" flex flex-col">
                <span className="text-[1rem] text-[#FFFFFFCC] dark:text-[#4A4B4D] font-[800]">
                  $1.00
                </span>
                <span className=" text-[0.875rem] text-[#12B76A] text-right font-[400] pt-2">
                  0%
                </span>
              </div>
            </li>
            <li className=" flex justify-between p-4 gap-[1rem]">
              <div className="flex">
                <Image src={USdc} alt="Token" />
                <div className=" flex flex-col pl-2 pt-1">
                  <span className="text-[1rem] text-[#FFFFFFCC] dark:text-[#4A4B4D] font-[800]">
                    USDCoin
                  </span>
                  <span className=" text-[0.875rem] text-[#A5A5A6] font-[400]">
                    USDC
                  </span>
                </div>
              </div>
              <div className=" flex flex-col">
                <span className="text-[1rem] text-[#FFFFFFCC] dark:text-[#4A4B4D] font-[800]">
                  $1.00
                </span>
                <span className=" text-[0.875rem] text-[#12B76A] text-right font-[400] pt-2">
                  0%
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PopularTokens;
