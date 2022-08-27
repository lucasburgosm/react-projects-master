import React, { useState} from 'react';
import Question from './Question';



const Questions = ({data}) => {
const [value, setValue] = useState(2)


return <div className='questionary'>
        {data.map((obj,index)=>{
            return <Question {...obj} key={index} index={index} value ={value} setValue={setValue} ></Question>         
        })} 
       </div>
 }


export default Questions;
