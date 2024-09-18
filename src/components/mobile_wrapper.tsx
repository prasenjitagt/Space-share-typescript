'use client'
import { useEffect, useState } from 'react';

const MobileWrapper = ({ children }: any) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 767);
        };

        checkScreenSize();

        window.addEventListener('resize', checkScreenSize);

        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    useEffect(() => {

    }, [isMobile]);

    if (!isMobile) {
        return <div>Please view this on a mobile device.</div>;
    }

    return <>{children}</>;
};

export default MobileWrapper;
