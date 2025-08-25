import SectionWrapper from '@/components/SectionWrapper';
import { motion } from 'framer-motion';
import { FiPackage } from 'react-icons/fi';

const Products = () => {
  return (
    <SectionWrapper id="products" className="bg-surface">
      <div className="text-center">
        <motion.div
          className="inline-block p-6 bg-primary/10 rounded-full mb-6"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
          <FiPackage className="text-primary text-5xl" />
        </motion.div>
        <motion.h2 
          className="text-3xl md:text-5xl font-bold tracking-tighter mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Nossos Produtos
        </motion.h2>
        <motion.p 
          className="text-xl text-text-secondary max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Estamos preparando uma linha de produtos exclusivos para a T15! De jalecos personalizados a moletons, tudo para você mostrar seu orgulho.
        </motion.p>
        <motion.div 
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <span className="bg-primary text-background font-bold py-3 px-8 rounded-full text-lg">
            Lançamento em Breve!
          </span>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Products;
