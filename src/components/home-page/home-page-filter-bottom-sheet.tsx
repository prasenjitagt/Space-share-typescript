import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import DividerLine from "../small-components/divider-line";
import HomePageFilterSection from "./home-page-filter-section";
import HomePageFilterRangeSlider from "./home-page-filter-range-slider";
import HomePageFilterRating from "./home-page-filter-rating";
import HomePageFilterAmenities from "./home-page-filter-amenities";

interface PropsType {
  isSheetOpen: boolean;
  toggleSheet: () => void;
}
const HomePageFilterBottomSheet: React.FC<PropsType> = ({
  isSheetOpen,
  toggleSheet,
}: PropsType) => {
  //Bottom Sheet
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: isSheetOpen ? "0%" : "100%" }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className=" fixed bottom-0 left-0 right-0 bg-white shadow-lg z-20 rounded-t-[20px] max-h-[80vh] overflow-y-auto border-t-[1px] border-neutral-400"
    >
      <div className="  px-[24px] ">
        {/* Header */}
        <div className=" my-[10px] flex justify-center items-center relative  h-[65px] ">
          <div className=" fixed z-50  flex justify-between items-center bg-white shadow-md p-[12px] w-[300px] rounded-lg">
            {/* Restart Icon */}
            <button onClick={toggleSheet} className="">
              <Image
                alt="close icon"
                src="/icons/restart.svg"
                width={20}
                height={20}
              />
            </button>

            {/* Heading */}
            <h3 className=" text-[18px] font-medium ">Filter Space</h3>

            {/* Close Icon */}
            <button onClick={toggleSheet} className="">
              <Image
                alt="close icon"
                src="/icons/close.svg"
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>

        {/* <DividerLine /> */}

        {/* Filters */}
        <section className=" my-[14px] flex flex-col items-center">
          {/* Category */}
          <div className="w-full">
            <p className=" my-inter text-[18px] font-[400] mb-[14px]">
              Category
            </p>
            <HomePageFilterSection />
          </div>
        </section>

        <DividerLine />

        {/* Price Range */}
        <section className=" my-[14px]  flex flex-col items-center">
          {/* Price Range */}
          <div className="w-full">
            <p className=" my-inter text-[18px] font-[400] mb-[14px]">
              Price Range
            </p>
            <HomePageFilterRangeSlider />
          </div>
        </section>

        <DividerLine />

        {/* Rating */}
        <section className=" my-[14px]  flex flex-col items-center">
          {/* Rating */}
          <div className="w-full">
            <p className=" my-inter text-[18px] font-[400] mb-[14px]">Rating</p>
            <HomePageFilterRating />
          </div>
        </section>

        <DividerLine />

        {/* Amenities */}
        <section className=" my-[14px]  flex flex-col items-center">
          {/* Amenities */}
          <div className="w-full">
            <p className=" my-inter text-[18px] font-[400] mb-[14px]">
              Amenities
            </p>
            <HomePageFilterAmenities />
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default HomePageFilterBottomSheet;
