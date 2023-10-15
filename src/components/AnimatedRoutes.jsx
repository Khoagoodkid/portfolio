import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Contact from '../pages/Contact/Contact'
import Skills from '../pages/Skills/Skills'
import Work from '../pages/Work/Work'
import { AnimatePresence } from 'framer-motion'
export default function AnimatedRoutes() {
    const location = useLocation()
    return (
        <AnimatePresence>

            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/work' element={<Work />} />
                <Route path='/skills' element={<Skills />} />
            </Routes>
        </AnimatePresence>

    )
}
