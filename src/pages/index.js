import React from "react"
import Layout from "./components/Layout.js"
import Typist from "react-typist";

export default function Home() {
  return (
  <Layout>
  <Typist avgTypingDelay={20}>
  <div>Hello world!</div>
  </Typist>
  </Layout>
  );
};
