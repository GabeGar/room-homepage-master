import { AnimatePresence, motion } from 'framer-motion';
import { useImageSlider } from '../contexts/ImageSliderContextProvider';
import { useMobileMenu } from '../contexts/MobileMenuContextProvider';

import useHideOnDesktop from '../hooks/useHideOnDesktop';
import reqForDivHeightMobileImg from '/src/assets/images/mobile-image-hero-1.jpg';
import HamburgerMenu from './UI/HamburgerMenu';
import NavLinks from './UI/NavLinks';
import Logo from './UI/Logo';
import ImageSliderButtons from './UI/ImageSliderButtons';

const Hero = () => {
    const { setMobileMenuOpen } = useMobileMenu();
    const { currentImage, currentIndex, isMobile } = useImageSlider();
    const { isHiddenOnDesktop } = useHideOnDesktop();

    const hasRelativeWrapperContent = (
        <>
            <div className="relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={`${currentImage} bg-no-repeat bg-contain lg:row-span-1 lg:col-span-2 lg:bg-cover`}
                    >
                        {!isHiddenOnDesktop && (
                            <img
                                className="w-full invisible"
                                src={reqForDivHeightMobileImg}
                                alt="Placeholder Image"
                            />
                        )}
                        <header className="absolute top-14">
                            <nav className="flex lg:px-[8rem] lg:gap-16 lg:py-[4rem] items-center min-w-[100dvw] px-8">
                                <HamburgerMenu
                                    onMenuClick={() => {
                                        setMobileMenuOpen(true);
                                    }}
                                />
                                <Logo />
                                <NavLinks ulClasses="xlg:hidden flex text-primary-white gap-12 text-4xl  font-bold" />
                            </nav>
                        </header>
                    </motion.div>
                </AnimatePresence>
                {!isHiddenOnDesktop && <ImageSliderButtons />}
            </div>
        </>
    );

    const noRelativeWrapperContent = (
        <>
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={`relative ${currentImage} bg-no-repeat bg-contain lg:row-span-1 lg:col-span-2 lg:bg-cover`}
                >
                    {!isHiddenOnDesktop && (
                        <img
                            className="w-full invisible"
                            src={reqForDivHeightMobileImg}
                            alt="Placeholder Image"
                        />
                    )}
                    <header className="absolute top-14">
                        <nav className="flex lg:px-[8rem] lg:gap-16 lg:py-[4rem] items-center min-w-[100dvw] px-8">
                            <HamburgerMenu
                                onMenuClick={() => {
                                    setMobileMenuOpen(true);
                                }}
                            />
                            <Logo />
                            <NavLinks ulClasses="xlg:hidden flex text-primary-white gap-12 text-4xl  font-bold" />
                        </nav>
                    </header>
                    {!isHiddenOnDesktop && <ImageSliderButtons />}
                </motion.div>
            </AnimatePresence>
        </>
    );

    if (isMobile) {
        return hasRelativeWrapperContent;
    } else {
        return noRelativeWrapperContent;
    }
};

export default Hero;
