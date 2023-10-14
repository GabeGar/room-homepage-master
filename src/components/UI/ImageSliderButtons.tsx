import { memo, useEffect, useRef, useState } from 'react';
import { useImageSlider } from '../../contexts/ImageSliderContextProvider';

import leftArrow from '../../assets/images/icon-angle-left.svg';
import rightArrow from '../../assets/images/icon-angle-right.svg';
import SliderButton from './SliderButton';

const ImageSliderButtons = memo(() => {
    const timerIDRef = useRef<number>();
    const [isAnimating, setIsAnimating] = useState(false);
    const { setCurrentIndex } = useImageSlider();

    useEffect(() => {
        if (isAnimating) {
            timerIDRef.current = setTimeout(() => {
                setIsAnimating(false);
            }, 700);
        }

        return () => {
            clearTimeout(timerIDRef.current);
        };
    }, [isAnimating]);

    const handleButtonClick = (animationDirection: string) => {
        if (isAnimating) {
            return;
        }

        setIsAnimating(true);

        setCurrentIndex((i) => {
            return animationDirection === 'prev'
                ? i - 1 < 0
                    ? 2
                    : i - 1
                : i + 1 > 2
                ? 0
                : i + 1;
        });
    };

    return (
        <div className="absolute lg:left-0 bottom-0 right-0">
            <SliderButton
                isDisabled={isAnimating}
                onClick={() => {
                    handleButtonClick('prev');
                }}
            >
                <img
                    className="lg:min-h-[5rem]"
                    src={leftArrow}
                    alt="Image slider left arrow"
                />
            </SliderButton>

            <SliderButton
                isDisabled={isAnimating}
                onClick={() => {
                    handleButtonClick('next');
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
});

export default ImageSliderButtons;
