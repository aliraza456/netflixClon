import React from "react";
import MovieGrid from './MovieGrid'
import "./moviesList.css";
const MoviesList = () => {
  return (
    <div className="movies-list">
      <h1>39 Movies Found</h1>
      <div className="list">
      <MovieGrid />
      </div>
    </div>
  );
};

export default MoviesList;
