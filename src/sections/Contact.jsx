import { useState } from 'react';
import SectionWrapper from '../components/SectionWrapper.jsx';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  const [result, setResult] = useState('');
  const WEB3FORMS_KEY = '47da29d6-4675-47b5-ba08-7648b62db0c2';
  console.log('Loaded Web3Forms key:', WEB3FORMS_KEY ? '✅ Loaded' : '❌ Missing');
  console.log(WEB3FORMS_KEY);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending...');
    const formData = new FormData(event.target);
    formData.append('access_key', WEB3FORMS_KEY);
    formData.append('subject', 'New message from portfolio contact form');
    formData.append('from_name', 'Portfolio Website');
    const replyEmail = formData.get('email');
    if (replyEmail) formData.append('replyto', String(replyEmail));

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setResult('Message sent successfully ✅');
        event.target.reset();
      } else {
        setResult(`❌ ${data.message || 'Failed to send message. Please try again!'}`);
      }
    } catch (err) {
      setResult('❌ Network error. Please check your connection and try again.');
    }
  };

  return (
    <SectionWrapper id="contact" className="relative">
      {/* moving gradient background accents */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 left-1/3 w-[120px] h-[520px] rotate-12 bg-gradient-to-b from-cyan-500/15 to-transparent blur-3xl" />
        <div className="absolute top-16 right-1/4 w-[120px] h-[520px] -rotate-12 bg-gradient-to-b from-purple-600/15 to-transparent blur-3xl" />
      </div>

      <div className="text-center mb-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold gradient-text">Contact</h2>
        <div className="fade-divider mt-4" />
      </div>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="text-center text-white/80 max-w-2xl mx-auto"
      >
        Let’s build something amazing together! Feel free to reach out for collaborations, projects, or just a friendly chat.
      </motion.p>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="max-w-md mx-auto mt-8 p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10"
        onSubmit={handleSubmit}
      >
        <div className="grid gap-4">
          {/* Honeypot field (hidden) to reduce spam) */}
          <input type="checkbox" name="botcheck" className="hidden" tabIndex="-1" autoComplete="off" />
          <div>
            <label className="block text-gray-300 mb-2">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full bg-transparent border border-white/20 rounded-md px-4 py-2 text-white placeholder-gray-400 focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(0,255,255,0.5)] transition"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full bg-transparent border border-white/20 rounded-md px-4 py-2 text-white placeholder-gray-400 focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(0,255,255,0.5)] transition"
              placeholder="Your Email"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full bg-transparent border border-white/20 rounded-md px-4 py-2 text-white placeholder-gray-400 focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(0,255,255,0.5)] transition"
              placeholder="Your Message"
            />
          </div>

          <button
            type="submit"
            className="mt-2 w-full py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold shadow-[0_0_20px_rgba(0,255,255,0.4)] hover:shadow-[0_0_30px_rgba(0,255,255,0.6)] transition-transform hover:scale-105"
          >
            Send Message
          </button>

          {result && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className={`text-center mt-4 text-sm ${
                result.includes('✅')
                  ? 'text-green-400 drop-shadow-[0_0_10px_#22c55e]'
                  : 'text-red-400 drop-shadow-[0_0_10px_#f87171]'
              }`}
            >
              {result}
            </motion.p>
          )}
        </div>
      </motion.form>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-8 flex items-center justify-center gap-4"
      >
        <a href="https://www.linkedin.com/in/pravin-sasikumar" target="_blank" rel="noreferrer" className="btn-outline neon-hover"><Linkedin /></a>
        <a href="https://github.com/Pravin1821" target="_blank" rel="noreferrer" className="btn-outline neon-hover"><Github /></a>
        <a href="mailto:pravincriss21@gmail.com" className="btn-outline neon-hover"><Mail /></a>
      </motion.div>
    </SectionWrapper>
  );
}
