'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

interface Props {
    images: string[],
    nameOfPlace: string,
    location: string,
    reviewCount: string,
    peopleCount: string,
    areaInSqft: string,
}

const SpacesImageCard = (props: Props) => {


    const imageUrls = props.images;


    const maxImageIndex = imageUrls.length - 1;
    const [currentImage, setCurrentImage] = useState(0);

    const handleLeftArrow = () => {
        setCurrentImage(prevCount => prevCount === 0 ? maxImageIndex : prevCount - 1);
    };

    const handleRightArrow = () => {
        setCurrentImage(prevCount => prevCount === maxImageIndex ? 0 : prevCount + 1);
    };

    return (
        <div className={`rounded-lg  overflow-hidden w-full  relative [font-family:Inter]`}>
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
                <h3 className="text-[23px] w-[341px] font-[500]">{props.nameOfPlace}</h3>
                <div className="flex mb-[12px] text-[12.5px] opacity-50 ">
                    <Image alt='location icon' src="/icons/location.svg" width={20} height={20} />
                    <p>{props.location}</p>
                </div>
                <div className='flex justify-between'>

                    <div className="flex justify-between text-[13.5px] mb-4 w-[80%] ">

                        {/* Reviews */}
                        <div className="flex">
                            <Image alt='reviews' src="/icons/star.svg" width={20} height={20} />
                            <p>{`${props.reviewCount} reviews`}</p>
                        </div>

                        {/* People Count */}
                        <div className="flex">
                            <Image alt='peoples' src="/icons/user.svg" width={20} height={20} />
                            <p>{`${props.peopleCount} people`}</p>
                        </div>


                        {/* Total Area */}
                        <div className="flex">
                            <Image alt='peoples' src="/icons/area.svg" width={20} height={20} />
                            <p>{`${props.areaInSqft} sqft`}</p>
                        </div>


                    </div>

                </div>
            </section>
        </div>
    );
};

export default SpacesImageCard;
