/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import filter from "../../assets/Icons/filter-lines.svg";
import filterDark from "../../assets/Icons/filter-linesdark.svg";

import Aptos from "../../assets/Icons/aptos_stake.svg";
import AptosDark from "../../assets/Icons/Aptos_mark_BLK.svg";

import Solana from "../../assets/Icons/solana_stake.svg";
import Polygon from "../../assets/Icons/polygon_stake.svg";
import Ethereum from "../../assets/Icons/eth_stake.svg";
import Binance from "../../assets/Icons/binance-new.svg";
import Trophy from "../../assets/Icons/trophy-01.svg";
import TrophyLight from "../../assets/Icons/trophy-light.svg";
import Arbitrum from "../../assets/Icons/arbitrum.svg";
import Avalanche from "../../assets/Icons/avalanche.svg";
import Metamask from "../../assets/Icons/MetaMask.svg";
import Coinbase from "../../assets/Icons/Coinbase.svg";
import Zksync from "../../assets/Icons/zksync.svg";
import Sui from "../../assets/Icons/sui-new.svg";
import Header from "./Component/Header";
import Pagination from "./PaginationLeaderboard/Pagination";
import SideBar from "./Component/SideBar";
import ConnectWallet from "./Component/ConnectWallet";
import DefaultIcon from "../../assets/Icons/web.svg";
import KanaLoader from "../KanaLoader.json";
import { Tooltip } from "antd";
import { useMediaQuery } from "@react-hook/media-query";
import { useTheme } from "next-themes";
import ActivetasSelect from "../../assets/Icons/ActiveTasks-selected.svg";
import statsSelect from "../../assets/Icons/stats-selected.svg";
import ActivetasSelectDark from "../../assets/Icons/ActiveTasks-selecteddark.svg";
import statsSelectDark from "../../assets/Icons/stats-selecteddark.svg";
import ActiveTask from "../../assets/Icons/ActiveTasks.svg";
import stats from "../../assets/Icons/stats.svg";
import ActivetaskDark from "../../assets/Icons/ActiveTasksDark.svg";
import statsDark from "../../assets/Icons/statsdark.svg";
import { useStore } from "@/app/store";
import { useWallet, Wallet } from "@solana/wallet-adapter-react";
import { useAptosContext } from "@/app/contexts/AptosWalletContext";
import { CSSProperties } from "styled-components";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import {
  getLeaderBoard,
  getLeaderBoardMonth,
  monthlyWinners,
  leaderboardCurrentRank,
  fetchReferrerWalletAddress,
} from "@/app/utils/kanalabs";
import { BlockchainType } from "@/app/constants";
import { useWalletKit } from "@mysten/wallet-kit";
import { kanaChainIdList, Network } from "kana-aggregator-sdk";
import { NetworkID } from "@/app/constants";
import { NetworkId } from "@kanalabs/aggregator";
import Lottie from "react-lottie-player";
const override: CSSProperties = {
  position: "absolute",
  top: "45%",
  left: "30%",
};

let PageSize = 10;

