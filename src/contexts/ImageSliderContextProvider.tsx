import { createContext, useContext, useEffect, useState } from 'react';
import { ReactChildrenNode } from '../types/ReactChildrenNode';
import { MobileBG, DesktopBG } from '../types/ImageSlider';

interface ImageSliderContextTypes {
    currentIndex: number;
    setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
    currentImage: MobileBG | DesktopBG;
    isMobile: boolean;
}

const ImageSliderContext = createContext<ImageSliderContextTypes>({
    currentIndex: 0,
    setCurrentIndex: () => 0,
    currentImage: 'bg-hero-mobile-one',
    isMobile: false,
});

const ImageSliderContextProvider = ({ children }: ReactChildrenNode) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1023);
    const [currentIndex, setCurrentIndex] = useState(0);

    const mobileBgs: MobileBG[] = [
        'bg-hero-mobile-one',
        'bg-hero-mobile-two',
        'bg-hero-mobile-three',
    ];

    const desktopBgs: DesktopBG[] = [
        'bg-hero-desktop-one',
        'bg-hero-desktop-two',
        'bg-hero-desktop-three',
    ];

    const currentImage: MobileBG | DesktopBG = isMobile
        ? mobileBgs[currentIndex]
        : desktopBgs[currentIndex];

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1023) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isMobile]);

    return (
        <ImageSliderContext.Provider
            value={{
                currentIndex,
                setCurrentIndex,
                currentImage,
                isMobile,
            }}
        >
            {children}
        </ImageSliderContext.Provider>
    );
};

const useImageSlider = () => {
    return useContext(ImageSliderContext);
};

export default ImageSliderContextProvider;
export { useImageSlider };
