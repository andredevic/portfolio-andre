import { Button } from '@/components/ui/button'; // Ajuste o caminho conforme a estrutura do seu projeto
import { Download } from 'lucide-react'; // Ícone opcional

const DownloadCVButton = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf'; // Caminho para o arquivo no diretório `public`
    link.download = 'andre_ferreira_cv.pdf'; // Nome do arquivo ao fazer download
    link.click();
  };

  return (
    <Button
      variant={'outline'}
      onClick={handleDownload}
      className="flex items-center gap-2 border-none bg-purple-300 text-accent-foreground hover:bg-purple-400/70 hover:text-accent-foreground"
    >
      <Download className="h-4 w-4" /> {/* Ícone */}
      Baixar CV
    </Button>   
  );
};

export default DownloadCVButton;
