import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Home} from './pages/Home'
import {Header} from './components/Header'
import {Footer} from './components/Footer'
import {PageNotFound} from './components/PageNotFound'
import {MovieDetails} from './components/MovieDetails'

function App() {

  return (
    <Router>
      <Header/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/movie/:imdbID" element={<MovieDetails/>}/>
          <Route element={<PageNotFound/>}/>
        </Routes>
      <Footer/>
    </Router>
  )
}

export default App
