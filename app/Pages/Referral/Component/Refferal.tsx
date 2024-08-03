/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Referal from '../../../../assets/Icons/copy-referal.svg';
import Image from 'next/image';
import Twitter from '../../../../assets/Icons/twitter_x_logo.svg';
import TwitterLight from '../../../../assets/Icons/Twitter X_Light.svg';
import RedditLight from '../../../../assets/Icons/Reddit-Black.svg';
import Reddit from '../../../../assets/Icons/Reddit-White.svg';
import Telegram from '../../../../assets/Icons/Telegram-White.svg';
import TelegramLight from '../../../../assets/Icons/Telegram-Black.svg';
import Facebook from '../../../../assets/Icons/facebook.png';
import facebookLight from '../../../../assets/Icons/fb-light.svg.svg';
import Linklndn from '../../../../assets/Icons/Linklndn-White.svg';
import LinklndnLight from '../../../../assets/Icons/linklndn-LghtMode.svg';
import connectLight from '../../../../assets/Icons/ConnectWallet-dark.svg';
import referal from '../../../../assets/Icons/ReferalShare.svg';
import green_check from '../../../../assets/Icons/green_check_icon.svg';
import grey_check from '../../../../assets/Icons/grey_check_icon.svg';
import Hero1 from '../../../../assets/Icons/hero1.png';
import Hero2 from '../../../../assets/Icons/hero2.png';
import FilterLines from '../../../../assets/Icons/filter-lines.svg';
import ChevronRightGreen from '../../../../assets/Icons/chevron right green.svg';
import LeftPagination from '../../../../assets/Icons/left-pagination.svg';

import Link from '../Component/Link';
import {
	useNotification,
	NotificationType,
} from '../../../utils/notificationUtils';
import { useTheme } from 'next-themes';
import { useStore } from '@/app/store';
import { toast, ToastContainer } from 'react-toastify';
import { NetworkId } from '@kanalabs/aggregator';
import { useWallet } from '@solana/wallet-adapter-react';
import { useAccount } from 'wagmi';
import {
	insertReferralRecords,
	openTwitter,
	fetchReferrerWalletAddress,
	fetchReferralLink,
	fetchTradebookReferrerWalletAddress,
	fetchDisclaimer,
} from '../../../utils/kanalabs';
import KanaLoader from '../../../KanaLoader.json';
import moment from 'moment';
import {
	openFacebook,
	openLinkedin,
	openReddit,
	openTelegram,
	openWhatsapp,
	getReferralBonus,
} from '../../../utils/kanalabs';
import { useAptosContext } from '@/app/contexts/AptosWalletContext';
import Pagination from '../../Pagination/Pagination';
import Lottie from 'react-lottie-player';
import { useMediaQuery } from '@react-hook/media-query';
import { notification, ConfigProvider, Tooltip } from 'antd';
import { useWalletKit } from '@mysten/wallet-kit';
import { useRouter } from 'next/navigation';
import Switch from '../../../../assets/Icons/switch_light_green.svg';
import Swap from '../../../../assets/Icons/swap_light_green.svg';
import Disclaimer from './Disclaimer';
import Poster from './poster';
// import PointsDashboard from './PointsDashboard';
// import ReferralDashboard from './ReferralDashboard';
import Faqs from './Faqs';
import BottomNav from './BottomNav';
import TopHeaderBtns from './TopHeaderBtns';

