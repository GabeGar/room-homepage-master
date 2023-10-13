import logo from '../../assets/images/logo.svg';

const Logo = () => {
    return (
        <img
            className="lg:min-h-[2rem] lg:mx-0 mx-auto"
            src={logo}
            alt="Room Logo"
        />
    );
};

export default Logo;
