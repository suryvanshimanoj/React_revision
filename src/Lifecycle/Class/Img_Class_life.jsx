

import React, { Component } from 'react'

export class Img_class_life extends Component {

    //autocall when component load / birth
    componentDidMount(){
        console.log('component DidMount / Birth');
    }


     //autocall when component unload / death
    componentWillUnmount(){
        console.log ('component  WillUnmount / Death');
    }


    
  render() {
    return (
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeAomx3pp_GtXXIfLXwcGQfW_3BnJXrDLx5g&usqp=CAU" alt="" />
      </div>
    )
  }
}

export default Img_class_life