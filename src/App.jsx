import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './pages/Home'
import {LessonsGrid} from '../src/components/LessonsGrid'
import { Blog } from './pages/blog'

function App() {
  
  return (
    <>
      <Home />
      <LessonsGrid />
      <Blog />
       
    </>
  )
}

export default App
