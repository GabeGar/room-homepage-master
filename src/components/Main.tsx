import aboutDark from '../assets/images/image-about-dark.jpg';
import aboutLight from '../assets/images/image-about-light.jpg';
import useHideOnDesktop from '../hooks/useHideOnDesktop';
import ImageSliderDescriptions from './ImageSliderDescriptions';
import Arrow from './UI/Arrow';
import ImageSliderButtons from './UI/ImageSliderButtons';

const Main = () => {
    const { isHiddenOnDesktop } = useHideOnDesktop();

    return (
        <>
            <section className="lg:relative lg:col-span-2 flex flex-col gap-6 pt-[5rem] px-8 pb-24 lg:justify-center lg:h-full lg:px-[7.5rem]">
                <ImageSliderDescriptions />
                <a
                    className="group hover:text-primary-very-dark-gray/50 transition-all flex items-center gap-[2rem] text-2xl uppercase tracking-[1rem] mt-8"
                    href="#Shop Now"
                >
                    Shop now
                    <Arrow />
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