const Refferal = () => {
	const router = useRouter();
	const [referalLink, setReferalLink] = useState(false);
	const { theme } = useTheme();
	const { address } = useAccount();
	const { connected, account: aptosAccount } = useAptosContext();
	const { connected: solanawalletconnected, publicKey } = useWallet();
	const { currentAccount, isConnected: isSuiConnected } = useWalletKit();
	const referralChain = useStore((state: any) => state.referralChain);
	const [shortnerURl, setShortnerURl] = useState<any>();
	const [myProfile, setMyProfile] = useState<any>();
	const [routeLoading, setRouteLoading] = useState(true);
	const [savePage, setSavePage] = useState<any>();
	const [currentPage, setCurrentPage] = useState(1);
	const [isPagination, setIsPagination] = useState(false);
	const showFullAddress = useMediaQuery(
		'only screen and (min-width: 2560px)'
	);
	const {
		refferedAdress,
		updateIsDisclaimerVisible,
		isDisclaimerVisible,
		isPosterVisible,
		selectedTab,
	} = useStore();
	const [claimReward, setClaimReward] = useState<any>();
	const [walletConnected, setWalletConnected] = useState(false);
	const [walletAddress, setWalletAddress] = useState('');
	const { showNotification, contextHolder } = useNotification();
	const [tradeBookReferral, setTradeBookReferral] = useState<any>();
	const [tradeBookCurrentPage, setTradeBookCurrentPage] = useState(1);
	const [tradePaginationData, setTradePaginationData] = useState<any>();
	const [isTradePagination, setIsTradePagination] = useState(false);
	useEffect(() => {
		let isConnected = false;
		let walletAddress = '';

		switch (referralChain) {
			case NetworkId.solana:
				isConnected = solanawalletconnected;
				walletAddress = publicKey?.toBase58().toString() || '';
				break;
			case NetworkId.aptos:
				isConnected = connected;
				walletAddress = aptosAccount?.address?.toString() || '';
				break;
			case NetworkId.polygon:
			case NetworkId.ethereum:
			case NetworkId.bsc:
			case NetworkId.Avalanche:
			case NetworkId.Arbitrum:
			case NetworkId.zkSync:
				isConnected = address !== undefined;
				walletAddress = address?.toString()!;
				break;
			case NetworkId.sui:
				isConnected = isSuiConnected;
				walletAddress = currentAccount?.address.toString()!;
				break;
			default:
				isConnected = address !== undefined;
				walletAddress = address?.toString() || '';
				break;
		}
		setWalletConnected(isConnected);
		setWalletAddress(walletAddress);
	}, [
		referralChain,
		solanawalletconnected,
		connected,
		publicKey,
		aptosAccount,
		address,
		currentAccount,
	]);

	useEffect(() => {
		if (!walletConnected || !walletAddress) {
			return;
		}
		const fetchDetails = async () => {
			try {
				setRouteLoading(true);
				await fetchDisclaimerData(walletAddress);
				const swapReferrerResponse = await fetchReferrerWalletAddress(
					walletAddress
				);
				// const tradebookReferrerResponse =
				//   await fetchTradebookReferrerWalletAddress(walletAddress);
				setMyProfile(swapReferrerResponse.data);
				// setTradeBookReferral(tradebookReferrerResponse.trade);
			} catch (error) {
				console.error(
					'Failed to fetch referrer wallet address:',
					error
				);
			} finally {
				setRouteLoading(false);
			}
		};
		fetchDetails();
	}, [walletConnected, walletAddress]);
	const fetchDisclaimerData = async (address: any) => {
		try {
			if (address) {
				const disclaimer = await fetchDisclaimer(address);
				if (disclaimer.status === 'success') {
					if (
						disclaimer.referral_disclaimer &&
						disclaimer.referral_disclaimer.user_status
					) {
						updateIsDisclaimerVisible(false);
					} else if (disclaimer.referral_disclaimer === null) {
						updateIsDisclaimerVisible(true);
					}
				} else {
					updateIsDisclaimerVisible(true);
				}
			}
		} catch (error) {
			console.error('Error fetchDisclaimerData:', error);
		}
	};
	useEffect(() => {
		if (!walletConnected || !walletAddress) {
			return;
		}
		const fetchDetails = async () => {
			try {
				await shortenerUrl(walletAddress);
			} catch (error) {
				console.error(
					'Failed to fetch referrer wallet address:',
					error
				);
			}
		};
		fetchDetails();
	}, [walletConnected, walletAddress]);
	useEffect(() => {
		if (!walletConnected || !walletAddress) {
			return;
		}
		const fetchDetails = async () => {
			try {
				const referralBonus = await getReferralBonus(walletAddress);
				if (referralBonus.success) {
					setClaimReward(referralBonus.data);
				}
			} catch (error) {
				console.error(
					'Failed to fetch referrer wallet address:',
					error
				);
			}
		};
		fetchDetails();
	}, [walletConnected, walletAddress]);
	let PageSize = 5;

	const openReferal = () => {
		setReferalLink(true);
	};

	const handleCloseReferalLink = () => {
		setReferalLink(false);
	};
	const copyHash = useCallback(async () => {
		toast.dismiss();
		await navigator.clipboard.writeText(shortnerURl);
		toast.success('Address Copied');
	}, [shortnerURl]);

	const copyReferralAddress = useCallback(async (hash: any) => {
		await navigator.clipboard.writeText(hash);
	}, []);
	const copySocial = useCallback(
		async (social: any) => {
			if (social === 'Twitter') {
				openTwitter(shortnerURl);
			}
			if (social === 'Telegram') {
				openTelegram(shortnerURl);
			}
			if (social === 'Facebook') {
				openFacebook(shortnerURl);
			}
			if (social === 'whatsapp') {
				openWhatsapp(shortnerURl);
			}
			if (social === 'Reddit') {
				openReddit(shortnerURl);
			}
			if (social === 'Linkedin') {
				openLinkedin(shortnerURl);
			}
		},
		[shortnerURl]
	);

	useMemo(() => {
		const firstPageIndex = (currentPage - 1) * PageSize;
		const lastPageIndex = firstPageIndex + PageSize;
		if (myProfile != undefined) {
			const sortedProfile = myProfile.sort((a: any, b: any) => {
				return (
					new Date(b.createdAt).getTime() -
					new Date(a.createdAt).getTime()
				);
			});
			setIsPagination(true);
			return setSavePage(
				sortedProfile.slice(firstPageIndex, lastPageIndex)
			);
		}
	}, [currentPage, myProfile]);
	useMemo(() => {
		const firstPageIndex = (tradeBookCurrentPage - 1) * PageSize;
		const lastPageIndex = firstPageIndex + PageSize;
		if (tradeBookReferral && tradeBookReferral.length > 0) {
			const tradePageData = tradeBookReferral.sort((a: any, b: any) => {
				return (
					new Date(b.createdAt).getTime() -
					new Date(a.createdAt).getTime()
				);
			});
			setIsTradePagination(true);
			return setTradePaginationData(
				tradePageData.slice(firstPageIndex, lastPageIndex)
			);
		}
	}, [tradeBookCurrentPage, tradeBookReferral]);

	const shortenerUrl = useCallback(async (referralAddress: any) => {
		let link = `https://rewards.kanalabs.io?address=${referralAddress}`;
		let referral = {
			referralLink: link,
		};
		let data = await fetchReferralLink(referral);
		if (data.success) {
			setShortnerURl(data.data.shortenerUrl);
		}
	}, []);

	const handleinsertReferralRecords = async (
		refferedAdress: any,
		walletAddress: any
	) => {
		const data = {
			referrerWalletAddress: refferedAdress,
			referredWalletAddress: walletAddress,
		};
		try {
			const insertReferralRecordsResponse = await insertReferralRecords(
				data
			);
			if (insertReferralRecordsResponse.success) {
				showNotification(NotificationType.Success, {
					message: 'Referral Inserted Successfully',
				});
			} else {
				showNotification(NotificationType.Error, {
					message: `${insertReferralRecordsResponse.message}`,
				});
			}
		} catch (error) {
			console.error('Insert Referral Record Error:', error);
			showNotification(NotificationType.Error, {
				message: 'An error occurred while inserting referral record',
			});
		} finally {
			router.replace('/');
		}
	};

	useEffect(() => {
		if (refferedAdress && walletAddress) {
			handleinsertReferralRecords(refferedAdress, walletAddress);
		}
	}, [refferedAdress, walletAddress]);

	const toastStyle = {
		borderRadiusLG: 20,
		colorText: theme === 'dark' ? 'black' : 'rgba(255, 255, 255, 0.88)',
		colorTextHeading:
			theme === 'dark' ? 'black' : 'rgba(255, 255, 255, 0.88)',
		colorIcon: theme === 'dark' ? 'black' : 'rgba(255, 255, 255, 0.45)',
		colorBgElevated: theme === 'dark' ? '#EFF7F8' : 'rgb(23, 24, 26)',
		colorIconHover: theme === 'dark' ? '' : 'rgba(255, 255, 255, 0.88)',
	};
	const [isTradeReferral, setIsTradeReferral] = useState(true);
	const handleTradeReferral = () => {
		setIsSwapReferral(false);
		setIsTradeReferral(true);
	};
	const [isSwapReferral, setIsSwapReferral] = useState(false);
	const handleSwapReferral = () => {
		setIsTradeReferral(false);
		setIsSwapReferral(true);
	};
	return (
		<ConfigProvider theme={{ components: { Notification: toastStyle } }}>
			{contextHolder}

			<TopHeaderBtns />
			
			<main className='flex-1 pb-24'>
				<div className='w-full mx-auto lg:p-0 p-2'>
					<div
						className={`flex items-center text-white dark:text-[#4A4B4D] pl-6 mt-3 lg:pl-[72px] rounded-2xl relative bg-[#17181A80] dark:bg-[#FCFDFE] ${
							selectedTab === 'ReferralDashboard' ||
							selectedTab === 'OngoingCampaigns' ||
							selectedTab === 'PastCampaigns'
								? 'h-[264px]'
								: ''
						}`}
					>
						<div className='z-[1]'>
							<h1 className='xl:text-4xl lg:text-3xl md:text-2xl text-xl font-extrabold'>
								{selectedTab === 'PointsDashboard' &&
									'Points Dashboard'}
								{selectedTab === 'ReferralDashboard' &&
									'Referral Dashboard'}
								{selectedTab === 'OngoingCampaigns' &&
									'Ongoing Campaigns'}
								{selectedTab === 'PastCampaigns' &&
									'Past Campaigns'}
							</h1>
							{selectedTab === 'ReferralDashboard' && (
								<>
									<div
										className='flex items-center justify-between w-fit border border-dashed border-[#2ED3B7] text-[#2ED3B7] dark:text-[#0E9384] dark:border-[#0E9384] text-xs py-4 px-6 mt-4 rounded-lg cursor-pointer'
										onClick={() => {
											copyHash();
											toast.success('Link Copied');
											showNotification(
												NotificationType.Success,
												{
													message: 'Link copied',
												}
											);
										}}
									>
										<p className='lg:mr-40 mr-4 text-sm font-extrabold'>
											{shortnerURl}
										</p>
										<Image src={Referal} alt='Referal' />
									</div>
									<p
										className='w-fit text-[#2ED3B7] dark:text-[#0E9384] text-xs font-extrabold mt-2 cursor-pointer'
										onClick={openReferal}
									>
										Do you have a referral link already?
									</p>
								</>
							)}
						</div>
						<div className='ml-auto z-0'>
							{selectedTab === 'PointsDashboard' ? (
								<Image
									key={selectedTab}
									src={Hero1}
									alt=''
									className='rounded-r-2xl'
									priority
								/>
							) : (
								<Image
									key={selectedTab}
									src={Hero2}
									alt=''
									className={`rounded-r-2xl absolute top-0 right-0 z-0 md:max-w-none ${
										selectedTab === 'ReferralDashboard'
											? 'max-w-[200px]'
											: 'max-w-[300px]'
									}`}
									priority
								/>
							)}
						</div>
					</div>
				</div>

				{selectedTab === 'PointsDashboard' && (
					<>
						<div className='w-full flex flex-wrap lg:flex-row flex-col lg:items-center items-start mx-auto my-4 gap-4 lg:py-14 lg:p-0 p-2'>
							<div className='w-[328px] flex flex-col lg:ml-12 ml-4'>
								<p className='text-[#A5A5A6] text-sm font-normal'>
									Total Points Earned
								</p>
								<h1 className='text-white dark:text-[#4A4B4D] font-extrabold lg:text-6xl text-xl'>
									700
								</h1>
							</div>

							<div className='w-full flex flex-col flex-1 items-center lg:justify-start justify-center [&>div]:mb-4 [&>div]:!mr-4 lg:[&>div]:!ml-0 [&>div]:!ml-4'>
								<div className='flex flex-col lg:flex-row w-full gap-4'>
									<div className='w-full rounded-2xl'>
										<div className='bg-[#17181A80] dark:bg-[#FCFDFE] p-4 rounded-2xl'>
											<p className='text-[#777879] text-sm font-normal'>
												Multiplier (Deposit)
											</p>
											<h1 className='text-[#fff] dark:text-[#4A4B4D] text-xl font-extrabold'>
												700 USDC
											</h1>
										</div>
									</div>
									<div className='w-full rounded-2xl'>
										<div className='bg-[#17181A80] dark:bg-[#FCFDFE] p-4 rounded-2xl'>
											<p className='text-[#777879] text-sm font-normal'>
												Multiplier (Deposit)
											</p>
											<h1 className='text-[#fff] dark:text-[#4A4B4D] text-xl font-extrabold'>
												700 USDC
											</h1>
										</div>
									</div>
									<div className='w-full rounded-2xl'>
										<div className='bg-[#17181A80] dark:bg-[#FCFDFE] p-4 rounded-2xl'>
											<p className='text-[#777879] text-sm font-normal'>
												Multiplier (Referral)
											</p>
											<h1 className='text-[#fff] dark:text-[#4A4B4D] text-xl font-extrabold'>
												700 USDC
											</h1>
										</div>
									</div>
								</div>
								<div className='flex flex-col lg:flex-row w-full gap-4'>
									<div className='w-full rounded-2xl'>
										<div className='bg-[#17181A80] dark:bg-[#FCFDFE] p-4 rounded-2xl'>
											<p className='text-[#777879] text-sm font-normal'>
												Referral Points
											</p>
											<h1 className='text-[#fff] dark:text-[#4A4B4D] text-xl font-extrabold'>
												700 USDC
											</h1>
										</div>
									</div>
									<div className='w-full rounded-2xl'>
										<div className='bg-[#17181A80] dark:bg-[#FCFDFE] p-4 rounded-2xl'>
											<p className='text-[#777879] text-sm font-normal'>
												Deposit Points
											</p>
											<h1 className='text-[#fff] dark:text-[#4A4B4D] text-xl font-extrabold'>
												700 USDC
											</h1>
										</div>
									</div>
									<div className='w-full rounded-2xl'>
										<div className='bg-[#17181A80] dark:bg-[#FCFDFE] p-4 rounded-2xl'>
											<p className='text-[#777879] text-sm font-normal'>
												Swap Points
											</p>
											<h1 className='text-[#fff] dark:text-[#4A4B4D] text-xl font-extrabold'>
												700 USDC
											</h1>
										</div>
									</div>
									<div className='w-full rounded-2xl'>
										<div className='bg-[#17181A80] dark:bg-[#FCFDFE] p-4 rounded-2xl'>
											<p className='text-[#777879] text-sm font-normal'>
												Spot Points
											</p>
											<h1 className='text-[#fff] dark:text-[#4A4B4D] text-xl font-extrabold'>
												700 USDC
											</h1>
										</div>
									</div>
									<div className='w-full rounded-2xl'>
										<div className='bg-[#17181A80] dark:bg-[#FCFDFE] p-4 rounded-2xl'>
											<p className='text-[#777879] text-sm font-normal'>
												Perps Points
											</p>
											<h1 className='text-[#fff] dark:text-[#4A4B4D] text-xl font-extrabold'>
												700 USDC
											</h1>
										</div>
									</div>
								</div>
							</div>
						</div>
					</>
				)}

				{selectedTab === 'ReferralDashboard' && (
					<>
						<div className='w-full flex flex-wrap lg:flex-row flex-col lg:items-center items-start mx-auto my-4 gap-4 lg:py-14 lg:p-0 p-2'>
							<div className='w-[328px] flex flex-col lg:ml-12 ml-4'>
								<p className='text-[#A5A5A6] text-sm font-normal'>
									Total Points Earned from referral
								</p>
								<h1 className='text-white dark:text-[#4A4B4D] font-extrabold lg:text-6xl text-xl'>
									700
								</h1>
							</div>

							<div className='w-full flex flex-col flex-1 items-center lg:justify-start justify-center [&>div]:mb-4 [&>div]:!mr-4 lg:[&>div]:!ml-0 [&>div]:!ml-4'>
								<div className='flex flex-col lg:flex-row w-full gap-4'>
									<div className='w-full rounded-2xl'>
										<div className='bg-[#17181A80] dark:bg-[#FCFDFE] p-4 rounded-2xl'>
											<p className='text-[#777879] text-sm font-normal'>
												Multiplier (Referral)
											</p>
											<h1 className='text-[#fff] dark:text-[#4A4B4D] text-xl font-extrabold'>
												2x
											</h1>
										</div>
									</div>
									<div className='w-full rounded-2xl'>
										<div className='bg-[#17181A80] dark:bg-[#FCFDFE] p-4 rounded-2xl'>
											<p className='text-[#777879] text-sm font-normal'>
												Referral Bonus (USDT)
											</p>
											<h1 className='text-[#fff] dark:text-[#4A4B4D] text-xl font-extrabold'>
												5
											</h1>
										</div>
									</div>
									<div className='w-full rounded-2xl'>
										<div className='bg-[#17181A80] dark:bg-[#FCFDFE] p-4 rounded-2xl'>
											<p className='text-[#777879] text-sm font-normal'>
												Total Trading Amount
											</p>
											<h1 className='text-[#fff] dark:text-[#4A4B4D] text-xl font-extrabold'>
												5
											</h1>
										</div>
									</div>
								</div>
								<div className='flex flex-col lg:flex-row w-full gap-4'>
									<div className='w-full rounded-2xl'>
										<div className='bg-[#17181A80] dark:bg-[#FCFDFE] p-4 rounded-2xl'>
											<p className='text-[#777879] text-sm font-normal'>
												Number of signups
											</p>
											<h1 className='text-[#fff] dark:text-[#4A4B4D] text-xl font-extrabold'>
												{myProfile
													? myProfile.length
													: 0}
											</h1>
										</div>
									</div>
									<div className='w-full rounded-2xl'>
										<div className='bg-[#17181A80] dark:bg-[#FCFDFE] p-4 rounded-2xl'>
											<p className='text-[#777879] text-sm font-normal'>
												Number of first time deposits
											</p>
											<h1 className='text-[#fff] dark:text-[#4A4B4D] text-xl font-extrabold'>
												5
											</h1>
										</div>
									</div>
									<div className='w-full rounded-2xl'>
										<div className='bg-[#17181A80] dark:bg-[#FCFDFE] p-4 rounded-2xl'>
											<p className='text-[#777879] text-sm font-normal'>
												Number of trading users
											</p>
											<h1 className='text-[#fff] dark:text-[#4A4B4D] text-xl font-extrabold'>
												5
											</h1>
										</div>
									</div>
								</div>
							</div>
						</div>
					</>
				)}

				{selectedTab === 'PointsDashboard' ||
				selectedTab === 'ReferralDashboard' ? (
					<div className='flex flex-col lg:flex-row lg:gap-4'>
						<>
							<div className='bg-[#111213] dark:bg-[#FCFDFE] lg:flex-[0.7] flex-1 border border-white/10 dark:border-[#0000001a] text-white rounded-2xl max-w-screen mx-2'>
								<h2 className='text-sm font-extrabold p-4 flex justify-between items-center text-[#FFFFFFCC] dark:text-[#4A4B4D] rounded-t-2xl'>
									24 hour ranking
									<Image
										src={FilterLines}
										alt=''
										className='cursor-pointer'
									/>
								</h2>
								<div className='w-full lg:w-full overflow-x-auto'>
									{selectedTab === 'PointsDashboard' && (
										<>
											<table className='w-full text-sm p-0 m-0'>
												<thead className='bg-[#111213] dark:bg-[#e4f2f3] dark:text-black border-b border-t border-white/10 dark:border-[#0000001a]'>
													<tr className='text-[#A5A5A6] bg-[#111213] dark:bg-[#e4f2f3] dark:text-black text-[10px]'>
														<th className='text-left font-normal p-4 whitespace-nowrap'>
															Rank
														</th>
														<th className='text-left font-normal p-4 whitespace-nowrap'>
															Address
														</th>
														<th className='text-left font-normal p-4 whitespace-nowrap'>
															Trading volume
															generated
														</th>
														<th className='text-right font-normal p-4 whitespace-nowrap'>
															Points
														</th>
													</tr>
												</thead>
												<tbody className='text-[#FFFFFFCC] dark:bg-[#e4f2f3] dark:text-black'>
													<tr className='border-b border-white/10 dark:border-[#0000001a]'>
														<td className='p-4'>
															1
														</td>
														<td className='p-4 cursor-pointer hover:underline'>
															walletaddress
														</td>
														<td className='p-4'>
															$1,234
														</td>
														<td className='p-4 text-right'>
															12,345
														</td>
													</tr>
												</tbody>
											</table>
											{isPagination && (
												<div>
													<div className='pagination flex justify-center items-center mb-4 gap-4'>
														{isPagination && (
															<Pagination
																currentPage={
																	currentPage
																}
																totalPages={Math.ceil(
																	myProfile.length /
																		5
																)}
																onPageChange={(
																	page: React.SetStateAction<number>
																) =>
																	setCurrentPage(
																		page
																	)
																}
															/>
														)}
													</div>
													<p className='mb-6 text-center text-sm text-[#777879]'>
														Showing{' '}
														{(currentPage - 1) *
															PageSize +
															1}
														{}{' '}
														{(currentPage - 1) *
															PageSize +
															savePage?.length !=
															1 && '-'}{' '}
														{(currentPage - 1) *
															PageSize +
															savePage?.length !=
														1
															? (currentPage -
																	1) *
																	PageSize +
																savePage?.length
															: ''}{' '}
														out of{' '}
														{myProfile?.length}{' '}
														Entries
													</p>
												</div>
											)}
										</>
									)}
									{selectedTab === 'ReferralDashboard' && (
										<>
											<table className='w-full text-sm p-0 m-0'>
												<thead className='bg-[#111213] dark:bg-[#e4f2f3] dark:text-black border-b border-t border-white/10 dark:border-[#0000001a]'>
													<tr className='text-[#A5A5A6] bg-[#111213] dark:bg-[#e4f2f3] dark:text-black text-[10px]'>
														<th className='text-left font-normal p-4 whitespace-nowrap'>
															Rank
														</th>
														<th className='text-left font-normal p-4 whitespace-nowrap'>
															Address
														</th>
														<th className='text-left font-normal p-4 whitespace-nowrap'>
															Trading volume
															generated
														</th>
														<th className='text-left font-normal p-4 whitespace-nowrap'>
															Commissions Earned
														</th>
														<th className='text-right font-normal p-4 whitespace-nowrap'>
															Points
														</th>
													</tr>
												</thead>
												<tbody className='text-[#FFFFFFCC] dark:bg-[#e4f2f3] dark:text-black'>
													{savePage?.length > 0 ? (
														savePage?.map(
															(
																listValue: any,
																index: any
															) => {
																return (
																	<>
																		<tr className='border-b border-white/10 dark:border-[#0000001a]'>
																			<td className='p-4'>
																				{index + 1}
																			</td>
																			<td
																				className='p-4 cursor-pointer hover:underline'
																				onClick={() => {
																					copyReferralAddress(
																						listValue?.userWalletAddress
																					);
																					showNotification(
																						NotificationType.Success,
																						{
																							message:
																								'Address Copied',
																						}
																					);
																				}}
																			>
																				{showFullAddress
																					? listValue?.userWalletAddress
																					: listValue?.userWalletAddress.slice(
																							0,
																							10
																					  ) +
																					  '...' +
																					  listValue?.userWalletAddress.slice(
																							-10
																					  )}
																			</td>
																			<td className='p-4'>
																				$1,234
																			</td>
																			<td className='p-4'>
																				$1,234
																			</td>
																			<td className='p-4 text-right'>
																				12,345
																			</td>
																		</tr>
																	</>
																);
															}
														)
													) : (
														<>
															<tr className='w-full mx-auto text-center'>
																<td className='p-4 w-full mx-auto text-base' colSpan={4}>
																	Copy and share your referral link to start
																</td>
															</tr>
														</>
													)}
												</tbody>
											</table>
											{isPagination && (
												<div>
													<div className='pagination flex justify-center items-center mb-4 gap-4'>
														{isPagination && (
															<Pagination
																currentPage={
																	currentPage
																}
																totalPages={Math.ceil(
																	myProfile.length /
																		5
																)}
																onPageChange={(
																	page: React.SetStateAction<number>
																) =>
																	setCurrentPage(
																		page
																	)
																}
															/>
														)}
													</div>
													<p className='mb-6 text-center text-sm text-[#777879]'>
														Showing{' '}
														{(currentPage - 1) *
															PageSize +
															1}
														{}{' '}
														{(currentPage - 1) *
															PageSize +
															savePage?.length !=
															1 && '-'}{' '}
														{(currentPage - 1) *
															PageSize +
															savePage?.length !=
														1
															? (currentPage -
																	1) *
																	PageSize +
																savePage?.length
															: ''}{' '}
														out of{' '}
														{myProfile?.length}{' '}
														Entries
													</p>
												</div>
											)}
										</>
									)}
								</div>
							</div>
						</>
						<Faqs />
					</div>
				) : (
					<></>
				)}

				<BottomNav />
			</main>

			{/* <div className=" font-manrop h-full dark:bg-[#e4f2f3] w-full xxl:px-0 bxl:px-0 xl:px-0 sxl:px-0 lg:px-0 md:px-4 sm:px-4 xd:px-4">
        <div className=" justify-center py-[1rem] h-full w-full flex xxl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col xd:flex-col   xxl:gap-[1rem] bxl:gap-[1rem] xl:gap-[1rem] sxl:gap-[1rem] lg:gap-[1rem] md:gap-[0px] sm:gap-[0px] xd:gap-[0px]">
          <div className=" xxl:w-[50%] bxl:w-[50%] xl:w-[50%] sxl:w-[50%]  lg:w-[50%] md:w-[100%] sm:w-[100%] xd:w-[100%] flex flex-col gap-[1rem]  ">
            <div className=" border-2 border-[#ffffff1a]  dark:border-[#E3E8EF] w-full rounded-[1rem] xxl:bg-[#17181A] xl:bg-[#17181A] lg:bg-[#17181A] md:bg-[#0C0C0D] sm:bg-[#0C0C0D] xd:bg-[#0C0C0D]  dark:xxl:bg-[#FCFDFE] dark:xl:dark:bg-[#FCFDFE] dark:lg:dark:bg-[#FCFDFE] dark:md:bg-[#E4F2F3] dark:sm:bg-[#E4F2F3] dark:xd:bg-[#E4F2F3]">
              <div className=" h-full  dark:border-[#E3E8EF] flex p-6 items-start justify-start gap-[1rem] ">
                <div className=" bg-[#0C0C0D] dark:bg-[#E4F2F3] h-[3rem] w-[3rem] rounded-[1rem] flex justify-center items-center  gap-[1rem]">
                  <Image src={referal} alt="referal" />
                </div>
                <div className="  w-full flex flex-col gap-[1rem] ">
                  <div className=" text-[#FFFFFFCC] dark:text-[#4A4B4D] font-[800] text-[1rem]  w-full    gap-[1rem]">
                    Copy and share your referral link
                    {refferedAdress ? null : (
                      <div
                        className="text-[#2ED3B7] font-[800] text-[0.75rem] cursor-pointer pt-1"
                        onClick={openReferal}
                      >
                        Do you have a referral link already?
                      </div>
                    )}
                  </div>

                  <div className=" flex justify-center items-center   w-full">
                    <div className=" w-full h-[4rem] rounded-[1rem] border-dashed border-2 flex justify-between border-[#2ED3B7] p-4 bg-[#111213] dark:bg-[#F2F9F9] gap-[1rem]">
                      <div className=" text-[#2ED3B7] font-[800] text-[0.875rem] pt-1 truncate">
                        {shortnerURl}
                      </div>
                      <Image
                        src={Referal}
                        alt="Referal"
                        className=" cursor-pointer"
                        onClick={() => {
                          copyHash();
                          toast.success("Link Copied");
                          showNotification(NotificationType.Success, {
                            message: "Link copied",
                          });
                        }}
                      />
                    </div>
                  </div>
                  <div className=" flex justify-start text-[#A5A5A6] dark:text-[#777879] font-[400] text-[0.875rem]  ">
                    Or share to
                  </div>
                  <div className=" flex flex-row justify-start items-center gap-[1rem] ">
                    <Image
                      src={theme === "dark" ? TwitterLight : Twitter}
                      alt="Twitter"
                      className=" cursor-pointer w-6 h-6   gap-[1rem]"
                      onClick={() => {
                        toast.dismiss();
                        toast.success("Success: Redirected to Twitter");
                        copySocial("Twitter");
                      }}
                    />
                    <Image
                      src={theme === "dark" ? facebookLight : Facebook}
                      alt="discord"
                      className=" cursor-pointer w-6 h-6   gap-[1rem]"
                      onClick={() => {
                        toast.dismiss();
                        toast.success("Success: Redirected to Facebook");
                        copySocial("Facebook");
                      }}
                    />
                    <Image
                      src={theme === "dark" ? TelegramLight : Telegram}
                      alt="Telegram"
                      className=" cursor-pointer gap-[1rem]"
                      onClick={() => {
                        toast.dismiss();
                        toast.success("Success: Redirected to Telegram");
                        copySocial("Telegram");
                      }}
                    />
                    <Image
                      src={theme === "dark" ? RedditLight : Reddit}
                      alt="Reddit"
                      className=" cursor-pointer gap-[1rem]  "
                      onClick={() => {
                        toast.dismiss();
                        toast.success("Success: Redirected to Reddit");
                        copySocial("Reddit");
                      }}
                    />
                    <Image
                      src={theme === "dark" ? LinklndnLight : Linklndn}
                      alt="Linklndn"
                      className=" cursor-pointer gap-[1rem] "
                      onClick={() => {
                        toast.dismiss();
                        toast.success("Success: Redirected to Linkedin");
                        copySocial("Linkedin");
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[1rem] xxl:w-[50%] bxl:w-[50%] xl:w-[50%] sxl:w-[50%]  lg:w-[50%] md:w-[100%] sm:w-[100%] xd:w-[100%] ">
            <div className=" border-2 border-[#ffffff1a] w-full rounded-[1rem] xxl:bg-[#17181A] xl:bg-[#17181A] lg:bg-[#17181A] md:bg-[#0c0c0d] sm:bg-[#0c0c0d] xd:bg-[#0c0c0d]  dark:xxl:bg-[#fcfdfe] dark:xl:dark:bg-[#FCFDFE] dark:lg:dark:bg-[#FCFDFE] dark:md:bg-[#e4f2f3] dark:sm:bg-[#e4f2f3] dark:xd:bg-[#e4f2f3] dark:border-[#E3E8EF] flex flex-col   gap-[1rem] ">
              <div className="   border-b-2 border-[#ffffff1a] dark:border-[#E3E8EF] p-[1rem] flex flex-row items-center justify-between">
                <div className=" text-[#FFFFFFCC] dark:text-[#4A4B4D] text-[0.875rem] font-[800]">
                  Stats
                </div>
              </div>
              <div className="flex flex-col p-[1rem] gap-[1rem] ">
                <div className=" flex xxl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col xd:flex-col justify-around gap-[1rem]  ">
                  <div className="bg-[#111213] dark:bg-[#EFF7F8] rounded-[0.5rem] border-2 border-[#ffffff1a] dark:border-[#E3E8EF] xxl:w-[50%] bxl:w-[50%] xl:w-[50%] sxl:w-[50%] lg:w-[50%] md:w-full sm:w-full xd:w-full  h-[5.75rem] p-4">
                    <div className="text-[#FFFFFF] dark:text-[#777879] text-[0.875rem] font-[400]">
                      Referral Share (10%)
                    </div>
                    <div className="text-[#FFFFFF] dark:text-[#777879] text-[1.5rem] font-[800] ">
                      {claimReward ? Number(claimReward.Balance.toFixed(5)) : 0}{" "}
                    </div>
                  </div>
                  <div className="bg-[#111213] dark:bg-[#EFF7F8] rounded-[0.5rem] border-2 border-[#ffffff1a] dark:border-[#E3E8EF]   xxl:w-[50%] bxl:w-[50%] xl:w-[50%] sxl:w-[50%] lg:w-[50%] md:w-full sm:w-full xd:w-full   h-[5.75rem] p-4">
                    <div className="text-[#FFFFFF] dark:text-[#777879] text-[0.875rem] font-[400]">
                      Swap Referrals
                    </div>
                    <div className="text-[#FFFFFF] dark:text-[#777879] text-[1.5rem] font-[800] ">
                      {myProfile ? myProfile.length : 0}
                    </div>
                  </div>
                </div>
                <div className="bg-[#111213] flex flex-col gap-[0.5rem] dark:bg-[#EFF7F8] rounded-[0.5rem] border-2 border-[#ffffff1a] dark:border-[#E3E8EF] p-[1rem]  w-full   h-full  ">
                  <div className="text-[rgba(255,255,255,0.80)] dark:text-[#777879] text-[0.875rem] font-[800]">
                    TradeBook Referral
                  </div>
                  <div className=" gap-[1rem] flex xxl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col xd:flex-col justify-around  ">
                    <div className="bg-[#111213] dark:bg-[#EFF7F8] dark:border-[#E3E8EF] rounded-[0.5rem] border-2 border-[#ffffff1a]   xxl:w-[50%] bxl:w-[50%] xl:w-[50%] sxl:w-[50%] lg:w-[50%] md:w-full sm:w-full xd:w-full  h-[5.75rem] p-4">
                      <div className="text-[#FFFFFF] dark:text-[#777879] text-[0.875rem] font-[400]">
                        Total
                      </div>
                      <div className="text-[#FFFFFF] dark:text-[#777879] text-[1.5rem] font-[800] ">
                        {tradeBookReferral ? tradeBookReferral.length : 0}
                      </div>
                    </div>
                    <div className="bg-[#111213] dark:bg-[#EFF7F8] dark:border-[#E3E8EF] rounded-[0.5rem] border-2 border-[#ffffff1a]  xxl:w-[50%] bxl:w-[50%] xl:w-[50%] sxl:w-[50%] lg:w-[50%] md:w-full sm:w-full xd:w-full   h-[5.75rem] p-4">
                      <div className="text-[#FFFFFF] dark:text-[#777879] text-[0.875rem] font-[400]">
                        Active
                      </div>
                      <div className="text-[#FFFFFF] dark:text-[#777879] text-[1.5rem] font-[800] ">
                        {tradeBookReferral
                          ? tradeBookReferral.filter(
                              (item: any) => item.tradeStatus === 1
                            ).length
                          : 0}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-2 border-[#ffffff1a] w-full rounded-[1rem] bg-[#111213] dark:bg-[#EFF7F8]   dark:xxl:bg-[#fcfdfe] dark:xl:dark:bg-[#FCFDFE] dark:lg:dark:bg-[#FCFDFE] dark:md:bg-[#e4f2f3] dark:sm:bg-[#e4f2f3] dark:xd:bg-[#e4f2f3] dark:border-[#E3E8EF]  ">
              <div className="flex text-[0.875rem] border-b-2 border-[#ffffff1a] dark:border-[#E3E8EF]  font-manrop flex-row w-full justify-start rounded-t-[1rem] items-center bg-[#17181A] dark:bg-[#EFF7F8]  ">
                <div
                  onClick={handleTradeReferral}
                  className={` ${
                    isTradeReferral
                      ? "font-[800] dark:font-[800] text-[#FFF] bg-[rgba(255,255,255,0.06)] dark:bg-[#FCFDFE] dark:text-[#0C0C0D] "
                      : " bg-transparent text-[#A5A5A6] dark:text-[#777879] font-[400] "
                  } p-[1.5rem] cursor-pointer  rounded-tl-[1rem]   `}
                >
                  TradeBook Referrals
                </div>
                <div
                  onClick={handleSwapReferral}
                  className={` ${
                    isSwapReferral
                      ? "font-[800] dark:font-[800] text-[#FFF] bg-[rgba(255,255,255,0.06)] dark:bg-[#FCFDFE] dark:text-[#0C0C0D] "
                      : " bg-transparent text-[#A5A5A6] dark:text-[#777879] font-[400] "
                  } p-[1.5rem] cursor-pointer     `}
                >
                  Swap Referrals
                </div>
              </div>
              {isTradeReferral && (
                <>
                  <table className=" w-full bg-[#111213] dark:bg-[#EFF7F8] rounded-b-[1rem]  ">
                    <thead className="w-full ">
                      <tr className="  text-[#777879]  dark:text-[#777879] text-[0.875rem] p-4 border-b-2 border-[#ffffff1a] dark:border-[#E3E8EF] h-[3.25rem]">
                        <th className=" text-left pl-4">S.no</th>
                        <th className="text-left">Address</th>
                        <th className="text-left">Trade Volume Status</th>
                        <th className="text-right rounded-tr-[1rem] pr-4">
                          Joined on
                        </th>
                      </tr>
                    </thead>
                    <tbody className="  h-full w-full">
                      <tr className="  w-full p-6 text-center ">
                        <td
                          colSpan={4}
                          className="text-[#4A4B4D] p-6 dark:text-[#777879] text-[0.75rem]  font-[800] w-full  "
                        >
                          Trade Contest Referral Is Over
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </>
              )}
              {isSwapReferral && (
                <>
                  <table className=" w-full bg-[#111213] dark:bg-[#EFF7F8] rounded-b-[1rem]  ">
                    <thead className="w-full ">
                      <tr className="  text-[#777879] dark:text-[#777879] text-[0.875rem] p-4 border-b-2 border-[#ffffff1a] dark:border-[#E3E8EF] h-[3.25rem]">
                        <th className=" text-left pl-4">S.no</th>
                        <th className="text-left">Address</th>
                        <th className="text-right rounded-tr-[1rem] pr-4">
                          Joined on
                        </th>
                      </tr>
                    </thead>
                    <tbody className="  h-full w-full">
                      {routeLoading ? (
                        <tr className="   text-[#777879] dark:text-[#777879] text-[0.875rem] p-4 border-b-2 border-[#ffffff1a] dark:border-[#E3E8EF] h-full ">
                          <td></td>
                          <td></td>
                          <td className="flex justify-start align-middle ">
                            <Lottie
                              loop
                              animationData={KanaLoader}
                              play
                              style={{ width: 150, height: 150 }}
                            />
                          </td>
                          <td></td>
                        </tr>
                      ) : savePage?.length > 0 ? (
                        savePage?.map((listValue: any, index: any) => {
                          return (
                            // eslint-disable-next-line react/jsx-key
                            <tr className="   text-[#777879] dark:text-[#777879] text-[0.875rem] p-4 border-b-2 border-[#ffffff1a] dark:border-[#E3E8EF] h-[3.25rem] ">
                              <td className="pl-6">{index + 1}</td>
                              <td
                                className="text-left cursor-pointer hover:underline "
                                onClick={() => {
                                  copyReferralAddress(
                                    listValue?.userWalletAddress
                                  );
                                  showNotification(NotificationType.Success, {
                                    message: "Address Copied",
                                  });
                                }}
                              >
                                {showFullAddress
                                  ? listValue?.userWalletAddress
                                  : listValue?.userWalletAddress.slice(0, 10) +
                                    "..." +
                                    listValue?.userWalletAddress.slice(-10)}
                              </td>
                              <td className="text-right pr-4">
                                {moment
                                  .utc(
                                    listValue?.createdAt,
                                    "YYYY-MM-DDTHH:mm:ssZ"
                                  )
                                  .format("MMMM D, YYYY")}
                              </td>
                            </tr>
                          );
                        })
                      ) : (
                        <tr className="  w-full p-6 text-center ">
                          <td
                            colSpan={4}
                            className="text-[#4A4B4D] p-6 dark:text-[#777879] text-[0.75rem]  font-[800] w-full  "
                          >
                            Copy and share your referral link to start
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                  <div className=" flex justify-center rounded-b-[1rem] w-full ">
                    {isPagination && (
                      <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col max-sm:flex-col w-full justify-center items-center align-middle p-[3%_0]">
                        <div className=" flex flex-col">
                          {isPagination && (
                            <Pagination
                              currentPage={currentPage}
                              totalPages={Math.ceil(myProfile.length / 5)}
                              onPageChange={(
                                page: React.SetStateAction<number>
                              ) => setCurrentPage(page)}
                            />
                          )}
                          <div className="text-[rgba(255,255,255,0.25)] dark:text-[#777879] py-2 font-medium text-[0.938rem] flex items-center justify-center">
                            Showing {(currentPage - 1) * PageSize + 1}
                            {}-{(currentPage - 1) * PageSize + savePage.length}{" "}
                            out of {myProfile.length} Entries
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div> */}
			{referalLink && (
				<Link handleCloseReferalLink={handleCloseReferalLink} />
			)}
			{isDisclaimerVisible && <Disclaimer address={walletAddress} />}
			{/* {isPosterVisible && <Poster />} */}
		</ConfigProvider>
	);
};

export default Refferal;
