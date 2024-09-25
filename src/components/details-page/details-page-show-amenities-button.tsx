interface AmenityCountProp {
    amenityCount: number
}

 const DetailsPageShowAllAmenitiesButton: React.FC<AmenityCountProp> = ({ amenityCount }: AmenityCountProp): React.JSX.Element => {
    return (
        <div className='centerAll w-full my-[24px] inter-regular'>
            <button className='border-[#0A0A0A] border-[1px] rounded-[6px] px-[24px]
                    py-[12px] text-[16px]'>
                {`Show all ${amenityCount} amenities`}
            </button>

        </div>
    )
}

export default DetailsPageShowAllAmenitiesButton;