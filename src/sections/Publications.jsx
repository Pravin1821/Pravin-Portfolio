import SectionWrapper from '../components/SectionWrapper.jsx';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

const publications = [
  {
    title: 'Career Guidance Management System',
    authors: 'Prathosh T S, Pravin S, Ragul T, Mrs. Sathya T',
    venue: 'International Journal of Research Publication and Reviews, Vol. 5 No. 11 (Nov 2024), pp. 2351–2353',
    issn: '2582-7421',
    link: 'https://www.ijrpr.com',
  },
];

export default function Publications() {
  return (
    <SectionWrapper id="publications" className="relative">
      {/* background continuity */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 left-1/3 w-[90px] h-[420px] rotate-12 bg-gradient-to-b from-cyan-500/15 to-transparent blur-3xl" />
        <div className="absolute top-16 right-1/4 w-[110px] h-[420px] -rotate-12 bg-gradient-to-b from-purple-600/15 to-transparent blur-3xl" />
      </div>

      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-3">
          <BookOpen className="text-cyan-400" />
          <h2 className="text-2xl sm:text-3xl font-extrabold gradient-text">Publications</h2>
        </div>
        <div className="fade-divider mt-4" />
      </div>

      <div className="mx-auto max-w-2xl grid sm:grid-cols-1 gap-6 place-items-center">
        {publications.map((p) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.015 }}
            className="glass p-6 w-full neon-hover"
            style={{ boxShadow: '0 0 22px rgba(0,217,255,0.25)' }}
          >
            <h3 className="text-xl font-semibold gradient-text">{p.title}</h3>
            <p className="mt-2 text-white/70 text-sm italic">Authors: {p.authors}</p>
            <div className="fade-divider my-3" />
            <p className="text-white/80 text-sm">Published in: {p.venue}</p>
            <p className="text-white/60 text-sm mt-1">ISSN: {p.issn}</p>
            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center text-cyan-400 hover:underline"
            >
              www.ijrpr.com
            </a>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
