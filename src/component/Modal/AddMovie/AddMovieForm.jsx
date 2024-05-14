import React from "react";
import Complete from "../complete/Complete";
import "./addMovieForm.css";

const AddMovieForm = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="form-body">
      <div>
        <h1>ADD MOVIE</h1>
      </div>
      <div className="form">
        <div className="column-left">
          <label htmlFor="title">TITLE</label>
          <input type="text" id="title" placeholder="Moana" />

          <label htmlFor="movieURL">MOVIE URL</label>
          <input type="text" id="movieURL" placeholder="https://" />

          <label htmlFor="genre">GENRE</label>
          <select id="genre">
            <option>Select Genre</option>
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
            <option value="romantic">Romantic</option>
            <option value="spy/thriller">Spy/Thriller</option>
          </select>
        </div>
        <div className="column-right">
          <label htmlFor="releaseDate">RELEASE DATE</label>
          <input type="date" id="releaseDate" placeholder="Select Date" />

          <label htmlFor="rating">RATING</label>
          <input type="number" id="rating" placeholder="7.8" />

          <label htmlFor="runtime">RUNTIME</label>
          <input type="number" id="runtime" placeholder="minutes" />
        </div>
      </div>
      <div className="form-description">
        <div className="column-full">
          <label htmlFor="description">OVERVIEW</label>
          <textarea id="description" placeholder="Movie description"></textarea>
        </div>
      </div>
      <div className="form-footer">
        <Complete open={open} handleClose={handleClose} />
        <button type="reset" className="reset">
          RESET
        </button>
        <button type="submit" className="submit" onClick={handleOpen}>
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default AddMovieForm;
