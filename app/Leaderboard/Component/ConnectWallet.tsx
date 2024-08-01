/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useMemo, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletReadyState } from "@solana/wallet-adapter-base";
import { CHAINS } from "@/app/utils/walletContextConsts";
import { useStore } from "@/app/store";
import { NetworkId } from "@kanalabs/aggregator";
import { useAptosContext } from "@/app/contexts/AptosWalletContext";
import { useAccount, useConnect } from "wagmi";
import MetaMask from "../../../assets/Icons/MetaMask.svg";
import CoinBase from "../../../assets/Icons/Coinbase.svg";
import Image from "next/image";
import Close from "../../../assets/Icons/x-close.svg";
import closelight from "../../../assets/Icons/x-close-light.svg";
import ClickAwayListener from "react-click-away-listener";
import { useTheme } from "next-themes";
import Alert from "../../../assets/Icons/Alert-Frame.svg";
import AlerLight from "../../../assets/Icons/Alert-Frame-Light.svg";
import WalletRefer from "../../../../assets/Icons/Connect-Referral-Wallet.svg";
import WalletReferLight from "../../../../assets/Icons/ConnectReferral.svg";
import { useSearchParams } from "next/navigation";
import { useWalletKit } from "@mysten/wallet-kit";
import {
  APTOS_TOKEN_1,
  BINANCE_TOKEN_1_BNB,
  ETHEREUM_TOKEN_1_ETH,
  POLYGON_TOKEN_1_MATIC,
  SOLANA_TOKEN_1,
  SUI_TOKEN_1_SUI,
} from "@/app/utils/tokenList";

