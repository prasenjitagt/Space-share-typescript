'use client';


import { useState } from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { useRouter } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

export interface Props {
    id: string,
    images: string[],
    nameOfPlace: string,
    location: string,
    reviewCount: string,
    peopleCount: string,
    price: string,
}

const HomeImageCard = (props: Props) => {


    const imageUrls = props.images;


    const maxImageIndex = imageUrls.length - 1;
    const [currentImage, setCurrentImage] = useState(0);
    const rounter = useRouter();

    const handleLeftArrow = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        e.stopPropagation();
        setCurrentImage(prevCount => prevCount === 0 ? maxImageIndex : prevCount - 1);
    };

    const handleRightArrow = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        e.stopPropagation();
        setCurrentImage(prevCount => prevCount === maxImageIndex ? 0 : prevCount + 1);
    };

    const goToDetailedPage = (): void => {
        rounter.push(`place-details/${props.id}`)
    }

    const handleWishList = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        e.stopPropagation();
        console.log('whislisted');

    }


    return (
        <div
            className={`rounded-lg shadow-xl overflow-hidden w-full bg-[#FAFAFB] relative cursor-pointer`}

        >
            {/* Image section */}
            <section
                className="relative w-full h-[319px] overflow-hidden"
                onClick={goToDetailedPage}
            >
                {/* Image Container */}
                <div
                    className="flex transition-transform duration-500 ease-in-out "
                    style={{ transform: `translateX(-${currentImage * 100}%)` }}


                >
                    {imageUrls.map((url, index) => (
                        <div key={index} className="w-full h-[319px] object-cover relative flex-shrink-0">
                            <Image
                                src={url}
                                alt="Studio setup"
                                fill
                                priority
                                className='rounded-lg'
                            />
                        </div>
                    ))}
                </div>

                {/* For Sale */}
                <button className="flex flex-row items-center absolute top-2 left-2 bg-[#FAFAFB] text-black text-xs py-1 px-3 rounded-full border border-gray-300 opacity-80">
                    <Image alt='sales' src="/icons/saleTag.svg" width={20} height={20} />
                    <p>For sale</p>
                </button>

                {/* Wishlist */}
                <button
                    className="absolute top-2 right-2 bg-[#FAFAFB] text-black p-2 rounded-full border border-gray-300 opacity-80"

                    onClick={handleWishList}
                >
                    <Image alt='wishlist' src="/icons/heart.svg" width={20} height={20} />
                </button>

                {/* Left Arrow */}
                <button
                    className="absolute top-[50%] left-2 bg-[#FAFAFB] text-black p-2 rounded-full border border-gray-300 opacity-80"
                    onClick={handleLeftArrow}
                >
                    <Image alt='last image' src="/icons/leftArrow.svg" width={20} height={20} />
                </button>

                {/* Right Arrow */}
                <button
                    className="absolute top-[50%] right-2 bg-[#FAFAFB] text-black p-2 rounded-full border border-gray-300 opacity-80"
                    onClick={handleRightArrow}
                >
                    <Image alt='next image' src="/icons/rightArrow.svg" width={20} height={20} />
                </button>

                {/* Dots */}
                <div className="flex justify-center w-full absolute bottom-2">
                    {imageUrls.map((_, index) => (
                        <div
                            key={index}
                            className={`w-[7px] h-[7px] rounded-full bg-white mx-[3px] ${currentImage === index ? 'opacity-100' : 'opacity-60'}`}
                        />
                    ))}
                </div>
            </section>

            {/* Text and Details */}
            <section className="mt-[10px] px-[14px]">
                <h3 className="text-[17px]">{props.nameOfPlace}</h3>
                <div className="flex mb-[12px] text-[12.5px]">
                    <Image alt='location' src="/icons/location.svg" width={20} height={20} />
                    <p>{props.location}</p>
                </div>
                <div className='flex justify-between'>
                    <div className='flex justify-between'>
                        <div className="flex justify-between text-[13.5px] mb-4">
                            <div className="flex">
                                <Image alt='review' src="/icons/star.svg" width={20} height={20} />
                                <p>{`${props.reviewCount} reviews`}</p>
                            </div>
                            <div className='bg-black h-[full] w-[1px] mx-1'></div>
                            <div className="flex">
                                <Image alt='peoples' src="/icons/user.svg" width={20} height={20} />
                                <p>{`${props.peopleCount} people`}</p>
                            </div>
                        </div>
                    </div>
                    <p className="text-[17px]">{`₹${props.price}/hr`}</p>
                </div>
            </section>
        </div>
    );
};

export default HomeImageCard;
