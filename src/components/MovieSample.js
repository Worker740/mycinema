import React, { useState, useEffect } from "react";
import { useParams, useLocation, Redirect } from 'react-router-dom';
import apiKinopoisk from "./path/API";
import axios from "axios";
import { render } from "@testing-library/react";




const MovieSample = () => {
    const params = useParams()
    let movieId = params.id
    // const [singleMovieData, setSingleMovieData] = useState()
    let singleMovieData = {}
    let idToFavorite = localStorage.getItem(movieId)

    const [favorite, setFavorite] = useState()

    let importMovies = async () => {
        try {
            // console.log(movieId);
        let headers = {
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': apiKinopoisk,
            }
        }
        // const response = await axios.get(`https://api.kinopoisk.dev/v1/movie?page=1&limit=10&id=${movieId}`, headers);
        // console.log('Function response:', response.data.docs);
        // const movieData = response.data.docs[0]

        // singleMovieData = movieData
        // console.log(singleMovieData);
        
        singleMovieData = {
            "externalId": {
                "kpHD": "47649cf90de74aca8da7eb5b17fc8a8a",
                "imdb": "tt8367814",
                "tmdb": 522627
            },
            "rating": {
                "kp": 8.542,
                "imdb": 7.8,
                "filmCritics": 6.5,
                "russianFilmCritics": 86.3636,
                "await": 97.92
            },
            "votes": {
                "kp": 1341976,
                "imdb": 354662,
                "filmCritics": 277,
                "russianFilmCritics": 22,
                "await": 13643
            },
            "movieLength": 113,
            "id": 1143242,
            "type": "movie",
            "name": "Джентльмены",
            "description": "Один ушлый американец ещё со студенческих лет приторговывал наркотиками, а теперь придумал схему нелегального обогащения с использованием поместий обедневшей английской аристократии и очень неплохо на этом разбогател. Другой пронырливый журналист приходит к Рэю, правой руке американца, и предлагает тому купить киносценарий, в котором подробно описаны преступления его босса при участии других представителей лондонского криминального мира — партнёра-еврея, китайской диаспоры, чернокожих спортсменов и даже русского олигарха.",
            "year": 2019,
            "poster": {
                "url": "https://st.kp.yandex.net/images/film_big/1143242.jpg",
                "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_1143242.jpg"
            },
            "genres": [
                {
                    "name": "криминал"
                },
                {
                    "name": "комедия"
                },
                {
                    "name": "боевик"
                }
            ],
            "countries": [
                {
                    "name": "Великобритания"
                },
                {
                    "name": "США"
                }
            ],
            "alternativeName": "The Gentlemen",
            "enName": null,
            "names": [
                {
                    "name": "Джентльмены"
                },
                {
                    "name": "The Gentlemen"
                },
                {
                    "name": "Toff Guys",
                    "language": "GB",
                    "type": "working title"
                },
                {
                    "name": "Los Caballeros de la mafia",
                    "language": "ES",
                    "type": null
                },
                {
                    "name": "Busha",
                    "language": "GB",
                    "type": "working title"
                },
                {
                    "name": "Los caballeros: criminales con clase",
                    "language": "AR",
                    "type": null
                },
                {
                    "name": "紳士追殺令",
                    "language": "TW",
                    "type": null
                },
                {
                    "name": "Джентльмени",
                    "language": "UA",
                    "type": null
                },
                {
                    "name": "Εγκληματίες πρώτης τάξεως",
                    "language": "GR",
                    "type": null
                }
            ],
            "color": "#DBCCC2",
            "shortDescription": "Наркобарон хочет уйти на покой, но криминальный мир не отпускает. Успешное возвращение Гая Ричи к корням",
            "logo": {
                "url": "https://avatars.mds.yandex.net/get-ott/1534341/2a00000176f18064fd95abb74cbcc02873b8/orig"
            },
            "watchability": {
                "items": [
                    {
                        "name": "Okko",
                        "logo": {
                            "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                        },
                        "url": "https://okko.tv/movie/the-gentlemen?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                    },
                    {
                        "name": "Иви",
                        "logo": {
                            "url": "https://avatars.mds.yandex.net/get-ott/2419418/0dfd1724-848f-4725-9160-abc571f41c11/orig"
                        },
                        "url": "https://www.ivi.ru/watch/216926?utm_source=yandex&utm_medium=wizard"
                    },
                    {
                        "name": "KION",
                        "logo": {
                            "url": "https://avatars.mds.yandex.net/get-ott/239697/daeb142e-3ecc-4bb2-9bff-4827996643ab/orig"
                        },
                        "url": "https://kion.ru/video/movie/169735638?utm_source=yandex&utm_medium=organic&utm_campaign=wizard"
                    },
                    {
                        "name": "Wink",
                        "logo": {
                            "url": "https://avatars.mds.yandex.net/get-ott/1672343/54096cbe-cc3b-41c9-8e44-990ebbca8d61/orig"
                        },
                        "url": "https://wink.ru/media_items/95724717?utm_source=yandex&utm_medium=koldunschick&utm_content=name"
                    }
                ]
            }
        }
        
        } catch (error) {
            console.log(error);
        }
    }


    importMovies()

    let userFavoritesChange = () => {
        if (localStorage.getItem(movieId) === null) {
            localStorage.setItem(movieId, movieId)
            setFavorite(false)
        } else {
            localStorage.removeItem(movieId)
            setFavorite(true)
        }
    }

    let yohohoScript = () => {
        const script = document.createElement('script')
        script.src = "https://yohoho.cc/yo.js"
        document.body.appendChild(script)
        return () => { document.body.removeChild(script) }
    }
    yohohoScript()

    return (
        <div className="movieSample column" style={{
            backgroundImage: `radial-gradient(44.22% 57.61% at 56.6% 39.68%, rgba(21, 26, 32, 0) 0%, #151A20 100%), url(${singleMovieData.poster.url})`
        }}>
            <div className="movieSampleLeft first-block">
                <div className="movieType">
                    {singleMovieData.genres.map((obj, index) => (<h3 key={index}>{obj.name}</h3>))}
                </div>

                <h1>{singleMovieData.name} / {singleMovieData.alternativeName}  ( {singleMovieData.year} )</h1>
                <span className="movieDescription">{singleMovieData.description}</span>
                <div className="movieRatingContainer">
                    <div>KP: <span>{singleMovieData.rating.kp}</span></div>
                    <div>IMDB: <span>{singleMovieData.rating.imdb}</span></div>
                    <div>Время: <span>{singleMovieData.movieLength} м</span></div>
                    <div>ID Кинопоиска: <span>{movieId}</span></div>
                </div>
                <div className="userFavorites button" onClick={userFavoritesChange}>{favorite || idToFavorite === null ? 'Добавить в избранное' : 'Убрать из Избранного'}</div>
            </div>

            <div className="movieSampleRight first-block">
                <img src={singleMovieData.poster.url} />
            </div>


            <div className="moviePlayerContainer">
                <div className="moviePlayer" id="yohoho" data-kinopoisk={movieId}></div>
            </div>

        </div>
    )



}

export default MovieSample