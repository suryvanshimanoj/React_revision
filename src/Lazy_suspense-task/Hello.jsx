import React,{useEffect} from 'react'

function Hello() {
   
    useEffect(()=>{
        alert('import');
    },[])

  return (
    <div>
        <h1>Hello</h1>
    </div>
  )
}

export default Hello