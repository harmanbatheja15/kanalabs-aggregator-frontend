import { StateSlice, Store } from "../types";
import { BlockchainType } from "@/app/constants";
import { ChainInfo, CHAINS } from "@/app/utils/walletContextConsts";
import { kanaChainIdList } from "kana-aggregator-sdk";

export type AppSlice = {
  chain: BlockchainType;
  sourceChain: BlockchainType;
  targetChain: BlockchainType;
  sourceChainForStakeUnstake: ChainInfo;
  targetChainForStakeUnstake: ChainInfo;
  chainForYield: ChainInfo;
  sourceTokenForStakeUnStake: any;
  targetTokenForStakeUnstake: any;
  tokenForYield: any;
  sourceWalletConnected: boolean;
  targetWalletConnected: boolean;
  isWalletConnectVisible: boolean;
  walletConnectedYield: boolean;
  tokenList: any;
  unformattedTokenList: any;
  stakeUnStakeData: any;
  yieldData: any;
  stakeUnStakeInstruction: any;
  sourceWalletItem: any;
  targetWalletItem: any;
  yieldWalletIcon: any;
  leaderBoardChain: any;
  referralChain: any;
  claimRewards: any;
  referralHome: any;
  isReferralLinkVisible: boolean;
  refferedAdress: any;
  referralAdress: any;
  isDisclaimerVisible: boolean;
  isPosterVisible: boolean;
  selectedTab: string;
  updateIsWalletConnectVisible(payload: boolean): void;
  updateRefferedAdress(payload: any): void;
  updateReferralAdress(payload: any): void;
  updateChain(payload: BlockchainType): void;
  updateSourceChain(payload: BlockchainType): void;
  updateTargetChain(payload: BlockchainType): void;
  updateSourceChainForStakeUnStake(payload: ChainInfo): void;
  updateTargetChainForStakeUnStake(payload: ChainInfo): void;
  updateChainForYield(payload: ChainInfo): void;
  updateSourceTokenForStakeUnStake(payload: any): void;
  updateTargetTokenForStakeUnStake(payload: any): void;
  updateTokenForYield(tokenA: any, tokenB: any): void;
  updateSourceWalletConnected(payload: any): void;
  updateTargetWalletConnected(payload: any): void;
  updateWalletConnectedYield(payload: any): void;
  updateTokenList(payload: any): void;
  updateStakeUnStakeData(payload: any): void;
  updateYieldData(payload: any): void;
  updateUnFormatedTokenList(payload: any): void;
  updateStakeUnStakeInstruction(payload: any): void;
  updateSourceWalletItem(payload: any): void;
  updateTargetWalletItem(payload: any): void;
  updateYieldWalletIcon(payload: any): void;
  updateLeaderBoardChain(payload: any): void;
  updateReferralChain(payload: any): void;
  updateClaimRewards(payload: any): void;
  updateReferralHome(payload: any): void;
  updateisReferralLinkVisible(payload: boolean): void;
  updateIsDisclaimerVisible(payload: boolean): void;
  updateIsPosterVisible(payload: boolean): void;
  updateSelectedTab(payload: string): void;
};

