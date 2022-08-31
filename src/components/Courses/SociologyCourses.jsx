import React from 'react'
import "./Courses.css"
import "../Mid1/Mid1.css"
import Telegram from "@material-ui/icons/Telegram";
import Settings from "@material-ui/icons/Settings";
import EmojiObjectsRounded from "@material-ui/icons/EmojiObjectsRounded";
import { Link } from 'react-router-dom';

const SociologyCourses = () => {

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
                    <Link to="/engineering_courses/aeronautical_engineering" className='Linktag' s><h2 className="mid_box_heading Linktag">Anthropology
                    </h2></Link>
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
                    <Link to="/aeronautical_engineering" className='Linktag' s> <h2 className="mid_box_heading Linktag">Archaeology </h2></Link>

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
                    <h2 className="mid_box_heading">Art Restoration
                    </h2>

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
                    <h2 className="mid_box_heading">Curation </h2>
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
                    <h2 className="mid_box_heading">  Educational/Vocational School Counsellor

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
                    <h2 className="mid_box_heading">Monuments And Sculpture Restoration
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
                    <h2 className="mid_box_heading">Museology
                    </h2>
                    <div className="mid1_box_horizantal" />

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
                    <h2 className="mid_box_heading"> Physiotherapy
                    </h2>
                    <div className="mid1_box_horizantal" />

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
                    <h2 className="mid_box_heading">Rehabilitation Psychology
                    </h2>
                    <div className="mid1_box_horizantal" />
                </div>
            </div>

            {/* SECTION 4 */}
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
                    <h2 className="mid_box_heading">Rehabilitation Therapy
                    </h2>
                    <div className="mid1_box_horizantal" />

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
                    <h2 className="mid_box_heading">Social Work
                    </h2>
                    <div className="mid1_box_horizantal" />

                </div>
            </div>
        </div >
    )
}

export default SociologyCourses