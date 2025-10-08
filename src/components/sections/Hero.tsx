import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-background z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/10 z-10"></div>
      <img
        src="https://i.postimg.cc/9f1NGNwx/1-8-grandes-medicos-que-revolucionaram-a-medicina-7221856-1.png"
        alt="Estetoscópio sobre prontuário médico"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />
      <div className="relative z-20 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="inline-block mb-6 px-6 py-2 glass-light rounded-full border border-white/10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="text-white/90 text-sm md:text-base font-medium tracking-wider">
              TURMA XV
            </span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white mb-6 text-shadow-md leading-none">
            MEDICINA
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/40"></div>
            <p className="text-xl md:text-2xl text-white/90 font-light tracking-wide">
              UniCerrado - Rumo à Excelência
            </p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/40"></div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-white/70 text-base md:text-lg max-w-2xl mx-auto"
          >
            Unidos pela paixão de cuidar, transformando conhecimento em esperança
          </motion.p>
        </motion.div>
      </div>
      <Link to="about" smooth={true} duration={500} offset={-70}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 cursor-pointer group"
        >
          <div className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center animate-bounce hover:border-white/60 hover:bg-white/10 transition-all duration-300">
            <FiArrowDown className="text-white text-2xl group-hover:scale-110 transition-transform" />
          </div>
        </motion.div>
      </Link>
    </section>
  );
};

export default Hero;
