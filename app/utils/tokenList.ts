export const SOLANA_TOKEN_1 = {
    chainId: 101,
    address: 'So11111111111111111111111111111111111111112',
    symbol: 'SOL',
    name: 'Wrapped SOL',
    decimals: 9,
    logoURI: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png',
    extensions: {
        coingeckoId: 'solana',
        serumV3Usdc: '9wFFyRfZBsuAha4YcuxcXLKwMxJR43S7fPfQLusDBzvT',
        serumV3Usdt: 'HWHvQhFmJB3NUcu1aihKmrKegfVxBEHzwVX6yZCKEsi1',
        website: 'https://solana.com/',
    },
};

export const SOLANA_TOKEN_2 = {
    chainId: 101,
    address: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
    symbol: 'USDC',
    name: 'USD Coin',
    decimals: 6,
    logoURI:
        'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png',
    tags: ['stablecoin'],
    extensions: {
        coingeckoId: 'usd-coin',
        serumV3Usdt: '77quYg4MGneUdjgXCunt9GgM1usmrxKY31twEy3WHwcS',
        website: 'https://www.centre.io/',
    },
};

export const APTOS_TOKEN_1 = {
    address: '0x1::aptos_coin::AptosCoin',
    name: 'Aptos Coin',
    decimals: 8,
    symbol: 'APT',
    // logoURI: Aptos,
    logoURI: 'https://raw.githubusercontent.com/hippospace/aptos-coin-list/main/icons/APT.webp',
};

export const APTOS_TOKEN_2 =  {
    address: '0xa2eda21a58856fda86451436513b867c97eecb4ba099da5775520e0f7492e852::coin::T',
    name: 'Tether USD (Wormhole)',
    symbol: 'USDT',
    decimals: 6,
    coingeckoId: 'tether',  
    logoURI: 'https://raw.githubusercontent.com/hippospace/aptos-coin-list/main/icons/USDT.svg',
}

export const APTOS_TOKEN_1_MAINNET = {
    address: '0x1::aptos_coin::AptosCoin',
    name: 'Aptos Coin',
    decimals: 8,
    coingecko_id: 'aptos',
    symbol: 'APT',
    logoURI: 'https://raw.githubusercontent.com/hippospace/aptos-coin-list/main/icons/APT.webp',
};

export const APTOS_TOKEN_2_MAINNET = {
    address: '0xa2eda21a58856fda86451436513b867c97eecb4ba099da5775520e0f7492e852::coin::T',
    name: 'Tether USD (Wormhole)',
    decimals: 8,
    coingecko_id: 'tether',
    symbol: 'USDT',
    logoURI: 'https://raw.githubusercontent.com/hippospace/aptos-coin-list/main/icons/USDT.svg',
};

export const POLYGON_TOKEN_1 = {
    chainId: 137,
    address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    symbol: 'MATIC',
    name: 'Polygon',
    decimals: 18,
    logoURI: 'https://tokens.1inch.io/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0.png',
    extensions: {
        coingeckoId: 'matic-network',
    },
};

export const POLYGON_TOKEN_2 = {
    chainId: 137,
    address: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
    symbol: 'USDC',
    name: 'USD Coin',
    decimals: 6,
    logoURI: 'https://tokens.1inch.io/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png',
    extensions: {
        coingeckoId: 'usd-coin',
    },
};

export const COMMON_SOLANA_TOKENS = [
    {
        address: 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB',
        decimals: 6,
        coingeckoId: 'tether',
        logoURI:
            'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB/logo.svg',
        name: 'USDT',
        symbol: 'USDT',
    },
    {
        address: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
        decimals: 6,
        coingeckoId: 'usd-coin',
        logoURI:
            'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png',
        name: 'USD Coin',
        symbol: 'USDC',
    },
    {
        address: 'So11111111111111111111111111111111111111112',
        decimals: 9,
        coingeckoId: 'wrapped-solana',
        logoURI:
            'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png',
        name: 'Wrapped SOL',
        symbol: 'SOL',
    },
    {
        address: 'mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So',
        decimals: 9,
        coingeckoId: 'msol',
        logoURI:
            'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So/logo.png',
        name: 'Marinade staked SOL (mSOL)',
        symbol: 'mSOL',
    },
];

