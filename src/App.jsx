import { useState, createContext } from 'react'

import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

import AnimatedRoutes from './components/AnimatedRoutes'

export const PageContext = createContext()
function App() {
  const [page, setPage] = useState('home')

  return (
    
    <BrowserRouter>
      <PageContext.Provider value={{page,setPage}}>

        <AnimatedRoutes />
      </PageContext.Provider>


    </BrowserRouter>
  )
}

export default App
