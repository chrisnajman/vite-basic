import { useState } from 'react'
import './App.css'

import { Outlet, Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <nav>
        <Link to="/vite-basic/">Home</Link>
        {" | "}
        <Link to="/vite-basic/contact">Contact</Link>
      </nav>
      <Outlet />

    </>
  )
}

export default App
