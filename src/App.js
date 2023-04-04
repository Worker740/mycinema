import React from 'react';
import './App.scss';

import Header from './components/Header';
import Menu from './components/Menu';
import New from './components/New';
import MoviesOnly from './components/MoviesOnly';
import SerialsOnly from './components/SerialsOnly';
import CartoonsOnly from './components/CartoonsOnly';
import AnimeOnly from './components/AnimeOnly';
import Footer from './components/Footer';




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
        <New />
        <MoviesOnly />
        <SerialsOnly/>
        <CartoonsOnly/>
        <AnimeOnly/>
        <Footer/>
      </div>
    );
  }
}



export default App;
