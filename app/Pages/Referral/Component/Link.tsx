/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Close from "../../../../assets/Icons/x-close.svg";
import CloseLight from "../../../../assets/Icons/x-close-light.svg";
import { useTheme } from "next-themes";
import { toast } from "react-toastify";
import { notification } from "antd";

interface LinkInterface {
  handleCloseReferalLink(): void;
}
const Link = (props: LinkInterface) => {
  const { theme } = useTheme();
  const { handleCloseReferalLink } = props;
  const [value, setValue] = useState("");
  const handleInputChange = (e: any) => {
    setValue(e.target.value);
  };
  const handleInput = async () => {
    const urlRegex = /^http:\/\/tinyurl\.com\/([0-9a-za-z]+)$/;
    const match = value.match(urlRegex);
    if (match) {
      const extractedAddress = match[1];
      if (extractedAddress) {
        window.location.href = value;
      } else {
        toast.dismiss();
        toast.error("Invalid address or chain");
        toast.success("Address Copied");
        notification.success({
          message: "Address Copied",
        });
        notification.error({
          message: "Invalid address or chain",
        });
      }
    } else {
      toast.dismiss();
      toast.error("Invalid URL");
      notification.error({ message: "Invalid URL" });
    }
  };

  return (
    <div className=" h-full">
      <div className="fixed font-manrop dark:font-manrop z-[2] inset-0 h-full w-full bg-[rgba(0,0,0,0.20)] backdrop-blur-[1.25rem] flex flex-row justify-center 2xl:items-center xl:items-center lg:items-center md:items-end sm:items-end max-sm:items-end xd:items-end">
        <div className=" rounded-[1rem] border-2 border-[#2e2f31] dark:border-[#E3E8EF] w-[35rem] xxl:bg-transparent xl:bg-transparent lg:bg-transparent md:bg-[#17181a] sm:bg-[#17181a] xd:bg-[#17181a] dark:bg-[#FCFDFE]">
          <div className=" bg-[#ffffff0f] w-auto h-[4.5rem] rounded-t-[1rem] flex justify-between text-[#FFFFFF] dark:text-[#0C0C0D] font-[800] text-[1.125rem] p-[2%_6%] dark:bg-[#EFF7F8] dark:border-b-2 dark:border-[#E3E8EF] ">
            <div className=" py-3">Referral</div>
            <Image
              src={theme === "light" ? Close : CloseLight}
              alt="Close"
              className=" cursor-pointer"
              onClick={handleCloseReferalLink}
            />
          </div>
          <div className="text-[#FFFFFFCC] dark:text-[#0C0C0D] font-[400] text-[0.875rem] font-inter pl-5 pt-4">
            Enter a referral link if you have one
          </div>
          <div className=" flex justify-center items-center pt-2">
            <input
              className="w-[33rem] h-[4rem] border-2 text-[#fffffffc] dark:text-[#0C0C0D] border-[#ffffff0f] dark:border-[#E3E8EF]  rounded-[1rem] text-[0.875rem] p-5 bg-transparent outline-none"
              placeholder="Paste link here"
              type="text"
              value={value}
              onChange={handleInputChange}
            />
          </div>
          <div className=" flex justify-center pt-2 mb-6">
            <button
              className={`${
                theme === "light" ? "buy-button" : "buy-button-light"
              } w-[16.25rem] h-[4rem] rounded-[1rem]`}
              onClick={handleCloseReferalLink}
            >
              <div
                className={`${
                  theme === "dark"
                    ? "buy-button-inner-light"
                    : "buy-button-inner"
                }`}
              >
                <span className=" text-[#2ED3B7] font-[800]">Skip</span>
              </div>
            </button>
            <button
              className={`${
                theme === "light" ? "buy-button" : "buy-button-light"
              } w-[16.25rem] h-[4rem] rounded-[1rem] ml-2`}
              onClick={() => handleInput()}
            >
              <div
                className={`${
                  theme === "dark"
                    ? "buy-button-inner-light"
                    : "buy-button-inner"
                }`}
              >
                <span className=" text-[#2ED3B7] font-[800]">Proceed</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Link;
