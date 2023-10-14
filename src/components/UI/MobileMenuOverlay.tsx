import { motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import { ReactChildrenNode } from '../../types/ReactChildrenNode';
import { useMobileMenu } from '../../contexts/MobileMenuContextProvider';

import close from '../../assets/images/icon-close.svg';
import usePreventScrollHTML from '../../hooks/usePreventScrollHTML';
import NavLinks from './NavLinks';

const Overlay = ({ children }: ReactChildrenNode) => {
    const { setMobileMenuOpen } = useMobileMenu();

    return (
        <div
            onClick={() => {
                setMobileMenuOpen(false);
            }}
            className="absolute z-10 min-h-screen min-w-full bg-primary-black/50"
        >
            {children}
        </div>
    );
};

const MobileMenu = () => {
    const { setMobileMenuOpen } = useMobileMenu();

    usePreventScrollHTML();

    return (
        <Overlay>
            <motion.div
                key={'mobile-modal'}
                transition={{
                    duration: 0.2,
                }}
                initial={{ y: -300 }}
                animate={{ y: 0 }}
                exit={{ y: -300 }}
                className="flex items-center justify-between min-h-[12dvh] bg-primary-white px-8"
            >
                <button
                    onClick={() => {
                        setMobileMenuOpen(false);
                    }}
                >
                    <img src={close} alt="Close menu button" />
                </button>
                <NavLinks ulClasses="flex flex-wrap items-center gap-8 text-[calc(1.35rem+1dvw)]" />
            </motion.div>
        </Overlay>
    );
};

const MobileMenuOverlay = () => {
    return createPortal(
        <MobileMenu />,
        document.getElementById('overlay--root') as HTMLDivElement
    );
};

export default MobileMenuOverlay;
