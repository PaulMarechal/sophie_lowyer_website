import React, { useEffect } from 'react';
import './style.css';

const Desktop = () => {
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
                            ? `<span className="letter space">&nbsp;</span>`
                            : `<span className="letter">${letter}</span>`
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
                <header>
                    <div>
                        <h2>Test</h2>
                    </div>
                    <div>
                        <h2>Test</h2>
                    </div>
                    <div id="sophie_marechal_home_header">
                        <a className="link_header" href="#">
                            <h2>Sophie Maréchal</h2>
                        </a>
                    </div>
                    <div>
                        <h2>Test</h2>
                    </div>
                    <div>
                        <a className="link_header" href="#contact_me">
                            <h2>Contact</h2>
                        </a>
                    </div>
                </header>

                <section className="homepage">
                    <div className="home_text">
                        <h1>Maitre <br /> Sophie Maréchal</h1>
                        <h2>Avocat inscrite au barreau de Paris</h2>
                    </div>

                    <div className="scroll-downs">
                        <div className="mousey">
                            <div className="scroller"></div>
                        </div>
                        <p>scroll</p>
                    </div>

                    <div className="scroll-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevrons-down">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M7 7l5 5l5 -5" />
                            <path d="M7 13l5 5l5 -5" />
                        </svg>
                    </div>
                </section>

                {/* Section principale */}
                <section className="first_section">
                    <h1 className="first_section_h1">
                        <span>Avocate spécialisée en <br/></span>
                        <span>
                            <span id="first_blue_text">droit</span> de la <span className="animate-word">santé</span> <br/>et droit <span className="animate-word">public</span>
                        </span>
                        <span> inscrite au barreau de Paris.</span><br/>
                        <span id="expetise_text">Une expertise</span>
                        <span id="valeurs_text">des valeurs,</span>
                        <span id="ecoute_text">et une écoute.<br/></span>
                        <span id="contactez_span">
                            <a href="mailto:" title="Contactez-moi par e-mail ✉️" id="contact_me_link">Contactez-moi</a>
                            ou retrouvez-moi dans mon bureau à Paris.<br/>
                        </span>
                    </h1>
                    <div className="background_image_sophie" ></div>
                    <div className="background_image_place_etoile"></div>
                    <div className="background_image_place_etoile_second"></div>
                </section>

                <section className="second_section">
                    <h2>une expertise engagée</h2>
                    <div className="main_div_second_section">
                        <div className="first_div_text_second_section">
                            <p>
                                Au cœur du 8e arrondissement de Paris, Maître Sophie Maréchal incarne une approche moderne et humaine de la profession d’avocat. Forte d’une expertise en droit de la santé et en droit public, elle accompagne ses clients avec rigueur et bienveillance dans les moments les plus décisifs de leur vie professionnelle et personnelle.
                                <br/>
                                Plus qu’un simple service juridique, Maître Maréchal se distingue par sa capacité à écouter, à comprendre et à proposer des solutions sur mesure. 
                            </p>
                        </div>
                        <div className="seconc_div_text_second_section">
                            <p>
                                Convaincue que chaque situation est unique, elle s’attache à établir un dialogue clair et transparent, permettant à ses clients de naviguer sereinement dans les méandres juridiques.
                                <br/>
                                Implantée à deux pas de la place de l’Étoile, Maître Maréchal offre un accompagnement stratégique, alliant expertise technique et vision humaine, pour répondre aux enjeux d’aujourd’hui et bâtir les solutions de demain.      
                            </p>
                        </div>
                        <div className="parc_monceau"></div>
                        <div className="background_image_place_etoile_second_bottom"></div>
                    </div>
                </section>

                <footer id="contact_me">
                    <p>© 2024 Sophie Maréchal - Mentions légales - Politique de confidentialité</p>
                </footer>
            </div>
        </div>
    );
};

export default Desktop;
