import React, { useState } from 'react';
import data from './data';
import Review from './Review'

const Reviews = () => {
const people = data;
let [index, setIndex] = useState(0)
 
const backOrFord = (x)=> {
  if(index + x < 0) { return setIndex(index)}
  if(index + x > data.length - 1) { return setIndex(index)}  
    setIndex(index + x)
  }
return <div className='review'>
  {people
       .map((person)=> { return <Review key={person.id}  {...person} ></Review>})
       .splice(index,1)
  }
  <button className='prev-btn' onClick={()=>backOrFord(-1)}> {'<'} </button><button className='next-btn' onClick={()=>backOrFord(1)}> {'>'} </button>
  <div><button className='random-btn' onClick={()=>setIndex(randomNum())}>Random</button></div> 
  </div>;
};

export default Reviews;

const randomNum = ()=> Math.floor(Math.random() * (data.length - 0) ) + 0

