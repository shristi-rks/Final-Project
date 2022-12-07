import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar">
    <h1> MIND MATTERS</h1>
    <div className="links">
      <Link to="/">Home</Link>
      <Link to="/about">About Us!</Link>
      <Link to="/helper-profile"> Helper Profile</Link> 
      <Link to="/login">Login</Link>
    </div>
  </nav>
  )
}

export default Navbar