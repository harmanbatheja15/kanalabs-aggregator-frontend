import { ReactNode } from "react";
import { WalletProvider, useWallet } from "@solana/wallet-adapter-react";
import {
  BloctoWalletAdapter,
  GlowWalletAdapter,
  PhantomWalletAdapter,
} from "@solana/wallet-adapter-wallets";

const wallets = [
  new PhantomWalletAdapter(),
  new BloctoWalletAdapter(),
  new GlowWalletAdapter(),
];
const SolanaWalletProvider = ({ children }: { children?: ReactNode }) => {
  return (
    <WalletProvider wallets={wallets} autoConnect={false}>
      {children}
    </WalletProvider>
  );
};

export default SolanaWalletProvider;
// export const useSolanaWallet = useWallet;
