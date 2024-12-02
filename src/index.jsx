import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserView } from 'react-device-detect';
import Desktop from './Desktop';
import './style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserView>
        <Desktop />
    </BrowserView>
    // <MobileView>
    //     <Mobile/>
    // </MobileView>
);