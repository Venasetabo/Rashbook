import i18n from "i18next";
import { initReactI18next, Translation } from "react-i18next";
import languageDetector from "i18next-browser-languagedetector";
import fr from "./locales/fr.json"
import en from "./locales/en.json"
import sw from "./locales/sw.json"


i18n.use(languageDetector)
    .use(initReactI18next)
    .init({
        resources:{
            fr:{
                translation: fr
            },
            en:{
                translation: en
            },
            sw:{
                translation: sw
            }
        },
        fallbackLng:"en",
        detector: {
            order: ["localStorage", "navigator"],
            caches: ["localStorage"]
        }
        // lng: "fr", //LA LANGUE PAR DEFAUT
        // fallbackLng: "en" // SI LA LANGUE PAR DEFAUT NEST PAS RECONNUE ON AFFICHE ENGLAIS
    })
    export default i18n;