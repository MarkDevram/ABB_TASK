import React from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">
      <Link to="/">Genix Auctions</Link>
    </div>
    <div className="nav-links">
      <Link to="/">Auctions</Link>
      <Link to="/">Bidding</Link>
      <Link to="/">About</Link>
      <Link to="/">English</Link>
      <Link to="/login">Login</Link>
      <button className="get-started">Get Started</button>
    </div>
  </nav>
)

export default Navbar
