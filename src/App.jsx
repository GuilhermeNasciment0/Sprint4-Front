import { useMemo, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Solution from './components/Solution'
import Audience from './components/Audience'
import Gallery from './components/Gallery'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const sessionCode = useMemo(
    () => `JOVI-${Math.floor(1000 + Math.random() * 9000)}`,
    []
  )

  const [contactCount, setContactCount] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('jovistudy_contacts') || '[]').length
    } catch {
      return 0
    }
  })

  return (
    <>
      <Header />
      <main>
        <Hero sessionCode={sessionCode} />
        <Solution />
        <Audience />
        <Gallery />
        <Team />
        <Contact onSent={() => setContactCount((count) => count + 1)} />
      </main>
      <Footer contactCount={contactCount} />
    </>
  )
}
