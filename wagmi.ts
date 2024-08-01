import { flattenDiagnosticMessageText } from 'typescript'
import { http, createConfig, cookieStorage, createStorage } from 'wagmi'
import { bsc, bscTestnet, mainnet, polygon, metachain } from 'wagmi/chains' // Import MetaMask chain
import { coinbaseWallet,  metaMask } from 'wagmi/connectors' // Fix casing for metaMask

export const config = createConfig({
  chains: [polygon, mainnet, bsc, bscTestnet, metachain], // Add MetaMask chain to the list
  connectors: [
    metaMask(),
    coinbaseWallet({
      appName: 'wagmi',
    }),
  ],
  transports: {
    [mainnet.id]: http(),
    [polygon.id]: http(),
    [bsc.id]: http(),
    [bscTestnet.id]: http(),
    [metachain.id]:http()
  },
})


