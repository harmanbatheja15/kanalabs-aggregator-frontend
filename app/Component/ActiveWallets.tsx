"use-client";
import React from "react";
import Image from "next/image";
import Fox from "../../assets/Icons/MetaMask.svg";
import copy from "../../assets/Icons/copy icon.svg";
import Logoff from "../../assets/Icons/Logoff.svg";
import Phantom from "../../assets/Icons/Phantom.svg";
import plus from "../../assets/Icons/plus-circle.svg";

const ActiveWallets = () => {
  return (
    <div>
      <div className=" flex justify-center">
        <div className="xxl:bg-[#17181a] xl:bg-[#17181a] lg:bg-[#17181a] md:bg-[#0c0c0d] sm:bg-[#0c0c0d] xd:bg-[#0c0c0d] xxl:border-[0.063rem] xl:border-[0.063rem] lg:border-[0.063rem] md:border-none sm:border-none xd:border-none xxl:w-[40.75rem] xl:w-[40.75rem] lg:w-[40.75rem] md:w-full sm:w-full xd:w-full rounded-[1rem] border-[0.063rem] border-[#2e2f31] xxl:ml-28 xl:ml-28 lg:ml-28 md:ml-0 sm:ml-0 xd:ml-0 my-2">
          <div className="gap-[0.5rem] flex justify-between p-4 border-b-2 border-[#2e2f31]">
            <div className="text-[#A5A5A6] text-[0.875rem] font-[800]">
              Connected wallets
            </div>
            <div className="flex gap-[0.5rem]">
              <div className=" border-2 cursor-pointer border-[#F04438] rounded-[0.5rem] w-[8rem] h-[2rem] flex justify-center items-center text-[0.75rem] text-[#F04438] font-[700]">
                Disconnect all
              </div>
            </div>
          </div>
          <div className=" gap-[0.75rem] flex justify-center py-4">
            <div>
              <div className="xxl:w-[38.75rem] xl:w-[38.75rem] lg:w-[38.75rem] md:w-[38.75rem] sm:w-[20.5rem] xd:w-[20.5rem] h-[4rem] bg-[#111213] rounded-[1rem] border-2 border-[#ffffff1a] flex justify-between p-[0%_4%]">
                <div className="flex">
                  <Image src={Fox} alt="" />
                  <div className="text-[#FFFFFFCC] text-[1rem] font-[400] pt-4 pl-3">
                    0xwalletaddressxyz
                  </div>
                </div>
                <div className=" flex">
                  <Image src={copy} alt="/" className=" cursor-pointer" />
                  <Image
                    src={Logoff}
                    alt="/"
                    className=" ml-3 cursor-pointer"
                  />
                </div>
              </div>
              <div className="xxl:w-[38.75rem] xl:w-[38.75rem] lg:w-[38.75rem] md:w-[38.75rem] sm:w-[20.5rem] xd:w-[20.5rem] h-[4rem] bg-[#111213] rounded-[1rem] border-2 border-[#ffffff1a] mt-2 flex justify-between p-[0%_4%]">
                <div className="flex">
                  <Image src={Phantom} alt="" />
                  <div className="text-[#FFFFFFCC] text-[1rem] font-[400] pt-4 pl-3">
                    0xwalletaddressxyz
                  </div>
                </div>
                <div className=" flex">
                  <Image src={copy} alt="/" className=" cursor-pointer" />
                  <Image
                    src={Logoff}
                    alt="/"
                    className=" ml-3 cursor-pointer"
                  />
                </div>
              </div>
              <div className="xxl:w-[38.75rem] xl:w-[38.75rem] lg:w-[38.75rem] md:w-[38.75rem] sm:w-[20.5rem] xd:w-[20.5rem] h-[4rem] bg-[#111213] rounded-[1rem] border-2 border-[#ffffff1a] mt-2 flex justify-between">
                <div className="flex pl-7">
                  <Image src={plus} alt="" />
                  <div className="text-[#2ED3B7] text-[1rem] font-[800] pt-4 pl-3">
                    0xwalletaddressxyz
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveWallets;
