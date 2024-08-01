import { Environment, getTokensByChainId } from 'kana-aggregator-sdk';
import { apiAccess } from './constants';

export const getTokensAcrossAllChain = async (chainId: number) => {
    var tokenList = await getTokensByChainId(apiAccess,chainId, Environment.DEV);
    return tokenList.data
}