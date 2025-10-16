import { motion } from 'framer-motion';
import { Github, LinkedinIcon, Mail } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
import profile from '../assets/profile.jpg';
import resumePdf from '../assets/Pravin_S-Resume.pdf';
import AnimatedBackground from '../components/AnimatedBackground.jsx';

export default function Hero() {
  return (
    <header id="hero" className="relative min-h-screen flex items-center px-4 md:py-20 bg-gradient-to-b from-[#0a0a0a] via-[#0f172a] to-[#1a1a1a]">
      {/* global animated particles background (ensure it's behind all content) */}
      <div className="absolute inset-0 -z-20 pointer-events-none">
        <AnimatedBackground />
      </div>
      {/* ambient background glows (matched with About section) */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-24 left-16 w-72 h-72 rounded-full blur-3xl opacity-30 bg-neon-violet animate-float" />
        <div className="absolute bottom-[-2rem] right-24 w-80 h-80 rounded-full blur-3xl opacity-25 bg-neon-blue animate-float" />
      </div>

      <div className="container-padded w-full">
        <div className="relative z-10 bg-black/20 backdrop-blur-sm p-6 md:p-8 rounded-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Left: Intro Text */}
          <div className="order-2 md:order-1 text-center md:text-left">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-white/70 text-lg md:text-xl"
            >
              Hi, I'm
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.05 }}
              className="mt-2 text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text drop-shadow-[0_0_25px_rgba(34,211,238,0.35)]"
            >
              Pravin S
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
              className="mt-3 text-xl md:text-2xl text-white/90"
            >
              Aspiring Java Backend Developer | Full-Stack Developer
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
              className="mt-4 text-white/80 leading-relaxed max-w-2xl mx-auto md:mx-0 text-base md:text-lg"
            >
              I’m a passionate developer skilled in crafting scalable backend systems with Spring Boot and creating interactive frontends with React. I focus on building secure, efficient, and visually engaging applications.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              className="mt-7 flex items-center gap-4 justify-center md:justify-start"
            >
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
                duration={600}
                className="cursor-pointer bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg px-6 py-3 hover:shadow-[0_0_25px_rgba(0,255,255,0.4)] transition-transform hover:scale-105"
              >
                Get in Touch
              </ScrollLink>
              <a
                href={resumePdf}
                download
                className="btn-outline neon-hover px-6 py-3 rounded-lg text-white/90 border border-white/20 hover:border-cyan-400/60 hover:text-white hover:shadow-[0_0_20px_rgba(34,211,238,0.35)] transition-transform hover:scale-105"
              >
                Download CV
              </a>
            </motion.div>

            {/* Social icons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.25 }}
              className="mt-6 flex items-center gap-5 justify-center md:justify-start"
            >
              <a href="https://github.com/Pravin1821" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-cyan-400 hover:drop-shadow-[0_0_10px_#22d3ee] transition-transform hover:scale-110"><Github /></a>
              <a href="https://www.linkedin.com/in/pravin-sasikumar-176070297/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-cyan-400 hover:drop-shadow-[0_0_10px_#22d3ee] transition-transform hover:scale-110"><LinkedinIcon /></a>
              <a href="mailto:pravincriss21@gmail.com" className="text-gray-400 hover:text-cyan-400 hover:drop-shadow-[0_0_10px_#22d3ee] transition-transform hover:scale-110"><Mail /></a>
            </motion.div>
          </div>

          {/* Right: Circular profile image with rotating gradient ring */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="relative"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
                {/* Glowing rotating ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-[spin_12s_linear_infinite] blur-md opacity-60" />
                {/* Profile Image */}
                <img
                  src={profile}
                  alt="Pravin S"
                  className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover object-top border-4 border-cyan-400/40 shadow-[0_0_50px_rgba(0,255,255,0.3)] transition-transform duration-700 hover:scale-105 hover:shadow-[0_0_70px_rgba(0,255,255,0.5)]"
                />
              </div>
            </motion.div>
          </div>
        </div>
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
