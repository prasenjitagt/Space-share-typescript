'use client'

import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useRef } from "react"



const DetailsPageMap = () => {


    const mapRef = useRef<HTMLDivElement>(null);


    useEffect(() => {

        const initMap = async () => {

            const loader = new Loader({
                apiKey: process.env.GMAP_API as string,
                version: "quarterly"
            });


            const { Map } = await loader.importLibrary('maps');



            const mapOptions: google.maps.MapOptions = {
                center: { lat: 23.785450, lng: 91.261247 },
                zoom: 17,
                mapId: 'details-page-map-id',
            }



            const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

        }


        initMap()


    }, [])

    return (
        <div className="[font-family:Inter] mx-[13px]">

            {/* Heading */}
            <h3 className='text-[23px] font-[500] mb-[17px] mt-[24px] '>Location</h3>


            {/* Google Map */}
            <div className="h-[183px] w-full" ref={mapRef}>

            </div>

            {/* Divider */}
            <div className="h-[1px] my-[24px] w-full bg-slate-500 opacity-50 " ></div>
        </div>
    )
}

export default DetailsPageMap