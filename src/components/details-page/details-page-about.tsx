'use client'
import { RootState } from '@/app/store';
import { eachPlace } from '@/data/place-data';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import Image from 'next/image';
import DividerLine from '../small-components/divider-line';
import '@/stylesheets/details-page-about.css';

interface PropType {
    placeId: string;
}

const DetailsPageAbout: React.FC<PropType> = ({ placeId }: PropType) => {
    // Get all places from the Redux store
    const allPlaces: eachPlace[] = useSelector((state: RootState) => state.storePlaces.slicePlaces);

    // Find the place by its ID
    const thisPlace = allPlaces.find((eachPlace: eachPlace) => eachPlace.id === placeId);

    // If the place is found, get the 'aboutplace' property; otherwise, use a default fallback
    const thisPlaceAbout: string = thisPlace?.aboutplace || 'About information not available.';

    // State for bottom sheet visibility
    const [isOpen, setIsOpen] = useState<boolean>(false);

    // Prevent background scrolling when bottom sheet is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'; // Disable scrolling
        } else {
            document.body.style.overflow = ''; // Restore scrolling
        }
        // Cleanup to ensure scrolling is restored if component is unmounted
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    // Function to toggle bottom sheet visibility
    const toggleSheet = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='mx-[13px] mb-[24px]'>
            <div className='mb-[24px]'>
                <DividerLine />
            </div>

            <h3 className='mx-[14px] mb-[17px] inter-medium'>About This Place</h3>

            {/* Display truncated text */}
            <p className='mb-[17px] ml-[14px] mr-[5px] inter-for-about my-line-clamp'>
                {thisPlaceAbout}
            </p>

            {/* Button to open the full details in bottom sheet */}
            <button 
                onClick={toggleSheet} 
                className='mx-[14px] text-[#146EF5] font-semibold underline underline-offset-4 underline-[#146EF5]'
            >
                {`see more >`}
            </button>

            {/* Blurred background overlay when the bottom sheet is open */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
                    onClick={toggleSheet}
                />
            )}

            {/* Bottom Sheet for full 'About This Place' content */}
            <motion.div
                initial={{ y: '100%' }}
                animate={{ y: isOpen ? '0%' : '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 rounded-t-[20px] max-h-[80vh] overflow-y-auto border-t-[1px] border-neutral-400"
            >
                <div className="px-[24px]">
                    <div className="my-[10px] flex justify-between items-center">
                        {/* Heading for the bottom sheet */}
                        <h3 className="text-[18px] font-medium">About This Place</h3>

                        {/* Close button */}
                        <button onClick={toggleSheet}>
                            <Image alt='close icon' src="/icons/close.svg" width={20} height={20} />
                        </button>
                    </div>


                   

                    <DividerLine />

                    {/* Full text of the about section */}
                    <div className="mt-[14px] mb-[24px]">
                        <p className='text-[16px] inter-for-about'>
                            {thisPlaceAbout}
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default DetailsPageAbout;
