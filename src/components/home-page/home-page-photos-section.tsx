import React from 'react'
import HomePageImageCard from './home-page-image-card.tsx'
import Places, { eachPlace } from '../../data/place-data.ts'



const HomePagePhotosSection = () => {


  return (


    Places.map((place: eachPlace) => {

      const { id, images, location, nameOfPlace, peopleCount, price, reviewCount } = place;


      return (
        <div
          key={id}
          className='flex flex-col items-center mx-[16px]'
        >

          <HomePageImageCard
            id={id}
            images={images}
            nameOfPlace={nameOfPlace}
            location={location}
            peopleCount={peopleCount}
            reviewCount={reviewCount}
            price={price}
          />
          <div className="h-[10px]"></div>

        </div>
      )




    })




  )
}


export default HomePagePhotosSection;