import { useMemo } from 'react'
import { useOutletContext } from 'react-router-dom'
import Hero from '../components/Hero'
import Solution from '../components/Solution'
import Audience from '../components/Audience'
import Gallery from '../components/Gallery'
import Team from '../components/Team'
import Contact from '../components/Contact'

export default function Home() {
  const { setContactCount } = useOutletContext()

  const sessionCode = useMemo(
    () => `JOVI-${Math.floor(1000 + Math.random() * 9000)}`,
    []
  )

  return (
    <>
      <Hero sessionCode={sessionCode} />
      <Solution />
      <Audience />
      <Gallery />
      <Team />
      <Contact onSent={() => setContactCount((count) => count + 1)} />
    </>
  )
}