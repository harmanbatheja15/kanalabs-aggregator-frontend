import React from "react";
import Image from "next/image";
import Refresh from "../../assets/Icons/refresh.svg";
import Chevrondown from "../../assets/Icons/chevron-down.svg";
import Liduity from "../../assets/Icons/Frame-liquidity.svg";
import TToken from "../../assets/Icons/T-Token.svg";
import Load from "../../assets/Icons/Frame-load.svg";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import Framicon from "../../assets/Icons/Vector-right.svg";
import FrameCircle from "../../assets/Icons/Frame-horse.svg";
import Framellipse from "../../assets/Icons/Frame-ellipse.svg";
import startVector from "../../assets/Icons/start-vector.svg";
import RefreshLight from "../../assets/Icons/refresh-light.svg";
import framelight from "../../assets/Icons/Frame-light.svg";
import loadlight from "../../assets/Icons/load-light.svg";
import Liquiditylight from "../../assets/Icons/Liquidity-light.svg";
import FrameEllipselight from "../../assets/Icons/Frame-ellipse-light.svg";
import frameciclelight from "../../assets/Icons/Frame-circle-light.svg";
import { useTheme } from "next-themes";

const PickRoute = () => {
  const { theme } = useTheme();
  return (
    <div>
      <div className=" flex justify-center mt-4">
        <div className="xxl:w-[40.75rem] xl:w-[40.75rem] lg:w-[40.75rem] md:w-full sm:w-full xd:w-full gap-[1rem] bg-[#17181a] dark:bg-[#FCFDFE] rounded-[1rem] border-2 border-[#2e2f31] xxl:bg-[#17181a] xl:bg-[#17181a] lg:bg-[#17181a] md:bg-[#0c0c0d] sm:bg-[#0c0c0d] xd:bg-[#0c0c0d] xxl:border-[0.063rem] xl:border-[0.063rem] lg:border-[0.063rem] md:border-none sm:border-none xd:border-none dark:border-[#E3E8EF]">
          <div className=" flex justify-between p-4 border-b-2 border-[#ffffff1a] dark:border-[#E3E8EF]">
            <div className=" text-[#A5A5A6] dark:text-[#777879] dark:font-[600] font-[800] text-[0.875rem]">
              Pick Route
            </div>
            <div className=" flex ">
              <div>
                <button className=" w-[8rem] border-2 rounded-[0.5rem] text-[#2ED3B7] dark:text-[#0E9384] text-[0.75rem] border-[#2ED3B7] dark:border-[#0E9384] flex justify-center items-center font-[800] h-[2rem] cursor-pointer">
                  Sort by Fastest
                </button>
              </div>
              <div className=" border-2 rounded-[0.5rem] text-[#2ED3B7] dark:text-[#0E9384] border-[#2ED3B7] dark:border-[#0E9384] flex justify-center items-center w-[2rem] h-[2rem] mx-2 cursor-pointer ">
                <Image
                  src={theme === "light" ? Refresh : RefreshLight}
                  alt="Refresh"
                />
              </div>
            </div>
          </div>
          <div className="flex absolute z-[1] bg-[#17181a] dark:bg-[#FCFDFE] dark:text-[#777879]  xxl:ml-4 xl:ml-4 lg:ml-4 md:ml-4 sm:ml-0 xd:ml-0 mt-1.5 rounded-[0.5rem]">
            <button className=" text-[#2ED3B7] text-[0.75rem] font-[400] border-2 rouned-[1rem] border-[#2e2f31] dark:border-[#E3E8EF] dark:text-[#777879] w-[6.438rem] h-[1.938rem] rounded-[0.5rem] flex justify-center items-center  ">
              <Image src={startVector} alt="" />
              <span className=" pl-1.5">Best route</span>
            </button>
          </div>
          <div>
            <div className=" flex justify-center pt-4 relative">
              <div className="xxl:w-[38.75rem] xl:w-[38.75rem] lg:w-[38.75rem] md:w-full sm:w-[20.5rem] xd:w-[20.5rem] bg-[#111213] dark:bg-[#F2F9F9] rounded-[0.5rem] border-2 border-[#ffffff1a] dark:border-[#E3E8EF]">
                <Accordion className=" rounded-[0.5rem] bg-[#111213] dark:bg-[#F2F9F9]">
                  <AccordionSummary className="bg-[#111213] dark:bg-[#F2F9F9] rounded-[0.5rem]">
                    <div className="w-full">
                      <div className=" flex justify-between p-4 border-b-2 border-[#ffffff1a] dark:border-[#E3E8EF]">
                        <div className=" flex">
                          <div className=" cursor-pointer">
                            <Image src={TToken} alt="/" />
                          </div>
                          <div className="flex flex-col px-3">
                            <div className="text-[#FFFFFFCC] dark:text-[#4A4B4D] font-[800] text-[0.875rem]">
                              52.97
                            </div>
                            <div className="text-[#A5A5A6] dark:text-[#777879] font-[400] text-[0.75rem]">
                              0.09 USD
                            </div>
                          </div>
                        </div>
                        <div className=" flex">
                          <div className=" flex">
                            <Image
                              src={theme === "light" ? Load : loadlight}
                              alt="/"
                            />
                            <div className=" text-[#A5A5A6] dark:text-[#777879] text-[0.875rem] font-[400] pt-3 pl-2">
                              22m
                            </div>
                          </div>
                          <div className=" flex pl-6">
                            <Image
                              src={theme === "light" ? Liduity : Liquiditylight}
                              alt="/"
                            />
                            <div className=" text-[#A5A5A6] dark:text-[#777879] text-[0.875rem] font-[400] pt-3 pl-2">
                              $2.51
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className=" flex justify-between p-[0%_2%]">
                        <div className="  text-[#FFFFFFCC] dark:text-[#777879] font-[400] flex text-[0.75rem] pt-3">
                          <div>Matic</div>
                          <Image
                            src={theme === "light" ? Framicon : framelight}
                            alt=""
                            className=" ml-2"
                          />
                          <Image
                            src={
                              theme === "light"
                                ? Framellipse
                                : FrameEllipselight
                            }
                            alt="/"
                            className=" ml-2"
                          />
                          <div className=" ml-2">USDT</div>
                          <Image
                            src={theme === "light" ? Framicon : framelight}
                            alt=""
                            className=" ml-2"
                          />
                          <Image
                            src={
                              theme === "light" ? FrameCircle : frameciclelight
                            }
                            alt=""
                            className=" ml-2"
                          />
                          <div className=" ml-2">USDT</div>
                          <Image
                            src={theme === "light" ? Framicon : framelight}
                            alt=""
                            className=" ml-2"
                          />
                          <Image
                            src={
                              theme === "light"
                                ? Framellipse
                                : FrameEllipselight
                            }
                            alt="/"
                            className=" ml-2"
                          />

                          <div className=" ml-2">APT</div>
                        </div>
                        <Image
                          src={Chevrondown}
                          alt="Chevrondown"
                          className=" cursor-pointer mt-2"
                        />
                      </div>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails className="bg-[#111213] dark:bg-[#F2F9F9] rounded-[0.5rem]">
                    <Typography className="bg-[#111213] dark:bg-[#F2F9F9] rounded-[0.5rem]">
                      <div>
                        <div className="flex justify-between pt-2">
                          <div className="text-[#A5A5A6] dark:text-[#777879] text-[0.875rem]">
                            Slippage tolerance
                          </div>
                          <div className="text-[#FFFFFFCC] dark:text-[#4A4B4D] text-[0.875rem]">
                            0.5%
                          </div>
                        </div>
                        <div className="flex justify-between pt-2">
                          <div className="text-[#A5A5A6] dark:text-[#777879] text-[0.875rem]">
                            1 USDC price
                          </div>
                          <div className="text-[#FFFFFFCC] dark:text-[#4A4B4D] text-[0.875rem]">
                            0.869911 MATIC
                          </div>
                        </div>
                        <div className="flex justify-between pt-2">
                          <div className="text-[#A5A5A6] dark:text-[#777879] text-[0.875rem]">
                            1 MATIC price
                          </div>
                          <div className="text-[#FFFFFFCC] dark:text-[#4A4B4D] text-[0.875rem]">
                            1.149455 USDC
                          </div>
                        </div>
                        <div className="flex justify-between pt-2">
                          <div className="text-[#A5A5A6] dark:text-[#777879] text-[0.875rem]">
                            Detail3
                          </div>
                          <div className="text-[#FFFFFFCC] dark:text-[#4A4B4D] text-[0.875rem]">
                            1.149455 USDC
                          </div>
                        </div>
                        <div className="flex justify-between pt-2">
                          <div className="text-[#A5A5A6] dark:text-[#777879] text-[0.875rem]">
                            Detail3
                          </div>
                          <div className="text-[#FFFFFFCC] dark:text-[#4A4B4D] text-[0.875rem]">
                            1.149455 USDC
                          </div>
                        </div>
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
            <div className=" flex justify-center pt-4">
              <div className="xxl:w-[38.75rem] xl:w-[38.75rem] lg:w-[38.75rem] md:w-full sm:w-[20.5rem] xd:w-[20.5rem] bg-[#111213] dark:bg-[#F2F9F9] rounded-[0.5rem] border-2 border-[#ffffff1a] dark:border-[#E3E8EF]">
                <Accordion className="bg-[#111213] dark:bg-[#F2F9F9] rounded-[0.5rem]">
                  <AccordionSummary className="bg-[#111213] dark:bg-[#F2F9F9] rounded-[0.5rem]">
                    <div className="w-full">
                      <div className=" flex justify-between p-4 border-b-2 border-[#ffffff1a] dark:border-[#E3E8EF]">
                        <div className=" flex">
                          <div className=" cursor-pointer">
                            <Image src={TToken} alt="/" />
                          </div>
                          <div className="flex flex-col px-3">
                            <div className="text-[#FFFFFFCC] dark:text-[#4A4B4D] font-[800] text-[0.875rem]">
                              52.97
                            </div>
                            <div className="text-[#A5A5A6] dark:text-[#777879] font-[400] text-[0.75rem]">
                              0.09 USD
                            </div>
                          </div>
                        </div>
                        <div className=" flex">
                          <div className=" flex">
                            <Image
                              src={theme === "light" ? Load : loadlight}
                              alt="/"
                            />
                            <div className=" text-[#A5A5A6] dark:text-[#777879] text-[0.875rem] font-[400] pt-3 pl-2">
                              22m
                            </div>
                          </div>
                          <div className=" flex pl-6">
                            <Image
                              src={theme === "light" ? Liduity : Liquiditylight}
                              alt="/"
                            />
                            <div className=" text-[#A5A5A6] dark:text-[#777879] text-[0.875rem] font-[400] pt-3 pl-2">
                              $2.51
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className=" flex justify-between p-[0%_2%]">
                        <div className="  text-[#FFFFFFCC] dark:text-[#777879] font-[400] flex text-[0.75rem] pt-3">
                          <div>Matic</div>
                          <Image
                            src={theme === "light" ? Framicon : framelight}
                            alt=""
                            className=" ml-2"
                          />
                          <Image
                            src={
                              theme === "light"
                                ? Framellipse
                                : FrameEllipselight
                            }
                            alt="/"
                            className=" ml-2"
                          />
                          <div className=" ml-2">USDT</div>
                          <Image
                            src={theme === "light" ? Framicon : framelight}
                            alt=""
                            className=" ml-2"
                          />
                          <Image
                            src={
                              theme === "light" ? FrameCircle : frameciclelight
                            }
                            alt=""
                            className=" ml-2"
                          />
                          <div className=" ml-2">USDT</div>
                          <Image
                            src={theme === "light" ? Framicon : framelight}
                            alt=""
                            className=" ml-2"
                          />
                          <Image
                            src={
                              theme === "light"
                                ? Framellipse
                                : FrameEllipselight
                            }
                            alt="/"
                            className=" ml-2"
                          />

                          <div className=" ml-2">APT</div>
                        </div>
                        <Image
                          src={Chevrondown}
                          alt="Chevrondown"
                          className=" cursor-pointer mt-2"
                        />
                      </div>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails className="bg-[#111213] dark:bg-[#F2F9F9] rounded-[0.5rem]">
                    <Typography className="bg-[#111213] dark:bg-[#F2F9F9] rounded-[0.5rem]">
                      <div>
                        <div className="flex justify-between pt-2">
                          <div className="text-[#A5A5A6] dark:text-[#777879] text-[0.875rem]">
                            Slippage tolerance
                          </div>
                          <div className="text-[#FFFFFFCC] dark:text-[#4A4B4D] text-[0.875rem]">
                            0.5%
                          </div>
                        </div>
                        <div className="flex justify-between pt-2">
                          <div className="text-[#A5A5A6] dark:text-[#777879] text-[0.875rem]">
                            1 USDC price
                          </div>
                          <div className="text-[#FFFFFFCC] dark:text-[#4A4B4D] text-[0.875rem]">
                            0.869911 MATIC
                          </div>
                        </div>
                        <div className="flex justify-between pt-2">
                          <div className="text-[#A5A5A6] dark:text-[#777879] text-[0.875rem]">
                            1 MATIC price
                          </div>
                          <div className="text-[#FFFFFFCC] dark:text-[#4A4B4D] text-[0.875rem]">
                            1.149455 USDC
                          </div>
                        </div>
                        <div className="flex justify-between pt-2">
                          <div className="text-[#A5A5A6] dark:text-[#777879] text-[0.875rem]">
                            Detail3
                          </div>
                          <div className="text-[#FFFFFFCC] dark:text-[#4A4B4D] text-[0.875rem]">
                            1.149455 USDC
                          </div>
                        </div>
                        <div className="flex justify-between pt-2">
                          <div className="text-[#A5A5A6] dark:text-[#777879] text-[0.875rem]">
                            Detail3
                          </div>
                          <div className="text-[#FFFFFFCC] dark:text-[#4A4B4D] text-[0.875rem]">
                            1.149455 USDC
                          </div>
                        </div>
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
            <div className=" mb-2">
              <div>.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickRoute;
