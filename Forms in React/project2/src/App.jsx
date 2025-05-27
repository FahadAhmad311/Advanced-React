import { use, useState } from 'react'
import './App.css'

function App() {
  const [score, setScore] = useState("10");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(Number(score) <= 5 && comment.length <= 10){
      alert("Please provide a full comment");
      return;
    }
      console.log("Form Submitted");
      setComment("");
    setScore("10");  }

  return (
      <div className='App'>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <h2>Feedback form</h2>
            <div className='field'>
              <label>Score: </label>
              <input type="range"
              min= "0"
              max={10}
              value={score}
              onChange={e => setScore(e.target.value)} />
            </div>
            <div className='comment'>
              <label>
                Comment
              </label>
              <textarea/>
            </div>
            <button type='submit'>Submit</button>
          </fieldset>
        </form>
      </div>
  )
}

export default App
