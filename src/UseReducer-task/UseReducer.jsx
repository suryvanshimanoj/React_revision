import React, { useReducer } from 'react'

function UseReducer() {

    // object state
    const initialState = {
        number: 1,
        name: "Manoj Singh"
    };

    // Function

    const reducer = (object, action) =>{

        if (action.type=="CHANGE") 
        {
            return {...object,name:"Raghav singh"}
        }
    
        if (action.type=="PLUS") 
        {
            return {...object,name:object.number+1}
        }
    
        if (action.type=="MINUS") 
        {
            return {...object,name:object.number-1}
        }
    }
    
    const [getstate, dispatch]= useReducer(reducer, initialState);
    return (
        <div className="container mt-5">

            <button onClick={() => dispatch({ type: "CHANGE" })}>Change</button>
            <h1>{getstate.name}</h1>
            <hr />

            <button onClick={() => dispatch({ type: "PLUS" })}>+</button>
            <h1>{getstate.number}</h1>
            <button onClick={() => dispatch({ type: "MINUS" })}>-</button>
        </div>
    )
}

export default UseReducer