import { motion } from 'framer-motion';
import profilePic from '../assets/photo-personal.jpeg';
import { ArrowDown, Mail, MousePointerClick } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const container = (delay: number) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="fixed inset-0 -z-50 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div className="pt-24 text-center sm:pt-0 lg:text-left">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-6 text-4xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              {t('hero_name')}
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="inline-block bg-gradient-to-r from-indigo-400 via-purple-400 to-slate-300 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              {t('hero_role')}
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="mb-8 mt-2 max-w-2xl text-lg leading-relaxed text-white/80"
            >
              {t('hero_description')}
            </motion.p>
            <motion.div
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
            >
              <Button
                onClick={scrollToContact}
                variant="outline"
                size="lg"
                className="w-full border-purple-400/50 bg-transparent text-purple-200 transition-colors hover:border-purple-300 hover:bg-purple-400/10 hover:text-white"
              >
                <Mail className="mr-2 h-5 w-5" />
                {t('hero_contact_button')}
              </Button>
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-purple-400 to-indigo-600 text-white transition-opacity hover:opacity-90"
                onClick={() =>
                  document
                    .getElementById('projects')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                <MousePointerClick />
                {t('hero_projects_button')}
              </Button>
            </motion.div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="h-80 w-80 rounded-full p-2 backdrop-blur-sm">
                <motion.img
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 1.2 }}
                  className="w-full rounded-l-full rounded-r-full brightness-75"
                  src={profilePic}
                  alt={t('hero_image_alt')}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute left-1/2 mt-20 -translate-x-1/2 transform animate-bounce">
          <ArrowDown className="h-6 w-6 text-white/60" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
