import React from 'react';
import {motion} from 'framer-motion';
import '@/stylesheets/details-page-price.css';

const DetailsPagePrice = () => {
  return (
    <div className='flex justify-between items-center w-full h-[100px] px-[30px] py-[18px] my-shadow bg-white  '>

        {/* Price and Date */}
        <section className=' inter-for-price text-[20px]'>

            {/* Price */}
            <div className='flex mb-[6px]'>
                <p className='font-semibold'>{`₹500`}</p>
                <p className='opacity-50'>/hour</p>
            </div>

            {/* Date */}
            <p className='underline underline-offset-4'>{`26 Sept`}</p>


        </section>


        {/* Book Now */}
        <motion.button
            whileHover={{scale:1.05}}
            whileTap={{scale:0.96}}
            onClick={()=> {
                console.log("buttonpressed")
            }
            }
            className='inter-for-price py-[16px] px-[33px] rounded-[9px] text-[20px] font-semibold text-white bg-[#0B74FA]'
        >
            Book Now
        </motion.button>

    </div>
  )
}

export default DetailsPagePrice