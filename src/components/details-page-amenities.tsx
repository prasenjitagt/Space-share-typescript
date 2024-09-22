import React from 'react';
import Amenities, { eachAmenity } from '@/data/amenitiesData';
import Places, { eachPlace } from '@/data/homePageData';
import { getAmenitiesByIds, ReturnInterface } from '@/utils/amenitiesUtils';
import Image from 'next/image';
interface Props {
    placeId: string;
}

const DetailsPageAmenities: React.FC<Props> = ({ placeId }: Props) => {



    const place = Places.find((place: eachPlace) => place.id === placeId);

    // If the place doesn't exist, return null or some fallback UI
    if (!place) return <p>Place not found</p>;

    const amenitiesForPlace: ReturnInterface = getAmenitiesByIds(place.amenityIds);

    const { amenities, amenityCount } = amenitiesForPlace;

    return (
        <div className="[font-family:Inter] mx-[13px] ">

            {/* Divider */}
            <div className="h-[1px] w-full bg-slate-500 opacity-50" ></div>


            {/* Heading */}
            <h3 className=' inter-medium mb-[17px] mt-[24px] mx-[14px]'>What this place offers</h3>

            {/* Show Amenities */}
            <section className="mx-[14px]">


                {amenities.map((amenity: eachAmenity) => {

                    const { amenityIconName, amenityId, amenityName } = amenity;



                    return <div key={amenityId} className="flex items-center mb-[10px]">


                        <Image
                            className="mr-[12px]"
                            src={`/icons/${amenityIconName}`}
                            alt={amenityName}
                            width={25}
                            height={25}
                        />
                        {/* Amenity Name */}
                        <p className="text-[16px] inter-regular font-[300]">{amenityName}</p>



                    </div>
                })}



                {/* Dialog Box Button for showing all amenities */}


                {
                    amenityCount <= 5 ? null : <ShowAllAmenitiesButton amenityCount={amenityCount} />
                }






            </section>



            {/* Divider */}
            <div className="h-[1px] w-full bg-slate-500 opacity-50" ></div>
        </div>
    );
};

export default DetailsPageAmenities;



interface AmenityCountProp {
    amenityCount: number
}

export const ShowAllAmenitiesButton: React.FC<AmenityCountProp> = ({ amenityCount }: AmenityCountProp): React.JSX.Element => {
    return (
        <div className='centerAll w-full my-[24px] inter-regular'>
            <button className='border-[#0A0A0A] border-[1px] rounded-[6px] px-[24px]
                    py-[12px] text-[16px]'>
                {`Show all ${amenityCount} amenities`}
            </button>

        </div>
    )
}

