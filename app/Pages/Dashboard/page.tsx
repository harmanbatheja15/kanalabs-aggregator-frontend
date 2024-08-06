"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { LuExternalLink } from "react-icons/lu";
import Header from "./Header";
import ImageSlider from "./ImageSlider";
import BgCoinsSwapGreen from "@/assets/Icons/bg-coins-swap-green.svg";
import BgCoinsHandGreen from "@/assets/Icons/bg-coins-hand-green.svg";
import BgBarChartGreen from "@/assets/Icons/bg-bar-chart-green.svg";
import BgScalesGreen from "@/assets/Icons/bg-scales-green.svg";
import BgGamingPadGreen from "@/assets/Icons/bg-gaming-pad-green.svg";
import BgCoinsStackedGreen from "@/assets/Icons/bg-coins-stacked-green.svg";

const Dashboard = () => {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const [walletDropdown, setWalletDropDown] = useState(false);
  const [isCheckbox, setIsCheckbox] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isToken, setPopupToken] = useState(false);
  const [isPreferences, setIsPreferences] = useState(false);
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
      <div className="w-full h-full flex flex-row justify-center items-center dark:bg-[#e4f2f3]  bg-[#0C0C0D]">
        <div className="flex flex-col !w-[100%] xxl:px-4 bxl:px-4 xl:px-4 sxl:px-4 lg:px-4 md:px-0 sm:px-0 xd:px-0 pb-4 max-h-screen !overflow-y-auto overflow-x-hidden">
          <Header />
          <div className="w-full flex justify-center">
            <ImageSlider />
          </div>
          <div className="w-full mx-auto mt-4">
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mx-4 lg:mx-0">
              <div className="rounded-2xl border border-[#FFFFFF1A] dark:border-[#0000001a] lg:flex-1 xxl:w-auto xl:w-auto lg:w-auto md:w-full sm:w-full xd:w-full">
                <a
                  href="https://app.kanalabs.io/swap/"
                  target="_blank"
                  className="flex flex-col h-full"
                >
                  <div className="bg-[#17181A] dark:bg-[#FCFDFE] pt-8 pl-[31px] pr-[115px] pb-[48px] relative rounded-t-2xl dark:border-b border-b-[#0000001a] flex-grow">
                    <h1 className="text-[#777879] text-lg font-normal relative z-[1]">
                      <span className="text-[#FCFDFE] dark:text-[black] text-xl">
                        AMM DEX Aggregator
                      </span>
                      <br />
                      Seamlessly Swap Tokens Across 9 Blockchains
                    </h1>
                    <div className="absolute bottom-0 right-0">
                      <Image src={BgCoinsSwapGreen} alt="" className="z-[0]" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-[#111213] dark:bg-[#FCFDFE] py-4 px-6 rounded-b-2xl">
                    <p className="text-[#FFFFFF] dark:text-black text-lg font-extrabold">
                      Try Swaps
                    </p>
                    <a href="https://app.kanalabs.io/swap/" target="_blank">
                      <LuExternalLink className="text-white dark:text-black" />
                    </a>
                  </div>
                </a>
              </div>
              <div className="rounded-2xl border border-[#FFFFFF1A] dark:border-[#0000001a] lg:flex-1 xxl:w-auto xl:w-auto lg:w-auto md:w-full sm:w-full xd:w-full">
                <a
                  href="https://tradebook.kanalabs.io/"
                  target="_blank"
                  className="flex flex-col h-full"
                >
                  <div className="bg-[#17181A] dark:bg-[#FCFDFE] pt-8 pl-[31px] pr-[115px] pb-[48px] relative rounded-t-2xl dark:border-b border-b-[#0000001a] flex-grow">
                    <h1 className="text-[#777879] text-lg font-normal relative z-[1]">
                      <span className="text-[#FCFDFE] dark:text-[black] text-xl">
                        Kana Trade
                      </span>
                      <br />
                      Your Familiar Spot Trading, Now in DeFi powered by Aptos
                    </h1>
                    <div className="absolute bottom-0 right-0">
                      <Image src={BgBarChartGreen} alt="" className="z-[0]" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-[#111213] dark:bg-[#FCFDFE] py-4 px-6 rounded-b-2xl">
                    <p className="text-[#FFFFFF] dark:text-black text-lg font-extrabold">
                      Try Kana Spot
                    </p>
                    <a href="https://tradebook.kanalabs.io/" target="_blank">
                      <LuExternalLink className="text-white dark:text-black" />
                    </a>
                  </div>
                </a>
              </div>
              <div className="rounded-2xl border border-[#FFFFFF1A] dark:border-[#0000001a] lg:flex-1 xxl:w-auto xl:w-auto lg:w-auto md:w-full sm:w-full xd:w-full">
                <a
                  href="https://operps.kanalabs.io/"
                  target="_blank"
                  className="flex flex-col h-full"
                >
                  <div className="bg-[#17181A] dark:bg-[#FCFDFE] pt-8 pl-[31px] pr-[115px] pb-[48px] relative rounded-t-2xl dark:border-b border-b-[#0000001a] flex-grow">
                    <h1 className="text-[#777879] text-lg font-normal relative z-[1]">
                      <span className="text-[#FCFDFE] dark:text-[black] text-xl">
                        OPerps | Perpetual Options
                      </span>
                      <br />
                      Tokenised Crypto Perpetual Options
                    </h1>
                    <div className="absolute bottom-0 right-0">
                      <Image src={BgCoinsHandGreen} alt="" className="z-[0]" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-[#111213] dark:bg-[#FCFDFE] py-4 px-6 rounded-b-2xl">
                    <p className="text-[#FFFFFF] dark:text-black text-lg font-extrabold">
                      Try OPerps
                    </p>
                    <a href="https://operps.kanalabs.io/" target="_blank">
                      <LuExternalLink className="text-white dark:text-black" />
                    </a>
                  </div>
                </a>
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
                                setIsPopularTokensClicked(
                                  !isPopularTokensClicked
                                );
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
                      <span className=" text-[#2ED3B7] font-[800]">
                        Swap Now
                      </span>
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
          {isPopupOpen && (
            <Settings handleCloseSettings={handleCloseSettings} />
          )}
          {isToken && <SelectToken handleCloseToken={handleCloseToken} />}
          {isPreferences && (
            <Preferences handleClosePrefrences={handleClosePrefrences} />
          )}
        </div> */}
      </div>
    </>
  );
};

export default Dashboard;
