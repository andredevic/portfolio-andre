// src/components/DownloadCVButton.tsx

import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const DownloadCVButton: FC = () => {
  // 1. A função `t` deve ser obtida pelo hook `useTranslation`
  const { t } = useTranslation();

  const handleDownload = () => {
    // O caminho para o CV deve ser relativo à pasta `public` do seu projeto
    const link = document.createElement('a');
    link.href = '/public/curriculo_portfolio.pdf'; // Exemplo: coloque seu CV na pasta `public`
    link.download = 'curriculo_portfolio.pdf'; // Nome que o arquivo terá ao ser baixado
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      onClick={handleDownload}
      // 2. [DESIGN] Aplicando o mesmo estilo do botão de ação principal
      className="flex w-full items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-700 text-white transition-opacity hover:opacity-90 sm:w-auto"
      size="lg" // Adicionando um tamanho para mais destaque
    >
      <Download className="h-4 w-4" />
      {t('cv_download_button')}
    </Button>
  );
};

export default DownloadCVButton;
