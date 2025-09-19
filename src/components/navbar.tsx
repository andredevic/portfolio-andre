import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { to: 'home', label: 'início' },
    { to: 'aboutme', label: 'Sobre' },
    { to: 'tecnologias', label: 'Habilidades Técnicas' },
    { to: 'projects', label: 'Projetos' },
    { to: 'contact', label: 'Contato' },
  ];

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
              offset={-80} // ajuste para não colar na navbar
              className="cursor-pointer"
            >
              <span className="gradient-text font-work-sans text-xl font-bold">
                andredev.fe
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 text-slate-100 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                duration={2000}
                offset={-80}
                className="relative cursor-pointer after:block after:h-[2px] after:w-0 after:origin-left after:bg-violet-300 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </Link>
            ))}
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

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="mt-2 space-y-3 rounded-lg bg-black/70 p-4 backdrop-blur-md md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                duration={2000}
                offset={-80}
                className="block cursor-pointer text-slate-100 transition hover:text-violet-400"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
