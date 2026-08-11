import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <Link to="/">Food Ninja</Link>

      <div>
        <Link to="/"><p>Blog</p></Link>
        <Link to="/about"><p>About</p></Link>
        <Link to="/contact"><p>Contact</p></Link>
      </div>

      <div>
        <span>Other ways to reach me:</span>
        <ul style={{ listStyleType: "none" }}>
          <li>Email: hello@foodninja.com</li>
          <li>Twitter: @foodninja</li>
          <li>Instagram: @foodninja.eats</li>
        </ul>
      </div>

      <div>
        <span>© 2026 Food Ninja</span>
      </div>
    </footer>
  );
}

export default Footer;