import React from 'react'

function Lists(props) {
   
  return (
    <div>
         <h5>{props.text}</h5> 
         <button onClick={()=>{props.onSelect(props.id)}}>delete</button>
     
    </div>
  )
}

export default Lists