import axios from 'axios';
import { getUiAmount, trimToFloor } from './Helper';
import { toast } from "react-toastify";
import { kanaChainIdList } from 'kana-aggregator-sdk';

const polygon_balance_url = `https://ag.kanalabs.io/getTokenData/getEVMTokenBalance`;

export const SolTokenMaxCalc = (maxTokens: number) => {
    const newAmount = maxTokens * 1000000000;
    if(newAmount > 10000000){
        const afterDetecting = newAmount - 10000000;
        const addingLamports = afterDetecting / 1000000000;
        return addingLamports;
    } else {
        toast.error("Need minimum SOL balance of 0.01 SOL");
        return;
    }
};

export const AptTokenMaxCalc = (maxTokens: number) => {
    const newAmount = maxTokens * 100000000;
    if(newAmount > 5000000){
        const afterDetecting = newAmount - 5000000;
        const addingLamports = afterDetecting / 100000000;
        return addingLamports;
    } else {
        toast.error("Need minimum APT balance of 0.05 APT");
        return;
    }
};

export const MaticTokenMaxCalc = (maxTokens: number) => {
    const newAmount = maxTokens * 1000000000000000000;
    const afterDetecting = newAmount > 10000000000000000 ? newAmount - 10000000000000000 : newAmount;
    const addingLamports = afterDetecting / 1000000000000000000;
    return addingLamports;
};

export const preventPasteNegativeNumber = (e: any) => {
    const clipboardData = e.clipboardData || (window as any).clipboardData;
    const value = clipboardData.getData('text');
    if (!value || value.includes('-')) {
        e.preventDefault();
    } else {
        const pastedData = parseFloat(value);
        if (pastedData < 0) {
            e.preventDefault();
        }
    }
};

export async function getAllPolygonTokenBalance(account: any, tokenList: Array<any>) {
    try {
        let res = await axios.post(polygon_balance_url, {
            address: account,
            chainId : kanaChainIdList.polygon
        });

        let tokenData = res.data;
        if (tokenData) {
            let nativeTokenBalance = tokenData.nativeBalance.balance;
            let tokenBalanceList = tokenData.tokenBalances;

            tokenList.forEach(function (element: { address: any; balance: any; uiAmountString: any }) {
                if (element) {
                    const data = tokenBalanceList.find(
                        (item: any) =>
                            String(item.token_address).toLocaleLowerCase() ===
                            String(element?.address).toLocaleLowerCase()
                    );
                    if (data) {
                        element.balance = data?.balance;
                        element.uiAmountString = String(getUiAmount(Number(data?.balance), data.decimals).toFixed(4));
                    } else if (
                        element?.address === '0x0000000000000000000000000000000000000000' ||
                        element?.address === '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'
                    ) {
                        element.balance = nativeTokenBalance;
                        element.uiAmountString = String(getUiAmount(Number(nativeTokenBalance), 18).toFixed(4));
                    } else {
                        element.balance = 0;
                        element.uiAmountString = '0';
                    }
                }
            });

            return { success: true, data: tokenList };
        } else {
            return { success: false, data: [] };
        }
    } catch (err) {
        console.log(err);
        return { success: false, data: [] };
    }
}

export const getCrossChainSolanaRoute = async (route: any, solanaTokensList: any) => {
    let obj: any = {};
    (route.marketInfos || []).map((market: any, index: any) => {
        let inputToken = solanaTokensList?.find((x: any) => x?.address === market.inputMint);
        let outputToken = solanaTokensList?.find((x: any) => x?.address === market.outputMint);
        if (index === 0) {
            if (market.firstAmm) {
                obj.label = market.firstAmm.label;
                if (market.secondAmm) {
                    obj.label = obj.label + ' X ' + market.secondAmm.label;
                    if (market.thirdAmm) {
                        obj.label = obj.label + ' X ' + market.thirdAmm.label;
                    }
                }
            } else {
                obj.label = market.label;
            }

            obj.paths =
                trimToFloor(getUiAmount(Number(market.inAmount), inputToken?.decimals), 4) +
                ' ' +
                inputToken?.symbol +
                ' -> ' +
                trimToFloor(getUiAmount(Number(market.outAmount), outputToken?.decimals), 4) +
                ' ' +
                outputToken?.symbol;
            obj.inputTokenAddress = market.inputMint;
            obj.outputTokenAddress = market.outputMint;
        } else {
            obj.label = obj.label + ' X ' + market.label;
            obj.paths =
                obj.paths +
                ' -> ' +
                trimToFloor(getUiAmount(Number(market.outAmount), outputToken?.decimals), 4) +
                ' ' +
                outputToken?.symbol;
            obj.outputTokenAddress = market.outputMint;
        }
    });
    obj.outputValue = route.outAmount;
    obj.data = route;
    obj.kanaFee = 0;
    obj.outAmountWithSlippage = route.otherAmountThreshold;
    return obj;
};

