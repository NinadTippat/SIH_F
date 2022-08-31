import React from 'react'
import "./Courses.css"
import "../Mid1/Mid1.css"
import Telegram from "@material-ui/icons/Telegram";
import Settings from "@material-ui/icons/Settings";
import EmojiObjectsRounded from "@material-ui/icons/EmojiObjectsRounded";
import { Link } from 'react-router-dom';

const MedicalCourses = () => {

    return (
        <div>
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
                    <Link to="/ayurveda_bams" className='Linktag' ><h2 className="mid_box_heading Linktag">Ayurveda BAMS</h2></Link>
                    <div className="mid1_box_horizantal" />
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
                    <Link to="/dental_bds" className='Linktag' > <h2 className="mid_box_heading Linktag">Dental BDS</h2></Link>

                    <div className="mid1_box_horizantal" />

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
                    <Link to="/homeopathy" className='Linktag' ><h2 className="mid_box_heading">Homeopathy</h2></Link>
                    <div className="mid1_box_horizantal" />

                </div>
            </div>

            {/* SECTION 2 */}
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
                    <h2 className="mid_box_heading">Naturopathy</h2>
                    <div className="mid1_box_horizantal" />

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
                    <h2 className="mid_box_heading"> Pharmacy
                    </h2>

                    <div className="mid1_box_horizantal" />

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
                    <h2 className="mid_box_heading">MBBS

                    </h2>

                    <div className="mid1_box_horizantal" />

                </div>
            </div>

            {/* SECTION 3 */}
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
                    <h2 className="mid_box_heading">Physiotherapy
                    </h2>
                    <div className="mid1_box_horizantal" />

                </div>
            </div>

        </div >
    )
}

export default MedicalCourses