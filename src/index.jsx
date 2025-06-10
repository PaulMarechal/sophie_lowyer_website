import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { BrowserView, MobileView, isMobile } from 'react-device-detect';
import Desktop from './Desktop';
import Mobile from './Mobile';
import './style.css';

const App = () => {
    useEffect(() => {
        if (isMobile) {
            document.body.style.cursor = 'none';
        } else {
            document.body.style.cursor = 'none'; 
        }

        return () => {
            document.body.style.cursor = '';
        };
    }, []);

    return (
        <>  
            {/* basename="/sophie_test" */}
            <BrowserRouter >
                <BrowserView>
                    <Desktop />
                </BrowserView>
                <MobileView>
                    <Mobile />
                </MobileView>
            </BrowserRouter>
        </>
    );
};

let root;
const container = document.getElementById('root');

if (!root) {
    root = ReactDOM.createRoot(container); 
}

root.render(<App />);