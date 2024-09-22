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
            const { Marker } = await loader.importLibrary('marker') as google.maps.MarkerLibrary;


            const position = { lat: 23.785450, lng: 91.261247 };

            const mapOptions: google.maps.MapOptions = {
                center: position,
                zoom: 17,
                mapId: 'details-page-map-id',
            }


            // Setup the map
            const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

            //Place the marker
            const marker = new Marker({
                map: map,
                position: position
            });

        }


        initMap()


    }, [])

    return (
        <div className="mx-[13px]">

            {/* Heading */}
            <h3 className='inter-medium mb-[17px] mt-[24px] mx-[14px] '>Location</h3>


            {/* Google Map */}
            <div className="h-[183px]  mx-[14px] rounded-[17px]" ref={mapRef}>

            </div>

            {/* Divider */}
            <div className="h-[1px] my-[24px] w-full bg-slate-500 opacity-50 " ></div>
        </div>
    )
}

export default DetailsPageMap