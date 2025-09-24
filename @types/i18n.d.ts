// Importa o módulo 'i18next' para estender seus tipos
import 'i18next';

// Importa o arquivo de tradução em inglês para usar como "molde" para as chaves
import translationEN from '../public/locales/en/translation.json';

declare module 'i18next' {
  // Estende a interface CustomTypeOptions do i18next
  interface CustomTypeOptions {
    // Define o namespace padrão. Geralmente é 'translation'.
    defaultNS: 'translation';
    // Define a "forma" dos seus recursos de tradução
    resources: {
      translation: typeof translationEN;
    };
  }
}
