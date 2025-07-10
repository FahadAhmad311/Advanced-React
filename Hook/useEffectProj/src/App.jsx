import { useState } from 'react'
import { useEffect } from 'react'

function App() {
  const [toggle, setToggle] = useState(false)
  const clickHandler = () => {
    setToggle(!toggle)
  }

  useEffect(() =>{
    document.title = toggle ? "Welcome to Little Lemmon" : "Using the useEffect hook"
  }, [toggle])
  return (
    <div>
      <h1>Using the Use Hook Effect</h1>
      <button onClick={clickHandler}>Toggle Message</button>
      {toggle && <h2>Welcome to Little Lemon</h2>}
    </div>
  )
}

export default App
