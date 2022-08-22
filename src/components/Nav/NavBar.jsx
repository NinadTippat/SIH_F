import React, { useContext, useState } from 'react'
import "./NavBar.css"
import styled from "styled-components";
import { MenuRounded } from "@material-ui/icons";
import { Clear } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { UserContext } from '../../App';


const NavBar = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);

  const { state, dispatch } = useContext(UserContext);

  const RenderMenu = () => {
    //user state
    console.log(state)

    if (state) {
      return (
        <>
          <div className='NavBar'>
            <div className='headingOfNavBar'>
              <h1 data-aos="fade-down">Career Rush</h1>
              <div className="navicons">
                <Link data-aos="zoom-in" data-aos-duration="800" className='white ' to="/">Home</Link>
                <Link data-aos="zoom-in" data-aos-duration="800" className='white' to="/about">About</Link>
                <Link data-aos="zoom-in" data-aos-duration="800" className='white' to="/contact">Contact</Link>
                <Link data-aos="zoom-in" data-aos-duration="800" className='white' to="/counselling">Counselling</Link>
                <Link data-aos="zoom-in" data-aos-duration="800" className='white' to="/career_library">Career Library</Link>
              </div>
            </div>
            <div>
              <Link to="/logout" ><button className='nav-btn'>Logout</button> </Link>
            </div >
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className='NavBar'>
            <div className='headingOfNavBar'>
              <h1 data-aos="fade-down">Career Rush</h1>
              <div className="navicons">
                <Link data-aos="zoom-in" data-aos-duration="800" className='white ' to="/">Home</Link>
                <Link data-aos="zoom-in" data-aos-duration="800" className='white' to="/about">About</Link>
              </div>
            </div>

            <div>
              <Link to="/login"  ><button className='nav-btn'>Login</button> </Link>
              <Link to="/signup"  ><button className='nav-btn'>Sign up</button></Link>
            </div >
          </div>
        </>
      );
    }
  };


  return (
    <>

      {/* web */}
      <div >
        <RenderMenu />
      </div>


      {/* Burger  */}
      <Container>
        <CustomMenu onClick={() => setBurgerStatus(true)} />

        <BurgerNav show={burgerStatus}>
          <CloseWrapper>
            <CustomClear onClick={() => setBurgerStatus(false)} />
          </CloseWrapper>

          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <div>
            <Link to="/login"  ><button className='nav-btn_mobile'>Login</button> </Link>
            <Link to="/signup"  ><button className='nav-btn_mobile'>Sign up</button></Link>
          </div >
        </BurgerNav>
      </Container>
    </>
  )
}

export default NavBar

const Container = styled.div`
  height: 60px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  top: 0;
  right: 0;
  // left: 0;
  z-index: 2000;
  // border: 1px solid blue;

  @media all and (max-width: 608px) {
    width: 100px;
  }
`;

const CustomMenu = styled(MenuRounded)`
  position: fixed;
  cursor: pointer;
  color: white;
  visibility: hidden;
  position: absolute;
  right: 2%;

  @media all and (max-width: 608px) {
    visibility: visible;
    color: white;
  }
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background: purple;
  width: 100%;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transition: transform 0.6s ease-in-out;
  transform: ${(props) => (props.show ? "translateY(0)" : "translateY(100%)")};

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  a {
    font-weight: 600;
    transition: all 0.7s ease-in-out;
    text-decoration: none;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      color: red;
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

const CustomClear = styled(Clear)`
  cursor: pointer;
  color: white;
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
