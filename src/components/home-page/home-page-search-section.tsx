
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image';
import HomePageMobileWrapper from './home-page-mobile-wrapper';
import HomePageDropDown from './home-page-drop-down-menu';
import { motion } from 'framer-motion';
import DividerLine from '../small-components/divider-line';
import HomePageFilterSection from './home-page-filter-section';
import HomePageFilterRangeSlider from './home-page-filter-range-slider';
import HomePageFilterRating from './home-page-filter-rating';
import HomePageFilterAmenities from './home-page-filter-amenities';

const HomePageSearchSection = () => {
    const [selectedOption1, setSelectedOption1] = useState<string>("");
    const [selectedOption2, setSelectedOption2] = useState<string>("");
    const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false); // state for bottom sheet

    const toggleSheet = () => {
        setIsSheetOpen((prev) => !prev);
    };

    // Prevent background scrolling when bottom sheet is open
    useEffect(() => {
        if (isSheetOpen) {
            document.body.style.overflow = 'hidden'; // Disable scrolling
        } else {
            document.body.style.overflow = ''; // Restore scrolling
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isSheetOpen]);

    const handleSelect1 = (option: string): void => {
        setSelectedOption1(option);
        console.log('Dropdown 1 selected:', option);

        console.log(selectedOption2, selectedOption1);

    };

    const handleSelect2 = (option: string): void => {
        setSelectedOption2(option);
        console.log('Dropdown 2 selected:', option);
    };

    return (
        <HomePageMobileWrapper>
            <div className='centerAll'>
                <nav ><p className="font-[900] [font-family:'Futura-Black-Bold',Helvetica] text-[18px]">SPACEHUB</p></nav>





                {/* search bar  */}
                <section className='   py-[15px] flex flex-col justify-center '>

                    {/* search input */}
                    <div className='  flex items-center'>

                        <div className=' py-[6px] w-full flex justify-between bg-[#FAFAFB] rounded-full '>

                            <input type="text" placeholder='Search' className=' rounded-full pl-[15.95px] pr-[21.59px] bg-[#FAFAFB]' />


                            <button className='bg-black centerAll rounded-full  h-[40px] w-[40px] mr-[5px]'>
                                <Image alt='search icon' src="./icons/search.svg" width={20} height={20} />
                            </button>

                        </div>


                        <button onClick={toggleSheet} className=' border-black border-[1px] centerAll rounded-full  h-[38px] w-[43px]'>
                            <Image
                                alt='filter icon'
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

                    {/* Bottom Sheet */}
                    <motion.div
                        initial={{ y: '100%' }}
                        animate={{ y: isSheetOpen ? '0%' : '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className=" fixed bottom-0 left-0 right-0 bg-white shadow-lg z-20 rounded-t-[20px] max-h-[80vh] overflow-y-auto border-t-[1px] border-neutral-400"
                    >


                        <div className="  px-[24px] ">


                            {/* Header */}
                            <div className=" my-[10px] flex justify-between items-center">


                                {/* Restart Icon */}
                                <button onClick={toggleSheet}

                                >
                                    <Image alt='close icon' src="/icons/restart.svg" width={20} height={20} />
                                </button>



                                {/* Heading */}
                                <h3 className=" text-[18px] font-medium">Filter Space</h3>

                                {/* Close Icon */}
                                <button onClick={toggleSheet}
                                >
                                    <Image alt='close icon' src="/icons/close.svg" width={20} height={20} />
                                </button>
                            </div>

                            <DividerLine />

                            {/* Filters */}
                            <section className=" my-[14px] flex flex-col items-center">

                                {/* Category */}
                                <div className='w-full'>
                                    <p className=' my-inter text-[18px] font-[400] mb-[14px]'>Category</p>
                                    <HomePageFilterSection />
                                </div>
                            </section>



                            <DividerLine />


                            {/* Price Range */}
                            <section className=" my-[14px]  flex flex-col items-center">

                                {/* Price Range */}
                                <div className='w-full'>
                                    <p className=' my-inter text-[18px] font-[400] mb-[14px]'>Price Range</p>
                                    <HomePageFilterRangeSlider />
                                </div>
                            </section>


                            <DividerLine />


                            {/* Rating */}
                            <section className=" my-[14px]  flex flex-col items-center">

                                {/* Rating */}
                                <div className='w-full'>
                                    <p className=' my-inter text-[18px] font-[400] mb-[14px]'>Rating</p>
                                    <HomePageFilterRating />
                                </div>
                            </section>



                            <DividerLine />


                            {/* Amenities */}
                            <section className=" my-[14px]  flex flex-col items-center">

                                {/* Amenities */}
                                <div className='w-full'>
                                    <p className=' my-inter text-[18px] font-[400] mb-[14px]'>Amenities</p>
                                    <HomePageFilterAmenities />
                                </div>
                            </section>



                        </div>
                    </motion.div>





                    {/* dropdown section */}
                    <div className=''>

                        <HomePageDropDown
                            options={['Bengalore', 'Mumbai', 'Tiruvannat Puram']}
                            onSelect={handleSelect1}
                            placeholder="Location"
                        />


                        <HomePageDropDown
                            options={['Nas', 'Khel', 'Has']}
                            onSelect={handleSelect2}
                            placeholder="Activities"
                        />
                    </div>

                </section>
            </div>
        </HomePageMobileWrapper>
    )
}

export default HomePageSearchSection;