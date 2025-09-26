import SectionWrapper from '@/components/SectionWrapper';
import SectionHeader from '@/components/SectionHeader';
import { motion } from 'framer-motion';
import { FiCalendar } from 'react-icons/fi';

const Events = () => {
  return (
    <SectionWrapper id="events">
      <SectionHeader 
        subtitle="Celebre Conosco" 
        title="Próximos Eventos" 
        description="Fique ligado! Em breve teremos novidades incríveis para compartilhar com você." 
      />
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto bg-surface rounded-3xl shadow-lg overflow-hidden border border-border p-12 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
              <FiCalendar className="w-10 h-10 text-primary" />
            </div>
          </motion.div>
          
          <motion.h3 
            className="text-4xl lg:text-5xl font-bold text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Novos Eventos em Breve!
          </motion.h3>
          
          <motion.p 
            className="text-lg text-text-secondary max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Estamos preparando experiências incríveis para você. 
            Acompanhe nossas redes sociais para não perder nenhuma novidade!
          </motion.p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Events;
