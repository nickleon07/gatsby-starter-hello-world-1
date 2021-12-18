import React from 'react';
import { Link } from 'gatsby';

const navbarStyles = {
  backgroundColor: "transparent",
  display: "flex",
  justifyContent: "space-evenly",
  width: "80%",
  height: "2em",
  margin: "1em auto",
  alignItems: "center",
}
const logo = {
  margin: "1em auto",
  height: "4em",
  width: "30%",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}
let Nav = () => {
  return (
    <nav>
      <h1 style={logo}>Nick's Gatsby Site</h1>
      <div className="links" style={navbarStyles}>
        <Link to="/">Home </Link>
        <Link to="/about">About </Link>
        <Link to="/projects/flashcard">Flashcard </Link>
      </div>
    </nav>
  )
}

export default Nav;