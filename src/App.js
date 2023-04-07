import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.scss';

import Header from './components/path/Header';
import Menu from './components/Menu';

import MainPage from './components/MainPage';
import MoviesPage from './components/MoviesPage';
import NotFound from './components/NotFound';


import Footer from './components/path/Footer';
import MovieSample from './components/MovieSample';


class App extends React.Component {


  componentDidMount() {
    // const script = document.createElement('script')
    // script.src = "https://yohoho.cc/yo.js"
    // document.body.appendChild(script)
    // return () => { document.body.removeChild(script) }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Menu />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:id" element={<MovieSample />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />

      </div>
    );
  }
}



export default App;