export const getCrossChainAptosRoute = async (route: any, aptosTokensList: any) => {
    let obj: any = {};
    obj.outputValue = route.outputAmount;
    obj.minimumReceivedAmount =
        Number(route.outAmountWithSlippage) - (Number(route.kanaFee) + Number(route.integratorFee));
    obj.expectedAmount = Number(route.outputAmount) - (Number(route.kanaFee) + Number(route.integratorFee));
    obj.kanaFee = route.kanaFee;
    obj.integratorFee = route.integratorFee;
    obj.data = route;
    obj.label = '';
    obj.paths = '';

    (route.marketInfos || []).map((marketInfo: any, index: any) => {
        let isLastIndex = route.marketInfos.length - 1 === index;
        let isFirstIndex = index === 0;
        //Need input token for first index only
        let inputToken = isFirstIndex ? (aptosTokensList || []).find((x: any) => x.address === marketInfo.coinX) : '';
        let outputToken = (aptosTokensList || []).find((x: any) => x.address === marketInfo.coinY);

        obj.label = obj.label + marketInfo.amm + (!isLastIndex && route.marketInfos.length > 1 ? ' X ' : '');
        obj.paths =
            obj.paths +
            (isFirstIndex
                ? trimToFloor(getUiAmount(Number(marketInfo.inputAmount), inputToken?.decimals), 4) +
                  ' ' +
                  inputToken?.symbol
                : '') +
            ' -> ' +
            (trimToFloor(getUiAmount(Number(marketInfo.outputAmount), outputToken?.decimals), 4) +
                ' ' +
                outputToken?.symbol);
        isFirstIndex && (obj.inputTokenAddress = marketInfo.coinX);
        obj.outputTokenAddress = marketInfo.coinY;
    });

    return obj;
};

export const getCrossChainPolygonRoute = async (route: any, polygonTokensList: any) => {
    let obj: any = {};
    obj.outputValue = Number(route.toTokenAmount);
    obj.minimumReceivedAmount = Number(route.withSlippage);
    // obj.expectedAmount = Number(route.outputAmount) - (Number(route.kanaFee) + Number(route.integratorFee));
    obj.kanaFee = route.kanaFee;
    obj.integratorFee = route.integratorFee;
    obj.data = route;
    obj.label = '';
    obj.paths = '';
    (route.protocols[0] || []).map((marketInfo: any, index: any) => {
        let isLastIndex = route.protocols[0].length - 1 === index;
        let isFirstIndex = index === 0;
        //Need input token for first index only
        let inputTokenSymbol = isFirstIndex
            ? (polygonTokensList || []).find(
                  (x: any) =>
                      String(x?.address).toLocaleLowerCase() ===
                      String(marketInfo[0].fromTokenAddress).toLocaleLowerCase()
              )?.symbol
            : '';

        let outputTokenSymbol = (polygonTokensList || []).find(
            (x: any) => x?.address.toLocaleLowerCase() === marketInfo[0].toTokenAddress.toLocaleLowerCase()
        )?.symbol;

        obj.label = obj.label + marketInfo[0].name + (!isLastIndex && route.protocols[0].length > 1 ? ' X ' : '');
        obj.paths = obj.paths + (isFirstIndex ? inputTokenSymbol : '') + ' -> ' + outputTokenSymbol;
        isFirstIndex && (obj.inputTokenAddress = marketInfo[0].fromTokenAddress);
        obj.outputTokenAddress = marketInfo[0].toTokenAddress;
    });

    return obj;
};

export const getPolygonStructuredRoutes = async (routes: any, polygonTokensList: any) => {
    let finalArr: any = [];
    (routes || []).map(async (route: any, index: any) => {
        let obj: any = {};
        obj.index = index;
        obj.outputValue = Number(route.toTokenAmount);
        obj.minimumReceivedAmount = Number(route.withSlippage);
        obj.data = route;
        obj.label = '';
        obj.paths = '';
        (route.protocols[0] || []).map((marketInfo: any, index: any) => {
            let isLastIndex = route.protocols[0].length - 1 === index;
            let isFirstIndex = index === 0;
            //Need input token for first index only
            let inputTokenSymbol = isFirstIndex
                ? (polygonTokensList || []).find(
                      (x: any) =>
                          String(x?.address).toLocaleLowerCase() ===
                          String(marketInfo[0].fromTokenAddress).toLocaleLowerCase()
                  )?.symbol
                : '';

            let outputTokenSymbol = (polygonTokensList || []).find(
                (x: any) => x?.address.toLocaleLowerCase() === marketInfo[0].toTokenAddress.toLocaleLowerCase()
            )?.symbol;
            obj.label = obj.label + marketInfo[0].name + (!isLastIndex && route.protocols[0].length > 1 ? ' X ' : '');
            obj.paths = obj.paths + (isFirstIndex ? inputTokenSymbol : '') + ' -> ' + outputTokenSymbol;
            isFirstIndex && (obj.inputTokenAddress = marketInfo[0].fromTokenAddress);
            obj.outputTokenAddress = marketInfo[0].toTokenAddress;
        });
        finalArr.push(obj);
    });

    return finalArr;
};

