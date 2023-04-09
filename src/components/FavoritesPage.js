import React from "react";
import { Link } from "react-router-dom";
import apiKinopoisk from "./path/API";
import axios from "axios";
import store from "../store/store";
import actionChangeMovieId from "../store/actionCreators/actionChangeMovieId";

class FavoritesPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            arrOfFavoritesMovie: [],
            idOfFavorites: '',

        }
    }

    componentDidMount() {
        this.importStorage()
    }

    importStorage = async () => {
        let arrOfStorage = Object.keys(window.localStorage)
        const urlResponsSample = 'https://api.kinopoisk.dev/v1/movie?page=1&limit=10&id='
        let arrOfMovies = []
        for (let i = 0; i < arrOfStorage.length; i++) {
            let urlOfResponse = urlResponsSample + arrOfStorage[i]
            arrOfMovies.push(await this.importMovies(urlOfResponse))
        }
        console.log(arrOfMovies);
        this.setState({ arrOfFavoritesMovie: arrOfMovies })
    }

    importMovies = async (url) => {

        let headers = {
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': apiKinopoisk,
            }
        }
        const response = await axios.get(url, headers);
        console.log('Function response:', response.data.docs);
        let movieData = response.data.docs[0]
        return movieData
    }

    render() {
        return (
            <div className="favoritesPage first-block column">
                <h1>Избранное</h1>
                <div className="favoritesContainer">
                    {this.state.arrOfFavoritesMovie.map((obj) => {
                        return (
                            <div key={obj.id} className="movieCardContainer">

                                <Link to={`/movies/${obj.id}`}>
                                    <img src={`${obj.poster.url}`} />
                                </Link>
                                <h2>{obj.name} ({obj.year} г)</h2>
                            </div>
                        )
                    })}
                </div>
            </div>
        )



    }
}

export default FavoritesPage