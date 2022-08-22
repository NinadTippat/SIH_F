import React from "react";
import "./Footer3.css";
import "./MediaFooter3.css";
import KeyboardArrowUp from "@material-ui/icons/KeyboardArrowUp";

const Footer3 = () => {
  return (
    <div className="Footer3">
      <div className="Footer3_container">
        <div className="footer3_container_left">
          <div className="footer_container_left_row">
            <p>&copy; Copyright 2022 Career Rush.</p>
            <h6>Privacy policy</h6>
            <h6>Terms of use</h6>
          </div>
          <p>
            Technology Solutions, AM, ("Company") and Customer agree, pursuant
            to the Maintenance and Repair Services Agreement (the “Agreement”)
            <br /> <br />
            that Company shall provide maintenance and repair services for the
          </p>
        </div>
        <div className="footer3_container_right">
          <a href="#" className="KeyboardArrowUp">
            <KeyboardArrowUp style={{ color: "white" }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer3;
