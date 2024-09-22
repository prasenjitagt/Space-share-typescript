'use client'

import { RootState } from "@/app/store"
import React from "react"
import { useSelector } from "react-redux"
import { eachPlace, OperatingHours } from '@/data/homePageData'


interface Props {
    placeId: string;
}


const DetailsPageOperatingHours: React.FC<Props> = ({ placeId }: Props) => {

    const Places: eachPlace[] = useSelector((state: RootState) => state.storePlaces.slicePlaces)

    const currentPlace = Places.filter((eachPlace: eachPlace) => eachPlace.id === placeId)

    return (
        <div className="px-[19px]">

            {/* Heading */}
            <h3 className='inter-medium mb-[17px] mt-[24px] '>Operating Hours</h3>

            {/* Operating Hours */}
            <div className="w-full">
                {currentPlace.map((place: eachPlace) => (
                    <div key={place.id} className="mb-4">


                        {/* Operating hours table */}
                        <div className="grid grid-cols-2 gap-2 ">
                            {place.operatingHours.map((operatingHours: OperatingHours, idx: number) => (
                                <React.Fragment key={idx}>
                                    {operatingHours.days.map((day) => (
                                        <React.Fragment key={day}>
                                            {/* Day Name */}
                                            <div className="font-medium">{day}</div>

                                            {/* Operating Times */}
                                            <div className="text-right">
                                                {operatingHours.closed ? (
                                                    <span className="text-red-500">Closed</span>
                                                ) : (
                                                    <span>
                                                        {operatingHours.startingTime} - {operatingHours.endingTime}
                                                    </span>
                                                )}
                                            </div>
                                        </React.Fragment>
                                    ))}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Divider */}
            <div className="h-[1px] my-[24px] w-full bg-slate-500 opacity-50"></div>
        </div>
    )
}

export default DetailsPageOperatingHours
