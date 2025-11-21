import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { HashLink} from 'react-router-hash-link'

const Header = () => {
    return (
        <header>
            <div>
                <HashLink className="link_header" smooth to="/a-propos#a_propos_section">
                    <span className="nav_label">À propos</span>
                </HashLink>
            </div>
            <div>
                <Link className="link_header" to="/competences">
                    <span className="nav_label">Compétences</span>
                </Link>
            </div>
            <div id="sophie_marechal_home_header">
                <Link className="link_header" to="/">
                    <span className="nav_label">Sophie Maréchal</span>
                </Link>
            </div>
            <div>
                <Link className="link_header" to="/honoraires">
                    <span className="nav_label">Honoraires</span>
                </Link>
            </div>
            <div>
                <Link className="link_header" to="/contact">
                    <span className="nav_label">Contact</span>
                </Link>
            </div>
        </header>
    );
};

export default Header;
