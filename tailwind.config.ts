import type { Config } from 'tailwindcss';

export default {
    future: {
        hoverOnlyWhenSupported: true,
    },
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            gridTemplateColumns: {
                layout: '1fr 1fr .215fr 1fr',
            },
            gridTemplateRows: {
                layout: '3fr 1.5fr',
            },
            colors: {
                'primary-dark-gray': 'hsl(var(--dark-gray) / <alpha-value>)',
                'primary-black': 'hsl(var(--black) / <alpha-value>)',
                'primary-white': 'hsl(var(--white) / <alpha-value>)',
                'primary-very-dark-gray':
                    'hsl(var(--very-dark-gray) / <alpha-value>)',
            },
            backgroundImage: {
                'hero-desktop-one':
                    'url("src/assets/images/desktop-image-hero-1.jpg")',
                'hero-desktop-two':
                    'url("src/assets/images/desktop-image-hero-2.jpg")',
                'hero-desktop-three':
                    'url("src/assets/images/desktop-image-hero-3.jpg")',
                'hero-mobile-one':
                    'url("src/assets/images/mobile-image-hero-1.jpg")',
                'hero-mobile-two':
                    'url("src/assets/images/mobile-image-hero-2.jpg")',
                'hero-mobile-three':
                    'url("src/assets/images/mobile-image-hero-3.jpg")',
                'about-dark': 'url("src/assets/images/image-about-dark.jpg")',
                'about-light': 'url("src/assets/images/image-about-light.jpg")',
            },
            screens: {
                xlg: { max: '1023px' },
            },
        },
    },
    plugins: [],
} satisfies Config;
