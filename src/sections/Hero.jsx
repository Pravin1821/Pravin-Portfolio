import { motion } from 'framer-motion';
import { Github, LinkedinIcon, Mail } from 'lucide-react';
import profile from '../assets/profile.jpg';

export default function Hero() {
  return (
    <header id="hero" className="relative min-h-screen flex items-center justify-center px-4 md:py-20" style={{ background: 'linear-gradient(180deg,#0a0a0a 0%, #1a1a1a 100%)' }}>
      {/* ambient background glows */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-24 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-25 bg-[#7c3aed]" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full blur-3xl opacity-20 bg-[#22d3ee]" />
      </div>

      <div className="container-padded w-full">
        <div className="flex flex-col items-center text-center">
          {/* Profile image */}
          <motion.img
            src={profile}
            alt="Profile"
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            className="w-56 h-56 md:w-72 md:h-72 rounded-full border-4 border-cyan-400/50 shadow-[0_0_40px_rgba(0,255,255,0.3)] object-cover object-top transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(0,255,255,0.5)]"
          />

          {/* Accent dot */}
          <div className="w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_15px_#22d3ee] mx-auto my-4 animate-pulse" />

          {/* Name & Title */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeInOut', delay: 0.05 }}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text"
          >
            Pravin S
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeInOut', delay: 0.1 }}
            className="mt-3 text-lg md:text-xl text-white/90 typewriter max-w-2xl"
          >
            Aspiring Java Backend Developer | Full-Stack Developer
          </motion.p>
          <p className="mt-3 text-white/70">Coimbatore, Tamil Nadu • <a className="hover:text-cyan-300" href="mailto:pravincriss21@gmail.com">pravincriss21@gmail.com</a> • <a className="hover:text-cyan-300" href="tel:+919080262422">+91 9080262422</a></p>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeInOut', delay: 0.15 }}
            className="mt-6 flex items-center justify-center gap-5"
          >
            <a href="https://github.com/Pravin1821" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-cyan-400 hover:drop-shadow-[0_0_10px_#22d3ee] transition-transform hover:scale-110"><Github /></a>
            <a href="https://www.linkedin.com/in/pravin-sasikumar-176070297/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-cyan-400 hover:drop-shadow-[0_0_10px_#22d3ee] transition-transform hover:scale-110"><LinkedinIcon /></a>
            <a href="mailto:pravincriss21@gmail.com" className="text-gray-400 hover:text-cyan-400 hover:drop-shadow-[0_0_10px_#22d3ee] transition-transform hover:scale-110"><Mail /></a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cyan-400 animate-bounce cursor-pointer"
        aria-label="Scroll down"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.a>
    </header>
  );
}
