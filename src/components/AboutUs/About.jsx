import React from 'react'
import NavBar from '../Nav/NavBar'
import "./About.css"
import Chat from '../Chatbot/Chat'
import Engineer from "../assets/engineer.png";
import "./MediaServices.css";
import "../assets/Constants/Fonts.css";
import "../assets/Constants/Fonts.css";
import Footer3 from '../Footers/Footer3/Footer3';


const About = () => {
    return (
        <>
            <div className='about'>
                <div className="services_title">
                    <div className="services_titile_horizantal_line" />
                    <h1>About Us</h1>
                </div>
                <div className="services_title_all">
                    <p>Finding your passion is key to success</p>
                </div>
                <h2 className="services_title sub_heading">Project Mentor</h2>
                <div data-aos="fade-up"
                    data-aos-duration="1000" className="Services_box">
                    <div className="Services_box_inner">
                        <img src={Engineer} alt="Tools" />
                        <h1>
                            Deepali Awasekar
                        </h1>
                    </div>
                </div>

                <h2 className="services_title sub_heading">Counsellors</h2>

                <div data-aos="fade-up"
                    data-aos-duration="1000" className="Services_box">
                    <div className="Services_box_inner">
                        <img src={Engineer} alt="Tools" />
                        <h1>
                            Counsellor 1</h1>
                    </div>

                    <div className="Services_box_inner">
                        <img src={Engineer} alt="Tools" />
                        <h1>
                            Counsellor 2</h1>
                    </div>

                    <div className="Services_box_inner">
                        <img src={Engineer} alt="Tools" />
                        <h1>Counsellor 3</h1>
                    </div>
                </div>

                <h2 className="services_title sub_heading">Development Team</h2>

                <div data-aos="fade-up"
                    data-aos-duration="1000" className="Services_box">
                    <div className="Services_box_inner">
                        <img src={Engineer} alt="Tools" />
                        <h1>
                            Smruti Ganapa</h1>
                    </div>

                    <div className="Services_box_inner">
                        <img src={Engineer} alt="Tools" />
                        <h1>
                            Vaishnavi Mahamuni</h1>
                    </div>

                    <div className="Services_box_inner">
                        <img src={Engineer} alt="Tools" />
                        <h1>Manthan Godha</h1>
                    </div>
                    <div className="Services_box_inner">
                        <img src={Engineer} alt="Tools" />
                        <h1>Jatan Shah</h1>
                    </div>
                    <div className="Services_box_inner">
                        <img src={Engineer} alt="Tools" />
                        <h1>Ninad Tippat</h1>
                    </div>
                    <div className="Services_box_inner">
                        <img src={Engineer} alt="Tools" />
                        <h1>Venkatsai Kothe</h1>
                    </div>
                </div>

                <br />
                <br /><br />
                <br /><br />
                <br /><br />
                <Footer3 />
            </div>
        </>
    )
}

export default About