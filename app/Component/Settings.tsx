"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Close from "../../assets/Icons/x-close.svg";
import closelight from "../../assets/Icons/x-close-light.svg";

import ChevronDown from "../../assets/Icons/chevron-down.svg";
import { Switch } from "antd";
import { useTheme } from "next-themes";

interface SettingsInterface {
  handleCloseSettings(): void;
}
const Settings = (props: SettingsInterface) => {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const [usdcDropDown, setUsdcDropDown] = useState(false);
  const [islanguageDropDown, setIslanguageDropDown] = useState(false);
  const { theme, setTheme } = useTheme();
  const toggleDropdown = () => {
    setIsOpenDropDown(!isOpenDropDown);
  };
  const toggleUsdDropdown = () => {
    setUsdcDropDown(!usdcDropDown);
  };
  const toggleLanguageDropdown = () => {
    setIslanguageDropDown(!islanguageDropDown);
  };
  const { handleCloseSettings } = props;
  return (
    <div>
      <div className="fixed font-manrop z-[2] inset-0 h-full w-full bg-[rgba(0,0,0,0.20)] backdrop-blur-[0.75rem] flex flex-row justify-center xxl:items-center xl:items-center lg:items-center md:items-end sm:items-end max-sm:items-end xd:items-end">
        <div className=" rounded-[1rem] border-2 dark:bg-[#ebedee]  border-[#2e2f31] dark:border-[#E3E8EF] w-[35rem] dark:font-[800]">
          <div className=" bg-[#ffffff0f] dark:bg-[#EFF7F8] w-auto h-[4.5rem] rounded-t-[1rem] flex justify-between text-[#FFFFFF] dark:text-[#0C0C0D]  font-[800] text-[1.125rem] p-[2%_6%]">
            <div className=" py-3">Settings</div>
            <Image
              src={theme === "light" ? Close : closelight}
              alt="Close"
              className=" cursor-pointer"
              onClick={handleCloseSettings}
            />
          </div>
          <div>
            <div className="flex justify-between gap-[0.5rem] px-8 pt-8">
              <div className=" text-[#FFFFFFCC] dark:text-[#4A4B4D] text-[0.875rem] font-[400] dark:font-[800]">
                Theme
              </div>
              <div className=" flex" onClick={toggleDropdown}>
                <button className="text-[0.75rem] bg-[#17181A] dark:bg-[#FCFDFE] dark:border-[#E3E8EF] text-[#FFFFFFCC] dark:text-[#4A4B4D] dark:font-[800] p-1.5 flex justify-between border-2 rounded-[0.5rem] w-[10.43rem] h-[2.125rem] border-[#2e2f31]">
                  System theme (Light)
                  <Image
                    src={ChevronDown}
                    alt="ChevronDown"
                    className=" w-5 h-5"
                  />
                </button>
                {isOpenDropDown && (
                  <div>
                    <div className=" bg-[#17181A] dark:bg-[#FCFDFE] dark:border-[#E3E8EF] border-2 border-[#2e2f31] w-[10.43rem] rounded-[0.5rem] z-[2] absolute mt-10 ml-[-10.4rem]   gap-[1rem] p-2 ">
                      <div
                        className=" flex py-2 cursor-pointer hover:bg-[#2e2f31] dark:hover:dark:bg-[#EFF7F8]  hover:rounded-[0.5rem]"
                        onClick={() =>
                          setTheme(theme === "dark" ? "light" : "dark")
                        }
                      >
                        <div className="text-[#FFFFFFCC] dark:text-[#4A4B4D] text-[0.75rem] font-[800] pl-2 ">
                          Light Mode {theme === "light" ? "dark" : "Light"}
                        </div>
                      </div>
                      <div
                        className=" flex  py-2 cursor-pointer hover:bg-[#2e2f31] dark:hover:dark:bg-[#EFF7F8] hover:rounded-[0.5rem]"
                        onClick={() =>
                          setTheme(theme === "dark" ? "light" : "dark")
                        }
                      >
                        <div className="text-[#FFFFFFCC] dark:text-[#4A4B4D] text-[0.75rem] font-[800] pl-2 ">
                          Dark Mode {theme === "light" ? "dark" : "Light"}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-between gap-[0.5rem] px-8 pt-5 ">
              <div className=" text-[#FFFFFFCC] dark:text-[#4A4B4D] text-[0.875rem] font-[400] dark:font-[800]">
                Default Currency
              </div>
              <div className=" flex" onClick={toggleUsdDropdown}>
                <button className="text-[0.75rem] bg-[#17181A] dark:bg-[#FCFDFE] dark:border-[#E3E8EF] text-[#FFFFFFCC] dark:text-[#4A4B4D] p-1.5 flex justify-between border-2 rounded-[0.5rem] w-[4.25rem] h-[2.125rem] border-[#2e2f31]">
                  USD
                  <Image
                    src={ChevronDown}
                    alt="ChevronDown"
                    className=" w-5 h-5"
                  />
                </button>
                {usdcDropDown && (
                  <div>
                    <div className=" bg-[#17181A] dark:bg-[#FCFDFE]  dark:border-[#E3E8EF] border-2 border-[#2e2f31] w-[4.25rem] rounded-[0.5rem] z-[2] absolute mt-10 ml-[-4.2rem]   gap-[1rem] p-2 ">
                      <div className=" flex py-2 cursor-pointer hover:bg-[#2e2f31] dark:hover:dark:bg-[#EFF7F8] hover:rounded-[0.5rem]">
                        <div className="text-[#FFFFFFCC] dark:text-[#4A4B4D] text-[0.75rem] font-[800] pl-2 ">
                          USDC
                        </div>
                      </div>
                      <div className=" flex py-2 cursor-pointer hover:bg-[#2e2f31] dark:hover:dark:bg-[#EFF7F8] hover:rounded-[0.5rem]">
                        <div className="text-[#FFFFFFCC] dark:text-[#4A4B4D] text-[0.75rem] font-[800] pl-2 ">
                          ETH Coins
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-between gap-[0.5rem] px-8 pt-5">
              <div className=" text-[#FFFFFFCC] dark:text-[#4A4B4D] text-[0.875rem] font-[400] dark:font-[800]">
                RPC Endpoint
              </div>
              <div className=" flex">
                <button className="text-[0.75rem] bg-[#17181A] dark:bg-[#FCFDFE] dark:border-[#E3E8EF] text-[#FFFFFFCC] dark:text-[#4A4B4D] p-1.5 flex justify-between border-2 rounded-[0.5rem] w-[8.188rem] h-[2.125rem] border-[#2e2f31]">
                  Triton RPC Pool
                  <Image
                    src={ChevronDown}
                    alt="ChevronDown"
                    className=" w-5 h-5"
                  />
                </button>
              </div>
            </div>
            <div className="flex justify-between gap-[0.5rem] px-8 pt-5 ">
              <div className=" text-[#FFFFFFCC] dark:text-[#4A4B4D] text-[0.875rem] font-[400] dark:font-[800]">
                Direct Route
              </div>
              <div className=" flex">
                <Switch />
              </div>
            </div>
            <div className="flex justify-between gap-[0.5rem] px-8 pt-5 ">
              <div className=" text-[#FFFFFFCC] dark:text-[#4A4B4D] text-[0.875rem] font-[400] dark:font-[800]">
                Language
              </div>
              <div className=" flex" onClick={toggleLanguageDropdown}>
                <button className="text-[0.75rem] bg-[#17181A] dark:bg-[#FCFDFE] dark:border-[#E3E8EF] text-[#FFFFFFCC] dark:text-[#4A4B4D] p-1.5 flex justify-between border-2 rounded-[0.5rem] w-[5.313rem] h-[2.125rem] border-[#2e2f31]">
                  English
                  <Image
                    src={ChevronDown}
                    alt="ChevronDown"
                    className=" w-5 h-5"
                  />
                </button>
                {islanguageDropDown && (
                  <div>
                    <div className=" bg-[#17181A] dark:bg-[#FCFDFE] dark:border-[#E3E8EF] border-2 border-[#2e2f31] w-[5.313rem] rounded-[0.5rem] z-[2] absolute mt-10 ml-[-5.2rem]  gap-[1rem] p-2 ">
                      <div className=" flex py-2 cursor-pointer hover:bg-[#2e2f31] dark:hover:dark:bg-[#EFF7F8] hover:rounded-[0.5rem]">
                        <div className="text-[#FFFFFFCC] dark:text-[#4A4B4D] text-[0.75rem] font-[800] pl-2 ">
                          Korean
                        </div>
                      </div>
                      <div className=" flex py-2 cursor-pointer hover:bg-[#2e2f31] dark:hover:dark:bg-[#EFF7F8] hover:rounded-[0.5rem]">
                        <div className="text-[#FFFFFFCC] dark:text-[#4A4B4D] text-[0.75rem] font-[800] pl-2 ">
                          Japanese
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-between gap-[0.5rem] px-8 pt-5 ">
              <div className=" text-[#FFFFFFCC] dark:text-[#4A4B4D] text-[0.875rem] font-[400] dark:font-[800]">
                Preferred Explorer
              </div>
              <div className=" flex">
                <button className="text-[0.75rem] bg-[#17181A] dark:bg-[#FCFDFE] dark:border-[#E3E8EF] text-[#FFFFFFCC] dark:text-[#4A4B4D] p-1.5 flex justify-between border-2 rounded-[0.5rem] w-[5.313rem] h-[2.125rem] border-[#2e2f31]">
                  Default
                  <Image
                    src={ChevronDown}
                    alt="ChevronDown"
                    className=" w-5 h-5"
                  />
                </button>
              </div>
            </div>
            <div className="gap-[0.5rem] px-8 pt-5 pb-6 ">
              <div className=" text-[#F04438] text-[0.875rem] font-[800]">
                Reset Setting
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
