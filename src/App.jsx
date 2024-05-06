import Header from './components/Header'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Portfolio from './components/sections/Portfolio'
import Connect from './components/sections/Connect'
import Section from './components/sections/Section'

function App() {
  return (
    <>
      <div className="h-[100%] flex flex-col">
        <Header />
        <Hero />
      </div>
      <div className="m-auto">
        <Section id="about-me" className="bg-stone-950">
          <About />
        </Section>
        <Section id="portfolio" className="bg-sky-950">
          <Portfolio />
        </Section>
        <Section id="connect" className="bg-stone-950">
          <Connect />
        </Section>
      </div>
    </>
  )
}

export default App
