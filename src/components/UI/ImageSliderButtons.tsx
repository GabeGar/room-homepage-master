import { useImageSlider } from '../../contexts/ImageSliderContextProvider';

import leftArrow from '../../assets/images/icon-angle-left.svg';
import rightArrow from '../../assets/images/icon-angle-right.svg';
import SliderButton from './SliderButton';

const ImageSliderButtons = () => {
    const { setCurrentIndex } = useImageSlider();

    return (
        <div className="absolute lg:left-0 bottom-0 right-0">
            <SliderButton
                onClick={() => {
                    setCurrentIndex((i) => (i - 1 < 0 ? 2 : i - 1));
                }}
            >
                <img
                    className="lg:min-h-[5rem]"
                    src={leftArrow}
                    alt="Image slider left arrow"
                />
            </SliderButton>

            <SliderButton
                onClick={() => {
                    setCurrentIndex((i) => (i + 1 > 2 ? 0 : i + 1));
                }}
            >
                <img
                    className="lg:min-h-[5rem]"
                    src={rightArrow}
                    alt="Image slider right arrow"
                />
            </SliderButton>
        </div>
    );
};

export default ImageSliderButtons;
