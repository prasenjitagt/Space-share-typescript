import React from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
// In your _app.js or component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const DetailsPageReviews: React.FC = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className="mx-[13px]">
            {/* Reviews */}
            <div className="flex items-center">
                <Image alt='reviews' src="/icons/star.svg" width={20} height={20} />
                <p>{`23 reviews`}</p>
            </div>



            <Slider {...settings}>

            </Slider>

        </div>
    )
}

export default DetailsPageReviews