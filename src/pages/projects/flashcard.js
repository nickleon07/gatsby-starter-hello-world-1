import React from 'react';
import Layout from '../components/Layout.js'
import Typist from 'react-typist';

let aboutFlashcard = () => {
  return (
    <Layout>
      <Typist avgTypingDelay={20}>
    <div> This is where I would link some information about my flashcard project</div>
    </Typist>
    </Layout>
  );
}

export default aboutFlashcard;