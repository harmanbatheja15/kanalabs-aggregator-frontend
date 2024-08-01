import { message } from "antd";
import axios from "axios";
import { REFERRAL_BACKEND_URL } from "./constants";

const headers = {
  "x-api-key": process.env.NEXT_PUBLIC_API_KEY!,
};
export const openTwitter = async (url: any) => {
  if (typeof window !== "undefined") {
    window.open(
      `https://twitter.com/intent/tweet?url=&text=%F0%9F%94%A5%20Kana%20Labs%20Referral%20Program%20%F0%9F%94%A5%0AYour%20gateway%20to%20an%20endless%20revenue%20stream!!!%20%F0%9F%92%B0%0ARefer%20your%20friends%20and%20family%20and%20get%20%E2%80%9CUSDT%E2%80%9D%20tokens%20as%20real-time%20rewards%20for%20any%20swap%20transactions%20that%20they%20make%20on%20our%20platform.%20@kanalabs%0Alink%20%3A%3A%20${url}`
    );
  }
};
export const openTelegram = async (url: any) => {
  if (typeof window !== "undefined") {
    window.open(
      `https://t.me/share/url?url=${url}&text=Kana%20Labs%20Referral%20Program%0AYour%20gateway%20to%20an%20endless%20revenue%20stream!!!%0ARefer%20your%20friends%20and%20family%20and%20get%20%E2%80%9CUSDT%E2%80%9D%20tokens%20as%20real-time%20rewards%20for%20any%20swap%20transactions%20that%20they%20make%20on%20our%20platform.%20`,
      "_blank"
    );
  }
};
export const openFacebook = async (url: any) => {
  if (typeof window !== "undefined") {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      "_blank"
    );
  }
};
export const openWhatsapp = async (url: any) => {
  if (typeof window !== "undefined") {
    window.open(
      `https://api.whatsapp.com/send?text=Kana%20Labs%20Referral%20Program.%0AYour%20gateway%20to%20an%20endless%20revenue%20stream!!!%20💰%0ARefer%20your%20friends%20and%20family%20and%20get%20%22USDT%22%20tokens%20as%20real-time%20rewards%20for%20any%20swap%20transactions%20that%20they%20make%20on%20our%20platform.%0A👉%20${url}`,
      "_blank"
    );
  }
};
export const openReddit = async (url: any) => {
  if (typeof window !== "undefined") {
    window.open(
      `https://www.reddit.com/submit?url=${encodeURIComponent(
        url
      )}&title=🔥%20Kana%20Labs%20Referral%20Program%20🔥%0AYour%20gateway%20to%20an%20endless%20revenue%20stream!!!%20💰%0ARefer%20your%20friends%20and%20family%20and%20get%20“USDT”%20tokens%20as%20real-time%20rewards%20for%20any%20swap%20transactions%20that%20they%20make%20on%20our%20platform.`,
      "_blank"
    );
  }
};
export const openLinkedin = async (url: any) => {
  if (typeof window !== "undefined") {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        url
      )}`,
      "_blank"
    );
  }
};
export const getReferralBonus = async (walletAddress: string) => {
  const response = await axios.get(
    `https://referrals-dev.kanalabs.io/fetchAvailableBalance?walletAddress=${walletAddress}`,
    { headers: headers }
  );

  if (response.status === 201) {
    return { success: true, data: response.data };
  } else {
    console.error("Unexpected response status:", response.status);
    return {
      success: false,
      message: `Unexpected response status: ${response.status}`,
    };
  }
};

export const fetchReferralLink = async (data: any) => {
  const response = await axios.post(
    `https://referrals-dev.kanalabs.io/fetchshortenerUrl`,
    data,
    { headers: headers }
  );

  if (response.status === 201) {
    return { success: true, data: response.data.data };
  } else {
    console.error("Unexpected response status:", response.status);
    return {
      success: false,
      message: `Unexpected response status: ${response.status}`,
    };
  }
};

