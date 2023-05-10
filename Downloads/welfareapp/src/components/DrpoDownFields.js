import React, { useState } from 'react'

function DrpoDownFields() {
    const[selectedFields,setselectedFields]=useState([]);
    const handlerchage=(event)=>{
const{value}=event.target;
setselectedFields(value.split(','));

    };
    const genratepage=()=>{

    };
  return (
    <div>
      <select multiple={true} onChange={handlerchage}>
        <option value="name1 ,name2">name1 and name2</option>
        <option value="name3 ,name4">name3 and name4</option>
        <option value="name5 ,name6">name5 and name6</option>
        <option value="name1 ,name2">name1 and name2</option>
        <option value="name3 ,name4">name3 and name4</option>
        <option value="name5 ,name6">name5 and name6</option>
        <option value="name1 ,name2">name1 and name2</option>
        <option value="name3 ,name4">name3 and name4</option>
        <option value="name5 ,name6">name5 and name6</option>
        <option value="name1 ,name2">name1 and name2</option>
        <option value="name3 ,name4">name3 and name4</option>
        <option value="name5 ,name6">name5 and name6</option>

      </select>
      <button onClick={genratepage}>genratepage</button>
    </div>
  );
}

export default DrpoDownFields
