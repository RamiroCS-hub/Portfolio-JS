import { useEffect, useState } from 'react'
import './App.css'

function App () {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    console.log('enabled: ', enabled)
    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log('HandleMove:', { clientX, clientY })
      setPosition({ x: clientX, y: clientY })
      console.log(position)
    }
    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])
  return (
    <>
      <button onClick={() => { setEnabled(!enabled) }}>{enabled ? 'Desactivar seguimiento' : 'Activar seguimiento'}</button>
      <div style={{
        width: '80px',
        height: '80px',
        pointerEvents: 'none',
        borderRadius: '100px',
        transition: '.05s',
        position: 'absolute',
        transform: `translate(${position.x}px, ${position.y}px)`,
        top: 0,
        left: 0,
        backgroundColor: 'red'
      }}
      />
    </>
  )
}

export default App
