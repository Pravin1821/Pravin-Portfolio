import SectionWrapper from '../components/SectionWrapper.jsx';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certs = [
  {
    title: 'Webinar: Gen-AI',
    overview: 'Attended a session on next-generation AI technologies and applications.',
    issuer: 'Technical Webinar Series',
    year: '2024',
  },
  {
    title: 'Workshop: DevOps',
    overview: 'Hands-on workshop covering CI/CD, Docker, and cloud deployment basics.',
    issuer: 'Sri Shakthi Institute of Engineering and Technology',
    year: '2025',
  },
  {
    title: 'Java Programming Certificate',
    overview: 'Focus on OOP, APIs, and backend integration.',
    issuer: 'Coding Ninjas',
    year: '2024',
  },
  {
    title: 'React Bootcamp',
    overview: 'Completed React Bootcamp covering components, hooks, routing and state management best practices.',
    issuer: 'LetsUpgrade',
    year: '2025',
  },
];

export default function Certifications() {
  return (
    <SectionWrapper id="certifications" className="relative">
      {/* subtle parallax/gradient accents */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-12 left-1/4 w-[120px] h-[420px] rotate-12 bg-gradient-to-b from-cyan-500/15 to-transparent blur-3xl" />
        <div className="absolute top-8 right-1/4 w-[120px] h-[420px] -rotate-12 bg-gradient-to-b from-purple-600/15 to-transparent blur-3xl" />
      </div>

      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-3">
          <Award className="text-cyan-400" />
          <h2 className="text-2xl sm:text-3xl font-extrabold gradient-text">Certifications</h2>
        </div>
        <div className="fade-divider mt-4" />
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {certs.map((c, idx) => (
          <motion.article
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="glass p-6 neon-hover"
            style={{ boxShadow: '0 0 20px rgba(0,217,255,0.25)' }}
          >
            <header className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold gradient-text">{c.title}</h3>
              <span className="text-white/60 text-sm">{c.year}</span>
            </header>
            <p className="mt-2 text-white/80 text-sm">{c.overview}</p>
            <p className="mt-2 text-white/70 text-sm">Issued by: {c.issuer}</p>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
