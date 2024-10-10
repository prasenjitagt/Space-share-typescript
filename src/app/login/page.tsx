'use client';

import React, { useState } from 'react';
import '@/stylesheets/login.css';
import { countryCodes } from '@/data/country-code-data';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


const Login: React.FC = () => {
    // State to store the selected country code
    const [selectedCode, setSelectedCode] = useState('+91');

    // Function to handle country code change with explicit typing for the event
    const handleCountryCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCode(e.target.value);
    }


    const router = useRouter();

    return (
        <div className='mx-[23px] mt-[90px]'>

            {/* Heading */}
            <h1 className='heading mb-[24px]'>
                Login or Sign up
            </h1>

            {/* Translucent-text */}
            <p className='translucent-text mb-[24px]'>
                Please enter your phone number
            </p>

            {/* Input Section */}
            <section className='input-section flex justify-start items-center mb-[24px] w-full'>

                {/* Country code dropdown */}
                <select
                    value={selectedCode}
                    onChange={handleCountryCodeChange}
                    className='w-[70px] bg-[#F7F8F9] text-center text-sm outline-none'>
                    {countryCodes.map((country, index) => (
                        <option key={index} value={country.code}>
                            {country.code}
                        </option>
                    ))}
                </select>

                <div className='w-[1px] h-[26px] bg-[#D8DADC] mx-2'></div>

                {/* Phone number input */}
                <input className='bg-[#F7F8F9] outline-none w-full' maxLength={10} placeholder='00000 00000' type="tel" />
            </section>

            {/* OR Section */}
            <section className='flex items-center mb-[24px]'>
                <div className='or-div'></div>
                <p className='or mx-[10px]'>or</p>
                <div className='or-div'></div>
            </section>

            {/* Google, FB, Email Login */}
            <section className='quick-login-section mb-[24px] w-full'>
                <button className='quick-login-button'>
                    <Image src={'/icons/facebook_ic.svg'} width={20} height={20} alt='fb icon' />
                </button>

                <button className='quick-login-button'>
                    <Image src={'/icons/google_ic.svg'} width={20} height={20} alt='google icon' />
                </button>

                <button className='quick-login-button'>
                    <Image src={'/icons/email_ic.svg'} width={20} height={20} alt='email icon' />
                </button>
            </section>

            {/* Continue Button */}
            <button onClick={() => {
                router.push('/otp-page')
            }} className='continue-button w-full'>
                <p className='continue-button-text'>Continue</p>
            </button>

        </div>
    )
}

export default Login;
