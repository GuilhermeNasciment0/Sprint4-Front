import { createContext, useState } from 'react'

export const AuthContext = createContext(null)

const SESSION_KEY = 'jovistudy_session'

// Usuário de demonstração (informar no README)
const DEMO_USER = {
  email: 'admin@jovistudy.com',
  password: 'jovi123',
  name: 'Administrador',
}

function readSession() {
  try {
    return JSON.parse(localStorage.getItem(SESSION_KEY))
  } catch {
    return null
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(readSession)

  function login(email, password) {
    const valid =
      email.trim().toLowerCase() === DEMO_USER.email && password === DEMO_USER.password

    if (!valid) return false

    const session = { email: DEMO_USER.email, name: DEMO_USER.name }
    localStorage.setItem(SESSION_KEY, JSON.stringify(session))
    setUser(session)
    return true
  }

  function logout() {
    localStorage.removeItem(SESSION_KEY)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}