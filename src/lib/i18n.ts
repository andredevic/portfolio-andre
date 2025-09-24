import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  // Carrega as traduções de um backend (ex: pasta /public/locales)
  .use(Backend)
  // Detecta o idioma do usuário no navegador
  .use(LanguageDetector)
  // Passa a instância do i18n para o react-i18next
  .use(initReactI18next)
  // Configurações iniciais
  .init({
    // Idioma padrão caso a detecção falhe
    fallbackLng: 'en',
    // Ative o debug apenas em desenvolvimento
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false, // O React já protege contra XSS
    },
    backend: {
      // Caminho para os arquivos de tradução
      loadPath: '/locales/{{lng}}/translation.json',
    },
  });

export default i18n;
