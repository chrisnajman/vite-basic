import { useState } from 'react'
import './App.css'
import { Outlet } from "react-router-dom";

import Nav from './components/Nav';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav />
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
     
      <Outlet />

    </>
  )
}

export default App
