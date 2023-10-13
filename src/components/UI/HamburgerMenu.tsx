import hamburgerIcon from '../../assets/images/icon-hamburger.svg';

interface HamburgerMenuProps {
    onMenuClick?: () => void;
}

const HamburgerMenu = ({ onMenuClick }: HamburgerMenuProps) => {
    return (
        <button className="lg:hidden" onClick={onMenuClick}>
            <img src={hamburgerIcon} alt="Mobile menu open button" />
        </button>
    );
};

export default HamburgerMenu;
