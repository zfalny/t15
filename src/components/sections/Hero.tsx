import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <img
        src="https://i.postimg.cc/9f1NGNwx/1-8-grandes-medicos-que-revolucionaram-a-medicina-7221856-1.png"
        alt="Estetoscópio sobre prontuário médico"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-4">
            MEDICINA T15
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-medium">
            UniCerrado - Rumo à Excelência
          </p>
        </motion.div>
      </div>
      <Link to="about" smooth={true} duration={500} offset={-70}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 cursor-pointer"
        >
          <div className="w-10 h-10 rounded-full border-2 border-white/50 flex items-center justify-center animate-bounce">
            <FiArrowDown className="text-white text-2xl" />
          </div>
        </motion.div>
      </Link>
    </section>
  );
};

export default Hero;
