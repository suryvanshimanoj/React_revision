
import React, { useState,useEffect } from 'react'
import Img_func_life from './Img_Func_life';


function Func_Life() {

    const [name, setName] = useState("Tops in study");//single

    // multiple opreator object
    const [data, setData] = useState({
        email: "Tops@gmail.com",
        age: 32,
        number: 1,
        isImage: false
    })

    useEffect(()=>{

        console.log('component DidMount/Update ');//component load

    },[data.number]);




    return (
        <div>
            <h1>Func_Life</h1>
            <hr />

            <button onClick={() => setName('Manoj singh')}>change</button>
            <h1>{name} </h1>

            <hr />

            <button onClick={() => setData({ ...data, email: "Msingh@gmail.com", age: 34 })}>change</button>
            <h1>Hello my Email is:{data.email} ,and my age is:{data.age} </h1>

            <hr />


            <button onClick={() => setData({ ...data, number: data.number + 1 })}>+</button>
            <h1>{data.number} </h1>
            <button onClick={() => setData({ ...data, number: data.number - 1 })}>-</button>



            <hr />
            <button onClick={()=>setData({...data, isImage:false})}>Hide</button>
            <button onClick={()=>setData({...data, isImage:true})}>show</button>
            <button onClick={()=>setData({...data, isImage:!data.isImage})}>Hide/show</button>
            <h1>{data.isImage? <Img_func_life/> : null} </h1>

        </div>
    )
}

export default Func_Life