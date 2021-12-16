import React from 'react';
import { Link } from 'gatsby';

let Nav = () => {
  return (
    <nav>
      <h1>Nick's gatsby site</h1>
      <div className="links">
        <Link to="/">Home </Link>

        <Link to="/about">About </Link>

        <Link to="/projects/flashcard">Flashcard </Link>
      </div>
    </nav>
  )
}

export default Nav;