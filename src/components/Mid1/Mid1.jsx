import React from "react";
import "../assets/Constants/Fonts.css";
import "./Mid1.css";
import "./MediaMid1.css";
import Telegram from "@material-ui/icons/Telegram";
import Settings from "@material-ui/icons/Settings";
import EmojiObjectsRounded from "@material-ui/icons/EmojiObjectsRounded";
import headerImg from "../images/header-img.svg";
import LightSpeed from 'react-reveal/LightSpeed';
import Roll from 'react-reveal/Roll';
import Rotate from 'react-reveal/Rotate';
import { Link } from "react-router-dom";

const Mid1 = () => {
  return (
    <div className="mid_all">
      <div className="mid1">
        <div className="mid1_left">
          <Roll right> <h1>Welcome to Career Rush</h1></Roll>
          <LightSpeed left><p>Career Counselling, Career guidance test </p></LightSpeed>
          <LightSpeed left><Link to="/login"><button className="getbtn">getting started</button></Link></LightSpeed>
        </div>
        <div className="mid_right">
          <Rotate bottom right> <img
            className="mid_right_img"
            src={headerImg}
            alt="HeaderImg"
          /></Rotate>
        </div>
      </div>

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

          <h2>Engineering</h2>
          <div className="mid1_box_horizantal" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sequi .
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
          <h2>Medical</h2>
          <div className="mid1_box_horizantal" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
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

          <h2>Architecture</h2>
          <div className="mid1_box_horizantal" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam!
          </p>
        </div>
      </div>
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

          <h2>Science</h2>
          <div className="mid1_box_horizantal" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sequi .
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
          <h2>Commerce</h2>
          <div className="mid1_box_horizantal" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
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

          <h2>Arts</h2>
          <div className="mid1_box_horizantal" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam!
          </p>
        </div>
      </div>

    </div >
  );
};

export default Mid1;
