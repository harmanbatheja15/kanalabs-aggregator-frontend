/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useCallback, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useAccount } from "wagmi";
import { useDisconnect } from "wagmi";
import { useStore } from "@/app/store";
import { notification, ConfigProvider } from "antd";
import {
  useNotification,
  NotificationType,
} from "../../utils/notificationUtils";
import ClickAwayListener from "react-click-away-listener";
import { useAptosContext } from "@/app/contexts/AptosWalletContext";
import { useWallet } from "@solana/wallet-adapter-react";
import { getReferralBonus } from "../../utils/kanalabs";
import Image from "next/image";
import User from "../../../assets/Icons/user-circle.svg";
import Settings from "../../Component/Settings";
import Logo from "../../../assets/Icons/Small-logo.svg";
import mobileSetting from "../../../assets/Icons/mobile-setting.svg";
import Sandwichmenu from "../../../assets/Icons/sandwich-menu.svg";
import wrongRed from "../../../assets/Icons/x-close-Red.svg";
import ChevronDown from "../../../assets/Icons/chevron-down.svg";
import ChevronDownDark from "../../../assets/Icons/chevron-down-dark.svg";
import LeaderboardDark from "../../../assets/Icons/leader_board_dark.svg";
import Leaderboard from "../../../assets/Icons/leader_board.svg";
import Swap from "../../../assets/Icons/coins-swap.svg";
import StakeDark from "../../../assets/Icons/stack_icon_dark.svg";
import Stake from "../../../assets/Icons/stack_icon.svg";
import SwitchDark from "../../../assets/Icons/switch_dark.svg";
import Switch from "../../../assets/Icons/switch_icon.svg";
import Trade from "../../../assets/Icons/Trade.svg";
import Yield from "../../../assets/Icons/coins-hand.svg";
import PerpsLight from "../../../assets/Icons/perps.svg";
import PerpsDark from "../../../assets/Icons/perps_dark.svg";
import MenuLight from "../../../assets/Icons/menu-light.svg";
import coinsLight from "../../../assets/Icons/coins-swap-01-light.svg";
import Arrowleft from "../../../assets/Icons/arrow-left-1.svg";
import Metamask from "../../../assets/Icons/MetaMask.svg";
import Coinbase from "../../../assets/Icons/Coinbase.svg";
import DefaultIcon from "../../../assets/Icons/web.svg";
import TradeDark from "../../../assets/Icons/bar-chart-square-dark.svg";
import Copy from "../../../assets/Icons/copy-referal.svg";
import Logout from "../../../assets/Icons/Logoff.svg";
import { NetworkId } from "@kanalabs/aggregator";
import Dark from "../../../assets/Icons/Dark.svg";
import Light from "../../../assets/Icons/Light.svg";
import { useWalletKit } from "@mysten/wallet-kit";
import ReferralDark from "../../../assets/Icons/referral_dark.svg";
import Referral from "../../../assets/Icons/referral.svg";
import GreenDown from '../../../assets/Icons/Green-down.svg';
import GridLight from '../../../assets/Icons/grid-light.svg';
import CoinsGreen from '../../../assets/Icons/coins-green.svg';
import Bell from '../../../assets/Icons/bell.svg';
import ReferalConnectwallet from './Component/ReferalConnectwallet';

