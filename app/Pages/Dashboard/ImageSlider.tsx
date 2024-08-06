import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import Banner1 from "@/assets/Icons/banner1.png";
import Banner2 from "@/assets/Icons/banner2.png";
import LeftArrow from '@/assets/Icons/left-pagination.svg';
import RightArrow from '@/assets/Icons/right-pagination.svg';

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const { theme } = useTheme();

  const imageRef1 = useRef<HTMLDivElement>(null);
  const imageRef2 = useRef<HTMLDivElement>(null);

  const imageRefs = [imageRef1, imageRef2];

  const scrollToImage = useCallback((index: number) => {
    setCurrentImage(index);
    imageRefs[index].current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  }, []);

  const totalImages = 2;

  const nextImage = useCallback(() => {
    const nextIndex = (currentImage + 1) % totalImages;
    scrollToImage(nextIndex);
  }, [currentImage, scrollToImage, totalImages]);

  const previousImage = useCallback(() => {
    const prevIndex = (currentImage - 1 + totalImages) % totalImages;
    scrollToImage(prevIndex);
  }, [currentImage, scrollToImage, totalImages]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (isAutoScrolling) {
      intervalId = setInterval(() => {
        nextImage();
      }, 4000);
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isAutoScrolling, nextImage]);

  const pauseAutoScroll = () => setIsAutoScrolling(false);
  const resumeAutoScroll = () => setIsAutoScrolling(true);

  const sliderControl = () => (
    <div className="flex absolute bottom-4 left-1/2 z-30 space-x-3 -translate-x-1/2">
      <button
        type="button"
        className={`w-3 h-3 rounded-full ${
          currentImage === 0 ? "bg-white" : "bg-gray-700"
        }`}
        onClick={() => {
          previousImage();
          pauseAutoScroll();
        }}
        onMouseEnter={pauseAutoScroll}
        onMouseLeave={resumeAutoScroll}
      ></button>
      <button
        type="button"
        className={`w-3 h-3 rounded-full ${
          currentImage === 1 ? "bg-white" : "bg-gray-700"
        }`}
        onClick={() => {
          nextImage();
          pauseAutoScroll();
        }}
        onMouseEnter={pauseAutoScroll}
        onMouseLeave={resumeAutoScroll}
      ></button>
    </div>
  );

  const arrowControls = () => {
	const arrowStyles = 'absolute bg-slate-200 w-8 h-8 rounded-full cursor-pointer top-[46%]';
	return (
	  <>
		<div className={`${arrowStyles} right-0 mr-2`} onClick={() => {
		  nextImage();
		  pauseAutoScroll();
		}}>
		  <Image src={RightArrow} alt='' />
		</div>
		<div className={`${arrowStyles} left-0 ml-2`} onClick={() => {
		  previousImage();
		  pauseAutoScroll();
		}}>
		  <Image src={LeftArrow} alt='' />
		</div>
	  </>
	);
  }

  return (
    <>
      <div className="flex justify-center w-full items-center mx-auto lg:mt-4">
        <div className="relative w-full">
          <div className="flex carousel overflow-hidden">
            <div
              ref={imageRef1}
              className="text-white px-4 lg:px-6 py-6 lg:rounded-2xl relative w-full flex-shrink-0"
              style={{
                background:
                  theme === "dark"
                    ? `url(${Banner1.src}) no-repeat center center / cover, white`
                    : `url(${Banner1.src}) no-repeat center center / cover, linear-gradient(92.39deg, #000000 46.88%, #0194FF 184.51%)`,
              }}
            >
              <div className="mt-[41px] ml-16">
                <h1 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl font-extrabold mb-5">
                  First fully on-chain, orderbook-based
                  <br />
                  perpetual futures platform on Aptos
                </h1>
                <button className="bg-[#2ED3B7] text-[#121926] text-xs py-2 px-4 rounded-lg mb-[53px]">
                  Join waitlist
                </button>
              </div>
            </div>
            <div
              ref={imageRef2}
              className="text-white px-4 lg:px-6 py-6 lg:rounded-2xl relative w-full flex-shrink-0"
              style={{
                background:
                  theme === "dark"
                    ? `url(${Banner2.src}) no-repeat center center / cover, white`
                    : `url(${Banner2.src}) no-repeat center center / cover, linear-gradient(92.39deg, #000000 46.88%, #0194FF 184.51%)`,
              }}
            >
              <div className="mt-[41px] ml-16">
                <h1 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl font-extrabold mb-5">
                  Join the deal as we partner with Binance
                  <br />
                  to celebrate the Olympics
                </h1>
                <button className="bg-[#2ED3B7] text-[#121926] text-xs py-2 px-4 rounded-lg mb-[53px]">
                  Participate now
                </button>
              </div>
            </div>
            {sliderControl()}
			{arrowControls()}
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
