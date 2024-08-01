import React, { useState } from 'react'
import CloseLight from "../../../../assets/Icons/x-close-light.svg";
import Close from "../../../../assets/Icons/x-close.svg";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useStore } from '@/app/store';
import { insertDisclaimer } from '@/app/utils/kanalabs';


interface DisclaimerProps {
    address: string;
}
const Disclaimer: React.FC<DisclaimerProps> = ({ address }) => {
    const {updateIsDisclaimerVisible } = useStore();
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = (event: any) => {
        setIsChecked(event.target.checked);
    }
    const handelOnClickContinue = async () => {
        if (address) {
            const disclaimer = await insertDisclaimer(address, true);
            if (disclaimer.status === "success") {
                if (disclaimer.referral_disclaimer && disclaimer.referral_disclaimer.user_status) {
                    updateIsDisclaimerVisible(false);
                }
            }
        }
    };
    const { theme } = useTheme();
    return (
        <div className="fixed font-manrop z-[2] inset-0 h-full w-full bg-[rgba(0,0,0,0.20)] backdrop-blur-[0.75rem] flex flex-row justify-center 2xl:items-center xl:items-center lg:items-center md:items-end sm:items-end max-sm:items-end xd:items-end">
            <div className=" rounded-[1rem] backdrop-blur-[20px] border-2 border-[#2e2f31] dark:border-[#E3E8EF] w-[35rem] xxl:bg-[rgba(23,24,26,0.50)] xl:bg-[rgba(23,24,26,0.50)] lg:bg-[rgba(23,24,26,0.50)] md:bg-[#17181a] sm:bg-[#17181a] xd:bg-[#17181a] dark:bg-[#EFF7F8]">
                <div className=" bg-[#ffffff0f] dark:bg-[#FCFDFE] w-auto h-[4.5rem] rounded-t-[1rem] flex justify-between text-[#FFFFFF] dark:text-[#0C0C0D] font-[800] text-[1.125rem] p-[2%_6%]">
                    <div className=" py-3">Terms & Conditions</div>
                    <button className="cursor-pointer" aria-label="Close"
                        onClick={() => {
                            updateIsDisclaimerVisible(false);
                        }}
                    >
                        <Image src={theme === "light" ? Close : CloseLight} alt="Close" />
                    </button>
                </div>
                <div className='p-[1.5rem] flex flex-col gap-[1rem] '>
                    <div className=' text-[0.875rem] font-[400] font-manrop text-[rgba(255,255,255,0.80)] dark:text-[#4A4B4D]'>Read the terms & conditions before proceeding:</div>
                    <div className=' text-[0.875rem] font-[400] font-manrop h-[13rem] overflow-y-scroll overflow-x-hidden text-[#A5A5A6] dark:text-[#777879] p-[1rem]  border-[1px] rounded-[1rem] border-[rgba(255,255,255,0.10)] dark:border-[#E3E8EF]  dark:bg-[#FCFDFE]  bg-[#111213] '>
                        <div className='flex flex-row justify-start items-start'> <span ><li></li> </span>I am not a person or entity who resides in, is a citizen of, is incorporated in, or has a registered office in the USA. I confirm I am not a US person in any form.</div>
                        <div className='flex flex-row justify-start items-start'> <span ><li></li> </span>I am not in any Prohibited jurisdiction.</div>
                        <div className='flex flex-row justify-start items-start'> <span ><li></li> </span> I am not a sanctioned person under OFAC or representative of any entity which is under OFAC.</div>
                        <div className='flex flex-row justify-start items-start'> <span ><li></li> </span>  I will not in the future access the Kana Labs website or use the Kana Labs Web App DeFi platform while located within the United States or any Prohibited Jurisdictions.</div>
                        <div className='flex flex-row justify-start items-start'> <span ><li></li> </span> I am lawfully permitted to access this site and use the Kana Labs DeFi platform under the laws of the jurisdiction in which I reside and am located.</div>
                        <div className='flex flex-row justify-start items-start'> <span ><li></li> </span> I understand that Kana Labs is a blockchain cross-chain specialist which aggregates liquidity and DeFi services from a wide range of dApps & DeFi protocols under one roof and is not providing any direct DeFi services be the mainstream transaction activities like swap & stake or structured crypto products like yield vaults or crypto derivatives.</div>
                        <div className='flex flex-row justify-start items-start'> <span ><li></li> </span>  I understand the risks associated with entering into and using DeFi products and services available in the Kana Labs Web App platform.</div>
                    </div>
                    <form className='flex flex-col gap-[1rem] w-full'>
                        <div onChange={handleCheckboxChange}
                            className="  py-[0.25rem] flex flex-row justify-start items-center  gap-[0.5rem]">
                            <input type="checkbox" className='cursor-pointer '

                                id='mycheck_box'
                            />
                            <label
                                htmlFor='mycheck_box'
                                className={`  dark:text-[14px] dark:font-[400] dark:text-[rgba(0,0,0,0.80)] dark:flex dark:flex-row dark:justify-start dark:items-center  text-[14px] font-[400] text-[rgba(255,255,255,0.80)] flex flex-row justify-start items-center cursor-pointer `} >
                                I have read and agree the terms & conditions
                            </label>
                        </div>
                        <div
                            className={`rounded-[1rem] bg-[#0E9384] w-full p-[1px_1.5px_6px_1.5px] ${isChecked ? 'cursor-pointer' : 'cursor-not-allowed'}`}
                            onClick={() => {
                                if (isChecked) {
                                    handelOnClickContinue();
                                }
                            }}

                        >
                            <div className={`bg-[#17181A] dark:bg-[#FFF] w-full h-full py-[0.938rem] flex flex-row justify-center items-center font-bold leading-[normal] py-[0.938rem] rounded-[1rem] text-center w-full`}>
                                <span className={`text-[#2ED3B7] font-[800] font-manrop dark:text-[#0E9384] text-[1rem]`}>
                                    Continue
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Disclaimer
