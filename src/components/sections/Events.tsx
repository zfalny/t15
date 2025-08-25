import SectionWrapper from '@/components/SectionWrapper';
import SectionHeader from '@/components/SectionHeader';
import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin, FiClock } from 'react-icons/fi';

const mainEvent = {
  title: "Eleição dos participantes de cada setor",
  date: "1 de Setembro, 2025",
  time: "17:20",
  location: "Auditório da UniCerrado",
  description: "Venha exercer seu direito de votar quem irá representar cada setor da nossa turma!",
  imageUrl: "https://i.postimg.cc/Vv1nWL9c/campus-frente-fachada-aerea.png"
};

const EventDetail = ({ icon: Icon, text, delay }: any) => (
  <motion.div
    className="flex items-center gap-4 bg-background/50 p-4 rounded-xl border border-border/50"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    <Icon className="w-6 h-6 text-primary" />
    <span className="text-text-secondary">{text}</span>
  </motion.div>
);

const Events = () => {
  return (
    <SectionWrapper id="events">
      <SectionHeader
        subtitle="Celebre Conosco"
        title="Próximo Evento"
        description="Marque na sua agenda o nosso próximo grande encontro. Contamos com a sua presença!"
      />
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-5xl mx-auto bg-surface rounded-3xl shadow-lg overflow-hidden border border-border"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src={mainEvent.imageUrl}
                alt="Eleição dos participantes"
                className="w-full h-full object-cover min-h-[300px] md:min-h-0"
              />
            </div>
            <div className="p-8 md:p-10 md:w-1/2 flex flex-col justify-center">
              <h3 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                {mainEvent.title}
              </h3>
              <p className="text-text-secondary mb-8">
                {mainEvent.description}
              </p>
              <div className="space-y-4">
                <EventDetail icon={FiCalendar} text={mainEvent.date} delay={0.2} />
                <EventDetail icon={FiClock} text={mainEvent.time} delay={0.3} />
                <EventDetail icon={FiMapPin} text={mainEvent.location} delay={0.4} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Events;
