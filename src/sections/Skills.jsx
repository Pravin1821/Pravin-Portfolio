import SectionWrapper from '../components/SectionWrapper.jsx';
import { motion } from 'framer-motion';
import { 
  SiJavascript, SiHtml5, SiCss3, SiReact, SiSpringboot,
  SiMysql, SiMongodb, SiGit, SiPostman
} from 'react-icons/si';
import { FaProjectDiagram, FaJava } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';

const categories = [
  {
    title: 'Programming Languages',
    items: [
      { name: 'Java', icon: FaJava },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'HTML', icon: SiHtml5 },
      { name: 'CSS', icon: SiCss3 },
    ],
  },
  {
    title: 'Frameworks',
    items: [
      { name: 'React', icon: SiReact },
      { name: 'Spring Boot', icon: SiSpringboot },
    ],
  },
  {
    title: 'Database and API',
    items: [
      { name: 'MySQL', icon: SiMysql },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'REST APIs', icon: FaProjectDiagram },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git', icon: SiGit },
      { name: 'VS Code', icon: VscCode },
      { name: 'Postman', icon: SiPostman },
      { name: 'Cursor AI', icon: VscCode },
    ],
  },
  {
    title: 'Concepts',
    items: [
      { name: 'Data Structures & Algorithms (DSA)', icon: FaProjectDiagram },
      { name: 'Agile Methodology', icon: FaProjectDiagram },
    ],
  },
];

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="relative">
      <h2 className="text-2xl sm:text-3xl font-bold text-center gradient-text mb-8">Technical Skills</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, idx) => (
          <motion.section
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="glass p-5"
          >
            <div className="mb-4 px-3 py-2 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
              <h3 className="font-semibold text-white/90">{cat.title}</h3>
              <div className="w-2 h-2 rounded-full bg-neon-blue" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {cat.items.map((it, i) => {
                const Icon = it.icon;
                return (
                  <motion.div
                    key={it.name}
                    initial={{ opacity: 0, rotateY: -8 }}
                    whileInView={{ opacity: 1, rotateY: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="neon-hover neon-border rounded-xl px-3 py-3 flex items-center gap-2 bg-white/5 border border-white/10"
                  >
                    <Icon className="text-neon-blue" />
                    <span className="text-sm text-white/90">{it.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>
        ))}
      </div>
    </SectionWrapper>
  );
}
