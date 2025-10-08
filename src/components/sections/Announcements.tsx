import SectionWrapper from '@/components/SectionWrapper';
import SectionHeader from '@/components/SectionHeader';
import { motion } from 'framer-motion';
import { FiBell, FiArrowRight } from 'react-icons/fi';

const Announcements = () => {
  return (
    <SectionWrapper id="announcements" className="bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none"></div>

      <SectionHeader
        subtitle="Fique por Dentro"
        title="Anúncios"
        description="Mantenha-se atualizado com as notícias e comunicados mais importantes da nossa turma."
      />
      <div className="max-w-4xl mx-auto relative">
        <motion.div
          className="relative group"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>

          <div className="relative glass-light p-12 md:p-16 rounded-3xl border border-white/10 text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>

            <motion.div
              className="flex justify-center mb-8"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl animate-pulse"></div>
                <div className="relative bg-gradient-primary text-white p-6 rounded-full">
                  <FiBell className="w-10 h-10" />
                </div>
              </div>
            </motion.div>

            <motion.h3
              className="text-3xl lg:text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Novidades em Breve!
            </motion.h3>

            <motion.p
              className="text-lg lg:text-xl text-text-secondary max-w-2xl mx-auto mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Estamos preparando eventos incríveis para vocês! Fiquem ligados às nossas redes sociais para não perder nenhuma novidade.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="inline-flex items-center gap-2 text-primary font-semibold group/link cursor-pointer"
            >
              <span>Siga-nos no Instagram</span>
              <FiArrowRight className="transition-transform group-hover/link:translate-x-1" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Announcements;
