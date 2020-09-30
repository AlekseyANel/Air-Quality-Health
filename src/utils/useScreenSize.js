  
import {useEffect, useState} from 'react';

export const useScreenSize = () => {
    const [winSize, setWinSize] = useState(window.screen.availWidth);
    const handleResize = () => setWinSize(window.screen.availWidth);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return winSize;
};
