import { useEffect } from 'react';
import { useMobileMenu } from '../../contexts/MobileMenuContextProvider';

interface NavProps {
    ulClasses: string;
}

const NavLinks = ({ ulClasses }: NavProps) => {
    const { setMobileMenuOpen } = useMobileMenu();

    const allClasses = `${ulClasses} font-bold`;

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1023) {
                setMobileMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [setMobileMenuOpen]);

    return (
        <ul
            className={allClasses}
            onClick={() => {
                setMobileMenuOpen(false);
            }}
        >
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
    );
};

export default NavLinks;
