import { ThemeProvider } from './context/ThemeContext';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-slate-950 transition-colors duration-300">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Gallery />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
