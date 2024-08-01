import { NetworkId } from "@kanalabs/aggregator";
import SolanaIcon from "../../assets/Icons/solana_stake.svg";
import AptosICon from "../../assets/Icons/aptos_stake.svg";
import PolygonIcon from "../../assets/Icons/polygon_stake.svg";
import Ethereum from "../../assets/Icons/ETH.svg";
import Arbitrum from "../../assets/Icons/arbitrum.svg";
import AvalancheLogo from "../../assets/Icons/avalanche.svg";
import BSC from "../../assets/Icons/binance-new.svg";
import SUIcon from "../../assets/Icons/sui-new.svg";
import zkSync from "../../assets/Icons/zksync.svg";
export interface ChainInfo {
  chain: any;
  id: number;
  name: string;
  logo: string;
}
export const CHAINS: ChainInfo[] = [
  {
    id: NetworkId.solana,
    name: "Solana",
    logo: SolanaIcon,
    chain: NetworkId.solana,
  },
  {
    id: NetworkId.aptos,
    name: "Aptos",
    logo: AptosICon,
    chain: NetworkId.aptos,
  },
  {
    id: NetworkId.polygon,
    name: "Polygon",
    logo: PolygonIcon,
    chain: NetworkId.polygon,
  },
  {
    id: NetworkId.ethereum,
    name: "Ethereum",
    logo: Ethereum,
    chain: NetworkId.ethereum,
  },
  {
    id: NetworkId.bsc,
    name: "BSC",
    logo: BSC,
    chain: NetworkId.bsc,
  },
  {
    id: NetworkId.sui,
    name: "sui",
    logo: SUIcon,
    chain: NetworkId.sui,
  },
  {
    id: NetworkId.Arbitrum,
    name: "Arbitrum",
    logo: Arbitrum,
    chain: NetworkId.Arbitrum,
  },
  {
    id: NetworkId.Avalanche,
    name: "Avalanche",
    logo: AvalancheLogo,
    chain: NetworkId.Avalanche,
  },
  {
    id: NetworkId.zkSync,
    name: "zkSync",
    logo: zkSync,
    chain: NetworkId.zkSync,
  },
];

export const CHAINSLEADERBOARD: ChainInfo[] = [
  {
    id: NetworkId.solana,
    name: "Solana",
    logo: SolanaIcon,
    chain: NetworkId.solana,
  },
  {
    id: NetworkId.aptos,
    name: "Aptos",
    logo: AptosICon,
    chain: NetworkId.aptos,
  },
  {
    id: NetworkId.polygon,
    name: "Polygon",
    logo: PolygonIcon,
    chain: NetworkId.polygon,
  },
  {
    id: NetworkId.ethereum,
    name: "Ethereum",
    logo: Ethereum,
    chain: NetworkId.ethereum,
  },
  {
    id: NetworkId.bsc,
    name: "BSC",
    logo: BSC,
    chain: NetworkId.bsc,
  },
  {
    id: NetworkId.sui,
    name: "sui",
    logo: SUIcon,
    chain: NetworkId.sui,
  },
  {
    id: NetworkId.Arbitrum,
    name: "Arbitrum",
    logo: Arbitrum,
    chain: NetworkId.Arbitrum,
  },
  {
    id: NetworkId.Avalanche,
    name: "Avalanche",
    logo: AvalancheLogo,
    chain: NetworkId.Avalanche,
  },
  {
    id: NetworkId.zkSync,
    name: "zkSync",
    logo: zkSync,
    chain: NetworkId.zkSync,
  },
];
