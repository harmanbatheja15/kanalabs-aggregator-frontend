import { useMemo } from 'react';
import {
    MartianWalletAdapter,
    FewchaWalletAdapter,
    PontemWalletAdapter,
    BloctoWalletAdapter,
    BitkeepWalletAdapter,
    AptosWalletAdapter,
    WalletAdapterNetwork,
    NightlyWalletAdapter
} from '@manahippo/aptos-wallet-adapter';


const useAptosWallet = () => {
    const aptos_wallets = useMemo(
        () => [
            new BloctoWalletAdapter({
                // network: WalletAdapterNetwork.Mainnet,
                bloctoAppId:'03b0f1de-7e31-4b23-8b4a-d58865bcb89e'
            }),
            new FewchaWalletAdapter(),
            new BitkeepWalletAdapter(),
            // new HippoWalletAdapter(),
            new MartianWalletAdapter(),
            //  new AptosWalletAdapter(), 
            // new HippoExtensionWalletAdapter(),
            new PontemWalletAdapter(),
            new NightlyWalletAdapter(),
            // getSolletWallet({ network }),
            // getSolletExtensionWallet({ network }),
        ],
        []
    );

    return { aptos_wallets };
};

//   const useWalletAdapters = () => {
//     const { wallets } = useAptosWallet()
//     return wallets.map(({name, adapter}) => {
//       const walletAdapter = adapter()
//       return {name, walletAdapter}
//     })
//   }

export { useAptosWallet };
