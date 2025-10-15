import SectionWrapper from '../components/SectionWrapper.jsx';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <SectionWrapper id="about" className="relative">
      {/* floating blurred lights background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-16 left-10 w-40 h-40 rounded-full blur-3xl opacity-25 bg-neon-violet animate-float" />
        <div className="absolute bottom-0 right-16 w-48 h-48 rounded-full blur-3xl opacity-20 bg-neon-blue animate-float" />
      </div>

      <div className="flex justify-center">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="glass neon-hover neon-border max-w-3xl w-full p-8 sm:p-10 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold gradient-text animate-glow">About Me</h2>
          <p className="mt-5 text-white/85 leading-relaxed">
            Highly motivated Java Backend Developer with hands-on experience in building full-stack applications using Spring Boot and MySQL. Skilled in developing REST APIs, implementing secure transaction systems, and working in Agile environments. Strong problem-solving, debugging, and DSA skills. I strive to develop clean, efficient, and scalable code while continuously learning new technologies.
          </p>
          <p className="mt-6 italic text-white/70">“Code. Learn. Build. Repeat.”</p>
        </motion.article>
      </div>
    </SectionWrapper>
  );
}
