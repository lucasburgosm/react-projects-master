import React from 'react';
import  data from './Data/data'

function App() {

  return (
    <div className="main">
      <div className='title'> 
        <h1>Proyects</h1>
        <div className='underline'></div>
      </div>
      <div className='webs'>
       <a href={data[0].href}> <img alt='' src= {require('./Data/' + data[0].image + '.png')}></img> 
       </a>   
       <h5>{data[0].title}</h5>
      </div>
      <div className='webs'>
      <a href='https://fantastic-toffee-bd1784.netlify.app/'><img alt='' src= {require('./Data/' + data[0].image + '.png')}></img> </a>   
       <h5>{data[0].title} </h5>
      </div>
    </div>
  );
}

export default App;
