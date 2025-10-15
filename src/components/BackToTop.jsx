import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-white hover:text-cyan-300 transition-all hover:scale-105"
      style={{ boxShadow: '0 0 18px rgba(0, 217, 255, 0.35)' }}
    >
      <ArrowUp size={18} />
    </button>
  );
}
