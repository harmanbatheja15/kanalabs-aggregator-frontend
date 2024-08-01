"use client"
import { WalletKitProvider } from '@mysten/wallet-kit';

export const SuiWalletProvider = (props: any) => {

    return (
        <WalletKitProvider features={['sui:signTransactionBlock']} disableAutoConnect >
            {props?.children}
        </WalletKitProvider>
    );
};

export default SuiWalletProvider;
