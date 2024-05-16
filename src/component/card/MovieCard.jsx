import * as React from "react";
import "./MovieGrid.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const MovieCard = ({ movie }) => {
  return (
    <Card sx={{ width: 320, margin: 3, cursor: "pointer"}}>
      <CardMedia
        component="img"
        alt={movie.title}
        height="400"
        image={movie.image}
        sx={{ objectFit: "cover" }}
      />
      <CardContent className="card-contant">
        <div className="left-contant">
          <h1 className="movie-title">{movie.title}</h1>
          <p className="movie-rating">Rating: {movie.rating}</p>
        </div>
        <div className="right-contant">
          <p className="movie-date">{movie.year}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
