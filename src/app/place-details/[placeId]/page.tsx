'use client';

import { useRouter } from 'next/navigation'
import Image from 'next/image';
import DetailsPagePhoto from '@/components/detailsPagePhoto';
import DetailsPageAmenities from '@/components/details-page-amenities';


interface Params {
  placeId: string
}

const DetailsPage = ({ params }: { params: Params }) => {


  const router = useRouter();

  const handleLeftArrow = (): void => {
    router.push('/');
  }

  return (
    <>
      <nav className='flex justify-between m-[28px]  '>

        {/* Left Arrow */}
        <button
          className="bg-[#FAFAFB] text-black p-2 rounded-full border border-gray-300 opacity-80"
          onClick={handleLeftArrow}
        >
          <Image alt='back  button' src="/icons/leftArrow.svg" width={20} height={20} />
        </button>

        {/* Share and Wishlist */}
        <div >

          {/* Share */}
          <button className="bg-[#FAFAFB] text-black p-2 mr-[7px] rounded-full border border-gray-300 opacity-80">
            <Image alt='share' src="/icons/share.svg" width={20} height={20} />
          </button>


          {/* Wishlist */}
          <button className="bg-[#FAFAFB] text-black p-2 rounded-full border border-gray-300 opacity-80">
            <Image alt='wishlist' src="/icons/heart.svg" width={20} height={20} />
          </button>

        </div>



      </nav>

      <DetailsPagePhoto
        placeId={params.placeId}
      />

      <DetailsPageAmenities placeId={params.placeId} />

    </>
  )
}

export default DetailsPage