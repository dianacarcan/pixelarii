import {Link} from "react-router-dom"

function Footer() {
  return (
    <footer>
      <Link to="/">Food Ninja</Link>
      <div>
        <Link to="/">Blog</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div>
        <span>Other ways to reach me:</span>
        <ul>
          <li>Email: hello@foodninja.com</li>
          <li>Twitter: @foodninja</li>
          <li>Instagram: @foodninja.eats</li>
        </ul>
      </div>
      <div><span>© 2026 Food Ninja</span></div>
    </footer>
  )
}

export default Footer
