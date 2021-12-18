import React from 'react'
import Layout from './components/Layout.js';
import Typist from 'react-typist';

let aboutStyle = {
  color: "white",
  fontFamily: "Courier New",
}
let about = () => {
  return (
  <Layout>
  <Typist avgTypingDelay={20}>
  <div style={aboutStyle}>Something something darkside, something something the force!
  </div>
</Typist>
  </Layout>
  )
}

export default about;