import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import ScrollToHash from './ScrollToHash'

function readContactCount() {
  try {
    return JSON.parse(localStorage.getItem('jovistudy_contacts') || '[]').length
  } catch {
    return 0
  }
}

export default function Layout() {
  const [contactCount, setContactCount] = useState(readContactCount)

  return (
    <div className="flex min-h-dvh flex-col">
      <ScrollToHash />
      <Header />
      <main className="flex-1">
        <Outlet context={{ setContactCount }} />
      </main>
      <Footer contactCount={contactCount} />
    </div>
  )
}