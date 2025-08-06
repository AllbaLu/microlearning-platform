import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './front/pages/Home'
import {LessonsGrid} from '../src/front/components/LessonsGrid'
import { Blog } from './front/pages/blog'

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
