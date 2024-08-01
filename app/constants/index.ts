import { kanaChainIdList } from "kana-aggregator-sdk"
import { NetworkId } from "@kanalabs/aggregator";

export enum BlockchainType {
    APTOS = NetworkId.aptos,
    SOLANA = NetworkId.solana,
    POLYGON = NetworkId.polygon,
    ETHEREUM = NetworkId.ethereum,
    BINANCE = NetworkId.bsc,
}
export enum ChainID {
    APTOS = 1,
    SOLANA = 2
}
export enum NetworkID {
    MAINNET = 1,
    TESTNET = 2,
    polygon,
    bsc,
    avalanche,
    arbritrum,
    zksync,
    etherium,
    sui
}
export enum lendChain {
    solana = 'Solana',
    aptos = 'Aptos'

}

export enum hideStakingAndLend{
    MAINNET =1,
    TESTNET =2
}
