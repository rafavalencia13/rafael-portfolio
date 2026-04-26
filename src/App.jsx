import Navbar from './components/Navbar'
import Hero from './components/hero'
import About from './components/About'
import Stack from './components/Stack'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-light-bg text-light-text">
      <Navbar />
      <main className="max-w-6xl mx-auto px-5 sm:px-6 md:px-8 pt-16 md:pt-20">
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App
