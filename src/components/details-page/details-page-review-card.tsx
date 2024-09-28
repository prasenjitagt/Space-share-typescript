import { eachReview } from '@/data/reviews-data';
import React from 'react';
import Image from 'next/image';
// import { DateToStringConverter } from '@/utils/details-page-review-card-utils';

const DetailsPageReviewCard: React.FC<eachReview> = (props: eachReview) => {
    const { reviewRating, reviewText, reviewerExperienceInYears, reviewerImageLink, reviewerName } = props;

    const rating = parseInt(reviewRating, 10); // Convert rating string to number
    const maxRating = 5; // Assuming max rating is 5




    return (
        <div className='w-full bg-neutral-50 border-[0.5px] border-black border-opacity-25 rounded-[16px] py-2 px-4 mb-2 inter-global'>



            {/* Reviewer Info */}
            <section className='flex items-center mt-2'>

                <div className=' w-[50px] h-[50px] rounded-full relative overflow-hidden'>

                    <Image
                        src={`/images/${reviewerImageLink}`}
                        className='object-cover'
                        alt="profile"
                        priority
                        fill
                    />
                </div>
                <div className='ml-2'>
                    <p className="font-[500]">{reviewerName}</p>
                    <p className="text-xs text-neutral-600">{reviewerExperienceInYears} years experience</p>
                </div>
            </section>







            {/* Rating Stars */}
            <section className='mt-2'>
                {/* Reviews */}
                <div className='flex'>
                    {
                        Array.from({ length: maxRating }, (_, index) => (
                            <div key={index}>
                                {index < rating ? (
                                    <Image
                                        alt='gold star'
                                        src="/icons/goldenReviewStar.svg"
                                        width={20}
                                        height={20}
                                    />
                                ) : (
                                    <Image
                                        alt='white star'
                                        src="/icons/whiteReviewStar.svg"
                                        width={20}
                                        height={20}
                                    />
                                )}
                            </div>
                        ))
                    }
                </div>
            </section>


            {/* Review Text with 3-Line Clamp */}
            <section className='mb-2'>
                <p className="text-sm line-clamp-3">
                    {reviewText}
                </p>
            </section>

            <p className='text-xs text-neutral-600 opacity-80'>
                {/* {DateToStringConverter(reviewDate)} */}
                23 Sept 2015
            </p>



        </div>
    );
};

export default DetailsPageReviewCard;
