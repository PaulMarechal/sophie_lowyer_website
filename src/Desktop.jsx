import React, { useEffect } from 'react';
import './style.css';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import ScrollToTop from './ScrollToTop';
import Home from './Home.jsx';
import APropos from './APropos.jsx';
import Contact from './Contact.jsx';
import Competences from './Competences.jsx';
import Honoraires from './Honoraires.jsx'; 
import Confidentialite from './Confidentialite.jsx'
import Mentions_legales from './Mentions-legales.jsx'



const Desktop = () => {
    console.log("Made with 🍔 by DevXR.fr - https://devxr.fr")

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('header');
            if (header) {
                if (window.scrollY >= 65) {
                    header.classList.add('scrolled');
                    header.classList.remove('not-scrolled');
                } else {
                    header.classList.add('not-scrolled');
                    header.classList.remove('scrolled');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const animateWords = () => {
            const targetWords = document.querySelectorAll('.animate-word');
            let delay = 0;

            targetWords.forEach(word => {
                const letters = Array.from(word.textContent.trim());
                word.innerHTML = letters
                    .map(letter =>
                        letter === ' '
                            ? `<span class="letter space">&nbsp;</span>`
                            : `<span class="letter">${letter}</span>`
                    )
                    .join('');

                const letterElements = Array.from(word.querySelectorAll('.letter'));

                letterElements.forEach((letter) => {
                    setTimeout(() => {
                        letter.classList.add('out');
                    }, delay);

                    setTimeout(() => {
                        letter.classList.remove('out');
                        letter.classList.add('in');
                    }, delay + 700);

                    delay += 150;
                });

                delay += 500; 
            });
        };

        animateWords();
        const interval = setInterval(animateWords, 5000);

        return () => clearInterval(interval);
    }, []);
    

    useEffect(() => {
        const mouseCursor = document.querySelector('.cursor');
        const links = document.querySelectorAll('a');

        const handleMouseMove = (e) => {
            if (mouseCursor) {
                mouseCursor.style.top = e.pageY + 'px';
                mouseCursor.style.left = e.pageX + 'px';
            }
        };

        const handleLinkHover = () => {
            if (mouseCursor) mouseCursor.classList.add('link-hover');
        };

        const handleLinkLeave = () => {
            if (mouseCursor) mouseCursor.classList.remove('link-hover');
        };

        window.addEventListener('mousemove', handleMouseMove);
        links.forEach(link => {
            link.addEventListener('mouseenter', handleLinkHover);
            link.addEventListener('mouseleave', handleLinkLeave);
        });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            links.forEach(link => {
                link.removeEventListener('mouseenter', handleLinkHover);
                link.removeEventListener('mouseleave', handleLinkLeave);
            });
        };
    }, []);

    return (
        <div id="smooth-wrapper">
            <div id="smooth-content">
                <div className="cursor"></div>
                <Header />
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/a-propos" element={<Home />} />
                    <Route path="/competences" element={<Competences />} />
                    <Route path="/honoraires" element={<Honoraires />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/confidentialite" element={<Confidentialite />} />
                    <Route path="/mentions-legales" element={<Mentions_legales />} />
                </Routes>
            </div>
        </div>
    );
};

export default Desktop;
