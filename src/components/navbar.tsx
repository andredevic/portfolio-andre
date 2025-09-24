import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  // 1. Obter a função t (translate) e a instância i18n
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Traduzir os itens de navegação dinamicamente
  // useMemo otimiza a performance, recriando a lista apenas quando o idioma muda
  const navItems = useMemo(
    () => [
      { to: 'inicio', label: t('nav_home') },
      { to: 'aboutme', label: t('nav_about') },
      { to: 'tecnologias', label: t('nav_skills') },
      { to: 'projects', label: t('nav_projects') },
      { to: 'contact', label: t('nav_contact') },
    ],
    [t],
  );

  // 3. Função para mudar o idioma
  const changeLanguage = (lng: 'pt' | 'en') => {
    i18n.changeLanguage(lng);
    setIsOpen(false); // Fecha o menu mobile ao trocar o idioma
  };

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-gray-800 bg-black/50 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="inicio"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer"
            >
              <span className="font-work-sans bg-gradient-to-r from-indigo-400 via-purple-400 to-slate-300 bg-clip-text text-2xl tracking-tight text-transparent">
                andredev.fe
              </span>
            </Link>
          </div>

          {/* Desktop Navigation & Language Switcher */}
          <div className="hidden items-center gap-8 text-slate-100 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                offset={-80}
                duration={2000}
                className="relative cursor-pointer after:block after:h-[2px] after:w-0 after:origin-left after:bg-violet-300 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </Link>
            ))}

            {/* Language Switcher - Desktop */}
            <div className="flex items-center gap-2 border-l border-gray-700 pl-6 text-sm">
              <button
                onClick={() => changeLanguage('pt')}
                className={`transition-colors duration-200 ${
                  currentLanguage.startsWith('pt')
                    ? 'font-bold text-violet-300'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                PT
              </button>
              <span className="text-gray-600">|</span>
              <button
                onClick={() => changeLanguage('en')}
                className={`transition-colors duration-200 ${
                  currentLanguage.startsWith('en')
                    ? 'font-bold text-violet-300'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="rounded-md p-2 text-slate-100 transition hover:bg-white/10"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation & Language Switcher */}
        {isOpen && (
          <div className="mt-2 space-y-3 rounded-lg bg-black/80 p-4 backdrop-blur-md md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth
                offset={-80}
                duration={500}
                className="block cursor-pointer rounded-md px-3 py-2 text-slate-100 transition hover:bg-white/10 hover:text-violet-300"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {/* Language Switcher - Mobile */}
            <div className="mt-4 flex justify-center gap-4 border-t border-gray-700 pt-4">
              <button
                onClick={() => changeLanguage('pt')}
                className={`rounded-md px-4 py-2 text-sm transition-colors duration-200 ${
                  currentLanguage.startsWith('pt')
                    ? 'bg-violet-500/30 font-semibold text-violet-200'
                    : 'text-slate-400'
                }`}
              >
                Português
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`rounded-md px-4 py-2 text-sm transition-colors duration-200 ${
                  currentLanguage.startsWith('en')
                    ? 'bg-violet-500/30 font-semibold text-violet-200'
                    : 'text-slate-400'
                }`}
              >
                English
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
