import React from "react";
import Image from "next/image";
import Close from "../../assets/Icons/x-close.svg";
import ChevronDown from "../../assets/Icons/chevron-down.svg";
import closelight from "../../assets/Icons/x-close-light.svg";
import { Switch } from "antd";
import { useTheme } from "next-themes";
interface PreferencesInterface {
  handleClosePrefrences(): void;
}
const Preferences = (props: PreferencesInterface) => {
  const { handleClosePrefrences } = props;
  const { theme } = useTheme();

  return (
    <div>
      <div className="fixed font-manrop z-[2] inset-0 h-full w-full bg-[rgba(0,0,0,0.20)] backdrop-blur-[0.75rem] flex flex-row justify-center 2xl:items-center xl:items-center lg:items-center md:items-center sm:items-center max-sm:items-center">
        <div className=" rounded-[1rem] border-2 dark:bg-[#ebedee] border-[#2e2f31] dark:border-[#E3E8EF] w-[35rem] dark:font-[800]">
          <div className=" bg-[#ffffff0f] dark:bg-[#EFF7F8] w-auto h-[4.5rem] rounded-t-[1rem] flex justify-between text-[#FFFFFF] dark:text-[#0C0C0D] font-[800] text-[1.125rem] p-[2%_6%]">
            <div className=" py-3">Preferences</div>
            <Image
              src={theme === "light" ? Close : closelight}
              alt="Close"
              className=" cursor-pointer"
              onClick={handleClosePrefrences}
            />
          </div>
          <div>
            <div>
              <div className="flex justify-between gap-[0.5rem] px-8 pt-8">
                <div className=" text-[#FFFFFFCC] dark:text-[#4A4B4D]   text-[0.875rem] font-[400] dark:font-[800]">
                  Slippage tolerance
                </div>
                <div className=" flex">
                  <div className="text-[0.75rem] bg-[#0C0C0D] dark:bg-[#FCFDFE]  text-[#FFFFFFCC] dark:text-[#4A4B4D] p-1.5 flex justify-between border-2 rounded-[0.5rem] h-[2.125rem] border-[#2ED3B7] cursor-pointer ml-2">
                    0.1%
                  </div>
                  <div className="text-[0.75rem] bg-[#17181A] dark:bg-[#FCFDFE]  text-[#FFFFFFCC] dark:text-[#4A4B4D] p-1.5 flex justify-between border-2 rounded-[0.5rem] h-[2.125rem] border-[#2e2f31] dark:border-[#E3E8EF]  cursor-pointer ml-2">
                    0.5%
                  </div>
                  <div className="text-[0.75rem] bg-[#17181A] dark:bg-[#FCFDFE]  text-[#FFFFFFCC] dark:text-[#4A4B4D] p-1.5 flex justify-between border-2 rounded-[0.5rem] h-[2.125rem] border-[#2e2f31] dark:border-[#E3E8EF]  cursor-pointer ml-2">
                    0.1%
                  </div>
                  <div className="text-[0.75rem] bg-[#17181A] dark:bg-[#FCFDFE]  text-[#FFFFFFCC] dark:text-[#4A4B4D]  p-1.5 flex justify-between border-2 rounded-[0.5rem] h-[2.125rem] border-[#2e2f31] dark:border-[#E3E8EF]  cursor-pointer ml-2">
                    <span className="text-[#777879] dark:text-[#4A4B4D]  ">
                      Custom
                    </span>
                    <span className=" pl-2"> %</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between gap-[0.5rem] px-8 pt-8">
                <div className=" text-[#FFFFFFCC] dark:text-[#4A4B4D]   text-[0.875rem] font-[400] dark:font-[800]">
                  Infinite approval
                </div>
                <Switch />
              </div>
              <div className="flex justify-between gap-[0.5rem] px-8 pt-8">
                <div className=" text-[#FFFFFFCC]  dark:text-[#4A4B4D] text-[0.875rem] font-[400] dark:font-[800]">
                  Liquidity sources (64 out of 64 selected)
                </div>
              </div>
              <div className="flex justify-between gap-[0.5rem] px-8 pt-8">
                <div className=" text-[#FFFFFFCC]  dark:text-[#4A4B4D] text-[0.875rem] font-[400] dark:font-[800]">
                  Transaction deadline
                </div>
                <div className="text-[0.75rem] bg-[#17181A] dark:bg-[#FCFDFE] text-[#FFFFFFCC] dark:text-[#4A4B4D] p-1.5 flex justify-between border-2 rounded-[0.5rem] h-[2.125rem] border-[#2e2f31] dark:border-[#E3E8EF]   cursor-pointer ml-2">
                  1
                  <span className="text-[#777879] dark:text-[#A5A5A6]  pl-1">
                    hrs
                  </span>
                </div>
              </div>
              <div className="flex justify-between gap-[0.5rem] px-8 pt-8">
                <div className=" text-[#FFFFFFCC] dark:text-[#4A4B4D] text-[0.875rem] font-[400] dark:font-[800]">
                  Max gas fees
                </div>
                <div className="text-[0.75rem] bg-[#17181A] dark:bg-[#FCFDFE] text-[#FFFFFFCC] dark:text-[#4A4B4D] p-1.5 flex justify-between border-2 rounded-[0.5rem] h-[2.125rem] border-[#2e2f31] dark:border-[#E3E8EF]   cursor-pointer ml-2">
                  0.50{" "}
                  <span className="text-[#777879] dark:text-[#A5A5A6] pl-2">
                    USD
                  </span>
                </div>
              </div>
              <div className="gap-[0.5rem] px-8 pt-5 pb-6 ">
                <div className=" text-[#F04438] text-[0.875rem] font-[400] dark:font-[800]">
                  Reset Setting
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preferences;
