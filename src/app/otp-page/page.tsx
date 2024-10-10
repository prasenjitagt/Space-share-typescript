'use client';

import React, { useState, useEffect } from 'react';
import '@/stylesheets/otp.css';

const OTPPage: React.FC = () => {
    const [otp, setOtp] = useState(['', '', '', '']);
    const [timer, setTimer] = useState(20);

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

    return (
        <div className='mx-[23px] mt-[90px]'>
            {/* Heading */}
            <h1 className='heading mb-[24px]'>Enter code</h1>

            {/* OTP Instructions */}
            <p className='translucent-text mb-[24px]'>
                We’ve sent an SMS with an activation code to your phone <strong>+91 97743 32123</strong>
            </p>

            {/* OTP Input Fields */}
            <div className='flex space-x-2 mb-[24px]'>
                {otp.map((digit, index) => (
                    <input
                        key={index}
                        id={`otp-input-${index}`}
                        className='otp_case text-center text-2xl outline-none'
                        type="number"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleChange(e.target.value, index)}
                    />
                ))}
            </div>

            {/* Resend OTP Timer */}
            <p className='text-gray-500'>
                Send OTP again in <span className='text-blue-500'>{`00:${timer < 10 ? `0${timer}` : timer}`}</span>
            </p>
        </div>
    );
};

export default OTPPage;
