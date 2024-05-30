import React from 'react'
import Header1 from '../Component/Header1'
import Footer1 from '../Component/Footer1'

function Contact1() {
    return (
        <div>
            <Header1 />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-4">
                        <h2>Contact Us</h2>
                    </div>
                    <form action="/action_page.php">
                        <div className='row'>
                            <div className='col-12 mb-3 mt-3'>
                                <label htmlFor="email" className="form-label">Email:</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="pwd" className="form-label">Password:</label>
                                <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" />
                            </div>
                        </div>
                        <div className="form-check mb-3">
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" name="remember" /> Remember me
                            </label>
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
            <Footer1 />
        </div>

    )
}

export default Contact1