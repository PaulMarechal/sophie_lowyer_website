"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        document.body.classList.toggle('menu-open', isMenuOpen);

        return () => {
            document.body.classList.remove('menu-open');
        };
    }, [isMenuOpen]);

    const navItems = [
        { href: '/a-propos', label: 'À propos' },
        { href: '/competences', label: 'Compétences' },
        { href: '/honoraires', label: 'Honoraires' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <header className={`${styles.header} ${isMenuOpen ? styles.menuOpen : ''}`}>
            <div className={styles.brandRow}>
                <button
                    type="button"
                    className={styles.menuToggle}
                    aria-expanded={isMenuOpen}
                    aria-controls="site-navigation"
                    aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                    onClick={() => setIsMenuOpen((open) => !open)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <Link className="link_header" href="/">
                    <span className={`${styles.navLabel} ${styles.brandLabel}`}>Sophie Maréchal</span>
                </Link>
            </div>
            <nav id="site-navigation" className={styles.nav} aria-label="Navigation principale">
                {navItems.slice(0, 2).map((item) => (
                    <div key={item.href} className={styles.navItem}>
                        <Link className="link_header" href={item.href}>
                            <span className={styles.navLabel}>{item.label}</span>
                        </Link>
                    </div>
                ))}
                <div className={`${styles.navItem} ${styles.desktopBrandSpacer}`} aria-hidden="true"></div>
                {navItems.slice(2).map((item) => (
                    <div key={item.href} className={styles.navItem}>
                        <Link className="link_header" href={item.href}>
                            <span className={styles.navLabel}>{item.label}</span>
                        </Link>
                    </div>
                ))}
            </nav>
        </header>
    );
};

export default Header;
