import { Connection, LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';
// import {
//     ASSOCIATED_TOKEN_PROGRAM_ID,
//     TOKEN_PROGRAM_ID,
//     getAssociatedTokenAddress,
//     createAssociatedTokenAccountInstruction,
// } from 'spl-token-new';
import axios from 'axios';
import { BlockchainType } from '../constants/index';
import { getAptosRpcEndPoint } from './utils';
import { HexString } from 'aptos';
import { add } from 'lodash';
import { kanaChainIdList } from 'kana-aggregator-sdk';
import { ethers } from 'ethers';
var kanaagsdk = require('kana-aggregator-sdk');

const polygon_balance_url = `https://ag.kanalabs.io/getTokenData/getEVMTokenBalance`;
export const lendAndBorrowAssets = async () => {
    const marketfetch = await kanaagsdk.fetchAllReserveDetails();
    const gun = await kanaagsdk.getReserveTokenListData(marketfetch.data.data);
    let res = {
        reserveDetails: marketfetch.data.data,
        reserveTokenList: gun,
    };
    return res;
};

export const getRecommendedMarketsData = async (received: any) => {
    const marketfetch = await kanaagsdk.fetchAllReserveDetails();
    const result = await kanaagsdk.getRecommendedMarketsData(
        marketfetch.data.data,
        received.tokenMint,
        received.isSupply
    );
    return result;
};

export const getStakeAssets = async (received: any) => {
    const data = await kanaagsdk.getStakingDetails(received.chain, 1);
    return data;
};

export const performStakeAction = async (
    network: any,
    action: any,
    amount: any,
    chain: any,
    accountInstring: any,
    finance: any
) => {
    const data = await kanaagsdk.getStakingPayload(network, action, amount, chain, accountInstring, finance);
    return data;
};

export const getSupplyData = async (pub: any, tokenMint: any) => {
    let walletPublicKey;
    let environment;
    const marketObligationProfiles = await kanaagsdk.getMarketObligationProfiles(
        (walletPublicKey = pub),
        (tokenMint = tokenMint),
        (environment = 'production')
    );
    return marketObligationProfiles;
};

export const performLendingAction = async (
    marketName: any,
    userPublicKey: any,
    action: any,
    tokenId: any,
    amount: any,
    isMax: any,
    isProduction: any
) => {
    const res = await kanaagsdk.marketsLendingAction(
        marketName,
        userPublicKey,
        action,
        tokenId,
        amount,
        isMax,
        isProduction
    );
    return res;
};

export const isObjectNonEmpty = (data: any): boolean => {
    return data && typeof data == 'object' && Object.keys(data).length > 0 ? true : false;
};

// export const getTokenList = async () => {
//     const tokenList = new tokenListProvider().resolve().then((tokens) => {
//         return tokens.filterByClusterSlug('mainnet-beta').getList();
//     });

//     return tokenList;
// };

// export const getAvailableTokenInWallet = async (connection: Connection, publicKey: PublicKey, tokenList: any[]) => {
//     try {
//         let allTokens: {};
//         let token: any[] = [];
//         let NFT: any[] = [];
//         let numberOfTokenswrapped: any;
//         let totalSolBalance: any;
//         var numberOfSOLTokens = await getBalance(connection, publicKey);

//         const { filteredTokenList } = await getFilteredPriceList();

//         if (numberOfSOLTokens % 1 === 0) {
//             numberOfSOLTokens = numberOfSOLTokens + 0.0;
//         }
//         const solanaPrice = await getDollarPriceBySymbol('SOL');

//         let responseTwo = await connection.getParsedTokenAccountsByOwner(publicKey, { programId: TOKEN_PROGRAM_ID });

//         await Promise.all(
//             responseTwo.value.map(async (accountInfo): Promise<any> => {
//                 const pubKey = accountInfo.pubkey.toBase58();
//                 const mint = accountInfo.account.data['parsed']['info']['mint'];
//                 // if (mint == "")
//                 const numberOfTokens = accountInfo.account.data['parsed']['info']['tokenAmount']['uiAmount'];
//                 if (mint === 'So11111111111111111111111111111111111111112') {
//                     totalSolBalance = numberOfTokens + numberOfSOLTokens;
//                 }
//                 totalSolBalance = numberOfSOLTokens;
//                 //const owner = accountInfo.account.data["parsed"]["info"]["owner"]
//                 const decimals = JSON.stringify(accountInfo.account.data['parsed']['info']['tokenAmount']['decimals']);
//                 var amount = accountInfo.account.data.parsed.info.tokenAmount.amount;

//                 var symbolDetails;
//                 var dollarPrice;

//                 tokenList?.map((index) => {
//                     if (index.address === mint) {
//                         symbolDetails = index;
//                     }
//                 });
//                 if ((!isObjectNonEmpty(symbolDetails) || symbolDetails === undefined) && decimals === '0') {
//                     if (amount === 1) {
//                         const NFT1 = {
//                             NFTMint: mint,
//                         };
//                         NFT.push(NFT1);
//                         return;
//                     }
//                     return;
//                 } else if (
//                     (!isObjectNonEmpty(symbolDetails) || symbolDetails === undefined) &&
//                     decimals === '0' &&
//                     amount !== '1'
//                 ) {
//                     return;
//                 }

//                 if (!isObjectNonEmpty(symbolDetails) || symbolDetails === undefined) {
//                     symbolDetails = {
//                         symbol: mint.substring(0, 4) === 'mSoL' ? 'mSoL' : 'Unknown Solana Token',
//                         logoURI: '',
//                     };
//                     dollarPrice = 0;
//                 }

//                 if (filteredTokenList.length > 0) {
//                     const filteredToken = filteredTokenList.find((x: any) => x.address === mint);
//                     if (filteredToken) {
//                         dollarPrice = Number(filteredToken.dollar_price);
//                     }
//                 }

//                 if (isObjectNonEmpty(symbolDetails)) {
//                     var token1 = {
//                         //@ts-ignore
//                         symbol: symbolDetails?.name === 'Wrapped SOL' ? symbolDetails?.name : symbolDetails?.symbol,
//                         address: mint,
//                         pubkey: pubKey,
//                         dollarBalance: dollarPrice !== undefined ? dollarPrice * numberOfTokens : 0,
//                         numberOfTokens: numberOfTokens,
//                         selected: false,
//                         perTokenDollarAmount: dollarPrice !== undefined ? dollarPrice : 0,
//                         logoURI: symbolDetails?.logoURI,
//                     };
//                     token.push(token1);
//                 }
//             })
//         );
//         let token1 = {
//             symbol: 'SOL',
//             address: 'So11111111111111111111111111111111111111112',
//             pubkey: publicKey.toBase58(),
//             dollarBalance: solanaPrice * numberOfSOLTokens,
//             numberOfTokens: totalSolBalance,
//             selected: true,
//             perTokenDollarAmount: solanaPrice,
//             logoURI:
//                 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png',
//         };
//         token.push(token1);

//         token.sort((firstEl: any, secondEl: any) => {
//             if (firstEl.dollarBalance > secondEl.dollarBalance) {
//                 return -1;
//             }
//             if (firstEl.dollarBalance < secondEl.dollarBalance) {
//                 return 1;
//             }
//             return 0;
//         });
//         allTokens = { token, NFT };
//         return allTokens;
//     } catch (error) {
//         console.log('Error in getting Available token in wallet', error);
//     }
// };

export const getBalance = async (connection: Connection, publicKey: PublicKey) => {
    const lamports: any = await connection.getBalance(publicKey).catch((err) => {
        console.log(`Error getbalance: ${err}`);
    });
    const sol = lamports / LAMPORTS_PER_SOL;
    return sol;
};

export const getDollarPrice = async (token: string) => {
    const USDPrice = await axios
        .get(`https://api.coingecko.com/api/v3/simple/price?ids=${token}&vs_currencies=USD`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log('Error in getDollarPrice: ', error);
            return null;
        });
    return USDPrice;
};

