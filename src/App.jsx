import { useState } from 'react'
import Portfolio from './components/Portfolio'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Portfolio />
    </>
  )
}

export default App
