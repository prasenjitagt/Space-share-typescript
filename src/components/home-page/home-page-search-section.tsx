"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import HomePageMobileWrapper from "./home-page-mobile-wrapper";
import HomePageDropDown from "./home-page-drop-down-menu";

import getAllCities from "@/utils/home-page-search-section-get-all-state-name";
import stateData from "@/data/state-data";
import HomePageFilterBottomSheet from "./home-page-filter-bottom-sheet";

const HomePageSearchSection = () => {
  const [selectedOption1, setSelectedOption1] = useState<string>("");
  const [selectedOption2, setSelectedOption2] = useState<string>("");
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false); // state for bottom sheet

  // all city names

  // BottomSheet
  const toggleSheet = () => {
    setIsSheetOpen((prev) => !prev);
  };

  // Prevent background scrolling when bottom sheet is open
  useEffect(() => {
    if (isSheetOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Restore scrolling
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSheetOpen]);

  const handleSelect1 = (option: string): void => {
    setSelectedOption1(option);
    console.log("Dropdown 1 selected:", option);

    console.log(selectedOption2, selectedOption1);
  };

  const handleSelect2 = (option: string): void => {
    setSelectedOption2(option);
    console.log("Dropdown 2 selected:", option);
  };

  return (
    // <HomePageMobileWrapper>
    <div className="centerAll">
      <nav>
        <p className="font-[900] [font-family:'Futura-Black-Bold',Helvetica] text-[18px]">
          SPACEHUB
        </p>
      </nav>

      {/* search bar  */}
      <section className="   py-[15px] flex flex-col justify-center ">
        {/* search input */}
        <div className="  flex items-center">
          <div className=" py-[6px] w-full flex justify-between bg-[#FAFAFB] rounded-full ">
            <input
              type="text"
              placeholder="Search"
              className=" rounded-full pl-[15.95px] pr-[21.59px] bg-[#FAFAFB]"
            />

            {/* Search Icon */}
            <button className="bg-black centerAll rounded-full  h-[40px] w-[40px] mr-[5px]">
              <Image
                alt="search icon"
                src="./icons/search.svg"
                width={20}
                height={20}
              />
            </button>
          </div>

          {/* Filter Icon */}
          <button
            onClick={toggleSheet}
            className=" border-black border-[1px] centerAll rounded-full  h-[38px] w-[43px]"
          >
            <Image
              alt="filter icon"
              src="./icons/filter.svg"
              width={24}
              height={24}
            />
          </button>
        </div>

        {/* Blurred background overlay */}
        {isSheetOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10"
            onClick={toggleSheet}
          />
        )}

        <HomePageFilterBottomSheet
          isSheetOpen={isSheetOpen}
          toggleSheet={toggleSheet}
        />

        {/* dropdown section */}
        <div className="">
          <HomePageDropDown
            options={getAllCities(stateData)}
            onSelect={handleSelect1}
            placeholder="Location"
          />

          {/* <HomePageDropDown
            options={["Nas", "Khel", "Has"]}
            onSelect={handleSelect2}
            placeholder="Activities"
          /> */}
        </div>
      </section>
    </div>
    // </HomePageMobileWrapper>
  );
};

export default HomePageSearchSection;
