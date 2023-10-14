interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    isDisabled: boolean;
}

const SliderButton = ({ onClick, children, isDisabled }: ButtonProps) => {
    return (
        <button
            className="transition-all hover:bg-primary-very-dark-gray bg-primary-black px-[calc(1rem+1dvw)] py-[calc(.75rem+1dvh)]"
            onClick={onClick}
            disabled={isDisabled}
        >
            {children}
        </button>
    );
};

export default SliderButton;
