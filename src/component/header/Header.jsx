import React from "react";
import logo from '../../assets/netflixroulette.svg'
import "./Header.css";

const Header = ({ handleOpen }) => {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" />
      <button className="add-button" onClick={handleOpen}>
        + ADD MOVIE
      </button>
    </div>
  );
};

export default Header;
