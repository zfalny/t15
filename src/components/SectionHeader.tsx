import { motion } from 'framer-motion';

interface SectionHeaderProps {
  subtitle: string;
  title: string;
  description: string;
}

const SectionHeader = ({ subtitle, title, description }: SectionHeaderProps) => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 glass-light rounded-full border border-white/10">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <p className="text-primary font-semibold text-sm uppercase tracking-wider">{subtitle}</p>
        </div>
      </motion.div>

      <motion.h2
        className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {title}
      </motion.h2>

      <motion.div
        className="flex items-center justify-center gap-4 mb-6"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="h-px w-12 bg-gradient-to-r from-transparent via-primary/50 to-primary"></div>
        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
        <div className="h-px w-12 bg-gradient-to-l from-transparent via-primary/50 to-primary"></div>
      </motion.div>

      <motion.p
        className="text-text-secondary text-lg md:text-xl leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {description}
      </motion.p>
    </div>
  );
};

export default SectionHeader;
