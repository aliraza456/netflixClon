import * as React from "react";
import { Grid } from "@mui/material";
import "./MovieGrid.css";
import MovieCard from "./MovieCard.jsx";
import movies from "./Constant.js";
const MovieGrid = () => {
  return (
    <Grid container spacing={2} justifyContent="center">
      {movies.map((movie, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <MovieCard movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieGrid;
