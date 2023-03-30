import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies } from '../store/movieSlice'
import {MovieCard} from './MovieCard'

export const MovieListing = () => {
  const movies = useSelector(getAllMovies)
  let renderMovies=""

  renderMovies =
  movies.Response === "True" ? (
    movies.Search.map((movie, index) => (
      <MovieCard key={index} data={movie} />
    ))
  ) : (
    <div >
      <h3>{movies.Error}</h3>
    </div>
  );
  
  return (
    <div className='my-10 mx-10'>
      <div className='grid grid-col md:grid-cols-5 gap-5 place-items-center'>
        {renderMovies}
      </div>
    </div>
  )
}
