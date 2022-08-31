import React from 'react'
import "./Courses.css"
import "../Mid1/Mid1.css"
import Telegram from "@material-ui/icons/Telegram";
import Settings from "@material-ui/icons/Settings";
import EmojiObjectsRounded from "@material-ui/icons/EmojiObjectsRounded";
import { Link } from 'react-router-dom';

const FilmLineCourses = () => {

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
                    <Link to="/engineering_courses/aeronautical_engineering" className='Linktag' s><h2 className="mid_box_heading Linktag">Art Direction</h2></Link>
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
                    <Link to="/aeronautical_engineering" className='Linktag' s> <h2 className="mid_box_heading Linktag">Choreography</h2></Link>

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
                    <h2 className="mid_box_heading">Direction
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
                    <h2 className="mid_box_heading">Film/Drama Production </h2>
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
                    <h2 className="mid_box_heading"> Fine Arts
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
                    <h2 className="mid_box_heading">Performing Arts

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
                    <h2 className="mid_box_heading"> Vocal and Instrumental Music
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
                    <h2 className="mid_box_heading">Animation

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
                    <h2 className="mid_box_heading"> Cinematography
                    </h2>
                    <div className="mid1_box_horizantal" />
                </div>
            </div>
        </div >
    )
}

export default FilmLineCourses