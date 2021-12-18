import React from 'react';
import { Link } from 'gatsby';

const navbarStyles = {
  backgroundColor: "transparent",
  display: "flex",
  justifyContent: "space-evenly",
  border: "3px white solid",
  width: "80%",
  height: "2em",
  margin: "1em auto",
  fontFamily: "Courier New",
  alignItems: "center",
  boxShadow: "3px 5px rgba(0,0,0, .25)"
}
const logo = {
  margin: "1em auto",
  border: "3px solid white",
  height: "4em",
  width: "30%",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "Courier New",
  boxShadow: "3px 5px rgba(0,0,0, .25)"
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