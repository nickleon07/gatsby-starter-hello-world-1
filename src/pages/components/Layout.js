import React from 'react';
import Nav from './Navbar.js'
import styles from '../styles/global.css';

let contentStyle = {
  width: "70%",
  margin: "auto",
  border: "3px white solid",
  padding: "15px",
  boxShadow: "3px 5px rgba(0,0,0, .25)"
}

let Layout = ({ children }) => {
  return (
      <div className="layout">
        <Nav />
        <div className="content" style={ contentStyle }>
          { children }
        </div>
      </div>
  )
}

export default Layout;