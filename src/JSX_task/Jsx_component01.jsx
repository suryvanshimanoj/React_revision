import React from 'react'

import './style1.css'

function Jsx_component01() {
    const myStyle = <h1>I Love Jsx!</h1>
    const myStyle1 = <h1>I Love Jsx!= {5+5} </h1>
    const myStyle2 = <h1>I Love Jsx!={5*5}</h1>

    const mymultiElement= (
        <ul>
            <li>React Js</li>
            <li>JavaScript</li>
            <li>Jquery</li>
            <li>Css</li>
            <li>Html</li>
        </ul>
    ); 

    const mymultiElement01 = (
        <ol>
            <li>Raj Nagar</li>
            <li>Heet Modh</li>
            <li>Manoj</li>
            <li>Tops Technology</li>
        </ol>
    ); 
    
    const mymultiElement02 = (
        <dl>
            <dt>Manoj</dt>
            <dd>I Live In Gwalior</dd>
        </dl>
    ); 

    const Internal = {color:"blue", backgroundColor:"aqua",textTranform:"uppercase",}
    


  return (
    <div>
        <h1>Jsx_component01</h1>
        {"Raj Nagar / Tops Tech"}
        <hr />
        {myStyle}
        {myStyle1}
        {myStyle2}

        <hr />
        {mymultiElement}
        {mymultiElement01}
        {mymultiElement02}
        <hr />
        <h1>Style in Jsx!</h1>

        <h1 style={{color:"red",backgroundColor:"blue"}}>Inline_css in jsx</h1>
        <hr />
        <h1 style={Internal}>Internal_css in jsx</h1>
        <h1 style={Internal}>Internal_css in jsx</h1>
        <hr />

        <h1 className='mytop'>External_css in jsx</h1>
        <h1 className='mytop'>External_css in jsx</h1>

    </div>
  )
}

export default Jsx_component01