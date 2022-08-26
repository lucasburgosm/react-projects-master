import React, {useEffect, useState} from 'react';
import Tour from './Tour';

const Tours = ({tours}) => {
console.log(tours)
let [showTopBtn,setShowTopBtn] = useState(false)  

const restore = ()=>{
  window.location.reload();
}

useEffect(() => {
  window.addEventListener('scroll', () => {
      if (window.scrollY > 25) {
          setShowTopBtn(true);
      } else {
          setShowTopBtn(false);
      }
  });
}, []);

  return( 
  <section>
     <div style={{display:"flex", justifyContent:"flex-end"}}  >
     {showTopBtn ? <button onClick={()=>{ document.documentElement.scrollTop = 0}} id="myBtn" title="Go to top">↑</button> : ""}  
     </div>
    <div className='title'>
      <h2>Ours Tours</h2>
      <div className='underline'></div>
      <button className='btn' onClick={()=>restore()}>Restore</button>
    </div>
      {tours.map((tour)=> {
      return <Tour {...tour} key= {tour.id} /> })}
  </section>
)};

export default Tours;
