"use client"
import { ReactNode } from 'react';
import {
    MartianWalletAdapter,
    FewchaWalletAdapter,
    PontemWalletAdapter,
    BloctoWalletAdapter,
    BitkeepWalletAdapter,
    WalletAdapterNetwork,
    AptosWalletAdapter,
    RiseWalletAdapter,
    NightlyWalletAdapter
} from '@manahippo/aptos-wallet-adapter';
import { WalletProvider } from '@manahippo/aptos-wallet-adapter';


const wallets = [
    new PontemWalletAdapter(),
    new BloctoWalletAdapter({
        // network:adapterNetwork,
        bloctoAppId: '03b0f1de-7e31-4b23-8b4a-d58865bcb89e'
    }),
    new FewchaWalletAdapter(),
    new BitkeepWalletAdapter(),
    new MartianWalletAdapter(),
    new AptosWalletAdapter(),
    new RiseWalletAdapter(),
    new NightlyWalletAdapter()
];

const AptosWalletProvider = ({ children }: { children?: ReactNode }) => {
    return (
        <WalletProvider
            wallets={wallets}
            autoConnect={false} /** allow auto wallet connection or not **/
            onError={(error: Error) => {
                console.log('Handle Error Message', error);
            }}
        >
            {children}
        </WalletProvider>
    );
};

export default AptosWalletProvider;
