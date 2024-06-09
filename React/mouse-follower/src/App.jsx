import { useEffect, useState } from 'react'
import './App.css'

function App () {
  const [button, setButton] = useState(true)
  useEffect(() => {
    console.log('efecto')
  }, [button])
  return (
    <>
      <button onClick={() => { setButton(!button) }} />
      <h1>This is an h1 that was rite with VIM</h1>
    </>
  )
}

export default App
