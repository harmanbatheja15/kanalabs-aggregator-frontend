"use client";
import { useEffect, useState } from "react";
import { Sidebar } from "./Component";
import Referral from "./Pages/Referral/page";

export default function Home() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [isSidebarHidden, setIsSidebarHidden] = useState(true);

  useEffect(() => {
    const checkWindowSize = () => {
      const isSmallScreen = window.innerWidth < 1200;
      setIsSidebarHidden(isSmallScreen);
    };
    window.addEventListener("resize", checkWindowSize);
    checkWindowSize();
    return () => window.removeEventListener("resize", checkWindowSize);
  }, []);
  return (
    <div className=" dark:bg-[#e4f2f3]  bg-[#0C0C0D]  h-full font-inter flex flex-row justify-center items-start w-full ">
      <div className=" xxl:inline bxl:inline xl:inline sxl:inline lg:hidden md:hidden sm:hidden xd:hidden  ">
        <Sidebar
          isSidebarExpanded={isSidebarExpanded}
          setIsSidebarExpanded={setIsSidebarExpanded}
          isSidebarHidden={isSidebarHidden}
        />
      </div>
      <Referral />
    </div>
  );
}
