import React,{useState, createContext} from 'react'
import B from './B'

export const DataContext=createContext();

function A() {

  const [number, setNumber]=useState(0);
  return (
    <div>
       <DataContext.Provider value={{number, setNumber}}>
            <button onClick={()=>setNumber(number+1)} >+</button>
            <h1>Hi i am A: {number}</h1>
            <B number={number} setNumber={setNumber} />
        </DataContext.Provider>
    </div>
  )
}

export default A