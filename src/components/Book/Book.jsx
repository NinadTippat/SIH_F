import React from "react";
import "./Book.css";
import "./MediaBook.css";
import "../assets/Constants/Fonts.css";
import contactImg from "../images/contact-img.svg";


const Book = () => {
  return (
    <div className="Book">
      <div className="book_title">
        <h1>Join with us</h1>
        <p>Find the perfect career today</p>
      </div>
      <div className="book_container">
        <div className="book_container_left">
          <img src={contactImg} alt="img" />
        </div>
        <div data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="1000" className="book_container_right">
          <div className="book_container_right_inner">
            <h1>Counsellor 1</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta illo harum voluptatem.
            </p>
          </div>
          <div className="book_container_right_inner">
            <h1>Counsellor 2</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi explicabo consequuntur labore.
            </p>
          </div>
          <div className="book_container_right_inner">
            <h1>Counsellor 3</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam.
            </p>
          </div>
          <div className="book_container_right_button">
            <button>Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
