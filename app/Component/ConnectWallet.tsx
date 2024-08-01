"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import google from "../../assets/Icons/MetaMask_Fox 2.svg";
import Facebook from "../../assets/Icons/Facebook.svg";
import Xtwitter from "../../assets/Icons/Xtwitter.svg";
import Discord from "../../assets/Icons/Discord.svg";
import Metamaskfox from "../../assets/Icons/MetaMask.svg";
import Coinbase from "../../assets/Icons/Coinbase.svg";
import Phantom from "../../assets/Icons/Phantom.svg";
import CloseLight from "../../assets/Icons/x-close-light.svg";
import Close from "../../assets/Icons/x-close.svg";
import { useTheme } from "next-themes";
interface ConnectWalletInterface {
  handleCloseWalletToken(): void;
}
const ConnectWallet = (props: ConnectWalletInterface) => {
  const { handleCloseWalletToken } = props;
  const { theme } = useTheme();

  return (
       <div className="fixed font-manrop z-[2] inset-0 h-full w-full bg-[rgba(0,0,0,0.20)] backdrop-blur-[0.75rem] flex flex-row justify-center 2xl:items-center xl:items-center lg:items-center md:items-end sm:items-end max-sm:items-end xd:items-end">
        <div className=" rounded-[1rem] border-2 border-[#2e2f31] dark:border-[#E3E8EF] w-[35rem] xxl:bg-transparent xl:bg-transparent lg:bg-transparent md:bg-[#17181a] sm:bg-[#17181a] xd:bg-[#17181a] dark:bg-[#EFF7F8]">
          <div className=" bg-[#ffffff0f] w-auto h-[4.5rem] rounded-t-[1rem] flex justify-between text-[#FFFFFF] dark:text-[#0C0C0D] font-[800] text-[1.125rem] p-[2%_6%]">
            <div className=" py-3">Connect Wallet</div>
            <Image
              src={theme === "light" ? Close : CloseLight}
              alt="Close"
              className=" cursor-pointer"
              onClick={handleCloseWalletToken}
            />
          </div>
          <div className="flex dark:bg-[#eaedee] rounded-b-[1rem]">
            <Tabs className=" w-full">
              <TabList className="flex justify-start cursor-pointer text-[#FFFFFF] dark:text-[#777879]  h-[3.5rem] border-b-2 border-[#2e2f31] dark:border-[#E3E8EF] font-[400]">
                <Tab className="pt-3 outline-none Tab_container selected-tab1 px-8  hover:text-white dark:hover:text-[#0C0C0D] text-[0.875rem] hover:border-b-2 hover:border-white hover:dark:border-[#0C0C0D] hover:font-[800]">
                  Social Wallets
                </Tab>
                <Tab className=" pt-3 outline-none Tab_container selected-tab2 px-8  hover:text-white dark:hover:text-[#0C0C0D] text-[0.875rem] hover:border-b-2 hover:border-white hover:dark:border-[#0C0C0D] hover:font-[800]">
                  Web3 Wallets
                </Tab>
              </TabList>
              <TabPanel>
                <div>
                  <ul className=" overflow-auto">
                    <li className="">
                      <div className=" flex h-[5.5rem] cursor-pointer hover:bg-[#ffffff0f] hover:rounded-[1rem] pl-12">
                        <Image
                          src={google}
                          alt=""
                          className=" bg-transparent"
                        />
                        <span className="text-[1rem] text-[#FFFFFF] dark:text-[#0C0C0D] pt-8 font-[800] pl-4">
                          Google
                        </span>
                      </div>
                    </li>
                    <li className=" flex h-[5.5rem] hover:bg-[#ffffff0f] hover:rounded-[1rem] cursor-pointer pl-12">
                      <Image src={Facebook} alt="Google/" />
                      <span className="text-[1rem] text-[#FFFFFF] dark:text-[#0C0C0D] pt-8 font-[800] pl-4">
                        Facebook
                      </span>
                    </li>
                    <li className=" flex h-[5.5rem] hover:bg-[#ffffff0f] hover:rounded-[1rem] cursor-pointer pl-12">
                      <Image src={Xtwitter} alt="Google/" />
                      <span className="text-[1rem] text-[#FFFFFF] dark:text-[#0C0C0D] pt-8 font-[800] pl-4">
                        Twitter
                      </span>
                    </li>
                    <li className=" flex h-[5.5rem] hover:bg-[#ffffff0f] hover:rounded-[1rem] cursor-pointer pl-12">
                      <Image src={Discord} alt="Google/" />
                      <span className="text-[1rem] text-[#FFFFFF] dark:text-[#0C0C0D] pt-8 font-[800] pl-4">
                        Discord
                      </span>
                    </li>
                  </ul>
                </div>
              </TabPanel>
              <TabPanel>
                <div>
                  <ul className=" overflow-auto">
                    <li className=" flex h-[5.5rem] cursor-pointer hover:bg-[#ffffff0f] hover:rounded-[1rem] pl-12">
                      <Image
                        src={Metamaskfox}
                        alt=""
                        className=" bg-transparent"
                      />
                      <span className="text-[1rem] text-[#FFFFFF] dark:text-[#0C0C0D] pt-8 font-[800] pl-4">
                        Metamask
                      </span>
                    </li>
                    <li className=" flex h-[5.5rem] hover:bg-[#ffffff0f] hover:rounded-[1rem] cursor-pointer pl-12">
                      <Image src={Coinbase} alt="Google/" />
                      <span className="text-[1rem] text-[#FFFFFF] dark:text-[#0C0C0D] pt-8 font-[800] pl-4">
                        Coinbase
                      </span>
                    </li>
                    <li className=" flex h-[5.5rem] hover:bg-[#ffffff0f] hover:rounded-[1rem] cursor-pointer pl-12">
                      <Image src={Phantom} alt="Google/" />
                      <span className="text-[1rem] text-[#FFFFFF] dark:text-[#0C0C0D] pt-8 font-[800] pl-4">
                        Phantom
                      </span>
                    </li>
                  </ul>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
   );
};

export default ConnectWallet;
