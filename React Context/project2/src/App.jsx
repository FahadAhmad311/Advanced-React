import './App.css'
import { useTheme } from './ThemeContext'

function App() {
  const {theme, toggleTheme} = useTheme()
  return (
   <label className='switch'>
    <input type="checkbox" 
    checked = {theme === "light"}
    onChange={toggleTheme} />
    <span className='slider round'></span>
    <h2> Current theme {theme}</h2>
   </label>
  )
}

export default App
