import React from "react";
import Mid1 from "../Mid1/Mid1";
import "./Home.css";
// import Services from "../Services/Services";
import Book from "../Book/Book";
import Footers from "../Footers/Footers";
import NavBar from "../Nav/NavBar";

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <Mid1 />
      {/* <Services /> */}
      <Book />
      <Footers />
    </div>
  );
};

export default Home;
