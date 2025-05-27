
import './App.css'
import { UserProvider, useUser } from './UserContext'

const LoggedInUser = () => {
  const {user} = useUser();
  return (
    <p>
      Greetings!, <span className='UserName'>{user.name}</span>
    </p>
  )
}

const Header = () =>{
  return (
    <header>
      <h2>Blog App</h2>
      <LoggedInUser/>
    </header>
  )
}
const Page = () => {
  const {user} = useUser()
  return (
   <div>
    <h2> Blog Writing </h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt saepe possimus laborum!
       Sed nihil nobis voluptates vitae! Ipsa quis obcaecati sed eaque,
       dolor iste mollitia labore, et, sapiente placeat facilis.</p>
       <p>Written by {user.name}</p>
   </div>
  )
}

function App() {
 
  return (
   <div className='App'>
        <Header/>
        <Page/>
   </div>
  )
}


function Root() {
  return <UserProvider>
    <App/>
  </UserProvider>
}

export default Root;