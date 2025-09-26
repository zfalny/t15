import SectionWrapper from '@/components/SectionWrapper';
import SectionHeader from '@/components/SectionHeader';
import { motion } from 'framer-motion';
import { FiBell } from 'react-icons/fi';

const Announcements = () => {
  return (
    <SectionWrapper id="announcements" className="bg-background">
      <SectionHeader
        subtitle="Fique por Dentro"
        title="Anúncios"
        description="Mantenha-se atualizado com as notícias e comunicados mais importantes da nossa turma."
      />
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="bg-surface p-12 rounded-2xl border border-border text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-primary/10 text-primary p-4 rounded-full">
              <FiBell className="w-8 h-8" />
            </div>
          </motion.div>
          
          <motion.h3
            className="text-2xl lg:text-3xl font-bold text-text mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Em Breve!
          </motion.h3>
          
          <motion.p
            className="text-lg text-text-secondary max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Estamos preparando eventos incríveis para vocês! Fiquem ligados às nossas redes sociais.
          </motion.p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Announcements;
