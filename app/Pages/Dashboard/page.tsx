"use client";
import React, { useState } from "react";
import Image from "next/image";
import Refresh from "../../../assets/Icons/refresh.svg";
import View from "../../../assets/Icons/View.svg";
import Setting from "../../../assets/Icons/setting.svg";
import Green from "../../../assets/Icons/Green-down.svg";
import GreenLight from "../../../assets/Icons/chevron-down-light.svg";
import VectorDown from "../../../assets/Icons/chevron-down.svg";
import Token from "../../../assets/Icons/Token-img.svg";
import SubToken from "../../../assets/Icons/Sub-Token.svg";
import Interchange from "../../../assets/Icons/Interchange.svg";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Settings from "../../Component/Settings";
import SelectToken from "../../Component/SelectToken";
import Preferences from "@/app/Component/Preferences";
import PreviousToken from "../../../assets/Icons/coins-PreviousToken.svg";
import Clockrewind from "../../../assets/Icons/clock-rewind.svg";
import UserUp from "../../../assets/Icons/user-up-01.svg";
import Metamask from "../../../assets/Icons/MetaMask.svg";
import Plus from "../../../assets/Icons/plus.svg";
import { useTheme } from "next-themes";
import RefreshLight from "../../../assets/Icons/refresh-light.svg";
import SettingLight from "../../../assets/Icons/settings-light.svg";
import ViewLight from "../../../assets/Icons/grid-light.svg";
import Tokenlight from "../../../assets/Icons/Token-light.svg";
import subtokenlight from "../../../assets/Icons/subtoken-light.svg";
import PopularTokens from "@/app/Component/PopularTokens";
import LeaderBoard from "@/app/Component/Leaderboard";
import { LuExternalLink } from 'react-icons/lu';
import BgCoinsSwapGreen from '@/assets/Icons/bg-coins-swap-green.svg';
import BgCoinsStackedGreen from '@/assets/Icons/bg-coins-stacked-green.svg';
import BgCoinsHandGreen from '@/assets/Icons/bg-coins-hand-green.svg';
import BgScalesGreen from '@/assets/Icons/bg-scales-green.svg';
import BgBarChartGreen from '@/assets/Icons/bg-bar-chart-green.svg';
import BgGamingPadGreen from '@/assets/Icons/bg-gaming-pad-green.svg';

