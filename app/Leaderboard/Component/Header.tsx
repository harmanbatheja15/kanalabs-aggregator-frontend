/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useCallback, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useAccount } from "wagmi";
import { useDisconnect } from "wagmi";
import { useStore } from "@/app/store";
import { notification, ConfigProvider } from "antd";

import PerpsLight from "../../../assets/Icons/perps.svg";
import PerpsDark from "../../../assets/Icons/perps_dark.svg";
import {
  useNotification,
  NotificationType,
} from "@/app/utils/notificationUtils";
import { useAptosContext } from "@/app/contexts/AptosWalletContext";
import { useWallet } from "@solana/wallet-adapter-react";
import {
  getLeaderBoard,
  getReferralBonus,
  leaderboardCurrentRank,
} from "@/app/utils/kanalabs";
import Image from "next/image";
import User from "../../../assets/Icons/user-circle.svg";
import UserDark from "../../../assets/Icons/user-circledark.svg";
import Logo from "../../../assets/Icons/Small-logo.svg";
import ArrowLeftDark from "../../../assets/Icons/ArrowLeftDark.svg";
import Sandwichmenu from "../../../assets/Icons/sandwich-menu.svg";
import wrongRed from "../../../assets/Icons/x-close-Red.svg";
import Trade from "../../../assets/Icons/Trade.svg";
import Yield from "../../../assets/Icons/coins-hand.svg";
import MenuLight from "../../../assets/Icons/menu-light.svg";
import coinsLight from "../../../assets/Icons/coins-swap-01-light.svg";
import Arrowleft from "../../../assets/Icons/arrow-left-1.svg";
import Metamask from "../../../assets/Icons/MetaMask.svg";
import Coinbase from "../../../assets/Icons/Coinbase.svg";
import DefaultIcon from "../../../assets/Icons/web.svg";
import TradeDark from "../../../assets/Icons/bar-chart-square-dark.svg";
import Copy from "../../../assets/Icons/copy-referal.svg";
import CopyDark from "../../../assets/Icons/copy-dark.svg";
import Logout from "../../../assets/Icons/Logoff.svg";
import { NetworkId } from "@kanalabs/aggregator";
import { Tooltip } from "antd";
import Dark from "../../../assets/Icons/Dark.svg";
import Light from "../../../assets/Icons/Light.svg";
import { useWalletKit } from "@mysten/wallet-kit";
import ConnectWallet from "./ConnectWallet";

import SwapDark from "../../../assets/Icons/swap_dark.svg";
import Swap from "../../../assets/Icons/coins-swap.svg";
import StakeDark from "../../../assets/Icons/stack_icon_dark.svg";
import Stake from "../../../assets/Icons/stack_icon.svg";
import SwitchDark from "../../../assets/Icons/switch_dark.svg";
import Switch from "../../../assets/Icons/switch_icon.svg";
import Other from "../../../../assets/Icons/grid-others.svg";
import ChevronDown from "../../../assets/Icons/chevron-down.svg";
import ChevronDownDark from "../../../assets/Icons/chevron-down-dark.svg";
import LeaderboardDark from "../../../assets/Icons/leader_board_dark.svg";
import Leaderboard from "../../../assets/Icons/leader_board.svg";
import ReferralDark from "../../../assets/Icons/referral_dark.svg";
import Referral from "../../../assets/Icons/referral.svg";
interface HeaderInterface {
  isSidebarHidden: boolean;
}

