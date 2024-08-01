const ENDPOINTS = {
  EXCHANGEAPIURL: "https://quote-api.jup.ag/v1/quote",
  COINKECGOURL: "https://api.coingecko.com/api/v3/simple/price",
};
export const apiAccess = process.env.REACT_APP_KANALABS_API_KEY;
export default ENDPOINTS;

export const web3AuthClientId = `BHu-fep3dHRLAMMFZNSd7Yudq8imJ_lqtmfRtqUvBJnsk1vj1VSBe5fZFmvmw_YJonvYydTO30mxhC4GWBPnDIk`;
export const REACT_APP_CHAIN_ID_HEX = {
  POLYGON: "0x89",
  BSC: "0x38",
};
export const EVM_CHAIN_ID = {
  POLYGON: "137",
  BINANCE: "56",
  ETHEREUM: "1",
};

export const EVM_RPC_MAINNET = {
  POLYGON: `https://polygon-mainnet.g.alchemy.com/v2/4vVUgB3He49orUzsWg3gIinHY86NGy7i`,
  BINANCE: `https://bsc-dataseed1.ninicoin.io`,
  ETHEREUM: `https://eth-mainnet.g.alchemy.com/v2/NUKQ1VR_hdZlUjzVUN4Gh19diQe2KUQn`,
};
export const OKXPOLYGONSPENDER = "0x3B86917369B83a6892f553609F3c2F439C184e31";

export const TRADEPOSTERLINK ='https://tradebook.kanalabs.io'
export const REFERRAL_BACKEND_URL ='https://referrals-dev.kanalabs.io'