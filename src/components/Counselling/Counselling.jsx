import React from 'react'
import "../Contact/Contact.css"
import "./Counselling.css"


const Contact = () => {

    const book_appointment = () => {
        window.open("https://booking.appointy.com/CareerRush")
    }

    return (
        <>
            <div className="background">
                <div className="container">
                    <div className="screen">
                        <div className="screen-body">
                            <div className="screen-body-item">
                                <div className="app-form">

                                    <div className="counselling_heading">
                                        <h1>Get in touch with our Expert.</h1>
                                    </div>

                                    <button onClick={() => { book_appointment() }} type='sumbit' className="app-form-button big_btn">Book Now</button>
                                    <div className="app-form-group buttons">
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