const Header = (props: HeaderInterface) => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  const { theme, setTheme } = useTheme();
  const account = useAccount();
  const { address, isConnected, connector } = useAccount();
  const {
    connected,
    account: aptosAccount,
    wallet,
    disconnect: aptoDisconnect,
  } = useAptosContext();
  const {
    connected: solanawalletconnected,
    publicKey,
    disconnect: solanaWalletDisconnect,
  } = useWallet();
  const {
    isConnected: SuiIsConnected,
    currentAccount,
    currentWallet,
    disconnect: SuiDisconnect,
  } = useWalletKit();
  const { disconnect } = useDisconnect();
  const { wallet: solanaWallet } = useWallet();
  const [claimReward, setClaimReward] = useState<any>();
  const referralChain = useStore((state: any) => state.referralChain);
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [walletIcon, setWalletIcon] = useState(DefaultIcon);
  const { showNotification, contextHolder } = useNotification();
  const [rank, setRank] = useState();
  const leaderBoardChain = useStore(
    (state: { leaderBoardChain: any }) => state.leaderBoardChain
  );
  const [chainrank, setChainRank] = useState(0);
  const [showLeaderbaordData, setLeaderboardData] = useState<any>([]);

  useEffect(() => {
    let isConnected = false;
    let walletAddress = "";
    let icon = DefaultIcon;

    switch (referralChain) {
      case NetworkId.solana:
        isConnected = solanawalletconnected;
        walletAddress = publicKey?.toBase58().toString() || "";
        icon = solanaWallet?.adapter?.icon || DefaultIcon;
        break;
      case NetworkId.aptos:
        isConnected = connected;
        walletAddress = aptosAccount?.address?.toString() || "";
        icon = wallet?.adapter?.icon || DefaultIcon;
        break;
      case NetworkId.polygon:
      case NetworkId.ethereum:
      case NetworkId.bsc:
      case NetworkId.Avalanche:
      case NetworkId.Arbitrum:
      case NetworkId.zkSync:
        isConnected = address !== undefined;
        walletAddress = address?.toString()!;
        if (connector?.id === "io.metamask") {
          icon = Metamask;
        } else if (connector?.id === "coinbaseWalletSDK") {
          icon = Coinbase;
        }
        break;
      case NetworkId.sui:
        isConnected = currentAccount?.address !== undefined;
        walletAddress = currentAccount?.address.toString()!;
        icon = currentWallet?.icon || DefaultIcon;
        break;
      default:
        isConnected = address !== undefined;
        walletAddress = address?.toString() || "";
        break;
    }

    setWalletConnected(isConnected);
    setWalletAddress(walletAddress);
    setWalletIcon(icon);
  }, [
    referralChain,
    solanawalletconnected,
    connected,
    publicKey,
    aptosAccount,
    address,
    currentAccount,
  ]);
  useEffect(() => {
    if (!walletConnected || !walletAddress) {
      return;
    }
    const fetchDetails = async () => {
      try {
        const referralBonus = await getReferralBonus(walletAddress);
        if (referralBonus.success) {
          setClaimReward(referralBonus.data);
        }
      } catch (error) {
        console.error("Failed to fetch getReferralBonus:", error);
      }
    };
    fetchDetails();
  }, [walletConnected, walletAddress]);
  const openPopup = () => {
    setPopupOpen(true);
  };
  const handleWalletDisconnect = () => {
    if (connected) {
      aptoDisconnect();
    } else if (solanawalletconnected) {
      solanaWalletDisconnect();
    } else if (SuiIsConnected) {
      SuiDisconnect();
    } else {
      disconnect();
    }
  };
  const handlecloseWalletConnect = () => {
    setPopupOpen(false);
  };
  const handleMobileMenu = () => {
    setIsMobileMenuActive(!isMobileMenuActive);
  };
  const copyHash = useCallback(async (hash: any) => {
    await navigator.clipboard.writeText(hash);
  }, []);

  useEffect(() => {
    if (walletConnected) {
      handlecloseWalletConnect();
    }
  }, [walletConnected]);

  let solanaAccountAddress = publicKey?.toBase58();
  let aptosAccountAddress = aptosAccount?.address;

  const getLeaderboardOverallRank = async () => {
    try {
      let wallet: any;
      if (solanawalletconnected) {
        wallet = solanaAccountAddress;
      } else if (connected) {
        wallet = aptosAccountAddress;
      } else if (address) {
        wallet = address;
      } else if (currentAccount?.address) {
        wallet = currentAccount?.address;
      }
      let data = await getLeaderBoard();
      const overallRank = data.data.find(
        (num: any) => num.walletAddress === wallet
      );
      setRank(overallRank ? overallRank.noRank : 0);
      let finalData = await data.data.filter((a: any) => {
        if (a.chain === leaderBoardChain.id.toString()) {
          return showLeaderbaordData.data;
        }
      });
      finalData.sort((a: any, b: any) => b.valueToRank - a.valueToRank);
      finalData.forEach((item: { rank: any }, index: number) => {
        item.rank = index + 1;
      });
    } catch (error) {}
  };
  useEffect(() => {
    getLeaderboardOverallRank();
  }, [
    solanaAccountAddress,
    aptosAccountAddress,
    address,
    currentAccount?.address,
  ]);
  const toastStyle = {
    borderRadiusLG: 20,
    colorText: theme === "dark" ? "black" : "rgba(255, 255, 255, 0.88)",
    colorTextHeading: theme === "dark" ? "black" : "rgba(255, 255, 255, 0.88)",
    colorIcon: theme === "dark" ? "black" : "rgba(255, 255, 255, 0.45)",
    colorBgElevated: theme === "dark" ? "#EFF7F8" : "rgb(23, 24, 26)",
    colorIconHover: theme === "dark" ? "" : "rgba(255, 255, 255, 0.88)",
  };

  const [activeItemSidebar, setActiveItemSidebar] = useState(1);
  const [isSubMenu, setIsSubMenu] = useState(false);
  const [isChevronCorrect, setIsChevronCorrect] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [isLeaderBoard, setIsLeaderBoard] = useState(false);
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
    <ConfigProvider theme={{ components: { Notification: toastStyle } }}>
      {contextHolder}
      <div className="   !z-[2]  xxl:w-full bxl:w-full xl:w-full sxl:w-full lg:w-full md:w-screen sm:w-screen xd:w-screen   !sticky !top-0 flex flex-col justify-start items-start !font-inter  ">
        <div className="font-manrope flex justify-between items-start !font-manrope w-full  ">
          <div className="h-[6.5rem] w-full  xxl:rounded-b-[1rem] bxl:rounded-b-[1rem] xl:rounded-b-[1rem] sxl:rounded-b-[1rem] lg:rounded-b-[1rem] md:rounded-b-none sm:rounded-none xd:rounded-none dark:bg-[#FCFDFE] bg-[#111213] p-[0%_2%] flex items-center justify-start gap-[1rem] ">
            <div className="2xl:hidden xl:hidden lg:hidden md:flex sm:flex xd:flex w-full justify-between px-[0.5rem] ">
              <div className=" flex ">
                <Image src={Logo} alt="" />
              </div>
              <div className="flex">
                <div
                  onClick={handleMobileMenu}
                  className=" flex flex-row justify-between items-center w-full"
                >
                  {isMobileMenuActive ? (
                    <Image src={wrongRed} alt="wrongRed" className="  " />
                  ) : (
                    <Image
                      src={theme === "light" ? Sandwichmenu : MenuLight}
                      alt="Sandwichmenu"
                      className=" "
                    />
                  )}
                </div>
              </div>
            </div>

            <div className=" xxl:w-[32%] bxl:w-[32%] xl:w-[32%] sxl:w-[32%] lg:w-[32%]  h-[3.5rem] rounded-[1rem] dark:bg-[#EFF7F8] bg-[#1D1E20]  2xl:inline xl:inline lg:inline md:hidden sm:hidden xd:hidden">
              <div className="">
                <a href="https://kanalabs.io/" rel="noreferrer">
                  <div className="flex  cursor-pointer p-4 items-center gap-[0.5rem]">
                    <Image
                      src={theme == "light" ? Arrowleft : ArrowLeftDark}
                      alt="Arrowleft"
                    />
                    <div className="font-[800]  text-[0.875rem] font-manrope text-[#2ED3B7] dark:text-[#0E9384] ">
                      Back to Home
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className=" flex flex-row justify-center items-center xxl:w-[32%] bxl:w-[32%] xl:w-[32%] sxl:w-[32%] lg:w-[32%] h-[3.5rem] rounded-[1rem] dark:bg-[#EFF7F8] bg-[#1D1E20] gap-[1rem]   2xl:inline xl:inline lg:inline md:hidden sm:hidden xd:hidden">
              <div className="flex flex-row justify-between items-center gap-[0.5rem] flex-wrap p-4">
                <div className="font-bold text-[#A5A5A6] dark:text-[#777879] ">
                  Your Rank
                </div>
                <div className="text-[#4A4B4D] dark:text-[#D2D2D2]">{rank}</div>
              </div>
            </div>
            <div className="xxl:w-[32%] bxl:w-[32%] xl:w-[32%] sxl:w-[32%] lg:w-[32%] h-[3.5rem] rounded-[1rem] dark:bg-[#EFF7F8] bg-[#1D1E20] gap-[1rem]  2xl:inline xl:inline lg:inline md:hidden sm:hidden xd:hidden">
              <div className="flex justify-between p-4">
                {walletConnected ? (
                  <>
                    <div className="flex items-center gap-[0.5rem]">
                      <div className="flex">
                        <Image
                          src={walletIcon}
                          alt="/"
                          className=" w-6 h-6"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className=" text-[#2ED3B7] dark:text-[#0E9384] dark:font-[700] font-[800] text-[0.875rem]">
                        {walletAddress?.toString().slice(0, 5) +
                          "..." +
                          walletAddress?.toString().slice(-5)}
                      </div>
                    </div>
                    <div className="flex items-center gap-[0.5rem]">
                      <Tooltip title="Copy Wallet Address">
                        <Image
                          src={theme == "light" ? Copy : CopyDark}
                          alt="/"
                          className="cursor-pointer w-5 h-5"
                          onClick={() => {
                            copyHash(walletAddress);
                            showNotification(NotificationType.Success, {
                              message: "Address Copied",
                            });
                          }}
                        />
                      </Tooltip>
                      <Tooltip title="Disconnect Wallet">
                        <Image
                          src={Logout}
                          alt="/"
                          className="cursor-pointer w-5 h-5 "
                          onClick={() => handleWalletDisconnect()}
                        />
                      </Tooltip>
                    </div>
                  </>
                ) : (
                  <div
                    className="flex items-center gap-[0.5rem] cursor-pointer"
                    onClick={openPopup}
                  >
                    <div className="flex">
                      <Image
                        src={theme === "light" ? User : UserDark}
                        alt="/"
                      />
                    </div>
                    <div className=" text-[#2ED3B7] dark:text-[#0E9384] font-[800] text-[0.875rem] font-manrope dark:font-manrope">
                      Connect wallet
                    </div>
                  </div>
                )}
              </div>
            </div>
            <Tooltip title="Theme">
              <div className="h-[3.5rem] w-[3.5rem] rounded-[1rem] dark:!bg-[#EFF7F8] bg-[#1D1E20] gap-[1rem]  cursor-pointer flex items-center justify-center 2xl:flex xl:flex lg:flex md:hidden sm:hidden xd:hidden">
                <Image
                  src={theme === "light" ? Dark : Light}
                  alt="/"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                />
              </div>
            </Tooltip>
          </div>
        </div>
        {isMobileMenuActive ? (
          <ul
            className={`flex-1 flex flex-col w-full justify-between items-start py-3 mt-24 xxl:hidden bxl:hidden xl:hidden sxl:hidden lg:flex md:flex md:pb-0 md:mt-24 sm:mt-24 xd:mt-24 z-[1]   ${
              isMobileMenuActive
                ? "!fixed !right-0 !left-0   lg:!bottom-0 md:!bottom-24 sm:!bottom-24 xd:!bottom-24 !top-0	!bg-[#17181A] dark:!bg-[#EFF7F8] "
                : "hidden"
            }`}
          >
            <div className="flex flex-col overflow-y-scroll  items-start justify-start align-middle  h-full   w-full lg:!px-[1rem] md:!px-[1rem] sm:!px-[1rem] xd:!px-[1rem] !bg-transparent">
              <div className="flex flex-col justify-start items-start bg-transparent w-full gap-[8px]">
                <a
                  rel="noreferrer"
                  href=" https://app.kanalabs.io/"
                  target="_blank"
                  className="w-full flex  h-[52px] flex-row justify-start items-center    bg-transparent gap-[16px]"
                >
                  <div className=" menu-item my-[4px] cursor-pointer w-full h-auto text-[white] dark:text-[#777879] text-[1rem]   flex flex-row justify-start items-center py-[1rem] px-[1.4rem] rounded-[16px] hover:bg-[rgba(255,255,255,0.06)]  hover:dark:bg-[white] hover:opacity-[1] hover:text-[white] hover:font-[700] gap-[16px] font-[800] opacity-[0.5]">
                    <div className=" flex flex-row justify-start items-center gap-[16px]">
                      <Image
                        className="bg-transparent  !h-[1rem]"
                        src={theme === "dark" ? SwapDark : Swap}
                        alt="Swap"
                      />
                      <div>Swap</div>
                    </div>
                  </div>
                </a>
                <a
                rel="noreferrer"
                href=" https://app.kanalabs.io/perps"
                target="_blank"
                className="w-full flex  h-[52px] flex-row justify-start items-center    bg-transparent gap-[16px]"
              >
                <div className=" menu-item my-[4px] cursor-pointer w-full h-auto text-[white] dark:text-[#777879] text-[1rem]   flex flex-row justify-start items-center py-[1rem] px-[1.4rem] rounded-[16px] hover:bg-[rgba(255,255,255,0.06)] hover:opacity-[1] hover:text-[white] hover:font-[700] gap-[16px] font-[800] opacity-[0.5]">
                  <div className=" flex flex-row justify-start items-center gap-[16px]">
                    <Image
                      className="bg-transparent  !h-[1rem]"
                      src={theme === "light" ? PerpsLight : PerpsDark}
                      alt="Swap"
                    />
                    <div>Perps</div>
                  </div>
                </div>
              </a>
                <a
                  rel="noreferrer"
                  href="https://tradebook.kanalabs.io/"
                  target="_blank"
                  className="w-full flex  h-[52px] flex-row justify-start items-center    bg-transparent gap-[16px]"
                >
                  <div className=" menu-item my-[4px] cursor-pointer w-full h-auto text-[white] dark:text-[#777879] text-[1rem]   flex flex-row justify-start items-center py-[1rem] px-[1.4rem] rounded-[16px] hover:bg-[rgba(255,255,255,0.06)]  hover:dark:bg-[white] hover:opacity-[1] hover:text-[white] hover:font-[700] gap-[16px] font-[800] opacity-[0.5]">
                    <div className=" flex flex-row justify-start items-center gap-[16px]">
                      <Image
                        className="bg-transparent  !h-[1rem]"
                        src={theme === "dark" ? Trade : TradeDark}
                        alt="Swap"
                      />
                      <div>Trade</div>
                    </div>
                  </div>
                </a>

                <a
                  rel="noreferrer"
                  href="https://operps.kanalabs.io/"
                  target="_blank"
                  className="w-full flex  h-[52px] flex-row justify-start items-center    bg-transparent gap-[16px]"
                >
                  <div className=" menu-item my-[4px] cursor-pointer w-full h-auto text-[white] dark:text-[#777879] text-[1rem]   flex flex-row justify-start items-center py-[1rem] px-[1.4rem] rounded-[16px] hover:bg-[rgba(255,255,255,0.06)]  hover:dark:bg-[white] hover:opacity-[1] hover:text-[white] hover:font-[700] gap-[16px] font-[800] opacity-[0.5]">
                    <div className=" flex flex-row justify-start items-center gap-[16px]">
                      <Image
                        className="bg-transparent  !h-[1rem]"
                        src={theme === "dark" ? SwitchDark : Switch}
                        alt="Swap"
                      />
                      <div>OPerps</div>
                    </div>
                  </div>
                </a>
                <a
                  rel="noreferrer"
                  href="https://app.kanalabs.io/stake-yield"
                  target="_blank"
                  className="w-full flex  h-[52px] flex-row justify-start items-center    bg-transparent gap-[16px]"
                >
                  <div className=" menu-item my-[4px] cursor-pointer w-full h-auto text-[white] dark:text-[#777879] text-[1rem]   flex flex-row justify-start items-center py-[1rem] px-[1.4rem] rounded-[16px] hover:bg-[rgba(255,255,255,0.06)]  hover:dark:bg-[white] hover:opacity-[1] hover:text-[white] hover:font-[700] gap-[16px] font-[800] opacity-[0.5]">
                    <div className=" flex flex-row justify-start items-center gap-[16px]">
                      <Image
                        className="bg-transparent  !h-[1rem]"
                        src={theme === "dark" ? StakeDark : Stake}
                        alt="Swap"
                      />
                      <div>Stake</div>
                    </div>
                  </div>
                </a>
                <div
                  onClick={() => setIsLeaderBoard(!isLeaderBoard)}
                  className="  my-[4px] cursor-pointer w-full h-auto text-[white] dark:text-[black] text-[1rem]   flex flex-row justify-between items-center p-[1rem]  rounded-[16px] hover:bg-[rgba(255,255,255,0.06)]  hover:dark:bg-[white]  dark:!bg-[#FFF] !bg-[rgba(255,255,255,0.06)] hover:opacity-[1] hover:text-[white] hover:font-[700] gap-[16px] font-[800]  "
                >
                  <div className=" flex flex-row justify-start items-center gap-[16px]">
                    <Image
                      className="bg-transparent  !h-[1rem]"
                      src={theme === "dark" ? LeaderboardDark : Leaderboard}
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
                {isLeaderBoard ? (
                  <div className="submenu w-full gap-[0.5rem] flex flex-col">
                    <a
                      href="https://rewards.kanalabs.io/Leaderboard"
                      rel="noreferrer"
                      className={`   h-[52px] flex flex-row justify-start items-center  w-full  bg-transparent gap-[16px]`}
                    >
                      <div
                        className={` dark:hover:bg-[#EFF7F8] hover:bg-[rgba(255,255,255,0.06)]  hover:dark:bg-[white] bg-[rgba(255,255,255,0.06)] menu-item text-[1rem] my-[4px]  w-full h-auto  font-[400] flex flex-row justify-start items-center ${
                          isOpen
                            ? "py-[1rem] px-[1.4rem]"
                            : "py-[1.2rem] px-[1.4rem]"
                        }  rounded-[16px]  hover:opacity-[1] hover:text-[white] hover:font-[700] gap-[16px] ${
                          activeItemSidebar === 1
                            ? `!font-[700] !opacity-[1] dark:!bg-[#FCFDFE] !bg-[#1D1E20] `
                            : "opacity-[0.5]"
                        }`}
                        onClick={() => handleClick(1)}
                      >
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
                      </div>
                    </a>
                    {/* <a
                      href="https://tradebook.kanalabs.io/leaderboard"
                      rel="noreferrer"
                      className={`   h-[52px] flex flex-row justify-start items-center  w-full  bg-transparent gap-[16px]`}
                    >
                      <div
                        className={`  dark:hover:bg-[#EFF7F8] hover:bg-[rgba(255,255,255,0.06)]   hover:dark:bg-[white] bg-transparent menu-item text-[16px] my-[4px]  w-full h-auto  text-[16px] font-[400] flex flex-row justify-start items-center ${
                          isOpen
                            ? "py-[1rem] px-[1.4rem]"
                            : "py-[1.2rem] px-[1.4rem]"
                        }  rounded-[16px]  hover:opacity-[1] hover:text-[white] hover:font-[700] gap-[16px] ${
                          activeItemSidebar === 8
                            ? `!font-[700] !opacity-[1]  dark:!bg-[#EFF7F8]  !bg-[rgba(255,255,255,0.06)] `
                            : "opacity-[0.5]"
                        }`}
                        onClick={() => handleClick(8)}
                      >
                        <div className=" flex flex-row justify-start items-center gap-[16px]">
                          <Image
                            className="bg-transparent  !h-[1rem] opacity-0"
                            src={theme === "dark" ? ReferralDark : Referral}
                            alt="Swap"
                          />
                          <div className={`dark:text-[#0C0C0D] text-[white] `}>
                            Trade Leaderboard
                          </div>
                        </div>
                      </div>
                    </a> */}
                  </div>
                ) : (
                  <></>
                )}
                <a
                  rel="noreferrer"
                  href="https://rewards.kanalabs.io/"
                  target="_blank"
                  className="w-full flex  h-[52px] flex-row justify-start items-center    bg-transparent gap-[16px]"
                >
                  <div className=" menu-item my-[4px] cursor-pointer w-full h-auto text-[white] dark:text-[#777879] text-[1rem]   flex flex-row justify-start items-center py-[1rem] px-[1.4rem] rounded-[16px] hover:bg-[rgba(255,255,255,0.06)] hover:dark:bg-[white] hover:opacity-[1] hover:text-[white] hover:font-[700] gap-[16px] font-[800] opacity-[0.5]">
                    <div className=" flex flex-row justify-start items-center gap-[16px]">
                      <Image
                        className="bg-transparent  !h-[1rem]"
                        src={theme === "dark" ? ReferralDark : Referral}
                        alt="Swap"
                      />
                      <div>Referral</div>
                    </div>
                  </div>
                </a>

                {/* <div className="w-full flex  h-[52px] flex-row justify-start items-center  bg-[rgba(255,255,255,0.06)] rounded-[1rem]  dark:bg-[white] gap-[16px] w-full">
                  <div className="w-full">
                    <a href="https://kanalabs.io/" rel="noreferrer">
                      <div className="flex  cursor-pointer p-4 items-center gap-[0.5rem]">
                        <Image
                          src={theme == "light" ? Arrowleft : ArrowLeftDark}
                          alt="Arrowleft"
                        />
                        <div className="font-[800]  text-[0.875rem] font-manrope text-[#2ED3B7] dark:text-[#0E9384] ">
                          Back to Home
                        </div>
                      </div>
                    </a>
                  </div>
                </div> */}
                <div className="w-full flex  h-[52px] flex-row justify-start items-center bg-[rgba(255,255,255,0.06)] rounded-[1rem]  dark:bg-[white] gap-[16px]">
                  <div className="flex flex-row justify-between items-center gap-[0.5rem] w-full flex-wrap p-4">
                    <div className="font-bold text-[#A5A5A6] dark:text-[#777879] ">
                      Your Rank
                    </div>
                    <div className="text-[#4A4B4D] dark:text-[#D2D2D2]">
                      {rank}
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-row justify-start items-center bg-transparent gap-[16px]">
                  {walletConnected ? (
                    <>
                      <div className="flex w-full h-[52px]  bg-[rgba(255,255,255,0.06)] rounded-[1rem]  dark:bg-[white]  py-[1rem] px-[1.4rem]">
                        <div className="flex">
                          <Image
                            src={walletIcon}
                            alt="/"
                            className=" w-6 h-6"
                            width={100}
                            height={100}
                          />
                        </div>
                        <div className="pl-2 text-[#2ED3B7] dark:text-[#0E9384] dark:font-[700] font-[800] text-[0.875rem]">
                          {walletAddress?.toString().slice(0, 5) +
                            "..." +
                            walletAddress?.toString().slice(-5)}
                        </div>
                        <Image
                          src={theme == "light" ? Copy : CopyDark}
                          alt="/"
                          className="cursor-pointer w-5 h-5 ml-2"
                          onClick={() => {
                            copyHash(walletAddress);
                            showNotification(NotificationType.Success, {
                              message: "Address Copied",
                            });
                          }}
                        />
                        <Image
                          src={Logout}
                          alt="/"
                          className="cursor-pointer w-5 h-5 ml-3"
                          onClick={() => handleWalletDisconnect()}
                        />
                      </div>
                    </>
                  ) : (
                    <div
                      className="flex h-[52px] w-full bg-[rgba(255,255,255,0.06)] rounded-[1rem]  dark:bg-[white]  py-[1rem] px-[1.4rem] items-center justify-start gap-[1rem] cursor-pointer"
                      onClick={openPopup}
                    >
                      <div className="flex">
                        <Image
                          src={theme === "light" ? User : UserDark}
                          alt="/"
                        />
                      </div>
                      <div className=" text-[#2ED3B7] dark:text-[#0E9384] font-[800] text-[0.875rem] font-manrope dark:font-manrope">
                        Connect wallet
                      </div>
                    </div>
                  )}
                </div>
                <div
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="bg-[rgba(255,255,255,0.06)] dark:text-[#0C0C0D] mt-[0.5rem] dark:bg-[white] font-manrope  text-[#777879] w-full  font-[800]  h-[3.875rem]  py-[1rem] px-[1.5rem] flex flex-row justify-between gap-[1rem] items-center rounded-[2rem] cursor-pointer "
                >
                  <div className=" menu-item my-[4px] cursor-pointer w-full h-auto text-[white] dark:text-[black] text-[1rem] flex flex-row justify-between items-center py-[1rem] px-[1.4rem] rounded-[2rem]  hover:opacity-[1] hover:text-[white] hover:font-[700] gap-[16px] font-[800] w-full opacity-[0.5]">
                    <div>Theme</div>
                    <Image
                      src={theme === "light" ? Dark : Light}
                      alt="/"
                      className="cursor-pointer w-5 h-5 ml-3"
                    />
                  </div>
                </div>
              </div>
            </div>
          </ul>
        ) : (
          <></>
        )}
        {isPopupOpen && (
          <ConnectWallet
            handlecloseWalletConnect={handlecloseWalletConnect}
            chain={leaderBoardChain.id}
          />
        )}
      </div>
    </ConfigProvider>
  );
};

export default Header;
