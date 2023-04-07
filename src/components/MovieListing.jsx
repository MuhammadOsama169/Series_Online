import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MovieCard } from '../components/MovieCard';
import { fetchMovies } from '../store/movieSlice';
import { STATUSES } from '../store/movieSlice';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './slider.css';
import { Autoplay, Navigation } from 'swiper';

export const MovieListing = () => {
  const dispatch = useDispatch();
  const { data: movies, status } = useSelector((state) => state.movies);
  const placeHolderMovies = 'star wars';

  useEffect(() => {
    dispatch(fetchMovies(placeHolderMovies));
  }, []);

  if (status === STATUSES.LOADING) {
    return <h2>Loading....</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>;
  }

  let renderMovies = '';

  renderMovies =
    movies.Response === 'True' ? (
      movies?.Search?.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div>
        <h3>{movies.Error}</h3>
      </div>
    );

  return (
    // <div className="my-10 mx-10">
    //   <div className="grid grid-col md:grid-cols-5 gap-5 place-items-center">
    //     {renderMovies}
    //   </div>
    // </div>
    <Swiper
      centeredSlides={true}
      autoplay={{
        delay: 80500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation
      modules={[Autoplay, Navigation]}
      slidesPerView={6}
      spaceBetween={0}
      className="mySwiper"
    >
      {movies?.Response === 'True' &&
        movies?.Search?.map((movie) => (
          <SwiperSlide key={movie.imdbID}>
            <Link to={`/movie/${movie.imdbID}`}>
              <div className="mt-5 hover:scale-[0.95] cursor-pointer text-white w-[220px]">
                <img
                  className="h-[350px]"
                  src={movie.Poster}
                  alt={movie.Title}
                />
                <h4 className="text-center">{movie.Title}</h4>
                <p className="text-center">{movie.Year}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};
