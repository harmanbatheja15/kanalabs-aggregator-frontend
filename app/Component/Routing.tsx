import React from "react";
import Image from "next/image";
import Token from "../../assets/Icons/Token-img.svg";
import SubToken from "../../assets/Icons/Sub-Token.svg";
import doubleright from "../../assets/Icons/chevron-right-double.svg";
import { Accordion, AccordionSummary, Typography } from "@mui/material";
import { AccordionItem } from "@nextui-org/react";
const Routing = () => {
  return (
    <div>
      <div className="w-[40.75rem] bg-[#17181A] border-2 border-[#ffffff1a] rounded-[1rem] font-manrop">
        <div className=" text-[#A5A5A6] font-[800] text-[0.625rem]">
          <span className=" text-[#777879]">ETA</span>{" "}
          <span className=" pl-0.5"> 26/09/23 10:32 PM IST</span>
        </div>
        <div className="px-2 py-2 w-full">
          <div className=" flex">
            <div className=" cursor-pointer">
              <Image src={Token} alt="/" />
              <Image
                src={SubToken}
                alt="/"
                className=" absolute mt-[-1rem] ml-7"
              />
            </div>
            <div className="flex flex-col px-3">
              <div className="text-[#FFFFFFCC] font-[800] text-[0.875rem]">
                52.97 ETH
              </div>
              <div className="text-[#A5A5A6] font-[400] text-[0.75rem]">
                0xwalletaddressxyz
              </div>
            </div>
            <Image src={doubleright} alt="Arrow" />
            <div className=" pl-5 cursor-pointer">
              <Image src={Token} alt="/" />
              <Image
                src={SubToken}
                alt="/"
                className=" absolute mt-[-1rem] ml-7"
              />
            </div>
            <div className="flex flex-col px-3">
              <div className="text-[#FFFFFFCC] font-[800] text-[0.875rem]">
                52.97 ETH
              </div>
              <div className="text-[#A5A5A6] font-[400] text-[0.75rem]">
                0xwalletaddressxyz
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-center">
          <Accordion>
            <AccordionItem>
              <div className=" bg-[#111213] w-[38.75rem] rounded-[1rem] border-2 border-[#ffffff1a] text-center">
                <div className="text-[0.875rem] text-[#FFFFFFCC] font-[400] flex">
                  Bridging from <span className=" font-[800]">Polygon</span> to
                  <span className="font-[800]">BSC</span> via
                  <span className="font-[800]">Stargate</span>
                </div>
              </div>
            </AccordionItem>
            <AccordionSummary>
              <Typography></Typography>
            </AccordionSummary>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Routing;
