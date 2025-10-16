import SectionWrapper from '../components/SectionWrapper.jsx';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function About() {
  const [isActive, setIsActive] = useState(false);
  return (
    <SectionWrapper id="about" className="relative">
      {/* floating blurred lights background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-16 left-10 w-40 h-40 rounded-full blur-3xl opacity-25 bg-neon-violet animate-float" />
        <div className="absolute bottom-0 right-16 w-48 h-48 rounded-full blur-3xl opacity-20 bg-neon-blue animate-float" />
      </div>

      <div className="container-padded">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          onClick={() => setIsActive((v) => !v)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setIsActive((v) => !v); } }}
          className={`relative glass neon-hover neon-border rounded-2xl p-6 sm:p-8 md:p-10 overflow-hidden transition-shadow duration-300 ${
            isActive ? 'ring-2 ring-cyan-400/60 shadow-[0_0_55px_rgba(34,211,238,0.35)]' : ''
          }`}
        >
          <div className={`absolute -inset-1 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 blur-3xl transition-opacity ${
            isActive ? 'opacity-60' : 'opacity-40'
          }`} />
          <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
            <div className="md:w-2/3">
              <h2 className="text-3xl sm:text-4xl font-extrabold gradient-text animate-glow">About Me</h2>
              <p className="mt-5 text-white/85 leading-relaxed text-base md:text-lg">
                I’m a developer who loves building reliable backends and immersive UIs. My comfort zone is Spring Boot, REST APIs, security, and data modeling on the backend — paired with React on the frontend to bring ideas to life with smooth microinteractions and performance in mind.
              </p>
              <p className="mt-4 text-white/80 leading-relaxed text-base md:text-lg">
                Recently, I’ve focused on designing secure transaction flows, optimizing SQL queries, and crafting reusable UI components. I enjoy turning complex requirements into clean, scalable systems that feel effortless to use.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 max-w-lg">
                <div className="rounded-xl border border-white/10 p-4 bg-white/5">
                  <p className="text-white/70">Location</p>
                  <p className="text-white">Coimbatore, Tamil Nadu</p>
                </div>
                <div className="rounded-xl border border-white/10 p-4 bg-white/5">
                  <p className="text-white/70">Email</p>
                  <a href="mailto:pravincriss21@gmail.com" className="text-cyan-300 hover:text-cyan-200">pravincriss21@gmail.com</a>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 w-full">
              <div className="relative rounded-2xl border border-white/10 bg-black/40 p-5 h-full">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-cyan-500/40 to-purple-500/40 blur-2xl opacity-50" />
                <div className="relative">
                  <h3 className="text-lg font-semibold text-white/90">What drives me</h3>
                  <p className="mt-3 text-white/80">
                    Clean architecture, security-first design, and delightful UX. I aim to build systems that scale and interfaces people love to use.
                  </p>
                  <p className="mt-5 italic text-white/70">“Code. Learn. Build. Repeat.”</p>
                </div>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </SectionWrapper>
  );
}
