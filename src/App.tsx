import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [viewport, setViewport] = useState({ w: 0, h: 0 })

  useEffect(() => {
    if (window) {
      setViewport({
        w: window.innerWidth,
        h: window.innerHeight
      })
    }
  }, [])

  return (
    <div>{viewport.w} x {viewport.h}</div>
  )
}

export default App
