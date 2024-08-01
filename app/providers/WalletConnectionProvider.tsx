import { ReactNode, useMemo } from 'react';
import { ConnectionProvider } from '@solana/wallet-adapter-react';
import { clusterApiUrl } from '@solana/web3.js';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { config } from 'process';

const WalletConnectionProvider = ({ children }: { children?: ReactNode }) => {
    // const solNetwork = WalletAdapterNetwork.Mainnet;
    // const endpoint = useMemo(() => clusterApiUrl(solNetwork), [solNetwork]);
    return <ConnectionProvider endpoint={"https://nd-479-816-368.p2pify.com/dbafae0d6f15f6fb137a689eefb344e9"} config ={{wsEndpoint:"wss://ws-nd-479-816-368.p2pify.com/dbafae0d6f15f6fb137a689eefb344e9"}} >{children}</ConnectionProvider>;
};

export default WalletConnectionProvider;
