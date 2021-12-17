import React from 'react';
import { Link } from 'gatsby';

const test = {
  backgroundColor: "white",
  justifyContent: "space-evenly"
}

let Nav = () => {
  return (
    <nav>
      <h1>Nick's gatsby site</h1>
      <div className="links" style={test}>
        <Link to="/">Home </Link>
        <Link to="/about">About </Link>
        <Link to="/projects/flashcard">Flashcard </Link>
      </div>
    </nav>
  )
}

export default Nav;