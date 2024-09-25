import Amenities, { eachAmenity } from '@/data/amenitiesData';

export interface ReturnInterface {
    amenities: eachAmenity[],
    amenityCount: number
}


export const getAmenitiesByIds = (amenityIds: string[]): ReturnInterface => {
    const allAmenities = Amenities.filter((amenity: eachAmenity) => amenityIds.includes(amenity.amenityId));

    const amenityCount = allAmenities.length;

        return {
            amenities: allAmenities,
            amenityCount
        };


};
