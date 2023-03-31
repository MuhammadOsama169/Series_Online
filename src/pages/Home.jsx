import React from 'react'
import {MovieListing} from '../components/MovieListing'
import {SeriesListing} from '../components/SeriesListing'

export const Home = () => {

  return (
  <>
    <MovieListing/>
    <div className='w-full bg-slate-400 text-center py-10'>
      <h1 className='text-xl'>Most Popular TV Series</h1>
    </div>
    <SeriesListing/>
  </>
  )
}
