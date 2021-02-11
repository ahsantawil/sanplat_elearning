import React from 'react'
import { Footers } from '../../components'

function Login() {
    return (
        <div id="layoutAuthentication" className="bg-info">
            <div id="layoutAuthentication_content">
                <main>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5">
                            <div className="card shadow-lg border-0 rounded-lg mt-5">
                                <div className="card-header">
                                    <figure className="text-center">
                                        <blockquote className="blockquote">
                                            <p>Hello !! Welcome Back</p>
                                        </blockquote>
                                        <figcaption className="blockquote-footer">
                                            You can  <cite title="Source Title">Login Here ..</cite>
                                        </figcaption>
                                    </figure>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <label className="small mb-1" htmlFor="email">Email</label>
                                            <input className="form-control py-4" id="email" name="email" type="email" placeholder="Enter email address"/>
                                        </div>
                                        <div className="form-group">
                                            <label className="small mb-1" htmlFor="password">Password</label>
                                            <input className="form-control py-4" id="password" name="password" type="password" placeholder="Enter password"/>
                                        </div>
                                        <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                                            <a className="small" href="/">Forgot Password? Contact Your Support Team</a>
                                            <a className="btn btn-primary" href="/">Login</a>
                                        </div>
                                    </form>
                                </div>
                                <div className="card-footer text-center">
                                    <div className="small">
                                        <a href="#">Need an account? Contact Your Support Team!</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </main>
            </div>
            <div id="layoutAuthentication_footer">
                <Footers />
            </div>
        </div>

    )
}

export default Login
