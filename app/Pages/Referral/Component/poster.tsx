"use client";
import { TRADEPOSTERLINK } from "@/app/utils/constants";
import Tradeposter from "../../../../assets/Icons/TradeContestPoster.jpg";
import Close from "../../../../assets/Icons/close.svg";
import Image from "next/image";
import { useStore } from "@/app/store";

const Poster = () => {
    const {updateIsPosterVisible } = useStore();
    const onClose = () => {
        updateIsPosterVisible(false);
    };
  return (
    <div className="fixed !right-0 !bottom-0 w-[20rem] h-auto m-3 ">
      <div className="rounded-[0.5rem] bg-[#0f0f0f]  dark:bg-[#ffffff]  p-[0.5rem] flex flex-col justify-start items-center gap-[1rem] ">
        <div className="w-full flex flex-row justify-between px-2 pt-2 items-center">
          <div></div>
          <Image src={Close} alt="" className="cursor-pointer" onClick={() => onClose()}  />
        </div>
        <Image src={Tradeposter} className="rounded-[0.5rem]" alt={""} />
        <div
          className="rounded-2xl text-center cursor-pointer py-2.5 font-medium text-[#ffffff] dark:text-[#0f0f0f]  font-inter tracking-wider w-full bg-[#0e9388]"
          onClick={() => {
            window.open(TRADEPOSTERLINK);
            onClose();
          }}
        >
          Join now
        </div>
      </div>
    </div>
  );
};

export default Poster;
