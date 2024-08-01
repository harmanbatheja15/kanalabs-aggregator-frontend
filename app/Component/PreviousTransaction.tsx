import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Chevrondown from "../../assets/Icons/chevron-down.svg";
import Token from "../../assets/Icons/Token-img.svg";
import SubToken from "../../assets/Icons/Sub-Token.svg";
import Arrow from "../../assets/Icons/arrow-narrow-right.svg";
import SubtokenLight from "../../assets/Icons/Sub-Token-light.svg";
import { useTheme } from "next-themes";

const PreviousTransaction = () => {
  const { theme } = useTheme();
  return (
    <div>
      <div className="w-[40.75rem]  bg-[#17181A] dark:bg-[#FCFDFE] border-2 border-[#ffffff1a] dark:border-[#E3E8EF] rounded-[1rem] font-manrop my-4">
        <div className=" flex justify-between p-4 border-b-2 border-[#ffffff1a] dark:border-[#E3E8EF]">
          <div className=" text-[#A5A5A6] dark:text-[#777879] font-[800] text-[0.875rem]">
            Previous Transactions
          </div>
          <div>
            <button className="border-2 rounded-[0.5rem] text-[0.75rem] text-[#2ED3B7] dark:text-[#0E9384] font-[800] border-[#2ED3B7] dark:border-[#0E9384] flex justify-center items-center w-[10rem]  h-[2rem]">
              View all transactions
            </button>
          </div>
        </div>
        <div className=" flex justify-center pt-4">
          <div className="w-[38.75rem] bg-[#111213] dark:bg-[#F2F9F9] rounded-[0.5rem] border-2 border-[#ffffff1a] dark:border-[#E3E8EF]">
            <div className="px-2 py-2 w-full">
              <div className=" flex">
                <div className=" cursor-pointer">
                  <Image src={Token} alt="/" />
                  <Image
                    src={theme === "light" ? SubToken : SubtokenLight}
                    alt="/"
                    className=" absolute mt-[-1rem] ml-7"
                  />
                </div>
                <div className="flex flex-col px-3">
                  <div className="text-[#FFFFFFCC] dark:text-[#4A4B4D] font-[800] text-[0.875rem]">
                    52.97 ETH
                  </div>
                  <div className="text-[#A5A5A6] dark:text-[#777879] font-[400] text-[0.75rem]">
                    0xwalletaddressxyz
                  </div>
                </div>
                <Image src={Arrow} alt="Arrow" />
                <div className=" pl-5 cursor-pointer">
                  <Image src={Token} alt="/" />
                  <Image
                    src={theme === "light" ? SubToken : SubtokenLight}
                    alt="/"
                    className=" absolute mt-[-1rem] ml-7"
                  />
                </div>
                <div className="flex flex-col px-3">
                  <div className="text-[#FFFFFFCC] dark:text-[#4A4B4D] font-[800] text-[0.875rem]">
                    52.97 ETH
                  </div>
                  <div className="text-[#A5A5A6] dark:text-[#777879] font-[400] text-[0.75rem]">
                    0xwalletaddressxyz
                  </div>
                </div>
              </div>
              <div className=" flex justify-between p-[0%_2%]">
                <div className="flex pt-4">
                  <span className=" text-[0.75rem] text-[#777879] dark:text-[#A5A5A6] font-[400]">
                    Completed at
                  </span>
                  <span className=" text-[0.75rem] text-[#A5A5A6] dark:text-[#777879] font-[400] pl-1">
                    26/09/23 10:32 PM IST
                  </span>
                </div>
                <Image
                  src={Chevrondown}
                  alt="Chevrondown"
                  className=" cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-center pt-4">
          <div className="w-[38.75rem] bg-[#111213] dark:bg-[#F2F9F9] rounded-[0.5rem] border-2 border-[#ffffff1a] dark:border-[#E3E8EF]">
            <div className="px-2 py-2 w-full">
              <div className=" flex">
                <div className=" cursor-pointer">
                  <Image src={Token} alt="/" />
                  <Image
                    src={theme === "light" ? SubToken : SubtokenLight}
                    alt="/"
                    className=" absolute mt-[-1rem] ml-7"
                  />
                </div>
                <div className="flex flex-col px-3">
                  <div className="text-[#FFFFFFCC] dark:text-[#4A4B4D] font-[800] text-[0.875rem]">
                    52.97 ETH
                  </div>
                  <div className="text-[#A5A5A6]  dark:text-[#777879] font-[400] text-[0.75rem]">
                    0xwalletaddressxyz
                  </div>
                </div>
                <Image src={Arrow} alt="Arrow" />
                <div className=" pl-5 cursor-pointer">
                  <Image src={Token} alt="/" />
                  <Image
                    src={theme === "light" ? SubToken : SubtokenLight}
                    alt="/"
                    className=" absolute mt-[-1rem] ml-7"
                  />
                </div>
                <div className="flex flex-col px-3">
                  <div className="text-[#FFFFFFCC] dark:text-[#4A4B4D] font-[800] text-[0.875rem]">
                    52.97 ETH
                  </div>
                  <div className="text-[#A5A5A6]  dark:text-[#777879] font-[400] text-[0.75rem]">
                    0xwalletaddressxyz
                  </div>
                </div>
              </div>
              <div className=" flex justify-between p-[0%_2%]">
                <div className="flex pt-4">
                  <span className=" text-[0.75rem] text-[#777879] dark:text-[#A5A5A6] font-[400]">
                    Completed at
                  </span>
                  <span className=" text-[0.75rem] text-[#A5A5A6] dark:text-[#777879] font-[400] pl-1">
                    26/09/23 10:32 PM IST
                  </span>
                </div>
                <Image
                  src={Chevrondown}
                  alt="Chevrondown"
                  className=" cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" mb-4"></div>
      </div>
    </div>
  );
};

export default PreviousTransaction;
