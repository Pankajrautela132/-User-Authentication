import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <Link className="link" to="/">Home</Link>
      <br />
      <Link className="link" to="/register">Register</Link>
      <br />
      <Link className="link" to="/login">login</Link>
      <br />

    </nav>
  );
}

export default Navbar;