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
                            Courses to explore in Engineering for enthusiasts.
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
                        <Link to="/medical_courses" className="Linktag"><h2 className="mid_box_heading">Medical</h2></Link>

                        <div className="mid1_box_horizantal" />
                        <p>
                            Courses to explore in Medical for enthusiasts.
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
                        <Link to="/commerce_courses" className="Linktag"><h2 className="mid_box_heading">Commerce</h2></Link>

                        <div className="mid1_box_horizantal" />
                        <p>
                            Courses to explore in Commerce for enthusiasts.
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

                        <Link to="/filmline_courses" className="Linktag"><h2 className="mid_box_heading">Film line</h2></Link>

                        <div className="mid1_box_horizantal" />
                        <p>
                            Courses to explore in Flim line for enthusiasts.
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
                        <Link to="/environmental_courses" className="Linktag"><h2 className="mid_box_heading">Environmental </h2></Link>

                        <div className="mid1_box_horizantal" />
                        <p>
                            Courses to explore in Environmental for enthusiasts.
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

                        <Link to="/sociology_courses" className="Linktag"><h2 className="mid_box_heading">Sociology </h2></Link>

                        <div className="mid1_box_horizantal" />
                        <p>
                            Courses to explore in Sociology for enthusiasts.
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

                        <Link to="/" className="Linktag"><h2 className="mid_box_heading">Corporate Intelligence</h2></Link>

                        <div className="mid1_box_horizantal" />
                        <p>
                            Courses to explore in Corporate Intelligence for enthusiasts.
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

                        <Link to="/" className="Linktag"><h2 className="mid_box_heading">Detective</h2></Link>

                        <div className="mid1_box_horizantal" />
                        <p>
                            Courses to explore in Detective for enthusiasts.
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

                        <Link to="/" className="Linktag"><h2 className="mid_box_heading"> Food and Nutrition</h2></Link>

                        <div className="mid1_box_horizantal" />
                        <p>
                            Courses to explore in Food and Nutrition for enthusiasts.
                        </p>
                    </div>
                </div>


                {/* Section 4  */}
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

                        <Link to="/" className="Linktag"><h2 className="mid_box_heading"> Foreign Languages </h2></Link>

                        <div className="mid1_box_horizantal" />
                        <p>
                            Courses to explore in Foreign Languages for enthusiasts.
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

                        <Link to="/" className="Linktag"><h2 className="mid_box_heading">Home Science
                        </h2></Link>

                        <div className="mid1_box_horizantal" />
                        <p>
                            Courses to explore in Home Science for enthusiasts.
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

                        <Link to="/" className="Linktag"><h2 className="mid_box_heading"> Interior Designing</h2></Link>

                        <div className="mid1_box_horizantal" />
                        <p>
                            Courses to explore in Interior Designing for enthusiasts.
                        </p>
                    </div>
                </div>

                {/* Section 5  */}
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

                        <Link to="/" className="Linktag"><h2 className="mid_box_heading"> Liberal Studies </h2></Link>

                        <div className="mid1_box_horizantal" />
                        <p>
                            Courses to explore in Liberal Studies for enthusiasts.
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

                        <Link to="/" className="Linktag"><h2 className="mid_box_heading">Library Sciences

                        </h2></Link>

                        <div className="mid1_box_horizantal" />
                        <p>
                            Courses to explore in Library Sciences for enthusiasts.
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

                        <Link to="/" className="Linktag"><h2 className="mid_box_heading">Montessori Teaching</h2></Link>

                        <div className="mid1_box_horizantal" />
                        <p>
                            Courses to explore in Montessori Teaching for enthusiasts.
                        </p>
                    </div>
                </div>

                {/* Section 6  */}
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

                        <Link to="/" className="Linktag"><h2 className="mid_box_heading"> Nutrition and Dietetics</h2></Link>

                        <div className="mid1_box_horizantal" />
                        <p>
                            Courses to explore in Nutrition and Dietetics for enthusiasts.
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

                        <Link to="/" className="Linktag"><h2 className="mid_box_heading">Physical Education

                        </h2></Link>

                        <div className="mid1_box_horizantal" />
                        <p>
                            Courses to explore in Physical Education for enthusiasts.
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

                        <Link to="/" className="Linktag"><h2 className="mid_box_heading">Sports And Sports Management</h2></Link>

                        <div className="mid1_box_horizantal" />
                        <p>
                            Courses to explore in Sports And Sports Management for enthusiasts.
                        </p>
                    </div>
                </div>

                {/* Section 7  */}
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

                        <Link to="/" className="Linktag"><h2 className="mid_box_heading">Tourism & Travels
                        </h2></Link>

                        <div className="mid1_box_horizantal" />
                        <p>
                            Courses to explore in Tourism & Travels for enthusiasts.
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