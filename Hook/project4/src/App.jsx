import { useState } from 'react'

function App() {
        const [greetings, setGreetings] = useState({
          greet: "Greetings",
          place: "Pakistan"
        })
        console.log(greetings,setGreetings);
 function updateGreeting(){
  setGreetings(prevState => {
    return {...prevState, place: "Kohat"}
  })
 }      
  return (
        <div>
          <h1>{greetings.greet}, {greetings.place}</h1>
          <button onClick={updateGreeting}>Click</button>
        </div>
  )
}

export default App
