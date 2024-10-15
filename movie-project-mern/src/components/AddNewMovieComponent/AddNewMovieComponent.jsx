import React, { useState } from 'react';
import './AddNewMovieComponent.css';
import axios from 'axios';

const AddNewMovieComponent = () => {
  const [movieInfo, setMovieInfo] = useState({
    movieName: '',
    movieYear: '',
    movieGenre1: '',
    movieGenre2: '',
    movieGenre3: '',
    movieGenre4: '',
    imdbRating: 0,
  });

  const movieNameHandler = (event) => {
    setMovieInfo({
      ...movieInfo,
      movieName: event.target.value,
    });
  };

  const movieYearHandler = (event) => {
    setMovieInfo({
      ...movieInfo,
      movieYear: event.target.value,
    });
  };

  const movieGenre1Handler = (event) => {
    setMovieInfo({
      ...movieInfo,
      movieGenre1: event.target.value,
    });
  };
  const movieGenre3Handler = (event) => {
    if (event.target.value !== movieInfo.movieGenre1) {
      setMovieInfo({
        ...movieInfo,
        movieGenre3: event.target.value,
      });
    } else {
      alert(`Two genres can't be the same`);
    }
  };
  const movieGenre4Handler = (event) => {
    if (event.target.value !== movieInfo.movieGenre2 ) {
      setMovieInfo({
        ...movieInfo,
        movieGenre4: event.target.value,
      });
    } else {
      alert(`Two genres can't be the same`);
    }
  };

  const movieGenre2Handler = (event) => {
    if (event.target.value !== movieInfo.movieGenre1) {
      setMovieInfo({
        ...movieInfo,
        movieGenre2: event.target.value,
      });
    } else {
      alert(`Two genres can't be the same`);
    }
  };

  const imdbRatingHandler = (event) => {
    setMovieInfo({
      ...movieInfo,
      imdbRating: event.target.value,
    });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    axios
        .post(`http://localhost:3500/api/v1/movie/addMovie`, movieInfo)
        .then((response) => {
            console.log(response.data)
            alert(`${response.data.movieName} is added successfully.`)
            window.location.href='/'
          })
        .catch((error) => {
            if(error.response)
            {
              alert(`(Status : ${error.response.status}) ${error.response.data.message}`);
            }
          })
  };

  const { movieName, movieYear, movieGenre1, movieGenre2,movieGenre3,movieGenre4, imdbRating } = movieInfo;

  return (
    <form className='form-container' onSubmit={formSubmitHandler}>
      <h2>Adding a new Movie data</h2>

      <div className='form-group'>
        <label>Movie Name</label>
        <input
          type='text'
          placeholder='Enter the movie name'
          value={movieName}
          onChange={movieNameHandler}
          required
        />
      </div>

      <div className='form-group'>
        <label>Movie Year</label>
        <input
          type='text'
          placeholder='Enter the year of release'
          value={movieYear}
          onChange={movieYearHandler}
          required
        />
      </div>

      <div className='form-group'>
        <label>Movie Genre 1</label>
        <select value={movieGenre1} onChange={movieGenre1Handler} required>
          <option value=''>-- Please select --</option>
          <option value='Action'>Action</option>
          <option value='Comedy'>Comedy</option>
          <option value='Drama'>Drama</option>
          <option value='SciFi'>SciFi</option>
          <option value='Horror'>Horror</option>
          <option value='Thriller'>Thriller</option>
          <option value='Romance'>Romance</option>
          <option value='Fantasy'>Fantasy</option>
          <option value='Animation'>Animation</option>
          <option value='Adventure'>Adventure</option>
          <option value='Crime'>Crime</option>
          <option value='Biography'>Biography</option>
        </select>
      </div>

      <div className='form-group'>
        <label>Movie Genre 2</label>
        <select value={movieGenre2} onChange={movieGenre2Handler} required>
          <option value=''>-- Please select --</option>
          <option value='Action'>Action</option>
          <option value='Comedy'>Comedy</option>
          <option value='Drama'>Drama</option>
          <option value='SciFi'>SciFi</option>
          <option value='Horror'>Horror</option>
          <option value='Thriller'>Thriller</option>
          <option value='Romance'>Romance</option>
          <option value='Fantasy'>Fantasy</option>
          <option value='Animation'>Animation</option>
          <option value='Adventure'>Adventure</option>
          <option value='Crime'>Crime</option>
          <option value='Biography'>Biography</option>
        </select>
      </div>
      <div className='form-group'>
        <label>Movie Genre 3</label>
        <select value={movieGenre3} onChange={movieGenre3Handler} required>
          <option value=''>-- Please select --</option>
          <option value='Action'>Action</option>
          <option value='Comedy'>Comedy</option>
          <option value='Drama'>Drama</option>
          <option value='SciFi'>SciFi</option>
          <option value='Horror'>Horror</option>
          <option value='Thriller'>Thriller</option>
          <option value='Romance'>Romance</option>
          <option value='Fantasy'>Fantasy</option>
          <option value='Animation'>Animation</option>
          <option value='Adventure'>Adventure</option>
          <option value='Crime'>Crime</option>
          <option value='Biography'>Biography</option>
        </select>
      </div>
      <div className='form-group'>
        <label>Movie Genre 4</label>
        <select value={movieGenre4} onChange={movieGenre4Handler} required>
          <option value=''>-- Please select --</option>
          <option value='Action'>Action</option>
          <option value='Comedy'>Comedy</option>
          <option value='Drama'>Drama</option>
          <option value='SciFi'>SciFi</option>
          <option value='Horror'>Horror</option>
          <option value='Thriller'>Thriller</option>
          <option value='Romance'>Romance</option>
          <option value='Fantasy'>Fantasy</option>
          <option value='Animation'>Animation</option>
          <option value='Adventure'>Adventure</option>
          <option value='Crime'>Crime</option>
          <option value='Biography'>Biography</option>
        </select>
      </div>

      <div className='form-group'>
        <label>IMDb Rating</label>
        <input
          type='text'
          placeholder='Enter the IMDb Rating'
          value={imdbRating}
          onChange={imdbRatingHandler}
          required
        />
      </div>

      <div>
        <button type='submit'>Add</button>
      </div>
    </form>
  );
};

export default AddNewMovieComponent;
