import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import { COMMON_LOCALES, LOCALES } from '../utils/constants';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        defaultNS: COMMON_LOCALES,
        detection: { order: ['navigator'] },
        fallbackLng: 'fr',
        interpolation: {
            escapeValue: false,
        },
        ns: LOCALES,
        react: {
            wait: true,
        },
    });

i18n.services.formatter?.add('lowercase', (value: string) => value.toLowerCase());

export default i18n;
