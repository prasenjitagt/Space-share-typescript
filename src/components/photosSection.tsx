import React from 'react'
import HomeImageCard from './homeImageCard'
import Places, { eachPlace } from '../data/homePageData.ts'



export const PhotoSection = () => {


  return (


    Places.map((place: eachPlace) => {

      const { areaInSqft, id, images, location, nameOfPlace, peopleCount, price, reviewCount } = place;


      return (
        <div className='flex flex-col items-center mx-[16px]'>

          <HomeImageCard
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
