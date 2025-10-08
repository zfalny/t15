import SectionWrapper from '@/components/SectionWrapper';
import SectionHeader from '@/components/SectionHeader';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <SectionWrapper id="about">
      <SectionHeader
        subtitle="Nossa Jornada"
        title="Sobre a Turma XV"
        description="Unidos pela paixão de cuidar, prontos para transformar o futuro da medicina."
      />
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center"
        >
          <a href='https://postimg.cc/rRJcRfFZ' target='_blank' rel="noopener noreferrer" className="group relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative p-8 glass rounded-3xl border border-white/5 group-hover:border-white/10 transition-all duration-500">
              <img
                src='https://i.postimg.cc/nM8L558x/PNG-DE-QUALIDADE.png'
                alt="Brasão da Turma XV de Medicina da UniCerrado"
                className="w-full max-w-md h-auto object-contain transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative pl-6 border-l-2 border-primary/50"
          >
            <p className="text-lg text-text-secondary leading-relaxed">
              Nossa história começou no meio do ano de 2025, um marco para cada um de nós na UniCerrado. A Turma XV é mais do que um grupo de estudantes; somos uma família forjada na dedicação, nas noites de estudo e no sonho compartilhado de salvar vidas.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative pl-6 border-l-2 border-primary/50"
          >
            <p className="text-lg text-text-secondary leading-relaxed">
              Cada membro traz uma perspectiva única, mas todos compartilhamos o mesmo compromisso com a ética, a ciência e a empatia. Estamos determinados a não apenas tratar doenças, mas a cuidar de pessoas, compreendendo suas histórias e oferecendo o melhor de nós.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative pl-6 border-l-2 border-primary/50"
          >
            <p className="text-lg text-text-secondary leading-relaxed">
              Esta jornada está apenas começando, mas já estamos deixando nossa marca, construindo um legado de excelência e compaixão que levaremos para nossas carreiras e para a vida.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default About;
