import { eachReview } from '@/data/reviews-data';
import React from 'react';
import Image from 'next/image';

const DetailsPageReviewCard: React.FC<eachReview> = (props: eachReview) => {
    const { reviewRating, reviewText, reviewerExperienceInYears, reviewerImageLink, reviewerName } = props;

    const rating = parseInt(reviewRating, 10); // Convert rating string to number
    const maxRating = 5; // Assuming max rating is 5

    return (
        <div className='w-[280px] h-[164px] bg-neutral-400 rounded-[17px] pt-[19px] pb-[14px] pl-[18px] pr-[23px]'>
            {/* Rating Stars */}
            <section>
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
                                        className='text-white'
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
            <section>
                <p className="text-sm line-clamp-3">
                    {reviewText}
                </p>
            </section>

            {/* Reviewer Info */}
            <section className='flex items-center mt-2'>

                <div className='object-cover w-[50px] h-[50px] rounded-full border-[1px] border-pink-600 relative'>

                    <Image
                        src={`/images/${reviewerImageLink}`}
                        className='rounded-full'
                        alt="profile"
                        fill
                    />
                </div>
                <div className='ml-2'>
                    <p className="font-bold">{reviewerName}</p>
                    <p className="text-xs text-neutral-600">{reviewerExperienceInYears} years experience</p>
                </div>
            </section>
        </div>
    );
};

export default DetailsPageReviewCard;
