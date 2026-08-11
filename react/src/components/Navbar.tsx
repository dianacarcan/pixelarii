import {Link} from "react-router-dom"

function Navbar() {
  return (
    <nav>
      <Link to="/">Food Ninja</Link>
      <div>
        <Link to="/">Blog</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar
