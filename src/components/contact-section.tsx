// src/components/ContactSection.tsx

import type { FC, FormEvent, ChangeEvent } from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';

import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Send,
  MessageSquare,
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

// Interface para tipar o estado do formulário
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const ContactSection: FC = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const [isSending, setIsSending] = useState(false);

  // ✅ Lógica de envio (corrigida)
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // objeto simples - compatível com Record<string, unknown>
    const templateParams: Record<string, unknown> = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      await emailjs.send(
        String(import.meta.env.VITE_EMAILJS_SERVICE_ID),
        String(import.meta.env.VITE_EMAILJS_TEMPLATE_ID),
        templateParams,
        String(import.meta.env.VITE_EMAILJS_PUBLIC_KEY),
      );

      toast({
        title: '✅ Mensagem enviada!',
        description: 'Obrigado por entrar em contato — retornarei em breve.',
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      // --- CORREÇÃO APLICADA AQUI ---
      // Criamos uma variável para a mensagem de erro
      let errorMessage = 'Ocorreu um erro desconhecido.';

      // Verificamos se 'err' é um objeto e se tem a propriedade 'text'
      if (err && typeof err === 'object' && 'text' in err) {
        // Se tiver, podemos assumir com segurança que é uma string
        errorMessage = String((err as { text: unknown }).text);
      }

      console.error('Falha no envio:', errorMessage);

      toast({
        variant: 'destructive',
        title: '❌ Erro ao enviar',
        description: 'Ocorreu um erro. Tente novamente mais tarde.',
      });
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactLinks = [
    {
      icon: <Mail className="h-5 w-5" />,
      labelKey: 'contact_info_email_label',
      value: 'andredev.fe@gmail.com',
      href: 'mailto:andredev.fe@gmail.com',
    },
    {
      icon: <Phone className="h-5 w-5" />,
      labelKey: 'contact_info_phone_label',
      value: '+55 (61) 99615-5791',
      href: 'https://wa.me/5561996155791',
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      labelKey: 'contact_info_linkedin_label',
      value: '/in/andredevic',
      href: 'https://www.linkedin.com/in/andredevic/',
    },
    {
      icon: <Github className="h-5 w-5" />,
      labelKey: 'contact_info_github_label',
      value: '@andredevic',
      href: 'https://github.com/andredevic',
    },
  ];

  const fromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  const fromBottom = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } },
  };

  return (
    <section id="contact" className="bg-transparent py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="gradient-text mb-4 text-5xl text-white/85 md:text-4xl">
            {t('contact_title')}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            {t('contact_subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <motion.div
            variants={fromLeft}
            initial="hidden"
            whileInView="visible"
          >
            <Card className="h-full border-transparent bg-white/5 p-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MessageSquare className="h-6 w-6 text-purple-300" />
                  <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-slate-300 bg-clip-text text-base tracking-tight text-transparent">
                    {t('contact_form_title')}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-white/70">
                      {t('contact_form_name_label')}
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t('contact_form_name_placeholder')}
                      required
                      className="mt-2 border-purple-300/30 bg-white/5 text-white focus:border-purple-400 focus:ring-purple-400"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white/70">
                      {t('contact_form_email_label')}
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t('contact_form_email_placeholder')}
                      required
                      className="mt-2 border-purple-300/30 bg-white/5 text-white focus:border-purple-400 focus:ring-purple-400"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-white/70">
                      {t('contact_form_message_label')}
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t('contact_form_message_placeholder')}
                      rows={5}
                      required
                      className="mt-2 resize-none border-purple-300/30 bg-white/5 text-white focus:border-purple-400 focus:ring-purple-400"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSending}
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-700 text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    {isSending ? 'Enviando...' : t('contact_form_button')}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={fromBottom}
            initial="hidden"
            whileInView="visible"
            className="flex flex-col justify-center gap-8"
          >
            <Card className="border-purple-300/30 bg-white/5">
              <CardHeader>
                <CardTitle className="bg-gradient-to-r from-indigo-400 via-purple-400 to-slate-300 bg-clip-text text-base tracking-tight text-transparent">
                  {t('contact_info_title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {contactLinks.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-lg p-3 transition-colors duration-200 hover:bg-white/5"
                  >
                    <div className="text-purple-300 transition-transform duration-200 group-hover:scale-110">
                      {contact.icon}
                    </div>
                    <div>
                      <p className="font-medium text-white/80">
                        {t(contact.labelKey)}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {contact.value}
                      </p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>
            <div className="rounded-lg bg-gradient-to-r from-purple-500 to-indigo-600 p-1">
              <Card className="h-full border-0 bg-neutral-900/80">
                <CardContent className="p-6">
                  <h3 className="mb-3 text-xl font-bold text-white">
                    {t('contact_cta_title')}
                  </h3>
                  <p className="leading-relaxed text-white/80">
                    {t('contact_cta_text')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>

      <footer className="mt-24 border-t border-white/10 pt-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
          <div className="text-center sm:text-left">
            <p className="font-bold text-white">andredev.fe</p>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} {t('footer_copyright')}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/andredevic/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground transition-colors hover:text-white"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/andredevic"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground transition-colors hover:text-white"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
};