export const getDollarPriceBySymbol = async (tokenSymbol: string) => {
    const { filteredTokenList } = await getFilteredPriceList();
    let dollarPrice = 0;
    if (filteredTokenList.length > 0) {
        const filteredToken = filteredTokenList.find((x: any) => x.symbol === tokenSymbol);
        if (filteredToken) {
            dollarPrice = Number(filteredToken.dollar_price);
        }
    }
    return dollarPrice;
};

export const getTokenDecimals = async function (connection: Connection, mint: PublicKey) {
    const tokenSupply = await connection.getTokenSupply(mint);
    const decimal = tokenSupply.value.decimals;
    return decimal;
};

export function getUiAmount(number: number, tokenDecimal: number) {
    return number / Math.pow(10, tokenDecimal);
}

export const getDecimalAmount = async function (connection: Connection, mint: PublicKey, tokenamount: any) {
    const tokenSupply = await connection.getTokenSupply(mint);
    const decimal = tokenSupply.value.decimals;
    const decimalAmount = tokenamount * 10 ** decimal;
    return decimalAmount;
};

export const swapSOLTokenMaxCalculation = (maxTokens: number) => {
    const newAmount = maxTokens * 1000000000;
    const afterDetecting = newAmount > 5000000 ? newAmount - 5000000 : newAmount;
    const addingLamports = afterDetecting / 1000000000;
    return addingLamports;
};