const page = () => {
  const { theme } = useTheme();
  const leaderBoardChain = useStore((state) => state.leaderBoardChain);
  console.log("leaderBoardChain", leaderBoardChain);
  const [showData, setShowData] = useState([]);
  const [walletIcon, setWalletIcon] = useState(DefaultIcon);
  const [showLeaderbaordData, setLeaderboardData] = useState<any>([]);
  const [showLeaderbaordDataMonth, setLeaderboardDataMonth] = useState<any>([]);
  const [routeLoading, setRouteLoading] = useState(true);
  const [chain, setChain] = useState<any>();
  const [isPagination, setIsPagination] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [savePage, setSavePage] = useState<any>();
  const [monthWinners, setMonthWinners] = useState<any>();
  const [currentRank, setCurrentRank] = useState<any>();
  const [sortDirection, setSortDirection] = useState("asc");
  const [volumeFilter, setVolumeFilter] = useState("");
  const [rank, setRank] = useState(1);
  const [chainrank, setChainRank] = useState(0);
  const [wonCount, setWonCount] = useState(0);
  const { address, connector } = useAccount();
  const [connectWalletLeaderBoard, setConnectWalletLeaderBoard] =
    useState(false);
  const [connectRoute, setConnectRoute] = useState<any>();
  const [walletConnected, setWalletConnected] = useState(false);
  const referralChain = useStore((state: any) => state.referralChain);
  const [walletAddress, setWalletAddress] = useState("");
  const { wallet: solanaWallet } = useWallet();
  const showFullAddress = useMediaQuery("only screen and (min-width: 2560px)");
  const {
    connected: solanawalletconnected,
    publicKey,
    disconnect: solanaDisconnect,
  } = useWallet();
  const {
    connected,
    account: aptosAccount,
    disconnect: aptosDisconnect,
    wallet,
  } = useAptosContext();
  const {
    isConnected: SuiIsConnected,
    currentAccount,
    currentWallet,
    disconnect: SuiDisconnect,
  } = useWalletKit();
  const { disconnect: polygonDisconnect } = useDisconnect();
  const handlecloseWalletConnect = () => {
    setConnectWalletLeaderBoard(false);
  };

  let solanaAccountAddress = publicKey?.toBase58();
  let aptosAccountAddress = aptosAccount?.address;
  let isSolanaWalletConnected =
    leaderBoardChain.id === NetworkId.solana && solanawalletconnected;
  let isAptosWalletConnected =
    leaderBoardChain.id === NetworkId.aptos && connected;
  let isPolygonWalletConnected =
    leaderBoardChain.id === NetworkId.polygon && address;
  let isEthereumWalletConnected =
    leaderBoardChain.id === NetworkId.ethereum && address;
  let isBinanceWalletConnected =
    leaderBoardChain.id === NetworkId.bsc && address;
  let isArbitrumWalletConnected =
    leaderBoardChain.id === NetworkId.Arbitrum && address;
  let isAvalancheWalletConnected =
    leaderBoardChain.id === NetworkId.Avalanche && address;
  let isSuiWalletConnected =
    leaderBoardChain.id === NetworkId.sui && currentAccount?.address;
  const getRanks = async () => {
    try {
      setRouteLoading(true);
      let data = await getLeaderBoard();
      setLeaderboardData(data);
      let dataMonth = await getLeaderBoardMonth();
      setLeaderboardDataMonth(dataMonth);
      let monthlyWinnersData = await monthlyWinners();
      setMonthWinners(monthlyWinnersData.data);
      let finalData = data.data;
      finalData.sort((a: any, b: any) => b.valueToRank - a.valueToRank);
      finalData.forEach((item: { rank: any }, index: number) => {
        item.rank = index + 1;
      });
      setShowData(finalData);
    } finally {
      setRouteLoading(false);
    }
  };
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
        if (Number(a.chain) === Number(leaderBoardChain.id)) {
          return showLeaderbaordData.data;
        }
      });

      finalData.sort((a: any, b: any) => b.valueToRank - a.valueToRank);
      finalData.forEach((item: { rank: any }, index: number) => {
        item.rank = index + 1;
      });
      const ChinaRank = finalData.find(
        (num: any) => num.walletAddress === wallet
      );
      setChainRank(ChinaRank ? ChinaRank.rank : 0);
      let leaderboardCurrentRankData = await leaderboardCurrentRank();
      let filteredData = leaderboardCurrentRankData.data.filter(
        (element: any) => element.walletAddress === wallet
      );
      let won_count = filteredData.length;
      setWonCount(won_count ? won_count : 0);
    } catch (error) {}
  };
  useEffect(() => {
    getRanks();
    setChain("All");
    getLeaderboardOverallRank();
  }, [
    solanaAccountAddress,
    aptosAccountAddress,
    address,
    currentAccount?.address,
  ]);

  useEffect(() => {
    switch (leaderBoardChain.id) {
      case NetworkId.solana:
        solanawalletconnected && setConnectWalletLeaderBoard(false);
        break;
      case NetworkId.aptos:
        connected && setConnectWalletLeaderBoard(false);
        break;
      case NetworkId.polygon:
        address && setConnectWalletLeaderBoard(false);
        break;
      case NetworkId.ethereum:
        address && setConnectWalletLeaderBoard(false);
        break;
      case kanaChainIdList.binance:
        address && setConnectWalletLeaderBoard(false);
        break;
      case NetworkId.Arbitrum:
        address && setConnectWalletLeaderBoard(false);
        break;
      case NetworkId.Avalanche:
        address && setConnectWalletLeaderBoard(false);
        break;
      case NetworkID.sui:
        currentAccount?.address && setConnectWalletLeaderBoard(false);
        break;
      default:
        break;
    }
  }, [
    address,
    solanawalletconnected,
    connected,
    leaderBoardChain,
    currentAccount?.address,
  ]);
  const handleVolumeSort = (column: string) => {
    setVolumeFilter("");
    if (volumeFilter === column) {
      setSortDirection((prevDirection) =>
        prevDirection === "asc" ? "desc" : "asc"
      );
    } else {
      setVolumeFilter(column);
      setSortDirection("asc");
    }

    let sortedData = showData.slice().sort((a: any, b: any) => {
      const valueA = parseFloat(a[column]);
      const valueB = parseFloat(b[column]);
      if (sortDirection === "asc") {
        return valueA - valueB;
      } else if (sortDirection === "desc") {
        return valueB - valueA;
      }
      return 0;
    });

    setShowData(sortedData);
  };

  const onChainChange = async (value: any) => {
    if (value === chain) return;
    try {
      setRouteLoading(true);
      setChain(value);
      switch (value) {
        case "All": {
          let finalData = showLeaderbaordData.data;
          finalData.sort((a: any, b: any) => b.valueToRank - a.valueToRank);
          finalData.forEach((item: { rank: any }, index: number) => {
            item.rank = index + 1;
          });
          setShowData(finalData);
          break;
        }
        case NetworkId.aptos: {
          let finalData = await showLeaderbaordData.data.filter((a: any) => {
            if (a.ChainName === "Aptos") {
              return showLeaderbaordData.data;
            }
          });
          finalData.sort((a: any, b: any) => b.valueToRank - a.valueToRank);
          finalData.forEach((item: { rank: any }, index: number) => {
            item.rank = index + 1;
          });
          setShowData(finalData);
          break;
        }
        case NetworkId.solana: {
          let finalData = await showLeaderbaordData.data.filter((a: any) => {
            if (a.ChainName === "Solana") {
              return showLeaderbaordData.data;
            }
          });
          finalData.sort((a: any, b: any) => b.valueToRank - a.valueToRank);
          finalData.forEach((item: { rank: any }, index: number) => {
            item.rank = index + 1;
          });
          setShowData(finalData);
          break;
        }
        case NetworkId.polygon: {
          let finalData = await showLeaderbaordData.data.filter((a: any) => {
            if (a.ChainName === "Polygon") {
              return showLeaderbaordData.data;
            }
          });
          finalData.sort((a: any, b: any) => b.valueToRank - a.valueToRank);
          finalData.forEach((item: { rank: any }, index: number) => {
            item.rank = index + 1;
          });
          setShowData(finalData);
          break;
        }
        case NetworkId.ethereum: {
          let finalData = await showLeaderbaordData.data.filter((a: any) => {
            if (a.ChainName === "Ethereum") {
              return showLeaderbaordData.data;
            }
          });
          finalData.sort((a: any, b: any) => b.valueToRank - a.valueToRank);
          finalData.forEach((item: { rank: any }, index: number) => {
            item.rank = index + 1;
          });
          setShowData(finalData);
          break;
        }
        case NetworkId.bsc: {
          let finalData = await showLeaderbaordData.data.filter((a: any) => {
            if (a.ChainName === "BSC") {
              return showLeaderbaordData.data;
            }
          });
          finalData.sort((a: any, b: any) => b.valueToRank - a.valueToRank);
          finalData.forEach((item: { rank: any }, index: number) => {
            item.rank = index + 1;
          });
          setShowData(finalData);
          break;
        }
        case NetworkId.Arbitrum: {
          let finalData = await showLeaderbaordData.data.filter((a: any) => {
            if (a.ChainName === "Arbitrum") {
              return showLeaderbaordData.data;
            }
          });
          finalData.sort((a: any, b: any) => b.valueToRank - a.valueToRank);
          finalData.forEach((item: { rank: any }, index: number) => {
            item.rank = index + 1;
          });
          setShowData(finalData);
          break;
        }
        case NetworkId.Avalanche: {
          let finalData = await showLeaderbaordData.data.filter((a: any) => {
            if (a.ChainName === "Avalanche") {
              return showLeaderbaordData.data;
            }
          });
          finalData.sort((a: any, b: any) => b.valueToRank - a.valueToRank);
          finalData.forEach((item: { rank: any }, index: number) => {
            item.rank = index + 1;
          });
          setShowData(finalData);
          break;
        }
        case NetworkId.sui: {
          let finalData = await showLeaderbaordData.data.filter((a: any) => {
            if (a.ChainName === "Sui") {
              return showLeaderbaordData.data;
            }
          });
          finalData.sort((a: any, b: any) => b.valueToRank - a.valueToRank);
          finalData.forEach((item: { rank: any }, index: number) => {
            item.rank = index + 1;
          });
          setShowData(finalData);
          break;
        }
        case NetworkId.zkSync: {
          let finalData = await showLeaderbaordData.data.filter((a: any) => {
            if (a.ChainName === "Zksync") {
              return showLeaderbaordData.data;
            }
          });
          finalData.sort((a: any, b: any) => b.valueToRank - a.valueToRank);
          finalData.forEach((item: { rank: any }, index: number) => {
            item.rank = index + 1;
          });
          setShowData(finalData);
          break;
        }
      }
    } catch (error) {
    } finally {
      setRouteLoading(false);
    }
  };

  const currentTable = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    if (showData != undefined) {
      setIsPagination(true);
      return setSavePage(showData.slice(firstPageIndex, lastPageIndex));
    }
  }, [currentPage, showData]);
  const handleOnClickConnectWalletDismiss = () => {
    setConnectWalletLeaderBoard(false);
  };
  const handleOnClickConnectWallet = (connectRoute: any) => {
    setConnectWalletLeaderBoard(true);
    setConnectRoute(connectRoute);
  };

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
    if (walletConnected) {
      handlecloseWalletConnect();
    }
  }, [walletConnected]);

  interface IChainUrls {
    [key: string]: string;
  }

  const chainUrls: IChainUrls = {
    Aptos: "https://explorer.aptoslabs.com/account/",
    Solana: "https://solscan.io/account/",
    Polygon: "https://polygonscan.com/address/",
    Ethereum: "https://etherscan.io/address/",
    BSC: "https://bscscan.com/address/",
    Sui: "https://suiexplorer.com/address/",
    Arbitrum: "https://arbiscan.io/address/",
    Avalanche: "https://snowtrace.io/address/",
    Zksync: "https://explorer.zksync.io/address/",
  };
  const getUrl = (chainName: string, walletAddress: string): string =>
    `${chainUrls[chainName]}${walletAddress}?network=mainnet`;
  const renderLeaderboardList = (
    listValue: any,
    showFullAddress: boolean
  ): JSX.Element => (
    <tr
      key={listValue.rank}
      className="h-[3rem] w-[100%]  xxl:text-[0.875rem] bxl:text-[0.875rem] xl:text-[0.875rem] sxl:text-[0.875rem] lg:text-[0.875rem] md:text-[0.875rem] sm:text-[0.625rem] xd:text-[0.625rem] border-b-[0.063rem] border-[#ffffff1a] dark:border-[#e3e8ef] text-[#FFFFFF] dark:text-[#0C0C0D]"
    >
      <td className="text-left  px-[1rem] w-[10%] ">{listValue.rank}</td>
      <td className="text-left xxl:w-[40%] bxl:w-[40%] xl:w-[40%] sxl:w-[40%] lg:w-[40%] md:w-[30%] sm:w-[30%] xd:w-[30%] ">
        <a
          href={getUrl(listValue.ChainName, listValue.walletAddress)}
          target="_blank"
          rel="noreferrer"
          className="hover:underline"
        >
          {showFullAddress
            ? listValue.walletAddress
            : `${listValue.walletAddress.slice(
                0,
                10
              )}...${listValue.walletAddress.slice(-10)}`}
        </a>
      </td>
      <td className="w-[0%]"></td>
      <td className="text-right w-[25%] ">{listValue.transactionCount}</td>
      <td className="text-right px-[1rem] xxl:w-[25%] bxl:w-[25%] xl:w-[25%] sxl:w-[25%] lg:w-[25%] md:w-[35%] sm:w-[35%] xd:w-[35%]">
        {listValue.totalVolume.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </td>
    </tr>
  );
  const MonthlyList: React.FC<{
    chainName: string;
    walletAddress: string;
    showFullAddress: boolean;
    totalVolume: string | number;
  }> = ({ chainName, walletAddress, showFullAddress, totalVolume }) => {
    const baseUrl: string | undefined = chainUrls[chainName];
    const addressDisplay: string = showFullAddress
      ? walletAddress
      : `${walletAddress.slice(0, 10)}...${walletAddress.slice(-10)}`;

    if (!baseUrl) return null;

    return (
      <div className="flex flex-row justify-between align-middle items-center gap-[1rem] px-[1rem] py-[0.5rem]">
        <div className="font-[400] text-[0.875rem] text-[#FFFFFF] dark:text-[#0C0C0D] font-manrop">
          <a
            href={`${baseUrl}${walletAddress}?network=mainnet`}
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            {addressDisplay}
          </a>
        </div>
        <div className="font-[400] text-[0.875rem] text-[#FFFFFF] dark:text-[#0C0C0D] font-manrop">
          {parseFloat(totalVolume.toString()).toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </div>
      </div>
    );
  };
  const WalletInfo: React.FC<any> = ({
    labelKey,
    value,
    isAddress = false,
  }) => (
    <div className="flex flex-row justify-between p-7 py-2 align-middle">
      <div className="font-[400] text-[0.875rem] text-[#FFFFFF] dark:text-[#0C0C0D] font-manrop">
        {labelKey}
      </div>
      <div className="font-[400] text-[0.875rem] text-[#FFFFFF] dark:text-[#0C0C0D] font-manrop">
        {isAddress && value
          ? `${value.slice(0, 6)}..${value.slice(-6)}`
          : value}
      </div>
    </div>
  );

  const DisconnectButton: React.FC<any> = ({ onClick, labelKey }) => (
    <div
      className="text-[#17181A] dark:text-[#FCFDFE] w-[24.813rem] bg-[#FF5555] rounded-[0.5rem] h-[2rem] mt-5 font-[800] text-[0.75rem]"
      onClick={onClick}
    >
      {labelKey}
    </div>
  );
  const activeWallet = isSolanaWalletConnected
    ? "Solana"
    : isAptosWalletConnected
    ? "Aptos"
    : isPolygonWalletConnected
    ? "Polygon"
    : isEthereumWalletConnected
    ? "Ethereum"
    : isBinanceWalletConnected
    ? "Binance"
    : isSuiWalletConnected
    ? "Sui"
    : null;
  const [yourStats, isYourStats] = useState(false);
  const [isLeaderboard, setIsLeaderboard] = useState(true);
  const handleStats = () => {
    isYourStats(true);
    setIsLeaderboard(false);
  };
  const handleLeaderboard = () => {
    isYourStats(false);
    setIsLeaderboard(true);
  };
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [isSidebarHidden, setIsSidebarHidden] = useState(true);

  useEffect(() => {
    const checkWindowSize = () => {
      const isSmallScreen = window.innerWidth < 1200;
      setIsSidebarHidden(isSmallScreen);
    };
    window.addEventListener("resize", checkWindowSize);
    checkWindowSize();
    return () => window.removeEventListener("resize", checkWindowSize);
  }, []);
  return (
    <div className=" dark:bg-[#e4f2f3]  bg-[#0C0C0D] flex flex-1  w-[100%] justify-start items-start">
      <SideBar
        isSidebarExpanded={isSidebarExpanded}
        setIsSidebarExpanded={setIsSidebarExpanded}
        isSidebarHidden={isSidebarHidden}
      />
      <div className="  px-[1rem]  flex-1  flex  flex-col   transition ease-in hover:ease-in-out    duration-300  dark:bg-[#e4f2f3]  bg-[#0C0C0D]   ">
        <Header isSidebarHidden={isSidebarHidden} />
        <div className=" xxl:flex bxl:flex xl:flex sxl:flex lg:flex md:hidden sm:hidden xd:hidden py-4  flex xxl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col xd:flex-col dark:bg-[#e4f2f3] h-[100%] w-[100%] gap-[1rem] ">
          <div className="xxl:w-[65%] bxl:w-[65%] xl:w-[65%] sxl:w-[65%] lg:w-[65%] md:w-[100%] sm:w-[100%] xd:w-[100%] flex flex-col  dark:bg-[#e4f2f3] h-[100%] w-[100%] gap-[1rem] ">
            <div className=" flex flex-row justify-between items-center p-[1rem] rounded-[1rem] border-[1px] border-[#ffffff1a] dark:border-[#e3e8ef]  bg-[#17181A] dark:bg-[#FCFDFE] shadow-[#E4F2F3] ">
              <div className="text-[#A5A5A6]  dark:text-[#777879] text-[0.875rem] font-[800] w-full  gap-[1rem] flex flex-row justify-between items-center ">
                <div>Choose Chain</div>
              </div>
              <div className="  cursor-pointer">
                <div className="flex flex-row    justify-start items-center">
                  <div
                    className={`${
                      chain === "All"
                        ? "bg-[rgba(255,255,255,0.06)] dark:bg-[#EFF7F8]"
                        : "bg-[rgba(0,0,0,0.35)] dark:bg-[#FCFDFE]"
                    }
                                w-[6rem]  h-[2.95rem]  flex flex-row justify-center items-center align-middle text-center p-[0.5rem_0.75rem] text-[#FFFFFF] dark:text-[#777879] font-[800] font-manrope text-[0.75rem] border-[1px] border-[rgba(255,255,255,0.10)] dark:border-[]  rounded-lg`}
                    onClick={() => onChainChange("All")}
                  >
                    All Chains
                  </div>
                  <Tooltip title="Aptos">
                    <div
                      className={`${
                        chain === 2
                          ? "bg-[rgba(255,255,255,0.1)] dark:bg-[#EFF7F8]"
                          : "bg-transparent"
                      } ml-[0.25rem]  w-[3rem] h-[3rem] flex flex-row justify-center align-middle rounded-lg p-[0.75rem]  2xl:flex xl:flex lg:flex md:hidden sm:hidden`}
                      onClick={() => onChainChange(2)}
                    >
                      <Image
                        src={theme == "light" ? Aptos : AptosDark}
                        alt="aptos"
                      />
                    </div>
                  </Tooltip>
                  <Tooltip title="Solana">
                    <div
                      className={`${
                        chain === 1
                          ? "bg-[rgba(255,255,255,0.1)] dark:bg-[#EFF7F8]"
                          : "bg-transparent"
                      }  rounded-lg p-[0.75rem]  w-[3rem] h-[3rem] flex flex-row justify-center align-middle  2xl:flex xl:flex lg:flex md:hidden sm:hidden`}
                      onClick={() => onChainChange(1)}
                    >
                      <Image src={Solana} alt="solana" />
                    </div>
                  </Tooltip>

                  <Tooltip title="Sui">
                    <div
                      className={`${
                        chain === 5
                          ? " bg-[rgba(255,255,255,0.1)] dark:bg-[#EFF7F8]"
                          : "bg-transparent"
                      }   w-[3rem] h-[3rem] flex flex-row justify-center align-middle rounded-lg p-[0.75rem]  2xl:flex xl:flex lg:flex md:hidden sm:hidden`}
                      onClick={() => onChainChange(5)}
                    >
                      <Image src={Sui} alt="Sui" />
                    </div>
                  </Tooltip>

                  <Tooltip title="Polygon">
                    <div
                      className={`${
                        chain === 3
                          ? " bg-[rgba(255,255,255,0.1)] dark:bg-[#EFF7F8]"
                          : "bg-transparent"
                      }   w-[3rem] h-[3rem] flex flex-row justify-center align-middle rounded-lg p-[0.75rem]   2xl:flex xl:flex lg:flex md:hidden sm:hidden`}
                      onClick={() => onChainChange(3)}
                    >
                      <Image src={Polygon} alt="polygon" />
                    </div>
                  </Tooltip>

                  <Tooltip title="Binance">
                    <div
                      className={`${
                        chain === 4
                          ? " bg-[rgba(255,255,255,0.1)] dark:bg-[#EFF7F8]"
                          : "bg-transparent"
                      }   w-[3rem] h-[3rem] flex flex-row justify-center align-middle rounded-lg p-[0.75rem]  2xl:flex xl:flex lg:flex md:hidden sm:hidden`}
                      onClick={() => onChainChange(4)}
                    >
                      <Image src={Binance} alt="Binance" />
                    </div>
                  </Tooltip>
                  <Tooltip title="Ethereum">
                    <div
                      className={`${
                        chain === 6
                          ? " bg-[rgba(255,255,255,0.1)] dark:bg-[#EFF7F8]"
                          : "bg-transparent"
                      }   w-[3rem] h-[3rem] flex flex-row justify-center align-middle rounded-lg p-[0.75rem]    2xl:flex xl:flex lg:flex md:hidden sm:hidden`}
                      onClick={() => onChainChange(6)}
                    >
                      <Image src={Ethereum} alt="Ethereum" />
                    </div>
                  </Tooltip>
                  <Tooltip title="Arbitrum">
                    <div
                      className={`${
                        chain === 11
                          ? " bg-[rgba(255,255,255,0.1)] dark:bg-[#EFF7F8]"
                          : "bg-transparent"
                      }   w-[3rem] h-[3rem] flex flex-row justify-center align-middle rounded-lg p-[0.75rem]    2xl:flex xl:flex lg:flex md:hidden sm:hidden`}
                      onClick={() => onChainChange(11)}
                    >
                      <Image src={Arbitrum} alt="Arbitrum" />
                    </div>
                  </Tooltip>
                  <Tooltip title="Avalanche">
                    <div
                      className={`${
                        chain === 10
                          ? " bg-[rgba(255,255,255,0.1)] dark:bg-[#EFF7F8]"
                          : "bg-transparent"
                      }   w-[3rem] h-[3rem] flex flex-row justify-center align-middle rounded-lg p-[0.75rem]  2xl:flex xl:flex lg:flex md:hidden sm:hidden`}
                      onClick={() => onChainChange(10)}
                    >
                      <Image src={Avalanche} alt="Avalanche" />
                    </div>
                  </Tooltip>

                  <Tooltip title="Zksync">
                    <div
                      className={`${
                        chain === 9
                          ? " bg-[rgba(255,255,255,0.1)] dark:bg-[#EFF7F8]"
                          : "bg-transparent"
                      }   w-[3rem] h-[3rem] flex flex-row justify-center align-middle rounded-lg p-[0.75rem]  2xl:flex xl:flex lg:flex md:hidden sm:hidden`}
                      onClick={() => onChainChange(9)}
                    >
                      <Image src={Zksync} alt="Zksync" />
                    </div>
                  </Tooltip>
                </div>
              </div>
            </div>
            <div className="  rounded-[1rem] border-[1px] border-[#ffffff1a] dark:border-[#e3e8ef]  bg-[#17181A] dark:bg-[#FCFDFE] shadow-[#E4F2F3]  ">
              <div className=" flex justify-between p-4  h-[3.5rem] border-b-[1px] border-[#ffffff1a] dark:border-[#e3e8ef]  w-full">
                <div className="text-[#A5A5A6] dark:text-[#777879] text-[0.875rem] font-[800] w-full  gap-[1rem] flex flex-row justify-between items-center ">
                  <div>Leaderboard</div>

                  <div
                    className="cursor-pointer flex flex-row justify-center items-center p-4  "
                    onClick={() => handleVolumeSort("totalVolume")}
                  >
                    <Image
                      src={theme == "light" ? filter : filterDark}
                      alt="filter"
                    />
                    <div className=" text-[#2ED3B7] dark:text-[#0E9384] font-[800]   text-[0.75rem] pl-3 ">
                      Filter
                      {
                        <span className="px-2">
                          {sortDirection === "asc" ? "▼" : "▲"}
                        </span>
                      }
                    </div>
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto  2xl:w-full xl:w-full lg:w-full  md:w-full  sm:w-full  max-sm:w-full">
                <table
                  className={
                    routeLoading
                      ? "overflow-x-auto 2xl:w-full xl:w-full lg:w-full md:w-full sm:w-full max-sm:w-full"
                      : "overflow-x-auto 2xl:w-full xl:w-full lg:w-full md:w-full sm:w-full max-sm:w-full"
                  }
                >
                  <thead>
                    <tr className=" border-b-[0.063rem] bg-[#111213] dark:bg-[#f2f9f9]  border-[#ffffff1a] dark:border-[#e3e8ef] h-[3rem] text-[#777879]  font-[400] xxl:text-[0.875rem] bxl:text-[0.875rem] xl:text-[0.875rem] sxl:text-[0.875rem] lg:text-[0.875rem] md:text-[0.875rem] sm:text-[0.625rem] xd:text-[0.625rem]">
                      <th className="text-left w-[10%] px-[1rem]">Rank</th>
                      <th className="text-left  w-[40%]">Address</th>
                      <th className="w-[0%]"></th>
                      <th className="text-right w-[25%] ">No of tx</th>
                      <th className="text-right w-[25%] px-[1rem] ">
                        Total Volume (USD)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="w-full">
                    {routeLoading ? (
                      <tr className=" w-full xxl:text-[0.875rem] bxl:text-[0.875rem] xl:text-[0.875rem] sxl:text-[0.875rem] lg:text-[0.875rem] md:text-[0.875rem] sm:text-[0.625rem] xd:text-[0.625rem] text-[#FFFFFF] dark:text-[#0C0C0D] font-[400] mt-4">
                        <td></td>
                        <td></td>
                        <td className=" w-full flex justify-start items-start  ">
                          <Lottie
                            loop
                            animationData={KanaLoader}
                            play
                            style={{ width: 150, height: 150 }}
                          />
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                    ) : (
                      savePage?.length > 0 &&
                      savePage.map((listValue: any) =>
                        renderLeaderboardList(listValue, showFullAddress)
                      )
                    )}
                  </tbody>
                </table>
              </div>
              {isPagination && (
                <div className="flex flex-col w-full justify-center align-middle items-center p-[3%_0]">
                  {isPagination && (
                    <Pagination
                      className="pagination-bar py-2"
                      currentPage={currentPage}
                      totalCount={showData.length}
                      pageSize={PageSize}
                      onPageChange={(page: React.SetStateAction<number>) =>
                        setCurrentPage(page)
                      }
                    />
                  )}
                  <div className="text-[#777879] dark:text-[#A5A5A6] py-2 font-manrop  xxl:text-[0.875rem] bxl:text-[0.875rem] xl:text-[0.875rem] sxl:text-[0.875rem] lg:text-[0.875rem] md:text-[0.875rem] sm:text-[0.625rem] xd:text-[0.625rem]">
                    Showing {(currentPage - 1) * PageSize + 1}
                    {}-{(currentPage - 1) * PageSize + savePage.length} out of
                    <span className=" pl-1">{showData.length}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className=" xxl:w-[35%] bxl:w-[35%] xl:w-[35%] sxl:w-[35%] lg:w-[35%] md:w-[100%] sm:w-[100%] xd:w-[100%]  flex flex-col gap-[1rem] ">
            {/* <div className="rounded-[1rem] border-[1px] border-[#ffffff1a] dark:border-[#e3e8ef]  bg-[#17181A] dark:bg-[#FCFDFE] shadow-[#E4F2F3] w-full ">
                <div className="rounded-t-[1rem]">
                  <div className="  p-[1rem] border-b-[1px] border-[#ffffff1a] bg-[#111213]  rounded-t-[1rem] dark:bg-[#F2F9F9] dark:border-[#e3e8ef]  flex gap-[0.5rem] ">
                    <Image
                      src={theme === "dark" ? TrophyLight : Trophy}
                      alt="Trophy"
                    />
                    <div className="text-[#FFF] dark:text-[#000] font-[800] text-[0.875rem]  font-manrop">
                      Last month winners
                    </div>
                  </div>
                  {routeLoading ? (
                    <div className=" flex justify-center items-center align-middle w-full">
                      <Lottie
                        loop
                        animationData={KanaLoader}
                        play
                        style={{ width: 100, height: 100 }}
                      />
                    </div>
                  ) : (
                    monthWinners?.length > 0 &&
                    monthWinners.map((listValue: any, index: any) => (
                      <MonthlyList
                        key={index}
                        chainName={listValue?.ChainName}
                        walletAddress={listValue?.walletAddress}
                        showFullAddress={showFullAddress}
                        totalVolume={listValue["totalVolume"]}
                      />
                    ))
                  )}
                </div>
              </div> */}
            <div className="rounded-[1rem] border-[1px] border-[#ffffff1a] dark:border-[#e3e8ef]  bg-[#17181A] dark:bg-[#FCFDFE] shadow-[#E4F2F3] w-full   ">
              <div className=" border-b-[1px] border-[#ffffff1a] dark:border-[#e3e8ef] rounded-t-[1rem] p-[1rem]">
                <div className="text-[#A5A5A6] dark:text-[#777879] font-[800] text-[0.875rem]  font-manrop">
                  Your Stats
                </div>
              </div>
              {walletConnected ? (
                <>
                  <WalletInfo
                    labelKey="Wallet Address"
                    value={walletAddress}
                    isAddress={true}
                  />
                  <WalletInfo labelKey="Overall Rank" value={rank} />
                  <WalletInfo labelKey="Chain Rank" value={chainrank} />
                  <WalletInfo labelKey="Times won" value={wonCount} />
                </>
              ) : (
                <>
                  <div className=" flex justify-center items-center p-[1rem]">
                    <button
                      className="text-[#17181A] dark:text-[#FCFDFE] p-[0.5rem] bg-[#2ED3B7] dark:bg-[#0E9384] w-full rounded-[0.5rem] h-[2rem]  font-[800] text-[0.75rem]"
                      onClick={() => handleOnClickConnectWallet(connectRoute)}
                    >
                      Connect wallet to see your stats
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <div className=" py-4 min-h-[60vh]  xxl:hidden bxl:hidden xl:hidden sxl:hidden lg:hidden md:flex sm:flex xd:flex flex xxl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col xd:flex-col mb-32 dark:bg-[#e4f2f3] h-[100%] w-[100%] gap-[1rem] ">
          {isLeaderboard && (
            <div className=" xxl:w-[65%] bxl:w-[65%] xl:w-[65%] sxl:w-[65%] lg:w-[65%] md:w-[100%] sm:w-[100%] xd:w-[100%]   ">
              <div className="flex flex-col gap-[1rem]">
                <div className=" flex flex-col gap-[1rem] justify-start items-start p-[0.5rem]   ">
                  <div className="text-[#A5A5A6] dark:text-[#777879] text-[0.875rem] font-[800] w-full  gap-[1rem] flex flex-row justify-between items-center ">
                    <div>Choose Chain</div>
                  </div>
                  <div className="  cursor-pointer w-full overflow-x-scroll  ">
                    <div className="flex flex-row  w-[30rem] overflow-x-scroll  !scrollbar-hide justify-start items-center">
                      <div
                        className={`${
                          chain === "All"
                            ? "bg-[rgba(255,255,255,0.06)] dark:bg-[#EFF7F8]"
                            : "bg-[rgba(0,0,0,0.35)] dark:bg-[#FCFDFE]"
                        }
                                w-[7rem]  h-[2.95rem]  flex flex-row justify-center items-center align-middle text-center p-[0.5rem_0.75rem] text-[#FFFFFF] dark:text-[#777879] font-[800] font-manrope text-[0.75rem] border-[1px] border-[rgba(255,255,255,0.10)] dark:border-[]  rounded-lg`}
                        onClick={() => onChainChange("All")}
                      >
                        All Chains
                      </div>
                      <Tooltip title="Aptos">
                        <div
                          className={`${
                            chain === 2
                              ? "bg-[rgba(255,255,255,0.1)] dark:bg-[#EFF7F8]"
                              : "bg-transparent"
                          } ml-[0.25rem]  w-[3rem] h-[3rem] flex flex-row justify-center align-middle rounded-lg p-[0.75rem]   `}
                          onClick={() => onChainChange(2)}
                        >
                          <Image
                            src={theme == "light" ? Aptos : AptosDark}
                            alt="aptos"
                          />
                        </div>
                      </Tooltip>
                      <Tooltip title="Solana">
                        <div
                          className={`${
                            chain === 1
                              ? "bg-[rgba(255,255,255,0.1)] dark:bg-[#EFF7F8]"
                              : "bg-transparent"
                          }  rounded-lg p-[0.75rem]  w-[3rem] h-[3rem] flex flex-row justify-center align-middle  `}
                          onClick={() => onChainChange(1)}
                        >
                          <Image src={Solana} alt="Solana" />
                        </div>
                      </Tooltip>

                      <Tooltip title="Sui">
                        <div
                          className={`${
                            chain === 5
                              ? " bg-[rgba(255,255,255,0.1)] dark:bg-[#EFF7F8]"
                              : "bg-transparent"
                          }   w-[3rem] h-[3rem] flex flex-row justify-center align-middle rounded-lg p-[0.75rem]  `}
                          onClick={() => onChainChange(5)}
                        >
                          <Image src={Sui} alt="Sui" />
                        </div>
                      </Tooltip>

                      <Tooltip title="Polygon">
                        <div
                          className={`${
                            chain === 3
                              ? " bg-[rgba(255,255,255,0.1)] dark:bg-[#EFF7F8]"
                              : "bg-transparent"
                          }   w-[3rem] h-[3rem] flex flex-row justify-center align-middle rounded-lg p-[0.75rem]    `}
                          onClick={() => onChainChange(3)}
                        >
                          <Image src={Polygon} alt="polygon" />
                        </div>
                      </Tooltip>

                      <Tooltip title="Binance">
                        <div
                          className={`${
                            chain === 4
                              ? " bg-[rgba(255,255,255,0.1)] dark:bg-[#EFF7F8]"
                              : "bg-transparent"
                          }   w-[3rem] h-[3rem] flex flex-row justify-center align-middle rounded-lg p-[0.75rem]   `}
                          onClick={() => onChainChange(4)}
                        >
                          <Image src={Binance} alt="Binance" />
                        </div>
                      </Tooltip>
                      <Tooltip title="Ethereum">
                        <div
                          className={`${
                            chain === 6
                              ? " bg-[rgba(255,255,255,0.1)] dark:bg-[#EFF7F8]"
                              : "bg-transparent"
                          }   w-[3rem] h-[3rem] flex flex-row justify-center align-middle rounded-lg p-[0.75rem]    `}
                          onClick={() => onChainChange(6)}
                        >
                          <Image src={Ethereum} alt="Ethereum" />
                        </div>
                      </Tooltip>
                      <Tooltip title="Arbitrum">
                        <div
                          className={`${
                            chain === 11
                              ? " bg-[rgba(255,255,255,0.1)] dark:bg-[#EFF7F8]"
                              : "bg-transparent"
                          }   w-[3rem] h-[3rem] flex flex-row justify-center align-middle rounded-lg p-[0.75rem]   `}
                          onClick={() => onChainChange(11)}
                        >
                          <Image src={Arbitrum} alt="Arbitrum" />
                        </div>
                      </Tooltip>
                      <Tooltip title="Avalanche">
                        <div
                          className={`${
                            chain === 10
                              ? " bg-[rgba(255,255,255,0.1)] dark:bg-[#EFF7F8]"
                              : "bg-transparent"
                          }   w-[3rem] h-[3rem] flex flex-row justify-center align-middle rounded-lg p-[0.75rem]  `}
                          onClick={() => onChainChange(10)}
                        >
                          <Image src={Avalanche} alt="Avalanche" />
                        </div>
                      </Tooltip>

                      <Tooltip title="Zksync">
                        <div
                          className={`${
                            chain === 9
                              ? " bg-[rgba(255,255,255,0.1)] dark:bg-[#EFF7F8]"
                              : "bg-transparent"
                          }   w-[3rem] h-[3rem] flex flex-row justify-center align-middle rounded-lg p-[0.75rem]   `}
                          onClick={() => onChainChange(9)}
                        >
                          <Image src={Zksync} alt="Zksync" />
                        </div>
                      </Tooltip>
                    </div>
                  </div>
                </div>
                <div className=" flex justify-between p-4  h-[3.5rem] border-b-[1px] border-[#ffffff1a] dark:border-[#e3e8ef]  w-full">
                  <div className="text-[#A5A5A6] dark:text-[#777879] text-[0.875rem] font-[800] w-full  gap-[1rem] flex flex-row justify-between items-center ">
                    <div>Leaderboard</div>
                    {/* <div className="w-[80rem]  overflow-y-scroll scrollbar-hide cursor-pointer">
                      <div className="flex flex-row w-[40rem] overflow-y-scroll scrollbar-hide  justify-start items-center">
                        <div
                          className={`${
                            chain === "All"
                              ? "bg-[rgba(255,255,255,0.1)] dark:bg-[#EFF7F8]"
                              : "bg-[rgba(0,0,0,0.35)] dark:bg-[#FCFDFE]"
                          }
                                    flex flex-row justify-center align-middle text-center w-[6.75rem] h-[3rem] p-[0.875rem_1rem] text-[#FFFFFF] dark:text-[#777879] font-bold font-inter text-[0.875rem]  m-[0rem_0.25rem] rounded-lg`}
                          onClick={() => onChainChange("All")}
                        >
                          All Chains
                        </div>
                        <Tooltip title="Aptos">
                          <div
                            className={`${
                              chain === 2
                                ? "bg-[rgba(255,255,255,0.1)] dark:bg-[#EFF7F8]"
                                : "bg-[rgba(0,0,0,0.35)] dark:bg-[#FCFDFE]"
                            }   w-[3rem] h-[3rem] flex flex-row justify-center align-middle rounded-lg p-[0.75rem] m-[0rem_0.25rem] `}
                            onClick={() => onChainChange(2)}
                          >
                            <Image
                              src={theme == "light" ? Aptos : AptosDark}
                              alt="aptos"
                            />
                          </div>
                        </Tooltip>
                        <Tooltip title="Solana">
                          <div
                            className={`${
                              chain === 1
                                ? "bg-[rgba(255,255,255,0.1)] dark:bg-[#EFF7F8]"
                                : "bg-[rgba(0,0,0,0.35)] dark:bg-[#FCFDFE]"
                            }  m-[0rem_0.25rem] rounded-lg p-[0.75rem]  w-[3rem] h-[3rem] flex flex-row justify-center align-middle  `}
                            onClick={() => onChainChange(1)}
                          >
                            <Image src={Solana} alt="solana" />
                          </div>
                        </Tooltip>

                        <Tooltip title="Sui">
                          <div
                            className={`${
                              chain === 5
                                ? " bg-[rgba(255,255,255,0.1)] dark:bg-[#EFF7F8]"
                                : "bg-[rgba(0,0,0,0.35)] dark:bg-[#FCFDFE]"
                            }   w-[3rem] h-[3rem] flex flex-row justify-center align-middle rounded-lg p-[0.75rem] m-[0rem_0.25rem] flex`}
                            onClick={() => onChainChange(5)}
                          >
                            <Image src={Sui} alt="Sui" />
                          </div>
                        </Tooltip>

                        <Tooltip title="polygon">
                          <div
                            className={`${
                              chain === 3
                                ? " bg-[rgba(255,255,255,0.1)] dark:bg-[#EFF7F8]"
                                : "bg-[rgba(0,0,0,0.35)] dark:bg-[#FCFDFE]"
                            }   w-[3rem] h-[3rem] flex flex-row justify-center align-middle rounded-lg p-[0.75rem] m-[0rem_0.25rem] `}
                            onClick={() => onChainChange(3)}
                          >
                            <Image src={Polygon} alt="polygon" />
                          </div>
                        </Tooltip>

                        <Tooltip title="Binance">
                          <div
                            className={`${
                              chain === 4
                                ? " bg-[rgba(255,255,255,0.1)] dark:bg-[#EFF7F8]"
                                : "bg-[rgba(0,0,0,0.35)] dark:bg-[#FCFDFE]"
                            }   w-[3rem] h-[3rem] flex flex-row justify-center align-middle rounded-lg p-[0.75rem] m-[0rem_0.25rem] `}
                            onClick={() => onChainChange(4)}
                          >
                            <Image src={Binance} alt="Binance" />
                          </div>
                        </Tooltip>
                        <Tooltip title="Ethereum">
                          <div
                            className={`${
                              chain === 6
                                ? " bg-[rgba(255,255,255,0.1)] dark:bg-[#EFF7F8]"
                                : "bg-[rgba(0,0,0,0.35)] dark:bg-[#FCFDFE]"
                            }   w-[3rem] h-[3rem] flex flex-row justify-center align-middle rounded-lg p-[0.75rem] m-[0rem_0.25rem] `}
                            onClick={() => onChainChange(6)}
                          >
                            <Image src={Ethereum} alt="Ethereum" />
                          </div>
                        </Tooltip>
                        <Tooltip title="Arbitrum">
                          <div
                            className={`${
                              chain === 11
                                ? " bg-[rgba(255,255,255,0.1)] dark:bg-[#EFF7F8]"
                                : "bg-[rgba(0,0,0,0.35)] dark:bg-[#FCFDFE]"
                            }   w-[3rem] h-[3rem] flex flex-row justify-center align-middle rounded-lg p-[0.75rem] m-[0rem_0.25rem] `}
                            onClick={() => onChainChange(11)}
                          >
                            <Image src={Arbitrum} alt="Arbitrum" />
                          </div>
                        </Tooltip>
                        <Tooltip title="Avalanche">
                          <div
                            className={`${
                              chain === 10
                                ? " bg-[rgba(255,255,255,0.1)] dark:bg-[#EFF7F8]"
                                : "bg-[rgba(0,0,0,0.35)] dark:bg-[#FCFDFE]"
                            }   w-[3rem] h-[3rem] flex flex-row justify-center align-middle rounded-lg p-[0.75rem] m-[0rem_0.25rem]  `}
                            onClick={() => onChainChange(10)}
                          >
                            <Image src={Avalanche} alt="Avalanche" />
                          </div>
                        </Tooltip>

                        <Tooltip title="Zksync">
                          <div
                            className={`${
                              chain === 9
                                ? " bg-[rgba(255,255,255,0.1)] dark:bg-[#EFF7F8]"
                                : "bg-[rgba(0,0,0,0.35)] dark:bg-[#FCFDFE]"
                            }   w-[3rem] h-[3rem] flex flex-row justify-center align-middle rounded-lg p-[0.75rem] m-[0rem_0.25rem]  `}
                            onClick={() => onChainChange(9)}
                          >
                            <Image src={Zksync} alt="Zksync" />
                          </div>
                        </Tooltip>
                      </div>
                    </div> */}
                    <div
                      className="cursor-pointer flex flex-row justify-center items-center p-4 gap-[0.5rem]  "
                      onClick={() => handleVolumeSort("totalVolume")}
                    >
                      <Image
                        src={theme == "light" ? filter : filterDark}
                        alt="filter"
                      />
                      <div className=" text-[#2ED3B7] dark:text-[#0E9384] font-[800]   text-[0.75rem] flex">
                        Filter
                        {
                          <span className="px-2">
                            {sortDirection === "asc" ? "▼" : "▲"}
                          </span>
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto  2xl:w-full xl:w-full lg:w-full  md:w-full  sm:w-full  max-sm:w-full">
                <table
                  className={
                    routeLoading
                      ? "overflow-x-auto 2xl:w-full xl:w-full lg:w-full md:w-full sm:w-full max-sm:w-full"
                      : "overflow-x-auto 2xl:w-full xl:w-full lg:w-full md:w-full sm:w-full max-sm:w-full"
                  }
                >
                  <thead>
                    <tr className=" border-b-[0.063rem] bg-[#111213] dark:bg-[#f2f9f9]  border-[#ffffff1a] dark:border-[#e3e8ef] h-[3.25rem] text-[#777879]  font-[400]  xxl:text-[0.875rem] bxl:text-[0.875rem] xl:text-[0.875rem] sxl:text-[0.875rem] lg:text-[0.875rem] md:text-[0.875rem] sm:text-[0.625rem] xd:text-[0.625rem] ">
                      <th className="text-left w-[10%] px-[1rem]">Rank</th>
                      <th className="text-left  w-[30%]">Address</th>
                      <th className="w-[0%]"></th>
                      <th className="text-right w-[25%] ">No of tx</th>
                      <th className="text-right w-[35%] px-[1rem] ">
                        Total Volume (USD)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {routeLoading ? (
                      <tr className=" text-[0.875rem]  text-[#FFFFFF] w-full dark:text-[#0C0C0D] font-[400] mt-4">
                        <td></td>
                        <td></td>
                        <td className=" flex justify-center items-center align-middle w-full">
                          <Lottie
                            loop
                            animationData={KanaLoader}
                            play
                            style={{ width: 150, height: 150 }}
                          />
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                    ) : (
                      savePage?.length > 0 &&
                      savePage.map((listValue: any) =>
                        renderLeaderboardList(listValue, showFullAddress)
                      )
                    )}
                  </tbody>
                </table>
              </div>
              {isPagination && (
                <div className="flex flex-col w-full justify-center align-middle items-center p-[3%_0]">
                  {isPagination && (
                    <Pagination
                      className="pagination-bar py-2"
                      currentPage={currentPage}
                      totalCount={showData.length}
                      pageSize={PageSize}
                      onPageChange={(page: React.SetStateAction<number>) =>
                        setCurrentPage(page)
                      }
                    />
                  )}
                  <div className="text-[#777879] dark:text-[#A5A5A6] py-2 font-manrop text-[0.875rem]">
                    Showing {(currentPage - 1) * PageSize + 1}
                    {}-{(currentPage - 1) * PageSize + savePage.length} out of
                    <span className=" pl-1">{showData.length}</span>
                  </div>
                </div>
              )}
            </div>
          )}
          {yourStats && (
            <div className=" xxl:w-[35%] bxl:w-[35%] xl:w-[35%] sxl:w-[35%] lg:w-[35%] md:w-[100%] sm:w-[100%] xd:w-[100%]  flex flex-col gap-[1rem] ">
              {/* <div className="  w-full ">
                  <div className=" ">
                    <div className="  p-[1rem] border-b-[1px] border-[#ffffff1a] dark:border-[#e3e8ef]  flex gap-[0.5rem] ">
                      <Image
                        src={theme === "dark" ? TrophyLight : Trophy}
                        alt="Trophy"
                      />
                      <div className="text-[#FFF] dark:text-[#000] font-[800] text-[0.875rem]  font-manrop">
                        Last month winners
                      </div>
                    </div>
                    {routeLoading ? (
                      <div className=" flex justify-center items-center align-middle w-full">
                        <Lottie
                          loop
                          animationData={KanaLoader}
                          play
                          style={{ width: 100, height: 100 }}
                        />
                      </div>
                    ) : (
                      monthWinners?.length > 0 &&
                      monthWinners.map((listValue: any, index: any) => (
                        <MonthlyList
                          key={index}
                          chainName={listValue?.ChainName}
                          walletAddress={listValue?.walletAddress}
                          showFullAddress={showFullAddress}
                          totalVolume={listValue["totalVolume"]}
                        />
                      ))
                    )}
                  </div>
                </div> */}
              <div className="   w-full   ">
                <div className=" border-b-[1px] border-[#ffffff1a] dark:border-[#e3e8ef] rounded-t-[1rem] p-[1rem]">
                  <div className="text-[#A5A5A6] dark:text-[#777879] font-[800] text-[0.875rem]  font-manrop">
                    Your Stats
                  </div>
                </div>
                {walletConnected ? (
                  <>
                    <WalletInfo
                      labelKey="Wallet Address"
                      value={walletAddress}
                      isAddress={true}
                    />
                    <WalletInfo labelKey="Overall Rank" value={rank} />
                    <WalletInfo labelKey="Chain Rank" value={chainrank} />
                    <WalletInfo labelKey="Times won" value={wonCount} />
                  </>
                ) : (
                  <>
                    <div className=" flex justify-center items-center p-[1rem]">
                      <button
                        className="text-[#17181A] dark:text-[#FCFDFE] p-[0.5rem] bg-[#2ED3B7] dark:bg-[#0E9384] w-full rounded-[0.5rem] h-[2rem]  font-[800] text-[0.75rem]"
                        onClick={() => handleOnClickConnectWallet(connectRoute)}
                      >
                        Connect wallet to see your stats
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
        {connectWalletLeaderBoard && (
          <ConnectWallet
            handlecloseWalletConnect={handlecloseWalletConnect}
            chain={leaderBoardChain.id}
          />
        )}
        <div className="dark:bg-[#FCFDFE] bg-[#111213]  ">
          <div className="h-24 z-[1] dark:bg-[#FCFDFE] bg-[#111213] mt-40 !fixed !bottom-0 flex flex-row  items-start justify-evenly px-[0.5rem] w-full !font-inter ml-0 xxl:hidden bxl:hidden xl:hidden sxl:hidden lg:hidden md:flex sm:flex xd:flex">
            <div
              onClick={handleLeaderboard}
              className={` flex flex-row  items-start justify-evenly ${
                isLeaderboard
                  ? "border-t-[#0E9384] dark:border-t-[#2ED3B7] border-t-[1px]"
                  : "border-t-transparent dark:border-transparent border-t-[1px]"
              }  w-full`}
            >
              <div className="w-[20%] py-6 flex flex-col justify-center items-center gap-[0.5rem]  font-[400]">
                <Image
                  src={
                    theme == "light"
                      ? isLeaderboard
                        ? ActivetasSelect
                        : ActiveTask
                      : isLeaderboard
                      ? ActivetasSelectDark
                      : ActivetaskDark
                  }
                  alt="ActiveTask"
                />
                <div
                  className={` ${
                    isLeaderboard
                      ? "text-[#2ED3B7] dark:text-[#0E9384]"
                      : "text-[#A5A5A6] dark:text-[#777879]"
                  } `}
                >
                  LeaderBoard
                </div>
              </div>
            </div>
            <div
              onClick={handleStats}
              className={` flex flex-row  items-start justify-evenly ${
                yourStats
                  ? "border-t-[#0E9384] dark:border-t-[#2ED3B7] border-t-[1px]"
                  : "border-t-transparent dark:border-transparent border-t-[1px]"
              }  w-full`}
            >
              <div className="w-[20%] py-6 flex flex-col justify-center items-center gap-[0.5rem] text-[#A5A5A6] dark:text-[#777879] font-[400]">
                <Image
                  src={
                    theme == "light"
                      ? yourStats
                        ? statsSelect
                        : stats
                      : yourStats
                      ? statsSelectDark
                      : statsDark
                  }
                  alt="ActiveTask"
                />
                <div
                  className={` ${
                    yourStats
                      ? "text-[#2ED3B7] dark:text-[#0E9384]"
                      : "text-[#A5A5A6] dark:text-[#777879]"
                  } `}
                >
                  Stats
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
