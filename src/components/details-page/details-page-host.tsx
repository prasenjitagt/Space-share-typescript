import React from 'react';
import Image from 'next/image';
import '@/stylesheets/details-page-host.css';
import DividerLine from '../small-components/divider-line';
import { eachHost } from '@/data/hostData';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';

interface PropType {
    placeId: string;
}

const DetailsPageHost: React.FC<PropType> = ({ placeId }: PropType) => {
    const allHosts: eachHost[] = useSelector((state: RootState) => state.storeHosts.sliceHosts);

    // Find the current host details where placeId exists in placeIdsList
    const currentHostDetails: eachHost | undefined = allHosts.find((host: eachHost) =>
        host.placeIdsList.includes(placeId)
    );


    const { hostImageUrl, hostName, hostReviewCount, joiningMonth, joiningYear } = currentHostDetails as eachHost;


    if (!currentHostDetails) {
        return <div>No host details found.</div>; // Handle case where no host is found
    }

    return (
        <div className='inter-global flex flex-col items-center mx-[13px]'>
            <DividerLine />

            {/* Name and Photo in a flex */}
            <section className='flex justify-between my-[24px] px-[16px] py-[13px] rounded-[16px] w-[310px] border-[0.5px] border-[#BABABA] shadow-md cursor-pointer'>
                {/* Host Info */}
                <section className='flex flex-col justify-between w-[210px]'>
                    {/* Name and Date */}
                    <div>
                        <h3 className='inter-for-host line-clamp-2'>{`Hosted By ${hostName}`}</h3>
                        <p className='inter-for-host-date'>{`Joined in ${joiningMonth}, ${joiningYear}`}</p>
                    </div>

                    {/* Reviews and Identity */}
                    <div>
                        {/* Black Star Icon */}
                        <div className='flex'>
                            <Image alt="reviews" src="/icons/blackReviewStar.svg" width={18} height={18} />
                            <p className='pl-[8px] inter-review-and-verified'>{`${hostReviewCount} reviews`}</p>
                        </div>

                        {/* Verified Icon */}
                        <div className='flex'>
                            <Image alt="verified" src="/icons/verified.svg" width={17} height={17} />
                            <p className='pl-[8px] inter-review-and-verified'>Identity Verified</p>
                        </div>
                    </div>
                </section>

                {/* Image */}
                <div className='relative w-[62px] h-[62px] rounded-full overflow-hidden'>
                    <Image
                        src={hostImageUrl} // Assuming there's a profileImage property
                        className='object-cover'
                        alt="host photo"
                        priority
                        fill
                    />
                </div>
            </section>
        </div>
    );
};

export default DetailsPageHost;
