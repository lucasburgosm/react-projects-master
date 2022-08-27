import React from 'react';
import Questions from './Questions';
import data from './data'


function App() {

  return <main>
  <div className='container'>   
    <h1 className='mainQuestion'>Questions and answers about login?</h1>
    <Questions data={data} ></Questions>
  </div>
  </main>;
}

export default App;

