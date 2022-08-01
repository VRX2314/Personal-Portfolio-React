import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './main.css'
import Top from './components/Top'
import Skills from './components/Skills'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

const App = () => {
  return (
    <>
      <Top />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </>
  )
}

export default App
