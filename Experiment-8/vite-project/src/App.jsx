import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <div className="card">
        <h1>React Counter</h1>
        <h2>Application</h2>
        <div className="count-display">{count}</div>
        <div className="buttons">
          <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
            Increment (+)
          </button>
          <button className="btn btn-primary" onClick={() => setCount(count - 1)}>
            Decrement (-)
          </button>
        </div>
        <button className="btn btn-primary btn-reset" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default App
