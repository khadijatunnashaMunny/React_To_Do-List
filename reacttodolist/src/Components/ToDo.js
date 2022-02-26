import React, { useState } from 'react'
import Lists from './Lists';

function ToDo() {
    const[inputList,setInputList]=useState("apple");
    const[items,setItems]=useState([]);

    const inputHandling=(e)=>{
        setInputList(e.target.value);
    }
    const add=()=>{
        setItems((oldItems)=>{
            return [...oldItems,inputList];
        })
        setInputList("");
    }

    const deleteHandler=(id)=>{
        console.log(id);
        setItems((oldItems)=>{
            return oldItems.filter((arrElem,index)=>{
                return index !== id;
            });
        })

    }
  return (
    <div className='ToDoStyle' style={{alignItems:'center',textAlign:'center',marginTop:30}}>
        <h3>ToDo list</h3>
        <div>
            <input type="text" placeholder='enter name' value={inputList} onChange={inputHandling}/>
            <button onClick={add}>Add</button>
        </div>
      <div>
      {items.map((value,index)=>{
            return <Lists key={index} id={index} text={value} onSelect={deleteHandler}/>        
        })
      }
         
      </div>

        </div>
  )
}

export default ToDo