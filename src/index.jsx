import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserView, MobileView, isMobile } from 'react-device-detect';
import Desktop from './Desktop';
import Mobile from './Mobile';
import './style.css';

const App = () => {
    useEffect(() => {
        if (isMobile) {
            document.body.style.cursor = 'none';
        } else {
            document.body.style.cursor = 'auto'; 
        }

        return () => {
            document.body.style.cursor = '';
        };
    }, []);

    return (
        <>
            <BrowserView>
                <Desktop />
            </BrowserView>
            <MobileView>
                <Mobile />
            </MobileView>
        </>
    );
};

let root;
const container = document.getElementById('root');

if (!root) {
    root = ReactDOM.createRoot(container); // Crée la racine si elle n'existe pas
}

root.render(<App />);