export const getAptosStructuredRoutes = async (routes: any, aptosTokensList: any) => {
    let finalArr: any = [];
    (routes || []).map(async (route: any, index: any) => {
        let obj: any = {};
        obj.index = index;
        obj.outputValue = route.outputAmount;

        obj.minimumReceivedAmount =
            Number(route.outAmountWithSlippage) - (Number(route.kanaFee) + Number(route.integratorFee));

        obj.expectedAmount = Number(route.outputAmount) - (Number(route.kanaFee) + Number(route.integratorFee)); //Need clarity
        obj.kanaFee = route.kanaFee;
        obj.integratorFee = route.integratorFee;
        obj.data = route;
        obj.label = '';
        obj.paths = '';
        (route.marketInfos || []).map((marketInfo: any, index: any) => {
            let isLastIndex = route.marketInfos.length - 1 === index;
            let isFirstIndex = index === 0;
            //Need input token for first index only
            let inputTokenSymbol = isFirstIndex
                ? (aptosTokensList || []).find((x: any) => x?.address === marketInfo.coinX)?.symbol
                : '';
            let outputTokenSymbol = (aptosTokensList || []).find((x: any) => x?.address === marketInfo.coinY)?.symbol;

            obj.label = obj.label + marketInfo.amm + (!isLastIndex && route.marketInfos.length > 1 ? ' X ' : '');
            obj.paths = obj.paths + (isFirstIndex ? inputTokenSymbol : '') + ' -> ' + outputTokenSymbol;
            isFirstIndex && (obj.inputTokenAddress = marketInfo.coinX);
            obj.outputTokenAddress = marketInfo.coinY;
        });
        finalArr.push(obj);
    });
    return finalArr;
};

export const getSolanaStructuredRoutes = async (routes: any, solanaTokensList: any) => {
    let finalArr: any = [];
    (routes || []).map(async (route: any, mainIdx: any) => {
        let obj: any = {};
        obj.index = mainIdx;
        obj.outputValue = route.outAmount;
        obj.data = route;
        obj.outAmountWithSlippage = route.outAmount;
        obj.label = '';
        obj.paths = '';

        (route.marketInfos || []).map((market: any, index: any) => {
            let isLastIndex = route.marketInfos.length - 1 === index;
            let isFirstIndex = index === 0;
            let inputToken = isFirstIndex
                ? (solanaTokensList || [])?.find((x: any) => x?.address === market?.inputMint)?.symbol
                : '';
            let outputToken = (solanaTokensList || [])?.find((x: any) => x?.address === market?.outputMint)?.symbol;

            obj.label = obj.label + market.label + (!isLastIndex && route.marketInfos.length > 1 ? ' X ' : '');
            obj.paths = obj.paths + (isFirstIndex ? inputToken : '') + ' -> ' + outputToken;
            isFirstIndex && (obj.inputTokenAddress = market.inputMint);
            obj.outputTokenAddress = market.outputMint;
            obj.kanaFee = market?.platformFee?.amount;
        });
        finalArr.push(obj);
    });

    return finalArr;
};


export const getPolygonStructuredRoutesStake = async (routes: any, polygonTokensList: any) => {
    let finalArr: any = [];
    (routes || []).map(async (route: any, index: any) => {
        let obj: any = {};
        obj.index = index;
        obj.inAmount = Number(route.fromTokenAmount);
        obj.outAmount = Number(route.toTokenAmount);
        (route.protocols[0] || []).map((marketInfo: any, index: any) => {
            let isLastIndex = route.protocols[0].length - 1 === index;
            let isFirstIndex = index === 0;
            //Need input token for first index only
            let inputTokenSymbol = isFirstIndex
                ? (polygonTokensList || []).find(
                      (x: any) =>
                          String(x?.address).toLocaleLowerCase() ===
                          String(marketInfo[0].fromTokenAddress).toLocaleLowerCase()
                  )?.symbol
                : '';

            let outputTokenSymbol = (polygonTokensList || []).find(
                (x: any) => x?.address.toLocaleLowerCase() === marketInfo[0].toTokenAddress.toLocaleLowerCase()
            )?.symbol;
            obj.label = obj.label + marketInfo[0].name + (!isLastIndex && route.protocols[0].length > 1 ? ' X ' : '');
            obj.paths = obj.paths + (isFirstIndex ? inputTokenSymbol : '') + ' -> ' + outputTokenSymbol;
            isFirstIndex && (obj.inputTokenAddress = marketInfo[0].fromTokenAddress);
            obj.outputTokenAddress = marketInfo[0].toTokenAddress;
        });
        finalArr.push(obj);
    });

    return finalArr;
};