import { Link as ScrollLink, Events } from 'react-scroll';
import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'publications', label: 'Publications' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('hero');
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    Events.scrollEvent.register('begin', () => {});
    Events.scrollEvent.register('end', () => {});
    const onScroll = () => {
      const scrollY = window.scrollY;
      setIsTop(scrollY < 10);
      let current = 'hero';
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          current = section.id;
          break;
        }
      }
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  return (
    <div className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 transition-all ${
      isTop ? 'opacity-100 translate-y-0' : 'opacity-95'
    }`}>
      <nav className="glass neon-hover flex items-center gap-4 px-4 sm:px-6 py-2">
        <div className="hidden md:flex items-center gap-1">
          {sections.map((s) => (
            <ScrollLink
              key={s.id}
              to={s.id}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className={`cursor-pointer px-3 py-2 rounded-lg text-sm transition-colors ${
                active === s.id
                  ? 'text-neon-blue'
                  : 'text-white/70 hover:text-white'
              }`}
              onClick={() => setActive(s.id)}
            >
              <span className={active === s.id ? 'neon-text' : ''}>{s.label}</span>
            </ScrollLink>
          ))}
        </div>
        <div className="flex items-center gap-3 ml-1">
          <a className="btn-outline" href="https://github.com/Pravin1821" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a className="btn-outline" href="https://www.linkedin.com/in/pravin-sasikumar-176070297/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a className="btn-outline" href="mailto:pravincriss21@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
      </nav>
    </div>
  );
}
