import { Link } from "react-router-dom"

function Nav() {
  return (
    <nav>
      <Link to="/vite-basic/">Home</Link>
      {" | "}
      <Link to="/vite-basic/contact">Contact</Link>
    </nav>
  )
}

export default Nav
