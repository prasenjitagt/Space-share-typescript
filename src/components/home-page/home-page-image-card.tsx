'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { firstLetterToUpperCase } from '@/utils/homeImageCardUtils';

export interface PropType {
    id: string;
    images: string[];
    nameOfPlace: string;
    location: string;
    reviewCount: string;
    peopleCount: string;
    price: string;
}

const HomePageImageCard: React.FC<PropType> = (props: PropType) => {
    const imageUrls = props.images;
    const [currentImage, setCurrentImage] = useState(0);
    const router = useRouter();
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const handleWishList = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        e.stopPropagation();
        console.log('wishlisted');
    };

    const goToDetailedPage = (): void => {
        router.push(`place-details/${props.id}`);
    };

    // Handle scroll event to update the current image index
    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const scrollLeft = scrollContainerRef.current.scrollLeft;
            const containerWidth = scrollContainerRef.current.offsetWidth;
            const newIndex = Math.round(scrollLeft / containerWidth);
            setCurrentImage(newIndex);
        }
    };

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', handleScroll);
        }
        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return (
        <div className="rounded-lg overflow-hidden w-[360px] bg-[#FAFAFB] relative cursor-pointer border-[0.5px]">
            {/* Image section with scroll snapping */}
            <section
                className="relative w-full h-[319px] overflow-x-scroll scroll-smooth snap-x snap-mandatory scroll-hidden"
                onClick={goToDetailedPage}
                ref={scrollContainerRef}
            >
                <div className="flex">
                    {imageUrls.map((url, index) => (
                        <div
                            key={index}
                            className="w-full h-[319px] relative flex-shrink-0 snap-center"
                        >
                            <Image
                                src={url}
                                alt="Studio setup"
                                fill
                                priority
                                className="rounded-lg object-cover"
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* Display current image number */}
            <div className="absolute text-xs w-[27px] h-[15px] text-center bg-neutral-900 bottom-[125px] border-[0.5px] rounded-none border-neutral-200 right-2 text-neutral-200 centerAll">
                <p>{`${currentImage + 1}/${imageUrls.length}`}</p>
            </div>

            {/* For Sale */}
            <button className="flex flex-row items-center absolute top-2 left-2 bg-[#FAFAFB] text-black text-xs py-1 px-3 rounded-full border border-gray-300 opacity-80">
                <Image alt="sales" src="/icons/saleTag.svg" width={20} height={20} />
                <p>For sale</p>
            </button>

            {/* Wishlist */}
            <button
                className="absolute top-2 right-2 bg-[#FAFAFB] text-black p-2 rounded-full border border-gray-300 opacity-80"
                onClick={handleWishList}
            >
                <Image alt="wishlist" src="/icons/heart.svg" width={20} height={20} />
            </button>

            {/* Text and Details */}
            <section className="mt-[10px] px-[14px]">
                <h3 className="inter-medium whitespace-nowrap overflow-hidden text-ellipsis h-[30px]">
                    {firstLetterToUpperCase(props.nameOfPlace)}
                </h3>

                <div className="flex items-center mb-[25px] opacity-80">
                    <Image alt="location" src="/icons/location.svg" width={20} height={20} />
                    <p className="ml-[3px] inter-regular whitespace-nowrap overflow-hidden text-ellipsis">
                        {firstLetterToUpperCase(props.location)}
                    </p>
                </div>

                <div className="flex justify-between items-center mb-[9px]">
                    <div className="flex items-center">
                        <div className="flex justify-between text-[16px]">
                            <div className="flex">
                                <Image alt="review" src="/icons/star.svg" width={20} height={20} />
                                <p className="ml-[3px]">{`${props.reviewCount} reviews`}</p>
                            </div>
                            <div className="bg-black h-[full] w-[1px] mx-[8px]"></div>
                            <div className="flex">
                                <Image alt="peoples" src="/icons/user.svg" width={20} height={20} />
                                <p className="ml-[3px]">{`${props.peopleCount} people`}</p>
                            </div>
                        </div>
                    </div>

                    <p className="text-[17px] font-medium">{`₹${props.price}/hr`}</p>
                </div>
            </section>
        </div>
    );
};

export default HomePageImageCard;
