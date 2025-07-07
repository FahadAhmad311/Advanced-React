import { useState } from 'react'

function App() {
  const [restaurantName, setRestaurantName] = useState("Restaurant name comming, is it Lemon?");

  function updateRestauranName(){
    setRestaurantName("Little Lemon with lime sode");
  }

  return (
   <div>
    <h1>{restaurantName}</h1>
      <button onClick={updateRestauranName}>
            Click to change Restaurant Name
      </button>
   </div>
  )
}

export default App
