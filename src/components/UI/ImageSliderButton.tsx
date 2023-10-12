import leftArrow from '../../assets/images/icon-angle-left.svg';
import rightArrow from '../../assets/images/icon-angle-right.svg';

const ImageSliderButton = () => {
    return (
        <div className="absolute bottom-0 right-0">
            <button className="bg-primary-black px-[calc(1rem+3dvw)] py-[calc(.75rem+1dvh)]">
                <img
                    className="max-h-[1.75rem]"
                    src={leftArrow}
                    alt="Image slider left arrow"
                />
            </button>
            <button className="bg-primary-black px-[calc(1rem+3dvw)] py-[calc(.75rem+1dvh)]">
                <img
                    className="max-h-[1.75rem]"
                    src={rightArrow}
                    alt="Image slider right arrow"
                />
            </button>
        </div>
    );
};

export default ImageSliderButton;