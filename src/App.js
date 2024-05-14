import { React, useState } from "react";
import Header from "./component/header/Header";
import Search from "./component/search/Search";
import Navbar from './component/navbar/Navbar';
import BasicModal from "./component/Modal/Modal";
import MoviesList from "./component/card/MoviesList";
import Footer from './component/footer/Footer'
import "./App.css";

const App = () => {
  const [addMovie, setAddMovie] = useState(false);
  const handleOpen = () => setAddMovie(true);
  const handleClose = () => setAddMovie(false);
  return (
    <div>
      <Header handleOpen={handleOpen} />
      <BasicModal open={addMovie} handleClose={handleClose} />
      <Search />
      <Navbar />
      <MoviesList />
      <Footer />
    </div>
  );
};

export default App;
