import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';

const navLinks = [
  { id: 'about', title: 'Sobre' },
  { id: 'announcements', title: 'Anúncios' },
  { id: 'products', title: 'Produtos' },
  { id: 'events', title: 'Eventos' },
];

const instagramUrl = "https://www.instagram.com/t15medunc?igsh=NDF2ZW01cDMyYWhp";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-surface/80 backdrop-blur-lg border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="https://i.postimg.cc/nM8L558x/PNG-DE-QUALIDADE.png" alt="Brasão T15" className="h-12 w-12" />
          <span className="text-xl font-bold text-text">Medicina T15</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-text-secondary hover:text-primary transition-colors cursor-pointer font-medium"
                activeClass="text-primary"
              >
                {link.title}
              </Link>
            ))}
          </nav>
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary text-2xl transition-colors">
            <FaInstagram />
          </a>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-text text-2xl">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden ${menuOpen ? 'block' : 'hidden'} bg-surface border-t border-border`}
      >
        <nav className="flex flex-col items-center gap-6 py-6">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-text-secondary hover:text-primary transition-colors cursor-pointer text-lg"
              activeClass="text-primary"
              onClick={() => setMenuOpen(false)}
            >
              {link.title}
            </Link>
          ))}
           <a 
            href={instagramUrl}
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-text-secondary hover:text-primary text-3xl transition-colors mt-4"
            onClick={() => setMenuOpen(false)}
          >
            <FaInstagram />
          </a>
        </nav>
      </motion.div>
    </header>
  );
};

export default Header;
