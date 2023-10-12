import { useEffect } from 'react';

const usePreventScrollHTML = () => {
    useEffect(() => {
        const html = document.querySelector('html');

        if (html) {
            html.style.overflow = 'hidden';
        } else {
            return;
        }

        return () => {
            html.style.overflow = '';
        };
    }, []);
};

export default usePreventScrollHTML;