export const COMMON_APTOS_TOKENS = [
    {
        address: '0xa2eda21a58856fda86451436513b867c97eecb4ba099da5775520e0f7492e852::coin::T',
        name: 'Tether USD (Wormhole)',
        symbol: 'USDT',
        decimals: 6,
        coingeckoId: 'tether',
        logoURI: 'https://raw.githubusercontent.com/hippospace/aptos-coin-list/main/icons/USDT.svg',
    },
    {
        address: '0xcc8a89c8dce9693d354449f1f73e60e14e347417854f029db5bc8e7454008abb::coin::T',
        name: 'Wrapped Ether (Wormhole)',
        symbol: 'WETH',
        decimals: 8,
        coingeckoId: 'weth',
        logoURI: 'https://raw.githubusercontent.com/hippospace/aptos-coin-list/main/icons/WETH.svg',
    },
    {
        address: '0x5e156f1207d0ebfa19a9eeff00d62a282278fb8719f4fab3a586a0a2c0fffbea::coin::T',
        name: 'USD Coin (Wormhole)',
        symbol: 'USDC',
        coingeckoId: 'usd-coin',
        decimals: 6,
        logoURI: 'https://raw.githubusercontent.com/hippospace/aptos-coin-list/main/icons/USDC.svg',
    },
    {
        address: '0x881ac202b1f1e6ad4efcff7a1d0579411533f2502417a19211cfc49751ddb5f4::coin::MOJO',
        coingecko_id: 'mojito',
        decimals: 8,
        logoURI: 'https://raw.githubusercontent.com/hippospace/aptos-coin-list/main/icons/MOJO.svg',
        name: 'Mojito',
        symbol: 'MOJO',
    },
];

export const COMMON_POLYGON_TOKENS = [
    {
        address: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
        name: 'Tether',
        symbol: 'USDT',
        decimals: 6,
        coingeckoId: 'tether',
        logoURI: 'https://tokens.1inch.io/0xdac17f958d2ee523a2206206994597c13d831ec7.png',
    },
    {
        address: '0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39',
        decimals: 18,
        name: 'ChainLink Token',
        symbol: 'LINK',
        logoURI: 'https://tokens.1inch.io/0x514910771af9ca656af840dff83e8264ecf986ca.png',
    },
    {
        address: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
        name: 'USD Coin',
        symbol: 'USDC',
        coingeckoId: 'usd-coin',
        decimals: 6,
        logoURI: 'https://tokens.1inch.io/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png',
    },
    {
        address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
        name: 'Polygon',
        symbol: 'MATIC',
        coingeckoId: 'matic-network',
        decimals: 18,
        logoURI: 'https://tokens.1inch.io/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0.png',
    },
];

export const APTOS_TOKEN_1_APT = {
    address: '0x1::aptos_coin::AptosCoin',
    name: 'Aptos Coin',
    decimals: 8,
    coingecko_id: 'aptos',
    symbol: 'APT',
    logoURI: 'https://raw.githubusercontent.com/hippospace/aptos-coin-list/main/icons/APT.webp',
};

export const APTOS_TOKEN_2_USDC = {
    address: "0x5e156f1207d0ebfa19a9eeff00d62a282278fb8719f4fab3a586a0a2c0fffbea::coin::T",
    name: "USD Coin (Wormhole)",
    decimals: 6,
    coingecko_id: 'usd-coin',
    symbol: "USDC",
    logoURI: "https://raw.githubusercontent.com/hippospace/aptos-coin-list/main/icons/USDC.svg",
};

export const POLYGON_TOKEN_1_MATIC = {
    chainId: 137,
    address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    symbol: 'MATIC',
    name: 'Polygon',
    decimals: 18,
    logoURI: 'https://tokens.1inch.io/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0.png',
    extensions: {
        coingeckoId: 'matic-network',
    },
};

export const POLYGON_TOKEN_2_USDC = {
    chainId: 137,
    address: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
    symbol: 'USDC',
    name: 'USD Coin',
    decimals: 6,
    logoURI: 'https://tokens.1inch.io/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png',
    extensions: {
        coingeckoId: 'usd-coin',
    },
};

export const BINANCE_TOKEN_1_BNB = {
    chainId: 56,
    address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    symbol: "BNB",
    name: "BNB",
    decimals: 18,
    logoURI: "https://tokens.1inch.io/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c.png",
}

export const BINANCE_TOKEN_2_USDC = {
    chainId: 56,
    address: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
    symbol: "USDC",
    name: "USD Coin",
    decimals: 18,
    logoURI: "https://tokens.1inch.io/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png",
}

export const ETHEREUM_TOKEN_1_ETH = {
    chainId: 1,
    address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    symbol: "ETH",
    name: "Ethereum",
    decimals: 18,
    logoURI: "https://tokens.1inch.io/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png",
}

export const ETHEREUM_TOKEN_2_USDC = {
    chainId: 1,
    address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    symbol: "USDC",
    name: "USD Coin",
    decimals: 6,
    logoURI: "https://tokens.1inch.io/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png",
}

export const SUI_TOKEN_1_SUI = {
    address: '0x2::sui::SUI',
    name: 'Sui',
    decimals: 9,
    coingecko_id: 'sui',
    symbol: 'SUI',
    logoURI: 'https://strapi.scand.app/uploads/644b3314022eae0001db3110_coin_logo_bb22eaf116.png',
};
export const SUI_TOKEN_2_USDC = {
    address: "0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN",
    name: "USD Coin (wormhole)",
    decimals: 6,
    coingecko_id: 'usd-coin',
    symbol: "USDC.w",
    logoURI: "https://strapi.scand.app/uploads/usdc_019d7ef24b.png",
};