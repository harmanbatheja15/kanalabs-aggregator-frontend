import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./ThemeProvider";
import { ThemeSwitcher } from "./Component/ThemeSwitcher";
import { Providers } from "./providers/provider";
import { EthereumProvider } from "./contexts/PolygonWalletContext";
import AptosWalletProvider from "./contexts/AptosWalletContext";
import SolanaWalletProvider from "./contexts/SolanaWalletContext";
import { Inter } from "next/font/google";
import SuiWalletProvider from "./contexts/SuiWalletContext";

const manrope = Manrope({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});
const inter = Inter({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Decentralised Exchange",
  description:
    "Experience the best liquidity and rates on our DeFi platform. Super-fast cross-chain transactions, optimal routes, and passive asset growth.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="scrollbar-hide dark:bg-[#e4f2f3]  bg-[#0C0C0D]  min-h-screen  max-h-full "
    >
      <body>
        <ThemeProvider
          attribute="class"
          enableSystem={false}
          disableTransitionOnChange
          themes={["dark", "light"]}
          defaultTheme="light"
        >
          <SuiWalletProvider>
            <EthereumProvider>
              <AptosWalletProvider>
                <SolanaWalletProvider>
                  <Providers>
                    <main className=" dark:bg-[#e4f2f3] bg-[#0c0c0d] h-full">
                      {children}
                    </main>
                  </Providers>
                </SolanaWalletProvider>
              </AptosWalletProvider>
            </EthereumProvider>
          </SuiWalletProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
