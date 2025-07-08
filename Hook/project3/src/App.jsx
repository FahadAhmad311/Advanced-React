import { useState } from 'react'

function App() {
  const [greetings, setGreetings] = useState({greet:"Greetings, Fahad Ahmad, How's your day?"})
  console.log(greetings, setGreetings);

  function updateGreeting(){
    setGreetings({greet: "Yah, Today is very blessed day!"})
  }

  return (
          <div>
            <h1>{greetings.greet}</h1>
            <button onClick={updateGreeting}>
              Click to view
            </button>
          </div>
  )
}

export default App
