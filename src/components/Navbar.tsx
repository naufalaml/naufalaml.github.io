import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map(item => document.getElementById(item.href.substring(1)));
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        if (!section) continue;
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(section.id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.getElementById(href.substring(1));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(href.substring(1));
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="nav-logo flex items-center gap-2">
        <img src="/logo.png" alt="AN Logo" className="w-6 h-6 object-contain" />
        <div className="flex items-center">
          <span className="logo-bracket">&#123;</span>
          <span className="logo-name">naufal.dev</span>
          <span className="logo-bracket">&#125;</span>
        </div>
      </a>

      <ul className="nav-links">
        {navItems.map((item) => {
          const isActive = activeSection === item.href.substring(1);
          return (
            <li 
              key={item.label} 
              className={isActive ? 'active' : ''}
            >
              <a href={item.href} onClick={(e) => handleNavClick(e, item.href)}>
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>

      <a 
        href="#contact" 
        onClick={(e) => handleNavClick(e, '#contact')} 
        className="nav-cta"
      >
        Hubungi Saya
      </a>

      {/* Hamburger Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden p-2 rounded-lg bg-[#0d1120] border border-[#6c3dff33] text-[#f0eeff] hover:text-white transition-colors z-[1050]"
      >
        {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-0 right-0 py-6 px-6 bg-[#080b14]/95 border-b border-[#6c3dff26] shadow-xl flex flex-col gap-4 z-[999] backdrop-blur-xl"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`py-2 text-sm font-semibold tracking-wider transition-all uppercase ${
                  activeSection === item.href.substring(1)
                    ? 'text-[#00f5ff] font-bold'
                    : 'text-[#6b7280] hover:text-[#f0eeff]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
