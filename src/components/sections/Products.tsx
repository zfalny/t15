import SectionWrapper from '@/components/SectionWrapper';
import { motion } from 'framer-motion';
import { FiPackage, FiShoppingBag, FiStar } from 'react-icons/fi';

const products = [
  {
    icon: FiPackage,
    title: 'Jalecos Personalizados',
    description: 'Jalecos de alta qualidade com o brasão da T15',
  },
  {
    icon: FiShoppingBag,
    title: 'Moletons e Camisetas',
    description: 'Vestuário casual para mostrar seu orgulho',
  },
  {
    icon: FiStar,
    title: 'Acessórios Exclusivos',
    description: 'Itens especiais para o dia a dia acadêmico',
  },
];

const Products = () => {
  return (
    <SectionWrapper id="products" className="bg-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tl from-primary/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="text-center relative">
        <motion.div
          className="inline-block mb-8"
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <div className="relative p-8 bg-gradient-primary rounded-full">
              <FiPackage className="text-white text-6xl" />
            </div>
          </div>
        </motion.div>

        <motion.h2
          className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Nossos Produtos
        </motion.h2>

        <motion.p
          className="text-xl text-text-secondary max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Estamos preparando uma linha de produtos exclusivos para a T15! De jalecos personalizados a moletons, tudo para você mostrar seu orgulho.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="group"
            >
              <div className="relative glass-light p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300 h-full">
                <div className="absolute inset-0 bg-gradient-primary rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="mb-6 inline-flex p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                    <product.icon className="text-primary text-3xl" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{product.title}</h3>
                  <p className="text-text-secondary">{product.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="inline-flex items-center gap-3 bg-gradient-primary text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <span>Lançamento em Breve!</span>
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Products;
