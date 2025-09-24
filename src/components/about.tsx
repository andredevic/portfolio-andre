import { useTranslation } from 'react-i18next';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import DownloadCVButton from '../components/cvdownloadbutton';
import { BriefcaseBusiness, User } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section id="aboutme" className="bg-transparent py-20 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="gradient-text mb-4 text-5xl text-white/85 md:text-4xl">
            {t('about_title_part1')}
            <span className="text-4xl font-thin text-neutral-500">
              {t('about_title_part2')}
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {t('about_subtitle')}
          </p>
        </div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 gap-8 lg:grid-cols-2"
        >
          {/* Perfil Profissional */}
          <Card className="group border-transparent bg-white/5 transition-all duration-300 hover:border-purple-200/60 hover:shadow-sm hover:shadow-purple-200/60">
            <CardHeader>
              <CardTitle className="gradient-text flex items-center gap-3">
                <User className="h-6 w-6 text-white/80" />
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-slate-300 bg-clip-text tracking-tight text-transparent">
                  {t('about_who_am_i_title')}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="leading-relaxed text-white/80">
                {t('about_who_am_i_p1')}
              </p>
              <p className="leading-relaxed text-white/80">
                {t('about_who_am_i_p2')}
              </p>
              <DownloadCVButton />
            </CardContent>
          </Card>

          {/* Qualificações */}
          <Card className="group border-transparent bg-white/5 text-accent transition-all duration-300 hover:border-purple-200/60 hover:shadow-sm hover:shadow-purple-200/60">
            <CardHeader>
              <CardTitle className="gradient-text flex items-center gap-3">
                <BriefcaseBusiness className="h-6 w-6 text-white/80" />
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-slate-300 bg-clip-text tracking-tight text-transparent">
                  {t('about_what_i_do_title')}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <h3 className="font-semibold text-white/90">
                  {t('about_what_i_do_subtitle')}
                </h3>
                <div className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple-400" />
                  <p className="text-white/80">{t('about_what_i_do_item1')}</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple-400" />
                  <p className="text-white/80">{t('about_what_i_do_item2')}</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple-400" />
                  <p className="text-white/80">{t('about_what_i_do_item3')}</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple-400" />
                  <p className="text-white/80">{t('about_what_i_do_item4')}</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple-400" />
                  <p className="text-white/80">{t('about_what_i_do_item5')}</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple-400" />
                  <p className="text-white/80">{t('about_what_i_do_item6')}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
