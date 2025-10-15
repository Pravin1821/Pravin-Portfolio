import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export default function AnimatedBackground() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  if (!ready) return null;

  return (
    <div className="fixed inset-0 -z-10">
      <Particles
        id="bgParticles"
        options={{
          fullScreen: { enable: false },
          background: { color: 'transparent' },
          fpsLimit: 60,
          detectRetina: true,
          particles: {
            number: { value: 45, density: { enable: true, area: 900 } },
            color: { value: '#22d3ee' },
            opacity: { value: 0.25 },
            size: { value: { min: 1, max: 2 } },
            links: { enable: true, color: '#22d3ee', distance: 120, opacity: 0.15, width: 1 },
            move: { enable: true, speed: 0.4, outModes: 'out' },
          },
          interactivity: {
            events: { onHover: { enable: true, mode: 'repulse' }, resize: true },
            modes: { repulse: { distance: 80, duration: 0.4 } },
          },
        }}
      />
    </div>
  );
}