const Header = () => {
  const [isConnectWalletOpen, setIsConnectWalletOpen] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
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
	setIsConnectWalletOpen(false);
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
  const handleCloseSettings = () => {
    setPopupOpen(false);
  };
  const handleMobileMenu = () => {
    setIsMobileMenuActive(!isMobileMenuActive);
  };
  const copyHash = useCallback(async (hash: any) => {
    await navigator.clipboard.writeText(hash);
  }, []);

  const toastStyle = {
    borderRadiusLG: 20,
    colorText: theme === "dark" ? "black" : "rgba(255, 255, 255, 0.88)",
    colorTextHeading: theme === "dark" ? "black" : "rgba(255, 255, 255, 0.88)",
    colorIcon: theme === "dark" ? "black" : "rgba(255, 255, 255, 0.45)",
    colorBgElevated: theme === "dark" ? "#EFF7F8" : "rgb(23, 24, 26)",
    colorIconHover: theme === "dark" ? "" : "rgba(255, 255, 255, 0.88)",
  };
  const [isLeaderBoard, setIsLeaderBoard] = useState(false);

  const handleLeaderBoard = () => {
    if (isLeaderBoard === false) {
      setIsLeaderBoard(true);
    } else {
      setIsLeaderBoard(false);
    }
  };
  return (
    <ConfigProvider theme={{ components: { Notification: toastStyle } }}>
      {contextHolder}
      <div className="   !z-[2]  xxl:w-full bxl:w-full xl:w-full sxl:w-full lg:w-full md:w-screen sm:w-screen xd:w-screen   !sticky !top-0 flex flex-col justify-start items-start !font-inter  ">
        <div className="font-manrope flex justify-start items-start !font-manrope w-full  ">
          <div className="h-[6.5rem] w-full  xxl:rounded-b-[1rem] bxl:rounded-b-[1rem] xl:rounded-b-[1rem] sxl:rounded-b-[1rem] lg:rounded-b-[1rem] md:rounded-b-none sm:rounded-none xd:rounded-none dark:bg-[#FCFDFE] bg-[#111213] p-[0%_2%] flex items-center justify-start gap-[1rem] ">
            <div className="2xl:hidden xl:hidden lg:hidden md:flex sm:flex xd:flex w-full justify-between items-center">
              <div className=" flex ">
                <Image src={Logo} alt="" />
              </div>
              <div className="flex">
                <div onClick={handleMobileMenu} className=" flex">
                  {isMobileMenuActive ? (
                    <Image src={wrongRed} alt="wrongRed" className=" " />
                  ) : (
                    <Image
                      src={theme === "light" ? Sandwichmenu : MenuLight}
                      alt="Sandwichmenu"
                      className="   w-[1.5rem] h-[1.5rem]"
                    />
                  )}
                </div>
              </div>
            </div>

            <div className="h-[3.5rem] flex-1 rounded-[1rem] dark:bg-[#EFF7F8] bg-[#1D1E20]  2xl:inline xl:inline lg:inline md:hidden sm:hidden xd:hidden">
              <div className="">
                <a href="https://kanalabs.io/" rel="noreferrer">
                  <div className="flex  cursor-pointer p-4">
                    <Image src={Arrowleft} alt="Arrowleft" />
                    <div className="font-bold text-[#2ED3B7] dark:text-[#777879] pl-2">
                      Back to Home
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="flex flex-1 flex-row justify-between items-center h-[3.5rem] rounded-[1rem] dark:bg-[#EFF7F8] bg-[#1D1E20] gap-[1rem] 2xl:flex xl:flex lg:flex md:hidden sm:hidden xd:hidden cursor-pointer relative" onClick={() => setIsOpen((isOpen) => !isOpen)}>
			  <div className="flex items-center justify-center font-bold text-[#2ED3B7] dark:text-[#777879] pl-4">
				<Image src={GridLight} alt='' className='w-6 h-6 mr-2' />
				Season
			  </div>
			  <div className='flex items-center justify-center pr-6'>
			  	<Image src={GreenDown} alt='' className="w-[1.5rem] h-[1.5rem]" />
			  </div>

			  {isOpen ? (
				<ClickAwayListener
					onClickAway={() =>
						setIsOpen((isOpen) => !isOpen)
					}
				>
					<div
						className={`w-full overflow-y-scroll cursor-pointer absolute top-[120%] !z-[100] rounded-[0.5rem] scroll-smooth backdrop-blur-sm dark:bg-[#EFF7F8] bg-[#1D1E20]`}
					>
						<div
							className={`dark:bg-[#EFF7F8] dark:hover:bg-[#EFF7F8] bg-[#1D1E20] hover:bg-[#1f2122] cursor-pointer flex flex-row justify-between items-center p-[0.5rem_1rem] w-[100%]`}
						>
							<div className='flex py-3.5 dark:text-black text-[#2ED3B7]'>
								Season 1
							</div>
						</div>
					</div>
				</ClickAwayListener>
			) : (
				<></>
			)}
            </div>

            <div className="h-[3.5rem] flex-1 rounded-[1rem] dark:bg-[#EFF7F8] bg-[#1D1E20] gap-[1rem]  2xl:inline xl:inline lg:inline md:hidden sm:hidden xd:hidden">
              <div className="flex justify-between p-4">
                {walletConnected ? (
                  <>
                    <div className="flex">
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
                    </div>
                    <div className="flex">
                      <Image
                        src={Copy}
                        alt="/"
                        className="cursor-pointer w-5 h-5"
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
                        className="cursor-pointer w-5 h-5 ml-2"
                        onClick={() => handleWalletDisconnect()}
                      />
                    </div>
                  </>
                ) : (
                  <div className="flex flex-1 cursor-pointer" onClick={() => setIsConnectWalletOpen(isConnectWalletOpen => !isConnectWalletOpen)}>
                    <div className="flex">
                      <Image src={theme === "light" ? User : User} alt="/" />
                    </div>
                    <div className="pl-2 text-[#2ED3B7] dark:text-[#2ED3B7] font-[800] text-[0.875rem] font-manrop dark:font-manrop">
                      Connect wallet
                    </div>
                  </div>
                )}
              </div>
            </div>
			
			<div className='flex items-center justify-between dark:bg-[#EFF7F8] bg-[#1D1E20] rounded-2xl py-4 px-6 h-[56px] text-[#2ED3B7] dark:text-[#0E9384] cursor-pointer xl:flex lg:flex md:hidden sm:hidden xd:hidden'>
				<div className='flex items-center justify-center'>
					<Image src={CoinsGreen} alt='' />
					<span className='ml-2 font-extrabold text-sm'>
						Your Points
					</span>
				</div>
			</div>

            <div className="h-[3.5rem] w-[3.5rem] rounded-[1rem] dark:!bg-[#EFF7F8] bg-[#1D1E20] gap-[1rem]  cursor-pointer flex items-center justify-center 2xl:flex xl:flex lg:flex md:hidden sm:hidden xd:hidden">
              {/* <Image src={Setting} alt="" onClick={openPopup} /> */}
              <Image src={Bell} alt="" />
            </div>

            <div className="h-[3.5rem] w-[3.5rem] rounded-[1rem] dark:!bg-[#EFF7F8] bg-[#1D1E20] gap-[1rem]  cursor-pointer flex items-center justify-center 2xl:flex xl:flex lg:flex md:hidden sm:hidden xd:hidden" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {/* <Image src={Setting} alt="" onClick={openPopup} /> */}
              <Image
                src={theme === "light" ? Dark : Light}
                alt="/"
              />
            </div>
			
          </div>
        </div>
		
        {isMobileMenuActive ? (
          <ul
            className={`flex-1 flex flex-col w-full justify-between items-start py-3 mt-24 xxl:hidden bxl:hidden xl:hidden sxl:hidden lg:flex md:flex md:pb-0 md:mt-24 sm:mt-24 xd:mt-24 z-[1] h-full fixed ${
              isMobileMenuActive
                ? "!fixed !right-0 !left-0   lg:!bottom-0 md:!bottom-24 sm:!bottom-24 xd:!bottom-24 !top-0	!bg-[#17181A] dark:!bg-[#FCFDFE] "
                : "hidden"
            }`}
          >
            <div className="flex flex-col  items-start overflow-y-scroll justify-start align-middle  h-full gap-[8px] w-full lg:!px-[1rem] md:!px-[1rem] sm:!px-[1rem] xd:!px-[1rem] !bg-transparent">
              <a
                rel="noreferrer"
                href=" https://app.kanalabs.io/"
                target="_blank"
                className="w-full flex  h-[52px] flex-row justify-start items-center    bg-transparent gap-[16px]"
              >
                <div className=" menu-item my-[4px] cursor-pointer w-full h-auto text-[white] dark:text-[#777879] text-[1rem]   flex flex-row justify-start items-center py-[1rem] px-[1.4rem] rounded-[16px] hover:bg-[rgba(255,255,255,0.06)] hover:opacity-[1] hover:text-[white] hover:font-[700] gap-[16px] font-[800] opacity-[0.5]">
                  <div className=" flex flex-row justify-start items-center gap-[16px]">
                    <Image
                      className="bg-transparent  !h-[1rem]"
                      src={theme === "light" ? Swap : coinsLight}
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
                <div className=" menu-item my-[4px] cursor-pointer w-full h-auto text-[white] dark:text-[#777879] text-[1rem]   flex flex-row justify-start items-center py-[1rem] px-[1.4rem] rounded-[16px] hover:bg-[rgba(255,255,255,0.06)] hover:opacity-[1] hover:text-[white] hover:font-[700] gap-[16px] font-[800] opacity-[0.5]">
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
                <div className=" menu-item my-[4px] cursor-pointer w-full h-auto text-[white] dark:text-[#777879] text-[1rem]   flex flex-row justify-start items-center py-[1rem] px-[1.4rem] rounded-[16px] hover:bg-[rgba(255,255,255,0.06)] hover:opacity-[1] hover:text-[white] hover:font-[700] gap-[16px] font-[800] opacity-[0.5]">
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
                <div className=" menu-item my-[4px] cursor-pointer w-full h-auto text-[white] dark:text-[#777879] text-[1rem]   flex flex-row justify-start items-center py-[1rem] px-[1.4rem] rounded-[16px] hover:bg-[rgba(255,255,255,0.06)] hover:opacity-[1] hover:text-[white] hover:font-[700] gap-[16px] font-[800] opacity-[0.5]">
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

              <div  onClick={handleLeaderBoard} className="w-full flex  h-[52px] flex-row justify-start items-center rounded-[1rem]   gap-[16px]">
                <div className=" menu-item my-[4px] cursor-pointer w-full h-auto text-[white] dark:text-[#777879] text-[1rem]   flex flex-row justify-start items-center py-[1rem] px-[1.4rem] rounded-[16px]   hover:bg-[rgba(255,255,255,0.06)] hover:opacity-[1] hover:text-[white]   hover:text-[white] hover:font-[700] gap-[16px]  opacity-[0.5] font-[800] ">
                  <div
                    className=" flex flex-row justify-between w-full items-center"
                   
                  >
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
                </div>
              </div>
              {isLeaderBoard ? (
                <div className="submenu w-full gap-2 flex flex-col">
                  <a
                    href="https://rewards.kanalabs.io/Leaderboard"
                    rel="noreferrer"
                    className={`   h-[52px] flex flex-row justify-start items-center  w-full  bg-transparent gap-[16px]  hover:bg-[rgba(255,255,255,0.06)] hover:opacity-[1] hover:text-[white] hover:font-[700] opacity-[0.5] font-[800] `}
                  >
                    <div
                      className={` dark:hover:bg-[#EFF7F8] hover:bg-[rgba(255,255,255,0.06)] bg-transparent menu-item text-[16px] my-[4px]  w-full h-auto font-[400] flex flex-row justify-start items-center   rounded-[16px]  hover:opacity-[1] hover:text-[white] hover:font-[700] gap-[16px] `}
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
                      className={`  dark:hover:bg-[#EFF7F8] hover:bg-[rgba(255,255,255,0.06)]  bg-transparent menu-item text-[16px] my-[4px]  w-full h-auto  text-[16px] font-[400] flex flex-row justify-start items-center   rounded-[16px]  hover:opacity-[1] hover:text-[white] hover:font-[700] gap-[16px]  `}
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

              <div className="w-full flex  h-[52px] flex-row justify-start items-center  rounded-[1rem]   dark:!bg-[white] !bg-[rgba(255,255,255,0.06)]   bg-transparent gap-[16px]">
                <div className=" menu-item my-[4px] cursor-pointer w-full h-auto text-[white] dark:text-[#777879] text-[1rem]   flex flex-row justify-start items-center py-[1rem] px-[1.4rem] rounded-[16px] hover:bg-[rgba(255,255,255,0.06)] hover:opacity-[1] hover:text-[white] hover:font-[700] gap-[16px] font-[800] ">
                  <div className=" flex flex-row justify-start items-center gap-[16px]">
                    <Image
                      className="bg-transparent  !h-[1rem]"
                      src={theme === "dark" ? ReferralDark : Referral}
                      alt="Swap"
                    />
                    <div>Referal</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="w-full flex  h-[52px] flex-row justify-start items-center    bg-transparent gap-[16px]">
                  {walletConnected ? (
                    <>
                      <div className="flex py-[1rem] px-[1.4rem]">
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
                          src={Copy}
                          alt="/"
                          className="cursor-pointer w-5 h-5 ml-2"
                          onClick={() => {
                            copyHash(walletAddress);
                            showNotification(NotificationType.Success, {
                              message: "Address Copied",
                            });
                            // notification.success({
                            //   message: "Address Copied",
                            // });
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
                    <></>
                  )}
                </div>
              </div>
              <div className="dark:bg-[#e4f2f3] dark:text-[#0C0C0D] bg-[#1D1E20] font-manrope !rounded-[2rem] text-[#777879] w-full  font-[800]  h-[3.875rem]  py-[1rem] px-[1.5rem] flex flex-row justify-between gap-[1rem] items-center  cursor-pointer ">
                <div>Theme</div>
                <Image
                  src={theme === "light" ? Dark : Light}
                  alt="/"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="cursor-pointer w-5 h-5 ml-3"
                />
              </div>
            </div>
          </ul>
        ) : (
          <></>
        )}
		
        {isPopupOpen && <Settings handleCloseSettings={handleCloseSettings} />}
      </div>
	  {isConnectWalletOpen && <ReferalConnectwallet />}
    </ConfigProvider>
  );
};

export default Header;
