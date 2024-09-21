

import Places, { eachPlace } from '@/data/homePageData'
import SpacesImageCard from './spacesImageCard'

interface Props {
    placeId: string
}

const DetailsPagePhoto = (props: Props) => {

    return (


        Places.filter((place: eachPlace) => place.id === props.placeId)
            .map((place: eachPlace) => {

                const { areaInSqft, id, images, location, nameOfPlace, peopleCount, price, reviewCount } = place;

                return (
                    <div className='flex flex-col items-center mx-[13px] '>

                        <SpacesImageCard

                            areaInSqft={areaInSqft}
                            images={images}
                            location={location}
                            nameOfPlace={nameOfPlace}
                            peopleCount={peopleCount}
                            reviewCount={reviewCount}

                        />
                        <div className="h-[10px]"></div>

                    </div>
                )




            })




    )
}

export default DetailsPagePhoto