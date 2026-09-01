"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getAlternatePath, getLocaleFromPath } from '../../lib/i18n';
import styles from './Header.module.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuToggleRef = useRef(null);
    const navigationRef = useRef(null);
    const pathname = usePathname();
    const locale = getLocaleFromPath(pathname);
    const isEnglish = locale === 'en';
    const homeHref = isEnglish ? '/en' : '/';
    const alternateHref = getAlternatePath(pathname);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        let focusFrame;
        const isMobileMenu = window.matchMedia(
            '(max-width: 900px), (max-height: 540px) and (orientation: landscape)'
        ).matches;

        if (isMenuOpen && isMobileMenu) {
            focusFrame = window.requestAnimationFrame(() => {
                navigationRef.current?.querySelector('a')?.focus();
            });
        }

        const handleEscape = (event) => {
            if (event.key === 'Escape' && isMenuOpen) {
                setIsMenuOpen(false);
                menuToggleRef.current?.focus();
            }
        };

        document.addEventListener('keydown', handleEscape);

        return () => {
            if (focusFrame) {
                window.cancelAnimationFrame(focusFrame);
            }
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isMenuOpen]);

    const navItems = isEnglish
        ? [
            { href: '/en/about', label: 'About' },
            { href: '/en/practice-areas', label: 'Practice areas' },
            { href: '/en/fees', label: 'Fees' },
            { href: '/en/contact', label: 'Contact' },
        ]
        : [
            { href: '/a-propos', label: 'À propos' },
            { href: '/competences', label: 'Compétences' },
            { href: '/honoraires', label: 'Honoraires' },
            { href: '/contact', label: 'Contact' },
        ];

    return (
        <header className={`${styles.header} ${isMenuOpen ? styles.menuOpen : ''}`}>
            <div className={styles.brandRow}>
                <button
                    ref={menuToggleRef}
                    type="button"
                    className={styles.menuToggle}
                    aria-expanded={isMenuOpen}
                    aria-controls="site-navigation"
                    aria-label={isMenuOpen
                        ? (isEnglish ? 'Close menu' : 'Fermer le menu')
                        : (isEnglish ? 'Open menu' : 'Ouvrir le menu')}
                    onClick={() => setIsMenuOpen((open) => !open)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <Link className="link_header" href={homeHref} aria-current={pathname === homeHref ? 'page' : undefined}>
                    <span className={`${styles.navLabel} ${styles.brandLabel}`}>Sophie Maréchal</span>
                </Link>
            </div>
            <nav
                ref={navigationRef}
                id="site-navigation"
                className={styles.nav}
                aria-label={isEnglish ? 'Main navigation' : 'Navigation principale'}
            >
                {navItems.slice(0, 2).map((item) => (
                    <div key={item.href} className={styles.navItem}>
                        <Link
                            className="link_header"
                            href={item.href}
                            aria-current={pathname === item.href ? 'page' : undefined}
                        >
                            <span className={styles.navLabel}>{item.label}</span>
                        </Link>
                    </div>
                ))}
                <div className={`${styles.navItem} ${styles.desktopBrandItem}`}>
                    <Link className="link_header" href={homeHref} aria-current={pathname === homeHref ? 'page' : undefined}>
                        <span className={`${styles.navLabel} ${styles.brandLabel}`}>Sophie Maréchal</span>
                    </Link>
                </div>
                {navItems.slice(2).map((item) => (
                    <div key={item.href} className={styles.navItem}>
                        <Link
                            className="link_header"
                            href={item.href}
                            aria-current={pathname === item.href ? 'page' : undefined}
                        >
                            <span className={styles.navLabel}>{item.label}</span>
                        </Link>
                    </div>
                ))}
            </nav>
            <Link
                className={styles.languageSwitch}
                href={alternateHref}
                hrefLang={isEnglish ? 'fr-FR' : 'en-GB'}
                aria-label={isEnglish ? 'View this page in French' : 'Voir cette page en anglais'}
                prefetch={false}
                onClick={(event) => {
                    const suffix = `${window.location.search}${window.location.hash}`;
                    event.preventDefault();
                    window.location.assign(`${alternateHref}${suffix}`);
                }}
            >
                {isEnglish ? 'FR' : 'EN'}
            </Link>
        </header>
    );
};

export default Header;
