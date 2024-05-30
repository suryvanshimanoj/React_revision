import React,{lazy,Suspense} from 'react'

// withaout lazy loading import
import Hello from './Hello'

// with  lazy loading import
const Morning = lazy (()=> import("./Morning"))


function Main_lazy() {
  return (
    <div className="container mt-5">
        <h1>Main Component</h1>
        <hr />
        <Hello/>
        <Suspense fallback={<div className="spinner-border"></div>}>
            <Morning/>
        </Suspense>

    </div>
  )
}

export default Main_lazy