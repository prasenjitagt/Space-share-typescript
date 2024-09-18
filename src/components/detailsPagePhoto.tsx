

import Places, { eachPlace } from '@/data/homePageData'
import SpacesImageCard from './spacesImageCard'



const DetailsPagePhoto = () => {

    return (


        Places.map((item: eachPlace) => {

            return (
                <div className='flex flex-col items-center mx-[13px]'>

                    <SpacesImageCard
                        images={item.images}
                        location={item.location}
                        nameOfPlace={item.nameOfPlace}
                        peopleCount={item.peopleCount}
                        price={item.price}
                        reviewCount={item.reviewCount}

                    />
                    <div className="h-[10px]"></div>

                </div>
            )




        })




    )
}

export default DetailsPagePhoto