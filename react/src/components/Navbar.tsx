import {Link} from "react-router-dom"

function Navbar() {
  return (
    <nav>
      <Link to="/">Food Ninja</Link>
      <div>
        <Link to="/"><p>Blog</p></Link>
        <Link to="/about"><p>About</p></Link>
        <Link to="/contact"><p>Contact</p></Link>
      </div>
    </nav>
  )
}

export default Navbar
