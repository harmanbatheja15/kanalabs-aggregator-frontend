import { useStore } from '@/app/store';
import { BiCoinStack } from 'react-icons/bi';
import { LuUsers } from 'react-icons/lu';
import { BsCalendar4Event } from 'react-icons/bs';

const BottomNav = () => {
	const { selectedTab, updateSelectedTab } = useStore();
	return (
		<>
			<div className='fixed bottom-0 left-0 right-0 w-full bg-black dark:bg-[#FCFDFE] z-50'>
				<div className='lg:hidden flex items-center justify-around'>
					<div
						className={`flex flex-1 flex-col items-center py-[19px] cursor-pointer ${
							selectedTab === 'PointsDashboard'
								? 'text-[#2ED3B7] dark:text-[#0E9384] border-t border-[#2ED3B7] dark:border-[#0E9384]'
								: 'text-[#A5A5A6]'
						}`}
						onClick={() => updateSelectedTab('PointsDashboard')}
					>
						<BiCoinStack size={24} />
						<p className='text-[10px] mt-2'>Points Dashboard</p>
					</div>

					<div
						className={`flex flex-1 flex-col items-center py-[19px] cursor-pointer ${
							selectedTab === 'ReferralDashboard'
								? 'text-[#2ED3B7] dark:text-[#0E9384] border-t border-[#2ED3B7] dark:border-[#0E9384]'
								: 'text-[#A5A5A6]'
						}`}
						onClick={() => updateSelectedTab('ReferralDashboard')}
					>
						<LuUsers size={24} />
						<p className='text-[10px] mt-2'>Referral Dashboard</p>
					</div>

					{/* <div
						className={`flex flex-1 flex-col items-center py-[19px] cursor-pointer ${
							selectedTab === 'OngoingCampaigns'
								? 'text-[#2ED3B7] border-t border-[#2ED3B7]'
								: 'text-[#A5A5A6]'
						}`}
						onClick={() => updateSelectedTab('OngoingCampaigns')}
					>
						<BsCalendar4Event size={24} />
						<p className='text-[10px] mt-2'>Ongoing Campaigns</p>
					</div> */}
				</div>
			</div>
		</>
	);
};

export default BottomNav;
