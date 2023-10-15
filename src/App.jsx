import { useState, createContext } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import About from './pages/About/About'
import Skills from './pages/Skills/Skills'
import Contact from './pages/Contact/Contact'
import Home from './pages/Home/Home'
import AnimatedRoutes from './components/AnimatedRoutes'

export const PageContext = createContext()
function App() {
  const [page, setPage] = useState(null)

  return (
    
    <BrowserRouter>
      <PageContext.Provider value={{page,setPage}}>

        <AnimatedRoutes />
      </PageContext.Provider>


    </BrowserRouter>
  )
}

export default App
