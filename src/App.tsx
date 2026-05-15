import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Stats } from './components/Stats'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
      </main>
      <Footer />
    </>
  )
}

export default App
