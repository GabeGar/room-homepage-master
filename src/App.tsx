import Main from './components/Main';
import HamburgerMenu from './components/UI/HamburgerMenu';
import ImageSliderButton from './components/UI/ImageSliderButton';
import Logo from './components/UI/Logo';
import MobileMenuOverlay from './components/UI/MobileMenuOverlay';
import { useMobileMenu } from './contexts/MobileMenuContextProvider';
import reqForDivHeightMobileImg from '/src/assets/images/mobile-image-hero-1.jpg';

const App = () => {
    const { mobileMenuOpen, setMobileMenuOpen } = useMobileMenu();

    return (
        <>
            {mobileMenuOpen && <MobileMenuOverlay />}

            <div className="min-h-screen">
                <div className="relative bg-hero-mobile-one bg-no-repeat bg-contain">
                    <img
                        className="w-full invisible"
                        src={reqForDivHeightMobileImg}
                        alt="Placeholder Image"
                    />
                    <header className="absolute top-14">
                        <nav className="flex items-center min-w-[100dvw] px-8">
                            <HamburgerMenu
                                onMenuClick={() => {
                                    setMobileMenuOpen(true);
                                }}
                            />
                            <Logo />
                        </nav>
                    </header>
                    <ImageSliderButton />
                </div>

                <Main />
            </div>
        </>
    );
};

export default App;
