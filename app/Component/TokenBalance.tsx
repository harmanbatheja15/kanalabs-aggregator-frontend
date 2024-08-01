"use client";
import React from "react";
import Image from "next/image";
import Vector from "../../assets/Icons/vector-down-green.svg";
import ETH from "../../assets/Icons/ETH.svg";
import icon from "../../assets/Icons/Icon.png";
import iconLight from "../../assets/Icons/coins-swap-01-green-light.svg";
import USDC from "../../assets/Icons/USDC.svg";
import BTc from "../../assets/Icons/BTC.svg";
import Filter from "../../assets/Icons/filter-lines.svg";
import ChevronLight from "../../assets/Icons/chevron-down-light.svg";
import { useTheme } from "next-themes";

const TokenBalance = () => {
  const { theme } = useTheme();

  return (
    <div>
      <div className=" flex justify-center">
        <div className="xxl:bg-[#17181a] xl:bg-[#17181a] lg:bg-[#17181a] md:bg-[#0c0c0d] sm:bg-[#0c0c0d] xd:bg-[#0c0c0d] xxl:border-[0.063rem] xl:border-[0.063rem] lg:border-[0.063rem] md:border-none sm:border-none xd:border-none w-[40.75rem] rounded-[1rem] border-[0.063rem] border-[#2e2f31] my-2 dark:bg-[#FCFDFE] dark:border-[#E3E8EF]">
          <div className="gap-[0.5rem] flex justify-between p-4 border-b-2 border-[#2e2f31] dark:border-[#E3E8EF]">
            <div className="text-[#A5A5A6] dark:text-[#777879] text-[0.875rem] font-[700]">
              Balance
            </div>
            <div className="flex gap-[0.5rem]">
              <div className=" border-2 cursor-pointer border-[#2ED3B7] dark:border-[#0E9384] rounded-[0.5rem] xxl:w-[4rem] xl:w-[4rem] lg:w-[4rem] md:w-[4rem] sm:w-[rem] xd:w-[2rem] h-[2rem] flex justify-center items-center text-[0.75rem] text-[#2ED3B7] dark:text-[#0E9384] font-[700]">
                <div className="xxl:inline-flex xl:inline-flex lg:inline-flex md:hidden sm:hidden xd:hidden">
                  Filter
                </div>
                <Image
                  src={Filter}
                  alt="/"
                  className=" xxl:hidden xl:hidden lg:hidden md:inline-flex sm:inline-flex xd:inline-flex"
                />
              </div>
              <div className=" border-2 cursor-pointer border-[#2ED3B7] dark:border-[#0E9384] rounded-[0.5rem] w-[6.313rem] h-[2rem] flex justify-center items-center text-[0.75rem] text-[#2ED3B7] dark:text-[#0E9384] font-[700]">
                <span>All Wallets</span>
                <Image
                  src={theme === "light" ? Vector : ChevronLight}
                  alt="Vector"
                  className=" ml-2"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="gap-[0.5rem] flex justify-between p-5 border-b-2 border-[#2e2f31] dark:border-[#E3E8EF]">
              <div className=" flex flex-col">
                <div className="text-[#A5A5A6] dark:text-[#777879] text-[0.875rem] font-[700]">
                  Total
                </div>
                <div className="text-[#A5A5A6] dark:text-[#777879] text-[0.75rem] pt-1">
                  Showing total of 2 wallets
                </div>
              </div>
              <div className=" pt-3">
                <span className="text-[#FFFFFFCC] dark:text-[#777879] font-[700]">
                  1,628.99
                </span>
                <span className="text-[#A5A5A6] dark:text-[#777879] pl-1">
                  USD
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className=" flex justify-between p-[2%_4%]">
              <div className=" flex">
                <Image src={ETH} alt="ETH" />
                <div className=" flex flex-col pl-2">
                  <span className="text-[#FFFFFFCC] dark:text-[#4A4B4D] dark:font-[700] font-[800] text-[1rem]">
                    ETH
                  </span>
                  <span className="text-[#A5A5A6] text-[0.75rem] font-[400]">
                    Ethereum
                  </span>
                </div>
              </div>
              <div className=" flex">
                <div className="flex flex-col">
                  <span className="text-[#FFFFFFCC] dark:text-[#4A4B4D] dark:font-[700]  font-[800] text-[1rem]">
                    1,628.99
                  </span>
                  <span className="text-[#A5A5A6] text-[0.75rem] font-[400] text-right">
                    11.99 USD
                  </span>
                </div>
                <div className=" pt-1.5 pl-4 cursor-pointer">
                  <Image src={theme === "light" ? icon : iconLight} alt="/" />
                </div>
              </div>
            </div>
            <div className=" flex justify-between p-[2%_4%]">
              <div className=" flex">
                <Image src={USDC} alt="ETH" />
                <div className=" flex flex-col pl-2">
                  <span className="text-[#FFFFFFCC] dark:text-[#4A4B4D] dark:font-[700] font-[800] text-[1rem]">
                    USDC
                  </span>
                  <span className="text-[#A5A5A6] text-[0.75rem] font-[400]">
                    USDC
                  </span>
                </div>
              </div>
              <div className=" flex">
                <div className="flex flex-col">
                  <span className="text-[#FFFFFFCC] dark:text-[#4A4B4D] dark:font-[700] font-[800] text-[1rem]">
                    1,628.99
                  </span>
                  <span className="text-[#A5A5A6] text-[0.75rem] font-[400] text-right">
                    11.99 USD
                  </span>
                </div>
                <div className=" pt-1.5 pl-4 cursor-pointer">
                <Image src={theme === "light" ? icon : iconLight} alt="/" />
                </div>
              </div>
            </div>
            <div className=" flex justify-between p-[2%_4%]">
              <div className=" flex">
                <Image src={USDC} alt="ETH" />
                <div className=" flex flex-col pl-2">
                  <span className="text-[#FFFFFFCC] dark:text-[#4A4B4D] dark:font-[700] font-[800] text-[1rem]">
                    USDC
                  </span>
                  <span className="text-[#A5A5A6] text-[0.75rem] font-[400]">
                    USDC
                  </span>
                </div>
              </div>
              <div className=" flex">
                <div className="flex flex-col">
                  <span className="text-[#FFFFFFCC] dark:text-[#4A4B4D] dark:font-[700] font-[800] text-[1rem]">
                    1,628.99
                  </span>
                  <span className="text-[#A5A5A6] text-[0.75rem] font-[400] text-right">
                    11.99 USD
                  </span>
                </div>
                <div className=" pt-1.5 pl-4 cursor-pointer">
                <Image src={theme === "light" ? icon : iconLight} alt="/" />
                </div>
              </div>
            </div>
            <div className=" flex justify-between p-[2%_4%]">
              <div className=" flex">
                <Image src={BTc} alt="ETH" />
                <div className=" flex flex-col pl-2">
                  <span className="text-[#FFFFFFCC] dark:text-[#4A4B4D] dark:font-[700] font-[800] text-[1rem]">
                    BTC
                  </span>
                  <span className="text-[#A5A5A6] text-[0.75rem] font-[400]">
                    Bitcoin
                  </span>
                </div>
              </div>
              <div className=" flex">
                <div className="flex flex-col">
                  <span className="text-[#FFFFFFCC] dark:text-[#4A4B4D] dark:font-[700] font-[800] text-[1rem]">
                    1,628.99
                  </span>
                  <span className="text-[#A5A5A6] text-[0.75rem] font-[400] text-right">
                    11.99 USD
                  </span>
                </div>
                <div className=" pt-1.5 pl-4 cursor-pointer">
                <Image src={theme === "light" ? icon : iconLight} alt="/" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenBalance;
