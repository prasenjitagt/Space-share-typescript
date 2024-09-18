'use client';

import { FC, useState } from 'react';
import Image from 'next/image';
import heartIcon from '../assets/icons/heart.svg';
import saleTagIcon from '../assets/icons/saleTag.svg';
import locationIcon from '../assets/icons/location.svg';
import startIcon from '../assets/icons/star.svg';
import userIcon from '../assets/icons/user.svg';
import leftArrowIcon from '../assets/icons/leftArrow.svg';
import rightArrowIcon from '../assets/icons/rightArrow.svg';
import { Inter } from 'next/font/google';
import { eachPlace } from '@/data/homePageData';

const inter = Inter({ subsets: ['latin'] });

const SpacesImageCard = (props: eachPlace) => {

    const { images, location, nameOfPlace, peopleCount, price, reviewCount } = props;
    const imageUrls = images;


    const maxImageIndex = imageUrls.length - 1;
    const [currentImage, setCurrentImage] = useState(0);

    const handleLeftArrow = () => {
        setCurrentImage(prevCount => prevCount === 0 ? maxImageIndex : prevCount - 1);
    };

    const handleRightArrow = () => {
        setCurrentImage(prevCount => prevCount === maxImageIndex ? 0 : prevCount + 1);
    };

    return (
        <div className={`rounded-lg shadow-xl overflow-hidden w-full bg-[#FAFAFB] relative`}>
            {/* Image section */}
            <section className="relative w-full h-[319px] overflow-hidden">
                {/* Image Container */}
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentImage * 100}%)` }}
                >
                    {imageUrls.map((url, index) => (
                        <div key={index} className="w-full h-[319px] relative flex-shrink-0">
                            <Image
                                src={url}
                                alt="Studio setup"
                                layout="fill"
                                objectFit="cover"
                                className='rounded-lg'
                            />
                        </div>
                    ))}
                </div>

                {/* For Sale */}
                <button className="flex flex-row items-center absolute top-2 left-2 bg-[#FAFAFB] text-black text-xs py-1 px-3 rounded-full border border-gray-300 opacity-80">
                    <Image alt='on sale' src={saleTagIcon} width={20} height={20} />
                    <p>For sale</p>
                </button>

                {/* Wishlist */}
                <button className="absolute top-2 right-2 bg-[#FAFAFB] text-black p-2 rounded-full border border-gray-300 opacity-80">
                    <Image alt='whishlist' src={heartIcon} width={20} height={20} />
                </button>

                {/* Left Arrow */}
                <button
                    className="absolute top-[50%] left-2 bg-[#FAFAFB] text-black p-2 rounded-full border border-gray-300 opacity-80"
                    onClick={handleLeftArrow}
                >
                    <Image alt='last image' src={leftArrowIcon} width={20} height={20} />
                </button>

                {/* Right Arrow */}
                <button
                    className="absolute top-[50%] right-2 bg-[#FAFAFB] text-black p-2 rounded-full border border-gray-300 opacity-80"
                    onClick={handleRightArrow}
                >
                    <Image alt='next image' src={rightArrowIcon} width={20} height={20} />
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
                <h3 className="text-[17px]">{nameOfPlace}</h3>
                <div className="flex mb-[12px] text-[12.5px]">
                    <Image alt='location icon' src={locationIcon} width={20} height={20} />
                    <p>{location}</p>
                </div>
                <div className='flex justify-between'>
                    <div className='flex justify-between'>
                        <div className="flex justify-between text-[13.5px] mb-4">
                            <div className="flex">
                                <Image alt='reviews' src={startIcon} width={20} height={20} />
                                <p>{`${reviewCount} reviews`}</p>
                            </div>
                            <div className='bg-black h-[full] w-[1px] mx-1'></div>
                            <div className="flex">
                                <Image alt='peoples' src={userIcon} width={20} height={20} />
                                <p>{`${peopleCount} people`}</p>
                            </div>
                        </div>
                    </div>
                    <p className="text-[17px]">{`₹${price}/hr`}</p>
                </div>
            </section>
        </div>
    );
};

export default SpacesImageCard;
