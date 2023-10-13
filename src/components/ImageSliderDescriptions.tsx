import { useImageSlider } from '../contexts/ImageSliderContextProvider';

interface Description {
    id: number;
    title: string;
    description: string;
}

const descriptions: Description[] = [
    {
        id: 0,
        title: 'Discover innovative ways to decorate',
        description: `We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of your and what you love.`,
    },
    {
        id: 1,
        title: 'We are available all across the globe',
        description: `With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in the most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.`,
    },
    {
        id: 2,
        title: 'Manurfactured with the best materials',
        description: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.`,
    },
];

const ImageSliderDescriptions = () => {
    const { currentIndex } = useImageSlider();

    const current = descriptions.find((item) => item.id === currentIndex);

    return (
        <div className="lg:max-w-[50rem] lg:flex lg:flex-col lg:gap-4">
            <h1 className="lg:text-[5rem] text-5xl font-bold">
                {current?.title}
            </h1>
            <p className="lg:text-[1.55rem] text-[calc(1.025rem+1dvw)] text-primary-dark-gray">
                {current?.description}
            </p>
        </div>
    );
};

export default ImageSliderDescriptions;
