import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../store/movieSlice';
import { fetchSeries } from '../store/seriesSlice';
import { motion } from 'framer-motion';

const variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};
const variants2 = {
  closed: { opacity: 0 },
  open: { opacity: 1 },
};

export const Header = ({ isOpen, setIsOpen }) => {
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

  const toggleHamburgerBtn = () => {
    setIsOpen((current) => !current);
  };

  return (
    <nav className="flex z-10 sticky top-0 bg-[#282828] text-white md:h-[100px] ">
      <div className="flex md:flex-row flex-col justify-between items-center w-full px-5">
        {isOpen === true ? (
          <motion.nav animate={isOpen ? 'open' : 'closed'} variants={variants}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
              onClick={toggleHamburgerBtn}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </motion.nav>
        ) : (
          <motion.nav
            animate={isOpen ? 'closed' : 'open'}
            variants={variants2}
            transition={{ delay: 1 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
              onClick={toggleHamburgerBtn}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </motion.nav>
        )}

        <Link to={`/`}>
          <img src={logo} className="px-5 w-[200px] md:py-0 py-5" />
        </Link>
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
          <button
            onClick={handleClickHome}
            to={'/'}
            className="font-opensans text-lg"
          >
            Home
          </button>
          <div className="flex gap-[5px] justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-5 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>

            <button
              onClick={handleClickHome}
              to={'/'}
              className="font-opensans text-lg"
            >
              Log In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
