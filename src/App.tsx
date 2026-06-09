import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import { useMouseGlow } from './hooks/useMouseGlow';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Activate dynamic follow-cursor glow effect
  useMouseGlow();

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Custom Interactive Spring Cursor */}
            <CustomCursor />

            {/* Background Glow Elements */}
            <div className="mouse-glow-bg" />
            <div className="grid-bg-overlay" />
            <div className="ambient-glow-1" />
            <div className="ambient-glow-2" />

            {/* Navigation Header */}
            <Navbar />

            {/* Main Layout Sections */}
            <main className="relative z-10">
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </main>

            {/* Footer Section */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
