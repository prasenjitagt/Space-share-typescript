import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { eachReview } from '@/data/reviews-data';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import DetailsPageReviewCard from './details-page-review-card';
import { motion } from 'framer-motion';

interface PropType {
    placeId: string;
    setIsBottomSheetOpen : React.Dispatch<React.SetStateAction<boolean>>;

}

const DetailsPageReviews: React.FC<PropType> = (props: PropType) => {
    const [isSheetOpen, setIsSheetOpen] = useState(false); // State for bottom sheet

    // All reviews from redux toolkit
    const allReviews: eachReview[] = useSelector((state: RootState) => state.storeReviews.sliceReviews);

    // Filtered Reviews of this place Id
    const placeSpecificReviews: eachReview[] = allReviews.filter((review: eachReview) => review.placeId === props.placeId);

    // Total Rating
    const totalRating = placeSpecificReviews.reduce((sum, review) => sum + parseInt(review.reviewRating, 10), 0);

    // How many Peoples have reviewed
    const reviewCount = placeSpecificReviews.length;

    // Average of all reviews
    const averageRating = reviewCount > 0 ? (totalRating / reviewCount).toFixed(1) : 0;

    const toggleSheet = () => {
        setIsSheetOpen(prev => !prev);
        props.setIsBottomSheetOpen(prev => !prev);

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
        <div className="mx-[27px] mb-[24px]">
            {/* Total Reviews */}
            <div className="flex items-center mb-4 inter-medium">
                <Image alt="reviews" src="/icons/star.svg" width={20} height={20} />
                <p>{averageRating}</p>
                <div className="h-[20px] mx-[10px] border-[0.5px] border-neutral-500"></div>
                <p>{`${reviewCount} reviews`}</p>
            </div>

            <div>
                {placeSpecificReviews.slice(0, 3).map((eachReview: eachReview, index: number) => {
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
                    );
                })}
            </div>

            {/* Show All Reviews Button */}
            {reviewCount > 3 && <ShowAllReviewsButton reviewCount={reviewCount} toggleSheet={toggleSheet} />}

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
                        {/* All Reviews Heading */}
                        <h3 className="text-[18px] font-medium">All Reviews</h3>

                        {/* Close Icon */}
                        <button onClick={toggleSheet}>
                            <Image alt="close icon" src="/icons/close.svg" width={20} height={20} />
                        </button>
                    </div>

                    {/* Divider */}
                    <div className="mt-[14px]">
                        {placeSpecificReviews.map((eachReview: eachReview, index: number) => {
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
                            );
                        })}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default DetailsPageReviews;

// Show All Reviews Button
interface ReviewCountProp {
    reviewCount: number;
    toggleSheet: () => void;
}

const ShowAllReviewsButton: React.FC<ReviewCountProp> = ({ reviewCount, toggleSheet }: ReviewCountProp): React.JSX.Element => {
    return (
        <div className="centerAll w-full my-[24px] inter-regular">
            <button
                className="w-[210px] border-[#0A0A0A] border-[1px] rounded-[6px] px-[24px] py-[12px] text-[16px]"
                onClick={toggleSheet}
            >
                {`Show all ${reviewCount} reviews`}
            </button>
        </div>
    );
};
