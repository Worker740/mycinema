import React from "react";
import axios from "axios";
import apiKinopoisk from "./API";


class New extends React.Component {
    constructor() {
        super()
        this.state = {
            arrOfNewMovies: [
                {
                    "externalId": {
                        "kpHD": "4127663ed234fa8584aeb969ceb02cd8",
                        "imdb": "tt1675434",
                        "tmdb": 77338
                    },
                    "rating": {
                        "kp": 8.805,
                        "imdb": 8.5,
                        "filmCritics": 6.8,
                        "russianFilmCritics": 100,
                        "await": 0
                    },
                    "votes": {
                        "kp": 1553742,
                        "imdb": 873144,
                        "filmCritics": 130,
                        "russianFilmCritics": 12,
                        "await": 15
                    },
                    "movieLength": 112,
                    "id": 535341,
                    "type": "movie",
                    "name": "1+1",
                    "description": "Пострадав в результате несчастного случая, богатый аристократ Филипп нанимает в помощники человека, который менее всего подходит для этой работы, – молодого жителя предместья Дрисса, только что освободившегося из тюрьмы. Несмотря на то, что Филипп прикован к инвалидному креслу, Дриссу удается привнести в размеренную жизнь аристократа дух приключений.",
                    "year": 2011,
                    "poster": {
                        "url": "https://st.kp.yandex.net/images/film_big/535341.jpg",
                        "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_535341.jpg"
                    },
                    "genres": [
                        {
                            "name": "драма"
                        },
                        {
                            "name": "комедия"
                        },
                        {
                            "name": "биография"
                        }
                    ],
                    "countries": [
                        {
                            "name": "Франция"
                        }
                    ],
                    "alternativeName": "Intouchables",
                    "enName": null,
                    "names": [
                        {
                            "name": "1+1"
                        },
                        {
                            "name": "Intouchables"
                        },
                        {
                            "name": "不可触碰",
                            "language": "CN",
                            "type": null
                        },
                        {
                            "name": "最佳拍档",
                            "language": "CN",
                            "type": null
                        },
                        {
                            "name": "无法触碰",
                            "language": "CN",
                            "type": null
                        },
                        {
                            "name": "Untouchable",
                            "language": "GB",
                            "type": null
                        },
                        {
                            "name": "不可触摸",
                            "language": "CN",
                            "type": null
                        },
                        {
                            "name": "Неприкасаемые",
                            "language": "RU",
                            "type": "Literal"
                        },
                        {
                            "name": "1+1 [Intouchables]",
                            "language": "RU",
                            "type": null
                        },
                        {
                            "name": "Saikyô no futari",
                            "language": "JP",
                            "type": null
                        },
                        {
                            "name": "Amigos",
                            "language": "CL",
                            "type": null
                        },
                        {
                            "name": "Mehubarim la'hayim",
                            "language": "IL",
                            "type": "Hebrew title"
                        },
                        {
                            "name": "Amigos para siempre",
                            "language": "VE",
                            "type": null
                        },
                        {
                            "name": "Prijatelja",
                            "language": "SI",
                            "type": null
                        },
                        {
                            "name": "En oväntad vänskap",
                            "language": "SE",
                            "type": null
                        },
                        {
                            "name": "Intocáveis",
                            "language": "BR",
                            "type": null
                        },
                        {
                            "name": "Intouchables – Ziemlich beste Freunde",
                            "language": "DE",
                            "type": null
                        },
                        {
                            "name": "언터처블 1%의 우정",
                            "language": "KR",
                            "type": null
                        },
                        {
                            "name": "De Uroerlige",
                            "language": "DK",
                            "type": null
                        }
                    ],
                    "shortDescription": "Аристократ на коляске нанимает в сиделки бывшего заключенного. Искрометная французская комедия с Омаром Си",
                    "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/1531675/2a0000017f0262661cde61dc260cb86f7830/orig"
                    },
                    "watchability": {
                        "items": [
                            {
                                "name": "Okko",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                                },
                                "url": "https://okko.tv/movie/intouchables?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                            },
                            {
                                "name": "Иви",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/2419418/0dfd1724-848f-4725-9160-abc571f41c11/orig"
                                },
                                "url": "https://www.ivi.ru/watch/109726?utm_source=yandex&utm_medium=wizard"
                            },
                            {
                                "name": "START",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/1a632675-0d99-4268-bd5e-d5f3dd800174/orig"
                                },
                                "url": "https://start.ru/watch/1-1?utm_source=kinopoisk&utm_medium=feed_watch&utm_campaign=1-1"
                            }
                        ]
                    }
                },
                {
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
                },
                {
                    "externalId": {
                        "kpHD": "4d05a2c799d34ac9bb644af70c8e5dc1",
                        "imdb": "tt0993846",
                        "tmdb": 106646
                    },
                    "rating": {
                        "kp": 7.965,
                        "imdb": 8.2,
                        "filmCritics": 7.8,
                        "russianFilmCritics": 77.4194,
                        "await": 96.62
                    },
                    "votes": {
                        "kp": 1078130,
                        "imdb": 1443843,
                        "filmCritics": 289,
                        "russianFilmCritics": 31,
                        "await": 43024
                    },
                    "movieLength": 180,
                    "id": 462682,
                    "type": "movie",
                    "name": "Волк с Уолл-стрит",
                    "description": "1987 год. Джордан Белфорт становится брокером в успешном инвестиционном банке. Вскоре банк закрывается после внезапного обвала индекса Доу-Джонса. По совету жены Терезы Джордан устраивается в небольшое заведение, занимающееся мелкими акциями. Его настойчивый стиль общения с клиентами и врождённая харизма быстро даёт свои плоды. Он знакомится с соседом по дому Донни, торговцем, который сразу находит общий язык с Джорданом и решает открыть с ним собственную фирму. В качестве сотрудников они нанимают нескольких друзей Белфорта, его отца Макса и называют компанию «Стрэттон Оукмонт». В свободное от работы время Джордан прожигает жизнь: лавирует от одной вечеринки к другой, вступает в сексуальные отношения с проститутками, употребляет множество наркотических препаратов, в том числе кокаин и кваалюд. Однажды наступает момент, когда быстрым обогащением Белфорта начинает интересоваться агент ФБР...",
                    "year": 2013,
                    "poster": {
                        "url": "https://st.kp.yandex.net/images/film_big/462682.jpg",
                        "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_462682.jpg"
                    },
                    "genres": [
                        {
                            "name": "драма"
                        },
                        {
                            "name": "криминал"
                        },
                        {
                            "name": "биография"
                        },
                        {
                            "name": "комедия"
                        }
                    ],
                    "countries": [
                        {
                            "name": "США"
                        }
                    ],
                    "alternativeName": "The Wolf of Wall Street",
                    "enName": null,
                    "names": [
                        {
                            "name": "Волк с Уолл-стрит"
                        },
                        {
                            "name": "The Wolf of Wall Street"
                        }
                    ],
                    "color": "#CCA97B",
                    "shortDescription": "Восхождение циника-гедониста на бизнес-олимп 1980-х. Блистательный тандем Леонардо ДиКаприо и Мартина Скорсезе",
                    "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/1534341/2a00000178c64fe43f3b567acaaa73e861f0/orig"
                    },
                    "watchability": {
                        "items": [
                            {
                                "name": "Okko",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                                },
                                "url": "https://okko.tv/movie/the-wolf-of-wall-street?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                            },
                            {
                                "name": "Иви",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/2419418/0dfd1724-848f-4725-9160-abc571f41c11/orig"
                                },
                                "url": "https://www.ivi.ru/watch/103304?utm_source=yandex&utm_medium=wizard"
                            },
                            {
                                "name": "KION",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/daeb142e-3ecc-4bb2-9bff-4827996643ab/orig"
                                },
                                "url": "https://kion.ru/video/movie/377166559?utm_source=yandex&utm_medium=organic&utm_campaign=wizard"
                            },
                            {
                                "name": "PREMIER",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/0f86e907-9531-47e9-87bd-5101a08d4e30/orig"
                                },
                                "url": "https://premier.one/show/17016?utm_source=yandex&utm_medium=yandex_feed_search&utm_campaign=yandex_feed"
                            },
                            {
                                "name": "Триколор Кино и ТВ",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/947e777c-2f73-4cbc-b09d-6bfa3966ba13/orig"
                                },
                                "url": "https://kino.tricolor.tv/watch/volk-s-uoll-strit-2013/?utm_source=yandex&utm_medium=feed"
                            },
                            {
                                "name": "Wink",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/1672343/54096cbe-cc3b-41c9-8e44-990ebbca8d61/orig"
                                },
                                "url": "https://wink.ru/media_items/55004454?utm_source=yandex&utm_medium=koldunschick&utm_content=name"
                            },
                            {
                                "name": "viju",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/224348/8b10c84b-e1bb-4493-9bc4-6ee56554403a/orig"
                                },
                                "url": "https://viju.ru/filmy/volk-s-uoll-strit-2013?utm_campaign=yandex_content_integration&utm_medium=affiliate&utm_source=yandex"
                            },
                            {
                                "name": "НТВ-ПЛЮС Онлайн ТВ",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/223007/c6b9b3d8-3258-4394-9cae-c86fdb56a0c6/orig"
                                },
                                "url": "https://ntvplus.tv/watch/17926-volk-s-uoll-strit?utm_source=kinopoisk"
                            },
                            {
                                "name": "24ТВ",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/2439731/85e83b8d-1159-4781-bad5-ce0a809b3843/orig"
                                },
                                "url": "https://24h.tv/contents/2013-the-wolf-of-wall-street-546310419099157304"
                            }
                        ]
                    }
                },
                {
                    "id": 41519,
                    "type": "movie",
                    "externalId": {
                        "kpHD": "492c446642bf8dc88f0abcb9a4b02f7f",
                        "imdb": "tt0118767",
                        "tmdb": 20992
                    },
                    "name": "Брат",
                    "rating": {
                        "kp": 8.291,
                        "imdb": 7.8,
                        "filmCritics": 7.6,
                        "russianFilmCritics": 0,
                        "await": 0
                    },
                    "description": "Демобилизовавшись, Данила Багров вернулся в родной городок. Но скучная жизнь российской провинции не устраивала его, и он решился податься в Петербург, где, по слухам, уже несколько лет процветает его старший брат. Данила нашел брата. Но все оказалось не так просто — брат работает наемным убийцей.",
                    "votes": {
                        "kp": 1006912,
                        "imdb": 22517,
                        "filmCritics": 5,
                        "russianFilmCritics": 2,
                        "await": 0
                    },
                    "year": 1997,
                    "poster": {
                        "url": "https://st.kp.yandex.net/images/film_big/41519.jpg",
                        "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_41519.jpg"
                    },
                    "genres": [
                        {
                            "name": "драма"
                        },
                        {
                            "name": "криминал"
                        },
                        {
                            "name": "боевик"
                        }
                    ],
                    "countries": [
                        {
                            "name": "Россия"
                        }
                    ],
                    "alternativeName": null,
                    "enName": null,
                    "movieLength": 100,
                    "names": [
                        {
                            "name": "Брат"
                        },
                        {
                            "name": "Brat",
                            "language": "US",
                            "type": null
                        },
                        {
                            "name": "Brother",
                            "language": "US",
                            "type": null
                        }
                    ],
                    "shortDescription": "Дембель Данила Багров защищает слабых в Петербурге 1990-х. Фильм, сделавший Сергея Бодрова народным героем",
                    "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/2439731/2a0000017c61da4f185f94d808f4d90182a8/orig"
                    },
                    "watchability": {
                        "items": [
                            {
                                "name": "Okko",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                                },
                                "url": "https://okko.tv/movie/brat?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                            },
                            {
                                "name": "Иви",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/2419418/0dfd1724-848f-4725-9160-abc571f41c11/orig"
                                },
                                "url": "https://www.ivi.ru/watch/33531?utm_source=yandex&utm_medium=wizard"
                            },
                            {
                                "name": "KION",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/daeb142e-3ecc-4bb2-9bff-4827996643ab/orig"
                                },
                                "url": "https://kion.ru/video/movie/284738273?utm_source=yandex&utm_medium=organic&utm_campaign=wizard"
                            },
                            {
                                "name": "PREMIER",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/0f86e907-9531-47e9-87bd-5101a08d4e30/orig"
                                },
                                "url": "https://premier.one/show/9764?utm_source=yandex&utm_medium=yandex_feed_search&utm_campaign=yandex_feed"
                            },
                            {
                                "name": "Wink",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/1672343/54096cbe-cc3b-41c9-8e44-990ebbca8d61/orig"
                                },
                                "url": "https://wink.ru/media_items/70749607?utm_source=yandex&utm_medium=koldunschick&utm_content=name"
                            },
                            {
                                "name": "viju",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/224348/8b10c84b-e1bb-4493-9bc4-6ee56554403a/orig"
                                },
                                "url": "https://viju.ru/filmy/brat?utm_campaign=yandex_content_integration&utm_medium=affiliate&utm_source=yandex"
                            },
                            {
                                "name": "24ТВ",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/2439731/85e83b8d-1159-4781-bad5-ce0a809b3843/orig"
                                },
                                "url": "https://24h.tv/contents/1997-brother-546314390643671143"
                            }
                        ]
                    }
                }
            ],
        }
    }



    componentDidMount = async () => {
        // await this.importMovies()

    }

    importMovies = async () => {

        let headers = {
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': apiKinopoisk,
            }
        }

        const response = await axios.get('https://api.kinopoisk.dev/v1/movie?limit=4&top250=%21null', headers);

        // console.log('Function response:', response.data.docs);
        this.setState({ arrOfNewMovies: response.data.docs })
        // console.log(this.state.arrOfNewMovies);
    }


    render() {
        // console.log(this.state.arrOfNewMovies);
        return (
            <div className="new column first-block">
                <h2>Новинки</h2>
                <div className="new-container">
                    <div className="main-left-container">
                        {this.state.arrOfNewMovies.map((obj, index) => {
                            if (index === 0) {
                                return (
                                    <div className={"newMovieStyle newMovie-container-" + Number(index + 1)} key={index} style={{
                                        backgroundImage: `linear-gradient(180deg, rgba(21, 26, 32, 0) 0%, rgba(21, 26, 32, 0.99) 100%), url(${obj.poster.url})`,
                                        backgroundPosition: "top center",
                                        backgroundSize: "cover",
                                    }}>
                                        <div className="newMovie-year">Год: {obj.year}</div>
                                        <div className="newMovie-title">{obj.name}</div>
                                        <div className="newMovie-shortDescription">{obj.shortDescription}</div>
                                        <div className="newMovie-rating-container">
                                            <div className="newMovie-rating">KP: {obj.rating.kp}</div>
                                            <div className="newMovie-rating">IMDB: {obj.rating.imdb}</div>
                                            <div className="newMovie-rating-button">Смотреть</div>
                                        </div>
                                    </div>
                                )
                            }
                        })}
                    </div>
                    <div className="additional-right-container">
                        {this.state.arrOfNewMovies.map((obj, index) => {
                            if (index !== 0 && index !== 3) {
                                return (
                                    <div className={"newMovieStyle newMovie-container-" + Number(index + 1)} key={index} style={{
                                        backgroundImage: `linear-gradient(180deg, rgba(21, 26, 32, 0) 0%, rgba(21, 26, 32, 0.99) 100%), url(${obj.poster.url})`,
                                        backgroundPosition: "top center",
                                        backgroundSize: "cover"
                                    }}>

                                        <div className="newMovie-year">Год: {obj.year}</div>
                                        <div className="newMovie-title">{obj.name}</div>
                                        <div className="newMovie-rating-container">
                                            <div className="newMovie-rating">KP: {obj.rating.kp}</div>
                                            <div className="newMovie-rating">IMDB: {obj.rating.imdb}</div>
                                            <div className="newMovie-rating-button">Смотреть</div>
                                        </div>

                                    </div>
                                )
                            } else if (index === 3) {
                                return (
                                    <div className={"newMovie-container-" + Number(index + 1)} key={index} style={{
                                        backgroundImage: `linear-gradient(180deg, rgba(21, 26, 32, 0) 0%, rgba(21, 26, 32, 0.99) 100%), url(${obj.poster.url})`,
                                        backgroundPosition: "top center",
                                        backgroundSize: "cover"
                                    }}>
                                        <div className="newMovie-title">{obj.name}</div>
                                        <div className="newMovie-rating-button">Смотреть</div>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>

            </div>
        )

    }





}

export default New