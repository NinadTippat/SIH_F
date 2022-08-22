import React, { useContext } from "react";
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Login1.css"
import { UserContext } from "../../App";


const Login = () => {

    const { state, dispatch } = useContext(UserContext);

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const loginUser = async (e) => {
        e.preventDefault();
        const res = await fetch("/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });
        // window.localStorage.setItem("isLoggedIn", true)
        const data = res.json();
        if (res.status === 400 || !data) {
            window.alert("Invalid Credentials");
            // setEmail("");
            // setPassword("");
        } else {
            dispatch({ type: "USER", payload: true });
            window.alert("Login sunccess");
            navigate('/')
        }
    };

    return (
        <>
            <div className='login'>
                <div data-aos="zoom-in-down" className="form1">
                    <div className="title">Welcome</div>
                    <div className="subtitle">Login to access</div>

                    <form method='POST'>
                        <div className="input-container ic2">
                            <input id="email" className="input" type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email" />

                        </div>
                        <div className="input-container ic2">
                            <input id="password" className="input" value={password} onChange={(e) => setPassword(e.target.value)} required type="password" placeholder="Password" />

                        </div>
                        <input type="submit" name='login' id='login' value="Log In" onClick={loginUser} className="submit" />
                        <p className='newuser'>New user?<Link to="/signup">Create an account</Link></p>
                    </form>
                </div>

            </div>
        </>
    )
}

export default Login