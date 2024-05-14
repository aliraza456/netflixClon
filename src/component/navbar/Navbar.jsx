import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="movies gallery">
      <div className="gallery-container">
        <ul className="gallery-list">
          <li>All</li>
          <li>Documantery</li>
          <li>Comedy</li>
          <li>Crime</li>
          <li>Horror</li>
        </ul>
      </div>
      <div className="sort-container">
        <label htmlFor="sort-by">Sort: </label>
        <select id="sort-by">
          <option value="release-date">Release Date</option>
          <option value="title">Title</option>
          <option value="rating">Rating</option>
        </select>
      </div>
      
    </div>
  );
};

export default Navbar;
