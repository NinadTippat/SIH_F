import React from "react";
import "./Home.css";
import Footers from "../Footers/Footers";
import Mid1 from "../Mid1/Mid1"
import Chat from "../Chatbot/Chat";



const Home = () => {


  const RenderChat = () => {
    if (state) {
      return <>
        <Mid1 />
        <Footers />
        <Chat />
      </>
    }
    else {
      return <>
        <Mid1 />
        <Footers />
      </>
    }
  }

  return (
    <div className="home">
      <RenderChat />
    </div>
  );
};

export default Home;
