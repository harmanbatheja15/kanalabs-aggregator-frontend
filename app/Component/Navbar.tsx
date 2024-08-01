/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from "react";
import Setting from "../../assets/Icons/settings.svg";
import Image from "next/image";
import User from "../../assets/Icons/user-circle.svg";
import Search from "../../assets/Icons/search-md.svg";
import Settings from "../Component/Settings";
import ConnectWallet from "./ConnectWallet";
import Logo from "../../assets/Icons/Small-logo.svg";
import mobileSetting from "../../assets/Icons/mobile-setting.svg";
import Sandwichmenu from "../../assets/Icons/sandwich-menu.svg";
import wrongRed from "../../assets/Icons/x-close-Red.svg";

import Yield from "../../assets/Icons/coins-hand.svg";
import { useTheme } from "next-themes";
import usercirlcelight from "../../assets/Icons/user-circle-light.svg";
import MenuLight from "../../assets/Icons/menu-light.svg";
import coinsLight from "../../assets/Icons/coins-swap-01-light.svg";
import SwapDark from '../../assets/Icons/swap_dark.svg';
import Swap from "../../assets/Icons/coins-swap.svg";
import StakeDark from '../../assets/Icons/stack_icon_dark.svg';
import Stake from "../../assets/Icons/stack_icon.svg";
import SwitchDark from '../../assets/Icons/switch_dark.svg';
import Switch from "../../assets/Icons/switch_icon.svg";
import Other from "../../assets/Icons/grid-others.svg";
import OtherDrop from "../../assets/Icons/chevron-down.svg";
import otherDropdark from "../../assets/Icons/chevron-down-white.svg";
import VectorDown from "../../assets/Icons/chevron-down.svg";
import LeaderboardDark from "../../assets/Icons/leader_board_dark.svg";
import Leaderboard from "../../assets/Icons/leader_board.svg";
import ReferralDark from "../../assets/Icons/referral_dark.svg";
import Referral from "../../assets/Icons/referral.svg";
import LogoLight from "../../assets/Icons/Logo-light.svg";
import Trade from "../../assets/Icons/Trade.svg";
import TradeDark from '../../assets/Icons/bar-chart-square-dark.svg'
const Navbar = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isWalletOpen, setWalletOpen] = useState(false);
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  const { theme } = useTheme();

  const openPopup = () => {
    setPopupOpen(true);
  };
  const openWallet = () => {
    setWalletOpen(true);
  };
  const handleCloseWalletToken = () => {
    setWalletOpen(false);
  };
  const handleCloseSettings = () => {
    setPopupOpen(false);
  };
  const handleMobileMenu = () => {
    setIsMobileMenuActive(!isMobileMenuActive);
  };
  const [activeItemSidebar, setActiveItemSidebar] = useState(1);
  const [isSubMenu, setIsSubMenu] = useState(false);
  const [isChevronCorrect, setIsChevronCorrect] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (id: any) => {
    if (id === 1) {
      if (id === activeItemSidebar) {
        return;
      } else {
        setActiveItemSidebar(id);
      }
    }
    if (id === 2) {
      setIsChevronCorrect(false);
      setActiveItemSidebar(id);
      setIsSubMenu(false);
    }
    if (id === 3) {
      setIsChevronCorrect(false);
      setActiveItemSidebar(id);
      setIsSubMenu(false);
    }
    if (id === 4) {
      setIsChevronCorrect(false);
      setActiveItemSidebar(id);
      setIsSubMenu(false);
    }
    if (id === 5) {
      setIsChevronCorrect(false);
      setActiveItemSidebar(id);
      setIsSubMenu(true);
    }
    if (id === 6) {
      setIsChevronCorrect(false);
      setActiveItemSidebar(id);
      setIsSubMenu(true);
    }
  };

  return (
    <div>
      <div className="font-manrope flex xxl:justify-center xl:justify-center lg:justify-normal md:justify-normal xxl:ml-[7.1rem] xl:ml-[3.1rem] lg:ml-[6.4rem] md:ml-0 sm:ml-0 xd:ml-0 z-[1] ">
        <div className="h-[6.5rem] xxl:w-11/12 xl:w-11/12 lg:w-full md:w-full sm:w-full xd:w-full 2xl:rounded-b-[1rem] xl:rounded-b-[1rem] lg:rounded-b-[1rem] md:rounded-b-none sm:rounded-none xd:rounded-none dark:bg-[#FCFDFE] bg-[#111213] p-[0%_2%] flex justify-between">
          <div className="2xl:hidden bxl:hidden xl:hidden sxl:hidden lg:hidden md:flex sm:flex xd:flex w-full justify-between">
            <div className=" flex ">
              <Image src={Logo} alt="" />
              
            </div>
            <div className="flex">
              <Image
                src={mobileSetting}
                alt="mobileSetting"
                onClick={openPopup}
              />
              <div onClick={handleMobileMenu} className=" flex">
                {isMobileMenuActive ? (
                  <Image src={wrongRed} alt="wrongRed" className=" ml-4" />
                ) : (
                  <Image
                    src={theme === "light" ? Sandwichmenu : MenuLight}
                    alt="Sandwichmenu"
                    className=" ml-4 mt-10 w-[1.5rem] h-[1.5rem]"
                  />
                )}
              </div>
            </div>
          </div>

          <div className=" w-[24.333rem] h-[3.5rem] rounded-[2rem] dark:bg-[#EFF7F8] bg-[#1D1E20]  mt-6 2xl:inline xl:inline lg:inline md:hidden sm:hidden xd:hidden">
            <div className="flex justify-between flex-wrap cursor-pointer p-4">
              <div className="font-bold text-[#A5A5A6] dark:text-[#777879]">
                Your Balance
              </div>
              <div className="text-[#4A4B4D] dark:text-[#777879] text-[0.875rem]">
                Wallet not connected
              </div>
            </div>
          </div>
          <div className=" w-[24.333rem] h-[3.5rem] rounded-[2rem] dark:bg-[#EFF7F8] bg-[#1D1E20] ml-3  mt-6 2xl:inline xl:inline lg:inline md:hidden sm:hidden xd:hidden">
            <div className="flex  cursor-pointer pt-4 pl-6">
              <div>
                <Image src={Search} alt="" />
              </div>
              <input
                placeholder="Search"
                className=" bg-transparent text-[#A5A5A6] dark:text-[#777879] dark:font-[500] font-[800] pl-2 outline-none"
              />
            </div>
          </div>
          <div
            className=" w-[24.333rem] h-[3.5rem] rounded-[2rem] dark:bg-[#EFF7F8] bg-[#1D1E20] ml-3 mt-6 2xl:inline xl:inline lg:inline md:hidden sm:hidden xd:hidden"
            onClick={openWallet}
          >
            <div className="flex cursor-pointer pt-4 pl-6 ">
              <div className="flex ">
                <Image
                  src={theme === "light" ? User : usercirlcelight}
                  alt="/"
                />
              </div>
              <div className=" pl-2 text-[#2ED3B7] dark:text-[#0E9384] dark:font-[700] font-[800] text-[0.875rem]">
                Connect wallet
              </div>
            </div>
          </div>

          <div className="h-[3.5rem] w-[3.5rem] rounded-[2.25rem] dark:!bg-[#EFF7F8] bg-[#1D1E20] ml-3 mt-6 cursor-pointer flex items-center justify-center 2xl:flex xl:flex lg:flex md:hidden sm:hidden xd:hidden">
            <Image src={Setting} alt="" onClick={openPopup} />
          </div>
        </div>
      </div>
      {isMobileMenuActive ? (
        <ul
          className={` flex-col w-full justify-between items-start py-3 mt-24 xxl:!hidden bxl:!hidden xl:!hidden sxl:!hidden lg:!hidden md:!flex sm:!flex xd:!flex md:pb-0 md:mt-24 sm:mt-24 xd:mt-24 z-[9] ${isMobileMenuActive
            ? "!fixed !right-0 !left-0   lg:!bottom-0 md:!bottom-24 sm:!bottom-24 xd:!bottom-24 !top-0	!bg-[#17181A] dark:!bg-[#FCFDFE] "
            : "hidden"
            }`}
        >
          <div className="flex flex-col justify-start items-start bg-transparent w-full gap-[0.5rem]">

            <a
              rel="noreferrer"
              href="https://app.kanalabs.io/"
              target="_blank"
              className="w-full  h-[52px] flex flex-row justify-start items-center    bg-transparent gap-[16px]"
            >
              <div
                className={` bg-transparent menu-item text-[1rem] my-[4px]  w-full h-auto text-[white] dark:text-[#0C0C0D] font-[600] flex flex-row justify-start items-center py-[1rem] px-[1.4rem] rounded-[16px] hover:bg-[rgba(255,255,255,0.06)] hover:dark:bg-[#EFF7F8] hover:opacity-[1] hover:text-[white] hover:font-[700] gap-[16px] ${activeItemSidebar === 3
                  ? ` font-[700] opacity-[1] bg-[rgba(255,255,255,0.06)]  dark:bg-[#EFF7F8]  `
                  : "opacity-[0.5]"
                  }`}
                onClick={() => handleClick(3)}
              >
                <div className=" flex flex-row justify-start items-center gap-[16px]">
                  <Image
                    className="bg-transparent  !h-[1rem]"
                    src={theme === "light" ? Swap : SwapDark}
                    alt="Swap"
                  />
                  <div>Swap</div>
                </div>

              </div>
            </a>
            <a
              rel="noreferrer"
              href="https://tradebook.kanalabs.io/"
              target="_blank"
              className="w-full  h-[52px] flex flex-row justify-start items-center    bg-transparent gap-[16px]"
            >
              <div
                className={` bg-transparent menu-item text-[1rem] my-[4px]  w-full h-auto text-[white] dark:text-[#0C0C0D] font-[600] flex flex-row justify-start items-center py-[1rem] px-[1.4rem] rounded-[16px] hover:bg-[rgba(255,255,255,0.06)] hover:dark:bg-[#EFF7F8] hover:opacity-[1] hover:text-[white] hover:font-[700] gap-[16px] ${activeItemSidebar === 2
                  ? `  font-[700] opacity-[1] bg-[rgba(255,255,255,0.06)]  dark:bg-[#EFF7F8]  `
                  : "opacity-[0.5]"
                  }`}
                onClick={() => handleClick(2)}
              >

                <div className=" flex flex-row justify-start items-center gap-[16px]">
                  <Image
                    className="bg-transparent "
                    src={theme === "light" ? Trade : TradeDark}
                    alt="TradeIcon"
                  />
                  <div>Trade</div>

                </div>
              </div>
            </a>


            <a
              rel="noreferrer"
              href="https://switch.kanalabs.io/"
              target="_blank"
              className="w-full  h-[52px] flex flex-row justify-start items-center    bg-transparent gap-[16px]"
            >
              <div
                className={` bg-transparent menu-item text-[1rem] my-[4px]  w-full h-auto text-[white] dark:text-[#0C0C0D] font-[600] flex flex-row justify-start items-center py-[1rem] px-[1.4rem] rounded-[16px] hover:bg-[rgba(255,255,255,0.06)] hover:dark:bg-[#EFF7F8] hover:opacity-[1] hover:text-[white] hover:font-[700] gap-[16px] ${activeItemSidebar === 4
                  ? `  font-[700] opacity-[1] bg-[rgba(255,255,255,0.06)]  dark:bg-[#EFF7F8]  `
                  : "opacity-[0.5]"
                  }`}
                onClick={() => handleClick(4)}
              >
                <div className=" flex flex-row justify-start items-center gap-[16px]">
                  <Image
                    className="bg-transparent  !h-[1rem]"
                    src={theme === "light" ? Switch : SwitchDark}
                    alt="Swap"
                  />
                  <div>Switch</div>
                </div>

              </div>
            </a>
            <a
              rel="noreferrer"
              href="https://app.kanalabs.io/stake-yield"
              target="_blank"
              className="w-full flex  h-[3.25rem] flex-row justify-start items-center    bg-transparent gap-[1rem]"
            >
              <div
                className={` bg-transparent menu-item text-[1rem] my-[4px]  w-full h-auto text-[white] dark:text-[#0C0C0D] font-[600] flex flex-row justify-start items-center py-[1rem] px-[1.4rem] rounded-[16px] hover:bg-[rgba(255,255,255,0.06)] hover:dark:bg-[#EFF7F8] hover:opacity-[1] hover:text-[white] hover:font-[700] gap-[16px] ${activeItemSidebar === 5
                  ? `  font-[700] opacity-[1] bg-[rgba(255,255,255,0.06)]  dark:bg-[#EFF7F8]  `
                  : "opacity-[0.5]"
                  }`}
                onClick={() => handleClick(5)}
              >
                <div className=" flex flex-row justify-start items-center gap-[1rem]">
                  <Image
                    className="bg-transparent  !h-[1rem]"
                    src={theme === "light" ? Stake : StakeDark}
                    alt="Swap"
                  />
                  <div>Stake</div>
                </div>

              </div>
            </a>
            <a
              rel="noreferrer"
              href="https://rewards.kanalabs.io/Leaderboard"
              target="_blank"
              className="w-full flex  h-[3.25rem] flex-row justify-start items-center    bg-transparent gap-[1rem]"
            >
              <div
                className={` bg-transparent menu-item text-[1rem] my-[4px]  w-full h-auto text-[white] dark:text-[#0C0C0D] font-[600] flex flex-row justify-start items-center py-[1rem] px-[1.4rem] rounded-[16px] hover:bg-[rgba(255,255,255,0.06)] hover:dark:bg-[#EFF7F8] hover:opacity-[1] hover:text-[white] hover:font-[700] gap-[16px] ${activeItemSidebar === 1
                  ? `  font-[700] opacity-[1] bg-[rgba(255,255,255,0.06)]  dark:bg-[#EFF7F8]  `
                  : "opacity-[0.5]"
                  }`}
                onClick={() => handleClick(1)}
              >
                <div className=" flex flex-row justify-start items-center gap-[1rem]">
                  <Image
                    className="bg-transparent  !h-[1rem]"
                    src={theme == 'light' ? Leaderboard : LeaderboardDark}
                    alt="Swap"
                  />
                  <div>Leaderboard</div>
                </div>

              </div>
            </a>
            <a
              rel="noreferrer"
              href="https://rewards.kanalabs.io/"
              target="_blank"
              className="w-full flex  h-[3.25rem] flex-row justify-start items-center    bg-transparent gap-[1rem]"
            >
              <div
                className={` bg-transparent menu-item text-[1rem] my-[4px]  w-full h-auto text-[white] dark:text-[#0C0C0D] font-[600] flex flex-row justify-start items-center py-[1rem] px-[1.4rem] rounded-[16px] hover:bg-[rgba(255,255,255,0.06)] hover:dark:bg-[#EFF7F8] hover:opacity-[1] hover:text-[white] hover:font-[700] gap-[16px] ${activeItemSidebar === 6
                  ? `  font-[700] opacity-[1] bg-[rgba(255,255,255,0.06)]  dark:bg-[#EFF7F8]  `
                  : "opacity-[0.5]"
                  }`}
                onClick={() => handleClick(6)}
              >
                <div className=" flex flex-row justify-start items-center gap-[1rem]">
                  <Image
                    className="bg-transparent  !h-[1rem]"
                    src={theme === "light" ? Referral : ReferralDark}
                    alt="Swap"
                  />
                  <div>Referral</div>
                </div>

              </div>
            </a>
          </div>
        </ul>
      ) : (
        <></>
      )}
      {isPopupOpen && <Settings handleCloseSettings={handleCloseSettings} />}
      {isWalletOpen && (
        <ConnectWallet handleCloseWalletToken={handleCloseWalletToken} />
      )}
    </div>
  );
};

export default Navbar;
