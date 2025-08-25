import { FaInstagram, FaWhatsapp, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();
  const instagramUrl = "https://www.instagram.com/t15medunc?igsh=NDF2ZW01cDMyYWhp";

  return (
    <footer className="bg-surface border-t border-border">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-text">Medicina T15 - UniCerrado</h3>
            <p className="text-text-secondary mt-1">Formando os médicos do futuro.</p>
          </div>
          <div className="flex gap-6">
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary text-2xl transition-colors"><FaInstagram /></a>
            <a href="#" className="text-text-secondary hover:text-primary text-2xl transition-colors"><FaWhatsapp /></a>
            <a href="#" className="text-text-secondary hover:text-primary text-2xl transition-colors"><FaTiktok /></a>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6 text-center text-text-secondary text-sm">
          <p>&copy; {year} Turma XV de Medicina, UniCerrado. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
