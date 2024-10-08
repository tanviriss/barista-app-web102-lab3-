import { useState } from 'react'
import './App.css'
import BaristaForm from './components/BaristaForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="title-container">
      <h1 className="title">Barista App</h1>
      <p>Practice Your Barista Skills</p>
    </div>
    <BaristaForm/>
    </>
  )
}

export default App
