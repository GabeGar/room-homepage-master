import { createPortal } from 'react-dom';
import { ReactChildrenNode } from '../../types/ReactChildrenNode';
import { useMobileMenu } from '../../contexts/MobileMenuContextProvider';

import close from '../../assets/images/icon-close.svg';
import usePreventScrollHTML from '../../hooks/usePreventScrollHTML';
import NavLinks from './NavLinks';

const Overlay = ({ children }: ReactChildrenNode) => {
    return (
        <div className="absolute z-10 min-h-screen min-w-full bg-primary-black/50">
            {children}
        </div>
    );
};

const MobileMenu = () => {
    const { setMobileMenuOpen } = useMobileMenu();

    usePreventScrollHTML();

    return (
        <Overlay>
            <div className="flex items-center justify-between min-h-[16dvh] bg-primary-white px-8">
                <button
                    onClick={() => {
                        setMobileMenuOpen(false);
                    }}
                >
                    <img src={close} alt="Close menu button" />
                </button>
                <NavLinks ulClasses="flex flex-wrap items-center gap-8 text-[calc(1.35rem+1dvw)]" />
            </div>
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
