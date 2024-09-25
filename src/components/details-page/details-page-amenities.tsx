import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import DividerLine from '../small-components/divider-line';
import { eachAmenity } from '@/data/amenities-data';
import Places, { eachPlace } from '@/data/place-data';
import { getAmenitiesByIds, ReturnInterface } from '@/utils/amenitiesUtils';

interface Props {
    placeId: string;
    setIsBottomSheetOpen : React.Dispatch<React.SetStateAction<boolean>>;
}

const DetailsPageAmenities: React.FC<Props> = ({ placeId,setIsBottomSheetOpen }: Props) => {
    const [isSheetOpen, setIsSheetOpen] = useState(false); // state for bottom sheet

    const place = Places.find((place: eachPlace) => place.id === placeId);

    if (!place) return <p>Place not found</p>;

    const amenitiesForPlace: ReturnInterface = getAmenitiesByIds(place.amenityIds);
    const { amenities, amenityCount } = amenitiesForPlace;

    const toggleSheet = () => {
        setIsSheetOpen(prev => !prev);
        setIsBottomSheetOpen(prev => !prev);
    };

    // Prevent background scrolling when bottom sheet is open
    useEffect(() => {
        if (isSheetOpen) {
            document.body.style.overflow = 'hidden'; // Disable scrolling
        } else {
            document.body.style.overflow = ''; // Restore scrolling
        }
        // Cleanup to ensure scrolling is restored if component is unmounted
        return () => {
            document.body.style.overflow = '';
        };
    }, [isSheetOpen]);

    return (
        <div className="inter-global mx-[13px]">
            <DividerLine />

            <h3 className='inter-medium mb-[17px] mt-[24px] mx-[14px]'>What this place offers</h3>

            <section className="mx-[14px]">
                {amenities.slice(0, 5).map((amenity: eachAmenity) => {
                    const { amenityIconName, amenityId, amenityName } = amenity;
                    return (
                        <div key={amenityId} className="flex items-center mb-[10px]">
                            <Image
                                className="mr-[12px]"
                                src={`/icons/${amenityIconName}`}
                                alt={amenityName}
                                width={25}
                                height={25}
                            />
                            <p className="text-[16px] inter-regular font-[300]">{amenityName}</p>
                        </div>
                    );
                })}

                {amenityCount > 5 && (
                    <div className='centerAll w-full my-[24px] inter-regular'>
                        <button
                            className='w-[210px] border-[#0A0A0A] border-[1px] rounded-[6px] px-[24px] py-[12px] text-[16px] '
                            onClick={toggleSheet}
                        >
                            {`Show all ${amenityCount} amenities`}
                        </button>
                    </div>
                )}
            </section>

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
                className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-20 rounded-t-[20px] max-h-[80vh] overflow-y-auto border-t-[1px] border-neutral-400"
            >
                <div className="px-[24px]">
                    <div className="my-[10px] flex justify-between items-center">

                        {/* Heading */}
                        <h3 className="text-[18px] font-medium">All Amenities</h3>

                        {/* Close Icon */}
                        <button onClick={toggleSheet}>
                            <Image alt='close icon' src="/icons/close.svg" width={20} height={20} />
                        </button>
                    </div>

                    <DividerLine />


                    <div className="mt-[14px]">
                        {amenities.map((amenity: eachAmenity) => {
                            const { amenityIconName, amenityId, amenityName } = amenity;
                            return (
                                <div key={amenityId} className="flex items-center mb-[10px]">


                                    <Image
                                        className="mr-[12px]"
                                        src={`/icons/${amenityIconName}`}
                                        alt={amenityName}
                                        width={25}
                                        height={25}
                                    />

                                    
                                    <p className="text-[16px] inter-regular font-[300]">{amenityName}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </motion.div>

            <DividerLine />
        </div>
    );
};

export default DetailsPageAmenities;
