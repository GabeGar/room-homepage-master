import { createContext, useContext, useState } from 'react';
import { ReactChildrenNode } from '../types/ReactChildrenNode';

interface MenuContextTypes {
    mobileMenuOpen: boolean;
    setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenuContext = createContext<MenuContextTypes>({
    mobileMenuOpen: false,
    setMobileMenuOpen: () => false,
});

const MobileMenuContextProvider = ({ children }: ReactChildrenNode) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

    return (
        <MobileMenuContext.Provider
            value={{
                mobileMenuOpen,
                setMobileMenuOpen,
            }}
        >
            {children}
        </MobileMenuContext.Provider>
    );
};

const useMobileMenu = () => {
    return useContext(MobileMenuContext);
};

export default MobileMenuContextProvider;
export { useMobileMenu };
