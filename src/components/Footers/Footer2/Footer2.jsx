import React from "react";
import "./Footer2.css";
import "./MediaFooter2.css";
import "../../assets/Constants/Fonts.css";
import Phone from "@material-ui/icons/Phone";
import Gmail from "@material-ui/icons/Mail";
import Location from "@material-ui/icons/LocationOn";
import Table from "@material-ui/icons/BusinessCenter";

const Footer2 = () => {
  return (
    <div className="Footer2">
      <div className="Footer2_container">
        <div className="footer2_container_left">
          <h1>Career Rush</h1>
          <p>Finding Your Passion Is Key To Your Success !</p>
          <div className="horizantal_line" />
        </div>
        <div className="footer_container_right">
          <h3>Contact us</h3>
          <div className="footer_container_right_row">
            <Phone style={{ color: "#00ffff" }} />
            <p>9373000736</p>
          </div>
          <div className="footer_container_right_row">
            <Gmail style={{ color: "#00ffff" }} />
            <p>careerrush2022@gmail.com</p>
          </div>
          <div className="footer_container_right_row">
            <Location style={{ color: "#00ffff" }} />
            <p>Solapur, India.</p>
          </div>
          {/* <div className="footer_container_right_row">
            <Table style={{ color: "#00ffff" }} />
            <p>Except Friday, Sunday to Satarday</p>
          </div> */}
        </div>
        <div className="footer_container_right">
          <h3>Our Sevices</h3>
          <p>Mercedes</p>
          <p>Audi</p>
          <p>BMW</p>
          <p>Lamborghini</p>
          <p>Jaguar</p>
        </div>
        <div className="footer_container_right">
          <h3>About Us</h3>
          <p>Mindtech</p>
          <p>Experience</p>
          <p>About</p>
          <p>Work</p>
          <p>Carrer counselling</p>
        </div>
      </div>
      <div className="footer2_horizantal_line" />
    </div>
  );
};

export default Footer2;
