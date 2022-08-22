import { React, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css"

const SignUp = () => {

    const navigate = useNavigate();
    //now user store all this key and value
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        cpassword: "",
    });

    let name, value;
    const handleInputs = (e) => {
        value = e.target.value;
        name = e.target.name;

        //use sperad operator to store
        setUser({ ...user, [name]: value }); ///get all data dynamically
    };

    //connect frontend to backend with async await
    const PostData = async (e) => {
        e.preventDefault();
        // object destructuring avoud user.name,user.email
        const { name, email, phone, password, cpassword } = user;

        const res = await fetch("/register", {
            //this is same as postman
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },

            //server does'nt understand json so we convert it into string and then pass
            body: JSON.stringify({
                name,
                email,
                phone,
                password,
                cpassword,
            }),
        });

        //then check the res we get it perfect or not
        const data = await res.json();
        if (res.status === 422 || !data) {
            window.alert("Invalid registration");
            console.log("Invalid registration");
        } else {
            window.alert("success registration");
            console.log("success registration");
            navigate("/login");
        }
    };

    return (
        <>
            <div className='signup'>
                <form method="POST" className='form' onSubmit={PostData}>
                    {/* <form method='POST' id='register-form' data-aos="zoom-in-up" className="form" onClick={PostData}> */}
                    <div className="title">Welcome</div>
                    <div className="subtitle">Let's create your account!</div>

                    {/* <div className="input-container ic1">
                        <input type="text" name='name' id='name' value={user.name} onChange={handleInputs} placeholder="name" className="input" required />
                    </div> */}

                    <div className="input-container ic1">
                        <input className="input"
                            placeholder='Name'
                            type="text"
                            name="name"
                            required
                            value={user.name}
                            onChange={handleInputs}
                        />
                    </div>


                    <div className="input-container ic2"> <input placeholder='Email'
                        className="input"
                        type="email"
                        name="email"
                        required
                        value={user.email}
                        onChange={handleInputs}
                    />
                    </div>
                    <div className="input-container ic2"> <input className="input" placeholder='Phone'
                        type="number"
                        name="phone"
                        required
                        value={user.phone}
                        onChange={handleInputs}
                    />
                    </div>

                    <div className="input-container ic2"> <input className="input" placeholder='Password'
                        type="password"
                        name="password"
                        required
                        value={user.password}
                        onChange={handleInputs}
                    />
                    </div>
                    <div className="input-container ic2"> <input className="input" placeholder='Confirm Password'
                        type="password"
                        name="cpassword"
                        required
                        value={user.cpassword}
                        onChange={handleInputs}
                    />
                    </div>
                    <input type="submit" name="signup" id="signup" value="register"
                        className="submit" />
                    <p className='alreadyacc'>Already have an account?<Link to="/login">Sign In</Link></p>

                </form >
            </div>
        </>
    )
}

export default SignUp