export const createAppSlice: StateSlice<Store, AppSlice> = (set) => ({
  chain: BlockchainType.APTOS,
  sourceChain: BlockchainType.APTOS,
  targetChain: BlockchainType.APTOS,
  sourceChainForStakeUnstake: CHAINS[1],
  targetChainForStakeUnstake: CHAINS[1],
  chainForYield: CHAINS[1],
  sourceTokenForStakeUnStake: {},
  targetTokenForStakeUnstake: {},
  tokenForYield: {},
  stakeUnStakeInstruction: {},
  sourceWalletConnected: false,
  targetWalletConnected: false,
  walletConnectedYield: false,
  isReferralLinkVisible: false,
  tokenList: [],
  stakeUnStakeData: {},
  yieldData: {},
  unformattedTokenList: [],
  sourceWalletItem: {},
  targetWalletItem: {},
  yieldWalletIcon: {},
  leaderBoardChain: {
    id:2,
    chain:2,
  },
  referralChain: BlockchainType.APTOS,
  claimRewards: false,
  referralHome: true,
  isWalletConnectVisible: false,
  refferedAdress: "",
  referralAdress: "",
  isDisclaimerVisible: false,
  isPosterVisible: true,
  selectedTab: 'PointsDashboard',

  updateChain(payload: AppSlice["chain"]) {
    set({ chain: payload });
  },
  updateIsWalletConnectVisible(payload: AppSlice["isWalletConnectVisible"]) {
    set({ isWalletConnectVisible: payload });
  },
  updateSourceChain(payload: AppSlice["sourceChain"]) {
    set({ sourceChain: payload });
  },
  updateTargetChain(payload: AppSlice["targetChain"]) {
    set({ targetChain: payload });
  },
  updateSourceChainForStakeUnStake(
    payload: AppSlice["sourceChainForStakeUnstake"]
  ) {
    set({ sourceChainForStakeUnstake: payload });
  },
  updateTargetChainForStakeUnStake(
    payload: AppSlice["targetChainForStakeUnstake"]
  ) {
    set({ targetChainForStakeUnstake: payload });
  },
  updateSourceTokenForStakeUnStake(
    payload: AppSlice["sourceTokenForStakeUnStake"]
  ) {
    set({ sourceTokenForStakeUnStake: payload });
  },
  updateTargetTokenForStakeUnStake(
    payload: AppSlice["targetTokenForStakeUnstake"]
  ) {
    set({ targetTokenForStakeUnstake: payload });
  },
  updateTokenForYield(
    tokenA: AppSlice["tokenForYield"],
    tokenb: AppSlice["tokenForYield"]
  ) {
    set({ tokenForYield: [tokenA, tokenb] });
  },
  updateChainForYield(payload: AppSlice["chainForYield"]) {
    set({ chainForYield: payload });
  },
  updateSourceWalletConnected(payload: AppSlice["sourceWalletConnected"]) {
    set({ sourceWalletConnected: payload });
  },
  updateTargetWalletConnected(payload: AppSlice["targetWalletConnected"]) {
    set({ targetWalletConnected: payload });
  },
  updateWalletConnectedYield(payload: AppSlice["walletConnectedYield"]) {
    set({ walletConnectedYield: payload });
  },
  updateTokenList(payload: AppSlice["tokenList"]) {
    set({ tokenList: payload });
  },
  updateStakeUnStakeData(payload: AppSlice["stakeUnStakeData"]) {
    set({ stakeUnStakeData: payload });
  },
  updateYieldData(payload: AppSlice["yieldData"]) {
    set({ yieldData: payload });
  },
  updateUnFormatedTokenList(payload: AppSlice["unformattedTokenList"]) {
    set({ unformattedTokenList: payload });
  },
  updateStakeUnStakeInstruction(payload: AppSlice["stakeUnStakeInstruction"]) {
    set({ stakeUnStakeInstruction: payload });
  },
  updateSourceWalletItem(payload: AppSlice["sourceWalletItem"]) {
    set({ sourceWalletItem: payload });
  },
  updateTargetWalletItem(payload: AppSlice["targetWalletItem"]) {
    set({ targetWalletItem: payload });
  },
  updateYieldWalletIcon(payload: AppSlice["yieldWalletIcon"]) {
    set({ yieldWalletIcon: payload });
  },
  updateLeaderBoardChain(payload: AppSlice["leaderBoardChain"]) {
    set({ leaderBoardChain: payload });
  },
  updateReferralChain(payload: AppSlice["referralChain"]) {
    set({ referralChain: payload });
  },
  updateClaimRewards(payload: AppSlice["claimRewards"]) {
    set({ claimRewards: payload });
  },
  updateReferralHome(payload: AppSlice["referralHome"]) {
    set({ referralHome: payload });
  },
  updateisReferralLinkVisible(payload: AppSlice["isReferralLinkVisible"]) {
    set({ isReferralLinkVisible: payload });
  },
  updateRefferedAdress(payload: AppSlice["refferedAdress"]) {
    set({ refferedAdress: payload });
  },
  updateReferralAdress(payload: AppSlice["referralAdress"]) {
    set({ referralAdress: payload });
  },
  updateIsDisclaimerVisible(payload: AppSlice["isDisclaimerVisible"]) {
    set({ isDisclaimerVisible: payload });
  },
  updateIsPosterVisible(payload: AppSlice["isPosterVisible"]) {
    set({ isPosterVisible: payload });
  },
  updateSelectedTab(payload: AppSlice["selectedTab"]) {
	set({ selectedTab: payload });
  },
});
