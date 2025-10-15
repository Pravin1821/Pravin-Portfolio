import './index.css'
import AnimatedBackground from './components/AnimatedBackground.jsx'
import Navbar from './components/Navbar.jsx'
import BackToTop from './components/BackToTop.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Skills from './sections/Skills.jsx'
import Projects from './sections/Projects.jsx'
import Education from './sections/Education.jsx'
import Publications from './sections/Publications.jsx'
import Certifications from './sections/Certifications.jsx'
import Contact from './sections/Contact.jsx'

function App() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <BackToTop />
      <main className="space-y-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Publications />
        <Certifications />
        <Contact />
      </main>
      <footer className="container-padded py-12 text-center text-white/50">
        © {new Date().getFullYear()} Pravin S — Crafted with ❤️ using React & Tailwind CSS.
      </footer>
    </>
  )
}

export default App
