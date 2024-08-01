// import {
//     getAssociatedTokenAddress,
//     createAssociatedTokenAccountInstruction,
//     TOKEN_PROGRAM_ID,
// } from 'spl-token-new';
import { Connection, LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';
import { AptosClient, HexString } from 'aptos';
import axios from 'axios';
import _ from 'lodash';
import { getUiAmount } from './Helper';
import { kanaChainIdList } from 'kana-aggregator-sdk';

const WalletClient = require('aptos-wallet-api/src/wallet-client');

// const aptosRoutesURL = "https://hchqcdjsyk.execute-api.us-east-2.amazonaws.com/swapQuote"
// const aptosSwapURL = "https://nygpjxufwi.execute-api.us-east-2.amazonaws.com/swapInstruction"
const polygon_balance_url = `https://ag.kanalabs.io/getTokenData/getEVMTokenBalance`;
//Commenting for now we need to uncomment this when we move to prod
const APTOS_NETWORK_ID = '1';

const TESTNET_NODE_URL = 'https://fullnode.testnet.aptoslabs.com/v1';
export const MAINNET_NODE_URL = `https://aptos-mainnet.nodereal.io/v1/${process.env.REACT_APP_NODEREAL_KEY}/v1`;
export const MAINNET_ETH_URL = `https://eth-mainnet.nodereal.io/v1/${process.env.REACT_APP_NODEREAL_KEY}`;
export const MAINNET_POLYGON_URL = `https://polygon-mainnet.nodereal.io/v1/${process.env.REACT_APP_NODEREAL_KEY}`;
export const MAINNET_BSC_URL = `https://bsc-mainnet.nodereal.io/v1/${process.env.REACT_APP_NODEREAL_KEY}`;

export const FAUCET_URL = 'https://faucet.testnet.aptoslabs.com/';

export const getSolanaRpcConnection = () => {
    return new Connection(
        `https://bold-delicate-emerald.solana-mainnet.discover.quiknode.pro/${process.env.REACT_APP_SOLANA_QUICKNODE}/`,
        {
            wsEndpoint:
                `wss://bold-delicate-emerald.solana-mainnet.discover.quiknode.pro/${process.env.REACT_APP_SOLANA_QUICKNODE}/`,
            commitment: 'confirmed',
        }
    );
};

export const getAptosRpcEndPoint = () => {
    const MAINNET_NODE_URL = 'https://fullnode.mainnet.aptoslabs.com/v1';
    return new AptosClient(MAINNET_NODE_URL);
};


// export async function getAllSolanaTokenBalanceYield(address: string,tokenAddres:string) {
//     const tokenAccountInfos = await getSolanaRpcConnection().getParsedTokenAccountsByOwner(new PublicKey(address), {
//         programId: TOKEN_PROGRAM_ID,
//     });
//     const tokenDataWithBalance = tokenAccountInfos.value.map((item: any) => {
//         return {
//             mint: item.account.data.parsed?.info?.mint,
//             balance: item.account.data.parsed?.info?.tokenAmount,
//         };
//     });
//     const data = tokenDataWithBalance.find((item) => item.mint === tokenAddres);
//     if (data === undefined) {
//         return { success: true, data: 0 };
//     }
//     return { success: true, data: data?.balance?.uiAmount };
// }

// export async function getAllSolanaTokenBalance(address: string, unFormattedtokenList: any) {
//     let tokenList = _.cloneDeep(unFormattedtokenList);
//     const tokenAccountInfos = await getSolanaRpcConnection().getParsedTokenAccountsByOwner(new PublicKey(address), {
//         programId: TOKEN_PROGRAM_ID,
//     });
//     const nativeSolBalance = await getSolanaRpcConnection().getBalance(new PublicKey(address));
//     const tokenDataWithBalance = tokenAccountInfos.value.map((item: any) => {
//         return {
//             mint: item.account.data.parsed?.info?.mint,
//             balance: item.account.data.parsed?.info?.tokenAmount,
//         };
//     });
//     tokenList.forEach(function (element: { address: any; balance: any }) {
//         if (element) {
//             const data = tokenDataWithBalance.find((item) => item.mint === element?.address);
//             if (element.address === 'So11111111111111111111111111111111111111112') {
//                 element.balance = {
//                     amount: nativeSolBalance,
//                     decimals: 0,
//                     uiAmount: nativeSolBalance / LAMPORTS_PER_SOL,
//                     uiAmountString: nativeSolBalance / LAMPORTS_PER_SOL,
//                 };
//             } else if (data === undefined) {
//                 element.balance = {
//                     amount: 0,
//                     decimals: 0,
//                     uiAmount: 0,
//                     uiAmountString: 0,
//                 };
//             } else {
//                 element.balance = data?.balance;
//             }
//         }
//     });
//     tokenList.sort((a: { balance: { amount: number } }, b: { balance: { amount: number } }) => {
//         return b?.balance?.amount - a?.balance?.amount;
//     });
//     return { success: true, data: tokenList };
// }

export async function getAllAptosTokenBalance(account: any, unFormattedtokenList: any) {
    let tokenList = _.cloneDeep(unFormattedtokenList);
    try {
        let walletClient;
        if (APTOS_NETWORK_ID === '1') {
            walletClient = new WalletClient(MAINNET_NODE_URL, FAUCET_URL);
        } else {
            walletClient = new WalletClient(TESTNET_NODE_URL, FAUCET_URL);
        }

        let coinStoreType = '0x1::coin::CoinStore';
        let res = await walletClient.balance(account.address);
        let amount = 0;
        if (res['success']) {
            let balance = res['balances'];
            tokenList = tokenList.map((item: any) => {
                const tok = coinStoreType + '<' + item.address + '>';
                const obj = balance.find((e: any) => e.coin === tok);
                if (obj) {
                    amount = generateUiAmount(obj.value, item.decimals);
                    item['isAvailable'] = true;
                    item['balance'] = amount;
                    item['aptosBalance'] = amount;
                } else {
                    item['isAvailable'] = false;
                    item['balance'] = 0;
                    item['aptosBalance'] = 0;
                }
                return item;
            });
            tokenList.sort((a: { balance: any }, b: { balance: any }) => {
                return b?.balance - a?.balance;
            });
            return { success: true, data: tokenList };
        } else {
            return { success: false, data: [] };
        }
    } catch (err) {
        //error log
    }
}

export async function getAllPolygonTokenBalance(account: any, tokenlist: Array<any>) {
    try {
        let res = await axios.post(polygon_balance_url, {
            address: account,
            chainId : kanaChainIdList.polygon
        });

        let tokendata = res.data;
        if (tokendata) {
            let nativeTokenBalance = tokendata.nativeBalance.balance;
            let tokenbalancelist = tokendata.tokenBalances;
            tokenlist.forEach(function (element: { address: any; balance: any; uiAmountString: any }) {
                if (element) {
                    const data = tokenbalancelist.find(
                        (item: any) =>
                            String(item.token_address).toLocaleLowerCase() ===
                            String(element?.address).toLocaleLowerCase()
                    );
                    if (data) {
                        element.balance = data?.balance;
                        element.uiAmountString = String(getUiAmount(Number(data?.balance), data.decimals).toFixed(4));
                        // element.balance.uiAmount = generateUiAmount(data?.balance , data?.decimal)
                    } else if (
                        element?.address === '0x0000000000000000000000000000000000000000' ||
                        element?.address === '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'
                    ) {
                        // element.balance = generateUiAmount(nativ)
                        element.balance = nativeTokenBalance;
                        element.uiAmountString = String(getUiAmount(Number(nativeTokenBalance), 18).toFixed(4));
                    } else {
                        element.balance = 0;
                        element.uiAmountString = '0';
                    }
                }
            });

            return { success: true, data: tokenlist };
        } else {
            return { success: false, data: [] };
        }
    } catch (err) {
        console.log(err);
        return { success: false, data: [] };
    }
}

export async function getAptosBalance(account: any) {
    try {
        let walletClient;
        if (APTOS_NETWORK_ID === '1') {
            walletClient = new WalletClient(MAINNET_NODE_URL, FAUCET_URL);
        } else {
            walletClient = new WalletClient(TESTNET_NODE_URL, FAUCET_URL);
        }
        let res = await walletClient.balance(account.address);
        if (res['success']) {
            let balance = res['balances'];
            return { success: true, data: balance };
        } else {
            return { success: false, data: [] };
        }
    } catch (err) {
        //error log
    }
}

export async function signAptosTx(account: any, transaction: any) {
    let walletClient;
    if (APTOS_NETWORK_ID === '1') {
        walletClient = new WalletClient(MAINNET_NODE_URL, FAUCET_URL);
    } else {
        walletClient = new WalletClient(TESTNET_NODE_URL, FAUCET_URL);
    }
    let signedTx = await walletClient.signTransaction(account, transaction);
    return signedTx;
}

export async function getTransactionByHash(hash: string) {
    let walletClient;
    if (APTOS_NETWORK_ID === '1') {
        walletClient = new WalletClient(MAINNET_NODE_URL, FAUCET_URL);
    } else {
        walletClient = new WalletClient(TESTNET_NODE_URL, FAUCET_URL);
    }
    let status = await walletClient.waitForTxnResult(hash);
    return status;
}

export async function getTransactionByHashreferral(hash: string) {
    let walletClient = new WalletClient(MAINNET_NODE_URL, FAUCET_URL);
    let status = await walletClient.waitForTxnResult(hash);
    return status;
}
export async function getTransactionByEVM(hash: string,provider:any) {
    let transactionReceipt = await provider.getTransactionReceipt(hash);
    return transactionReceipt;
}

export function generateUiAmount(number: number, tokenDecimal: number) {
    let divider = '1';
    const ZERO = '0';
    for (let i = 0; i < tokenDecimal; i++) {
        divider += ZERO;
    }
    return number / Number(divider);
}

export function generate_decimal(decimal: number) {
    let num = '1';
    for (let i = 0; i < decimal; i++) {
        num = num.concat('0');
    }
    return Number(num);
}

// export const getOrCreateAssociatedTokenAccount = async (payer: PublicKey, mint: PublicKey, connection: Connection) => {
//     let associatedAccount = await getAssociatedTokenAddress(mint, payer);
//     let accountInfo = await connection.getAccountInfo(associatedAccount);
//     if (!accountInfo) {
//         let ix = await createAssociatedTokenAccountInstruction(payer, associatedAccount, payer, mint);
//         return {
//             address: associatedAccount.toString(),
//             ix: ix,
//         };
//     } else {
//         return {
//             address: associatedAccount.toString(),
//             ix: undefined,
//         };
//     }
// };

export async function getAllAptosTokenBalanceStaking(account: any, tokenlist: any) {
    try {
        let walletClient = new WalletClient(MAINNET_NODE_URL, FAUCET_URL);
        let coinStoreType = '0x1::coin::CoinStore';
        let res = await walletClient.balance(account.address);
        let amount = 0;
        if (res['success']) {
            let balance = res['balances'];
            tokenlist = tokenlist.map((item: any) => {
                const tok = coinStoreType + '<' + item.address + '>';
                const obj = balance.find((e: any) => e.coin === tok);
                if (obj) {
                    amount = generateUiAmount(obj.value, item.decimals);
                    item['isAvailable'] = true;
                    item['balance'] = amount;
                } else {
                    item['isAvailable'] = false;
                    item['balance'] = 0;
                }
                return item;
            });
            return { success: true, data: tokenlist };
        } else {
            return { success: false, data: [] };
        }
    } catch (err) {
        //error log
    }
}

export async function getTransactionByHashStaking(hash: string) {
    let walletClient = new WalletClient(MAINNET_NODE_URL, FAUCET_URL);
    let status = await walletClient.waitForTxnResult(hash);
    return status;
}

export const validateSolAddress = async (publickey: string, connection: Connection) => {
    try {
        let pubkey = new PublicKey(publickey);
        let valid = await connection.getAccountInfo(pubkey);
        if (valid == null) {
            throw new Error(`Solana Publickey(Address) is invalid or Not Initialized`);
        }
    } catch (error: any) {
        throw new Error(`Solana Publickey(Address) is invalid or Not Initialized`);
    }
};

export const validateAptAddress = async (hexAddress: any, client: AptosClient) => {
    try {
        await client.getAccount(new HexString(hexAddress));
    } catch (error: any) {
        throw new Error(`Aptos HexString(Address) is invalid or Not Initialized`);
    }
};

export const validateEvmHome = async (address: any) => {};

export const isValidNumber = (value: number | string) => {
    if (typeof value === 'number') return true;

    if (typeof value !== 'string') {
        return false;
    }

    if (value.trim() === '') {
        return false;
    }

    return !isNaN(value as any);
};

  export const generateShortURL = async (url:any) => {
    try {
      const headers = {
        'apikey': process.env.REACT_APP_API_LAYER_KEY!,
      };
      const response = await axios.post('https://api.apilayer.com/short_url/hash', url, {
        headers: headers,
      });
  return response.data

    } catch (error) {
      console.log('error', error);
    }
  }
