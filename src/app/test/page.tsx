'use client'

import React, { useEffect, useState } from 'react';

const KeyboardDetectionComponent = () => {
    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

    useEffect(() => {
        // Function to check if the keyboard is open
        const handleResize = () => {
            // Assuming the threshold height for keyboard open is 500px
            setIsKeyboardOpen(window.innerHeight < 500);
        };

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Call the function initially to set the state correctly
        handleResize();

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            <input type="text" placeholder='keyboard' />
            <p>The keyboard is {isKeyboardOpen ? 'open' : 'closed'}.</p>
            {/* Add your UI elements here */}
        </div>
    );
};

export default KeyboardDetectionComponent;
