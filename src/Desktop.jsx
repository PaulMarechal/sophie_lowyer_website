import React, { useEffect } from 'react';
import './style.css';

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
                <header>
                    <div>
                        <a className="link_header" href="#a_propos_section">
                            <h2>À propos</h2>
                        </a>
                    </div>
                    <div>
                        <a className="link_header" href="/competences/">
                            <h2>Compétences</h2>
                        </a>
                    </div>
                    <div id="sophie_marechal_home_header">
                        <a className="link_header" href="#">
                            <h2>Sophie Maréchal</h2>
                        </a>
                    </div>
                    <div>
                        <a className="link_header" href="/honoraires/">
                            <h2>Honoraires</h2>
                        </a>
                    </div>
                    <div>
                        <a className="link_header" href="/contact/">
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
                    <div className="license-details">
                        <p>
                            licence : <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank"> CC BY-SA</a> <br/>
                            Créateur : <a href="https://delso.photo" target="_blank">Diego Delso</a>
                        </p>
                    </div>
                </section>

                {/* Section principale */}
                <section className="first_section" id="a_propos_section">
                    <h1 className="first_section_h1">
                        <span>Avocate spécialisée en <br/></span>
                        <span>
                            <span id="first_blue_text">droit</span> de la <span className="animate-word">santé</span> <br/>et droit <span className="animate-word">public</span>
                        </span>
                        <span> inscrite au barreau de Paris.</span><br/>
                        <span id="expetise_text">Une expertise</span><br/>
                        <span id="valeurs_text">des valeurs,</span><br/>
                        <span id="ecoute_text">et une écoute.<br/></span>
                        <span id="contactez_span">
                            <a href="mailto:" title="Contactez-moi par e-mail ✉️" id="contact_me_link">Contactez-moi </a>
                            ou retrouvez-moi dans mon bureau à Paris.<br/>
                        </span>
                    </h1>
                    <div className="background_image_sophie" ></div>
                    <div className="background_image_place_etoile"></div>
                    <div className="background_image_place_etoile_second"></div>
                </section>

                <div className="parc_monceau_home"></div>

                <section className="short-intros">
                    <div className="intro-block">
                        <div className="icon-wrapper">
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="80"  height="80"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-scale"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 20l10 0" /><path d="M6 6l6 -1l6 1" /><path d="M12 3l0 17" /><path d="M9 12l-3 -6l-3 6a3 3 0 0 0 6 0" /><path d="M21 12l-3 -6l-3 6a3 3 0 0 0 6 0" /></svg>
                        </div>
                        <h3>Des compétences diversifiées</h3>
                        <p>Droit de la santé, droit public, urbanisme, fonction publique, et bien plus. Maître Sophie Maréchal met son expertise à votre service avec rigueur et détermination.</p>
                        <a href="/competences/" className="btn">En savoir plus</a>
                    </div>
                    <div className="intro-block">
                        <div className="icon-wrapper">
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="80"  height="80"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-file-search"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M12 21h-5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v4.5" /><path d="M16.5 17.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0" /><path d="M18.5 19.5l2.5 2.5" /></svg>
                        </div>
                        <h3>Une transparence totale</h3>
                        <p>Chaque situation est unique : les honoraires sont définis avec précision et formalisés dans une convention claire dès le début de notre collaboration.</p>
                        <a href="/honoraires/" className="btn">Voir les détails</a>
                    </div>
                    <div className="intro-block">
                        <div className="icon-wrapper">
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="80"  height="80"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-heart-handshake"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /><path d="M12 6l-3.293 3.293a1 1 0 0 0 0 1.414l.543 .543c.69 .69 1.81 .69 2.5 0l1 -1a3.182 3.182 0 0 1 4.5 0l2.25 2.25" /><path d="M12.5 15.5l2 2" /><path d="M15 13l2 2" /></svg>
                        </div>
                        <h3>Un accompagnement humain</h3>
                        <p>Prenez rendez-vous pour échanger sur votre situation. Que ce soit par téléphone, e-mail ou en personne, je suis là pour vous conseiller.</p>
                        <a href="/contact/" className="btn">Contactez-moi</a>
                    </div>
                </section>

                <div className="paris_monument_home"></div>

                <section>
                    <p className="contact-intro">
                    Un besoin ? Une question ? Je suis à votre écoute. Contactez-moi par le moyen qui vous convient le mieux.
                    </p>
                    <div className="main_div_contact_me_bottom_icon">
                        <div className="icon_bottom_page">
                            <a href="http://maps.google.com/?q=Pl Charles de Gaulle, Paris" target="_blank" rel="noopener noreferrer" title="Pour me rencontrer au bureau">
                                <svg  xmlns="http://www.w3.org/2000/svg"  width="40"  height="40"  viewBox="0 0 24 24"  fill="#007BEE"  className="icon icon-tabler icons-tabler-filled icon-tabler-location"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20.891 2.006l.106 -.006l.13 .008l.09 .016l.123 .035l.107 .046l.1 .057l.09 .067l.082 .075l.052 .059l.082 .116l.052 .096c.047 .1 .077 .206 .09 .316l.005 .106c0 .075 -.008 .149 -.024 .22l-.035 .123l-6.532 18.077a1.55 1.55 0 0 1 -1.409 .903a1.547 1.547 0 0 1 -1.329 -.747l-.065 -.127l-3.352 -6.702l-6.67 -3.336a1.55 1.55 0 0 1 -.898 -1.259l-.006 -.149c0 -.56 .301 -1.072 .841 -1.37l.14 -.07l18.017 -6.506l.106 -.03l.108 -.018z" /></svg>
                            </a>  
                        </div>
                        <div className="icon_bottom_page">
                            <a href="mailto:sophie.marechal@avocat.fr" title="Contactez moi par mail">
                                <svg  xmlns="http://www.w3.org/2000/svg"  width="40"  height="40"  viewBox="0 0 24 24"  fill="#007BEE"  className="icon icon-tabler icons-tabler-filled icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" /><path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" /></svg>
                            </a>
                        </div>
                        <div className="icon_bottom_page">
                            <a href="http://" target="_blank" rel="noopener noreferrer" title="Aller sur mon LinkedIn">
                                <svg  xmlns="http://www.w3.org/2000/svg"  width="40"  height="40"  viewBox="0 0 24 24"  fill="#007BEE"  className="icon icon-tabler icons-tabler-filled icon-tabler-brand-linkedin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 2a5 5 0 0 1 5 5v10a5 5 0 0 1 -5 5h-10a5 5 0 0 1 -5 -5v-10a5 5 0 0 1 5 -5zm-9 8a1 1 0 0 0 -1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0 -1 -1m6 0a3 3 0 0 0 -1.168 .236l-.125 .057a1 1 0 0 0 -1.707 .707v5a1 1 0 0 0 2 0v-3a1 1 0 0 1 2 0v3a1 1 0 0 0 2 0v-3a3 3 0 0 0 -3 -3m-6 -3a1 1 0 0 0 -.993 .883l-.007 .127a1 1 0 0 0 1.993 .117l.007 -.127a1 1 0 0 0 -1 -1" /></svg>
                            </a>
                        </div>
                        <div className="icon_bottom_page">
                            <a href="tel:+01 53 43 15 34" title="Contactez moi par téléphone">
                                <svg  xmlns="http://www.w3.org/2000/svg"  width="40"  height="40"  viewBox="0 0 24 24"  fill="#007BEE"  className="icon icon-tabler icons-tabler-filled icon-tabler-phone"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 3a1 1 0 0 1 .877 .519l.051 .11l2 5a1 1 0 0 1 -.313 1.16l-.1 .068l-1.674 1.004l.063 .103a10 10 0 0 0 3.132 3.132l.102 .062l1.005 -1.672a1 1 0 0 1 1.113 -.453l.115 .039l5 2a1 1 0 0 1 .622 .807l.007 .121v4c0 1.657 -1.343 3 -3.06 2.998c-8.579 -.521 -15.418 -7.36 -15.94 -15.998a3 3 0 0 1 2.824 -2.995l.176 -.005h4z" /></svg>
                            </a>
                        </div>
                    </div>
                </section>

                <footer>
                    <div id="contact_me">
                        <div>
                            <p>© 2024 Sophie Maréchal</p>
                        </div>
                        <div>
                            <p> - </p>
                        </div>
                        <div>
                            <p>
                            Mentions légales
                            </p>
                        </div>
                        <div>
                            <p> - </p>
                        </div>
                        <div>
                            <p>Politique de confidentialité</p>
                        </div>
                    </div>
                </footer>

            </div>
        </div>
    );
};

export default Desktop;
