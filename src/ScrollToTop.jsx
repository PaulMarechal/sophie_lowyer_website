import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname === '/a-propos') {
            const section = document.getElementById('a_propos_section');
            if (section) {
                section.scrollIntoView({
                    behavior: 'smooth', 
                });
            }
        } else {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
    }, [pathname]); 

    return null; 
};

export default ScrollToTop;
