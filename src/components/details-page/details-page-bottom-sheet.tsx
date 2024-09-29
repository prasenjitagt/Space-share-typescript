import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '@/stylesheets/details-page-price.css';
import { useSelector } from 'react-redux';
import { EachSelectedDate } from '@/slices/places/current-place-slice';
import { RootState } from '@/app/store';
import MyCalendar from '@/components/details-page/details-page-calendar';
import Image from 'next/image';

interface PropType {
    placeId: string;
}

const DetailsPageBottomSheet: React.FC<PropType> = ({ placeId }) => {
    const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
    const selectedDate: EachSelectedDate | undefined = useSelector((state: RootState) => {
        return state.storeSelectedDate.sliceSelectedDates.find(
            (eachSelectedDate: EachSelectedDate) => eachSelectedDate.SelectedDateId === placeId
        );
    });

    const formatDate = (dateString: string): string => {
        const date = new Date(dateString); // Convert string back to Date
        const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: '2-digit' };
        return date.toLocaleDateString('en-US', options).replace(',', "'"); // Format: 30 Sept '24
    };

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className='flex justify-between items-center w-full h-[100px] px-[30px] py-[18px] my-shadow bg-white'>

                {/* Price and Date */}
                <section className='inter-for-price text-[20px]'>

                    {/* Price */}
                    <div className='flex mb-[6px]'>
                        <p className='font-semibold'>{`₹500`}</p>
                        <p className='opacity-50'>/hour</p>
                    </div>

                    {/* Date */}
                    {selectedDate ? (
                        <button className='underline underline-offset-4' onClick={handleOpenModal}>
                            {formatDate(selectedDate.selectedDate)} {/* Convert string to Date for formatting */}
                        </button>
                    ) : (
                        <button className='underline underline-offset-4 opacity-80 capitalize' onClick={handleOpenModal}>
                            {`Select a Date`}
                        </button>
                    )}

                </section>

                {/* Book Now */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => {
                        console.log("button pressed");
                    }}
                    className='inter-for-price py-[16px] px-[33px] rounded-[9px] text-[20px] font-semibold text-white bg-[#0B74FA]'
                >
                    Book Now
                </motion.button>
            </div>

            {/* Modal for Calendar */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="flex flex-col  items-center bg-transparent rounded-lg p-4 relative">
                        {/* Close Button */}
                        <button
                            onClick={handleCloseModal}
                            className="mt-[50px] mb-[10px] mx-[13px] centerAll rounded-full bg-white w-[50px] h-[50px] border-[2px]  border-orange-600"
                        >
                            <Image alt='close icon' src="/icons/close.svg" width={20} height={20} />

                        </button>

                        {/* Calendar Component */}
                        <MyCalendar placeId={placeId} />

                    </div>
                </div>
            )}
        </>
    );
};

export default DetailsPageBottomSheet;
