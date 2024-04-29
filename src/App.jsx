import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Connect from './components/Connect'

function App() {
  return (
    <>
      <div className="h-[100%] flex flex-col">
        <Header />
        <Hero />
      </div>
      <div className="pb-8 flex flex-col m-auto max-w-[1280px]">
        <About />
        <Portfolio />
        <Connect />
      </div>
    </>
  )
}

export default App
