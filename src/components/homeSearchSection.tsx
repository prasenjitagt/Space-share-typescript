
'use client'
import { useState } from 'react'
import Image from 'next/image';
import MobileWrapper from './mobile_wrapper'
import searchIcon from "../assets/icons/search.svg"
import filterIcon from "../assets/icons/filter.svg"
import Dropdown from '@/components/dropDownMenu';

const HomeSearchSection = () => {
    const [selectedOption1, setSelectedOption1] = useState("");
    const [selectedOption2, setSelectedOption2] = useState("");

    const handleSelect1 = (option: string): void => {
        setSelectedOption1(option);
        console.log('Dropdown 1 selected:', option);
    };

    const handleSelect2 = (option: string): void => {
        setSelectedOption2(option);
        console.log('Dropdown 2 selected:', option);
    };

    return (
        <MobileWrapper>
            <head className='centerAll'>
                <nav ><p className="font-[900] [font-family:'Futura-Black-Bold',Helvetica] text-[18px]">SPACEHUB</p></nav>





                {/* search bar  */}
                <section className=' w-full  py-[15px] flex flex-col justify-center px-[12]'>

                    {/* search input */}
                    <div className=' w-full px-[27px] flex items-center'>

                        <div className=' py-[6px] w-full flex justify-between bg-[#FAFAFB] rounded-full '>

                            <input type="text" placeholder='Search' className=' rounded-full pl-[15.95px] pr-[21.59px] bg-[#FAFAFB]' />


                            <div className='bg-black centerAll rounded-full  h-[40px] w-[40px] mr-[5px]'>
                                <Image alt='search icon' src={searchIcon} width={20} height={20} />
                            </div>

                        </div>


                        <div className=' border-black border-[1px] centerAll rounded-full  h-[38px] w-[43px]'>
                            <Image
                                alt='search icon'
                                src={filterIcon}
                                layout='fixed'
                                width={24}
                                height={24}
                            />
                        </div>
                    </div>





                    {/* dropdown section */}
                    <div className='px-[27px]'>

                        <Dropdown
                            options={['Bengalore', 'Mumbai', 'Tiruvannat Puram']}
                            onSelect={handleSelect1}
                            placeholder="Location"
                        />


                        <Dropdown
                            options={['Nas', 'Khel', 'Has']}
                            onSelect={handleSelect2}
                            placeholder="Activities"
                        />
                    </div>

                </section>
            </head>
        </MobileWrapper>
    )
}

export default HomeSearchSection