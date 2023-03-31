import React from 'react'

export const MovieCard = (props) => {
  const {data} = props;
  return (
    <div className='mt-5 hover:scale-[0.95] cursor-pointer text-white'>
      <img className='' src={data.Poster} alt={data.Title} />
      <h4 className='text-center'>{data.Title}</h4>
      <p className='text-center'>{data.Year}</p>
    </div>
  )
}
