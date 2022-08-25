import React from 'react'
import "./CareerLibrary.css"
import Telegram from "@material-ui/icons/Telegram";
import Settings from "@material-ui/icons/Settings";
import EmojiObjectsRounded from "@material-ui/icons/EmojiObjectsRounded";
import { Link } from "react-router-dom";
import Chat from '../Chatbot/Chat';
import img1 from "./img1.jpeg"
import img2 from "./img2.png"
import img3 from "./img3.png"
import img4 from "./img4.png"
import img5 from "./img5.jpg"

const CareerLibrary = () => {
    return (
        <div>
            <Chat />
            <div className="mid_all">

                {/* Section 1 */}
                <div data-aos="fade-up"
                    data-aos-duration="1000" className="mid1_box_all">
                    <div className="mid1_box">

                        <Settings
                            style={{
                                color: "#00ffff",
                                fontSize: 60,
                                marginLeft: 30,
                                marginTop: 30,
                                marginBottom: 30,
                            }}
                        />
                        <Link to="/engineering_courses" className="Linktag"><h2 className="mid_box_heading">Engineering</h2></Link>
                        <div className="mid1_box_horizantal" />
                        <p>
                            Courses in Engineering
                            <br />
                            Eligibility for engineering
                            <br />
                            Institutes of Engineering
                        </p>
                    </div>
                    <div className="mid1_box">
                        <EmojiObjectsRounded
                            style={{
                                color: "#00ffff",
                                fontSize: 60,
                                marginLeft: 30,
                                marginTop: 30,
                                marginBottom: 30,
                            }}
                        />
                        <Link to="/" className="Linktag"><h2 className="mid_box_heading">Medical</h2></Link>

                        <div className="mid1_box_horizantal" />
                        <p>
                            Courses in Medical
                            <br />
                            Eligibility for Medical
                            <br />
                            Institutes of Medical
                        </p>
                    </div>
                    <div className="mid1_box">

                        <Telegram
                            style={{
                                color: "#00ffff",
                                fontSize: 60,
                                marginLeft: 30,
                                marginTop: 30,
                                marginBottom: 30,
                            }}
                        />
                        <Link to="/" className="Linktag"><h2 className="mid_box_heading">Lawyer</h2></Link>

                        <div className="mid1_box_horizantal" />
                        <p>
                            Courses in Lawyer
                            <br />
                            Eligibility for Lawyer
                            <br />
                            Institutes of Lawyer
                        </p>
                    </div>
                </div>


                {/* Section 2  */}

                <div data-aos="fade-up"
                    data-aos-duration="1000" className="mid1_box_all">
                    <div className="mid1_box">
                        <Telegram
                            style={{
                                color: "#00ffff",
                                fontSize: 60,
                                marginLeft: 30,
                                marginTop: 30,
                                marginBottom: 30,
                            }}
                        />

                        <Link to="/" className="Linktag"><h2 className="mid_box_heading">Science</h2></Link>

                        <div className="mid1_box_horizantal" />
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sequi .
                        </p>
                    </div>
                    <div className="mid1_box">
                        <Settings
                            style={{
                                color: "#00ffff",
                                fontSize: 60,
                                marginLeft: 30,
                                marginTop: 30,
                                marginBottom: 30,
                            }}
                        />
                        <Link to="/" className="Linktag"><h2 className="mid_box_heading">Commerce</h2></Link>

                        <div className="mid1_box_horizantal" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                    <div className="mid1_box">
                        <EmojiObjectsRounded
                            style={{
                                color: "#00ffff",
                                fontSize: 60,
                                marginLeft: 30,
                                marginTop: 30,
                                marginBottom: 30,
                            }}
                        />

                        <Link to="/" className="Linktag"><h2 className="mid_box_heading">Arts</h2></Link>

                        <div className="mid1_box_horizantal" />
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam!
                        </p>
                    </div>
                </div>

                {/* Section 3  */}
                <div className="mid1_box_all">

                    <div className="mid1_box">
                        <Telegram
                            style={{
                                color: "#00ffff",
                                fontSize: 60,
                                marginLeft: 30,
                                marginTop: 30,
                                marginBottom: 30,
                            }}
                        />

                        <Link to="/" className="Linktag"><h2 className="mid_box_heading">B.ED</h2></Link>

                        <div className="mid1_box_horizantal" />
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sequi .
                        </p>
                    </div>

                    <div className="mid1_box">
                        <Settings
                            style={{
                                color: "#00ffff",
                                fontSize: 60,
                                marginLeft: 30,
                                marginTop: 30,
                                marginBottom: 30,
                            }}
                        />
                        <Link to="/" className="Linktag"><h2 className="mid_box_heading">MBA(Master of Business Administration)</h2></Link>

                        <div className="mid1_box_horizantal" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                    <div className="mid1_box">
                        <EmojiObjectsRounded
                            style={{
                                color: "#00ffff",
                                fontSize: 60,
                                marginLeft: 30,
                                marginTop: 30,
                                marginBottom: 30,
                            }}
                        />

                        <Link to="/" className="Linktag"><h2 className="mid_box_heading">B.A(Bachelor of Arts)</h2></Link>

                        <div className="mid1_box_horizantal" />
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam!
                        </p>
                    </div>
                </div>
                <div className="footer">
                    <img className="footer_img" src={img1} alt="" />
                    <img className="footer_img" src={img2} alt="" />
                    <img className="footer_img" src={img3} alt="" />
                    <img className="footer_img" src={img4} alt="" />
                    <img className="footer_img" src={img5} alt="" />
                </div>
            </div>
        </div>
    )
}

export default CareerLibrary