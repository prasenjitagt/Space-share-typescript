'use client';

import { FC } from 'react';
import Image from 'next/image';
import heartIcon from '../../assets/icons/heart.svg';
import leftArrowIcon from '../../assets/icons/leftArrow.svg';
import shareIcon from '../../assets/icons/share.svg';
import DetailsPagePhoto from '@/components/detailsPagePhoto';


const DetailsPage: FC = () => {

    const handleLeftArrow = (): void => {

    }

    return (
        <>
            <nav className='flex justify-between m-[28px]  '>

                {/* Left Arrow */}
                <button
                    className="bg-[#FAFAFB] text-black p-2 rounded-full border border-gray-300 opacity-80"
                    onClick={handleLeftArrow}
                >
                    <Image alt='back  button' src={leftArrowIcon} width={20} height={20} />
                </button>

                {/* Share and Wishlist */}
                <div >

                    {/* Share */}
                    <button className="bg-[#FAFAFB] text-black p-2 mr-[7px] rounded-full border border-gray-300 opacity-80">
                        <Image alt='share' src={shareIcon} width={20} height={20} />
                    </button>


                    {/* Wishlist */}
                    <button className="bg-[#FAFAFB] text-black p-2 rounded-full border border-gray-300 opacity-80">
                        <Image alt='wishlist' src={heartIcon} width={20} height={20} />
                    </button>

                </div>



            </nav>

            <DetailsPagePhoto />
        </>
    )
}

export default DetailsPage