export const swapAPTTokenMaxCalculation = (maxTokens: number) => {
    const newAmount = maxTokens * 100000000;
    const afterDetecting = newAmount > 1000000 ? newAmount - 1000000 : newAmount;
    const addingLamports = afterDetecting / 100000000;
    return addingLamports;
};

export const swapNativeTokenMaxCalulation = (maxTokens: number) => {
    const newAmount = maxTokens * 1000000000000000000;
    const afterDetecting = newAmount > 10000000000000000 ? newAmount - 10000000000000000 : newAmount;
    const addingLamports = afterDetecting / 1000000000000000000;
    return addingLamports;
};

export const trimToFloor = (value: any, toFloor: number = 7) => {
    value = Math.floor(value * Math.pow(10, toFloor)) / Math.pow(10, toFloor);
    if (Math.abs(value) < 1.0) {
        let e = parseInt(value.toString().split('e-')[1]);
        if (e) {
            value *= Math.pow(10, e - 1);
            value = '0.' + new Array(e).join('0') + value.toString().substring(2);
        }
    } else {
        let e = parseInt(value.toString().split('+')[1]);
        if (e > 20) {
            e -= 20;
            value /= Math.pow(10, e);
            value += new Array(e + 1).join('0');
        }
    }
    return value;
};

export const getFilteredPriceList = async () => {
    const filteredList = await axios
        .get('https://ag.kanalabs.io/getTokenData/getTokenList')
        .then((response) => {
            return response.data;
        })
        .catch(async (error) => {
            const refreshFilteredList = await axios
                .get('https://ag.kanalabs.io/getTokenData/refreshToken')
                .then(async () => {
                    const filteredList: any = await getFilteredPriceList();
                    return filteredList;
                })
                .catch((error) => {
                    console.log('Error in getrefreshFilteredList: ', error);
                    return [];
                });
            console.log('Error in getFilteredPriceList: ', error);
            return refreshFilteredList;
        });
    return filteredList;
};

export const saveTransactionCount = async (received: any) => {
    let data = await axios.post('https://ag.kanalabs.io/leaderboard/createTransactionCount', received);
    return data?.data;
};

export const sleep = (ms: any) => new Promise((resolve) => setTimeout(resolve, ms));

export const currencyFormatUSD = (value: any) => {
    try {
        return Math.abs(Number(value)) >= 1.0e9
            ? (Math.abs(Number(value)) / 1.0e9).toFixed(2) + 'B'
            : // Six Zeroes for Millions
            Math.abs(Number(value)) >= 1.0e6
            ? (Math.abs(Number(value)) / 1.0e6).toFixed(2) + 'M'
            : // Three Zeroes for Thousands
            Math.abs(Number(value)) >= 1.0e3
            ? (Math.abs(Number(value)) / 1.0e3).toFixed(2) + 'K'
            : Math.abs(Number(value)).toFixed(2);
    } catch (error) {
        console.log('Error in currencyFormatUSD::' + error);
    }
};

// export const validataSolanaTokenAddress = async (ownerKey: PublicKey, connection: Connection, mint: PublicKey) => {
//     try {
//         const associatedTokenAccount = await getAssociatedTokenAddress(
//             mint,
//             new PublicKey(ownerKey),
//             true,
//             TOKEN_PROGRAM_ID,
//             ASSOCIATED_TOKEN_PROGRAM_ID
//         );
//         const tokenAccountInfo = await connection.getAccountInfo(associatedTokenAccount);
//         if (tokenAccountInfo != null) {
//             return { status: true };
//         } else {
//             const instruction = createAssociatedTokenAccountInstruction(
//                 ownerKey,
//                 associatedTokenAccount,
//                 ownerKey,
//                 mint
//             );
//             return { status: false, instruction: instruction };
//         }
//     } catch (error) {
//         console.log(error);
//         return { status: false };
//     }
// };

