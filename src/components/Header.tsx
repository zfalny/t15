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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass border-b border-white/10 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative">
            <img src="https://i.postimg.cc/nM8L558x/PNG-DE-QUALIDADE.png" alt="Brasão T15" className="h-12 w-12 transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <span className="text-xl font-bold text-text transition-colors group-hover:text-white">Medicina T15</span>
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
                className="relative text-text-secondary hover:text-white transition-all duration-300 cursor-pointer font-medium group"
                activeClass="text-white"
              >
                {link.title}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary text-2xl transition-all duration-300 hover:scale-110">
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
        className={`md:hidden ${menuOpen ? 'block' : 'hidden'} glass border-t border-white/10`}
      >
        <nav className="flex flex-col items-center gap-6 py-6">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: menuOpen ? 1 : 0, x: menuOpen ? 0 : -20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                to={link.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-text-secondary hover:text-white transition-colors cursor-pointer text-lg"
                activeClass="text-white"
                onClick={() => setMenuOpen(false)}
              >
                {link.title}
              </Link>
            </motion.div>
          ))}
           <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-primary text-3xl transition-all duration-300 hover:scale-110 mt-4"
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
