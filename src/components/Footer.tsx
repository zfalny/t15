import { FaInstagram, FaWhatsapp, FaTiktok } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const year = new Date().getFullYear();
  const instagramUrl = "https://www.instagram.com/t15medunc?igsh=NDF2ZW01cDMyYWhp";

  const socialLinks = [
    { icon: FaInstagram, href: instagramUrl, label: 'Instagram' },
    { icon: FaWhatsapp, href: '#', label: 'WhatsApp' },
    { icon: FaTiktok, href: '#', label: 'TikTok' },
  ];

  return (
    <footer className="relative bg-surface border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 py-12 relative">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 justify-center md:justify-start mb-3">
              <img src="https://i.postimg.cc/nM8L558x/PNG-DE-QUALIDADE.png" alt="Brasão T15" className="h-10 w-10" />
              <h3 className="text-xl font-bold text-white">Medicina T15</h3>
            </div>
            <p className="text-lg text-text-secondary">UniCerrado</p>
            <p className="text-text-secondary/80 mt-1">Formando os médicos do futuro.</p>
          </motion.div>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target={social.href !== '#' ? '_blank' : undefined}
                rel={social.href !== '#' ? 'noopener noreferrer' : undefined}
                className="group relative w-12 h-12 flex items-center justify-center rounded-xl glass-light border border-white/5 hover:border-primary/30 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <div className="absolute inset-0 bg-gradient-primary rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <social.icon className="text-text-secondary group-hover:text-primary text-xl transition-colors duration-300 relative z-10" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="pt-6 border-t border-white/5 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-text-secondary/70 text-sm">
            &copy; {year} Turma XV de Medicina, UniCerrado. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
