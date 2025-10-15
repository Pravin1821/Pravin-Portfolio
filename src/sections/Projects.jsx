import SectionWrapper from '../components/SectionWrapper.jsx';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Career Guidance Management System (CGMS)',
    duration: 'Jul 2024 – Nov 2024',
    description: 'Developed a full-stack web platform to assist students and job seekers in exploring suitable career paths.',
    stack: ['Java', 'Spring Boot', 'MySQL', 'React'],
    highlights: [
      'Integrated a database-driven recommendation engine to match user skills and interests.',
      'Optimized API performance and query efficiency for scalability.',
      'Implemented a clean UI using React with responsive design.',
    ],
  },
  {
    title: 'Secure Online Transaction System',
    duration: 'Jul 2025 – Present',
    description: 'Built a secure fund transfer and payment platform using Spring Boot and React.',
    stack: ['Spring Boot', 'React', 'MySQL'],
    highlights: [
      'Implemented authentication, authorization, and data encryption.',
      'Designed intuitive UI for seamless user experience.',
      'Added fraud detection and session validation mechanisms.',
    ],
  },
];

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="relative">
      <h2 className="text-2xl sm:text-3xl font-bold text-center gradient-text mb-8">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, idx) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, delay: idx * 0.1 }}
            className="glass neon-border p-6 group [transform-style:preserve-3d] will-change-transform"
            style={{ perspective: 1000 }}
            onMouseMove={(e) => {
              const card = e.currentTarget;
              const rect = card.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              const rotateY = ((x / rect.width) - 0.5) * 6;
              const rotateX = ((y / rect.height) - 0.5) * -6;
              card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'rotateX(0deg) rotateY(0deg)';
            }}
          >
            <header className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-sm text-white/70 mt-1">{p.duration}</p>
              </div>
              <div className="w-2 h-2 rounded-full bg-neon-blue" />
            </header>

            <p className="mt-4 text-white/85">{p.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span key={s} className="text-xs px-2 py-1 rounded-md bg-white/10 border border-white/10">
                  {s}
                </span>
              ))}
            </div>

            <ul className="mt-4 space-y-2 text-white/80 list-disc list-inside">
              {p.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>

            <div className="mt-5">
              <button className="btn-outline neon-hover">View More</button>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