export const insertReferralRecords = async (data: any) => {
  try {
    const response = await axios.post(
      `https://referrals-dev.kanalabs.io/insertReferralRecords`,
      data,
      { headers: headers }
    );    

    if (response.status === 201) {
      return { success: true, data: response.data };
    } else {
      console.error("Unexpected response status:", response.status);
      return {
        success: false,
        message: `Unexpected response status: ${response.status}`,
      };
    }
  } catch (error: any) {
    console.error("Error in insertReferralRecords:", error);
    const errorMessage = error.response?.data?.message?.toLowerCase();
    const errorInsertRefferaddress =error.response?.data?.error?.toLowerCase();
    if (error.response && error.response.status === 409 && errorMessage === 'referredwalletaddress already exists; there is a duplicate entry') {
      return {
        success: false,
        message: `referredWalletAddress already exists`,
      };
    }else if(error.response && error.response.status === 400 && errorInsertRefferaddress ===`please use different addresses for your referrerwalletaddress and referredwalletaddress; they cannot be the same`){
      return{
        success:false,
        message:`This Wallet is already Reffered`,
      };
    }
     else {
      return {
        success: false,
        message: `Error in insertReferralRecords`,
      };
    }

  }
};

export const fetchReferrerWalletAddress = async (address: any) => {
  try {
    const response = await axios.get(
      `https://referrals-dev.kanalabs.io/fetchReferredWalletAddress?referrerWalletAddress=${address}`,
      { headers: headers }
    );

    if (response.status === 201) {
      return response.data;
    } else {
      console.error("Unexpected response status:", response.status);
      return null;
    }
  } catch (error) {
    console.error("Error fetching fetchReferrerWalletAddress:", error);
    return null;
  }
};
export const fetchTradebookReferrerWalletAddress = async (address: any) => {
  try {
    const response = await axios.get(
      `https://referrals-dev.kanalabs.io/tradeReferral/fetchReferredWalletAddress?referrerWalletAddress=${address}`,
      { headers: headers }
    );

    if (response.status === 200) {
      return response.data;
    } else {
      console.error("Unexpected response status:", response.status);
      return null;
    }
  } catch (error) {
    console.error("Error fetching fetchReferrerWalletAddress:", error);
    return null;
  }
};
export const getLeaderBoard = async () => {
  const data = await axios.get(`${REFERRAL_BACKEND_URL}/leaderboard/leaderBoardAllData`, { headers: headers });
  return data.data;
};
export const getLeaderBoardMonth = async () => {
  const data = await axios.get(`${REFERRAL_BACKEND_URL}/leaderboard/leaderBoardAllDataMonth`, { headers: headers });
  return data.data;
};
export const getLeaderBoardMonthBYChain = async (chain: any) => {
  const data = await axios.get(`${REFERRAL_BACKEND_URL}/leaderboard/leaderBoardAllDataMonthAndChain?chain=${chain}`, { headers: headers });
  return data.data.data;
};
export const monthlyWinners = async () => {
  const data = await axios.get(`${REFERRAL_BACKEND_URL}/leaderboard/leaderBoardWinners`, { headers: headers });
  return data.data;
};

export const leaderboardCurrentRank = async () => {
  const data = await axios.get(`${REFERRAL_BACKEND_URL}/leaderboard/leaderBoardRank`, { headers: headers });
  return data.data;
};




export const fetchDisclaimer = async (address: string): Promise<any> => {
  try {
    const response = await axios.get(
      `https://referrals-dev.kanalabs.io/tradeReferral/fetchReferralDisclaimer?walletAddress=${address}`,
      { headers: headers }
    );
    if (response.status === 200) {
      return response.data;
    } else {
      console.error("Unexpected response status:", response.status);
      return null;
    }
  } catch (error) {
    console.error("Error fetching fetchReferrerWalletAddress:", error);
    return null;
  }
};


export const insertDisclaimer = async (address: string,status:boolean): Promise<any> => {
  try {
    const response = await axios.get(
      `https://referrals-dev.kanalabs.io/tradeReferral/insertReferralDisclaimer?walletAddress=${address}&status=${status}`,
      { headers: headers }
    );
    if (response.status === 200) {
      return response.data;
    } else {
      console.error("Unexpected response status:", response.status);
      return null;
    }
  } catch (error) {
    console.error("Error fetching fetchReferrerWalletAddress:", error);
    return null;
  }
};