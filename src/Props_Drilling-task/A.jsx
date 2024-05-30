// SOLUTION : useContext / createContext

import React,{useState} from 'react'

import B from './B'

function A() {

    const [number, setNumber] = useState(0);


  return (
    <div className="container mt-5">
        <button onClick={()=>setNumber(number+1)}>+</button>
        <h1>Hi i am A : {number}</h1>
        <B number={number} setNumber={setNumber}/>
    </div>
  )
}

export default A