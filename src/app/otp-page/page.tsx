'use client';

import React, { useState, useEffect } from 'react';
import '@/stylesheets/otp.css';
import { useRouter } from 'next/navigation';

const OTPPage: React.FC = () => {
    const [otp, setOtp] = useState(['', '', '', '']);
    const [timer, setTimer] = useState(20);
    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false); // State to track keyboard visibility
    const router = useRouter();

    // Handle OTP input
    const handleChange = (value: string, index: number) => {
        const otpArray = [...otp];
        otpArray[index] = value;
        setOtp(otpArray);

        // Move to the next input when a digit is entered
        if (value.length === 1 && index < 3) {
            const nextInput = document.getElementById(`otp-input-${index + 1}`);
            if (nextInput) {
                (nextInput as HTMLInputElement).focus();
            }
        }

        // Move to the previous input if backspace is pressed and current input is empty
        if (value.length === 0 && index > 0) {
            const prevInput = document.getElementById(`otp-input-${index - 1}`);
            if (prevInput) {
                (prevInput as HTMLInputElement).focus();
            }
        }
    };

    // Focus on first OTP input on page load
    useEffect(() => {
        const firstInput = document.getElementById('otp-input-0');
        if (firstInput) {
            (firstInput as HTMLInputElement).focus();
        }
    }, []);

    // Timer countdown for OTP resend
    useEffect(() => {
        const countdown = setInterval(() => {
            setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
        }, 1000);

        return () => clearInterval(countdown);
    }, []);

    // Check for keyboard visibility on window resize
    useEffect(() => {
        const handleResize = () => {
            // Compare innerHeight to detect keyboard open state
            setIsKeyboardOpen(window.innerHeight < 500); // Adjust threshold as necessary
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={`mx-[23px] mt-[90px] ${isKeyboardOpen ? 'mb-[20px]' : 'mb-[203px]'}`}>
            {/* Heading */}
            <h1 className='heading mb-[24px]'>Enter code</h1>

            {/* OTP Instructions */}
            <p className='translucent-text mb-[24px]'>
                We’ve sent an SMS with an activation code to your phone <strong>+91 97743 32123</strong>
            </p>

            {/* OTP Input Fields */}
            <div className='w-full flex justify-between mb-[24px]'>
                {otp.map((digit, index) => (
                    <input
                        key={index}
                        id={`otp-input-${index}`}
                        className='otp_case text-center text-2xl outline-none'
                        type="tel"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleChange(e.target.value, index)}
                    />
                ))}
            </div>

            {/* Resend OTP Timer */}
            <p className='text-gray-500 mb-[24px] text-center'>
                Send OTP again in <span className='text-blue-500'>{`00:${timer < 10 ? `0${timer}` : timer}`}</span>
            </p>

            {/* Verify Button */}
            <button
                onClick={() => router.push('/otp-page')}
                className='verify-button w-full'
            >
                <p className='verify-button-text'>Verify</p>
            </button>
        </div>
    );
};

export default OTPPage;
