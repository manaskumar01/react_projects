import { useState } from 'react'
import './App.css'
import Home from './components/Home/Home'
import Headers from './components/Header/Header'
import Footer from './components/Footer/Footer'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Headers />
      <Home />
      <Footer />
    </>
  )
}
