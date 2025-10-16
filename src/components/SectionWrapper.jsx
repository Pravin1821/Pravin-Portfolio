import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function SectionWrapper({ id, children, className = '' }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['-10% 80%', '30% 10%'] });
  const y = useTransform(scrollYProgress, [0, 1], [30, -20]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);

  return (
    <section id={id} ref={ref} className={`section-padding container-padded relative ${className}`}>
      <motion.div style={{ y, opacity }}>
        {children}
      </motion.div>
    </section>
  );
}
