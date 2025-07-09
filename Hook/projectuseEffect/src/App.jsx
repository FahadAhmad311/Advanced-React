import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  
  useEffect(() => {
    console.log('Component mounted!');
  }, []);

  
  useEffect(() => {
    console.log(`Count changed to: ${count}`);
  }, [count]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>React useEffect Example</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>
    </div>
  );
}

export default App;
