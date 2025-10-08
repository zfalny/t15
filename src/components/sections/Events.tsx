import SectionWrapper from '@/components/SectionWrapper';
import SectionHeader from '@/components/SectionHeader';
import { motion } from 'framer-motion';
import { FiCalendar, FiClock, FiMapPin } from 'react-icons/fi';

const upcomingFeatures = [
  {
    icon: FiCalendar,
    title: 'Eventos Acadêmicos',
    description: 'Palestras, workshops e conferências',
  },
  {
    icon: FiClock,
    title: 'Atividades Sociais',
    description: 'Encontros e confraternizações da turma',
  },
  {
    icon: FiMapPin,
    title: 'Visitas Técnicas',
    description: 'Experiências práticas em hospitais',
  },
];

const Events = () => {
  return (
    <SectionWrapper id="events" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 pointer-events-none"></div>

      <SectionHeader
        subtitle="Celebre Conosco"
        title="Próximos Eventos"
        description="Fique ligado! Em breve teremos novidades incríveis para compartilhar com você."
      />

      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
          {upcomingFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative glass-light p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 text-center h-full">
                <div className="absolute inset-0 bg-gradient-primary rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="inline-flex p-4 bg-primary/10 rounded-xl mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <feature.icon className="text-primary text-2xl" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                  <p className="text-text-secondary text-sm">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="max-w-4xl mx-auto relative group"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>

          <div className="relative glass rounded-3xl shadow-2xl overflow-hidden border border-white/10 p-12 md:p-16 text-center">
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>

            <motion.div
              className="flex justify-center mb-8"
              initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl animate-pulse"></div>
                <div className="relative w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center">
                  <FiCalendar className="w-12 h-12 text-white" />
                </div>
              </div>
            </motion.div>

            <motion.h3
              className="text-4xl lg:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Novos Eventos em Breve!
            </motion.h3>

            <motion.p
              className="text-lg lg:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Estamos preparando experiências incríveis para você. Acompanhe nossas redes sociais para não perder nenhuma novidade!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 glass-light rounded-full border border-white/10"
            >
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-text-secondary font-medium">Fique atento às atualizações</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Events;
