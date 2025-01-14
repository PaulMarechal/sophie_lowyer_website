import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { HashLink} from 'react-router-hash-link'

const Header = () => {
    return (
        <header>
            <div>
                <HashLink className="link_header" smooth to="/a-propos#a_propos_section">
                    <h2>À propos</h2>
                </HashLink>
            </div>
            <div>
                <Link className="link_header" to="/competences">
                    <h2>Compétences</h2>
                </Link>
            </div>
            <div id="sophie_marechal_home_header">
                <Link className="link_header" to="/">
                    <h2>Sophie Maréchal</h2>
                </Link>
            </div>
            <div>
                <Link className="link_header" to="/honoraires">
                    <h2>Honoraires</h2>
                </Link>
            </div>
            <div>
                <Link className="link_header" to="/contact">
                    <h2>Contact</h2>
                </Link>
            </div>
        </header>
    );
};

export default Header;
