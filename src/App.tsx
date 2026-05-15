import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Stats } from './components/Stats'
import { About } from './components/About'
import { Services } from './components/Services'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
