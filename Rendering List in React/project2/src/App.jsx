import './App.css'
const topDessert = [
  {
  id: "1",
  title: "Tiramisu",
  description: "The best Tiramisu in town",
  price: "$5.50"
  },
  {
    id: "2",
    title: "Lemon Ice Cream",
    description: "Mind blowing taste",
    price: "$4.50"
  },
   {
    id: "3",
    title: "Chocolate mousse",
    description: "Unexpolered flavors",
    price: "$5.50"
  }
]

function App() {
  const dessertItems = topDessert.map(dessert =>{
    const itemsList = `${dessert.title} - ${dessert.price}`
    return <li>{itemsList}</li>
  })
  return (
    <div>
      <ul>
       {dessertItems}
      </ul>
    </div>
  )
}

export default App
