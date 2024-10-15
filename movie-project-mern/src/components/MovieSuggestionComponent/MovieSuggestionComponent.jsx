import React, { useState } from 'react';
import './MovieSuggestionComponent.css';
import MovieComponent from '../MovieComponent/MovieComponent';
import axios from 'axios';

const MovieSuggestionComponent = () => {
  const [movieCriteria, setMovieCriteria] = useState({
    movieGenre1: '',
    movieGenre2: '',
    movieGenre3: '',
    movieGenre4: ''
  });

  const [suggestedMovies, setSuggestedMovies] = useState([])

  const movieGenre1Handler = (event) => {
    setMovieCriteria({
      ...movieCriteria,
      movieGenre1: event.target.value,
    });
  };

  const movieGenre2Handler = (event) => {
    if (event.target.value !== movieCriteria.movieGenre1) {
      setMovieCriteria({
        ...movieCriteria,
        movieGenre2: event.target.value,
      });
    } else {
      alert(`Genre names can't be repetitive!`); 
    }
  };

  const movieGenre3Handler = (event) => {
    if (event.target.value !== movieCriteria.movieGenre1 && event.target.value !== movieCriteria.movieGenre2) {
      setMovieCriteria({
        ...movieCriteria,
        movieGenre3: event.target.value,
      });
    } else {
      alert(`Genre names can't be repetitive!`); 
    }
  };

  const movieGenre4Handler = (event) => {
    if (event.target.value !== movieCriteria.movieGenre1 && event.target.value !== movieCriteria.movieGenre2 && event.target.value !==
       movieCriteria.movieGenre3) {
      setMovieCriteria({
        ...movieCriteria,
        movieGenre4: event.target.value,
      });
    } else {
      alert(`Genre names can't be repetitive!`);
    } 
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    axios
      .post(`http://localhost:3500/api/v1/movie/suggest`, movieCriteria)
      .then(response => setSuggestedMovies(response.data))
      .catch((error) => {
        if(error.response)
        {
          alert(`(Status : ${error.response.status}) ${error.response.data.message}`);
        }
      })

  };
  const { movieGenre1, movieGenre2, movieGenre3, movieGenre4 } = movieCriteria;
  return (
    <>
      <form className='form-container' onSubmit={formSubmitHandler}>
        <h2>Get movie suggestions</h2>
        <div className='form-group'>
          <label>Movie Genre 1</label>
          <select
            value={movieGenre1}
            onChange={movieGenre1Handler}
            required
          >
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
          <select
            value={movieGenre2}
            onChange={movieGenre2Handler}
            required
          >
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
          <select
            value={movieGenre3}
            onChange={movieGenre3Handler}
          >
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
          <select
            value={movieGenre4}
            onChange={movieGenre4Handler}
          >
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

        <div>
          <button type='submit'>Get suggestions</button>
        </div>
      </form>

      <div className='suggested-movies'>
        {suggestedMovies.map((movieItem) => (
          <MovieComponent key={movieItem._id} movieItem={movieItem} />
        ))}
      </div>
    </>
  );
};

export default MovieSuggestionComponent;
