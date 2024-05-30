import React from 'react'
import Header1 from '../Component/Header1'
import Footer1 from '../Component/Footer1'

function About1() {
    return (
        <div>
            <Header1/>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-4">
                        <h2>About Me</h2>
                        <p>Some Bootstrap buttons:</p>
                        <button className='btn btn-primary'>primary</button>{'  '}
                        <button className='btn btn-info'>info</button>

                        
                    </div>
                </div>
            </div>
            <Footer1/>
        </div>

    )
}

export default About1