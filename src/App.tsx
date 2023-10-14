import { AnimatePresence } from 'framer-motion';
import { useMobileMenu } from './contexts/MobileMenuContextProvider';

import MobileMenuOverlay from './components/UI/MobileMenuOverlay';
import Main from './components/Main';
import Hero from './components/Hero';

const App = () => {
    const { mobileMenuOpen } = useMobileMenu();

    return (
        <>
            <AnimatePresence>
                {mobileMenuOpen && <MobileMenuOverlay />}
            </AnimatePresence>

            <div className="min-h-screen lg:h-full lg:grid lg:grid-cols-layout lg:grid-rows-layout">
                <Hero />
                <Main />
            </div>
        </>
    );
};

export default App;
