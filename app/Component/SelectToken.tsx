"use client";
import React from "react";
import Image from "next/image";
import Close from "../../assets/Icons/x-close.svg";
import Search from "../../assets/Icons/search-md.svg";
import xcircle from "../../assets/Icons/x-circle.svg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Star from "../../assets/Icons/Star 1.svg";
import Chevronleft from "../../assets/Icons/chevron-left.svg";
import ChevronRight from "../../assets/Icons/chevron-right.svg";
import Token from "../../assets/Icons/Token.svg";
import closelight from "../../assets/Icons/x-close-light.svg";
import { useTheme } from "next-themes";

interface SelectTokenInterface {
  handleCloseToken(): void;
}
const SelectToken = (props: SelectTokenInterface) => {
  const { handleCloseToken } = props;
  const { theme } = useTheme();
  return (
    <div>
      <div className="fixed font-manrop z-[2] inset-0 h-full w-full bg-[rgba(0,0,0,0.20)] backdrop-blur-[0.75rem] flex flex-row justify-center xxl:items-center xl:items-center lg:items-center md:items-end sm:items-end xd:items-end">
        <div className=" xxl:rounded-[1rem] xl:rounded-[1rem] lg:rounded-[1rem] md:rounded-t-[1rem] sm:rounded-t-[1rem] xd:rounded-t-[1rem] border-2 border-[#2e2f31] dark:border-[#E3E8EF]  xxl:w-[35rem] xl:w-[35rem] lg:w-[35rem] md:w-[35rem] sm:w-full xd:w-[40rem] xxl:h-[40rem] xl:h-[40rem] lg:h-[40rem] md:h-auto sm:h-auto xd:h-auto bg-[#17181a]  dark:bg-[#ebedee] ">
          <div className=" bg-[#ffffff0f]  dark:bg-[#EFF7F8]  w-auto h-[4.5rem] rounded-t-[1rem] flex justify-between text-[#FFFFFF] dark:text-[#0C0C0D] dark:font-[800] font-[800] text-[1.125rem] p-[2%_6%]">
            <div className=" py-3">Choose Token</div>
            <Image
              src={theme === "light" ? Close : closelight}
              alt="Close"
              className=" cursor-pointer"
              onClick={handleCloseToken}
            />
          </div>
          <div className=" flex justify-center py-6">
            <div className=" xxl:w-[33rem] xl:w-[33rem] lg:w-[33rem] md:w-[33rem] sm:w-[20.5rem] xd:w-[20.5rem] h-[3rem] rounded-[1rem] bg-[#111213] dark:bg-[#EFF7F8] gap-[0.5rem]">
              <div className=" flex p-2">
                <Image src={Search} alt="/" className="mt-1" />
                <input
                  placeholder="Search Token"
                  className="text-[1rem] text-[#A5A5A6] w-full font-[400] bg-transparent outline-none h-full pt-1.5 pl-2"
                />
                <Image
                  src={xcircle}
                  alt="xcircle"
                  className=" cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div>
            <div className=" gap-[0.5rem] ">
              <Tabs>
                <TabList className="flex justify-between p-[0%_4%] border-b-2 border-[#2e2f31] dark:border-[#E3E8EF]   scrollbar-hide ">
                  <Image
                    src={Chevronleft}
                    alt="ChevronRight"
                    className=" cursor-pointer"
                  />
                  <Tab>
                    <div className=" flex cursor-pointer  hover:border-b-2 hover:border-white h-[3.5rem]">
                      <Image src={Star} alt="Star" />
                      <span className=" text-[1rem] text-[#777879] dark:text-[#4A4B4D] hover:text-white hover:font-[600] font-[400] pl-2 py-4">
                        Chain
                      </span>
                    </div>
                  </Tab>
                  <Tab>
                    <div className=" flex cursor-pointer  hover:border-b-2 hover:border-white h-[3.5rem]">
                      <Image src={Star} alt="Star" />
                      <span className=" text-[1rem] text-[#777879] dark:text-[#4A4B4D] hover:text-white hover:font-[600] font-[400] pl-2 py-4">
                        Chain
                      </span>
                    </div>
                  </Tab>
                  <Tab>
                    <div className=" flex cursor-pointer  hover:border-b-2 hover:border-white h-[3.5rem]">
                      <Image src={Star} alt="Star" />
                      <span className=" text-[1rem] text-[#777879] dark:text-[#4A4B4D] hover:text-white hover:font-[600] font-[400] pl-2 py-4">
                        Chain
                      </span>
                    </div>
                  </Tab>
                  <Tab>
                    <div className=" flex cursor-pointer  hover:border-b-2 hover:border-white h-[3.5rem] xxl:inline-flex xl:inline-flex lg:inline-flex md:hidden sm:hidden xd:hidden">
                      <Image src={Star} alt="Star" />
                      <span className=" text-[1rem] text-[#777879] dark:text-[#4A4B4D] hover:text-white hover:font-[600] font-[400] pl-2 py-4">
                        Chain
                      </span>
                    </div>
                  </Tab>
                  <Image
                    src={ChevronRight}
                    alt="ChevronRight"
                    className=" cursor-pointer"
                  />
                </TabList>
                <TabPanel>
                  <div className="">
                    <div className=" text-[1rem] font-[400] text-[#777879] px-6 py-5">
                      Frequently Used
                    </div>
                    <ul className="overflow-scroll h-[21rem] scrollbar-hide">
                      <li className=" py-4 px-6 flex justify-between">
                        <div className=" flex">
                          <Image src={Token} alt="Token" />
                          <div className=" flex flex-col">
                            <span className=" text-[#FFFFFFCC] dark:text-[#4A4B4D] text-[1rem] font-[800] pl-3 pt-2">
                              Token
                            </span>
                            <span className=" text-[#FFFFFFCC] dark:text-[#4A4B4D] text-[0.75rem] font-[800] pl-3 pt-2">
                              Token
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <div className="text-[#FFFFFFCC] dark:text-[#4A4B4D] text-[1rem] font-[800]">
                            1,628.99
                          </div>
                          <div className=" text-[#A5A5A6] dark:text-[#4A4B4D] text-[0.75rem] font-[400]">
                            11.99 USD
                          </div>
                        </div>
                      </li>
                      <li className=" py-4 px-6 flex justify-between">
                        <div className=" flex">
                          <Image src={Token} alt="Token" />
                          <div className=" flex flex-col">
                            <span className=" text-[#FFFFFFCC] dark:text-[#4A4B4D] text-[1rem] font-[800] pl-3 pt-2">
                              Token
                            </span>
                            <span className=" text-[#FFFFFFCC] dark:text-[#4A4B4D] text-[0.75rem] font-[800] pl-3 pt-2">
                              Token
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <div className="text-[#FFFFFFCC] dark:text-[#4A4B4D] text-[1rem] font-[800]">
                            1,628.99
                          </div>
                          <div className=" text-[#A5A5A6] dark:text-[#4A4B4D] text-[0.75rem] font-[400]">
                            11.99 USD
                          </div>
                        </div>
                      </li>
                      <li className=" py-4 px-6 flex justify-between">
                        <div className=" flex">
                          <Image src={Token} alt="Token" />
                          <div className=" flex flex-col">
                            <span className=" text-[#FFFFFFCC] dark:text-[#4A4B4D] text-[1rem] font-[800] pl-3 pt-2">
                              Token
                            </span>
                            <span className=" text-[#FFFFFFCC] dark:text-[#4A4B4D] text-[0.75rem] font-[800] pl-3 pt-2">
                              Token
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <div className="text-[#FFFFFFCC] dark:text-[#4A4B4D] text-[1rem] font-[800]">
                            1,628.99
                          </div>
                          <div className=" text-[#A5A5A6] dark:text-[#4A4B4D] text-[0.75rem] font-[400]">
                            11.99 USD
                          </div>
                        </div>
                      </li>

                      <div className="text-[1rem] text-[#777879] dark:text-[#4A4B4D] font-[400] px-6 py-3">
                        Other
                      </div>
                      <li className=" py-4 px-6 flex justify-between">
                        <div className=" flex">
                          <Image src={Token} alt="Token" />
                          <div className=" flex flex-col">
                            <span className=" text-[#FFFFFFCC] dark:text-[#4A4B4D] text-[1rem] font-[800] pl-3 pt-2">
                              Token
                            </span>
                            <span className=" text-[#FFFFFFCC] dark:text-[#4A4B4D] text-[0.75rem] font-[800] pl-3 pt-2">
                              Token
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <div className="text-[#FFFFFFCC] dark:text-[#4A4B4D] text-[1rem] font-[800]">
                            1,628.99
                          </div>
                          <div className=" text-[#A5A5A6] dark:text-[#4A4B4D] text-[0.75rem] font-[400]">
                            11.99 USD
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="overflow-auto">
                    <div className=" text-[1rem] font-[400] text-[#777879] dark:text-[#4A4B4D] px-6 py-5">
                      Frequently Used
                    </div>
                    <ul className=" overflow-auto">
                      <li className=" py-4 px-6 flex justify-between">
                        <div className=" flex">
                          <Image src={Token} alt="Token" />
                          <span className=" text-[#FFFFFFCC] dark:text-[#4A4B4D] text-[1rem] font-[800] pl-3 pt-2">
                            Token
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <div className="text-[#FFFFFFCC] dark:text-[#4A4B4D] text-[1rem] font-[800]">
                            1,628.99
                          </div>
                          <div className=" text-[#A5A5A6] dark:text-[#4A4B4D] text-[0.75rem] font-[400]">
                            11.99 USD
                          </div>
                        </div>
                      </li>
                      <li className=" py-4 px-6 flex justify-between">
                        <div className=" flex">
                          <Image src={Token} alt="Token" />
                          <span className=" text-[#FFFFFFCC] text-[1rem] font-[800] pl-3 pt-2">
                            Token
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <div className="text-[#FFFFFFCC] text-[1rem] font-[800]">
                            1,628.99
                          </div>
                          <div className=" text-[#A5A5A6] text-[0.75rem] font-[400]">
                            11.99 USD
                          </div>
                        </div>
                      </li>
                      <li className=" py-4 px-6 flex justify-between">
                        <div className=" flex">
                          <Image src={Token} alt="Token" />
                          <span className=" text-[#FFFFFFCC] text-[1rem] font-[800] pl-3 pt-2">
                            Token
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <div className="text-[#FFFFFFCC] text-[1rem] font-[800]">
                            1,628.99
                          </div>
                          <div className=" text-[#A5A5A6] text-[0.75rem] font-[400]">
                            11.99 USD
                          </div>
                        </div>
                      </li>

                      <div className="text-[1rem] text-[#777879] font-[400] px-6 py-3">
                        Other
                      </div>
                      <li className=" py-4 px-6 flex justify-between">
                        <div className=" flex">
                          <Image src={Token} alt="Token" />
                          <span className=" text-[#FFFFFFCC] text-[1rem] font-[800] pl-3 pt-2">
                            Token
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <div className="text-[#FFFFFFCC] text-[1rem] font-[800]">
                            1,628.99
                          </div>
                          <div className=" text-[#A5A5A6] text-[0.75rem] font-[400]">
                            11.99 USD
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="overflow-auto">
                    <div className=" text-[1rem] font-[400] text-[#777879] px-6 py-5">
                      Frequently Used
                    </div>
                    <ul className=" overflow-auto">
                      <li className=" py-4 px-6 flex justify-between">
                        <div className=" flex">
                          <Image src={Token} alt="Token" />
                          <span className=" text-[#FFFFFFCC] text-[1rem] font-[800] pl-3 pt-2">
                            Token
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <div className="text-[#FFFFFFCC] text-[1rem] font-[800]">
                            1,628.99
                          </div>
                          <div className=" text-[#A5A5A6] text-[0.75rem] font-[400]">
                            11.99 USD
                          </div>
                        </div>
                      </li>
                      <li className=" py-4 px-6 flex justify-between">
                        <div className=" flex">
                          <Image src={Token} alt="Token" />
                          <span className=" text-[#FFFFFFCC] text-[1rem] font-[800] pl-3 pt-2">
                            Token
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <div className="text-[#FFFFFFCC] text-[1rem] font-[800]">
                            1,628.99
                          </div>
                          <div className=" text-[#A5A5A6] text-[0.75rem] font-[400]">
                            11.99 USD
                          </div>
                        </div>
                      </li>
                      <li className=" py-4 px-6 flex justify-between">
                        <div className=" flex">
                          <Image src={Token} alt="Token" />
                          <span className=" text-[#FFFFFFCC] text-[1rem] font-[800] pl-3 pt-2">
                            Token
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <div className="text-[#FFFFFFCC] text-[1rem] font-[800]">
                            1,628.99
                          </div>
                          <div className=" text-[#A5A5A6] text-[0.75rem] font-[400]">
                            11.99 USD
                          </div>
                        </div>
                      </li>

                      <div className="text-[1rem] text-[#777879] font-[400] px-6 py-3">
                        Other
                      </div>
                      <li className=" py-4 px-6 flex justify-between">
                        <div className=" flex">
                          <Image src={Token} alt="Token" />
                          <span className=" text-[#FFFFFFCC] text-[1rem] font-[800] pl-3 pt-2">
                            Token
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <div className="text-[#FFFFFFCC] text-[1rem] font-[800]">
                            1,628.99
                          </div>
                          <div className=" text-[#A5A5A6] text-[0.75rem] font-[400]">
                            11.99 USD
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="overflow-auto">
                    <div className=" text-[1rem] font-[400] text-[#777879] px-6 py-5">
                      Frequently Used
                    </div>
                    <ul className=" overflow-auto">
                      <li className=" py-4 px-6 flex justify-between">
                        <div className=" flex">
                          <Image src={Token} alt="Token" />
                          <span className=" text-[#FFFFFFCC] text-[1rem] font-[800] pl-3 pt-2">
                            Token
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <div className="text-[#FFFFFFCC] text-[1rem] font-[800]">
                            1,628.99
                          </div>
                          <div className=" text-[#A5A5A6] text-[0.75rem] font-[400]">
                            11.99 USD
                          </div>
                        </div>
                      </li>
                      <li className=" py-4 px-6 flex justify-between">
                        <div className=" flex">
                          <Image src={Token} alt="Token" />
                          <span className=" text-[#FFFFFFCC] text-[1rem] font-[800] pl-3 pt-2">
                            Token
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <div className="text-[#FFFFFFCC] text-[1rem] font-[800]">
                            1,628.99
                          </div>
                          <div className=" text-[#A5A5A6] text-[0.75rem] font-[400]">
                            11.99 USD
                          </div>
                        </div>
                      </li>
                      <li className=" py-4 px-6 flex justify-between">
                        <div className=" flex">
                          <Image src={Token} alt="Token" />
                          <span className=" text-[#FFFFFFCC] text-[1rem] font-[800] pl-3 pt-2">
                            Token
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <div className="text-[#FFFFFFCC] text-[1rem] font-[800]">
                            1,628.99
                          </div>
                          <div className=" text-[#A5A5A6] text-[0.75rem] font-[400]">
                            11.99 USD
                          </div>
                        </div>
                      </li>

                      <div className="text-[1rem] text-[#777879] font-[400] px-6 py-3">
                        Other
                      </div>
                      <li className=" py-4 px-6 flex justify-between">
                        <div className=" flex">
                          <Image src={Token} alt="Token" />
                          <span className=" text-[#FFFFFFCC] text-[1rem] font-[800] pl-3 pt-2">
                            Token
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <div className="text-[#FFFFFFCC] text-[1rem] font-[800]">
                            1,628.99
                          </div>
                          <div className=" text-[#A5A5A6] text-[0.75rem] font-[400]">
                            11.99 USD
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectToken;
