"use client";
import React, { useState } from "react";
import Image from "next/image";
import KanaLogo from "../../assets/Icons/Kana-Logo.svg";
import SwapDark from "../../assets/Icons/swap_dark.svg";
import Swap from "../../assets/Icons/coins-swap.svg";
import StakeDark from "../../assets/Icons/stack_icon_dark.svg";
import Stake from "../../assets/Icons/stack_icon.svg";
import SwitchDark from "../../assets/Icons/switch_dark.svg";
import Switch from "../../assets/Icons/switch_icon.svg";
import PerpsLight from "../../assets/Icons/perps.svg";
import PerpsDark from "../../assets/Icons/perps_dark.svg";
import ChevronDown from "../../assets/Icons/chevron-down.svg";
import ChevronDownDark from "../../assets/Icons/chevron-down-dark.svg";
import LeaderboardDark from "../../assets/Icons/leader_board_dark.svg";
import Leaderboard from "../../assets/Icons/leader_board.svg";
import ReferralDark from "../../assets/Icons/referral_dark.svg";
import Referral from "../../assets/Icons/referral.svg";
import LogoLight from "../../assets/Icons/Logo-light.svg";
import Trade from "../../assets/Icons/Trade.svg";
import TradeDark from "../../assets/Icons/bar-chart-square-dark.svg";
import Yield from "../../assets/Icons/coins-hand.svg";
import Varriant from "../../assets/Icons/Variant.svg";
import Logo from "../../assets/Icons/Small-logo.svg";
import coinsLight from "../../assets/Icons/coins-swap-01-light.svg";
import HelpLight from "../../assets/Icons/Help-light.svg";
import { useTheme } from "next-themes";
interface SidebarProps {
  isSidebarExpanded: boolean;
  setIsSidebarExpanded: (expanded: boolean) => void;
  isSidebarHidden: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isSidebarExpanded,
  setIsSidebarExpanded,
  isSidebarHidden,
}) => {
  const [activeItemSidebar, setActiveItemSidebar] = useState(1);
  const [isSubMenu, setIsSubMenu] = useState(false);
  const [isChevronCorrect, setIsChevronCorrect] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  const handleMouseEnter = () => {
    setIsOpen(true);
  };
  const [isLeaderBoard, setIsLeaderBoard] = useState(false);

  const handleLeaderBoard = () => {
    if (isLeaderBoard === false) {
      setIsLeaderBoard(true);
    } else {
      setIsLeaderBoard(false);
    }
  };
  const handleMouseLeave = () => {
    setIsOpen(false);
    setIsLeaderBoard(false);
  };
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

  const handleSubMenu = () => {
    if (isSubMenu === false) {
      setIsChevronCorrect(!isChevronCorrect);
      setIsSubMenu(true);
    } else {
      setIsChevronCorrect(!isChevronCorrect);
      setIsSubMenu(false);
    }
  };

  return (
    <div
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
      className={`   bg-[#17181A] dark:bg-[#FCFDFE] !z-[2]   !font-inter   !sticky  !top-0 !bottom-0 !h-screen flex flex-col gap-4  transition-all ease-in hover:ease-out transform    duration-300  items-center justify-between  py-2  !inset-0  xxl:flex bxl:flex xl:flex sxl:flex lg:flex md:hidden sm:hidden xd:hidden ${
        isSidebarExpanded ? "!w-[20rem] " : "!w-[5.938rem]"
      }  
          ${isSidebarExpanded ? "  !min-w-[17rem] " : "  !min-w-[5rem] "}
         ${isSidebarHidden ? "hidden" : "flex"}`}
      onMouseEnter={() =>
        window.innerWidth > 1200 && setIsSidebarExpanded(true)
      }
      onMouseLeave={() => {
        window.innerWidth > 1200 && setIsSidebarExpanded(false);
        setIsLeaderBoard(false);
      }}
    >
      <div className="w-auto hover:w-full bg-transparent  flex flex-col text-left items-start h-full justify-between p-[1rem] w-full  ">
        <div className="flex flex-col text-left items-start h-full justify-start w-full">
          <div className="flex flex-col text-left items-center justify-center w-full  p-[1rem] top-0 !sticky  mb-[1.5rem] ">
            {isSidebarExpanded ? (
              <div className=" flex flex-row justify-start items-start w-full">
                <Image
                  className="!h-[32px] !w-auto !z-[2]"
                  src={theme === "dark" ? LogoLight : KanaLogo}
                  alt="KanaLogo"
                />
              </div>
            ) : (
              <div className=" flex flex-row justify-start items-start w-full">
                <Image
                  className="!h-[32px] !w-auto !z-[2]"
                  src={Logo}
                  alt="Kana"
                />
              </div>
            )}
          </div>
          <div className="flex flex-col justify-start items-start bg-transparent w-full gap-[0.5rem]">
            <a
              rel="noreferrer"
              href="https://app.kanalabs.io/"
              className="w-full  h-[52px] flex flex-row justify-start items-center    bg-transparent gap-[16px]"
            >
              <div
                className={` bg-transparent menu-item text-[1rem] my-[4px]  w-full h-auto text-[white] dark:text-[#0C0C0D] font-[600] flex flex-row justify-start items-center py-[1rem] px-[1.4rem] rounded-[16px] hover:bg-[rgba(255,255,255,0.06)] hover:dark:bg-[#EFF7F8] hover:opacity-[1] hover:text-[white] hover:font-[700] gap-[16px] ${
                  activeItemSidebar === 2
                    ? ` font-[700] opacity-[1] bg-[rgba(255,255,255,0.06)]  dark:bg-[#EFF7F8]  `
                    : "opacity-[0.5]"
                }`}
                onClick={() => handleClick(2)}
              >
                {isSidebarExpanded ? (
                  <div className=" flex flex-row justify-start items-center gap-[16px]">
                    <Image
                      className="bg-transparent  !h-[1rem]"
                      src={theme === "dark" ? SwapDark : Swap}
                      alt="Swap"
                    />
                    <div>Swap</div>
                  </div>
                ) : (
                  <div className=" flex flex-row justify-start items-start w-full">
                    <Image
                      className="bg-transparent "
                      src={theme === "dark" ? SwapDark : Swap}
                      alt="TradeIcon"
                    />
                  </div>
                )}
              </div>
            </a>
            <a
              rel="noreferrer"
              href="https://app.kanalabs.io/perps"
              className="w-full  h-[52px] flex flex-row justify-start items-center    bg-transparent gap-[16px]"
            >
              <div
                className={` bg-transparent menu-item text-[1rem] my-[4px]  w-full h-auto text-[white] dark:text-[#0C0C0D] font-[600] flex flex-row justify-start items-center py-[1rem] px-[1.4rem] rounded-[16px] hover:bg-[rgba(255,255,255,0.06)] hover:dark:bg-[#EFF7F8] hover:opacity-[1] hover:text-[white] hover:font-[700] gap-[16px] ${
                  activeItemSidebar === 9
                    ? ` font-[700] opacity-[1] bg-[rgba(255,255,255,0.06)]  dark:bg-[#EFF7F8]  `
                    : "opacity-[0.5]"
                }`}
                onClick={() => handleClick(9)}
              >
                {isSidebarExpanded ? (
                  <div className=" flex flex-row justify-start items-center gap-[16px]">
                    <Image
                      className="bg-transparent  !h-[1rem]"
                      src={theme === "dark" ? PerpsDark : PerpsLight}
                      alt="Swap"
                    />
                    <div>Perps</div>
                  </div>
                ) : (
                  <div className=" flex flex-row justify-start items-start w-full">
                    <Image
                      className="bg-transparent "
                      src={theme === "dark" ? PerpsDark : PerpsLight}
                      alt="TradeIcon"
                    />
                  </div>
                )}
              </div>
            </a>
            <a
              rel="noreferrer"
              href="https://tradebook.kanalabs.io/"
              className="w-full  h-[52px] flex flex-row justify-start items-center    bg-transparent gap-[16px]"
            >
              <div
                className={` bg-transparent menu-item text-[1rem] my-[4px]  w-full h-auto text-[white] dark:text-[#0C0C0D] font-[600] flex flex-row justify-start items-center py-[1rem] px-[1.4rem] rounded-[16px] hover:bg-[rgba(255,255,255,0.06)] hover:dark:bg-[#EFF7F8] hover:opacity-[1] hover:text-[white] hover:font-[700] gap-[16px] ${
                  activeItemSidebar === 3
                    ? `  font-[700] opacity-[1] bg-[rgba(255,255,255,0.06)]  dark:bg-[#EFF7F8]  `
                    : "opacity-[0.5]"
                }`}
                onClick={() => handleClick(3)}
              >
                {isSidebarExpanded ? (
                  <div className=" flex flex-row justify-start items-center gap-[16px]">
                    <Image
                      className="bg-transparent  !h-[1rem]"
                      src={theme === "dark" ? Trade : TradeDark}
                      alt="Swap"
                    />
                    <div>Trade</div>
                  </div>
                ) : (
                  <div className=" flex flex-row justify-start items-start w-full">
                    <Image
                      className="bg-transparent "
                      src={theme === "dark" ? Trade : TradeDark}
                      alt="TradeIcon"
                    />
                  </div>
                )}
              </div>
            </a>

            <a
              rel="noreferrer"
              href="https://operps.kanalabs.io/"
              className="w-full  h-[52px] flex flex-row justify-start items-center    bg-transparent gap-[16px]"
            >
              <div
                className={` bg-transparent menu-item text-[1rem] my-[4px]  w-full h-auto text-[white] dark:text-[#0C0C0D] font-[600] flex flex-row justify-start items-center py-[1rem] px-[1.4rem] rounded-[16px] hover:bg-[rgba(255,255,255,0.06)] hover:dark:bg-[#EFF7F8] hover:opacity-[1] hover:text-[white] hover:font-[700] gap-[16px] ${
                  activeItemSidebar === 4
                    ? `  font-[700] opacity-[1] bg-[rgba(255,255,255,0.06)]  dark:bg-[#EFF7F8]  `
                    : "opacity-[0.5]"
                }`}
                onClick={() => handleClick(4)}
              >
                {isSidebarExpanded ? (
                  <div className=" flex flex-row justify-start items-center gap-[16px]">
                    <Image
                      className="bg-transparent  !h-[1rem]"
                      src={theme === "dark" ? SwitchDark : Switch}
                      alt="Swap"
                    />
                    <div>OPerps</div>
                  </div>
                ) : (
                  <div className=" flex flex-row justify-start items-start w-full">
                    <Image
                      className="bg-transparent "
                      src={theme === "dark" ? SwitchDark : Switch}
                      alt="TradeIcon"
                    />
                  </div>
                )}
              </div>
            </a>
            <a
              rel="noreferrer"
              href="https://app.kanalabs.io/stake-yield"
              className="w-full flex  h-[3.25rem] flex-row justify-start items-center    bg-transparent gap-[1rem]"
            >
              <div
                className={` bg-transparent menu-item text-[1rem] my-[4px]  w-full h-auto text-[white] dark:text-[#0C0C0D] font-[600] flex flex-row justify-start items-center py-[1rem] px-[1.4rem] rounded-[16px] hover:bg-[rgba(255,255,255,0.06)] hover:dark:bg-[#EFF7F8] hover:opacity-[1] hover:text-[white] hover:font-[700] gap-[16px] ${
                  activeItemSidebar === 5
                    ? `  font-[700] opacity-[1] bg-[rgba(255,255,255,0.06)]  dark:bg-[#EFF7F8]  `
                    : "opacity-[0.5]"
                }`}
                onClick={() => handleClick(5)}
              >
                {isSidebarExpanded ? (
                  <div className=" flex flex-row justify-start items-center gap-[1rem]">
                    <Image
                      className="bg-transparent  !h-[1rem]"
                      src={theme === "dark" ? StakeDark : Stake}
                      alt="Swap"
                    />
                    <div>Stake</div>
                  </div>
                ) : (
                  <div className=" flex flex-row justify-start items-start w-full">
                    <Image
                      className="bg-transparent  !h-[1rem]"
                      src={theme === "dark" ? StakeDark : Stake}
                      alt="Swap"
                    />
                  </div>
                )}
              </div>
            </a>
            <div
              onClick={handleLeaderBoard}
              className="w-full flex cursor-pointer  h-[3.25rem] flex-row justify-start items-center    bg-transparent gap-[1rem]"
            >
              <div
                className={` bg-transparent menu-item text-[1rem] my-[4px]  w-full h-auto text-[white] dark:text-[#0C0C0D] font-[600] flex flex-row justify-start items-center py-[1rem] px-[1.4rem] rounded-[16px] hover:bg-[rgba(255,255,255,0.06)] hover:dark:bg-[#EFF7F8] hover:opacity-[1] hover:text-[white] hover:font-[700] gap-[16px] ${
                  activeItemSidebar === 6
                    ? `  font-[700] opacity-[1] bg-[rgba(255,255,255,0.06)]  dark:bg-[#EFF7F8]  `
                    : "opacity-[0.5]"
                }`}
                // onClick={() => handleClick(6)}
              >
                {isSidebarExpanded ? (
                  <div className=" flex flex-row justify-between w-full items-center">
                    <div className=" flex flex-row justify-start items-center gap-[1rem]">
                      <Image
                        className="bg-transparent  !h-[1rem]"
                        src={theme == "dark" ? LeaderboardDark : Leaderboard}
                        alt="Swap"
                      />
                      <div>Leaderboard</div>
                    </div>
                    <Image
                      src={theme == "dark" ? ChevronDownDark : ChevronDown}
                      alt="ChevronDown"
                      className={
                        isLeaderBoard ? " rotate-180 ml-2" : " ml-2 rotate-0"
                      }
                    />
                  </div>
                ) : (
                  <div className=" flex flex-row justify-start items-start w-full">
                    <Image
                      className="bg-transparent  !h-[1rem]"
                      src={theme == "dark" ? LeaderboardDark : Leaderboard}
                      alt="Swap"
                    />
                  </div>
                )}
              </div>
            </div>
            {isLeaderBoard ? (
              <div className="submenu w-full gap-2 flex flex-col">
                <a
                  href="https://rewards.kanalabs.io/Leaderboard"
                  rel="noreferrer"
                  className={`   h-[52px] flex flex-row justify-start items-center  w-full  bg-transparent gap-[16px]`}
                >
                  <div
                    className={` dark:hover:bg-[#EFF7F8] hover:bg-[rgba(255,255,255,0.06)] bg-transparent menu-item text-[16px] my-[4px]  w-full h-auto  text-[16px] font-[400] flex flex-row justify-start items-center ${
                      isSidebarExpanded
                        ? "py-[1rem] px-[1.4rem]"
                        : "py-[1.2rem] px-[1.4rem]"
                    }  rounded-[16px]  hover:opacity-[1] hover:text-[white] hover:font-[700] gap-[16px] ${
                      activeItemSidebar === 7
                        ? `!font-[700] !opacity-[1] dark:!bg-[#EFF7F8] !bg-[rgba(255,255,255,0.06)] `
                        : "opacity-[0.5]"
                    }`}
                    onClick={() => handleClick(7)}
                  >
                    {isSidebarExpanded ? (
                      <div className=" flex flex-row justify-start items-center gap-[16px]">
                        <Image
                          className="bg-transparent  !h-[1rem] opacity-0"
                          src={theme === "dark" ? ReferralDark : Referral}
                          alt="Swap"
                        />
                        <div className={` dark:text-[#0C0C0D] text-[white] `}>
                          Swap Leaderboard
                        </div>
                      </div>
                    ) : (
                      <div className=" flex flex-row justify-start items-start w-full"></div>
                    )}
                  </div>
                </a>
                {/* <a
                      href="https://tradebook.kanalabs.io/leaderboard"
                      rel="noreferrer"
                      className={`   h-[52px] flex flex-row justify-start items-center  w-full  bg-transparent gap-[16px]`}
                    >
                      <div
                        className={`  dark:hover:bg-[#EFF7F8] hover:bg-[rgba(255,255,255,0.06)]  bg-transparent menu-item text-[16px] my-[4px]  w-full h-auto  text-[16px] font-[400] flex flex-row justify-start items-center ${
                          isSidebarExpanded
                            ? "py-[1rem] px-[1.4rem]"
                            : "py-[1.2rem] px-[1.4rem]"
                        }  rounded-[16px]  hover:opacity-[1] hover:text-[white] hover:font-[700] gap-[16px] ${
                          activeItemSidebar === 8
                            ? `!font-[700] !opacity-[1]  dark:!bg-[#EFF7F8]  !bg-[rgba(255,255,255,0.06)] `
                            : "opacity-[0.5]"
                        }`}
                        onClick={() => handleClick(8)}
                      >
                        {isSidebarExpanded ? (
                          <div className=" flex flex-row justify-start items-center gap-[16px]">
                            <Image
                              className="bg-transparent  !h-[1rem] opacity-0"
                              src={theme === "dark" ? ReferralDark : Referral}
                              alt="Swap"
                            />
                            <div
                              className={`dark:text-[#0C0C0D] text-[white] `}
                            >
                              Trade Leaderboard
                            </div>
                          </div>
                        ) : (
                          <div className=" flex flex-row justify-start items-start w-full"></div>
                        )}
                      </div>
                    </a> */}
              </div>
            ) : (
              <></>
            )}
            <a
              rel="noreferrer"
              href="https://rewards.kanalabs.io/"
              className="w-full flex  h-[3.25rem] flex-row justify-start items-center    bg-transparent gap-[1rem]"
            >
              <div
                className={` bg-transparent menu-item text-[1rem] my-[4px]  w-full h-auto text-[white] dark:text-[#0C0C0D] font-[600] flex flex-row justify-start items-center py-[1rem] px-[1.4rem] rounded-[16px] hover:bg-[rgba(255,255,255,0.06)] hover:dark:bg-[#EFF7F8] hover:opacity-[1] hover:text-[white] hover:font-[700] gap-[16px] ${
                  activeItemSidebar === 1
                    ? `  font-[700] opacity-[1] !bg-[rgba(255,255,255,0.06)]  dark:!bg-[#EFF7F8]  `
                    : "opacity-[0.5]"
                }`}
                onClick={() => handleClick(1)}
              >
                {isSidebarExpanded ? (
                  <div className=" flex flex-row justify-start items-center gap-[1rem]">
                    <Image
                      className="bg-transparent  !h-[1rem]"
                      src={theme === "dark" ? ReferralDark : Referral}
                      alt="Swap"
                    />
                    <div>Referral</div>
                  </div>
                ) : (
                  <div className=" flex flex-row justify-start items-start w-full">
                    <Image
                      className="bg-transparent  !h-[1rem]"
                      src={theme === "dark" ? ReferralDark : Referral}
                      alt="Swap"
                    />
                  </div>
                )}
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="p-[1rem] w-full">
        <a
          rel="noreferrer"
          href=" https://kanalabs.io/contact-us-dev"
          className="w-full"
        >
          {isSidebarExpanded ? (
            <div className="bg-[#0C0C0D] dark:bg-[#EFF7F8] py-[1rem] px-[1.4rem] rounded-[1rem]  w-full text-[white] dark:text-[#0C0C0D] text-[16px] font-[400] gap-[1rem] flex flex-row justify-start items-center">
              <Image
                className="bg-transparent !w-[1.5rem]  !h-[1.1rem]"
                src={theme === "dark" ? HelpLight : Varriant}
                alt="Swap"
              />
              <div>Help</div>
            </div>
          ) : (
            <div className="bg-[#0C0C0D] dark:bg-[#EFF7F8] py-[1rem] px-[1.4rem] rounded-[1rem] w-full text-[white] dark:text-[#0C0C0D] text-[16px] font-[400] gap-[1rem] flex flex-row justify-start items-start">
              <Image
                className="bg-transparent  !w-[1.5rem] !h-[1.1rem]"
                src={theme === "dark" ? HelpLight : Varriant}
                alt="Swap"
              />
            </div>
          )}
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
