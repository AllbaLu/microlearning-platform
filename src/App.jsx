import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './front/pages/Home'
import {LessonsGrid} from '../src/front/components/LessonsGrid'
import { Blog } from './front/pages/blog'
import ChatForm from './front/components/ChatForm'

function App() {
  
  return (
    <>
      <Home />
      <ChatForm />
      <LessonsGrid />
      <Blog />
       
    </>
  )
}

export default App
