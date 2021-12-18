import React from 'react';
import Nav from './Navbar.js'
import styles from '../styles/global.css';

let contentStyle = {
  width: "70%",
  margin: "auto",
  padding: "15px",
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