import React, { createContext, useReducer } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Authentication/Login";
import SignUp from "./components/Authentication/SignUp";
import Home from "./components/Home/Home";
// import Chat from "./components/Chatbot/Chat";
import About from "./components/AboutUs/About";
import Contact from "./components/Contact/Contact";
import CareerLibrary from "./components/CareerLibrary/CareerLibrary";
import Logout from "./components/Authentication/Logout";
import NavBar from "./components/Nav/NavBar";
import EngineeringCourses from "./components/Courses/EngineeringCourses";
import Counselling from "./components/Counselling/Counselling";
import { initialState, reducer } from "../src/reducer/UseReducer";
import Features from "./components/Features/Features";
import Test1 from "./components/Test/Test1";
import Test2 from "./components/Test/Test2";
import Test3 from "./components/Test/Test3";
import Result from "./components/Test/Result";

//1.create context
export const UserContext = createContext();

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/counselling" element={<Counselling />} />
      <Route path="/career_library" element={<CareerLibrary />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/engineering_courses" element={<EngineeringCourses />} />
      <Route path="/features" element={<Features />} />
      <Route path="/test1" element={<Test1 />} />
      <Route path="/test2" element={<Test2 />} />
      <Route path="/test3" element={<Test3 />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Router>
          <NavBar />
          {/* <Chat /> */}
          <Routing />
        </Router>
      </UserContext.Provider>
    </>
  );
};

export default App;
