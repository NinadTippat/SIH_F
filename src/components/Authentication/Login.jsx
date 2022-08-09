import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../Nav/NavBar'
import "./Login1.css"

const Login = () => {
    return (
        <>
            <NavBar />
            <div className='login'>

                <div data-aos="zoom-in-down" className="form1">
                    <div className="title">Welcome</div>
                    <div className="subtitle">Login to access</div>

                    <div className="input-container ic2">
                        <input id="email" className="input" type="email" placeholder=" " />
                        <div className="cut cut-short"></div>
                        <label htmlFor="email" className="placeholder">Email</label>
                    </div>
                    <div className="input-container ic2">
                        <input id="password" className="input" type="password" placeholder=" " />
                        <div className="cut cut-short"></div>
                        <label htmlFor="password" className="placeholder">Password</label>
                    </div>
                    <button type="text" className="submit">Login</button>
                    <p className='newuser'>New user?<Link to="/signup">Create an account</Link></p>
                </div>
            </div>
        </>
    )
}

export default Login