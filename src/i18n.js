import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    //.use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
                translation: {
                    presenting: {
                        1: "hi, i'm",
                        2: 'A developer from Brasília who likes to bring beautiful stuff to life, and listen to pagode while doing it.'
                    },
                    contact: {
                        1: "let's create something amazing together! say hi",
                        2: "If any of these ideas capture your attention, don't hesitate to get in touch. I'm here to assist you. And if you're feeling a bit lazy and don't want to navigate back to the homepage,",
                        3: 'i feel you.'
                    },
                    CE:{
                        about: 'about',
                        work: 'Work',
                        contact: 'Contact'
                    }
                }
            },

            pt: {
                translation: {
                    presenting: {
                        1: "Eai! Me chamo",
                        2: `Um programador de Brasília que gosta de dar vida a coisas bonitas e ouvir pagode enquanto faz isso.`
                    },
                    contact: {
                        1: 'Vamos criar algo incrível juntos!',
                        2: 'Se alguma dessas ideias chamou a sua atenção, não hesite em entrar em contato. Estou aqui para ajudar você. E se você estiver com um pouco de preguiça para voltar na home,',
                        3: 'eu te entendo.'
                    },
                    CE:{
                        about: 'Sobre',
                        work: 'Trabalhos',
                        contact: 'Contato'
                    }
                }
            }
        }
    });

export default i18n;