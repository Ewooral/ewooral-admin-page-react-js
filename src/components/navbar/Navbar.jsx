import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/logo.svg";

<></>; // this is a react fragment syntax
const Menu = () => (
  <>
    <p>
      {" "}
      <a href="#home">Home</a>{" "}
    </p>
    <p>
      {" "}
      <a href="#ewooral">What is Ewooral-Kingdom</a>{" "}
    </p>
    <p>
      {" "}
      <a href="#possibility">Open AI</a>{" "}
    </p>
    <p>
      {" "}
      <a href="#features">Case Studies</a>{" "}
    </p>
    <p>
      {" "}
      <a href="#blog">Library</a>{" "}
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <section className="ek__navbar">
      <figure className="ek__navbar-links">
        <div className="ek__navbar-links _logo">
          <img src={logo} alt="" />
        </div>
        <div className="ek__navbar-links_container">
          <Menu />
        </div>
      </figure> 
      <figure className="ek__navbar-sign">
        <p>Sign In</p>
        <button type= "button">Sign Up</button>
      </figure>
      <figure className="ek__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <figure className="ek__navbar-menu_container scale-up-center">
            <div className="ek__navbar-menu_container-links">
              <Menu />
              <figure className="ek__navbar-menu_container-links-sign">
                <p>Sign In</p>
                <button>Sign Up</button>
              </figure>
            </div>
          </figure>
        )}
      </figure>
    </section>
  );
};

export default Navbar;
