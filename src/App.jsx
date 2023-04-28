import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Footer } from './components/Footer';
import { PageNotFound } from './components/PageNotFound';
import { MovieAndShowDetails } from './components/MovieAndShowDetails';
import { MoviePage } from './pages/MoviePage';
import { SeriesPage } from './pages/SeriesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movies" element={<MoviePage />} />
        <Route path="/series" element={<SeriesPage />} />
        <Route path="/movie/:imdbID" element={<MovieAndShowDetails />} />
        <Route element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
