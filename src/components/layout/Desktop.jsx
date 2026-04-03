"use client";

import React, { useEffect } from 'react';
import Header from './Header';
import styles from './Desktop.module.css';

const Desktop = ({ children }) => {
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
        const supportsCustomCursor = window.matchMedia('(hover: hover) and (pointer: fine)');
        if (!supportsCustomCursor.matches) {
            return undefined;
        }

        const mouseCursor = document.querySelector('.cursor');
        if (!mouseCursor) {
            return undefined;
        }

        document.body.classList.add('custom-cursor-enabled');

        const interactiveElements = document.querySelectorAll('a, button, [role="button"]');

        const handleMouseMove = (e) => {
            mouseCursor.style.top = `${e.clientY}px`;
            mouseCursor.style.left = `${e.clientX}px`;
            mouseCursor.classList.add('is-visible');
        };

        const handleLinkHover = () => {
            mouseCursor.classList.add('link-hover');
        };

        const handleLinkLeave = () => {
            mouseCursor.classList.remove('link-hover');
        };

        const handleMouseLeaveWindow = () => {
            mouseCursor.classList.remove('is-visible');
        };

        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeaveWindow);

        interactiveElements.forEach((element) => {
            element.addEventListener('mouseenter', handleLinkHover);
            element.addEventListener('mouseleave', handleLinkLeave);
        });

        return () => {
            document.body.classList.remove('custom-cursor-enabled');
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeaveWindow);
            interactiveElements.forEach((element) => {
                element.removeEventListener('mouseenter', handleLinkHover);
                element.removeEventListener('mouseleave', handleLinkLeave);
            });
        };
    }, []);

    useEffect(() => {
        const trackEvent = (eventName, params = {}) => {
            if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
                return;
            }

            window.gtag('event', eventName, {
                event_category: 'engagement',
                ...params,
            });
        };

        const getNormalizedLabel = (element) => {
            const label = (
                element.getAttribute('aria-label') ||
                element.getAttribute('title') ||
                element.textContent ||
                ''
            ).replace(/\s+/g, ' ').trim();

            return label;
        };

        const handleDocumentClick = (event) => {
            const target = event.target.closest('a, button');
            if (!target) {
                return;
            }

            const href = target.getAttribute('href') || '';
            const label = getNormalizedLabel(target);

            if (href.startsWith('mailto:')) {
                trackEvent('email_click', {
                    link_text: label,
                    link_url: href,
                });
                return;
            }

            if (href.startsWith('tel:')) {
                trackEvent('phone_click', {
                    link_text: label,
                    link_url: href,
                });
                return;
            }

            if (href.includes('linkedin.com')) {
                trackEvent('linkedin_click', {
                    link_text: label || 'LinkedIn',
                    link_url: href,
                });
                return;
            }

            if (href === '/contact' || /prendre rendez-vous|contactez-moi|contacter le cabinet/i.test(label)) {
                trackEvent('contact_cta_click', {
                    link_text: label,
                    link_url: href || window.location.pathname,
                });
                return;
            }

            if (href === '/honoraires' || /honoraires/i.test(label)) {
                trackEvent('honoraires_cta_click', {
                    link_text: label,
                    link_url: href || window.location.pathname,
                });
                return;
            }

            if (href === '/competences' || /compétences|en savoir plus/i.test(label)) {
                trackEvent('competences_cta_click', {
                    link_text: label,
                    link_url: href || window.location.pathname,
                });
            }
        };

        document.addEventListener('click', handleDocumentClick);

        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, []);

    return (
        <div className={styles.shell} id="smooth-wrapper">
            <div id="smooth-content">
                <div className="cursor"></div>
                <Header />
                {children}
            </div>
        </div>
    );
};

export default Desktop;
