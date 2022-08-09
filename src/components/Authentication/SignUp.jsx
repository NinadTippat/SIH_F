import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../Nav/NavBar'
import "./Login.css"

const SignUp = () => {
    return (
        <>
            <NavBar />
            <div className='login'>
                <form action='' method='POST'>
                    <div data-aos="zoom-in-up" className="form">
                        <div className="title">Welcome</div>
                        <div className="subtitle">Let's create your account!</div>
                        <div className="input-container ic1">
                            <input id="firstname" className="input" type="text" placeholder=" " />
                            <div className="cut"></div>
                            <label htmlFor="firstname" className="placeholder">First name</label>
                        </div>
                        <div className="input-container ic2">
                            <input id="lastname" className="input" type="text" placeholder=" " />
                            <div className="cut"></div>
                            <label htmlFor="lastname" className="placeholder">Last name</label>
                        </div>
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
                        <button type="submit" className="submit">SignUp</button>
                        <p className='alreadyacc'>Already have an account?<Link to="/login">Sign In</Link></p>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SignUp