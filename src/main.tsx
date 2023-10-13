import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import MobileMenuContextProvider from './contexts/MobileMenuContextProvider.tsx';
import ImageSliderContextProvider from './contexts/ImageSliderContextProvider.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
    <React.StrictMode>
        <MobileMenuContextProvider>
            <ImageSliderContextProvider>
                <App />
            </ImageSliderContextProvider>
        </MobileMenuContextProvider>
    </React.StrictMode>
);
