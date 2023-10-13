interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
}

const SliderButton = ({ onClick, children }: ButtonProps) => {
    return (
        <button
            className="transition-all hover:bg-primary-very-dark-gray bg-primary-black px-[calc(1rem+1dvw)] py-[calc(.75rem+1dvh)]"
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default SliderButton;
