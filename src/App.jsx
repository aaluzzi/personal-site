import NavBar from './components/NavBar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Portfolio from './components/sections/Portfolio'
import Connect from './components/sections/Connect'
import Section from './components/sections/Section'
import VisitorCount from './components/VisitorCount'

function App() {


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
        <Section id="connect" className="bg-stone-950">
          <Connect />
        </Section>
        <VisitorCount />
      </div>
    </>
  )
}

export default App
