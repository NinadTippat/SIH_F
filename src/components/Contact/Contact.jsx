import React, { useState, useEffect } from 'react'
import "./Contact.css"


const Contact = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const userContact = async () => {
        try {
            const res = await fetch("/getData", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const data = await res.json();
            // console.log(data);
            setUser({
                ...user,
                name: data.name,
                email: data.email,
                phone: data.phone,
            });

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (err) { }
    };

    useEffect(() => {
        userContact();
    }, []);

    const handleInputs = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUser({ ...user, [name]: value });
    };
    //send data to backend
    const contactForm = async (e) => {
        e.preventDefault();
        const { name, email, phone, message } = user;
        const res = await fetch("/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                phone,
                message,
            }),
        });

        const data = await res.json();
        if (!data) {
            console.log("message not send");
        } else {
            alert("Message send");
            setUser({ ...user, message: "" });
        }
    };
    return (
        <>
            <div className='contact'>
                <div className="background">
                    <div className="container">
                        <div className="screen">
                            <div className="screen-header">
                                <div className="screen-header-left">
                                    <div className="screen-header-button close"></div>
                                    <div className="screen-header-button maximize"></div>
                                    <div className="screen-header-button minimize"></div>
                                </div>
                                <div className="screen-header-right">
                                    <div className="screen-header-ellipsis"></div>
                                    <div className="screen-header-ellipsis"></div>
                                    <div className="screen-header-ellipsis"></div>
                                </div>
                            </div>
                            <div className="screen-body">
                                <div className="screen-body-item left">
                                    <div className="app-title">
                                        <span>CONTACT US</span>
                                    </div>
                                    <div className="app-contact">CONTACT INFO : 9373000736</div>
                                </div>
                                <div className="screen-body-item">
                                    <div className="app-form">
                                        {/* <div className="app-form-group">
                                            <input className="app-form-control" type="text" placeholder="NAME" />
                                        </div> */}
                                        <form className="app-form-group" method="POST" onSubmit={contactForm}>
                                            <div className="user-box">
                                                <input
                                                    className="app-form-control"
                                                    type="name"
                                                    name="name"
                                                    required
                                                    value={user.name}
                                                    onChange={handleInputs}
                                                    placeholder="name"
                                                />
                                                {/* <label>Your Name</label> */}
                                            </div>
                                            <div className="user-box">
                                                <input
                                                    className="app-form-control"
                                                    type="email"
                                                    name="email"
                                                    required
                                                    value={user.email}
                                                    onChange={handleInputs}
                                                    placeholder="email"
                                                />
                                                {/* <label>Your Email</label> */}
                                            </div>

                                            <div className="user-box">
                                                <input
                                                    className="app-form-control"
                                                    type="text"
                                                    name="phone"
                                                    required
                                                    value={user.phone}
                                                    onChange={handleInputs}
                                                    placeholder="phone"
                                                />
                                                {/* <label>Your Number</label> */}
                                            </div>

                                            <div className="user-box">
                                                <textarea
                                                    className="app-form-control"
                                                    onChange={handleInputs}
                                                    placeholder="Any Query"
                                                    value={user.message}
                                                    name="message"
                                                    cols="30"
                                                    rows="10"
                                                    required
                                                ></textarea>
                                            </div>

                                            <button className="app-form-button">CANCEL</button>
                                            <button type='sumbit' className="app-form-button">SEND</button>
                                        </form>
                                        <div className="app-form-group buttons">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact