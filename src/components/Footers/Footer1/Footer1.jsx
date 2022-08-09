import React from "react";
import "./Footer1.css";
import "./MediaFooter1.css";
import "../../assets/Constants/Fonts.css";


const Footer1 = () => {
  return (
    <>
      <div className="footer1_vertical_line" />
      <h1 className="contactus">Contact Us</h1>
      <div className="footer1">

        <div className="main_icons">
          <div className="icon">
            <svg height="80" width="100">
              <circle
                cx="40"
                cy="40"
                r="25"
                stroke="white"
                stroke-width="4"
                fill="none"
              ></circle>
            </svg>
            <i className="fab fa-instagram fa-2x"></i>
          </div>

          <div className="icon">
            <svg height="80" width="80">
              <circle
                cx="40"
                cy="40"
                r="25"
                stroke="white"
                stroke-width="4"
                fill="none"
              ></circle>
            </svg>
            <i className="fab fa-facebook fa-2x"></i>
          </div>

          <div className="icon">
            <svg height="80" width="80">
              <circle
                cx="40"
                cy="40"
                r="25"
                stroke="white"
                stroke-width="4"
                fill="none"
              ></circle>
            </svg>
            <i className="fab fa-whatsapp fa-2x"></i>
          </div>

          <div className="icon">
            <svg height="80" width="80">
              <circle
                cx="40"
                cy="40"
                r="25"
                stroke="white"
                stroke-width="4"
                fill="none"
              ></circle>
            </svg>
            <a href="https://twitter.com/CareerRush_6"><i className="fab fa-twitter fa-2x"></i></a>
          </div>
        </div>
      </div>
      <div className="footer_end">
        <h1>Have any query in mind!</h1>
        <button>Make Inquiry</button>
      </div>
    </>
  );
};

export default Footer1;
