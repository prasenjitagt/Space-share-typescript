import Amenities, { eachAmenity } from '@/data/amenitiesData';

export interface ReturnInterface {
    amenities: eachAmenity[],
    amenityCount: number
}


export const getReviewsByIds = (amenityIds: string[]): ReturnInterface => {
    const allAmenities = Amenities.filter((amenity: eachAmenity) => amenityIds.includes(amenity.amenityId));

    const amenityCount = allAmenities.length;

    if (allAmenities.length <= 5) {

        return {
            amenities: allAmenities,
            amenityCount
        };
    } else {


        return {
            // Animities shortened to 5 numbers
            amenities: allAmenities.slice(0, 5),
            amenityCount
        };

    }

};
