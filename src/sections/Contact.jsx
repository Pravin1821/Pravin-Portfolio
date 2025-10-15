import SectionWrapper from '../components/SectionWrapper.jsx';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="relative">
      {/* moving gradient background accents */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 left-1/3 w-[120px] h-[520px] rotate-12 bg-gradient-to-b from-cyan-500/15 to-transparent blur-3xl" />
        <div className="absolute top-16 right-1/4 w-[120px] h-[520px] -rotate-12 bg-gradient-to-b from-purple-600/15 to-transparent blur-3xl" />
      </div>

      <div className="text-center mb-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold gradient-text">Contact</h2>
        <div className="fade-divider mt-4" />
      </div>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="text-center text-white/80 max-w-2xl mx-auto"
      >
        Let’s build something amazing together! Feel free to reach out for collaborations, projects, or just a friendly chat.
      </motion.p>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="max-w-md mx-auto mt-8 p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="grid gap-4">
          <input className="bg-transparent border border-white/20 rounded-md px-4 py-2 text-white placeholder-gray-400 focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(0,255,255,0.5)] transition" placeholder="Name" />
          <input className="bg-transparent border border-white/20 rounded-md px-4 py-2 text-white placeholder-gray-400 focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(0,255,255,0.5)] transition" placeholder="Email" type="email" />
          <textarea rows="5" className="bg-transparent border border-white/20 rounded-md px-4 py-2 text-white placeholder-gray-400 focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(0,255,255,0.5)] transition" placeholder="Message" />
          <button className="mt-2 w-full py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold shadow-[0_0_20px_rgba(0,255,255,0.4)] hover:shadow-[0_0_30px_rgba(0,255,255,0.6)] transition-transform hover:scale-105">Send Message</button>
        </div>
      </motion.form>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-8 flex items-center justify-center gap-4"
      >
        <a href="https://www.linkedin.com/in/pravin-sasikumar" target="_blank" rel="noreferrer" className="btn-outline neon-hover"><Linkedin /></a>
        <a href="https://github.com/Pravin1821" target="_blank" rel="noreferrer" className="btn-outline neon-hover"><Github /></a>
        <a href="mailto:pravincriss21@gmail.com" className="btn-outline neon-hover"><Mail /></a>
      </motion.div>
    </SectionWrapper>
  );
}
