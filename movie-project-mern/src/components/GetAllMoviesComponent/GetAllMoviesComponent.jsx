import React, {useState, useEffect} from 'react'
import './GetAllMoviesComponent.css'
import MovieComponent from '../MovieComponent/MovieComponent'
import axios from 'axios'

const GetAllMoviesComponent = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios
            .get(`http://localhost:3500/api/v1/movie/`)
            .then(response => setMovies(response.data))
            .catch((error) => {
                if(error.response)
                {
                  alert(`(Status : ${error.response.status}) ${error.response.data.message}`);
                }
              })
    }, [])

  return (
    <div className='movies'>
        {movies.map(movieItem=>(
            <MovieComponent movieItem={movieItem}/>
        ))}
    </div>
  )
}

export default GetAllMoviesComponent