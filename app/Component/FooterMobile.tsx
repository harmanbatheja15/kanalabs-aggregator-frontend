"use client";
import React, { useState } from "react";
import Clockrewind from "../../assets/Icons/coins-swap-01.svg";
import Clockrewind2 from "../../assets/Icons/coins-swap-02.svg";
import Coinbase from "../../assets/Icons/clock-rewind.svg";
import coinbase2 from "../../assets/Icons/clock-rewind-2.svg";
import user from "../../assets/Icons/user-circle-1.svg";
import user2 from "../../assets/Icons/user-circle-green.svg";
import piggy from "../../assets/Icons/piggy-bank-02.svg";
import Piggy2 from "../../assets/Icons/piggy-bank-green.svg";
import Image from "next/image";

const FooterMobile = () => {
  const [isHomeActive, setIsHomeActive] = useState(false);
  const [isHistoryActive, setIsHistoryActive] = useState(false);
  const [isBalanceActive, setIsBalanceActive] = useState(false);
  const [isProfileActive, setIsProfileActive] = useState(false);
  const handlehome = () => {
    setIsHomeActive(true);
    setIsHistoryActive(false);
    setIsBalanceActive(false);
    setIsProfileActive(false);
  };
  const handleHistory = () => {
    setIsHomeActive(false);
    setIsHistoryActive(true);
    setIsBalanceActive(false);
    setIsProfileActive(false);
  };
  const handleBalance = () => {
    setIsHomeActive(false);
    setIsHistoryActive(false);
    setIsBalanceActive(true);
    setIsProfileActive(false);
  };
  const handleProfile = () => {
    setIsHomeActive(false);
    setIsHistoryActive(false);
    setIsBalanceActive(false);
    setIsProfileActive(true);
  };
  return (
    <>
      {/* {isHomeActive ? <></> : <></>}
      {isHistoryActive ? <></> : <></>}
      {isProfileActive ? <></> : <></>}
      {isBalanceActive ? <></> : <></>} */}
      <div className="2xl:hidden xl:hidden lg:hidden md:inline-flex sm:inline-flex xd:inline-flex container-fluid z-[1] justify-center items-end">
        <div className="h-24 z-[1] !bg-[#17181A] dark:!bg-[#ebedee] !fixed !bottom-0 flex  justify-between w-full px-[0.5rem] !font-manrop ml-0 xxl:hidden bxl:hidden xl:hidden sxl:hidden lg:hidden md:flex sm:flex xd:flex">
          <div
            className={`${
              isHomeActive ? " border-t-[#2ED3B7] border-t-2" : ""
            } flex flex-col justify-center items-center w-[5.625rem]`}
            onClick={handlehome}
          >
            {isHomeActive ? (
              <Image
                src={Clockrewind2}
                alt="coinbase"
                className=" w-[1.5rem] h-[1.5rem]"
              />
            ) : (
              <Image
                src={Clockrewind}
                alt="Clockrewind"
                className=" w-[1.5rem] h-[1.5rem]"
              />
            )}
            <div
              className={`${
                isHomeActive ? "text-[#2ED3B7] " : "text-[#A5A5A6]"
              } font-manrope text-[10px] font-[400] pt-2`}
            >
              Home
            </div>
          </div>
          <div
            className={`${
              isHistoryActive ? " border-t-[#2ED3B7] border-t-2" : ""
            } flex flex-col justify-center items-center w-[5.625rem]`}
            onClick={handleHistory}
          >
            {isHistoryActive ? (
              <Image
                src={coinbase2}
                alt="coinbase"
                className=" w-[1.5rem] h-[1.5rem]"
              />
            ) : (
              <Image
                src={Coinbase}
                alt="Clockrewind"
                className=" w-[1.5rem] h-[1.5rem]"
              />
            )}
            <div
              className={`${
                isHistoryActive ? "text-[#2ED3B7] " : "text-[#A5A5A6]"
              } font-manrope text-[10px] font-[400] pt-2`}
            >
              History
            </div>
          </div>

          <div
            className={`${
              isBalanceActive ? " border-t-[#2ED3B7] border-t-2" : ""
            } flex flex-col justify-center items-center w-[5.625rem]`}
            onClick={handleBalance}
          >
            {isBalanceActive ? (
              <Image
                src={Piggy2}
                alt="coinbase"
                className=" w-[1.5rem] h-[1.5rem]"
              />
            ) : (
              <Image
                src={piggy}
                alt="Clockrewind"
                className=" w-[1.5rem] h-[1.5rem]"
              />
            )}
            <div
              className={`${
                isBalanceActive ? "text-[#2ED3B7] " : "text-[#A5A5A6]"
              } font-manrope text-[10px] font-[400] pt-2`}
            >
              Balance
            </div>
          </div>
          <div
            className={`${
              isProfileActive ? " border-t-[#2ED3B7] border-t-2" : ""
            } flex flex-col justify-center items-center w-[5.625rem]`}
            onClick={handleProfile}
          >
            {isProfileActive ? (
              <Image
                src={user2}
                alt="coinbase"
                className=" w-[1.5rem] h-[1.5rem]"
              />
            ) : (
              <Image
                src={user}
                alt="Clockrewind"
                className=" w-[1.5rem] h-[1.5rem]"
              />
            )}
            <div
              className={`${
                isProfileActive ? "text-[#2ED3B7] " : "text-[#A5A5A6]"
              } font-manrope text-[10px] font-[400] pt-2`}
            >
              Profile
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterMobile;
