import React from 'react';


const Question = (data) => {

const changeValue = (index)=>{
if(data.value === index){return data.setValue()}
data.setValue(index)
}

const btn = ()=> {
        if(data.value === data.index){return "-"}
        else{return "+"}
}

return  <div className='singleQuestion'> 
         <div className='btnQ'>
          <h4>{data.title} </h4> 
          <button onClick={()=>{changeValue(data.index)}}>{`${btn()}`}</button> 
         </div>
        {data.value === data.index && <p>{data.info} </p>} 
        </div>
}

export default Question;

//       <div className='singleQuestion'> 
//         <div className='btnQ'>
//           <h3>Do i have? </h3> 
//           <button > + </button> 
//         </div>
//         <p>lorem30  lorem30 lorem30lorem30 </p>
//       </div>


