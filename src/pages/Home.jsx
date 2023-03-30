import React, { useEffect } from 'react'
import {useDispatch} from "react-redux"
import {MovieListing} from '../components/MovieListing'
import movieApi from '../apis/movieApi'
import { addMovies } from '../store/movieSlice'


export const Home = () => {
  
  const dispactch = useDispatch();

  useEffect(()=>{
    const movieText = "harry";

    const fetchMovie =async () =>{
      const response = await movieApi.get(
        `?apikey=${import.meta.env.VITE_API_KEY}&s=${movieText}&type=movie`
        )
        .catch((err) =>{
          console.log(err)
        })
        dispactch(addMovies(response.data))
    }
    fetchMovie()
  },[])

  return (
    <div>
      <MovieListing/>
    </div>
  )
}
