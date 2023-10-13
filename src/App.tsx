import { useMobileMenu } from './contexts/MobileMenuContextProvider';
import { useImageSlider } from './contexts/ImageSliderContextProvider';

import Main from './components/Main';
import HamburgerMenu from './components/UI/HamburgerMenu';
import ImageSliderButtons from './components/UI/ImageSliderButtons';
import Logo from './components/UI/Logo';
import MobileMenuOverlay from './components/UI/MobileMenuOverlay';
import reqForDivHeightMobileImg from '/src/assets/images/mobile-image-hero-1.jpg';
import NavLinks from './components/UI/NavLinks';
import useHideOnDesktop from './hooks/useHideOnDesktop';

const App = () => {
    const { mobileMenuOpen, setMobileMenuOpen } = useMobileMenu();
    const { currentImage } = useImageSlider();
    const { isHiddenOnDesktop } = useHideOnDesktop();

    return (
        <>
            {mobileMenuOpen && <MobileMenuOverlay />}

            <div className="min-h-screen lg:h-full lg:grid lg:grid-cols-layout lg:grid-rows-layout">
                <div
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
                </div>

                <Main />
            </div>
        </>
    );
};

export default App;
