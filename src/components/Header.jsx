import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../store/movieSlice';
import { fetchSeries } from '../store/seriesSlice';

export const Header = () => {
  const [term, setTerm] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    e.preventDefault();
    dispatch(fetchMovies(term));
    dispatch(fetchSeries(term));
  };

  const handleClickHome = () => {
    navigate('/');
  };
  return (
    <nav className="flex  bg-slate-900 text-white md:h-[100px] ">
      <div className="flex md:flex-row flex-col justify-between items-center w-full px-5">
        <img src={logo} className="px-5 w-[200px] md:py-0 py-5" />

        <form onSubmit={handleInputChange}>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search Movies"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
          </div>
        </form>

        <div className="flex flex-row gap-5">
          <button onClick={handleClickHome}>Home</button>
        </div>
      </div>
    </nav>
  );
};
