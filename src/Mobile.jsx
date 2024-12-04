import React, {useEffect} from 'react'; 

const Mobile = () => {
    useEffect(() => {

        const loadMobileStyle = async () => {
            await import('./style_mobile.css');
        };

        loadMobileStyle();

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

                delay += 600; 
            });
        };

        animateWords();
        const interval = setInterval(animateWords, 5000);

        return () => clearInterval(interval);
    }, []);

    return(
        <div id="smooth-wrapper">
            <div id="smooth-content">
                <div className="cursor"></div>

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
                        <span>Avocate spécialisée en </span>
                        <span>
                            <span id="first_blue_text">droit</span> de la <span className="animate-word">santé</span> et droit <span className="animate-word">public</span>
                        </span>
                        <span> inscrite au barreau de Paris.</span><br/>
                    </h1>    
                    <div>
                        <h1 class="first_section_h1">
                            <span id="expetise_text">Une expertise</span><br/>
                            <span id="valeurs_text">des valeurs,</span><br/>
                            <span id="ecoute_text">une écoute.</span> <br/>
                        </h1>
                    </div>
                    <div id="contactez_span">
                        <a href="mailto:" title="Contactez-moi par e-mail ✉️" id="contact_me_link">Contactez-moi </a>
                        <h1 class="first_section_h1">ou retrouvez-moi dans mon bureau à Paris.</h1><br/>
                    </div>
                    
                    <div className="background_image_sophie" ></div>
                    <div className="background_image_place_etoile"></div>
                    <div className="background_image_place_etoile_second"></div>
                </section>

                <section className="second_section">
                    <h2>Une expertise engagée</h2>
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

                <section>
                    <div className="main_div_contact_me_bottom_icon">
                        <div className="icon_bottom_page">
                            <a href="http://maps.google.com/?q=Pl Charles de Gaulle, Paris" target="_blank" rel="noopener noreferrer" title="Pour me rencontrer au bureau">
                                <svg  xmlns="http://www.w3.org/2000/svg"  width="40"  height="40"  viewBox="0 0 24 24"  fill="#007BEE"  className="icon icon-tabler icons-tabler-filled icon-tabler-location"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20.891 2.006l.106 -.006l.13 .008l.09 .016l.123 .035l.107 .046l.1 .057l.09 .067l.082 .075l.052 .059l.082 .116l.052 .096c.047 .1 .077 .206 .09 .316l.005 .106c0 .075 -.008 .149 -.024 .22l-.035 .123l-6.532 18.077a1.55 1.55 0 0 1 -1.409 .903a1.547 1.547 0 0 1 -1.329 -.747l-.065 -.127l-3.352 -6.702l-6.67 -3.336a1.55 1.55 0 0 1 -.898 -1.259l-.006 -.149c0 -.56 .301 -1.072 .841 -1.37l.14 -.07l18.017 -6.506l.106 -.03l.108 -.018z" /></svg>
                            </a>  
                        </div>
                        <div className="icon_bottom_page">
                            <a href="mailto:" title="Contactez moi par mail">
                                <svg  xmlns="http://www.w3.org/2000/svg"  width="40"  height="40"  viewBox="0 0 24 24"  fill="#007BEE"  className="icon icon-tabler icons-tabler-filled icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" /><path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" /></svg>
                            </a>
                        </div>
                        <div className="icon_bottom_page">
                            <a href="http://" target="_blank" rel="noopener noreferrer" title="Aller sur mon LinkedIn">
                                <svg  xmlns="http://www.w3.org/2000/svg"  width="40"  height="40"  viewBox="0 0 24 24"  fill="#007BEE"  className="icon icon-tabler icons-tabler-filled icon-tabler-brand-linkedin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 2a5 5 0 0 1 5 5v10a5 5 0 0 1 -5 5h-10a5 5 0 0 1 -5 -5v-10a5 5 0 0 1 5 -5zm-9 8a1 1 0 0 0 -1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0 -1 -1m6 0a3 3 0 0 0 -1.168 .236l-.125 .057a1 1 0 0 0 -1.707 .707v5a1 1 0 0 0 2 0v-3a1 1 0 0 1 2 0v3a1 1 0 0 0 2 0v-3a3 3 0 0 0 -3 -3m-6 -3a1 1 0 0 0 -.993 .883l-.007 .127a1 1 0 0 0 1.993 .117l.007 -.127a1 1 0 0 0 -1 -1" /></svg>
                            </a>
                        </div>
                        <div className="icon_bottom_page">
                            <a href="tel:+" title="Contactez moi par téléphone">
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

    )
};

export default Mobile;