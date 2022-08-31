import React from 'react'
import "./Courses.css"
import "../Mid1/Mid1.css"
import Telegram from "@material-ui/icons/Telegram";
import Settings from "@material-ui/icons/Settings";
import EmojiObjectsRounded from "@material-ui/icons/EmojiObjectsRounded";
import { Link } from 'react-router-dom';

const CommerceCourses = () => {

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
                    <Link to="/chartered_accountancy" className='Linktag' ><h2 className="mid_box_heading Linktag">Chartered Accountancy</h2></Link>
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
                    <Link to="/chartered_financial_analysis" className='Linktag' > <h2 className="mid_box_heading Linktag">Chartered Financial Analysis</h2></Link>

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
                    <Link to="/event_management" className='Linktag' ><h2 className="mid_box_heading"> Event Management
                    </h2></Link>

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
                    <h2 className="mid_box_heading">Hospital Managemen</h2>
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
                    <h2 className="mid_box_heading">Hotel Management
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
                    <h2 className="mid_box_heading">Human Resource Management

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
                    <h2 className="mid_box_heading"> Insurance
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
                    <h2 className="mid_box_heading"> Logistics & Supply Chain Management
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
                    <h2 className="mid_box_heading"> Management Bank Management
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
                    <h2 className="mid_box_heading"> Business Administration
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
                    <h2 className="mid_box_heading"> Business Management
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
                    <h2 className="mid_box_heading"> Costs and Works Accounts</h2>
                    <div className="mid1_box_horizantal" />
                </div>
            </div>
        </div >
    )
}

export default CommerceCourses