import React from 'react'
import "./NavBar.css"
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <>
            <div className='NavBar'>
                <div className='headingOfNavBar'>
                    <h1 data-aos="fade-down">Career Rush</h1>
                    <div className="navicons">
                        <Link data-aos="zoom-in" data-aos-duration="800" className='white ' to="/">Home</Link>
                        <Link data-aos="zoom-in" data-aos-duration="800" className='white' to="/about">About</Link>
                        <Link data-aos="zoom-in" data-aos-duration="800" className='white' to="/contact">Contact</Link>
                    </div>
                </div>

                <div>
                    <Link to="/login"  ><button className='nav-btn'>Login</button> </Link>
                    <Link to="/signup"  ><button className='nav-btn'>Sign up</button> </Link>
                </div >
            </div>
        </>
    )
}

export default NavBar