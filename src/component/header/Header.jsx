import React from "react";
import "./Header.css";

const Header = ({ handleOpen }) => {
  return (
    <div className="navbar">
      <h2 className="logo">
        Netflix<span>Clon</span>
      </h2>
      <button className="add-button" onClick={handleOpen}>
        + ADD MOVIE
      </button>
    </div>
  );
};

export default Header;
