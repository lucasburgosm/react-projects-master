import React, { useState } from 'react';

const Tour = (props) => {
let [showMore, setShowMore] = useState(false)
let [displayTrue,setDisplayTrue] = useState("")  



  return(
   <article className='single-tour' style={{display:`${displayTrue}`}}>
    <img src={props.image} alt={props.name} ></img>
    <footer>
      <h4>{props.name}  {" "}
          <button className='single-tour button'> {props.price}</button> </h4>
    <p>{showMore ? props.info : props.info.substring(0,100)} <button onClick={()=> setShowMore(!showMore)}>Show {showMore ? "less" : "more"} </button></p>    
    <button className='single-tour delete-btn'  onClick={()=>{setDisplayTrue("none")}}>Not interest</button>
    </footer>  
  </article>  
)};

export default Tour;
