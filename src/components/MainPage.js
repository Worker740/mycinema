import React from 'react';



import New from './path/New';
import MoviesOnly from './path/MoviesOnly';
import SerialsOnly from './path/SerialsOnly';
import CartoonsOnly from './path/CartoonsOnly';
import AnimeOnly from './path/AnimeOnly';
// import MovieSample from './components/MovieSample';




class Main extends React.Component {


  componentDidMount() {
    // const script = document.createElement('script')
    // script.src = "https://yohoho.cc/yo.js"
    // document.body.appendChild(script)
    // return () => { document.body.removeChild(script) }
  }

  render() {
    return (
      <div className='mainPage'>
        
        
        <New />
        <MoviesOnly />
        <SerialsOnly/>
        <CartoonsOnly/>
        <AnimeOnly/>
        
      </div>
    );
  }
}



export default Main;
