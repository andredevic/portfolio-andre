import { Button } from "@/components/ui/button"; // Ajuste o caminho conforme a estrutura do seu projeto
import { Send } from "lucide-react";

const ContactmeButton = () => {
  return (
    <Button
      variant={"outline"}
      className="flex items-center gap-2 text bg-purple-500 bg-transparent"
    >
      <Send className="w-4 h-4 " /> {/* Ícone */}
      Contact-me
      
    </Button>
  );
};

export default ContactmeButton;
