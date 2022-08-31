import React from 'react'
import "./Courses.css"
import "../Mid1/Mid1.css"
import Telegram from "@material-ui/icons/Telegram";
import Settings from "@material-ui/icons/Settings";
import EmojiObjectsRounded from "@material-ui/icons/EmojiObjectsRounded";
import { Link } from 'react-router-dom';

const EnvironmentalCourses = () => {

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
                    <Link to="/engineering_courses/aeronautical_engineering" className='Linktag' s><h2 className="mid_box_heading Linktag">Earth Science</h2></Link>
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
                    <Link to="/aeronautical_engineering" className='Linktag' s> <h2 className="mid_box_heading Linktag">Environmental Sciences</h2></Link>

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
                    <h2 className="mid_box_heading">Fisheries
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
                    <h2 className="mid_box_heading">Floriculture /Horticulture </h2>
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
                    <h2 className="mid_box_heading"> Food Technology
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
                    <h2 className="mid_box_heading">Forestry
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
                    <h2 className="mid_box_heading">Oceanography
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
                    <h2 className="mid_box_heading">Statistical Science
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
                    <h2 className="mid_box_heading">Veterinary Sciences
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
                    <h2 className="mid_box_heading">Wildlife Biology
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
                    <h2 className="mid_box_heading"> Zoology
                    </h2>
                    <div className="mid1_box_horizantal" />

                </div>
            </div>
        </div >
    )
}

export default EnvironmentalCourses