import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Portfolio from '@/components/Portfolio'
import Principles from '@/components/Principles'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Portfolio />
      <Principles />
      <Contact />
    </main>
  )
}
