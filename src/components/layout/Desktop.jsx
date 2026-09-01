"use client";

import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { trackEvent } from '../../lib/analytics';
import { getLocaleFromPath } from '../../lib/i18n';
import { usePathname } from 'next/navigation';
import styles from './Desktop.module.css';

const Desktop = ({ children }) => {
    const pathname = usePathname();
    const locale = getLocaleFromPath(pathname);
    const isEnglish = locale === 'en';

    useEffect(() => {
        document.documentElement.lang = locale;
    }, [locale]);
    useEffect(() => {
        const getNormalizedLabel = (element) => {
            const label = (
                element.getAttribute('aria-label') ||
                element.getAttribute('title') ||
                element.textContent ||
                ''
            ).replace(/\s+/g, ' ').trim();

            return label;
        };

        const getPlacement = (element) => {
            if (element.closest('header')) return 'header';
            if (element.closest('footer')) return 'footer';
            if (element.closest('form')) return 'contact_form';
            return 'main_content';
        };

        const handleDocumentClick = (event) => {
            const target = event.target.closest('a, button');
            if (!target) {
                return;
            }

            const href = target.getAttribute('href') || '';
            const label = getNormalizedLabel(target);
            const placement = getPlacement(target);

            if (href.startsWith('mailto:')) {
                trackEvent('email_click', { channel: 'email', placement });
                return;
            }

            if (href.startsWith('tel:')) {
                trackEvent('phone_click', { channel: 'phone', placement });
                return;
            }

            if (href.startsWith('sms:')) {
                trackEvent('sms_click', { channel: 'sms', placement });
                return;
            }

            if (href.includes('calendly.com')) {
                trackEvent('calendly_external_click', { channel: 'calendly', placement });
                return;
            }

            if (href.includes('linkedin.com')) {
                trackEvent('linkedin_click', { channel: 'linkedin', placement });
                return;
            }

            if (href.startsWith('/contact') || href.startsWith('/en/contact') || /prendre rendez-vous|contactez-moi|contacter le cabinet|book an appointment|contact the firm|contact me/i.test(label)) {
                trackEvent('contact_cta_click', { placement });
                return;
            }

            if (href === '/honoraires' || href === '/en/fees' || /honoraires|fees/i.test(label)) {
                trackEvent('honoraires_cta_click', { placement });
                return;
            }

            if (href === '/competences' || href === '/en/practice-areas' || /compétences|en savoir plus|practice areas|learn more/i.test(label)) {
                trackEvent('competences_cta_click', { placement });
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
                <a className={styles.skipLink} href="#main-content">
                    {isEnglish ? 'Skip to content' : 'Aller au contenu'}
                </a>
                <Header />
                <main id="main-content" className={styles.main} tabIndex={-1}>{children}</main>
                <Footer locale={locale} />
            </div>
        </div>
    );
};

export default Desktop;
