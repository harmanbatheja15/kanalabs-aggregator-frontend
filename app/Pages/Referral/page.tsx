/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from "react";
import { Sidebar } from "@/app/Component";
import Header from "./Header";
import { useStore } from "@/app/store";
import { useWallet } from "@solana/wallet-adapter-react";
import { useAptosContext } from "@/app/contexts/AptosWalletContext";
import { useAccount } from "wagmi";
import Refferal from "./Component/Refferal";
import ReferalConnectwallet from "./Component/ReferalConnectwallet";
import { NetworkId } from "@kanalabs/aggregator";
import { useWalletKit } from "@mysten/wallet-kit";
import Footer from "./Component/Footer";
import ClickAwayListener from 'react-click-away-listener';
import ChevronDownDark from "../../../assets/Icons/chevron-down-dark.svg";
import Image from 'next/image';
import Dashboard from '../Dashboard/page';

const page = () => {
	
  const referralChain = useStore((state: any) => state.referralChain);
  const { connected: solanawalletconnected } = useWallet();
  const { connected } = useAptosContext();
  const { address } = useAccount();
  const { isConnected: SuiIsConnected } = useWalletKit();

  let isConnected = false;
  switch (referralChain) {
    case NetworkId.solana:
      isConnected = solanawalletconnected;
      break;
    case NetworkId.aptos:
      isConnected = connected;
      break;
    case NetworkId.polygon:
    case NetworkId.ethereum:
    case NetworkId.bsc:
    case NetworkId.Avalanche:
    case NetworkId.Arbitrum:
    case NetworkId.zkSync:
      isConnected = address !== undefined;
      break;
    case NetworkId.sui:
      isConnected = SuiIsConnected;
      break;
    default:
      isConnected = false;
      break;
  }

  return (
    // <div className="dark:bg-[#e4f2f3] h-full bg-[#ffffff0f] min-h-screen font-inter flex flex-row justify-center items-start w-full xxl:!gap-[1rem] bxl:!gap-[1rem] xl:!gap-[1rem] sxl:!gap-[1rem] ">
    //   <div className=" xxl:inline bxl:inline xl:inline sxl:inline lg:hidden md:hidden sm:hidden xd:hidden w-[5%]  ">
    //     <Sidebar />
    //   </div>
      <div className="w-full h-full flex flex-row justify-center items-center dark:bg-[#e4f2f3]  bg-[#0C0C0D]">
        <div className="flex flex-col  !w-[100%] xxl:px-4 bxl:px-4 xl:px-4 sxl:px-4 lg:px-4 md:px-0 sm:px-0 xd:px-0 max-h-screen !overflow-y-auto overflow-x-hidden">
          <Header />
          {!isConnected ? (
			<>
              <ReferalConnectwallet />
			</>
          ) : (
            <>
              <Refferal />
            </>
          )}
        </div>
      </div>
      // <Footer /> 
    // </div>
  );
};

export default page;
