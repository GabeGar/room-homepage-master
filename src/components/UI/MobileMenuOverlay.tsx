import { createPortal } from 'react-dom';
import { ReactChildrenNode } from '../../types/ReactChildrenNode';
import { useMobileMenu } from '../../contexts/MobileMenuContextProvider';

import close from '../../assets/images/icon-close.svg';
import usePreventScrollHTML from '../../hooks/usePreventScrollHTML';

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
                <ul className="flex items-center gap-10 text-[1.35rem] font-bold">
                    <li>
                        <a href="#Home">home</a>
                    </li>
                    <li>
                        <a href="#Shop">shop</a>
                    </li>
                    <li>
                        <a href="#About">about</a>
                    </li>
                    <li>
                        <a href="#Contact">contact</a>
                    </li>
                </ul>
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
