import { useState } from 'react'

/*
function App() {
  
const  restaurantName = useState("Lemon");
console.log(restaurantName);
  return (
    null
  )
}

export default App
*/
export default function App(){
  const [restaurantName, setRestaurantName] = useState('Lemon');
  return(
    <div>
      <h1>{restaurantName}</h1>
    </div>
  )
}