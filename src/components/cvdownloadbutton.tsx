// src/components/DownloadCVButton.tsx

import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const DownloadCVButton: FC = () => {
  const { t } = useTranslation();

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume_andre.pdf';
    link.download = 'resume_andre.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      onClick={handleDownload}
      className="flex w-full items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-700 text-white transition-opacity hover:opacity-90 sm:w-auto"
      size="lg"
    >
      <Download className="h-4 w-4" />
      {t('cv_download_button')}
    </Button>
  );
};

export default DownloadCVButton;
