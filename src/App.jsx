import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'

function App() {
  return (
    <>
      <div className="h-[100%] flex flex-col">
        <Header />
        <Hero />
      </div>
      <div className="flex flex-col gap-4 m-auto max-w-[1280px]">
        <About />
        <Portfolio />
      </div>
    </>
  )
}

export default App
