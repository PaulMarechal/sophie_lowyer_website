import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {

    return (
        <header className={styles.header}>
            <div>
                <Link className="link_header" href="/a-propos">
                    <span className="nav_label">À propos</span>
                </Link>
            </div>
            <div>
                <Link className="link_header" href="/competences">
                    <span className="nav_label">Compétences</span>
                </Link>
            </div>
            <div id="sophie_marechal_home_header">
                <Link className="link_header" href="/">
                    <span className="nav_label">Sophie Maréchal</span>
                </Link>
            </div>
            <div>
                <Link className="link_header" href="/honoraires">
                    <span className="nav_label">Honoraires</span>
                </Link>
            </div>
            <div>
                <Link className="link_header" href="/contact">
                    <span className="nav_label">Contact</span>
                </Link>
            </div>
        </header>
    );
};

export default Header;
