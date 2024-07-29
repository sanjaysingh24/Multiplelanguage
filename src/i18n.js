import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: "Hello, welcome",
        addData: "Add data",
        name: "Name",
        address: "Address",
        language: "Language",
        dynamic: {
          ram: "Ram",
          sanju: "Sanju",
          mohali: "Mohali"
        }
      }
    },
    hi: {
      translation: {
        welcome: "नमस्ते, स्वागत है",
        addData: "डेटा जोड़ें",
        name: "नाम",
        address: "पता",
        language: "भाषा",
        dynamic: {
          ram: "राम",
          sanju: "संजू",
          mohali: "मोहाली"
        }
      }
    },
    ar: {
      translation: {
        welcome: "مرحبًا، أهلا بك",
        addData: "أضف البيانات",
        name: "اسم",
        address: "عنوان",
        language: "لغة",
        dynamic: {
          ram: "رام",
          sanju: "سانجو",
          mohali: "موهالي"
        }
      }
    }
  },
  lng: 'en', // default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false // react already safes from xss
  }
});

export default i18n;
