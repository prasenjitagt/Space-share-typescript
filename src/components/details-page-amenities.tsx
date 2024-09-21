import React from 'react';
import Amenities, { eachAmenity } from '@/data/amenitiesData';
import Places, { eachPlace } from '@/data/homePageData';
import { getAmenitiesByIds, ReturnInterface } from '@/utils/amenitiesUtils';
import Image from 'next/image';
interface Props {
    placeId: string;
}

const DetailsPageAmenities = ({ placeId }: Props) => {



    const place = Places.find((place: eachPlace) => place.id === placeId);

    // If the place doesn't exist, return null or some fallback UI
    if (!place) return <p>Place not found</p>;

    const amenitiesForPlace: ReturnInterface = getAmenitiesByIds(place.amenityIds);

    return (
        <div className="[font-family:Inter] mx-[13px]">

            {/* Divider */}
            <div className="h-[1px] w-full bg-slate-500 opacity-50" ></div>


            {/* Heading */}
            <h3 className='text-[23px] font-[500] mb-[17px] mt-[24px]'>What this place offers</h3>

            {/* Show Amenities */}
            <section className="">


                {amenitiesForPlace['amenities'].map((amenity: eachAmenity) => {

                    const { amenityIconName, amenityId, amenityName } = amenity;



                    return <div key={amenityId} className="flex mb-[10px]">


                        <Image
                            className="mr-[12px]"
                            src={`/icons/${amenityIconName}`}
                            alt={amenityName}
                            width={25}
                            height={25}
                        />
                        {/* Amenity Name */}
                        <p className="text-[16px] [font-family:Inter] font-[300]">{amenityName}</p>



                    </div>
                })}



                {/* Dialog Box Button for showing all amenities */}
                <div className='centerAll w-full my-[24px]'>
                    <button className='border-[#0A0A0A] border-[1px] rounded-[6px] px-[24px]
                    py-[12px] text-[16px]'>
                        {`Show all ${amenitiesForPlace.amenityCount} amenities`}
                    </button>
                </div>





            </section>



            {/* Divider */}
            <div className="h-[1px] w-full bg-slate-500 opacity-50" ></div>
        </div>
    );
};

export default DetailsPageAmenities;
