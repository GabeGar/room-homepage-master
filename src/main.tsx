import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import MobileMenuContextProvider from './contexts/MobileMenuContextProvider.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
    <React.StrictMode>
        <MobileMenuContextProvider>
            <App />
        </MobileMenuContextProvider>
    </React.StrictMode>
);
