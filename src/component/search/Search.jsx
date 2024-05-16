import React from "react";
import "./Search.css";

const Search = () => {
  return (
    <>
      <div className="home-container">
        <div>
          <h1>FIND YOUR MOVIE</h1>
        </div>
        <div className="search-container">
          <input className="search-input" placeholder="search movie here" />
          <button className="search-button">Search</button>
        </div>
      </div>
    </>
  );
};

export default Search;
