import React, { useState, useEffect, useRef } from 'react'

function Useref() {

    const [inputvalue, setInputvalue] = useState("");

    const count = useRef(0);

    useEffect(()=>{
        count.current = count.current + 1;
    });


    return (
        <div>
            <input 
             type="text" 
             value={inputvalue}
             onChange={(e)=> setInputvalue(e.target.value)} />

             <h1>Render count : {count.current}</h1>
        </div>
    )
}

export default Useref