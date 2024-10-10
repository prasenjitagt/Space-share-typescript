"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { firstLetterToUpperCase } from "@/utils/homeImageCardUtils";

interface PropsType {
  images: string[];
  nameOfPlace: string;
  location: string;
  reviewCount: string;
  peopleCount: string;
  areaInSqft: string;
}

const DetailsPageImageCard: React.FC<PropsType> = (props: PropsType) => {
  const imageUrls = props.images;
  const [currentImage, setCurrentImage] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const upperCasedNameofPlace = firstLetterToUpperCase(props.nameOfPlace);
  const upperCasedLocationofPlace = firstLetterToUpperCase(props.location);
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
      scrollContainer.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div
      className={`rounded-b-none  overflow-hidden w-full  relative [font-family:Inter]`}
    >
      {/* Image section with scroll snapping */}
      <section
        className="relative w-full h-[360px] overflow-x-scroll scroll-smooth snap-x snap-mandatory scroll-hidden"
        ref={scrollContainerRef}
      >
        <div className="flex">
          {imageUrls.map((url, index) => (
            <div
              key={index}
              className="w-full h-[360px] relative flex-shrink-0 snap-center"
            >
              <Image
                src={url}
                alt="Studio setup"
                fill
                priority
                className="rounded-b-none object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Display current image number */}
      <div className="absolute text-xs w-[36px] h-[20px] bg-opacity-80 text-center bg-neutral-900 rounded-md bottom-[180px]   right-[10px] inter-for-carousel-text centerAll">
        <p>{`${currentImage + 1}/${imageUrls.length}`}</p>
      </div>

      {/* Text and Details */}
      <section className="mt-[25px] px-[23px]">
        {/* Logic for first letter to be upper cased */}
        <h3 className=" inter-medium whitespace-nowrap overflow-hidden text-ellipsis  h-[30px] mb-[24px] ">
          {upperCasedNameofPlace}
        </h3>

        {/* Location */}
        <div className="flex items-center mb-[25px]  opacity-80">
          <Image
            alt="location"
            src="/icons/location.svg"
            width={20}
            height={20}
          />

          {/* Logic for first letter to be upper cased */}
          <p className="ml-[3px] inter-regular whitespace-nowrap overflow-hidden text-ellipsis ">
            {upperCasedLocationofPlace}
          </p>
        </div>

        <div className="flex justify-between">
          <div className="flex justify-between items-center inter-for-icons mb-4 w-[85%] ">
            {/* Reviews */}
            <div className="flex items-center">
              <Image
                alt="reviews"
                src="/icons/star.svg"
                width={20}
                height={20}
              />
              <p>{`${props.reviewCount} reviews`}</p>
            </div>

            {/* People Count */}
            <div className="flex items-center">
              <Image
                alt="peoples"
                src="/icons/user.svg"
                width={20}
                height={20}
              />
              <p>{`${props.peopleCount} people`}</p>
            </div>

            {/* Total Area */}
            <div className="flex items-center">
              <Image
                alt="peoples"
                src="/icons/area.svg"
                width={20}
                height={20}
              />
              <p>{`${props.areaInSqft} sqft`}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailsPageImageCard;
