
const HomePageFilterSection = () => {
    return (
        <div className=" mb-[14px] flex flex-col">


            <div className="flex justify-between">

                <FilterSectionItem itemName={"Music Studio"} />
                <FilterSectionItem itemName={"Photo Studio"} />
                <FilterSectionItem itemName={"Meeting"} />
                <FilterSectionItem itemName={"Workshop"} />
            </div>
            <div className="flex justify-between pt-2">
                <FilterSectionItem itemName={"Party"} />
                <FilterSectionItem itemName={"Live Music"} />
                <FilterSectionItem itemName={"Wedding Reception"} />
                <FilterSectionItem itemName={"Event"} />
            </div>
        </div>

    )
}

export default HomePageFilterSection


interface PorpsType {
    itemName: string
}

export const FilterSectionItem = ({ itemName }: PorpsType) => {
    return (
        <div className="inline-flex items-center justify-center gap-px px-3 py-2.5 relative bg-white rounded-[36px] border-[0.5px] border-solid border-black">
            <div className="relative w-fit mt-[-0.50px] [font-family:'Inter',Helvetica] font-light text-black text-xs tracking-[-0.25px] leading-[12.5px] whitespace-nowrap">
                {itemName}
            </div>
        </div>
    )
}
