import aboutDark from '../assets/images/image-about-dark.jpg';
import aboutLight from '../assets/images/image-about-light.jpg';
import ImageSliderButtons from './UI/ImageSliderButtons';
import arrow from '/src/assets/images/icon-arrow.svg';

interface MainProps {
    isHiddenOnDesktop: boolean;
}

const Main = ({ isHiddenOnDesktop }: MainProps) => {
    return (
        <>
            <section className="lg:relative lg:col-span-2 flex flex-col gap-6 pt-[5rem] px-8 pb-24 lg:justify-center lg:h-full lg:px-[7.5rem]">
                <h1 className="lg:text-[5rem] text-5xl font-bold">
                    Discover innovative ways to decorate
                </h1>
                <p className="lg:text-[1.55rem] text-[calc(1.025rem+1dvw)] text-primary-dark-gray">
                    We provide unmatched quality, comfort, and style for
                    property owners across the country. Our experts combine form
                    and function in bringing your vision to life. Create a room
                    in your own style with our collection and make your property
                    a reflection of your and what you love.
                </p>
                <a
                    className="flex items-center gap-[2rem] text-2xl uppercase tracking-[1rem] mt-8"
                    href="#Shop Now"
                >
                    Shop now
                    <span>
                        <img src={arrow} alt="An arrow point right" />
                    </span>
                </a>
                {isHiddenOnDesktop && <ImageSliderButtons />}
            </section>
            <section className="lg:col-span-1 lg:row-span-1 bg-about-dark bg-no-repeat bg-contain lg:bg-cover">
                <img
                    className="lg:hidden w-full"
                    src={aboutDark}
                    alt="Dimmly lit room, with a minimalistic feel to it"
                />
            </section>
            <section className="lg:flex lg:flex-col lg:justify-center lg:p-[7.5rem] px-8 py-[4rem] lg:col-span-2">
                <h2 className="text-2xl uppercase tracking-[.3rem] pb-6 font-semibold">
                    About our furniture
                </h2>
                <p className="lg:text-2xl text-[1.33rem] text-primary-dark-gray">
                    Our mulitfunctional collection blends design and function to
                    suit your individual taste. Make each room unique, or pick a
                    cohesive theme that best express your interests and what
                    inspires you. Find the furniture pieces you need, from
                    traditional to contemporary styles or anything in between.
                    Product specialists are available to help you create your
                    dream space.
                </p>
            </section>
            <section className="lg:col-span-1 bg-about-light bg-no-repeat lg:bg-cover bg-contain">
                <img
                    className="lg:hidden w-full"
                    src={aboutLight}
                    alt="An extremely transparent image depiciting a room with light illuminating a single chair, in its center. "
                />
            </section>
        </>
    );
};

export default Main;
