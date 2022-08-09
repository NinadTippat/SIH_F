import React from "react";
import "./Services.css";
import "./MediaServices.css";
import "../assets/Constants/Fonts.css";
import Tools from "../assets/tools.png";
import Cars from "../assets/cars.png";
import CarWash from "../assets/carWash.png";
import House from "../assets/house.png";
import "../assets/Constants/Fonts.css";
import Brush from "../assets/brush.png";
import Engineer from "../assets/engineer.png";

const Services = () => {
  return (
    <div className="Services">
      <div className="services_title">
        <div className="services_titile_horizantal_line" />
        <h1>Services</h1>
      </div>
      <div className="services_title_all">
        <p>our services for clients</p>
      </div>
      <div data-aos="fade-up"
        data-aos-duration="1000" className="Services_box">
        <div className="Services_box_inner">
          <img src={Engineer} alt="Tools" />
          <h1>Example 1</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eligendi aspernatur quaerat temporibus sit!
          </p>
        </div>
        <div className="Services_box_inner">
          <img src={Cars} alt="Tools" />
          <h1>Example 2</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure blanditiis debitis, tenetur nesciunt expedita aliquam autem incidunt. Eum!
          </p>
        </div>
        <div className="Services_box_inner">
          <img src={House} alt="Tools" />
          <h1>Example 3</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, eaque. Tenetur corporis quasi qui praesentium ducimus ullam ut iusto modi neque, officia, aliquam deleniti libero est accusantium doloribus laborum exercitationem.
          </p>
        </div>
        <div className="Services_box_inner">
          <img src={CarWash} alt="Tools" />
          <h1>Example 4</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur nesciunt quo fugiat eaque in expedita debitis non.
          </p>
        </div>
        <div className="Services_box_inner">
          <img src={Brush} alt="Tools" />
          <h1>Example 5</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis soluta ipsam dolorem labore adipisci? Debitis, assumenda id?
          </p>
        </div>
        <div className="Services_box_inner">
          <img src={Tools} alt="Tools" />

          <h1>Example 6</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta quos eligendi officiis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
