import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PageNotFound } from './components/PageNotFound';
import { MovieAndShowDetails } from './components/MovieAndShowDetails';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/movie/:imdbID" element={<MovieAndShowDetails />} />
        <Route element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
