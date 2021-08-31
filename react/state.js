// State - Simple Example
import { useState } from 'react'
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
}