interface ConnectWalletinterface {
  handlecloseWalletConnect(): void;
  chain: any;
}
const ReferalConnectwallet = (props: ConnectWalletinterface) => {
  const { handlecloseWalletConnect } = props;
  const {
    connect: suiConnect,
    wallets: suiWallets,
    disconnect: SuiDisconnect,
    isConnected,
  } = useWalletKit();
  const { theme } = useTheme();
  const { wallets: aptosWallets, connect: aptosWalletConnect } =
    useAptosContext();
  const searchParams = useSearchParams();
  const search = searchParams.get("address");
  const { connect: EvmConnect, connectors } = useConnect();
  const { referralChain, updateRefferedAdress } = useStore();
  const [referralAddress, setReferralAddress] = useState<any>();
  const [selectedChain, setSelectedChain] = useState<any>(referralChain);
  const { wallets, select, connect: solanaConnect } = useWallet();
  const { updateIsWalletConnectVisible } = useStore();
  const [isSafari, setIsSafari] = useState(false);
  const updateLeaderBoardChain = useStore(
    (state) => state.updateLeaderBoardChain
  );
  const sourceToken = useStore((state) => state.sourceTokenForStakeUnStake);
  const [selectedTokenForSend, setSelectedTokenSend] = useState(sourceToken);

  const updateReferralChain = useStore(
    (state: any) => state.updateReferralChain
  );
  const [detected] = useMemo(() => {
    const detected: any = [];
    const undetected: any = [];
    const walletArr =
      selectedChain === NetworkId.solana ? wallets : aptosWallets;
    for (const wallet of walletArr) {
      if (
        wallet.readyState === WalletReadyState.Installed ||
        wallet.readyState === WalletReadyState.Loadable
      ) {
        detected.push(wallet);
      } else if (wallet.readyState === WalletReadyState.NotDetected) {
        undetected.push(wallet);
      }
    }
    return [detected, undetected];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wallets, aptosWallets, selectedChain]);
  const [detectedEvmConnectors] = useMemo(() => {
    const detected: any[] = [];
    for (const connector of connectors) {
      if (connector.id === "coinbaseWalletSDK") detected.push(connector);
      else if (connector.id === "io.metamask") detected.push(connector);
    }
    return [detected];
  }, [connectors]);
  const handleChangeChain = (item: any) => {
    console.log(item, "!123456789");
    setSelectedChain(item.id);
    updateReferralChain(item.id);
    updateLeaderBoardChain(item);
    switch (item.chain) {
      case 1:
        setSelectedTokenSend(SOLANA_TOKEN_1);
        break;
      case 2:
        setSelectedTokenSend(APTOS_TOKEN_1);
        break;
      case 3:
        setSelectedTokenSend(POLYGON_TOKEN_1_MATIC);
        break;
      case 4:
        setSelectedTokenSend(ETHEREUM_TOKEN_1_ETH);
        break;
      case 5:
        setSelectedTokenSend(BINANCE_TOKEN_1_BNB);
        break;
      case 8:
        setSelectedTokenSend(SUI_TOKEN_1_SUI);
        break;
    }
  };
  const walletSelection = (item: any) => {
    if (selectedChain === NetworkId.solana) {
      select(item.adapter.name);
    } else if (selectedChain === NetworkId.aptos) {
      aptosWalletConnect(item.adapter.name);
    } else if (selectedChain === NetworkId.sui) {
      if (!isConnected) {
        suiConnect(item.name);
      }
    }
  };
  const handleClickAway = () => {
    updateIsWalletConnectVisible(false);
  };
  useEffect(() => {
    solanaConnect();
  }, [wallets]);
  useEffect(() => {
    if (search) {
      setReferralAddress(true);
      updateRefferedAdress(search);
    } else {
      setReferralAddress(false);
      updateRefferedAdress("");
    }
  }, [search]);

  useEffect(() => {
    const checkSafari = () => {
      const userAgentString = navigator.userAgent;
      const safariAgent = userAgentString.indexOf("Safari") > -1;
      const chromeAgent = userAgentString.indexOf("Chrome") > -1;
      if (chromeAgent && safariAgent) {
        setIsSafari(false);
      } else {
        setIsSafari(safariAgent);
      }
    };
    checkSafari();
  }, []);
  return (
    <div className="fixed transition-all duration-200 font-manrop z-[2] inset-0 h-full w-full bg-[rgba(0,0,0,0.20)]  backdrop-blur-[0.75rem] flex flex-row justify-center 2xl:items-center xl:items-center lg:items-center md:items-end sm:items-end max-sm:items-end xd:items-end">
      <ClickAwayListener onClickAway={handleClickAway}>
        <div>
          <div>
            {isSafari ? (
              <div className=" xxl:w-[30rem] 2xl:w-[30rem] xl:w-[30rem] lg:w-[30rem] md:w-[30rem] sm:w-[20.5rem] max-sm:w-[20.5rem] rounded-[1rem] border-2 border-[#2e2f31] bg-[#17181A] dark:bg-[#FCFDFE] dark:border-[#E3E8EF] h-[4rem] mb-3 flex px-4 mt-3">
                <Image
                  src={theme === "light" ? Alert : AlerLight}
                  alt="Alert"
                />
                <div className=" text-[#FFFFFF] dark:text-[#4A4B4D] font-[800] dark:font-[800] text-[0.875rem] xxl:pt-5 xl:pt-5 lg:pt-5 md:pt-5 sm:pt-3 xd:pt-3 pl-3">
                  Safari browser not supported currently. Try another browser.
                </div>
              </div>
            ) : (
              <></>
            )}
            <div className=" rounded-[1rem] border-2 border-[#2e2f31] dark:border-[#E3E8EF]  xxl:w-[30rem] 2xl:w-[30rem] xl:w-[30rem] lg:w-[30rem] md:w-[30rem] sm:w-[20.5rem] max-sm:w-[20.5rem] xxl:bg-transparent xl:bg-transparent lg:bg-transparent md:bg-[#17181a] sm:bg-[#17181a] xd:bg-[#17181a] dark:bg-[#e3e8ef]">
              <div className=" bg-[#ffffff0f] dark:bg-[#FCFDFE] h-[4.5rem] rounded-t-[1rem] flex justify-between text-[#FFFFFF] dark:text-[#0C0C0D] font-[800] text-[1.125rem] p-[4%_6%] dark:border-b-2 dark:border-[#E3E8EF]">
                <div className="">Connect Wallet</div>
                <div>
                  <Image
                    src={theme === "light" ? Close : closelight}
                    alt="Close"
                    onClick={handlecloseWalletConnect}
                    className=" cursor-pointer"
                  />
                </div>
              </div>
              <div className=" grid grid-cols-5 gap-2 justify-start align-middle py-4 ml-2 ">
                {CHAINS &&
                  CHAINS.map((item, key) => {
                    return (
                      <div
                        key={key}
                        className={`cursor-pointer flex flex-row justify-center align-middle items-center p-[4%] 2xl:w-[5.3rem] xl:w-[5.3rem] lg:w-[5.3rem] md:w-[5.3rem] sm:w-[3.75rem] max-sm:w-[3.75rem] 2xl:h-[5rem] xl:h-[5rem] lg:h-[5rem] md:h-[5rem] sm:h-[2.813rem] max-sm:h-[2.813rem]  rounded-lg  ${
                          selectedChain === item.id
                            ? "bg-[rgba(1,1,1,0.45)] dark:bg-[#e7eced]"
                            : "bg-[rgba(255,255,255,0.05)] dark:bg-[#FCFDFE]"
                        } hover:bg-[rgba(1,1,1,0.45)] dark:hover:bg-[#FCFDFE] hover:scale-110`}
                        onClick={() => handleChangeChain(item)}
                      >
                        <Image
                          src={item.logo}
                          alt={item.name}
                          className=" h-10 w-10 my-3"
                        />
                      </div>
                    );
                  })}
              </div>
              <div className="w-[100%] h-[288px] bg-[rgba(255,255,255,0.05)] dark:bg-[#FCFDFE] rounded-3xl mt-2 text-[white] dark:text-[#0C0C0D] overflow-y-auto scrollbar-hide">
                <div className="flex flex-col justify-center item-center  w-12/12 scrollbar-hide	">
                  {selectedChain === NetworkId.polygon ||
                  selectedChain === NetworkId.Arbitrum ||
                  selectedChain === NetworkId.Avalanche ||
                  selectedChain === NetworkId.bsc ||
                  selectedChain === NetworkId.ethereum ||
                  selectedChain === NetworkId.zkSync
                    ? detectedEvmConnectors.map((connector, index) => {
                        return (
                          <div
                            className={`flex flex-row justify-evenly items-center align-left cursor-pointer p-3 hover:bg-[rgba(1,1,1,0.45)] dark:hover:bg-[#FCFDFE] hover:rounded-[1.25rem]`}
                            onClick={() => EvmConnect({ connector })}
                            key={index}
                          >
                            {connector.name === "MetaMask" ? (
                              <Image
                                className="w-12 h-12"
                                src={MetaMask}
                                alt="token"
                              />
                            ) : (
                              <Image
                                className="w-12 h-12"
                                src={CoinBase}
                                alt="token"
                              />
                            )}
                            <div className="font-inter font-bold leading-5 w-8/12 text-left">
                              <div className="text-lg ">{connector.name}</div>
                            </div>
                          </div>
                        );
                      })
                    : selectedChain === NetworkId.sui
                    ? suiWallets &&
                      suiWallets.map((item: any, key: any) => {
                        return (
                          <div
                            key={key}
                            onClick={() => walletSelection(item)}
                            className="flex  flex-row justify-evenly items-center align-left cursor-pointer p-3 hover:bg-[rgba(1,1,1,0.45)] dark:hover:bg-[#FCFDFE] hover:rounded-[1.25rem]"
                          >
                            <Image
                              className="w-12 h-12"
                              src={item?.icon}
                              alt={item?.name}
                              width={"100"}
                              height={"100"}
                            />
                            <div className="font-inter text-lg  font-bold leading-5 w-8/12 text-left">
                              {item?.name}
                            </div>
                          </div>
                        );
                      })
                    : detected &&
                      detected.map((item: any, key: any) => {
                        return (
                          <div
                            key={key}
                            onClick={() => walletSelection(item)}
                            className="flex  flex-row justify-evenly items-center align-left cursor-pointer p-3 hover:bg-[rgba(1,1,1,0.45)] dark:hover:bg-[#FCFDFE] hover:rounded-[1.25rem]"
                          >
                            <Image
                              className="w-12 h-12"
                              src={item?.adapter?.icon}
                              alt={item?.adapter?.name}
                              width={"100"}
                              height={"100"}
                            />
                            <div className="font-inter text-lg  font-bold leading-5 w-8/12 text-left">
                              {item?.adapter?.name}
                            </div>
                          </div>
                        );
                      })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </ClickAwayListener>
    </div>
  );
};

export default ReferalConnectwallet;
