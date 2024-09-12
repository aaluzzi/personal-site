import { useEffect } from 'react'

import NavBar from './components/NavBar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Portfolio from './components/sections/Portfolio'
import Contact from './components/sections/Contact'
import Section from './components/sections/Section'
import Footer from './components/sections/Footer'

function App() {
  const generateUniqueId = () => {
    return `${Date.now()}-${Math.floor(Math.random() * 1000)}`;
  };

  const trackViewer = async (visitorId) => {
    try {
      const resp = await fetch('https://dl0fe78v6j.execute-api.us-west-1.amazonaws.com/insert-visitor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ visitor_id: visitorId }),
      });
      console.log(resp)
    } catch (error) {
      console.error('Error tracking visitor:', error);
    }
  };

  useEffect(() => {
    const existingId = localStorage.getItem('visitor_id');
    if (!existingId) {
      const newId = generateUniqueId();
      localStorage.setItem('visitor_id', newId);
      trackViewer(newId);
    }
  }, []);
  
  return (
    <>
      <div className="h-svh flex flex-col">
        <NavBar />
        <Hero />
      </div>
      <div className="m-auto">
        <Section id="about-me" className="bg-stone-950">
          <About />
        </Section>
        <Section id="skills" className="bg-sky-950 -mb-16">
          <Skills />
        </Section>
        <Section id="portfolio" className="bg-sky-950">
          <Portfolio />
        </Section>
        <Section id="contact" className="bg-stone-950">
          <Contact />
        </Section>
        <Footer />
      </div>
    </>
  )
}

export default App
