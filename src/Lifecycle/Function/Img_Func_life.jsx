import React, { useEffect } from 'react'

function Img_func_life() {

    useEffect(()=>{
        console.log('component DidMount / Birth');// component load
        return(()=>{console.log('component WillUnmount / Death')});// component unload
    },[]);



  return (
    <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2GyDezz_b4NQBqDX4_SBhXsE9sLRcpczkD-AGMgZCcwnXw8f42TwD0b_Jfpsd8TezRUw&usqp=CAU" alt="" />

    </div>
  )
}

export default Img_func_life