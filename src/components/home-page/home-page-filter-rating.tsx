'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const HomePageFilterRating: React.FC = () => {
    const numberOfRating = 10;

    // State to keep track of the selected ratings
    const [selected, setSelected] = useState<number[]>([]);

    const handleSelect = (rating: number) => {
        setSelected((prev) =>
            prev.includes(rating)
                ? prev.filter(item => item !== rating) // Deselect if already selected
                : [...prev, rating] // Add to selected if not already selected
        );
    };

    return (
        <div className="flex overflow-x-scroll gap-[10px] pl-[9px]">
            {Array.from({ length: numberOfRating }, (_, index) => {
                const ratingValue = index + 1; // Rating value (1.0, 2.0, etc.)
                const isSelected = selected.includes(ratingValue);

                return (
                    <div
                        key={ratingValue}
                        onClick={() => handleSelect(ratingValue)} // Handle rating select/deselect
                        className={`flex py-[7px] px-[25px] w-max rounded-full justify-center cursor-pointer ${isSelected ? 'border-blue-600 border-[3px]' : ''
                            }`}
                    >
                        {/* Star Icon */}
                        <Image alt="reviews" src="/icons/star.svg" width={20} height={20} />
                        <p className="ml-[3px]">{ratingValue}.0</p>
                    </div>
                );
            })}
        </div>
    );
};

export default HomePageFilterRating;
