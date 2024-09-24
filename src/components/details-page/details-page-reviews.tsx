import React from 'react'
import Image from 'next/image'
import { eachReview } from '@/data/reviewsData';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import DetailsPageReviewCard from './details-page-review-card';


interface PropType {
    placeId: string
}

const DetailsPageReviews: React.FC<PropType> = (props: PropType) => {


    // All reviews from redux toolkit
    const allReviews: eachReview[] = useSelector((state: RootState) => state.storeReviews.sliceReviews);

    // Filtered Reviews of this place Id
    const placeSpecificReviews: eachReview[] = allReviews.filter((review: eachReview) => review.placeId === props.placeId);

    // Totall Rating
    const totalRating = placeSpecificReviews.reduce((sum, review) => sum + parseInt(review.reviewRating, 10), 0);

    // How many Peoples have reviewed
    const reviewCount = placeSpecificReviews.length;

    // Average of all reviews
    const averageRating = reviewCount > 0 ? (totalRating / reviewCount).toFixed(1) : 0;

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

    };
    return (
        <div className="mx-[27px] mb-[24px]">
            {/* Total Reviews */}
            <div className="flex items-center mb-4 inter-medium">
                <Image alt='reviews' src="/icons/star.svg" width={20} height={20} />
                <p>{averageRating}</p>
                <div className='h-[20px] mx-[10px] border-[0.5px] border-neutral-500'></div>
                <p>{`${reviewCount} reviews`}</p>
            </div>


            <div>

                {
                    placeSpecificReviews.splice(0, 5).map((eachReview: eachReview, index: number) => {
                        const { placeId, reviewRating, reviewText, reviewerExperienceInYears, reviewerImageLink, reviewerName, reviewDate } = eachReview;
                        return (
                            <DetailsPageReviewCard

                                key={index}
                                reviewDate={reviewDate}
                                placeId={placeId}
                                reviewRating={reviewRating}
                                reviewText={reviewText}
                                reviewerExperienceInYears={reviewerExperienceInYears}
                                reviewerImageLink={reviewerImageLink}
                                reviewerName={reviewerName}
                            />
                        )

                    })
                }

            </div>


            {/* Dialog Box Button for showing all amenities */}
            {
                reviewCount <= 3 ? null : <ShowAllReviewsButton reviewCount={reviewCount} />
            }



        </div>
    )
}

export default DetailsPageReviews



interface ReviewCountProp {
    reviewCount: number
}

export const ShowAllReviewsButton: React.FC<ReviewCountProp> = ({ reviewCount }: ReviewCountProp): React.JSX.Element => {
    return (
        <div className='centerAll w-full my-[24px] inter-regular'>
            <button className='border-[#0A0A0A] border-[1px] rounded-[6px] px-[24px]
                    py-[12px] text-[16px]'>
                {`Show all ${reviewCount} amenities`}
            </button>

        </div>
    )
}