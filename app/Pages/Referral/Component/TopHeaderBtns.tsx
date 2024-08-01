import React, { useState } from 'react';
import { useStore } from "@/app/store";
import ClickAwayListener from 'react-click-away-listener';
import ChevronDownDark from '../../../../assets/Icons/chevron-down-dark.svg';
import Image from 'next/image';

const TopHeaderBtns = () => {
	const { selectedTab, updateSelectedTab } = useStore();
	const [isOpen, setIsOpen] = useState<boolean>(false);
	return (
		<>
			<div className='flex-1 mt-4'>
				<div className='hidden lg:block w-full'>
					<div className='flex items-center justify-start dark:bg-[#FCFDFE] bg-[#111213] border border-[#FFFFFF1A] rounded-2xl gap-4 p-4'>
						<button
							className={`font-extrabold text-sm py-2 px-4 rounded-lg ${
								selectedTab === 'PointsDashboard'
									? 'bg-[#1D1E20] text-[#fff] dark:bg-[#e4f2f3] dark:text-black'
									: 'bg-transparent text-[#A5A5A6]'
							}`}
							onClick={() => updateSelectedTab('PointsDashboard')}
						>
							Points Dashboard
						</button>
						<button
							className={`font-extrabold text-sm py-2 px-4 rounded-lg ${
								selectedTab === 'ReferralDashboard'
									? 'bg-[#1D1E20] text-[#fff] dark:bg-[#e4f2f3] dark:text-black'
									: 'bg-transparent text-[#A5A5A6]'
							}`}
							onClick={() => updateSelectedTab('ReferralDashboard')}
						>
							Referral Dashboard
						</button>
						{/* <button
							className={`font-extrabold text-sm py-2 px-4 rounded-lg ${
								selectedTab === 'OngoingCampaigns'
									? 'bg-[#1D1E20] text-[#fff] dark:bg-[#e4f2f3] dark:text-black'
									: 'bg-transparent text-[#A5A5A6]'
							}`}
							onClick={() => updateSelectedTab('OngoingCampaigns')}
						>
							Ongoing Campaigns
						</button>
						<button
							className={`font-extrabold text-sm py-2 px-4 rounded-lg ${
								selectedTab === 'PastCampaigns'
									? 'bg-[#1D1E20] text-[#fff] dark:bg-[#e4f2f3] dark:text-black'
									: 'bg-transparent text-[#A5A5A6]'
							}`}
							onClick={() => updateSelectedTab('PastCampaigns')}
						>
							Past Campaigns
						</button>
						<div className='relative'>
							<button
								className={`flex items-center font-extrabold text-sm py-2 px-4 rounded-lg ${
									selectedTab === 'OtherCampaigns'
										? 'bg-[#1D1E20] text-[#fff] dark:bg-[#e4f2f3] dark:text-black'
										: 'bg-transparent text-[#A5A5A6]'
								}`}
								onClick={() => setIsOpen((isOpen) => !isOpen)}
							>
								Show other Campaigns
								<div className='ml-2'>
									<Image src={ChevronDownDark} alt='' />
								</div>
							</button>
							{isOpen && (
								<ClickAwayListener
									onClickAway={() =>
										setIsOpen((isOpen) => !isOpen)
									}
								>
									<div
										className={`w-full overflow-y-auto cursor-pointer absolute !z-[100] rounded-[0.5rem] scroll-smooth backdrop-blur-sm dark:bg-[#FCFDFE] bg-[#1D1E20] border border-white/10 dark:border-black/10`}
									>
										<div
											className={`dark:bg-[#FCFDFE] bg-[#1D1E20] hover:bg-[#1f2122] hover:dark:bg-[#e4f2f3] cursor-pointer flex flex-row justify-between items-center p-[0.5rem_1rem] w-full`}
										>
											<div className='flex py-3.5 text-white dark:text-black'>
												Campaign 1
											</div>
										</div>
										<div
											className={`dark:bg-[#FCFDFE] bg-[#1D1E20] hover:bg-[#1f2122] hover:dark:bg-[#e4f2f3] cursor-pointer flex flex-row justify-between items-center p-[0.5rem_1rem] w-full`}
										>
											<div className='flex py-3.5 text-white dark:text-black'>
												Campaign 2
											</div>
										</div>
										<div
											className={`dark:bg-[#FCFDFE] bg-[#1D1E20] hover:bg-[#1f2122] hover:dark:bg-[#e4f2f3] cursor-pointer flex flex-row justify-between items-center p-[0.5rem_1rem] w-full`}
										>
											<div className='flex py-3.5 text-white dark:text-black'>
												Campaign 3
											</div>
										</div>
									</div>
								</ClickAwayListener>
							)}
						</div> */}
					</div>
				</div>
			</div>
		</>
	);
};

export default TopHeaderBtns;
