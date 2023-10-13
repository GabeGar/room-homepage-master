import { useEffect, useState } from 'react';

const useHideOnDesktop = () => {
    const [isHiddenOnDesktop, setIsHiddenOnDesktop] = useState(
        window.innerWidth > 1023
    );

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1023) {
                setIsHiddenOnDesktop(true);
            } else {
                setIsHiddenOnDesktop(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return { isHiddenOnDesktop };
};

export default useHideOnDesktop;