export const validateSolAddress = async (address: string) => {
    try {
        let pubkey = new PublicKey(address);
        let isSolana = PublicKey.isOnCurve(pubkey.toBuffer());
        return isSolana;
    } catch (error) {
        return false;
    }
};

export const validateEVMAddress = async (address: string): Promise<boolean> => {
    try {
      const pattern = /^0x[a-fA-F0-9]{40}$/;
      return pattern.test(address);
    } catch (error) {
      console.error('Error validating EVM address:', error);
      return false;
    }
  };
  
export const submitTransactionData = async (
    walletAddress: string,
    transactionType: 'crosschainswap' | 'swap',
    chain: number,
    amount: number,
    transactionHash: string,
    token: string,
    tokenName: string,
    fromchain: string,
    tochain: string,
    sourceToken: string,
    targetToken: string,
    sourceValue: string,
    targetValue: string,
    targetTokenname: string
) => {
    try {
        const countData = {
            walletaddress: walletAddress,
            transactiontype: transactionType,
            transactionid: transactionHash,
            chain: chain,
            amount: amount,
            tokenmint: token,
            tokenname: tokenName,
            network: '1',
            fromchain: fromchain,
            tochain: tochain,
            sourceToken: sourceToken,
            targetToken: targetToken,
            sourceValue: sourceValue,
            targetValue: targetValue,
            targetTokenname: targetTokenname,
        };
        await saveTransactionCount(countData);
    } catch (error) {
        console.error('Error in sending countData');
    }
};

export const getAptosNativeBalance = async (address: any) => {
    const coinStoreType = '0x1::coin::CoinStore';
    let resources = await getAptosRpcEndPoint().getAccountResources(new HexString(address));
    let coinResources = resources.filter((r) => r.type.startsWith(coinStoreType));
    let balance = 0;
    coinResources.forEach((resource) => {
        if (resource?.type === '0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>') {
            //@ts-ignore
            balance = resource?.data?.coin?.value;
        }
    });
    return balance;
};

export const getPolygonNativeBalance = async (address: any) => {
    let res = await axios.post(polygon_balance_url, {
        address: address,
        chainId : kanaChainIdList.polygon
    });

    let tokendata = res.data;
    let nativeTokenBalance = 0;
    if (tokendata) {
        nativeTokenBalance = tokendata.nativeBalance.balance;
    }
    return nativeTokenBalance;
};

export const reduceAddressLength = (data?: string) => {
    if (data) {
      const length = data.length;
      return data.substring(0, 4) + '....' + data.substring(length - 5, length - 0);
    }
    return;
  };

  export const getERC20Allowance = async (
    chainId: any,
    tokenAddress: any,
    signer: any,
    spender: any,
    bridgeAmount:any
  ) => {
    let provider:any;
    switch (chainId) {
      case kanaChainIdList.polygon: {
        provider = new ethers.providers.JsonRpcProvider(
      `https://polygon-mainnet.nodereal.io/v1/${process.env.REACT_APP_NODEREAL_KEY}`
    );
        break;
      }
      case kanaChainIdList.binance: {
        provider = new ethers.providers.JsonRpcProvider(
          `https://bsc-mainnet.nodereal.io/v1/${process.env.REACT_APP_NODEREAL_KEY}`
        );
        break;
      }
      case kanaChainIdList.ethereum: {
        provider = new ethers.providers.JsonRpcProvider(
          `https://eth-mainnet.nodereal.io/v1/${process.env.REACT_APP_NODEREAL_KEY}`
        );
        break;
      }
    }
    let isAllowed = false;
    if (tokenAddress === '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee') {
        isAllowed = true;
    } else {
    const contract = new ethers.Contract(tokenAddress, [
      'function allowance(address owner, address spender) external view returns (uint256)',
    ], provider);
    const allowance = await contract.allowance(signer,spender);
    if (Number(parseInt(allowance._hex)) >= bridgeAmount) {
      isAllowed = true;
    }
}
    return isAllowed;
  }