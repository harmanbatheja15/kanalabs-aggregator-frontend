import React from "react";
import Image from "next/image";
import Vector from "../../assets/Icons/vector-down-green.svg";
import Token from "../../assets/Icons/Token-img.svg";
import SubToken from "../../assets/Icons/Sub-Token.svg";
import Arrow from "../../assets/Icons/arrow-narrow-right.svg";
import Chevrondown from "../../assets/Icons/chevron-down.svg";
import { Pagination, Typography } from "antd";
import Vectorright from "../../assets/Icons/chevron right green.svg";
import Vectorleft from "../../assets/Icons/chevron left white.svg";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import Framicon from "../../assets/Icons/Vector-right.svg";
import FrameCircle from "../../assets/Icons/Frame-horse.svg";
import Framellipse from "../../assets/Icons/Frame-ellipse.svg";
import Filter from "../../assets/Icons/filter-lines.svg";

const TranscationHistory = () => {
  return (
    <div>
      <div className="xxl:bg-[#17181a] xl:bg-[#17181a] lg:bg-[#17181a] md:bg-[#0c0c0d] sm:bg-[#0c0c0d] xd:bg-[#0c0c0d] w-[42.75rem] rounded-[1rem] xxl:border-[0.063rem] xl:border-[0.063rem] lg:border-[0.063rem] md:border-none sm:border-none xd:border-none border-[#2e2f31] xxl:ml-[7rem] xl:ml-[7rem] lg:ml-[7rem] md:ml-0 sm:ml-0 xd:ml-0 my-2">
        <div className="gap-[0.5rem] flex justify-between p-4 border-b-2 border-[#2e2f31]">
          <div className="text-[#A5A5A6] text-[0.875rem] font-[800]">
            Transactopn History
          </div>
          <div className="flex gap-[0.5rem]">
            <div className=" border-2 cursor-pointer border-[#2ED3B7] rounded-[0.5rem] xxl:w-[4rem] xl:w-[4rem] lg:w-[4rem] md:w-[4rem] sm:w-[rem] xd:w-[2rem] h-[2rem] flex justify-center items-center text-[0.75rem] text-[#2ED3B7] font-[700]">
              <div className="xxl:inline-flex xl:inline-flex lg:inline-flex md:hidden sm:hidden xd:hidden">
                Filter
              </div>
              <Image
                src={Filter}
                alt="/"
                className=" xxl:hidden xl:hidden lg:hidden md:inline-flex sm:inline-flex xd:inline-flex"
              />
            </div>
            <div className=" border-2 cursor-pointer border-[#2ED3B7] rounded-[0.5rem] w-[6.313rem] h-[2rem] flex justify-center items-center text-[0.75rem] text-[#2ED3B7] font-[700]">
              <span>All Wallets</span>
              <Image src={Vector} alt="Vector" className=" ml-2" />
            </div>
          </div>
        </div>
        <div className=" gap-[0.75rem] flex justify-center py-4">
          <div>
            <div className="xxl:w-[38.75rem] xl:w-[38.75rem] lg:w-[38.75rem] md:w-[38.75rem] sm:w-[22rem] xd:w-[22rem] bg-[#111213] rounded-[0.5rem] border-2 border-[#ffffff1a]">
              <Accordion className="bg-[#111213] rounded-[0.5rem]">
                <AccordionSummary className="bg-[#111213] rounded-[0.5rem]">
                  <div className="px-2 py-2 w-full">
                    <div className=" flex">
                      <div className=" cursor-pointer">
                        <Image src={Token} alt="/" />
                        <Image
                          src={SubToken}
                          alt="/"
                          className=" absolute mt-[-1rem] xxl:ml-7 xl:ml-7 lg:ml-7 md:ml-7 sm:ml-0 xd:ml-0"
                        />
                      </div>
                      <div className="flex flex-col xxl:px-3 xl:px-3 lg:px-3 md:px-3 sm:px-1 xd:px-1 xxl:py-0 xl:py-0 lg:py-0 md:py-0 sm:py-2 xd:py-2">
                        <div className="text-[#FFFFFFCC] font-[800] text-[0.875rem]">
                          52.97 ETH
                        </div>
                        <div className="text-[#A5A5A6] font-[400] text-[0.75rem] xxl:inline xl:inline lg:inlline md:hidden sm:hidden xd:hidden">
                          0xwalletaddressxyz
                        </div>
                      </div>
                      <Image src={Arrow} alt="Arrow" />
                      <div className=" pl-5 cursor-pointer">
                        <Image src={Token} alt="/" />
                        <Image
                          src={SubToken}
                          alt="/"
                          className=" absolute mt-[-1rem] xxl:ml-7 xl:ml-7 lg:ml-7 md:ml-7 sm:ml-0 xd:ml-0"
                        />
                      </div>
                      <div className="flex flex-col xxl:px-3 xl:px-3 lg:px-3 md:px-3 sm:px-1 xd:px-1 xxl:py-0 xl:py-0 lg:py-0 md:py-0 sm:py-2 xd:py-2">
                        <div className="text-[#FFFFFFCC] font-[800] text-[0.875rem]">
                          52.97 ETH
                        </div>
                        <div className="text-[#A5A5A6] font-[400] text-[0.75rem] xxl:inline xl:inline lg:inlline md:hidden sm:hidden xd:hidden">
                          0xwalletaddressxyz
                        </div>
                      </div>
                    </div>
                    <div className=" flex justify-between">
                      <div className="flex pt-6">
                        <span className=" text-[0.75rem] text-[#777879] font-[400]">
                          Completed at
                        </span>
                        <span className=" text-[0.75rem] text-[#A5A5A6] font-[400] pl-1">
                          26/09/23 10:32 PM IST
                        </span>
                      </div>
                      <Image
                        src={Chevrondown}
                        alt="Chevrondown"
                        className=" cursor-pointer mt-5"
                      />
                    </div>
                  </div>
                </AccordionSummary>
                <AccordionDetails className="bg-[#111213] rounded-[0.5rem]">
                  <Typography>
                    <div>
                      <div className=" flex justify-center">
                        <div className=" xxl:w-[36.75rem] xl:w-[36.75rem] lg:w-[36.75rem] md:w-[36.75rem] sm:w-[20.5rem] xd:w-[20.5rem] bg-[#17181A80] text-[#FFFFFFCC] h-[2.125rem] rounded-[0.5rem] font-[400] flex justify-center ">
                          <div className=" pt-1">Matic</div>
                          <Image src={Framicon} alt="" className=" ml-2" />
                          <Image src={FrameCircle} alt="" className=" ml-2" />
                          <Image src={Framicon} alt="" className=" ml-2" />

                          <div className=" ml-2 pt-1">USDT</div>
                          <Image src={Framicon} alt="" className=" ml-2" />
                          <Image src={Framellipse} alt="/" className=" ml-2" />
                          <Image src={Framicon} alt="" className=" ml-2" />

                          <div className=" ml-2 pt-1">USDT</div>
                          <Image src={Framicon} alt="" className=" ml-2" />
                          <Image src={FrameCircle} alt="" className=" ml-2" />
                          <Image src={Framicon} alt="" className=" ml-2" />

                          <div className=" ml-2 pt-1">APT</div>
                        </div>
                      </div>
                      <div className="flex justify-between pt-2">
                        <div className="text-[#A5A5A6] text-[0.875rem]">
                          Slippage tolerance
                        </div>
                        <div className="text-[#FFFFFFCC] text-[0.875rem]">
                          0.5%
                        </div>
                      </div>
                      <div className="flex justify-between pt-2">
                        <div className="text-[#A5A5A6] text-[0.875rem]">
                          1 USDC price
                        </div>
                        <div className="text-[#FFFFFFCC] text-[0.875rem]">
                          0.869911 MATIC
                        </div>
                      </div>
                      <div className="flex justify-between pt-2">
                        <div className="text-[#A5A5A6] text-[0.875rem]">
                          1 MATIC price
                        </div>
                        <div className="text-[#FFFFFFCC] text-[0.875rem]">
                          1.149455 USDC
                        </div>
                      </div>
                      <div className=" flex justify-between border-t-2 border-[#ffffff1a] mt-2">
                        <div className="flex pt-2">
                          <span className=" text-[0.75rem] text-[#777879] font-[400]">
                            Completed at
                          </span>
                          <span className=" text-[0.75rem] text-[#A5A5A6] font-[400] pl-1">
                            26/09/23 10:32 PM IST
                          </span>
                        </div>
                        <Image
                          src={Chevrondown}
                          alt="Chevrondown"
                          className=" cursor-pointer mt-2"
                        />
                      </div>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="xxl:w-[38.75rem] xl:w-[38.75rem] lg:w-[38.75rem] md:w-[38.75rem] sm:w-[22rem] xd:w-[22rem] bg-[#111213] rounded-[0.5rem] border-2 border-[#ffffff1a] mt-2">
              <Accordion className="bg-[#111213] rounded-[0.5rem]">
                <AccordionSummary className="bg-[#111213] rounded-[0.5rem]">
                  <div className="px-2 py-2 w-full">
                    <div className=" flex">
                      <div className=" cursor-pointer">
                        <Image src={Token} alt="/" />
                        <Image
                          src={SubToken}
                          alt="/"
                          className=" absolute mt-[-1rem] xxl:ml-7 xl:ml-7 lg:ml-7 md:ml-7 sm:ml-0 xd:ml-0"
                        />
                      </div>
                      <div className="flex flex-col xxl:px-3 xl:px-3 lg:px-3 md:px-3 sm:px-1 xd:px-1 xxl:py-0 xl:py-0 lg:py-0 md:py-0 sm:py-2 xd:py-2">
                        <div className="text-[#FFFFFFCC] font-[800] text-[0.875rem]">
                          52.97 ETH
                        </div>
                        <div className="text-[#A5A5A6] font-[400] text-[0.75rem] xxl:inline xl:inline lg:inlline md:hidden sm:hidden xd:hidden">
                          0xwalletaddressxyz
                        </div>
                      </div>
                      <Image src={Arrow} alt="Arrow" />
                      <div className=" pl-5 cursor-pointer">
                        <Image src={Token} alt="/" />
                        <Image
                          src={SubToken}
                          alt="/"
                          className=" absolute mt-[-1rem] xxl:ml-7 xl:ml-7 lg:ml-7 md:ml-7 sm:ml-0 xd:ml-0"
                        />
                      </div>
                      <div className="flex flex-col xxl:px-3 xl:px-3 lg:px-3 md:px-3 sm:px-1 xd:px-1 xxl:py-0 xl:py-0 lg:py-0 md:py-0 sm:py-2 xd:py-2">
                        <div className="text-[#FFFFFFCC] font-[800] text-[0.875rem]">
                          52.97 ETH
                        </div>
                        <div className="text-[#A5A5A6] font-[400] text-[0.75rem] xxl:inline xl:inline lg:inlline md:hidden sm:hidden xd:hidden">
                          0xwalletaddressxyz
                        </div>
                      </div>
                    </div>
                    <div className=" flex justify-between">
                      <div className="flex pt-6">
                        <span className=" text-[0.75rem] text-[#777879] font-[400]">
                          Completed at
                        </span>
                        <span className=" text-[0.75rem] text-[#A5A5A6] font-[400] pl-1">
                          26/09/23 10:32 PM IST
                        </span>
                      </div>
                      <Image
                        src={Chevrondown}
                        alt="Chevrondown"
                        className=" cursor-pointer mt-5"
                      />
                    </div>
                  </div>
                </AccordionSummary>
                <AccordionDetails className="bg-[#111213] rounded-[0.5rem]">
                  <Typography>
                    <div>
                      <div className=" flex justify-center">
                        <div className=" xxl:w-[36.75rem] xl:w-[36.75rem] lg:w-[36.75rem] md:w-[36.75rem] sm:w-[20.5rem] xd:w-[20.5rem] bg-[#17181A80] text-[#FFFFFFCC] h-[2.125rem] rounded-[0.5rem] font-[400] flex justify-center ">
                          <div className=" pt-1">Matic</div>
                          <Image src={Framicon} alt="" className=" ml-2" />
                          <Image src={FrameCircle} alt="" className=" ml-2" />
                          <Image src={Framicon} alt="" className=" ml-2" />

                          <div className=" ml-2 pt-1">USDT</div>
                          <Image src={Framicon} alt="" className=" ml-2" />
                          <Image src={Framellipse} alt="/" className=" ml-2" />
                          <Image src={Framicon} alt="" className=" ml-2" />

                          <div className=" ml-2 pt-1">USDT</div>
                          <Image src={Framicon} alt="" className=" ml-2" />
                          <Image src={FrameCircle} alt="" className=" ml-2" />
                          <Image src={Framicon} alt="" className=" ml-2" />

                          <div className=" ml-2 pt-1">APT</div>
                        </div>
                      </div>
                      <div className="flex justify-between pt-2">
                        <div className="text-[#A5A5A6] text-[0.875rem]">
                          Slippage tolerance
                        </div>
                        <div className="text-[#FFFFFFCC] text-[0.875rem]">
                          0.5%
                        </div>
                      </div>
                      <div className="flex justify-between pt-2">
                        <div className="text-[#A5A5A6] text-[0.875rem]">
                          1 USDC price
                        </div>
                        <div className="text-[#FFFFFFCC] text-[0.875rem]">
                          0.869911 MATIC
                        </div>
                      </div>
                      <div className="flex justify-between pt-2">
                        <div className="text-[#A5A5A6] text-[0.875rem]">
                          1 MATIC price
                        </div>
                        <div className="text-[#FFFFFFCC] text-[0.875rem]">
                          1.149455 USDC
                        </div>
                      </div>
                      <div className=" flex justify-between border-t-2 border-[#ffffff1a] mt-2">
                        <div className="flex pt-2">
                          <span className=" text-[0.75rem] text-[#777879] font-[400]">
                            Completed at
                          </span>
                          <span className=" text-[0.75rem] text-[#A5A5A6] font-[400] pl-1">
                            26/09/23 10:32 PM IST
                          </span>
                        </div>
                        <Image
                          src={Chevrondown}
                          alt="Chevrondown"
                          className=" cursor-pointer mt-2"
                        />
                      </div>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="xxl:w-[38.75rem] xl:w-[38.75rem] lg:w-[38.75rem] md:w-[38.75rem] sm:w-[22rem] xd:w-[22rem] bg-[#111213] rounded-[0.5rem] border-2 border-[#ffffff1a] mt-2">
              <Accordion className="bg-[#111213] rounded-[0.5rem]">
                <AccordionSummary className="bg-[#111213] rounded-[0.5rem]">
                  <div className="px-2 py-2 w-full">
                    <div className=" flex">
                      <div className=" cursor-pointer">
                        <Image src={Token} alt="/" />
                        <Image
                          src={SubToken}
                          alt="/"
                          className=" absolute mt-[-1rem] xxl:ml-7 xl:ml-7 lg:ml-7 md:ml-7 sm:ml-0 xd:ml-0"
                        />
                      </div>
                      <div className="flex flex-col xxl:px-3 xl:px-3 lg:px-3 md:px-3 sm:px-1 xd:px-1 xxl:py-0 xl:py-0 lg:py-0 md:py-0 sm:py-2 xd:py-2">
                        <div className="text-[#FFFFFFCC] font-[800] text-[0.875rem]">
                          52.97 ETH
                        </div>
                        <div className="text-[#A5A5A6] font-[400] text-[0.75rem] xxl:inline xl:inline lg:inlline md:hidden sm:hidden xd:hidden">
                          0xwalletaddressxyz
                        </div>
                      </div>
                      <Image src={Arrow} alt="Arrow" />
                      <div className=" pl-5 cursor-pointer">
                        <Image src={Token} alt="/" />
                        <Image
                          src={SubToken}
                          alt="/"
                          className=" absolute mt-[-1rem] xxl:ml-7 xl:ml-7 lg:ml-7 md:ml-7 sm:ml-0 xd:ml-0"
                        />
                      </div>
                      <div className="flex flex-col xxl:px-3 xl:px-3 lg:px-3 md:px-3 sm:px-1 xd:px-1 xxl:py-0 xl:py-0 lg:py-0 md:py-0 sm:py-2 xd:py-2">
                        <div className="text-[#FFFFFFCC] font-[800] text-[0.875rem]">
                          52.97 ETH
                        </div>
                        <div className="text-[#A5A5A6] font-[400] text-[0.75rem] xxl:inline xl:inline lg:inlline md:hidden sm:hidden xd:hidden">
                          0xwalletaddressxyz
                        </div>
                      </div>
                    </div>
                    <div className=" flex justify-between">
                      <div className="flex pt-6">
                        <span className=" text-[0.75rem] text-[#777879] font-[400]">
                          Completed at
                        </span>
                        <span className=" text-[0.75rem] text-[#A5A5A6] font-[400] pl-1">
                          26/09/23 10:32 PM IST
                        </span>
                      </div>
                      <Image
                        src={Chevrondown}
                        alt="Chevrondown"
                        className=" cursor-pointer mt-5"
                      />
                    </div>
                  </div>
                </AccordionSummary>
                <AccordionDetails className="bg-[#111213] rounded-[0.5rem]">
                  <Typography>
                    <div>
                      <div className=" flex justify-center">
                        <div className=" xxl:w-[36.75rem] xl:w-[36.75rem] lg:w-[36.75rem] md:w-[36.75rem] sm:w-[20.5rem] xd:w-[20.5rem] bg-[#17181A80] text-[#FFFFFFCC] h-[2.125rem] rounded-[0.5rem] font-[400] flex justify-center ">
                          <div className=" pt-1">Matic</div>
                          <Image src={Framicon} alt="" className=" ml-2" />
                          <Image src={FrameCircle} alt="" className=" ml-2" />
                          <Image src={Framicon} alt="" className=" ml-2" />

                          <div className=" ml-2 pt-1">USDT</div>
                          <Image src={Framicon} alt="" className=" ml-2" />
                          <Image src={Framellipse} alt="/" className=" ml-2" />
                          <Image src={Framicon} alt="" className=" ml-2" />

                          <div className=" ml-2 pt-1">USDT</div>
                          <Image src={Framicon} alt="" className=" ml-2" />
                          <Image src={FrameCircle} alt="" className=" ml-2" />
                          <Image src={Framicon} alt="" className=" ml-2" />

                          <div className=" ml-2 pt-1">APT</div>
                        </div>
                      </div>
                      <div className="flex justify-between pt-2">
                        <div className="text-[#A5A5A6] text-[0.875rem]">
                          Slippage tolerance
                        </div>
                        <div className="text-[#FFFFFFCC] text-[0.875rem]">
                          0.5%
                        </div>
                      </div>
                      <div className="flex justify-between pt-2">
                        <div className="text-[#A5A5A6] text-[0.875rem]">
                          1 USDC price
                        </div>
                        <div className="text-[#FFFFFFCC] text-[0.875rem]">
                          0.869911 MATIC
                        </div>
                      </div>
                      <div className="flex justify-between pt-2">
                        <div className="text-[#A5A5A6] text-[0.875rem]">
                          1 MATIC price
                        </div>
                        <div className="text-[#FFFFFFCC] text-[0.875rem]">
                          1.149455 USDC
                        </div>
                      </div>
                      <div className=" flex justify-between border-t-2 border-[#ffffff1a] mt-2">
                        <div className="flex pt-2">
                          <span className=" text-[0.75rem] text-[#777879] font-[400]">
                            Completed at
                          </span>
                          <span className=" text-[0.75rem] text-[#A5A5A6] font-[400] pl-1">
                            26/09/23 10:32 PM IST
                          </span>
                        </div>
                        <Image
                          src={Chevrondown}
                          alt="Chevrondown"
                          className=" cursor-pointer mt-2"
                        />
                      </div>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="xxl:w-[38.75rem] xl:w-[38.75rem] lg:w-[38.75rem] md:w-[38.75rem] sm:w-[22rem] xd:w-[22rem] bg-[#111213] rounded-[0.5rem] border-2 border-[#ffffff1a] mt-2">
              <Accordion className="bg-[#111213] rounded-[0.5rem]">
                <AccordionSummary className="bg-[#111213] rounded-[0.5rem]">
                  <div className="px-2 py-2 w-full">
                    <div className=" flex">
                      <div className=" cursor-pointer">
                        <Image src={Token} alt="/" />
                        <Image
                          src={SubToken}
                          alt="/"
                          className=" absolute mt-[-1rem] xxl:ml-7 xl:ml-7 lg:ml-7 md:ml-7 sm:ml-0 xd:ml-0"
                        />
                      </div>
                      <div className="flex flex-col xxl:px-3 xl:px-3 lg:px-3 md:px-3 sm:px-1 xd:px-1 xxl:py-0 xl:py-0 lg:py-0 md:py-0 sm:py-2 xd:py-2">
                        <div className="text-[#FFFFFFCC] font-[800] text-[0.875rem]">
                          52.97 ETH
                        </div>
                        <div className="text-[#A5A5A6] font-[400] text-[0.75rem] xxl:inline xl:inline lg:inlline md:hidden sm:hidden xd:hidden">
                          0xwalletaddressxyz
                        </div>
                      </div>
                      <Image src={Arrow} alt="Arrow" />
                      <div className=" pl-5 cursor-pointer">
                        <Image src={Token} alt="/" />
                        <Image
                          src={SubToken}
                          alt="/"
                          className=" absolute mt-[-1rem] xxl:ml-7 xl:ml-7 lg:ml-7 md:ml-7 sm:ml-0 xd:ml-0"
                        />
                      </div>
                      <div className="flex flex-col xxl:px-3 xl:px-3 lg:px-3 md:px-3 sm:px-1 xd:px-1 xxl:py-0 xl:py-0 lg:py-0 md:py-0 sm:py-2 xd:py-2">
                        <div className="text-[#FFFFFFCC] font-[800] text-[0.875rem]">
                          52.97 ETH
                        </div>
                        <div className="text-[#A5A5A6] font-[400] text-[0.75rem] xxl:inline xl:inline lg:inlline md:hidden sm:hidden xd:hidden">
                          0xwalletaddressxyz
                        </div>
                      </div>
                    </div>
                    <div className=" flex justify-between">
                      <div className="flex pt-6">
                        <span className=" text-[0.75rem] text-[#777879] font-[400]">
                          Completed at
                        </span>
                        <span className=" text-[0.75rem] text-[#A5A5A6] font-[400] pl-1">
                          26/09/23 10:32 PM IST
                        </span>
                      </div>
                      <Image
                        src={Chevrondown}
                        alt="Chevrondown"
                        className=" cursor-pointer mt-5"
                      />
                    </div>
                  </div>
                </AccordionSummary>
                <AccordionDetails className="bg-[#111213] rounded-[0.5rem]">
                  <Typography>
                    <div>
                      <div className=" flex justify-center">
                        <div className=" xxl:w-[36.75rem] xl:w-[36.75rem] lg:w-[36.75rem] md:w-[36.75rem] sm:w-[20.5rem] xd:w-[20.5rem] bg-[#17181A80] text-[#FFFFFFCC] h-[2.125rem] rounded-[0.5rem] font-[400] flex justify-center mt-2 ">
                          <div className=" pt-1">Matic</div>
                          <Image src={Framicon} alt="" className=" ml-2" />
                          <Image src={FrameCircle} alt="" className=" ml-2" />
                          <Image src={Framicon} alt="" className=" ml-2" />

                          <div className=" ml-2 pt-1">USDT</div>
                          <Image src={Framicon} alt="" className=" ml-2" />
                          <Image src={Framellipse} alt="/" className=" ml-2" />
                          <Image src={Framicon} alt="" className=" ml-2" />

                          <div className=" ml-2 pt-1">USDT</div>
                          <Image src={Framicon} alt="" className=" ml-2" />
                          <Image src={FrameCircle} alt="" className=" ml-2" />
                          <Image src={Framicon} alt="" className=" ml-2" />

                          <div className=" ml-2 pt-1">APT</div>
                        </div>
                      </div>
                      <div className="flex justify-between pt-2">
                        <div className="text-[#A5A5A6] text-[0.875rem]">
                          Slippage tolerance
                        </div>
                        <div className="text-[#FFFFFFCC] text-[0.875rem]">
                          0.5%
                        </div>
                      </div>
                      <div className="flex justify-between pt-2">
                        <div className="text-[#A5A5A6] text-[0.875rem]">
                          1 USDC price
                        </div>
                        <div className="text-[#FFFFFFCC] text-[0.875rem]">
                          0.869911 MATIC
                        </div>
                      </div>
                      <div className="flex justify-between pt-2">
                        <div className="text-[#A5A5A6] text-[0.875rem]">
                          1 MATIC price
                        </div>
                        <div className="text-[#FFFFFFCC] text-[0.875rem]">
                          1.149455 USDC
                        </div>
                      </div>
                      <div className=" flex justify-between border-t-2 border-[#ffffff1a] mt-2">
                        <div className="flex pt-2">
                          <span className=" text-[0.75rem] text-[#777879] font-[400]">
                            Completed at
                          </span>
                          <span className=" text-[0.75rem] text-[#A5A5A6] font-[400] pl-1">
                            26/09/23 10:32 PM IST
                          </span>
                        </div>
                        <Image
                          src={Chevrondown}
                          alt="Chevrondown"
                          className=" cursor-pointer mt-2"
                        />
                      </div>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            {/* <Pagination className=" flex justify-center pt-3" /> */}
            <div>
              <div className=" flex justify-center text-[0.875rem] text-[#A5A5A6] font-[400] pt-8">
                <Image
                  src={Vectorleft}
                  alt="Vectorleft"
                  className=" cursor-pointer"
                />
                <div className=" bg-[#ffffff1a] text-[#FFFFFFCC] font-[600] w-[2.5rem] h-[2.5rem] flex justify-center items-center rounded-[0.5rem] ml-4 cursor-pointer">
                  1
                </div>
                <div className=" w-[2.5rem] h-[2.5rem] items-center flex justify-center ml-4 cursor-pointer">
                  2
                </div>
                <div className=" w-[2.5rem] h-[2.5rem] items-center flex justify-center ml-4 cursor-pointer">
                  3
                </div>
                <Image
                  src={Vectorright}
                  alt="Vectorright"
                  className=" cursor-pointer"
                />
              </div>
            </div>
            <div className="text-[#777879] font-[400] text-[0.875rem] flex justify-center pt-3">
              Showing 1-5 out of 12 transactions
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TranscationHistory;