const Dashboard = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isToken, setPopupToken] = useState(false);
  const [isPreferences, setIsPreferences] = useState(false);
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const [walletDropdown, setWalletDropDown] = useState(false);
  const [isCheckbox, setIsCheckbox] = useState(false);
  const [isPopularTokensClicked, setIsPopularTokensClicked] = useState(false);
  const [isPreviousClicked, setIsPreviousClicked] = useState(false);
  const [isLeaderboardClicked, setIsLeaderboardClicked] = useState(false);
  const { theme } = useTheme();
  const openPopup = () => {
    setPopupOpen(true);
  };
  const handleCloseSettings = () => {
    setPopupOpen(false);
  };
  const openToken = () => {
    setPopupToken(true);
  };
  const handleCloseToken = () => {
    setPopupToken(false);
  };

  const OpenPreferences = () => {
    setIsPreferences(true);
  };
  const handleClosePrefrences = () => {
    setIsPreferences(false);
  };
  const toggleDropdown = () => {
    setIsOpenDropDown(!isOpenDropDown);
  };
  const toggleDropdownReceive = () => {
    setWalletDropDown(!walletDropdown);
  };

  const handleCheckbox = () => {
    setIsCheckbox(!isCheckbox);
  };
  return (
	<>

	<div className='flex-1 mt-0 lg:mt-4'>
				<div className='w-full mx-auto'>
					<div
						className='text-white px-4 lg:px-6 py-6 lg:rounded-2xl relative'
						style={{
							background: theme === 'dark' ? 'white' : 'linear-gradient(92.39deg, #000000 46.88%, #0194FF 184.51%)',
						}}
					>
						<div className='mt-[41px]'>
							<h1 className='lg:text-4xl md:text-3xl sm:text-2xl text-xl font-extrabold mb-5 dark:text-black'>
								Check out our new product
								<br />
								or read our latest blog
							</h1>
							<button className='bg-[#2ED3B7] text-[#121926] text-xs py-2 px-4 rounded-lg mb-[53px]'>
								Try now
							</button>
						</div>
						<div className='absolute top-10 right-0'>
							<svg
								width='417'
								height='233'
								viewBox='0 0 417 233'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fill-rule='evenodd'
									clip-rule='evenodd'
									d='M235.378 51.9576C235.818 51.9299 236.203 52.0742 236.534 52.3994C236.885 52.7431 237.138 53.2666 237.138 53.9037V116.61H237.658C217.938 139.061 206.953 168.208 206.953 198.511C206.953 229.024 218.091 258.366 238.069 280.879H237.138V343.113C237.138 343.75 236.885 344.273 236.534 344.617C236.203 344.942 235.818 345.087 235.378 345.059C219.257 344.042 203.391 340.371 188.428 334.173C170.613 326.793 154.425 315.977 140.789 302.341C127.154 288.706 116.338 272.518 108.958 254.702C101.579 236.887 97.7803 217.792 97.7803 198.508C97.7803 179.225 101.579 160.13 108.958 142.314C116.338 124.499 127.154 108.311 140.789 94.6754C154.425 81.0398 170.613 70.2235 188.428 62.844C203.391 56.6461 219.257 52.9745 235.378 51.9576ZM252.106 294.352V343.113C252.106 352.48 244.417 360.627 234.436 359.997C216.671 358.877 199.189 354.831 182.7 348.001C163.069 339.869 145.231 327.951 130.206 312.925C115.18 297.9 103.261 280.062 95.1296 260.43C86.9979 240.799 82.8125 219.757 82.8125 198.508C82.8125 177.259 86.9978 156.218 95.1296 136.586C103.261 116.955 115.18 99.117 130.206 84.0915C145.231 69.0661 163.069 57.1473 182.7 49.0156C199.189 42.1859 216.671 38.14 234.436 37.0195C244.417 36.3899 252.106 44.5362 252.106 53.9037V102.671C270.817 87.4003 293.607 78.1567 317.544 76.1799C322.894 75.738 327.255 80.1321 327.255 85.501V311.522C327.255 316.891 322.894 321.285 317.544 320.843C293.607 318.866 270.817 309.622 252.106 294.352ZM252.878 122.204C269.079 105.676 289.966 95.119 312.287 91.8407V305.182C289.966 301.904 269.079 291.347 252.878 274.818C233.09 254.63 221.921 227.188 221.921 198.511C221.921 169.835 233.09 142.392 252.878 122.204Z'
									fill='url(#paint0_linear_2527_1032)'
								/>
								<defs>
									<linearGradient
										id='paint0_linear_2527_1032'
										x1='257.1'
										y1='316.487'
										x2='257.1'
										y2='-966.271'
										gradientUnits='userSpaceOnUse'
									>
										<stop
											offset='0.0802975'
											stop-color='#0194FF'
											stop-opacity='0'
										/>
										<stop offset='1' stop-color='#00FFFF' />
									</linearGradient>
								</defs>
							</svg>
						</div>
					</div>
				</div>
				<div className='w-full mx-auto mt-4'>
					<div className='flex flex-1 flex-wrap items-center lg:justify-start justify-center [&>div]:mb-4 [&>div]:!mr-4 lg:[&>div]:!ml-0 [&>div]:!ml-4'>
						<div className='rounded-2xl border border-[#FFFFFF1A] dark:border-[#0000001a] xxl:w-auto xl:w-auto lg:w-auto md:w-auto sm:w-full xd:w-full'>
							<div className='bg-[#17181A] dark:bg-[#FCFDFE] pt-8 pl-[31px] pr-[115px] pb-[48px] relative rounded-t-2xl'>
								<h1 className='text-[#777879] text-xl font-normal relative z-[1]'>
									Try the new
									<br />
									Cross-chain swap
								</h1>
								<div className='absolute top-0 right-0'>
									<Image
										src={BgCoinsSwapGreen}
										alt=''
										className='z-[0]'
									/>
								</div>
							</div>
							<div className='flex items-center justify-between bg-[#111213] dark:bg-[#FCFDFE] py-4 px-6 rounded-b-2xl'>
								<p className='text-[#FFFFFF] dark:text-black text-lg font-extrabold'>
									Swap
								</p>
								<LuExternalLink className='cursor-pointer text-white dark:text-black' />
							</div>
						</div>
						<div className='rounded-2xl border border-[#FFFFFF1A] dark:border-[#0000001a] xxl:w-auto xl:w-auto lg:w-auto md:w-auto sm:w-full xd:w-full'>
							<div className='bg-[#17181A] dark:bg-[#FCFDFE] pt-8 pl-[31px] pr-[115px] pb-[48px] relative rounded-t-2xl'>
								<h1 className='text-[#777879] text-xl font-normal relative z-[1]'>
									Try the new
									<br />
									Cross-chain swap
								</h1>
								<div className='absolute top-0 right-0'>
									<Image
										src={BgCoinsStackedGreen}
										alt=''
										className='z-[0]'
									/>
								</div>
							</div>
							<div className='flex items-center justify-between bg-[#111213] dark:bg-[#FCFDFE] py-4 px-6 rounded-b-2xl'>
								<p className='text-[#FFFFFF] dark:text-black text-lg font-extrabold'>
									Stake
								</p>
								<LuExternalLink className='cursor-pointer text-white dark:text-black' />
							</div>
						</div>
						<div className='rounded-2xl border border-[#FFFFFF1A] dark:border-[#0000001a] xxl:w-auto xl:w-auto lg:w-auto md:w-auto sm:w-full xd:w-full'>
							<div className='bg-[#17181A] dark:bg-[#FCFDFE] pt-8 pl-[31px] pr-[115px] pb-[48px] relative rounded-t-2xl'>
								<h1 className='text-[#777879] text-xl font-normal relative z-[1]'>
									Try the new
									<br />
									Cross-chain swap
								</h1>
								<div className='absolute top-0 right-0'>
									<Image
										src={BgCoinsHandGreen}
										alt=''
										className='z-[0]'
									/>
								</div>
							</div>
							<div className='flex items-center justify-between bg-[#111213] dark:bg-[#FCFDFE] py-4 px-6 rounded-b-2xl'>
								<p className='text-[#FFFFFF] dark:text-black text-lg font-extrabold'>
									Yield
								</p>
								<LuExternalLink className='cursor-pointer text-white dark:text-black' />
							</div>
						</div>
						<div className='rounded-2xl border border-[#FFFFFF1A] dark:border-[#0000001a] xxl:w-auto xl:w-auto lg:w-auto md:w-auto sm:w-full xd:w-full'>
							<div className='bg-[#17181A] dark:bg-[#FCFDFE] pt-8 pl-[31px] pr-[115px] pb-[48px] relative rounded-t-2xl'>
								<h1 className='text-[#777879] text-xl font-normal relative z-[1]'>
									Try the new
									<br />
									Cross-chain swap
								</h1>
								<div className='absolute top-0 right-0'>
									<Image
										src={BgScalesGreen}
										alt=''
										className='z-[0]'
									/>
								</div>
							</div>
							<div className='flex items-center justify-between bg-[#111213] dark:bg-[#FCFDFE] py-4 px-6 rounded-b-2xl'>
								<p className='text-[#FFFFFF] dark:text-black text-lg font-extrabold'>
									Switch
								</p>
								<LuExternalLink className='cursor-pointer text-white dark:text-black' />
							</div>
						</div>
						<div className='rounded-2xl border border-[#FFFFFF1A] dark:border-[#0000001a] xxl:w-auto xl:w-auto lg:w-auto md:w-auto sm:w-full xd:w-full'>
							<div className='bg-[#17181A] dark:bg-[#FCFDFE] pt-8 pl-[31px] pr-[115px] pb-[48px] relative rounded-t-2xl'>
								<h1 className='text-[#777879] text-xl font-normal relative z-[1]'>
									Try the new
									<br />
									Cross-chain swap
								</h1>
								<div className='absolute top-0 right-0'>
									<Image
										src={BgBarChartGreen}
										alt=''
										className='z-[0]'
									/>
								</div>
							</div>
							<div className='flex items-center justify-between bg-[#111213] dark:bg-[#FCFDFE] py-4 px-6 rounded-b-2xl'>
								<p className='text-[#FFFFFF] dark:text-black text-lg font-extrabold'>
									Trade
								</p>
								<LuExternalLink className='cursor-pointer text-white dark:text-black' />
							</div>
						</div>
						<div className='rounded-2xl border border-[#FFFFFF1A] dark:border-[#0000001a] xxl:w-auto xl:w-auto lg:w-auto md:w-auto sm:w-full xd:w-full'>
							<div className='bg-[#17181A] dark:bg-[#FCFDFE] pt-8 pl-[31px] pr-[115px] pb-[48px] relative rounded-t-2xl'>
								<h1 className='text-[#777879] text-xl font-normal relative z-[1]'>
									Try the new
									<br />
									Cross-chain swap
								</h1>
								<div className='absolute top-0 right-0'>
									<Image
										src={BgGamingPadGreen}
										alt=''
										className='z-[0]'
									/>
								</div>
							</div>
							<div className='flex items-center justify-between bg-[#111213] dark:bg-[#FCFDFE] py-4 px-6 rounded-b-2xl'>
								<p className='text-[#FFFFFF] dark:text-black text-lg font-extrabold'>
									Play
								</p>
								<LuExternalLink className='cursor-pointer text-white dark:text-black' />
							</div>
						</div>
					</div>
				</div>
	</div>

    {/* <div className="w-full">
      <div
        className={`${
          isPopularTokensClicked
            ? " flex xxl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col xd:flex-col"
            : ""
        }flex justify-center   xxl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col xd:flex-col w-full`}
      >
        <div className="my-4 w-full">
          <div className=" xxl:w-[33.5rem] xl:w-[33.5rem] lg:w-[33.5rem] md:w-full sm:w-full xd:w-full gap-[1rem] xxl:dark:bg-[#FCFDFE] xl:dark:bg-[#FCFDFE] lg:dark:bg-[#FCFDFE] md:dark:bg-transparent sm:dark:bg-transparent xd:dark:bg-transparent xxl:bg-[#17181a] xl:bg-[#17181a] lg:bg-[#17181a] md:bg-transparent sm:bg-transparent xd:bg-transparent rounded-[1rem] 2xl:border-2 xl:border-2 lg:border-2 md:border-none sm:border-none xd:border-none border-[#ffffff1a] dark:border-[#E3E8EF] ">
            <div className=" xxl:m-6 xl:m-6 lg:m-6 md:m-0 sm:m-0 xd:m-0">
              <div className=" flex justify-between 2xl:border-none xl:border-none lg:border-none md:border-b-2 sm:border-b-2 xd:border-b-2 border-[#2e2f31] dark:border-[#E3E8EF] gap-[0.5rem] 2xl:pt-6 xl:pt-6 lg:pt-6 md:pt-3 sm:pt-3 xd:pt-3 2xl:h-auto xl:h-auto md:h-[3.5rem] sm:h-[3.5rem] xd:h-[3.5rem]">
                <div className=" text-[#FFFFFFCC] dark:text-[#4A4B4D] text-[0.875rem] dark:font-[700] font-[800] 2xl:flex xl:flex lg:flex md:hidden sm:hidden xd:hidden">
                  Swap
                </div>
                <div className=" text-[#FFFFFFCC] dark:text-[#4A4B4D] text-[0.875rem] font-[800] 2xl:hidden xl:hidden lg:hidden md:inline-flex sm:inline-flex xd:inline-flex pl-4">
                  Home
                </div>
                <div className=" flex">
                  <div className=" border-2 rounded-[0.5rem] text-[#2ED3B7] dark:text-[#0E9384] dark:border-[#0E9384] border-[#2ED3B7] flex justify-center items-center w-[5.063rem] h-[2rem] cursor-pointer 2xl:inline-flex xl:inline-flex lg:inline-flex md:hidden sm:hidden xd:hidden mx-1 ">
                    Redeem
                  </div>
                  <div className=" border-2 rounded-[0.5rem] text-[#2ED3B7] dark:text-[#0E9384] dark:border-[#0E9384] border-[#2ED3B7] flex justify-center items-center w-[2rem] h-[2rem] mx-1 cursor-pointer ">
                    <Image
                      src={theme === "light" ? Refresh : RefreshLight}
                      alt="Refresh"
                    />
                  </div>
                  <div
                    className=" border-2 rounded-[0.5rem] text-[#2ED3B7] dark:text-[#0E9384] dark:border-[#0E9384] border-[#2ED3B7] flex justify-center items-center w-[2rem] h-[2rem] mx-1 cursor-pointer 2xl:inline-flex xl:inline-flex lg:inline-flex md:hidden sm:hidden xd:hidden"
                    onClick={OpenPreferences}
                  >
                    <Image
                      src={theme === "light" ? Setting : SettingLight}
                      alt="setting"
                    />
                  </div>
                  <div
                    className=" border-2 rounded-[0.5rem] text-[#2ED3B7] border-[#2ED3B7] dark:border-[#0E9384] flex justify-center items-center w-[2rem] h-[2rem] mx-1 cursor-pointer"
                    onClick={openPopup}
                  >
                    <Image
                      src={theme === "light" ? View : ViewLight}
                      alt="view"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex justify-center 2xl:pt-0 xl:pt-0 lg:pt-0 md:pt-7 sm:pt-7 xd:pt-7">
              <div className="border-2 border-[#2e2f31] dark:border-[#E3E8EF] gap-[1rem] rounded-[1rem] bg-[#111213] dark:bg-[#F2F9F9] 2xl:w-[30.5rem] xl:w-[30.5rem] lg:w-[30.5rem] md:w-[30.5rem] sm:w-auto xd:w-auto h-[8.5rem] px-5 py-5 flex justify-between">
                <div>
                  <div className=" flex ">
                    <div className=" text-[#A5A5A6] dark:text-[#4A4B4D] text-[0.75rem] py-1">
                      Pay From
                    </div>
                    <span
                      className=" text-[#2ED3B7] dark:text-[#0E9384] text-[0.75rem] dark:font-[700] font-[800] flex px-4 cursor-pointer pt-1"
                      onClick={toggleDropdown}
                    >
                      Select Wallet
                      <Image
                        src={theme === "light" ? Green : GreenLight}
                        alt="Green"
                        className=" mb-2 ml-1"
                      />
                    </span>
                  </div>
                  {isOpenDropDown && (
                    <div>
                      <div className=" bg-[#111213] dark:bg-[#EFF7F8] dark:border-[#E3E8EF]    border-2 border-[#2e2f31] rounded-[0.5rem] w-[13.688rem] h-[7.875rem] ml-[4rem] z-[2] absolute mt-[0.1rem] gap-[1rem] p-2 ">
                        <div
                          className=" flex py-2 "
                          onClick={() => {
                            setIsPopularTokensClicked(!isPopularTokensClicked);
                          }}
                        >
                          <input type="checkbox" className="bg-custom" />
                          <Image
                            src={PreviousToken}
                            alt="PreviousToken"
                            className=" ml-2"
                          />
                          <div className="text-[#FFFFFFCC] dark:text-[#4A4B4D] text-[0.75rem] font-[800] pl-2">
                            Popular tokens
                          </div>
                        </div>
                        <div
                          className=" flex  py-2 "
                          onClick={() => {
                            setIsPreviousClicked(!isPreviousClicked);
                          }}
                        >
                          <input
                            type="checkbox"
                            className=" border-2 border-[#ffffff33] rounded-[0.5rem] cursor-pointer bg-[#111213]"
                          />
                          <Image
                            src={Clockrewind}
                            alt="PreviousToken"
                            className=" ml-2"
                          />
                          <div className="text-[#FFFFFFCC] dark:text-[#4A4B4D] text-[0.75rem] font-[800] pl-2">
                            Previous transactions
                          </div>
                        </div>
                        <div
                          className=" flex py-2 "
                          onClick={() => {
                            setIsLeaderboardClicked(!isLeaderboardClicked);
                          }}
                        >
                          <input
                            type="checkbox"
                            className=" border-2 border-[#ffffff33] rounded-[0.5rem] cursor-pointer bg-[#111213]"
                          />
                          <Image
                            src={UserUp}
                            alt="PreviousToken"
                            className=" ml-2"
                          />
                          <div className="text-[#FFFFFFCC] dark:text-[#4A4B4D] text-[0.75rem] font-[800] pl-2">
                            Leaderboard
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="">
                    <input
                      placeholder="0.00"
                      className=" text-[#A5A5A6] dark:text-[#4A4B4D] text-[1.25rem] bg-transparent outline-none font-[600]"
                    />
                  </div>
                  <div className=" py-6">
                    <div className=" text-[#A5A5A6] dark:text-[#4A4B4D] text-[0.75rem] font-[600] flex">
                      <div>USD</div>
                      <div className=" pl-3">0</div>
                    </div>
                  </div>
                </div>
                <div onClick={openToken}>
                  <div className=" bg-[#17181A] dark:bg-[#FCFDFE] dark:border-[#E3E8EF] rounded-[1rem] 2x:w-[10rem] xl:w-[10rem] lg:w-[10rem] md:w-auto sm:w-auto xd:w-auto h-[4.625rem] border-2 border-[#2e2f31] flex text-[#A5A5A6] dark:text-[#4A4B4D] cursor-pointer">
                    <div className=" p-3.5">
                      <Image
                        src={theme === "light" ? Token : Tokenlight}
                        alt=""
                      />
                      <Image
                        src={theme === "light" ? SubToken : subtokenlight}
                        alt="/"
                        className=" absolute mx-7 my-[-1rem]"
                      />
                    </div>
                    <div className=" py-3.5 2x:inline xl:inline lg:inline md:hidden sm:hidden xd:hidden">
                      <div className=" font-[800]">Token</div>
                      <div className=" text-[0.625rem] font-[800]">
                        <span className=" font-[500]">On</span> chain
                      </div>
                    </div>
                  </div>
                  <div className=" flex justify-end py-2">
                    <span className="text-[#A5A5A6] dark:text-[#4A4B4D] text-[0.75rem] font-[600]">
                      Balance -
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className=" flex justify-center">
              <div className=" border-2 border-[#2e2f31] dark:border-[#E3E8EF] rounded-[0.5rem] bg-[#17181A] dark:bg-[#FCFDFE] w-[2.5rem] h-[2.5rem] flex justify-center items-center absolute mt-[-0.7rem]">
                <Image src={Interchange} alt="interchange" />
              </div>
            </div>
            <div className=" flex justify-center py-5">
              <div className="border-2 border-[#2e2f31] gap-[1rem] rounded-[1rem] dark:bg-[#F2F9F9] dark:border-[#E3E8EF]  bg-[#111213] 2xl:w-[30.5rem] xl:w-[30.5rem] lg:w-[30.5rem] md:w-[30.5rem] sm:w-auto xd:w-auto h-[8.5rem] px-5 py-5 flex justify-between">
                <div>
                  <div className=" flex ">
                    <div className=" text-[#A5A5A6] dark:text-[#4A4B4D] text-[0.75rem] py-1">
                      Receive to
                    </div>
                    <span
                      className=" text-[#2ED3B7] dark:text-[#0E9384] text-[0.75rem] dark:font-[700] font-[800] flex px-4 pt-1 cursor-pointer"
                      onClick={toggleDropdownReceive}
                    >
                      Select Wallet
                      <Image
                        src={theme === "light" ? Green : GreenLight}
                        alt="Green"
                        className="mb-2 ml-1"
                      />
                    </span>
                  </div>
                  {walletDropdown && (
                    <div>
                      <div className=" bg-[#111213] dark:bg-[#EFF7F8] dark:border-[#E3E8EF] border-2 border-[#2e2f31] rounded-[0.5rem] w-[13.688rem]  ml-[4rem] z-[2] absolute mt-[0.1rem] gap-[1rem] p-2 ">
                        <div className=" flex py-2 ">
                          <Image
                            src={Metamask}
                            alt="PreviousToken"
                            className=" ml-2"
                          />
                          <div className="text-[#FFFFFFCC] dark:text-[#4A4B4D] text-[0.75rem] font-[800] pl-2">
                            0xwalletaddressxyz
                          </div>
                        </div>
                        <div className=" flex  py-2 cursor-pointer ">
                          <Image
                            src={Plus}
                            alt="PreviousToken"
                            className=" ml-2.5"
                          />
                          <div className="text-[#FFFFFFCC] dark:text-[#4A4B4D] text-[0.75rem] font-[800] pl-3.5">
                            Connect new wallet
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="">
                    <input
                      placeholder="0.00"
                      className=" text-[#A5A5A6] text-[1.25rem] bg-transparent outline-none font-[600]"
                    />
                  </div>
                  <div className=" py-6">
                    <div className=" text-[#A5A5A6] dark:text-[#4A4B4D] text-[0.75rem] font-[600] flex">
                      <div>USD</div>
                      <div className=" pl-3">0</div>
                    </div>
                  </div>
                </div>
                <div onClick={openToken}>
                  <div className=" bg-[#17181A] rounded-[1rem] dark:bg-[#FCFDFE] dark:border-[#E3E8EF] 2x:w-[10rem] xl:w-[10rem] lg:w-[10rem] md:w-auto sm:w-auto xd:w-auto h-[4.625rem] border-2 border-[#2e2f31] flex text-[#A5A5A6] dark:text-[#4A4B4D] cursor-pointer">
                    <div className=" p-3.5">
                      <Image
                        src={theme === "light" ? Token : Tokenlight}
                        alt=""
                      />
                      <Image
                        src={theme === "light" ? SubToken : subtokenlight}
                        alt="/"
                        className=" absolute mx-7 my-[-1rem]"
                      />
                    </div>
                    <div className=" py-3.5 2x:inline xl:inline lg:inline md:hidden sm:hidden xd:hidden">
                      <div className=" font-[800]">Token</div>
                      <div className=" text-[0.625rem] font-[800]">
                        <span className=" font-[500]">On</span> chain
                      </div>
                    </div>
                  </div>
                  <div className=" flex justify-end py-2">
                    <span className="text-[#A5A5A6] dark:text-[#4A4B4D] text-[0.75rem] font-[600]">
                      Balance -
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex justify-center my-[-0.5rem]">
              <button
                className={`${
                  theme === "light" ? "buy-button" : "buy-button-light"
                } 2xl:w-[30.5rem] xl:w-[30.5rem] lg:w-[30.5rem] md:w-[30.6rem] sm:w-[23.5rem] xd:w-[23.5rem]`}
              >
                <div
                  className={`${
                    theme === "dark"
                      ? "buy-button-inner-light"
                      : "buy-button-inner"
                  }`}
                >
                  <span className=" text-[#2ED3B7] font-[800]">Swap Now</span>
                </div>
              </button>
            </div>
            <div className=" py-3"></div>
          </div>
          <div className="my-3 2xl:w-[33.5rem] xl:w-[33.5rem] lg:w-[33.5rem] md:w-[30.6rem] sm:w-[23.5rem] xd:w-[23.5rem] gap-[1rem] rounded-[1rem] border-2 border-[#2e2f31] dark:border-[#E3E8EF]  text-[#A5A5A6] dark:text-[#A5A5A6]">
            <Accordion className=" rounded-[1rem]">
              <AccordionSummary
                expandIcon={<Image src={VectorDown} alt="Varriant" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className=" gap-[1rem] dark:bg-[#FCFDFE] text-[#A5A5A6] text-[0.875rem] font-[400] rounded-[1rem]"
              >
                <span className="text-[#A5A5A6]">Additional Details</span>
              </AccordionSummary>
              <AccordionDetails className=" flex justify-center  text-[#A5A5A6]  bg-[#17181a] dark:border-[#E3E8EF] dark:bg-[#FCFDFE] rounded-b-[1rem]">
                <div className=" border-t-2 border-[#2e2f31] dark:border-[#E3E8EF] w-[32rem]">
                  <Typography>
                    <div className="flex justify-between pt-4">
                      <span>Minimum Received</span>
                      <span>0.00</span>
                    </div>
                    <div className="flex justify-between pt-4">
                      <span>Transcation Fee</span>
                      <span>0.00</span>
                    </div>
                    <div className="flex justify-between pt-4">
                      <span className=" text-[#2ED3B7] font-[800] text-[0.875rem]">
                        More Routes
                      </span>
                    </div>
                  </Typography>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        <div className="w-full ">
          <div className="mt-6">
            {isPopularTokensClicked && <PopularTokens />}
          </div>
          <div>{isPreviousClicked && <PreviousToken />}</div>
          <div className="w-full">
            {isLeaderboardClicked && <LeaderBoard />}
          </div>
        </div>
      </div>
      {isPopupOpen && <Settings handleCloseSettings={handleCloseSettings} />}
      {isToken && <SelectToken handleCloseToken={handleCloseToken} />}
      {isPreferences && (
        <Preferences handleClosePrefrences={handleClosePrefrences} />
      )}
    </div> */}
	</>
  );
};

export default Dashboard;
