'use client'
import { useState } from 'react';
import Image from 'next/image';


interface DropdownParams {
    options: string[],
    onSelect: (option: string) => void,
    placeholder: string
}

const HomePageDropDown = ({ options, onSelect, placeholder }: DropdownParams) => {


    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(placeholder || "Select an option");

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionClick = (option: string): void => {
        setSelectedOption(option);
        setIsOpen(false);
        if (onSelect) onSelect(option);
    };

    return (
        <>
            <div onClick={toggleDropdown} className="w-full rounded-full mt-[3.65px] pl-[16px] pr-[12px] py-[11px]  bg-[#FAFAFB]">

                {/* button and icon */}
                <div className="flex justify-between">
                    <button className="dropdown-button ">
                        {selectedOption}
                    </button>
                    <Image alt='search icon'
                        className={`${isOpen ? 'rotate-180' : ''} transition-transform duration-300 ease-in-out`}
                        src="./icons/bottomArrow.svg"
                        width={18}
                        height={18}
                    />
                </div>




            </div>



            {/* dropdown lists */}
            <div className={`flex flex-col rounded-2xl my-[5px] border-[${isOpen ? "1" : "0"}px] border-slate-300 text-xl font-[200] transition-transform duration-300`}>

                {isOpen && (
                    <ul className='py-[10px] pl-[20px]  '>
                        {options.map((option: string, index: number) => (
                            <li
                                key={index}
                                className="py-[4px] "
                                onClick={() => handleOptionClick(option)}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

        </>
    );
};

export default HomePageDropDown;
