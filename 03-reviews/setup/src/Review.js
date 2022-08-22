import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import React, { useState } from 'react';

const Review = (props) => {
const {image, name, job, text} = props;


console.log(props);
    return <div>
     <div className='img-container' > 
       <img src={image} alt={name} className='person-img' ></img>
       <span className='quote-icon'><FaQuoteRight/></span>
     </div>
     <h5 className='author'>{name}</h5>
     <h5 className='job'>{job}</h5>
     <p className='info'>{text} </p>
     
    </div>;
  };
  
  export default Review;