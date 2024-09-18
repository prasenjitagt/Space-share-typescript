import React from 'react'
import HomeImageCard from './homeImageCard'
import Places, { eachPlace } from '../data/homePageData.ts'



export const PhotoSection = () => {


  return (


    Places.map((item: eachPlace) => {

      return (
        <div className='flex flex-col items-center mx-[13px]'>

          <HomeImageCard
            imageUrls={item.images}
            nameOfPlace={item.nameOfPlace}
            location={item.location}
            peopleCount={item.peopleCount}
            reviewCount={item.reviewCount}
            price={item.price}
          />
          <div className="h-[10px]"></div>

        </div>
      )




    })




  )
}
