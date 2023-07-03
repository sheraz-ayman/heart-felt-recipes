import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
    <header className="header">
      <div >
        <img src="./logo.png" alt="logo" className="logo"/>
      </div>
      <nav className={`menu ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/" style={{fontSize:'17px'}}>Home</Link>
          </li>
          <li>
            <Link to="AllRecipes" style={{fontSize:'17px'}}>All Recipes</Link>
          </li>
          <li>
            <Link to="Contact" style={{fontSize:'17px'}}>Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="burger" onClick={toggleMenu}>
        <div className={`line ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`line ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`line ${isMenuOpen ? "open" : ""}`}></div>
      </div>
    </header>
    </>
  );
};

export default Header;
