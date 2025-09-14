import SectionWrapper from '@/components/SectionWrapper';
import SectionHeader from '@/components/SectionHeader';
import { motion } from 'framer-motion';
// Ícones atualizados para representar os novos anúncios
import { FiAward, FiCheckSquare } from 'react-icons/fi';

// Array de anúncios atualizado com as novas informações
const announcements = [
  {
    icon: FiCheckSquare,
    title: "Representantes de Comissão Eleitos",
    date: "1 de Setembro, 2025",
    description: "A votação foi um sucesso! Os representantes da equipe de comissão foram eleitos e já estão trabalhando em nome da turma."
  },
  {
    icon: FiAward,
    title: "Próximo Evento: Cerimônia do Jaleco",
    date: "20 de Setembro, 2025", // Você pode alterar para a data correta quando tiver
    description: "Preparem-se para um dos momentos mais esperados! A Cerimônia do Jaleco está chegando. Mais detalhes em breve na seção 'Próximo Evento'."
  }
];

const AnnouncementCard = ({ icon: Icon, title, date, description, index }: any) => (
  <motion.div
    className="bg-surface p-6 rounded-2xl border border-border hover:border-primary transition-all duration-300 group"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <div className="flex items-start gap-4">
      <div className="bg-primary/10 text-primary p-3 rounded-full">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <p className="text-sm text-text-secondary mb-1">{date}</p>
        <h3 className="text-xl font-bold text-text mb-2">{title}</h3>
        <p className="text-text-secondary">{description}</p>
      </div>
    </div>
  </motion.div>
);

const Announcements = () => {
  return (
    <SectionWrapper id="announcements" className="bg-background">
      <SectionHeader
        subtitle="Fique por Dentro"
        title="Últimos Anúncios"
        description="Mantenha-se atualizado com as notícias e comunicados mais importantes da nossa turma."
      />
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {announcements.map((item, index) => (
          <AnnouncementCard key={index} index={index} {...item} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Announcements;
