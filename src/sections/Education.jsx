import SectionWrapper from '../components/SectionWrapper.jsx';
import { motion } from 'framer-motion';

const items = [
  {
    institution: 'Sri Shakthi Institute of Engineering and Technology, Coimbatore',
    degree: 'B.Tech in Information Technology',
    duration: 'Sept 2023 – May 2027',
    extra: 'CGPA: 8.25 / 10 • Active in technical clubs and workshops.',
  },
  {
    institution: 'Vaigai Matric Higher Secondary School, Salem, Tamil Nadu',
    degree: 'HSC (Higher Secondary Certificate)',
    duration: 'Year of Completion: 2023',
    extra: 'Percentage: 80% • Focused on  Physics, Chemistry, and Mathematics.',
  },
  {
    institution: 'St. Mary’s Higher Secondary School, Salem, Tamil Nadu',
    degree: 'SSLC (Secondary School Leaving Certificate)',
    duration: 'Year of Completion: 2021',
    extra: 'Result: 100% Pass',
  },
];

export default function Education() {
  return (
    <SectionWrapper id="education" className="relative">
      {/* animated neon background accents */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 left-1/4 w-[120px] h-[520px] rotate-12 bg-gradient-to-b from-cyan-500/20 to-transparent blur-3xl" />
        <div className="absolute top-10 right-10 w-[100px] h-[460px] -rotate-12 bg-gradient-to-b from-purple-600/20 to-transparent blur-3xl" />
      </div>

      <h2 className="text-center text-3xl sm:text-4xl font-extrabold gradient-text mb-10">Education</h2>

      <div className="relative mx-auto max-w-4xl">
        {/* vertical timeline line */}
        <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/10 via-cyan-500/40 to-white/10" />

        <div className="space-y-8 sm:space-y-12">
          {items.map((it, idx) => (
            <motion.div
              key={it.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative flex sm:items-center ${idx % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'}`}
            >
              {/* connector dot */}
              <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(0,217,255,0.9)]" />

              <div className={`mt-6 sm:mt-0 sm:max-w-[48%] ${idx % 2 === 0 ? 'sm:ml-10' : 'sm:mr-10'}`}>
                <motion.article
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                  className="glass p-5 sm:p-6"
                  style={{ boxShadow: '0 0 22px rgba(124,58,237,0.35)' }}
                >
                  <h3 className="text-lg sm:text-xl font-semibold gradient-text">{it.institution}</h3>
                  <p className="text-white/70 text-sm mt-1">{it.duration}</p>
                  <p className="text-white/80 mt-2">{it.degree}</p>
                  <p className="text-white/70 mt-2 text-sm">{it.extra}</p>
                </motion.article>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
