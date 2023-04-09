import React, { Component } from "react";
import apiKinopoisk from "./path/API";
import axios from "axios";
import { Link } from "react-router-dom";

class MoviesPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            arrOfMovieList: [
                {
                    "externalId": {
                        "kpHD": "422c2eeee174f1cda1d00737488edc1a",
                        "imdb": "tt1950186",
                        "tmdb": 359724
                    },
                    "rating": {
                        "kp": 8.243,
                        "imdb": 8.1,
                        "filmCritics": 7.8,
                        "russianFilmCritics": 81.8182,
                        "await": 96.61
                    },
                    "votes": {
                        "kp": 619692,
                        "imdb": 409096,
                        "filmCritics": 361,
                        "russianFilmCritics": 11,
                        "await": 13502
                    },
                    "movieLength": 152,
                    "id": 835086,
                    "type": "movie",
                    "name": "Ford против Ferrari",
                    "description": "В начале 1960-х Генри Форд II принимает решение улучшить имидж компании и сменить курс на производство более модных автомобилей. После неудавшейся попытки купить практически банкрота Ferrari американцы решают бросить вызов итальянским конкурентам на трассе и выиграть престижную гонку 24 часа Ле-Мана. Чтобы создать подходящую машину, компания нанимает автоконструктора Кэррола Шэлби, а тот отказывается работать без выдающегося, но, как считается, трудного в общении гонщика Кена Майлза. Вместе они принимаются за разработку впоследствии знаменитого спорткара Ford GT40.",
                    "year": 2019,
                    "poster": {
                        "url": "https://st.kp.yandex.net/images/film_big/835086.jpg",
                        "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_835086.jpg"
                    },
                    "genres": [
                        {
                            "name": "биография"
                        },
                        {
                            "name": "спорт"
                        },
                        {
                            "name": "драма"
                        },
                        {
                            "name": "боевик"
                        }
                    ],
                    "countries": [
                        {
                            "name": "США"
                        }
                    ],
                    "alternativeName": "Ford v Ferrari",
                    "enName": null,
                    "names": [
                        {
                            "name": "Ford против Ferrari"
                        },
                        {
                            "name": "Ford v Ferrari"
                        }
                    ],
                    "shortDescription": "Автоконструктор и строптивый гонщик против непобедимых конкурентов. Биографическая драма о любви к скорости",
                    "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/223007/2a000001701068309f9ea919c912ea2c9f41/orig"
                    },
                    "watchability": {
                        "items": [
                            {
                                "name": "Okko",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                                },
                                "url": "https://okko.tv/movie/ford-v-ferrari?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                            },
                            {
                                "name": "24ТВ",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/2439731/85e83b8d-1159-4781-bad5-ce0a809b3843/orig"
                                },
                                "url": "https://24h.tv/contents/2019-ford-v-ferrari-546396181966618706"
                            }
                        ]
                    }
                },
                {
                    "externalId": {
                        "kpHD": "4db90bea36e15d319bd62aafb769f487",
                        "imdb": "tt0988045",
                        "tmdb": 10528
                    },
                    "rating": {
                        "kp": 8.063,
                        "imdb": 7.6,
                        "filmCritics": 6.2,
                        "russianFilmCritics": 100,
                        "await": 83.06
                    },
                    "votes": {
                        "kp": 617509,
                        "imdb": 644052,
                        "filmCritics": 249,
                        "russianFilmCritics": 8,
                        "await": 29387
                    },
                    "movieLength": 128,
                    "id": 420923,
                    "type": "movie",
                    "name": "Шерлок Холмс",
                    "description": "Величайший в истории сыщик Шерлок Холмс вместе со своим верным соратником Ватсоном вступают в схватку, требующую нешуточной физической и умственной подготовки, ведь их враг представляет угрозу для всего Лондона.",
                    "year": 2009,
                    "poster": {
                        "url": "https://st.kp.yandex.net/images/film_big/420923.jpg",
                        "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_420923.jpg"
                    },
                    "genres": [
                        {
                            "name": "боевик"
                        },
                        {
                            "name": "приключения"
                        },
                        {
                            "name": "триллер"
                        },
                        {
                            "name": "драма"
                        },
                        {
                            "name": "комедия"
                        },
                        {
                            "name": "криминал"
                        },
                        {
                            "name": "детектив"
                        }
                    ],
                    "countries": [
                        {
                            "name": "США"
                        },
                        {
                            "name": "Германия"
                        },
                        {
                            "name": "Великобритания"
                        },
                        {
                            "name": "Австралия"
                        }
                    ],
                    "alternativeName": "Sherlock Holmes",
                    "enName": null,
                    "names": [
                        {
                            "name": "Шерлок Холмс"
                        },
                        {
                            "name": "Sherlock Holmes"
                        },
                        {
                            "name": "Serlok Holms",
                            "language": "RS",
                            "type": null
                        },
                        {
                            "name": "Shârokku Hômuzu",
                            "language": "JP",
                            "type": null
                        },
                        {
                            "name": "Sherlock Holmes 1",
                            "language": "BR",
                            "type": null
                        },
                        {
                            "name": "01 Sherlock Holmes",
                            "language": "CZ",
                            "type": null
                        },
                        {
                            "name": "Sherlock Holmes 1",
                            "language": "CA",
                            "type": null
                        }
                    ],
                    "shortDescription": "Великий сыщик преследует воскресшего из мертвых чернокнижника. Бодрый детектив Гая Ричи, первая часть франшизы",
                    "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/1672343/2a00000170ed76563839fe9830642b60c50b/orig"
                    },
                    "watchability": {
                        "items": null
                    }
                },
                {
                    "externalId": {
                        "kpHD": "4b1c140be7efc668a518bb8718ba159f",
                        "imdb": "tt0120737",
                        "tmdb": 120
                    },
                    "rating": {
                        "kp": 8.603,
                        "imdb": 8.8,
                        "filmCritics": 8.2,
                        "russianFilmCritics": 71.4286,
                        "await": 0
                    },
                    "votes": {
                        "kp": 610902,
                        "imdb": 1900616,
                        "filmCritics": 234,
                        "russianFilmCritics": 7,
                        "await": 0
                    },
                    "movieLength": 178,
                    "id": 328,
                    "type": "movie",
                    "name": "Властелин колец: Братство Кольца",
                    "description": "Сказания о Средиземье — это хроника Великой войны за Кольцо, длившейся не одну тысячу лет. Тот, кто владел Кольцом, получал неограниченную власть, но был обязан служить злу. \n\nТихая деревня, где живут хоббиты. Придя на 111-й день рождения к своему старому другу Бильбо Бэггинсу, волшебник Гэндальф начинает вести разговор о кольце, которое Бильбо нашел много лет назад. Это кольцо принадлежало когда-то темному властителю Средиземья Саурону, и оно дает большую власть своему обладателю. Теперь Саурон хочет вернуть себе власть над Средиземьем. Бильбо отдает Кольцо племяннику Фродо, чтобы тот отнёс его к Роковой Горе и уничтожил.",
                    "year": 2001,
                    "poster": {
                        "url": "https://st.kp.yandex.net/images/film_big/328.jpg",
                        "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_328.jpg"
                    },
                    "genres": [
                        {
                            "name": "фэнтези"
                        },
                        {
                            "name": "приключения"
                        },
                        {
                            "name": "драма"
                        },
                        {
                            "name": "боевик"
                        }
                    ],
                    "countries": [
                        {
                            "name": "Новая Зеландия"
                        },
                        {
                            "name": "США"
                        }
                    ],
                    "alternativeName": "The Lord of the Rings: The Fellowship of the Ring",
                    "enName": null,
                    "names": [
                        {
                            "name": "Властелин колец: Братство Кольца"
                        },
                        {
                            "name": "The Lord of the Rings: The Fellowship of the Ring"
                        },
                        {
                            "name": "Sagan om ringen",
                            "language": "SE",
                            "type": "short title"
                        },
                        {
                            "name": "LOTR",
                            "language": "US",
                            "type": null
                        },
                        {
                            "name": "Eventyret om ringen",
                            "language": "DK",
                            "type": "short title"
                        },
                        {
                            "name": "Sagan om ringen: Härskarringen",
                            "language": "FI",
                            "type": "Swedish title"
                        },
                        {
                            "name": "The Fellowship of the Ring",
                            "language": "US",
                            "type": "short title"
                        },
                        {
                            "name": "Le Seigneur des Anneaux: La Communauté de l'Anneau",
                            "language": "FR",
                            "type": null
                        },
                        {
                            "name": "La Communauté de l'Anneau",
                            "language": "FR",
                            "type": "Short title"
                        },
                        {
                            "name": "指环王1：护戒使者",
                            "language": "CN",
                            "type": null
                        },
                        {
                            "name": "指环王1：魔戒再现",
                            "language": "CN",
                            "type": null
                        },
                        {
                            "name": "Gredzenu pavēlnieks: Gredzena brālība",
                            "language": "LV",
                            "type": null
                        },
                        {
                            "name": "魔戒首部曲：魔戒現身",
                            "language": "HK",
                            "type": null
                        },
                        {
                            "name": "Господар на прстените: Дружината на Прстенот",
                            "language": "MK",
                            "type": null
                        },
                        {
                            "name": "อภินิหารแหวนครองพิภพ",
                            "language": "TH",
                            "type": null
                        },
                        {
                            "name": "01 - Le Seigneur des anneaux - La Communauté de l'anneau",
                            "language": "FR",
                            "type": null
                        },
                        {
                            "name": "Der Herr der Ringe - Die Gefaehrten",
                            "language": "DE",
                            "type": null
                        },
                        {
                            "name": "La comunidad del anillo",
                            "language": "ES",
                            "type": null
                        },
                        {
                            "name": "ESDLA",
                            "language": "ES",
                            "type": "short title"
                        }
                    ],
                    "shortDescription": "Фродо Бэггинс отправляется спасать Средиземье. Первая часть культовой фэнтези-трилогии Питера Джексона",
                    "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/1531675/2a000001714e8c3b6a57d19aebf13bcafe4f/orig"
                    },
                    "watchability": {
                        "items": null
                    }
                },
                {
                    "externalId": {
                        "kpHD": "4964f658870ba92086f5bc1f7d675331",
                        "imdb": "tt0172495",
                        "tmdb": 98
                    },
                    "rating": {
                        "kp": 8.582,
                        "imdb": 8.5,
                        "filmCritics": 7.4,
                        "russianFilmCritics": 50,
                        "await": 0
                    },
                    "votes": {
                        "kp": 608839,
                        "imdb": 1521820,
                        "filmCritics": 253,
                        "russianFilmCritics": 4,
                        "await": 1
                    },
                    "movieLength": 155,
                    "id": 474,
                    "type": "movie",
                    "name": "Гладиатор",
                    "description": "В великой Римской империи не было военачальника, равного генералу Максимусу. Непобедимые легионы, которыми командовал этот благородный воин, боготворили его и могли последовать за ним даже в ад.\n\nНо случилось так, что отважный Максимус, готовый сразиться с любым противником в честном бою, оказался бессилен против вероломных придворных интриг. Генерала предали и приговорили к смерти. Чудом избежав гибели, Максимус становится гладиатором.\n\nБыстро снискав себе славу в кровавых поединках, он оказывается в знаменитом римском Колизее, на арене которого он встретится в смертельной схватке со своим заклятым врагом...",
                    "year": 2000,
                    "poster": {
                        "url": "https://st.kp.yandex.net/images/film_big/474.jpg",
                        "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_474.jpg"
                    },
                    "genres": [
                        {
                            "name": "история"
                        },
                        {
                            "name": "боевик"
                        },
                        {
                            "name": "драма"
                        },
                        {
                            "name": "приключения"
                        }
                    ],
                    "countries": [
                        {
                            "name": "США"
                        },
                        {
                            "name": "Великобритания"
                        },
                        {
                            "name": "Мальта"
                        },
                        {
                            "name": "Марокко"
                        }
                    ],
                    "alternativeName": "Gladiator",
                    "enName": null,
                    "names": [
                        {
                            "name": "Гладиатор"
                        },
                        {
                            "name": "Gladiator"
                        },
                        {
                            "name": "Gladiator: 10th Anniversary Extended Remastered Edition",
                            "language": "US",
                            "type": null
                        },
                        {
                            "name": "Gladiator (Extended Remastered)",
                            "language": "CA",
                            "type": null
                        },
                        {
                            "name": "Gladiator (Extended Reissue)",
                            "language": "CA",
                            "type": null
                        },
                        {
                            "name": "The Gladiators",
                            "language": "US",
                            "type": "working title"
                        },
                        {
                            "name": "Gladiator (Extended Edition)",
                            "language": "US",
                            "type": null
                        },
                        {
                            "name": "Гладiатор",
                            "language": "UA",
                            "type": null
                        },
                        {
                            "name": "글레디에이터",
                            "language": "KR",
                            "type": null
                        },
                        {
                            "name": "Gladiator - Extended Edition",
                            "language": "US",
                            "type": null
                        },
                        {
                            "name": "Gladiator (El gladiador)",
                            "language": "ES",
                            "type": "VOD Title"
                        }
                    ],
                    "shortDescription": "Отважный генерал, ставший рабом, мстит империи. Культовая историческая драма Ридли Скотта с пятью «Оскарами»",
                    "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/1531675/2a000001720e23e8084f0b54c4441bab5f0c/orig"
                    },
                    "watchability": {
                        "items": [
                            {
                                "name": "Иви",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/2419418/0dfd1724-848f-4725-9160-abc571f41c11/orig"
                                },
                                "url": "https://www.ivi.ru/watch/90284?utm_source=yandex&utm_medium=wizard"
                            },
                            {
                                "name": "Wink",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/1672343/54096cbe-cc3b-41c9-8e44-990ebbca8d61/orig"
                                },
                                "url": "https://wink.ru/media_items/70741468?utm_source=yandex&utm_medium=koldunschick&utm_content=name"
                            }
                        ]
                    }
                },
                {
                    "externalId": {
                        "kpHD": "468d3b0de3fd9aeba85fad1010196b86",
                        "imdb": "tt0088763",
                        "tmdb": 105
                    },
                    "rating": {
                        "kp": 8.644,
                        "imdb": 8.5,
                        "filmCritics": 8.8,
                        "russianFilmCritics": 0,
                        "await": 0
                    },
                    "votes": {
                        "kp": 604012,
                        "imdb": 1225473,
                        "filmCritics": 88,
                        "russianFilmCritics": 2,
                        "await": 1
                    },
                    "movieLength": 116,
                    "id": 476,
                    "type": "movie",
                    "name": "Назад в будущее",
                    "description": "Подросток Марти с помощью машины времени, сооружённой его другом-профессором доком Брауном, попадает из 80-х в далекие 50-е. Там он встречается со своими будущими родителями, ещё подростками, и другом-профессором, совсем молодым.",
                    "year": 1985,
                    "poster": {
                        "url": "https://st.kp.yandex.net/images/film_big/476.jpg",
                        "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_476.jpg"
                    },
                    "genres": [
                        {
                            "name": "фантастика"
                        },
                        {
                            "name": "комедия"
                        },
                        {
                            "name": "приключения"
                        }
                    ],
                    "countries": [
                        {
                            "name": "США"
                        }
                    ],
                    "alternativeName": "Back to the Future",
                    "enName": null,
                    "names": [
                        {
                            "name": "Назад в будущее"
                        },
                        {
                            "name": "Back to the Future"
                        },
                        {
                            "name": "Aftur til framtíðar",
                            "language": "IS",
                            "type": null
                        },
                        {
                            "name": "Vrnitev v prihodnost",
                            "language": "SI",
                            "type": null
                        },
                        {
                            "name": "Terug naar de Toekomst",
                            "language": "NL",
                            "type": null
                        },
                        {
                            "name": "Назад в будущee",
                            "language": "RU",
                            "type": null
                        },
                        {
                            "name": "Zurück in die Zukunft",
                            "language": "DE",
                            "type": null
                        },
                        {
                            "name": "Back to the Future 1",
                            "language": "US",
                            "type": "Series Title"
                        },
                        {
                            "name": "Повратак у будућност",
                            "language": "RS",
                            "type": null
                        },
                        {
                            "name": "Back to the Future Part 1",
                            "language": "US",
                            "type": null
                        },
                        {
                            "name": "Space Man From Pluto",
                            "language": "US",
                            "type": "Rejected Title"
                        }
                    ],
                    "shortDescription": "Квентин Тарантино: «Идеальный фильм!» ",
                    "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/223007/2a0000016eadd2590232b1f0f0ea7b27b0b0/orig"
                    },
                    "watchability": {
                        "items": [
                            {
                                "name": "Иви",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/2419418/0dfd1724-848f-4725-9160-abc571f41c11/orig"
                                },
                                "url": "https://www.ivi.ru/watch/90324?utm_source=yandex&utm_medium=wizard"
                            },
                            {
                                "name": "Wink",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/1672343/54096cbe-cc3b-41c9-8e44-990ebbca8d61/orig"
                                },
                                "url": "https://wink.ru/media_items/72678262?utm_source=yandex&utm_medium=koldunschick&utm_content=name"
                            },
                            {
                                "name": "Смотрёшка",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/236744/c88e652e-2eb1-472d-b636-a266364dbf58/orig"
                                },
                                "url": "https://smotreshka.tv/vod/vipplay/61c561e4bb003f9003c75399?utm_source=yandex_search&utm_campaign=yandex_feed&utm_term=viju&utm_content=Viju"
                            }
                        ]
                    }
                },
                {
                    "id": 44745,
                    "type": "movie",
                    "externalId": {
                        "kpHD": "4637107f64bc37a094b10d911ee02e93",
                        "imdb": "tt0060584",
                        "tmdb": 20878
                    },
                    "name": "Кавказская пленница, или Новые приключения Шурика",
                    "rating": {
                        "kp": 8.462,
                        "imdb": 8.3,
                        "filmCritics": 0,
                        "russianFilmCritics": 0,
                        "await": 0
                    },
                    "description": "Отправившись в одну из горных республик собирать фольклор, студент Шурик влюбляется в симпатичную девушку Нину - спортсменку, отличницу, комсомолку и просто красавицу. Но её внезапно похищают банда их трёх человек, чтобы насильно выдать замуж. Наивный Шурик не сразу сообразил, что творится у него под носом, - однако затем отважно ринулся освобождать кавказскую пленницу.",
                    "votes": {
                        "kp": 603963,
                        "imdb": 12665,
                        "filmCritics": 0,
                        "russianFilmCritics": 0,
                        "await": 0
                    },
                    "year": 1966,
                    "poster": {
                        "url": "https://st.kp.yandex.net/images/film_big/44745.jpg",
                        "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_44745.jpg"
                    },
                    "genres": [
                        {
                            "name": "комедия"
                        },
                        {
                            "name": "приключения"
                        },
                        {
                            "name": "мелодрама"
                        },
                        {
                            "name": "мюзикл"
                        }
                    ],
                    "countries": [
                        {
                            "name": "СССР"
                        }
                    ],
                    "alternativeName": null,
                    "enName": null,
                    "names": [
                        {
                            "name": "Кавказская пленница, или Новые приключения Шурика"
                        },
                        {
                            "name": "Kidnapping, Caucasian Style",
                            "language": "GB",
                            "type": null
                        },
                        {
                            "name": "Abduction In The Caucasus",
                            "language": "US",
                            "type": "Mosfilm YouTube subtitle translation"
                        },
                        {
                            "name": "The Caucasian Prisoner",
                            "language": "US",
                            "type": "Mosfilm YouTube"
                        }
                    ],
                    "movieLength": 82,
                    "shortDescription": "Отважный Шурик бросается спасать красавицу Нину из лап похитителей. Добродушная советская комедия",
                    "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/2419418/2a00000172283baed060fc41e02fa6cc1e88/orig"
                    },
                    "watchability": {
                        "items": [
                            {
                                "name": "Okko",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                                },
                                "url": "https://okko.tv/movie/kavkazskaja-plennica-ili-novye-prikljuchenija-shurika?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                            },
                            {
                                "name": "Иви",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/2419418/0dfd1724-848f-4725-9160-abc571f41c11/orig"
                                },
                                "url": "https://www.ivi.ru/watch/53124?utm_source=yandex&utm_medium=wizard"
                            },
                            {
                                "name": "KION",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/daeb142e-3ecc-4bb2-9bff-4827996643ab/orig"
                                },
                                "url": "https://kion.ru/video/movie/599189136?utm_source=yandex&utm_medium=organic&utm_campaign=wizard"
                            },
                            {
                                "name": "PREMIER",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/0f86e907-9531-47e9-87bd-5101a08d4e30/orig"
                                },
                                "url": "https://premier.one/show/14586?utm_source=yandex&utm_medium=yandex_feed_search&utm_campaign=yandex_feed"
                            },
                            {
                                "name": "Триколор Кино и ТВ",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/947e777c-2f73-4cbc-b09d-6bfa3966ba13/orig"
                                },
                                "url": "https://kino.tricolor.tv/watch/kavkazskaya-plennitsa-ili-novye-priklyucheniya-shurika-1966/?utm_source=yandex&utm_medium=feed"
                            }
                        ]
                    }
                },
                {
                    "externalId": {
                        "kpHD": "4508c727798ae209b6f18f57c04ec865",
                        "imdb": "tt3659388",
                        "tmdb": 286217
                    },
                    "rating": {
                        "kp": 7.759,
                        "imdb": 8,
                        "filmCritics": 7.9,
                        "russianFilmCritics": 95.2381,
                        "await": 97.82
                    },
                    "votes": {
                        "kp": 599551,
                        "imdb": 870674,
                        "filmCritics": 386,
                        "russianFilmCritics": 21,
                        "await": 59667
                    },
                    "movieLength": 144,
                    "id": 841700,
                    "type": "movie",
                    "name": "Марсианин",
                    "description": "Марсианская миссия «Арес-3» в процессе работы была вынуждена экстренно покинуть планету из-за надвигающейся песчаной бури. Инженер и биолог Марк Уотни получил повреждение скафандра во время песчаной бури. Сотрудники миссии, посчитав его погибшим, эвакуировались с планеты, оставив Марка одного.\n\nОчнувшись, Уотни обнаруживает, что связь с Землёй отсутствует, но при этом полностью функционирует жилой модуль. Главный герой начинает искать способ продержаться на имеющихся запасах еды, витаминов, воды и воздуха ещё 4 года до прилёта следующей миссии «Арес-4».",
                    "year": 2015,
                    "poster": {
                        "url": "https://st.kp.yandex.net/images/film_big/841700.jpg",
                        "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_841700.jpg"
                    },
                    "genres": [
                        {
                            "name": "фантастика"
                        },
                        {
                            "name": "приключения"
                        }
                    ],
                    "countries": [
                        {
                            "name": "США"
                        },
                        {
                            "name": "Великобритания"
                        },
                        {
                            "name": "Венгрия"
                        },
                        {
                            "name": "Иордания"
                        }
                    ],
                    "alternativeName": "The Martian",
                    "enName": null,
                    "names": [
                        {
                            "name": "Марсианин"
                        },
                        {
                            "name": "The Martian"
                        }
                    ],
                    "shortDescription": "Инженер-биолог пытается выжить на Марсе, ожидая помощи с Земли. Научно-фантастический блокбастер Ридли Скотта",
                    "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/1672343/2a0000017c4ca064394d460243f06faf4702/orig"
                    },
                    "watchability": {
                        "items": [
                            {
                                "name": "Okko",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                                },
                                "url": "https://okko.tv/movie/the-martian?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                            }
                        ]
                    }
                },
                {
                    "externalId": {
                        "kpHD": "4319afe5d620cda19b8d2588e9081849",
                        "imdb": "tt0304141",
                        "tmdb": 673
                    },
                    "rating": {
                        "kp": 8.219,
                        "imdb": 7.9,
                        "filmCritics": 7.9,
                        "russianFilmCritics": 80,
                        "await": 0
                    },
                    "votes": {
                        "kp": 598548,
                        "imdb": 649615,
                        "filmCritics": 259,
                        "russianFilmCritics": 5,
                        "await": 0
                    },
                    "movieLength": 142,
                    "id": 322,
                    "type": "movie",
                    "name": "Гарри Поттер и узник Азкабана",
                    "description": "В третьей части истории о юном волшебнике полюбившиеся всем герои — Гарри Поттер, Рон и Гермиона — возвращаются уже на третий курс школы чародейства и волшебства Хогвартс. На этот раз они должны раскрыть тайну узника, сбежавшего из зловещей тюрьмы Азкабан, чье пребывание на воле создает для Гарри смертельную опасность...",
                    "year": 2004,
                    "poster": {
                        "url": "https://st.kp.yandex.net/images/film_big/322.jpg",
                        "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_322.jpg"
                    },
                    "genres": [
                        {
                            "name": "фэнтези"
                        },
                        {
                            "name": "приключения"
                        },
                        {
                            "name": "семейный"
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
                    "alternativeName": "Harry Potter and the Prisoner of Azkaban",
                    "enName": null,
                    "names": [
                        {
                            "name": "Гарри Поттер и узник Азкабана"
                        },
                        {
                            "name": "Harry Potter and the Prisoner of Azkaban"
                        }
                    ],
                    "shortDescription": "Беглый маг, тайны прошлого и путешествия во времени. В третьей части поттерианы Альфонсо Куарон сгущает краски",
                    "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/223007/2a0000017e1279bdad156b0db18e10058195/orig"
                    },
                    "watchability": {
                        "items": null
                    }
                },
                {
                    "id": 389,
                    "type": "movie",
                    "externalId": {
                        "kpHD": null,
                        "imdb": "tt0110413",
                        "tmdb": 101
                    },
                    "name": "Леон",
                    "rating": {
                        "kp": 8.669,
                        "imdb": 8.5,
                        "filmCritics": 6.9,
                        "russianFilmCritics": 0,
                        "await": 0
                    },
                    "description": "Профессиональный убийца Леон неожиданно для себя самого решает помочь 12-летней соседке Матильде, семью которой убили коррумпированные полицейские.",
                    "votes": {
                        "kp": 598116,
                        "imdb": 1178494,
                        "filmCritics": 65,
                        "russianFilmCritics": 2,
                        "await": 0
                    },
                    "year": 1994,
                    "poster": {
                        "url": "https://st.kp.yandex.net/images/film_big/389.jpg",
                        "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_389.jpg"
                    },
                    "genres": [
                        {
                            "name": "боевик"
                        },
                        {
                            "name": "триллер"
                        },
                        {
                            "name": "драма"
                        },
                        {
                            "name": "криминал"
                        }
                    ],
                    "countries": [
                        {
                            "name": "Франция"
                        },
                        {
                            "name": "США"
                        }
                    ],
                    "alternativeName": "Léon",
                    "enName": null,
                    "names": [
                        {
                            "name": "Леон"
                        },
                        {
                            "name": "Léon"
                        },
                        {
                            "name": "The Professional",
                            "language": "US",
                            "type": null
                        },
                        {
                            "name": "Леон-кілер",
                            "language": "UA",
                            "type": null
                        },
                        {
                            "name": "Léon: Profesionalac",
                            "language": "HR",
                            "type": null
                        },
                        {
                            "name": "Léon: Der Profi",
                            "language": "DE",
                            "type": null
                        },
                        {
                            "name": "El Professional",
                            "language": "ES",
                            "type": "Catalan Title"
                        },
                        {
                            "name": "El Profesional",
                            "language": "ES",
                            "type": null
                        },
                        {
                            "name": "Leon",
                            "language": "GB",
                            "type": "Original Title"
                        },
                        {
                            "name": "Leon Zawodowiec",
                            "language": "PL",
                            "type": null
                        },
                        {
                            "name": "Léon: El Profesional",
                            "language": "CL",
                            "type": null
                        },
                        {
                            "name": "Léon, a profi",
                            "language": "HU",
                            "type": null
                        },
                        {
                            "name": "레옹",
                            "language": "KR",
                            "type": null
                        },
                        {
                            "name": "Leon",
                            "language": "DK",
                            "type": null
                        },
                        {
                            "name": "レオン オリジナル版",
                            "language": "JP",
                            "type": null
                        }
                    ],
                    "movieLength": 133,
                    "shortDescription": null,
                    "logo": {
                        "url": null
                    },
                    "watchability": {
                        "items": null
                    }
                },
                {
                    "externalId": {
                        "kpHD": "47cbb935e940cc7e824df1257053c6ec",
                        "imdb": "tt0383574",
                        "tmdb": 58
                    },
                    "rating": {
                        "kp": 8.137,
                        "imdb": 7.3,
                        "filmCritics": 6,
                        "russianFilmCritics": 0,
                        "await": 0
                    },
                    "votes": {
                        "kp": 589061,
                        "imdb": 730801,
                        "filmCritics": 229,
                        "russianFilmCritics": 1,
                        "await": 0
                    },
                    "movieLength": 151,
                    "id": 63991,
                    "type": "movie",
                    "name": "Пираты Карибского моря: Сундук мертвеца",
                    "description": "Вновь оказавшись в ирреальном мире, лихой капитан Джек Воробей неожиданно узнает, что является должником легендарного капитана «Летучего Голландца» Дэйви Джонса. Джек должен в кратчайшие сроки решить эту проблему, иначе ему грозит вечное проклятие и рабское существование после смерти. Вдобавок ко всему, срывается свадьба Уилла Тернера и Элизабет Суонн, которые вынуждены составить Джеку компанию в его злоключениях…",
                    "year": 2006,
                    "poster": {
                        "url": "https://st.kp.yandex.net/images/film_big/63991.jpg",
                        "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_63991.jpg"
                    },
                    "genres": [
                        {
                            "name": "фэнтези"
                        },
                        {
                            "name": "боевик"
                        },
                        {
                            "name": "приключения"
                        }
                    ],
                    "countries": [
                        {
                            "name": "США"
                        }
                    ],
                    "alternativeName": "Pirates of the Caribbean: Dead Man's Chest",
                    "enName": null,
                    "names": [
                        {
                            "name": "Пираты Карибского моря: Сундук мертвеца"
                        },
                        {
                            "name": "Pirates of the Caribbean: Dead Man's Chest"
                        }
                    ],
                    "shortDescription": "Джек Воробей и друзья выступают против морских гадов с «Летучего голландца». Вторая часть пиратской киносаги",
                    "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/223007/2a0000016eadd30c4364e99037d0995bd78d/orig"
                    },
                    "watchability": {
                        "items": [
                            {
                                "name": "Okko",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                                },
                                "url": "https://okko.tv/movie/pirates-of-the-caribbean-dead-mans-chest?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                            }
                        ]
                    }
                },
                {
                    "id": 61237,
                    "type": "movie",
                    "externalId": {
                        "kpHD": "40933bebfe15d69c91452061717f9243",
                        "imdb": "tt0371746",
                        "tmdb": 1726
                    },
                    "name": "Железный человек",
                    "rating": {
                        "kp": 7.959,
                        "imdb": 7.9,
                        "filmCritics": 7.7,
                        "russianFilmCritics": 100,
                        "await": 0
                    },
                    "description": "Миллиардер-изобретатель Тони Старк попадает в плен к Афганским террористам, которые пытаются заставить его создать оружие массового поражения. В тайне от своих захватчиков Старк конструирует высокотехнологичную киберброню, которая помогает  ему сбежать. Однако по возвращении в США он узнаёт, что в совете директоров его фирмы плетётся заговор, чреватый страшными последствиями. Используя своё последнее изобретение, Старк пытается решить проблемы своей компании радикально...",
                    "votes": {
                        "kp": 587476,
                        "imdb": 1073766,
                        "filmCritics": 282,
                        "russianFilmCritics": 7,
                        "await": 0
                    },
                    "year": 2008,
                    "poster": {
                        "url": "https://st.kp.yandex.net/images/film_big/61237.jpg",
                        "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_61237.jpg"
                    },
                    "genres": [
                        {
                            "name": "фантастика"
                        },
                        {
                            "name": "боевик"
                        },
                        {
                            "name": "приключения"
                        }
                    ],
                    "countries": [
                        {
                            "name": "США"
                        },
                        {
                            "name": "Канада"
                        }
                    ],
                    "alternativeName": "Iron Man",
                    "enName": null,
                    "movieLength": 121,
                    "names": [
                        {
                            "name": "Железный человек"
                        },
                        {
                            "name": "Iron Man"
                        }
                    ],
                    "shortDescription": "Попав в плен, Тони Старк изобретает суперкостюм и спасает мир. Блокбастер, запустивший киновселенную Marvel",
                    "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/2385704/2a0000016e4acdd81a988eaa0b5b63668d37/orig"
                    },
                    "watchability": {
                        "items": [
                            {
                                "name": "Okko",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                                },
                                "url": "https://okko.tv/movie/iron-man?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                            }
                        ]
                    }
                },
                {
                    "externalId": {
                        "kpHD": "4ac4fca3f9f26eef96019e3b403c5be7",
                        "imdb": "tt1670345",
                        "tmdb": 75656
                    },
                    "rating": {
                        "kp": 7.714,
                        "imdb": 7.2,
                        "filmCritics": 5.8,
                        "russianFilmCritics": 60,
                        "await": 96.42
                    },
                    "votes": {
                        "kp": 587048,
                        "imdb": 672524,
                        "filmCritics": 173,
                        "russianFilmCritics": 15,
                        "await": 37930
                    },
                    "movieLength": 115,
                    "id": 522892,
                    "type": "movie",
                    "name": "Иллюзия обмана",
                    "description": "Команда лучших иллюзионистов мира проворачивает дерзкие ограбления прямо во время своих шоу, играя в кошки-мышки с агентами ФБР.",
                    "year": 2013,
                    "poster": {
                        "url": "https://st.kp.yandex.net/images/film_big/522892.jpg",
                        "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_522892.jpg"
                    },
                    "genres": [
                        {
                            "name": "криминал"
                        },
                        {
                            "name": "триллер"
                        },
                        {
                            "name": "детектив"
                        }
                    ],
                    "countries": [
                        {
                            "name": "США"
                        },
                        {
                            "name": "Франция"
                        }
                    ],
                    "alternativeName": "Now You See Me",
                    "enName": null,
                    "names": [
                        {
                            "name": "Иллюзия обмана"
                        },
                        {
                            "name": "Now You See Me"
                        }
                    ],
                    "shortDescription": "Банда иллюзионистов грабит счета коррупционеров. Триллер с криминальными фокусами и звездным составом",
                    "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/374297/2a0000017a5c2c31264e0df936d733bcbc83/orig"
                    },
                    "watchability": {
                        "items": [
                            {
                                "name": "Okko",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                                },
                                "url": "https://okko.tv/movie/now-you-see-me?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                            },
                            {
                                "name": "Иви",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/2419418/0dfd1724-848f-4725-9160-abc571f41c11/orig"
                                },
                                "url": "https://www.ivi.ru/watch/97804?utm_source=yandex&utm_medium=wizard"
                            },
                            {
                                "name": "START",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/1a632675-0d99-4268-bd5e-d5f3dd800174/orig"
                                },
                                "url": "https://start.ru/watch/illyuziya-obmana?utm_source=kinopoisk&utm_medium=feed_watch&utm_campaign=illyuziya-obmana"
                            },
                            {
                                "name": "KION",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/daeb142e-3ecc-4bb2-9bff-4827996643ab/orig"
                                },
                                "url": "https://kion.ru/video/movie/508591726?utm_source=yandex&utm_medium=organic&utm_campaign=wizard"
                            },
                            {
                                "name": "PREMIER",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/0f86e907-9531-47e9-87bd-5101a08d4e30/orig"
                                },
                                "url": "https://premier.one/show/8723?utm_source=yandex&utm_medium=yandex_feed_search&utm_campaign=yandex_feed"
                            },
                            {
                                "name": "Триколор Кино и ТВ",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/947e777c-2f73-4cbc-b09d-6bfa3966ba13/orig"
                                },
                                "url": "https://kino.tricolor.tv/watch/illyuziya-obmana-2-2016/?utm_source=yandex&utm_medium=feed"
                            },
                            {
                                "name": "Wink",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/1672343/54096cbe-cc3b-41c9-8e44-990ebbca8d61/orig"
                                },
                                "url": "https://wink.ru/media_items/54985056?utm_source=yandex&utm_medium=koldunschick&utm_content=name"
                            },
                            {
                                "name": "viju",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/224348/8b10c84b-e1bb-4493-9bc4-6ee56554403a/orig"
                                },
                                "url": "https://viju.ru/filmy/illyuziya-obmana?utm_campaign=yandex_content_integration&utm_medium=affiliate&utm_source=yandex"
                            }
                        ]
                    }
                },
                {
                    "externalId": {
                        "kpHD": "4261bfa5447761298397bd57fe0341fb",
                        "imdb": "tt0119472",
                        "tmdb": 158
                    },
                    "rating": {
                        "kp": 8.634,
                        "imdb": 7.8,
                        "filmCritics": 0,
                        "russianFilmCritics": 100,
                        "await": 0
                    },
                    "votes": {
                        "kp": 581854,
                        "imdb": 31739,
                        "filmCritics": 0,
                        "russianFilmCritics": 3,
                        "await": 3
                    },
                    "movieLength": 87,
                    "id": 32898,
                    "type": "movie",
                    "name": "Достучаться до небес",
                    "description": "Волею судеб две абсолютные противоположности, тихоня Руди и разгильдяй Мартин, оказываются в одной больничной палате. Узнав неутешительные прогнозы, друзья решают использовать последние дни на полную катушку — угнать машину с деньгами, напиться текилы, и, конечно, увидеть море.",
                    "year": 1997,
                    "poster": {
                        "url": "https://st.kp.yandex.net/images/film_big/32898.jpg",
                        "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_32898.jpg"
                    },
                    "genres": [
                        {
                            "name": "драма"
                        },
                        {
                            "name": "комедия"
                        },
                        {
                            "name": "криминал"
                        }
                    ],
                    "countries": [
                        {
                            "name": "Германия"
                        }
                    ],
                    "alternativeName": "Knockin' on Heaven's Door",
                    "enName": null,
                    "names": [
                        {
                            "name": "Достучаться до небес"
                        },
                        {
                            "name": "Knockin' on Heaven's Door"
                        },
                        {
                            "name": "Knocking on Heaven's Door",
                            "language": "US",
                            "type": null
                        },
                        {
                            "name": "Paradis Express",
                            "language": "FR",
                            "type": null
                        },
                        {
                            "name": "Batendo na Porta do Céu",
                            "language": "BR",
                            "type": null
                        },
                        {
                            "name": "Dostuchat'sja do nebes",
                            "language": "RU",
                            "type": null
                        }
                    ],
                    "shortDescription": "Смертельно больные Мартин и Руди едут к морю на угнанной машине. Роль, сделавшая Тиля Швайгера суперзвездой",
                    "logo": {
                        "url": null
                    },
                    "watchability": {
                        "items": [
                            {
                                "name": "Okko",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                                },
                                "url": "https://okko.tv/movie/knockin-on-heavens-door?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                            },
                            {
                                "name": "Wink",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/1672343/54096cbe-cc3b-41c9-8e44-990ebbca8d61/orig"
                                },
                                "url": "https://wink.ru/media_items/149581931?utm_source=yandex&utm_medium=koldunschick&utm_content=name"
                            },
                            {
                                "name": "Смотрёшка",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/236744/c88e652e-2eb1-472d-b636-a266364dbf58/orig"
                                },
                                "url": "https://smotreshka.tv/vod/vipplay/620df23a686730755e73f142?utm_source=yandex_search&utm_campaign=yandex_feed&utm_term=viju&utm_content=Viju"
                            },
                            {
                                "name": "24ТВ",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/2439731/85e83b8d-1159-4781-bad5-ce0a809b3843/orig"
                                },
                                "url": "https://24h.tv/contents/1997-knockin-on-heavens-door-557614704239837713"
                            }
                        ]
                    }
                },
                {
                    "id": 195334,
                    "type": "movie",
                    "externalId": {
                        "kpHD": "4a1b9b7ca81e26789bdd29fdf3c424db",
                        "imdb": "tt0482571",
                        "tmdb": 1124
                    },
                    "name": "Престиж",
                    "rating": {
                        "kp": 8.519,
                        "imdb": 8.5,
                        "filmCritics": 7.1,
                        "russianFilmCritics": 33.3333,
                        "await": 0
                    },
                    "description": "Роберт и Альфред - фокусники-иллюзионисты, которые на рубеже XIX и XX веков соперничали друг с другом в Лондоне. С годами их дружеская конкуренция на профессиональной почве перерастает в настоящую войну.\n\nОни готовы на все, чтобы выведать друг у друга секреты фантастических трюков и сорвать их исполнение. Непримиримая вражда, вспыхнувшая между ними, начинает угрожать жизни окружающих их людей…",
                    "votes": {
                        "kp": 576191,
                        "imdb": 1352357,
                        "filmCritics": 204,
                        "russianFilmCritics": 3,
                        "await": 6
                    },
                    "year": 2006,
                    "poster": {
                        "url": "https://st.kp.yandex.net/images/film_big/195334.jpg",
                        "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_195334.jpg"
                    },
                    "genres": [
                        {
                            "name": "триллер"
                        },
                        {
                            "name": "фантастика"
                        },
                        {
                            "name": "драма"
                        },
                        {
                            "name": "детектив"
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
                    "alternativeName": "The Prestige",
                    "enName": null,
                    "movieLength": 125,
                    "names": [
                        {
                            "name": "Престиж"
                        },
                        {
                            "name": "The Prestige"
                        },
                        {
                            "name": "顶尖对决",
                            "language": "CN",
                            "type": "台"
                        },
                        {
                            "name": "El Truco Final (El Prestigio)",
                            "language": "ES",
                            "type": null
                        },
                        {
                            "name": "Prestiż",
                            "language": "PL",
                            "type": null
                        },
                        {
                            "name": "El Truco Final",
                            "language": "CO",
                            "type": null
                        },
                        {
                            "name": "프레스티지",
                            "language": "KR",
                            "type": null
                        },
                        {
                            "name": "プレステージ",
                            "language": "JP",
                            "type": null
                        },
                        {
                            "name": "حیثیت",
                            "language": "IR",
                            "type": null
                        },
                        {
                            "name": "O Grande Truque",
                            "language": "BR",
                            "type": null
                        },
                        {
                            "name": "O Terceiro Passo",
                            "language": "PT",
                            "type": null
                        },
                        {
                            "name": "Prestij",
                            "language": "TR",
                            "type": null
                        },
                        {
                            "name": "A tökéletes trükk",
                            "language": "HU",
                            "type": null
                        },
                        {
                            "name": "致命魔术",
                            "language": "CN",
                            "type": null
                        }
                    ],
                    "shortDescription": "Вражда двух иллюзионистов выходит на новый уровень. Фильм Кристофера Нолана с Дэвидом Боуи в роли Николы Теслы",
                    "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/1531675/2a00000170ed68067f4365ed815233444c93/orig"
                    },
                    "watchability": {
                        "items": [
                            {
                                "name": "viju",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/224348/8b10c84b-e1bb-4493-9bc4-6ee56554403a/orig"
                                },
                                "url": "https://viju.ru/filmy/prestizh?utm_campaign=yandex_content_integration&utm_medium=affiliate&utm_source=yandex"
                            },
                            {
                                "name": "НТВ-ПЛЮС Онлайн ТВ",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/223007/c6b9b3d8-3258-4394-9cae-c86fdb56a0c6/orig"
                                },
                                "url": "https://ntvplus.tv/watch/17345-prestizh?utm_source=kinopoisk"
                            },
                            {
                                "name": "24ТВ",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/2439731/85e83b8d-1159-4781-bad5-ce0a809b3843/orig"
                                },
                                "url": "https://24h.tv/contents/2006-the-prestige-552630291466813714"
                            }
                        ]
                    }
                },
                {
                    "externalId": {
                        "kpHD": "48148bb33997e7978617debbb1bc1b4e",
                        "imdb": "tt0295297",
                        "tmdb": 672
                    },
                    "rating": {
                        "kp": 8.122,
                        "imdb": 7.4,
                        "filmCritics": 7.2,
                        "russianFilmCritics": 0,
                        "await": 0
                    },
                    "votes": {
                        "kp": 574593,
                        "imdb": 650631,
                        "filmCritics": 237,
                        "russianFilmCritics": 1,
                        "await": 0
                    },
                    "movieLength": 161,
                    "id": 688,
                    "type": "movie",
                    "name": "Гарри Поттер и Тайная комната",
                    "description": "Гарри Поттер переходит на второй курс Школы чародейства и волшебства Хогвартс. Эльф Добби предупреждает Гарри об опасности, которая поджидает его там, и просит больше не возвращаться в школу.\n\nЮный волшебник не следует совету эльфа и становится свидетелем таинственных событий, разворачивающихся в Хогвартсе. Вскоре Гарри и его друзья узнают о существовании Тайной Комнаты и сталкиваются с новыми приключениями, пытаясь победить темные силы.",
                    "year": 2002,
                    "poster": {
                        "url": "https://st.kp.yandex.net/images/film_big/688.jpg",
                        "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_688.jpg"
                    },
                    "genres": [
                        {
                            "name": "фэнтези"
                        },
                        {
                            "name": "приключения"
                        },
                        {
                            "name": "семейный"
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
                    "alternativeName": "Harry Potter and the Chamber of Secrets",
                    "enName": null,
                    "names": [
                        {
                            "name": "Гарри Поттер и Тайная комната"
                        },
                        {
                            "name": "Harry Potter and the Chamber of Secrets"
                        },
                        {
                            "name": "Harii Pottâ to himitsu no heya",
                            "language": "JP",
                            "type": "romaji"
                        },
                        {
                            "name": "Hari Poter i Dvorana tajni",
                            "language": "RS",
                            "type": null
                        },
                        {
                            "name": "哈利波特与密室",
                            "language": "CN",
                            "type": null
                        },
                        {
                            "name": "Garri Potter i Tainaya komnata",
                            "language": "RU",
                            "type": null
                        },
                        {
                            "name": "O Chári Póter kai i Kámara me ta Mystiká",
                            "language": "GR",
                            "type": null
                        },
                        {
                            "name": "Harri Potter i tayemna kimnata",
                            "language": "UA",
                            "type": null
                        },
                        {
                            "name": "Khari Potŭr i stayata na taĭnite",
                            "language": "BG",
                            "type": null
                        },
                        {
                            "name": "Harry Potter dan Kamar Rahasia",
                            "language": "ID",
                            "type": null
                        },
                        {
                            "name": "Harry Potter och Hemligheternas kammare 2",
                            "language": "SE",
                            "type": null
                        },
                        {
                            "name": "Harry Potter ve sirlar odasi 2",
                            "language": "TR",
                            "type": null
                        },
                        {
                            "name": "Harry Potter a taiemna komnata",
                            "language": "CZ",
                            "type": null
                        },
                        {
                            "name": "Harry Potter y la cámara secreta",
                            "language": "AR",
                            "type": null
                        },
                        {
                            "name": "哈利波特 2：消失的密室",
                            "language": "HK",
                            "type": null
                        },
                        {
                            "name": "哈利波特2：密室",
                            "language": "CN",
                            "type": null
                        },
                        {
                            "name": "해리 포터와 비밀의 방",
                            "language": "KR",
                            "type": null
                        },
                        {
                            "name": "Harry Potter e a Câmara Secreta",
                            "language": "BR",
                            "type": null
                        },
                        {
                            "name": "해리포터와 비밀의 방",
                            "language": "KR",
                            "type": null
                        },
                        {
                            "name": "Harijs Poters un noslēpumu kambaris",
                            "language": "LV",
                            "type": null
                        },
                        {
                            "name": "Harry Potter II: Harry Potter and the Chamber of Secrets",
                            "language": "US",
                            "type": "Alternative Title"
                        },
                        {
                            "name": "Harry Potter und die Kammer des Schreckens",
                            "language": "DE",
                            "type": null
                        },
                        {
                            "name": "ハリー・ポッターと秘密の部屋",
                            "language": "JP",
                            "type": null
                        },
                        {
                            "name": "ハリーポッターと秘密の部屋",
                            "language": "JP",
                            "type": null
                        },
                        {
                            "name": "Harry Potter (2) et la Chambre des secrets",
                            "language": "FR",
                            "type": null
                        },
                        {
                            "name": "הרי פותר וחדר הסודות",
                            "language": "IL",
                            "type": null
                        },
                        {
                            "name": "ארי פוטר 2: חדר הסודות (2002)",
                            "language": "IL",
                            "type": null
                        }
                    ],
                    "shortDescription": "Домашний эльф, магический дневник и привидение. Второй год Гарри в школе Хогвартс — еще более захватывающий",
                    "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/1531675/2a0000017e12791a83f15ab89c146aa13b32/orig"
                    },
                    "watchability": {
                        "items": null
                    }
                },
                {
                    "id": 46708,
                    "type": "movie",
                    "externalId": {
                        "kpHD": "47bd6e273ed822a19b90f63c9ebd9526",
                        "imdb": "tt0079579",
                        "tmdb": 21028
                    },
                    "name": "Москва слезам не верит",
                    "rating": {
                        "kp": 8.42,
                        "imdb": 8.1,
                        "filmCritics": 4.8,
                        "russianFilmCritics": 0,
                        "await": 0
                    },
                    "description": "Москва, 1950-е годы. Три молодые провинциалки приезжают в Москву в поисках того, что ищут люди во всех столицах мира — любви, счастья и достатка. Антонина выходит замуж, растит детей, любит мужа. Людмиле Москва представляется лотереей, в которой она должна выиграть свое особенное счастье. Катерина же отчаянно влюбляется, но избранник ее оставляет. Однако она не опускает руки, в одиночку растит дочь и к тому же успевает делать блестящую карьеру. В 40 лет судьба дарит ей неожиданную встречу.",
                    "votes": {
                        "kp": 572622,
                        "imdb": 13474,
                        "filmCritics": 5,
                        "russianFilmCritics": 1,
                        "await": 0
                    },
                    "year": 1979,
                    "poster": {
                        "url": "https://st.kp.yandex.net/images/film_big/46708.jpg",
                        "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_46708.jpg"
                    },
                    "genres": [
                        {
                            "name": "мелодрама"
                        },
                        {
                            "name": "драма"
                        },
                        {
                            "name": "комедия"
                        }
                    ],
                    "countries": [
                        {
                            "name": "СССР"
                        }
                    ],
                    "alternativeName": null,
                    "enName": null,
                    "names": [
                        {
                            "name": "Москва слезам не верит"
                        },
                        {
                            "name": "Moskva slezam ne verit",
                            "language": "RU",
                            "type": "translit"
                        },
                        {
                            "name": "Moskva tror ikke på tårer",
                            "language": "NO",
                            "type": null
                        },
                        {
                            "name": "Moscú no cree en las lágrimas",
                            "language": "ES",
                            "type": null
                        },
                        {
                            "name": "Moscou ne croit pas aux larmes",
                            "language": "FR",
                            "type": null
                        },
                        {
                            "name": "Moscovo Não Acredita em Lágrimas",
                            "language": "PT",
                            "type": null
                        },
                        {
                            "name": "모스크바는 눈물을 믿지 않는다",
                            "language": "KR",
                            "type": null
                        },
                        {
                            "name": "モスクワは涙を信じない",
                            "language": "JP",
                            "type": null
                        },
                        {
                            "name": "Mosca non crede alle lacrime",
                            "language": "IT",
                            "type": null
                        },
                        {
                            "name": "莫斯科不相信眼泪",
                            "language": "CN",
                            "type": null
                        },
                        {
                            "name": "Moskova ei usko kyyneliin",
                            "language": "FI",
                            "type": null
                        },
                        {
                            "name": "Moskva tror inte på tårar",
                            "language": "SE",
                            "type": null
                        },
                        {
                            "name": "Moskau glaubt den Tränen nicht",
                            "language": "DE",
                            "type": null
                        },
                        {
                            "name": "Moskva Tror Ikke På Tårer",
                            "language": "DK",
                            "type": null
                        },
                        {
                            "name": "Moskou Gelooft Niet in Tranen",
                            "language": "NL",
                            "type": null
                        },
                        {
                            "name": "Moskwa nie wierzy łzom",
                            "language": "PL",
                            "type": null
                        },
                        {
                            "name": "Moscú no cree en lágrimas",
                            "language": "AR",
                            "type": null
                        },
                        {
                            "name": "Moscow Distrusts Tears",
                            "language": "AU",
                            "type": null
                        },
                        {
                            "name": "Moscova nu crede în lacrimi",
                            "language": "RO",
                            "type": null
                        }
                    ],
                    "movieLength": 150,
                    "shortDescription": "Квентин Тарантино: «Отличный фильм! Посмотрел его в 15 лет и до сих пор помню в мелочах эту картину» ",
                    "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/223007/2a0000016fae383f9a29e03b9b723af1cc6a/orig"
                    },
                    "watchability": {
                        "items": [
                            {
                                "name": "Okko",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                                },
                                "url": "https://okko.tv/movie/moskva-slezam-ne-verit?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                            },
                            {
                                "name": "Иви",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/2419418/0dfd1724-848f-4725-9160-abc571f41c11/orig"
                                },
                                "url": "https://www.ivi.ru/watch/moskva_slezam_ne_verit?utm_source=yandex&utm_medium=wizard"
                            },
                            {
                                "name": "KION",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/daeb142e-3ecc-4bb2-9bff-4827996643ab/orig"
                                },
                                "url": "https://kion.ru/video/movie/694772640?utm_source=yandex&utm_medium=organic&utm_campaign=wizard"
                            },
                            {
                                "name": "PREMIER",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/0f86e907-9531-47e9-87bd-5101a08d4e30/orig"
                                },
                                "url": "https://premier.one/show/15617?utm_source=yandex&utm_medium=yandex_feed_search&utm_campaign=yandex_feed"
                            },
                            {
                                "name": "Триколор Кино и ТВ",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/947e777c-2f73-4cbc-b09d-6bfa3966ba13/orig"
                                },
                                "url": "https://kino.tricolor.tv/watch/moskva-slezam-ne-verit-1979/?utm_source=yandex&utm_medium=feed"
                            }
                        ]
                    }
                },
                {
                    "id": 1387021,
                    "type": "movie",
                    "externalId": {
                        "kpHD": "4473a31e267ee987b5b49fc9b7b41fd4",
                        "imdb": "tt12361974",
                        "tmdb": 791373
                    },
                    "name": "Лига справедливости Зака Снайдера",
                    "rating": {
                        "kp": 7.833,
                        "imdb": 8,
                        "filmCritics": 6.7,
                        "russianFilmCritics": 92.3077,
                        "await": 98.63
                    },
                    "description": "Вдохновившись самопожертвованием Супермена, Брюс Уэйн вновь обретает веру в человечество. Он заручается поддержкой новой союзницы Дианы Принс, чтобы сразиться с ещё более могущественным противником. Бэтмен и Чудо-женщина набирают команду сверхлюдей для борьбы с пробудившейся угрозой.",
                    "votes": {
                        "kp": 569979,
                        "imdb": 407979,
                        "filmCritics": 308,
                        "russianFilmCritics": 26,
                        "await": 57112
                    },
                    "year": 2021,
                    "poster": {
                        "url": "https://st.kp.yandex.net/images/film_big/1387021.jpg",
                        "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_1387021.jpg"
                    },
                    "genres": [
                        {
                            "name": "фантастика"
                        },
                        {
                            "name": "боевик"
                        },
                        {
                            "name": "фэнтези"
                        }
                    ],
                    "countries": [
                        {
                            "name": "США"
                        }
                    ],
                    "alternativeName": "Zack Snyder's Justice League",
                    "color": "#000000",
                    "enName": null,
                    "movieLength": 242,
                    "names": [
                        {
                            "name": "Лига справедливости Зака Снайдера"
                        },
                        {
                            "name": "Zack Snyder's Justice League"
                        },
                        {
                            "name": "Justice League: Director's Cut",
                            "language": "US",
                            "type": "working title"
                        },
                        {
                            "name": "正义联盟导演剪辑版",
                            "language": "CN",
                            "type": null
                        },
                        {
                            "name": "正义联盟 扎克·施奈德导演剪辑版",
                            "language": "CN",
                            "type": null
                        },
                        {
                            "name": "ザック・スナイダー版 ジャスティス・リーグ",
                            "language": "JP",
                            "type": null
                        },
                        {
                            "name": "Liga spravodlivosti Zacka Snydera",
                            "language": "SK",
                            "type": null
                        },
                        {
                            "name": "查克·史奈德之正義聯盟",
                            "language": "TW",
                            "type": null
                        },
                        {
                            "name": "Ліга справедливості Зака Снайдера",
                            "language": "UA",
                            "type": null
                        },
                        {
                            "name": "Zak Snayderning Adolat ligasi",
                            "language": "UZ",
                            "type": null
                        },
                        {
                            "name": "Liên Minh Công Lý - Phiên bản của Zack Snyder",
                            "language": "VN",
                            "type": null
                        },
                        {
                            "name": "زاك سنايدر فرقة العدالة",
                            "language": "SA",
                            "type": null
                        },
                        {
                            "name": "스나이더 컷",
                            "language": "KR",
                            "type": null
                        },
                        {
                            "name": "Zack Snyder's Justice League: Justice Is Gray",
                            "language": "US",
                            "type": "black-and-white version"
                        },
                        {
                            "name": "La Liga de la Justicia de Zack Snyder - La justicia es gris",
                            "language": "ES",
                            "type": "black-and-white version"
                        },
                        {
                            "name": "ליגת הצדק גרסת סניידר",
                            "language": "IL",
                            "type": null
                        },
                        {
                            "name": "Justice League: Zack Snyder Cut",
                            "language": "US",
                            "type": null
                        },
                        {
                            "name": "扎克·施奈德版正义联盟 灰度正义",
                            "language": "CN",
                            "type": "black-and-white version"
                        },
                        {
                            "name": "Justice League: Snyder's Cut",
                            "language": "US",
                            "type": null
                        },
                        {
                            "name": "薩克薛達之正義聯盟",
                            "language": "HK",
                            "type": null
                        },
                        {
                            "name": "จัสติช ลีก ของ แซ็ค สไนเดอร์",
                            "language": "TH",
                            "type": null
                        },
                        {
                            "name": "Justice League - The Snyder Cut",
                            "language": "US",
                            "type": null
                        },
                        {
                            "name": "Justice League: Zack Snyder's Cut",
                            "language": "US",
                            "type": "Alternative Title"
                        },
                        {
                            "name": "DC Comics Film 09.1 - Zack Snyder's Justice League Justice is Gray",
                            "language": "FR",
                            "type": null
                        }
                    ],
                    "shortDescription": "Бэтмен собирает команду супергероев, чтобы спасти Землю. Режиссерская версия, которую так ждали фанаты",
                    "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/2419418/2a0000017f9c627d747e3d0ec0be715e48dd/orig"
                    },
                    "watchability": {
                        "items": null
                    }
                },
                {
                    "externalId": {
                        "kpHD": "4cc6fae94f652033b3d127ecbe373205",
                        "imdb": "tt11418452",
                        "tmdb": 575828
                    },
                    "rating": {
                        "kp": 6.764,
                        "imdb": 6.7,
                        "filmCritics": 0,
                        "russianFilmCritics": 60,
                        "await": 81.45
                    },
                    "votes": {
                        "kp": 563643,
                        "imdb": 4737,
                        "filmCritics": 0,
                        "russianFilmCritics": 10,
                        "await": 4072
                    },
                    "movieLength": 109,
                    "id": 1183582,
                    "type": "movie",
                    "name": "Холоп",
                    "description": "27-летний московский мажор Григорий ошалел от безнаказанности. Богатый папа стабильно его отмазывает, да так, что уже обновил автопарк и оборудование отделению полиции, где служит начальником его друг. После очередной выходки терпение отца иссякает, и он обращается к психологу, практикующему шоковые методы воздействия на пациентов.\n\nВскоре сынуля попадает в аварию и приходит в себя на деревенской конюшне. На дворе — Россия 1860 года, а сам он — бесправный конюх Гришка, которому за любую провинность и ослушание всегда готовы всыпать плетей, а то и вздёрнуть на глазах у всего честного народа.",
                    "year": 2019,
                    "poster": {
                        "url": "https://st.kp.yandex.net/images/film_big/1183582.jpg",
                        "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_1183582.jpg"
                    },
                    "genres": [
                        {
                            "name": "комедия"
                        },
                        {
                            "name": "мелодрама"
                        }
                    ],
                    "countries": [
                        {
                            "name": "Россия"
                        }
                    ],
                    "alternativeName": null,
                    "enName": null,
                    "names": [
                        {
                            "name": "Холоп"
                        }
                    ],
                    "shortDescription": "Самый кассовый российский фильм в истории. Комедия о перевоспитании мажора в духе «Шоу Трумана»",
                    "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/1534341/2a00000176f14b07b9a20f18388424dfcab0/orig"
                    },
                    "watchability": {
                        "items": [
                            {
                                "name": "Okko",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                                },
                                "url": "https://okko.tv/movie/kholop?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                            },
                            {
                                "name": "Иви",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/2419418/0dfd1724-848f-4725-9160-abc571f41c11/orig"
                                },
                                "url": "https://www.ivi.ru/watch/193673?utm_source=yandex&utm_medium=wizard"
                            },
                            {
                                "name": "START",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/1a632675-0d99-4268-bd5e-d5f3dd800174/orig"
                                },
                                "url": "https://start.ru/watch/holop?utm_source=kinopoisk&utm_medium=feed_watch&utm_campaign=holop"
                            },
                            {
                                "name": "PREMIER",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/0f86e907-9531-47e9-87bd-5101a08d4e30/orig"
                                },
                                "url": "https://premier.one/show/10404?utm_source=yandex&utm_medium=yandex_feed_search&utm_campaign=yandex_feed"
                            },
                            {
                                "name": "Wink",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/1672343/54096cbe-cc3b-41c9-8e44-990ebbca8d61/orig"
                                },
                                "url": "https://wink.ru/media_items/95189461?utm_source=yandex&utm_medium=koldunschick&utm_content=name"
                            },
                            {
                                "name": "Большое ТВ",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/2439731/17c7ebcf-41aa-48b6-9366-621a85f1307a/orig"
                                },
                                "url": "https://bolshoe.tv/promo/web/movie/27784?segment=yandex_feed&group=peoples&utm_campaign=ya_feed&utm_medium=ya_feed"
                            },
                            {
                                "name": "24ТВ",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/2439731/85e83b8d-1159-4781-bad5-ce0a809b3843/orig"
                                },
                                "url": "https://24h.tv/contents/2019-holop-546309355021009549"
                            }
                        ]
                    }
                },
                {
                    "externalId": {
                        "kpHD": "472fb6c75c24f089bfe1f4bfcacc2079",
                        "imdb": "tt2267998",
                        "tmdb": 210577
                    },
                    "rating": {
                        "kp": 7.959,
                        "imdb": 8.1,
                        "filmCritics": 8,
                        "russianFilmCritics": 96.2963,
                        "await": 96.18
                    },
                    "votes": {
                        "kp": 563074,
                        "imdb": 999709,
                        "filmCritics": 370,
                        "russianFilmCritics": 27,
                        "await": 32366
                    },
                    "movieLength": 149,
                    "id": 692861,
                    "type": "movie",
                    "name": "Исчезнувшая",
                    "description": "Всё было готово для празднования пятилетия супружеской жизни, когда вдруг необъяснимо пропала виновница торжества. Остались следы борьбы в доме, кровь, которую явно пытались стереть, и цепочка подсказок в игре «охота за сокровищами» - жена ежегодно устраивала её для своего обожаемого мужа. И похоже, что эти подсказки дают шанс пролить свет на судьбу исчезнувшей.",
                    "year": 2014,
                    "poster": {
                        "url": "https://st.kp.yandex.net/images/film_big/692861.jpg",
                        "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_692861.jpg"
                    },
                    "genres": [
                        {
                            "name": "триллер"
                        },
                        {
                            "name": "драма"
                        },
                        {
                            "name": "детектив"
                        }
                    ],
                    "countries": [
                        {
                            "name": "США"
                        }
                    ],
                    "alternativeName": "Gone Girl",
                    "enName": null,
                    "names": [
                        {
                            "name": "Исчезнувшая"
                        },
                        {
                            "name": "Gone Girl"
                        }
                    ],
                    "shortDescription": "Жена Ника бесследно исчезает в день пятилетия свадьбы. Фильм-головоломка от Дэвида Финчера с Беном Аффлеком",
                    "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/1648503/2a0000017bf4245c84f48dbdc48af1aca7f8/orig"
                    },
                    "watchability": {
                        "items": [
                            {
                                "name": "Okko",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                                },
                                "url": "https://okko.tv/movie/gone-girl?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                            }
                        ]
                    }
                },
                {
                    "externalId": {
                        "kpHD": "43c5a627d76803459e2cedc915acbf21",
                        "imdb": "tt0361748",
                        "tmdb": 16869
                    },
                    "rating": {
                        "kp": 7.982,
                        "imdb": 8.3,
                        "filmCritics": 7.8,
                        "russianFilmCritics": 80,
                        "await": 83.74
                    },
                    "votes": {
                        "kp": 562644,
                        "imdb": 1475861,
                        "filmCritics": 333,
                        "russianFilmCritics": 10,
                        "await": 13069
                    },
                    "movieLength": 153,
                    "id": 9691,
                    "type": "movie",
                    "name": "Бесславные ублюдки",
                    "description": "Вторая мировая война. В оккупированной немцами Франции группа американских солдат-евреев наводит страх на нацистов, жестоко убивая и скальпируя солдат.",
                    "year": 2009,
                    "poster": {
                        "url": "https://st.kp.yandex.net/images/film_big/9691.jpg",
                        "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_9691.jpg"
                    },
                    "genres": [
                        {
                            "name": "боевик"
                        },
                        {
                            "name": "драма"
                        },
                        {
                            "name": "комедия"
                        },
                        {
                            "name": "военный"
                        }
                    ],
                    "countries": [
                        {
                            "name": "Германия"
                        },
                        {
                            "name": "США"
                        }
                    ],
                    "alternativeName": "Inglourious Basterds",
                    "enName": null,
                    "names": [
                        {
                            "name": "Бесславные ублюдки"
                        },
                        {
                            "name": "Inglourious Basterds"
                        }
                    ],
                    "shortDescription": "Американский спецотряд жестоко расправляется с нацистами. Пародия на военные фильмы от Квентина Тарантино",
                    "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/223007/2a0000016e4acd33a1edfdb81b7818353e04/orig"
                    },
                    "watchability": {
                        "items": [
                            {
                                "name": "Wink",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/1672343/54096cbe-cc3b-41c9-8e44-990ebbca8d61/orig"
                                },
                                "url": "https://wink.ru/media_items/75465591?utm_source=yandex&utm_medium=koldunschick&utm_content=name"
                            },
                            {
                                "name": "Смотрёшка",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/236744/c88e652e-2eb1-472d-b636-a266364dbf58/orig"
                                },
                                "url": "https://smotreshka.tv/vod/vipplay/621ccdb4686730755eac0d19?utm_source=yandex_search&utm_campaign=yandex_feed&utm_term=viju&utm_content=Viju"
                            }
                        ]
                    }
                },
                {
                    "id": 1199100,
                    "type": "movie",
                    "externalId": {
                        "kpHD": "4599fa80d6df7c03ada9b62708f00658",
                        "imdb": "tt6264654",
                        "tmdb": 550988
                    },
                    "name": "Главный герой",
                    "rating": {
                        "kp": 7.388,
                        "imdb": 7.1,
                        "filmCritics": 7,
                        "russianFilmCritics": 85.7143,
                        "await": 95.15
                    },
                    "description": "Парень по имени Парень счастлив. Он живет в лучшем в мире городе Городе, работает на лучшей в мире работе в Банке и дружит с охранником по имени Приятель. И его совершенно не волнует, что Банк грабят по нескольку раз на дню, а улицы Города напоминают зону военных действий. Единственное, чего Парню не хватает для полного счастья — идеальной девушки, к которой у него имеется точный список требований. И вот однажды он видит на улице красотку, точь-в-точь как в его мечтах. Эта встреча изменит не только нашего главного героя, но и перевернёт весь известный ему мир.",
                    "votes": {
                        "kp": 559362,
                        "imdb": 383250,
                        "filmCritics": 294,
                        "russianFilmCritics": 14,
                        "await": 53009
                    },
                    "year": 2021,
                    "poster": {
                        "url": "https://st.kp.yandex.net/images/film_big/1199100.jpg",
                        "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_1199100.jpg"
                    },
                    "genres": [
                        {
                            "name": "фантастика"
                        },
                        {
                            "name": "боевик"
                        },
                        {
                            "name": "комедия"
                        },
                        {
                            "name": "мелодрама"
                        }
                    ],
                    "countries": [
                        {
                            "name": "США"
                        },
                        {
                            "name": "Канада"
                        }
                    ],
                    "alternativeName": "Free Guy",
                    "enName": null,
                    "movieLength": 115,
                    "names": [
                        {
                            "name": "Главный герой"
                        },
                        {
                            "name": "Free Guy"
                        },
                        {
                            "name": "Свободный",
                            "language": "RU",
                            "type": null
                        },
                        {
                            "name": "Free Player",
                            "language": "FR",
                            "type": null
                        },
                        {
                            "name": "Libérer Guy",
                            "language": "CA",
                            "type": "working title"
                        },
                        {
                            "name": "爆機自由仁",
                            "language": "HK",
                            "type": "喜劇, 動作, 冒險, 科幻"
                        },
                        {
                            "name": "Free Guy : Tomando el control",
                            "language": "PE",
                            "type": null
                        },
                        {
                            "name": "ขอสักทีพี่จะเป็นฮีโร่",
                            "language": "TH",
                            "type": null
                        },
                        {
                            "name": "Free Guy: Herói Improvável (2021)",
                            "language": "PT",
                            "type": "PT"
                        },
                        {
                            "name": "L'Homme libre",
                            "language": "CA",
                            "type": "Québec"
                        },
                        {
                            "name": "Brīvais",
                            "language": "LV",
                            "type": null
                        },
                        {
                            "name": "失控玩家",
                            "language": "CN",
                            "type": "科幻,动作,剧情"
                        },
                        {
                            "name": "לשחרר את גיא",
                            "language": "IL",
                            "type": null
                        },
                        {
                            "name": "Free Guy: Assumindo o Controle",
                            "language": "BR",
                            "type": null
                        },
                        {
                            "name": "Free Guy (2021)",
                            "language": "US",
                            "type": null
                        }
                    ],
                    "shortDescription": "Банковский клерк обнаруживает, что он персонаж видеоигры. Фантастическая экшен-комедия с Райаном Рейнольдсом",
                    "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/2419418/2a0000017fcecddf9df291d4555d325b9014/orig"
                    },
                    "watchability": {
                        "items": [
                            {
                                "name": "Okko",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                                },
                                "url": "https://okko.tv/movie/free-guy?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                            }
                        ]
                    }
                },
                {
                    "id": 406408,
                    "type": "movie",
                    "externalId": {
                        "kpHD": "4ddb4ee50875035893b0aff7dbf82138",
                        "imdb": "tt1197624",
                        "tmdb": 22803
                    },
                    "name": "Законопослушный гражданин",
                    "rating": {
                        "kp": 8,
                        "imdb": 7.4,
                        "filmCritics": 4.4,
                        "russianFilmCritics": 20,
                        "await": 71.23
                    },
                    "description": "Окружной прокурор пошёл на сделку с преступниками и освободил их из тюрьмы. Тогда человек, чьи жена и ребёнок погибли от рук убийц, решает отомстить прокурору, совершив правосудие самостоятельно. Его ловят и сажают в тюрьму, но он неожиданно ставит ультиматум: он будет убивать, не выходя из-за решетки, если его требования не будут выполнены. Смешное заявление, но вскоре люди правда начинают гибнуть...",
                    "votes": {
                        "kp": 553868,
                        "imdb": 304193,
                        "filmCritics": 162,
                        "russianFilmCritics": 5,
                        "await": 3866
                    },
                    "year": 2009,
                    "poster": {
                        "url": "https://st.kp.yandex.net/images/film_big/406408.jpg",
                        "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_406408.jpg"
                    },
                    "genres": [
                        {
                            "name": "боевик"
                        },
                        {
                            "name": "триллер"
                        },
                        {
                            "name": "драма"
                        },
                        {
                            "name": "криминал"
                        }
                    ],
                    "countries": [
                        {
                            "name": "США"
                        }
                    ],
                    "alternativeName": "Law Abiding Citizen",
                    "enName": null,
                    "movieLength": 108,
                    "names": [
                        {
                            "name": "Законопослушный гражданин"
                        },
                        {
                            "name": "Law Abiding Citizen"
                        }
                    ],
                    "shortDescription": "Потеряв семью, Клайд жестоко мстит убийцам и нечестному прокурору. Брутальный триллер с Джерардом Батлером",
                    "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/223007/2a0000016faea0d85441d487c107f2a60c8a/orig"
                    },
                    "watchability": {
                        "items": [
                            {
                                "name": "Okko",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                                },
                                "url": "https://okko.tv/movie/law-abiding-citizen?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                            },
                            {
                                "name": "Иви",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/2419418/0dfd1724-848f-4725-9160-abc571f41c11/orig"
                                },
                                "url": "https://www.ivi.ru/watch/59097?utm_source=yandex&utm_medium=wizard"
                            },
                            {
                                "name": "PREMIER",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/0f86e907-9531-47e9-87bd-5101a08d4e30/orig"
                                },
                                "url": "https://premier.one/show/10701?utm_source=yandex&utm_medium=yandex_feed_search&utm_campaign=yandex_feed"
                            },
                            {
                                "name": "Wink",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/1672343/54096cbe-cc3b-41c9-8e44-990ebbca8d61/orig"
                                },
                                "url": "https://wink.ru/media_items/147513643?utm_source=yandex&utm_medium=koldunschick&utm_content=name"
                            },
                            {
                                "name": "viju",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/224348/8b10c84b-e1bb-4493-9bc4-6ee56554403a/orig"
                                },
                                "url": "https://viju.ru/filmy/zakonoposlushnyy-grazhdanin?utm_campaign=yandex_content_integration&utm_medium=affiliate&utm_source=yandex"
                            }
                        ]
                    }
                },
                {
                    "externalId": {
                        "kpHD": "455cdb9e38e050d4bf994ac8a3f575ed",
                        "imdb": "tt1677720",
                        "tmdb": 333339
                    },
                    "rating": {
                        "kp": 7.457,
                        "imdb": 7.4,
                        "filmCritics": 6.8,
                        "russianFilmCritics": 92.5926,
                        "await": 92.89
                    },
                    "votes": {
                        "kp": 553545,
                        "imdb": 447582,
                        "filmCritics": 448,
                        "russianFilmCritics": 27,
                        "await": 27205
                    },
                    "movieLength": 140,
                    "id": 538225,
                    "type": "movie",
                    "name": "Первому игроку приготовиться",
                    "description": "Действие фильма происходит в 2045 году, мир погружается в хаос и находится на грани коллапса. Люди ищут спасения в игре OASIS – огромной вселенной виртуальной реальности. Ее создатель, гениальный и эксцентричный Джеймс Холлидэй, оставляет уникальное завещание. Все его колоссальное состояние получит игрок, первым обнаруживший цифровое «пасхальное яйцо», которое миллиардер спрятал где-то на просторах OASISа. Запущенный им квест охватывает весь мир. Совершенно негероический парень по имени Уэйд Уоттс решает принять участие в состязании, с головой бросаясь в головокружительную, искажающую реальность погоню за сокровищами по фантастической вселенной, полной загадок, открытий и опасностей.",
                    "year": 2018,
                    "poster": {
                        "url": "https://st.kp.yandex.net/images/film_big/538225.jpg",
                        "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_538225.jpg"
                    },
                    "genres": [
                        {
                            "name": "фантастика"
                        },
                        {
                            "name": "боевик"
                        },
                        {
                            "name": "приключения"
                        }
                    ],
                    "countries": [
                        {
                            "name": "США"
                        },
                        {
                            "name": "Индия"
                        }
                    ],
                    "alternativeName": "Ready Player One",
                    "enName": null,
                    "names": [
                        {
                            "name": "Первому игроку приготовиться"
                        },
                        {
                            "name": "Ready Player One"
                        }
                    ],
                    "shortDescription": "Подросток охотится за пасхалками в виртуальной игре, захватившей мир. Фантастический экшен Стивена Спилберга",
                    "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/1672343/2a0000016eadd29ace91e1475b3d2d6f8a28/orig"
                    },
                    "watchability": {
                        "items": null
                    }
                },
                {
                    "externalId": {
                        "kpHD": "410e683f7dc325ea8aced77ca57916fb",
                        "imdb": "tt0119116",
                        "tmdb": 18
                    },
                    "rating": {
                        "kp": 8.107,
                        "imdb": 7.6,
                        "filmCritics": 6.4,
                        "russianFilmCritics": 66.6667,
                        "await": 0
                    },
                    "votes": {
                        "kp": 553275,
                        "imdb": 482207,
                        "filmCritics": 68,
                        "russianFilmCritics": 3,
                        "await": 0
                    },
                    "movieLength": 126,
                    "id": 2656,
                    "type": "movie",
                    "name": "Пятый элемент",
                    "description": "Каждые пять тысяч лет открываются двери между измерениями и темные силы стремятся нарушить существующую гармонию. Каждые пять тысяч лет Вселенной нужен герой, способный противостоять этому злу. XXIII век. Нью-йоркский таксист Корбен Даллас должен решить глобальную задачу - спасение всего рода человеческого.\n\nЗло в виде раскаленной массы, наделенной интеллектом, надвигается на Землю. Победить его можно, только лишь собрав воедино четыре элемента (они же стихии - земля, вода, воздух и огонь) и добавив к ним загадочный пятый элемент.",
                    "year": 1997,
                    "poster": {
                        "url": "https://st.kp.yandex.net/images/film_big/2656.jpg",
                        "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_2656.jpg"
                    },
                    "genres": [
                        {
                            "name": "фантастика"
                        },
                        {
                            "name": "боевик"
                        },
                        {
                            "name": "комедия"
                        },
                        {
                            "name": "мелодрама"
                        }
                    ],
                    "countries": [
                        {
                            "name": "Франция"
                        },
                        {
                            "name": "Великобритания"
                        }
                    ],
                    "alternativeName": "The Fifth Element",
                    "enName": null,
                    "names": [
                        {
                            "name": "Пятый элемент"
                        },
                        {
                            "name": "The Fifth Element"
                        },
                        {
                            "name": "El cinquè element",
                            "language": "AD",
                            "type": null
                        },
                        {
                            "name": "The Fifth Element: Remastered",
                            "language": "US",
                            "type": null
                        },
                        {
                            "name": "The 5th Element",
                            "language": "US",
                            "type": "alternate spelling"
                        },
                        {
                            "name": "Le 5ème élément",
                            "language": "FR",
                            "type": null
                        },
                        {
                            "name": "Le cinquième élément",
                            "language": "FR",
                            "type": null
                        },
                        {
                            "name": "제5원소",
                            "language": "KR",
                            "type": null
                        },
                        {
                            "name": "제 5 원소",
                            "language": "KR",
                            "type": null
                        },
                        {
                            "name": "제 5원소",
                            "language": "KR",
                            "type": null
                        }
                    ],
                    "shortDescription": "Последняя надежда человечества — безалаберный нью-йоркский таксист. Самый обаятельный фильм Люка Бессона",
                    "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/212840/2a0000017af8518090563463ba17354a88cb/orig"
                    },
                    "watchability": {
                        "items": [
                            {
                                "name": "Okko",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                                },
                                "url": "https://okko.tv/movie/the-fifth-element?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                            },
                            {
                                "name": "Wink",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/1672343/54096cbe-cc3b-41c9-8e44-990ebbca8d61/orig"
                                },
                                "url": "https://wink.ru/media_items/65057230?utm_source=yandex&utm_medium=koldunschick&utm_content=name"
                            },
                            {
                                "name": "24ТВ",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/2439731/85e83b8d-1159-4781-bad5-ce0a809b3843/orig"
                                },
                                "url": "https://24h.tv/contents/1997-the-fifth-element-546317353114141484"
                            }
                        ]
                    }
                },
                {
                    "externalId": {
                        "kpHD": "469dd100cdfca80d94219646f6731e78",
                        "imdb": "tt0167260",
                        "tmdb": 122
                    },
                    "rating": {
                        "kp": 8.655,
                        "imdb": 9,
                        "filmCritics": 8.7,
                        "russianFilmCritics": 100,
                        "await": 0
                    },
                    "votes": {
                        "kp": 550639,
                        "imdb": 1871353,
                        "filmCritics": 275,
                        "russianFilmCritics": 8,
                        "await": 0
                    },
                    "movieLength": 201,
                    "id": 3498,
                    "type": "movie",
                    "name": "Властелин колец: Возвращение короля",
                    "description": "Повелитель сил тьмы Саурон направляет свою бесчисленную армию под стены Минас-Тирита, крепости Последней Надежды. Он предвкушает близкую победу, но именно это мешает ему заметить две крохотные фигурки — хоббитов, приближающихся к Роковой Горе, где им предстоит уничтожить Кольцо Всевластья.",
                    "year": 2003,
                    "poster": {
                        "url": "https://st.kp.yandex.net/images/film_big/3498.jpg",
                        "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_3498.jpg"
                    },
                    "genres": [
                        {
                            "name": "фэнтези"
                        },
                        {
                            "name": "приключения"
                        },
                        {
                            "name": "драма"
                        },
                        {
                            "name": "боевик"
                        }
                    ],
                    "countries": [
                        {
                            "name": "Новая Зеландия"
                        },
                        {
                            "name": "США"
                        }
                    ],
                    "alternativeName": "The Lord of the Rings: The Return of the King",
                    "enName": null,
                    "names": [
                        {
                            "name": "Властелин колец: Возвращение короля"
                        },
                        {
                            "name": "The Lord of the Rings: The Return of the King"
                        },
                        {
                            "name": "The Return of the King",
                            "language": "US",
                            "type": "short title"
                        },
                        {
                            "name": "Sagan om konungens återkomst",
                            "language": "SE",
                            "type": "short title"
                        },
                        {
                            "name": "Le Seigneur des Anneaux: Le Retour du Roi",
                            "language": "FR",
                            "type": null
                        },
                        {
                            "name": "Le Retour du Roi",
                            "language": "FR",
                            "type": "short title"
                        },
                        {
                            "name": "The Lord of the Rings 3：The Return of the King",
                            "language": "US",
                            "type": null
                        },
                        {
                            "name": "魔戒三部曲：王者再臨",
                            "language": "HK",
                            "type": null
                        },
                        {
                            "name": "指环王3：王者归来",
                            "language": "CN",
                            "type": null
                        },
                        {
                            "name": "Gredzenu pavēlnieks: Karaļa atgriešanās",
                            "language": "LV",
                            "type": null
                        },
                        {
                            "name": "指环王3：王者无敌",
                            "language": "CN",
                            "type": null
                        },
                        {
                            "name": "Господар на прстените: Враќањето на кралот",
                            "language": "MK",
                            "type": null
                        },
                        {
                            "name": "The Lord of the Rings III: The Return of the King",
                            "language": "US",
                            "type": null
                        },
                        {
                            "name": "03 - Le Seigneur des anneaux - Le Retour du roi",
                            "language": "FR",
                            "type": null
                        },
                        {
                            "name": "ESDLA",
                            "language": "ES",
                            "type": "short title"
                        },
                        {
                            "name": "El retorno del rey",
                            "language": "ES",
                            "type": null
                        }
                    ],
                    "shortDescription": "Арагорн штурмует Мордор, а Фродо устал бороться с чарами кольца. Эффектный финал саги, собравший 11 «Оскаров» ",
                    "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/223007/2a000001714e8cc04eecc3c173091b04d4f4/orig"
                    },
                    "watchability": {
                        "items": null
                    }
                },
                {
                    "externalId": {
                        "kpHD": "45b63ee83d9ea3c293a927da58e6ce1d",
                        "imdb": "tt7286456",
                        "tmdb": 475557
                    },
                    "rating": {
                        "kp": 7.978,
                        "imdb": 8.4,
                        "filmCritics": 7.3,
                        "russianFilmCritics": 89.6552,
                        "await": 96.44
                    },
                    "votes": {
                        "kp": 549923,
                        "imdb": 1328322,
                        "filmCritics": 597,
                        "russianFilmCritics": 29,
                        "await": 41179
                    },
                    "movieLength": 122,
                    "id": 1048334,
                    "type": "movie",
                    "name": "Джокер",
                    "description": "Готэм, начало 1980-х годов. Комик Артур Флек живет с больной матерью, которая с детства учит его «ходить с улыбкой». Пытаясь нести в мир хорошее и дарить людям радость, Артур сталкивается с человеческой жестокостью и постепенно приходит к выводу, что этот мир получит от него не добрую улыбку, а ухмылку злодея Джокера.",
                    "year": 2019,
                    "poster": {
                        "url": "https://st.kp.yandex.net/images/film_big/1048334.jpg",
                        "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_1048334.jpg"
                    },
                    "genres": [
                        {
                            "name": "драма"
                        },
                        {
                            "name": "криминал"
                        },
                        {
                            "name": "триллер"
                        }
                    ],
                    "countries": [
                        {
                            "name": "США"
                        },
                        {
                            "name": "Канада"
                        }
                    ],
                    "alternativeName": "Joker",
                    "enName": null,
                    "names": [
                        {
                            "name": "Джокер"
                        },
                        {
                            "name": "Joker"
                        }
                    ],
                    "shortDescription": "Как неудачливый комик стал самым опасным человеком в Готэме. Бенефис Хоакина Феникса и «Оскар» за саундтрек",
                    "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/1534341/2a00000176f15a40fc3ec20b6a61c0b19850/orig"
                    },
                    "watchability": {
                        "items": null
                    }
                },
                {
                    "externalId": {
                        "kpHD": "4d1cac6adb79ccef8545673d86c8b486",
                        "imdb": "tt1201607",
                        "tmdb": 12445
                    },
                    "rating": {
                        "kp": 8.15,
                        "imdb": 8.1,
                        "filmCritics": 8.3,
                        "russianFilmCritics": 83.3333,
                        "await": 82.85
                    },
                    "votes": {
                        "kp": 549412,
                        "imdb": 891898,
                        "filmCritics": 333,
                        "russianFilmCritics": 12,
                        "await": 84002
                    },
                    "movieLength": 130,
                    "id": 407636,
                    "type": "movie",
                    "name": "Гарри Поттер и Дары Смерти: Часть II",
                    "description": "В грандиозной последней главе битва между добрыми и злыми силами мира волшебников перерастает во всеобщую войну. Ставки ещё никогда не были так высоки, а поиск убежища — столь сложен. И, быть может, именно Гарри Поттеру придется пожертвовать всем в финальном сражении с Волан-де-Мортом.",
                    "year": 2011,
                    "poster": {
                        "url": "https://st.kp.yandex.net/images/film_big/407636.jpg",
                        "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_407636.jpg"
                    },
                    "genres": [
                        {
                            "name": "фэнтези"
                        },
                        {
                            "name": "детектив"
                        },
                        {
                            "name": "приключения"
                        },
                        {
                            "name": "семейный"
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
                    "alternativeName": "Harry Potter and the Deathly Hallows - Part 2",
                    "enName": null,
                    "names": [
                        {
                            "name": "Гарри Поттер и Дары Смерти: Часть II"
                        },
                        {
                            "name": "Harry Potter and the Deathly Hallows - Part 2"
                        }
                    ],
                    "shortDescription": "Гарри уничтожил почти все крестражи Волан-де-Морта, но еще не знает о последнем. Финал грандиозной саги",
                    "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/223007/2a0000017e1276ab31c4f156c31c0e02bd3d/orig"
                    },
                    "watchability": {
                        "items": null
                    }
                },
                {
                    "externalId": {
                        "kpHD": "4f39d7763a829bc3a003fa801a781ca1",
                        "imdb": "tt0458352",
                        "tmdb": 350
                    },
                    "rating": {
                        "kp": 7.686,
                        "imdb": 6.9,
                        "filmCritics": 6.6,
                        "russianFilmCritics": 0,
                        "await": 0
                    },
                    "votes": {
                        "kp": 546415,
                        "imdb": 430715,
                        "filmCritics": 195,
                        "russianFilmCritics": 1,
                        "await": 0
                    },
                    "movieLength": 109,
                    "id": 104992,
                    "type": "movie",
                    "name": "Дьявол носит Prada",
                    "description": "Мечтающая стать журналисткой провинциальная девушка Энди по окончании университета получает должность помощницы всесильной Миранды Пристли, деспотичного редактора одного из крупнейших нью-йоркских журналов мод. Энди всегда мечтала о такой работе, не зная, с каким нервным напряжением это будет связано…",
                    "year": 2006,
                    "poster": {
                        "url": "https://st.kp.yandex.net/images/film_big/104992.jpg",
                        "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_104992.jpg"
                    },
                    "genres": [
                        {
                            "name": "драма"
                        },
                        {
                            "name": "комедия"
                        }
                    ],
                    "countries": [
                        {
                            "name": "США"
                        },
                        {
                            "name": "Франция"
                        }
                    ],
                    "alternativeName": "The Devil Wears Prada",
                    "enName": null,
                    "names": [
                        {
                            "name": "Дьявол носит Prada"
                        },
                        {
                            "name": "The Devil Wears Prada"
                        }
                    ],
                    "shortDescription": "Юная карьеристка сталкивается с изнанкой гламура. В главных ролях — Энн Хэтэуэй и Мерил Стрип",
                    "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/200035/2a000001725515009edce05c53e3ccf94a56/orig"
                    },
                    "watchability": {
                        "items": [
                            {
                                "name": "Okko",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                                },
                                "url": "https://okko.tv/movie/the-devil-wears-prada?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                            }
                        ]
                    }
                },
                {
                    "externalId": {
                        "kpHD": "421850ca845e9135ac336fff11e4fde1",
                        "imdb": "tt3228774",
                        "tmdb": 337404
                    },
                    "rating": {
                        "kp": 7.579,
                        "imdb": 7.3,
                        "filmCritics": 6.8,
                        "russianFilmCritics": 68,
                        "await": 94.88
                    },
                    "votes": {
                        "kp": 542646,
                        "imdb": 241418,
                        "filmCritics": 409,
                        "russianFilmCritics": 25,
                        "await": 12421
                    },
                    "movieLength": 134,
                    "id": 804662,
                    "type": "movie",
                    "name": "Круэлла",
                    "description": "Великобритания, 1960-е годы. Эстелла была необычным ребёнком, и особенно трудно ей было мириться со всякого рода несправедливостью. Вылетев из очередной школы, она с мамой отправляется в Лондон. По дороге они заезжают в особняк известной модельерши по имени Баронесса, где в результате ужасного несчастного случая мама погибает. Добравшись до Лондона, Эстелла знакомится с двумя мальчишками — уличными мошенниками Джаспером и Хорасом.\n\n10 лет спустя та же компания промышляет на улицах британской столицы мелким воровством, но Эстелла никак не может оставить мечту сделать карьеру в мире моды. Хитростью устроившись в фешенебельный универмаг, девушка привлекает внимание Баронессы, и та берёт её к себе в штат дизайнеров.",
                    "year": 2021,
                    "poster": {
                        "url": "https://st.kp.yandex.net/images/film_big/804662.jpg",
                        "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_804662.jpg"
                    },
                    "genres": [
                        {
                            "name": "комедия"
                        },
                        {
                            "name": "криминал"
                        },
                        {
                            "name": "драма"
                        }
                    ],
                    "countries": [
                        {
                            "name": "США"
                        },
                        {
                            "name": "Великобритания"
                        }
                    ],
                    "alternativeName": "Cruella",
                    "enName": null,
                    "names": [
                        {
                            "name": "Круэлла"
                        },
                        {
                            "name": "Cruella"
                        },
                        {
                            "name": "Стервелла",
                            "language": "RU",
                            "type": null
                        },
                        {
                            "name": "库伊拉",
                            "language": "CN",
                            "type": null
                        },
                        {
                            "name": "时尚恶女：库伊拉",
                            "language": "TW",
                            "type": null
                        },
                        {
                            "name": "黑白魔女",
                            "language": "CN",
                            "type": null
                        },
                        {
                            "name": "库伊拉·德维尔",
                            "language": "CN",
                            "type": null
                        },
                        {
                            "name": "크루엘라",
                            "language": "KR",
                            "type": null
                        },
                        {
                            "name": "黑白魔后",
                            "language": "HK",
                            "type": null
                        }
                    ],
                    "shortDescription": "Бунтарка покоряет модный мир Лондона. Предыстория злодейки из «101 далматинца» с «Оскаром» за костюмы",
                    "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/1534341/2a0000017ede1851f4a06c1b30a7fce95038/orig"
                    },
                    "watchability": {
                        "items": [
                            {
                                "name": "Okko",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                                },
                                "url": "https://okko.tv/movie/cruella?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                            }
                        ]
                    }
                },
                {
                    "id": 5928,
                    "type": "movie",
                    "externalId": {
                        "kpHD": "490790b846806ca695588bc88cdf0d4d",
                        "imdb": "tt0104431",
                        "tmdb": 772
                    },
                    "name": "Один дома 2: Затерянный в Нью-Йорке",
                    "rating": {
                        "kp": 8.029,
                        "imdb": 6.8,
                        "filmCritics": 4.5,
                        "russianFilmCritics": 0,
                        "await": 0
                    },
                    "description": "Самый маленький герой Америки устраивает большой переполох в Нью-Йорке! Кевин МакКалистер вернулся! Но теперь он один не дома, а в Нью-Йорке и у него достаточно денег и кредитных карточек, чтобы превратить Большое Яблоко в собственную площадку для игр.\n\nНо, как всегда, Кевину не суждено быть долго одному: его старые приятели ― жулики Гарри и Марв ― сбежали из тюрьмы, куда они попали стараниями Кевина. И надо же им было попасть именно в тот город, где Кевин планировал поразвлечься! Новые западни и ловушки уже ждут горе-бандитов.",
                    "votes": {
                        "kp": 541920,
                        "imdb": 372304,
                        "filmCritics": 57,
                        "russianFilmCritics": 0,
                        "await": 0
                    },
                    "year": 1992,
                    "poster": {
                        "url": "https://st.kp.yandex.net/images/film_big/5928.jpg",
                        "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_5928.jpg"
                    },
                    "genres": [
                        {
                            "name": "комедия"
                        },
                        {
                            "name": "семейный"
                        },
                        {
                            "name": "приключения"
                        }
                    ],
                    "countries": [
                        {
                            "name": "США"
                        }
                    ],
                    "alternativeName": "Home Alone 2: Lost in New York",
                    "enName": null,
                    "movieLength": 119,
                    "names": [
                        {
                            "name": "Один дома 2: Затерянный в Нью-Йорке"
                        },
                        {
                            "name": "Home Alone 2: Lost in New York"
                        },
                        {
                            "name": "Home Alone 2",
                            "language": "US",
                            "type": "short title"
                        },
                        {
                            "name": "Alone Again",
                            "language": "US",
                            "type": "working title"
                        },
                        {
                            "name": "Ensam Hemma 2",
                            "language": "SE",
                            "type": null
                        },
                        {
                            "name": "Maman, j'ai encore raté l'avion et je suis perdu dans New York",
                            "language": "CA",
                            "type": null
                        },
                        {
                            "name": "Sozinho em Casa 2: Perdido em Nova Iorque",
                            "language": "PT",
                            "type": null
                        },
                        {
                            "name": "Monos sto spiti 2 - Hamenos sti Nea Yorki",
                            "language": "GR",
                            "type": "transliterated title"
                        },
                        {
                            "name": "Hômu arôn 2",
                            "language": "JP",
                            "type": "romaji"
                        },
                        {
                            "name": "Μόνος στο σπίτι 2: Χαμένος στη Νέα Υόρκη",
                            "language": "GR",
                            "type": null
                        },
                        {
                            "name": "Singur acasa: Pierdut in New York",
                            "language": "RO",
                            "type": null
                        },
                        {
                            "name": "小鬼當家2：紐約迷途記",
                            "language": "TW",
                            "type": null
                        },
                        {
                            "name": "Reszkessetek, betörők! 2.: Elveszve New Yorkban",
                            "language": "HU",
                            "type": null
                        },
                        {
                            "name": "Maman, j'ai encore raté l'avion...",
                            "language": "CA",
                            "type": null
                        },
                        {
                            "name": "Mi pobre angelito 2 - Perdido en Nueva York",
                            "language": "UY",
                            "type": null
                        },
                        {
                            "name": "Mi Pobre Angelito 2",
                            "language": "CL",
                            "type": null
                        },
                        {
                            "name": "Üksinda kodus 2: Kadunud New Yorgis",
                            "language": "EE",
                            "type": null
                        },
                        {
                            "name": "Alene hjemme 2: Glemt i New York",
                            "language": "DK",
                            "type": null
                        },
                        {
                            "name": "Üksinda kodus 2",
                            "language": "EE",
                            "type": null
                        },
                        {
                            "name": "나 홀로 집에 2",
                            "language": "KR",
                            "type": null
                        },
                        {
                            "name": "Kevin – Allein in New York",
                            "language": "DE",
                            "type": null
                        },
                        {
                            "name": "ホームアローン2",
                            "language": "JP",
                            "type": null
                        },
                        {
                            "name": "وحيد في المنزل 2",
                            "language": "SA",
                            "type": null
                        },
                        {
                            "name": "Home Alone II: Lost In New York",
                            "language": "US",
                            "type": "Alternative Title"
                        },
                        {
                            "name": "שחכו אותי בבית 2",
                            "language": "IL",
                            "type": null
                        },
                        {
                            "name": "שכחו אותי בבית 2: אבוד בניו יורק",
                            "language": "IL",
                            "type": null
                        },
                        {
                            "name": "לבד בבית 2",
                            "language": "IL",
                            "type": null
                        },
                        {
                            "name": "לבד בבית 2: אבוד בניו יורק",
                            "language": "IL",
                            "type": null
                        },
                        {
                            "name": "שחכו אותי בבית 2: אבוד בניו יורק",
                            "language": "IL",
                            "type": null
                        },
                        {
                            "name": "Maman, (2) j'ai encore raté l'avion !",
                            "language": "FR",
                            "type": null
                        }
                    ],
                    "shortDescription": "Неугомонный малыш Кевин в одиночку покоряет Нью-Йорк. Очередной шедевр от Джона Хьюза и Криса Коламбуса",
                    "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/2439731/2a00000170ed5eac70d1cc0e4843a4e73c8c/orig"
                    },
                    "watchability": {
                        "items": [
                            {
                                "name": "Okko",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                                },
                                "url": "https://okko.tv/movie/home-alone-2-lost-in-new-york?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                            }
                        ]
                    }
                },
                {
                    "externalId": {
                        "kpHD": "4edfc8baf73a662bbcff2aee028c3e5f",
                        "imdb": "tt0167261",
                        "tmdb": 121
                    },
                    "rating": {
                        "kp": 8.599,
                        "imdb": 8.8,
                        "filmCritics": 8.5,
                        "russianFilmCritics": 83.3333,
                        "await": 0
                    },
                    "votes": {
                        "kp": 540357,
                        "imdb": 1689466,
                        "filmCritics": 256,
                        "russianFilmCritics": 6,
                        "await": 0
                    },
                    "movieLength": 179,
                    "id": 312,
                    "type": "movie",
                    "name": "Властелин колец: Две крепости",
                    "description": "Братство распалось, но Кольцо Всевластья должно быть уничтожено. Фродо и Сэм вынуждены довериться Голлуму, который взялся провести их к вратам Мордора. Громадная армия Сарумана приближается: члены братства и их союзники готовы принять бой. Битва за Средиземье продолжается.",
                    "year": 2002,
                    "poster": {
                        "url": "https://st.kp.yandex.net/images/film_big/312.jpg",
                        "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_312.jpg"
                    },
                    "genres": [
                        {
                            "name": "фэнтези"
                        },
                        {
                            "name": "приключения"
                        },
                        {
                            "name": "драма"
                        },
                        {
                            "name": "боевик"
                        }
                    ],
                    "countries": [
                        {
                            "name": "Новая Зеландия"
                        },
                        {
                            "name": "США"
                        }
                    ],
                    "alternativeName": "The Lord of the Rings: The Two Towers",
                    "enName": null,
                    "names": [
                        {
                            "name": "Властелин колец: Две крепости"
                        },
                        {
                            "name": "The Lord of the Rings: The Two Towers"
                        },
                        {
                            "name": "LOTR 2",
                            "language": "US",
                            "type": null
                        },
                        {
                            "name": "The Two Towers",
                            "language": "US",
                            "type": "short title"
                        },
                        {
                            "name": "Sagan om de två tornen",
                            "language": "SE",
                            "type": "short title"
                        },
                        {
                            "name": "Les deux tours",
                            "language": "FR",
                            "type": "short title"
                        },
                        {
                            "name": "Le Seigneur des Anneaux: Les Deux Tours",
                            "language": "FR",
                            "type": null
                        },
                        {
                            "name": "The Lord of the Rings 2：The Two Towers",
                            "language": "US",
                            "type": null
                        },
                        {
                            "name": "魔戒二部曲：雙城奇謀",
                            "language": "HK",
                            "type": null
                        },
                        {
                            "name": "Gredzenu pavēlnieks: Divi torņi",
                            "language": "LV",
                            "type": null
                        },
                        {
                            "name": "Господар на прстените: Двете кули",
                            "language": "MK",
                            "type": null
                        },
                        {
                            "name": "ศึกหอคอยคู่กู้พิภพ",
                            "language": "TH",
                            "type": null
                        },
                        {
                            "name": "The Lord of the Rings II: The Two Towers",
                            "language": "US",
                            "type": "Alternative Title"
                        },
                        {
                            "name": "02 - Le Seigneur des anneaux - Les Deux Tours",
                            "language": "FR",
                            "type": null
                        },
                        {
                            "name": "ESDLA",
                            "language": "ES",
                            "type": "short title"
                        },
                        {
                            "name": "Las dos torres",
                            "language": "ES",
                            "type": null
                        }
                    ],
                    "shortDescription": "Голлум ведет хоббитов в Мордор, а великие армии готовятся к битве. Вторая часть трилогии, два «Оскара»",
                    "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/1531675/2a000001714e8bc03538ec41949c44ef2a71/orig"
                    },
                    "watchability": {
                        "items": null
                    }
                },
                {
                    "externalId": {
                        "kpHD": "464daa0109bfb96190229ae24d84d90c",
                        "imdb": "tt0449088",
                        "tmdb": 285
                    },
                    "rating": {
                        "kp": 8.06,
                        "imdb": 7.1,
                        "filmCritics": 5.4,
                        "russianFilmCritics": 0,
                        "await": 0
                    },
                    "votes": {
                        "kp": 539590,
                        "imdb": 661936,
                        "filmCritics": 227,
                        "russianFilmCritics": 0,
                        "await": 0
                    },
                    "movieLength": 169,
                    "id": 102124,
                    "type": "movie",
                    "name": "Пираты Карибского моря: На краю света",
                    "description": "Новые приключения Джека Воробья и его друзей Уилла Тернера и Элизабет Суонн. На этот раз Уиллу и Элизабет придется объединиться с самим Капитаном Барбоссой для того, чтобы отправиться на край света и спасти своего друга — Джека. Ситуация осложняется тем, что Элизабет попадает к сингапурским пиратам…",
                    "year": 2007,
                    "poster": {
                        "url": "https://st.kp.yandex.net/images/film_big/102124.jpg",
                        "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_102124.jpg"
                    },
                    "genres": [
                        {
                            "name": "приключения"
                        },
                        {
                            "name": "боевик"
                        },
                        {
                            "name": "фэнтези"
                        }
                    ],
                    "countries": [
                        {
                            "name": "США"
                        }
                    ],
                    "alternativeName": "Pirates of the Caribbean: At World's End",
                    "enName": null,
                    "names": [
                        {
                            "name": "Пираты Карибского моря: На краю света"
                        },
                        {
                            "name": "Pirates of the Caribbean: At World's End"
                        },
                        {
                            "name": "Pirates of the Caribbean III: At World's End",
                            "language": "US",
                            "type": null
                        },
                        {
                            "name": "캐리비안의 해적-세상의 끝에서",
                            "language": "KR",
                            "type": null
                        },
                        {
                            "name": "Pirates des Caraïbes 3 : Jusqu'au Bout du Monde",
                            "language": "FR",
                            "type": null
                        },
                        {
                            "name": "Piratas do Caribe 3: No Fim do Mundo",
                            "language": "BR",
                            "type": null
                        },
                        {
                            "name": "Pirates des Caraïbes : Jusqu'au Bout du Monde",
                            "language": "FR",
                            "type": null
                        },
                        {
                            "name": "pirates des caraibes 3 jusqu au bout du monde",
                            "language": "FR",
                            "type": null
                        },
                        {
                            "name": "Pirates des Caraïbes 3 - Jusqu'au bout du monde",
                            "language": "FR",
                            "type": null
                        },
                        {
                            "name": "Piratas do Caríbe 3",
                            "language": "BR",
                            "type": null
                        },
                        {
                            "name": "pirates des caraibes jusqu'au bout du monde",
                            "language": "FR",
                            "type": null
                        },
                        {
                            "name": "Pirates of the Caribbean At World's End",
                            "language": "GB",
                            "type": null
                        },
                        {
                            "name": "Pirates des Caraïbes 3",
                            "language": "FR",
                            "type": null
                        },
                        {
                            "name": "Οι Πειρατές Της Καραϊβικής: Στο Τέλος Του Κόσμου",
                            "language": "GR",
                            "type": null
                        },
                        {
                            "name": "Pirates of the Caribbean 3 - At World's End",
                            "language": "US",
                            "type": null
                        },
                        {
                            "name": "Piratas del Caribe En el Fin del Mundo",
                            "language": "SV",
                            "type": null
                        },
                        {
                            "name": "Piratas del Caribe 3. En el fin del mundo",
                            "language": "ES",
                            "type": null
                        },
                        {
                            "name": "Piratas das Caraíbas: Nos Confins do Mundo",
                            "language": "PT",
                            "type": null
                        },
                        {
                            "name": "Piratas del Caribe: En el fin del mundo",
                            "language": "MX",
                            "type": null
                        },
                        {
                            "name": "Fluch der Karibik - Am Ende der Welt",
                            "language": "CH",
                            "type": null
                        },
                        {
                            "name": "Piratas do Caribe 3 - No Fim do Mundo",
                            "language": "BR",
                            "type": null
                        },
                        {
                            "name": "Pirates of the Caribbean deel 3",
                            "language": "NL",
                            "type": null
                        },
                        {
                            "name": "Piráti z Karibiku 3 - Na konci světa",
                            "language": "CZ",
                            "type": null
                        },
                        {
                            "name": "Pirates of the Caribbean At Worlds End",
                            "language": "GB",
                            "type": null
                        },
                        {
                            "name": "Pirates of the Caribbean 3։ At World's End",
                            "language": "US",
                            "type": null
                        },
                        {
                            "name": "Pirati dei Caraibi - Ai confini del mondo",
                            "language": "IT",
                            "type": null
                        },
                        {
                            "name": "Fluch der Karibik - Am Ende der Welt",
                            "language": "DE",
                            "type": null
                        },
                        {
                            "name": "Fluch der Karibik - At World's End",
                            "language": "DE",
                            "type": null
                        },
                        {
                            "name": "Fluch der Karibik 3 - Am Ende der Welt",
                            "language": "DE",
                            "type": null
                        }
                    ],
                    "shortDescription": "Пираты сражаются против короля Англии и морского чудовища. Фантастические приключения с Джонни Деппом",
                    "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/224348/2a0000016eadcdee3b8cde3bb3f07b8ba183/orig"
                    },
                    "watchability": {
                        "items": [
                            {
                                "name": "Okko",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                                },
                                "url": "https://okko.tv/movie/pirates-of-the-caribbean-at-worlds-end?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                            }
                        ]
                    }
                },
                {
                    "id": 88173,
                    "type": "movie",
                    "externalId": {
                        "kpHD": "4a146071bec0e165a754f4963224587b",
                        "imdb": "tt0437086",
                        "tmdb": 399579
                    },
                    "name": "Алита: Боевой ангел",
                    "rating": {
                        "kp": 7.24,
                        "imdb": 7.3,
                        "filmCritics": 6.1,
                        "russianFilmCritics": 66.6667,
                        "await": 89.98
                    },
                    "description": "Действие фильма происходит через 300 лет после Великой войны в XXVI веке. Доктор Идо находит останки женщины-киборга. После починки киборг ничего не помнит, но обнаруживает, что в состоянии пользоваться боевыми приемами киборгов. Начинаются поиски утерянных воспоминаний.",
                    "votes": {
                        "kp": 536079,
                        "imdb": 275622,
                        "filmCritics": 331,
                        "russianFilmCritics": 12,
                        "await": 34955
                    },
                    "year": 2019,
                    "poster": {
                        "url": "https://st.kp.yandex.net/images/film_big/88173.jpg",
                        "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_88173.jpg"
                    },
                    "genres": [
                        {
                            "name": "фантастика"
                        },
                        {
                            "name": "боевик"
                        },
                        {
                            "name": "приключения"
                        }
                    ],
                    "countries": [
                        {
                            "name": "Япония"
                        },
                        {
                            "name": "Канада"
                        },
                        {
                            "name": "США"
                        }
                    ],
                    "alternativeName": "Alita: Battle Angel",
                    "enName": null,
                    "movieLength": 121,
                    "names": [
                        {
                            "name": "Алита: Боевой ангел"
                        },
                        {
                            "name": "Alita: Battle Angel"
                        },
                        {
                            "name": "Alita - Battle Angel",
                            "language": "DE",
                            "type": null
                        },
                        {
                            "name": "Alita Battle Angel",
                            "language": "FR",
                            "type": null
                        },
                        {
                            "name": "Alita ángel de Combate",
                            "language": "ES",
                            "type": null
                        },
                        {
                            "name": "Alita: Bojový anděl",
                            "language": "CZ",
                            "type": null
                        },
                        {
                            "name": "Alita: Ange Conquérant",
                            "language": "CA",
                            "type": null
                        },
                        {
                            "name": "آلیتا: فرشته نبرد",
                            "language": "IR",
                            "type": null
                        },
                        {
                            "name": "Алита - Боевой Ангел",
                            "language": "RU",
                            "type": null
                        },
                        {
                            "name": "Alita - Battle Angel",
                            "language": "US",
                            "type": null
                        }
                    ],
                    "shortDescription": "Девушка-киборг пытается раскрыть тайну своего происхождения. Боевик от Джеймса Кэмерона и Роберта Родригеса",
                    "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/2439731/2a0000016e043c44553e85b35e5bce8ecc76/orig"
                    },
                    "watchability": {
                        "items": [
                            {
                                "name": "Okko",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                                },
                                "url": "https://okko.tv/movie/alita-battle-angel?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                            }
                        ]
                    }
                },
                {
                    "id": 4542208,
                    "countries": [
                        {
                            "name": "Великобритания"
                        },
                        {
                            "name": "США"
                        }
                    ],
                    "genres": [
                        {
                            "name": "триллер"
                        }
                    ],
                    "names": [
                        {
                            "name": "Вышка"
                        },
                        {
                            "name": "Fall"
                        },
                        {
                            "name": "Kritiens",
                            "language": "LV",
                            "type": null
                        },
                        {
                            "name": "命懸二千呎",
                            "language": "HK",
                            "type": "full Chinese font"
                        },
                        {
                            "name": "坠",
                            "language": "CN",
                            "type": "台译"
                        },
                        {
                            "name": "A Queda",
                            "language": "BR",
                            "type": null
                        },
                        {
                            "name": "נפילה",
                            "language": "IL",
                            "type": null
                        },
                        {
                            "name": "Fall - Fear Reaches New Heights",
                            "language": "DE",
                            "type": null
                        },
                        {
                            "name": "Vertige",
                            "language": "CA",
                            "type": "Regional French title"
                        },
                        {
                            "name": "Nie patrz w dół",
                            "language": "PL",
                            "type": null
                        },
                        {
                            "name": "Vertigem Mortal",
                            "language": "PT",
                            "type": null
                        },
                        {
                            "name": "墜",
                            "language": "TW",
                            "type": null
                        },
                        {
                            "name": "Cú Rơi Tử Thần",
                            "language": "VN",
                            "type": null
                        },
                        {
                            "name": "Над безоднею",
                            "language": "UA",
                            "type": null
                        },
                        {
                            "name": "תלויה באויר",
                            "language": "IL",
                            "type": null
                        },
                        {
                            "name": "Vertigo",
                            "language": "ES",
                            "type": null
                        }
                    ],
                    "alternativeName": "Fall",
                    "description": "После гибели Дэна в результате падения со скалы его жена Бекки, ранее увлекавшаяся экстремальными развлечениями, впала в депрессию. Год спустя девушка всё ещё не может прийти в себя и регулярно заливает горе алкоголем, когда в её жизни внезапно появляется старая боевая подруга Хантер. Она предлагает почтить память Дэна, забравшись на телерадиомачту B67 и развеяв там его прах. Девушки отправляются к самому высокому сооружению Соединённых Штатов, даже не представляя, с чем им придётся столкнуться на его верхушке.",
                    "enName": null,
                    "externalId": {
                        "kpHD": "48447f2cb2e1e9a9b98f283b7d7010a2",
                        "imdb": "tt15325794",
                        "tmdb": 985939
                    },
                    "movieLength": 107,
                    "name": "Вышка",
                    "poster": {
                        "url": "https://st.kp.yandex.net/images/film_big/4542208.jpg",
                        "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_4542208.jpg"
                    },
                    "rating": {
                        "kp": 6.749,
                        "imdb": 6.4,
                        "filmCritics": 6.4,
                        "russianFilmCritics": 0,
                        "await": 97.24
                    },
                    "shortDescription": "Две подруги застревают на заброшенной 600-метровой вышке в пустыне. Головокружительный триллер о выживании",
                    "type": "movie",
                    "votes": {
                        "kp": 528689,
                        "imdb": 71457,
                        "filmCritics": 142,
                        "russianFilmCritics": 0,
                        "await": 3607
                    },
                    "year": 2022,
                    "logo": {
                        "url": null
                    },
                    "watchability": {
                        "items": [
                            {
                                "name": "Okko",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                                },
                                "url": "https://okko.tv/movie/fall?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                            },
                            {
                                "name": "Иви",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/2419418/0dfd1724-848f-4725-9160-abc571f41c11/orig"
                                },
                                "url": "https://www.ivi.ru/watch/493697?utm_source=yandex&utm_medium=wizard"
                            },
                            {
                                "name": "PREMIER",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/0f86e907-9531-47e9-87bd-5101a08d4e30/orig"
                                },
                                "url": "https://premier.one/show/19619?utm_source=yandex&utm_medium=yandex_feed_search&utm_campaign=yandex_feed"
                            },
                            {
                                "name": "Wink",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/1672343/54096cbe-cc3b-41c9-8e44-990ebbca8d61/orig"
                                },
                                "url": "https://wink.ru/media_items/149592647?utm_source=yandex&utm_medium=koldunschick&utm_content=name"
                            },
                            {
                                "name": "24ТВ",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/2439731/85e83b8d-1159-4781-bad5-ce0a809b3843/orig"
                                },
                                "url": "https://24h.tv/contents/2022-vyshka-784130086856303882"
                            }
                        ]
                    }
                },
                {
                    "id": 5078983,
                    "externalId": {
                        "kpHD": "d11ae60c565b463c9974b4c39b38b3e8"
                    },
                    "name": "Мажор в Сочи",
                    "alternativeName": null,
                    "enName": null,
                    "names": [
                        {
                            "name": "Мажор в Сочи"
                        }
                    ],
                    "type": "movie",
                    "description": "Московские массивные здания и оживлённые дороги Мажор сменит на живописные курортные виды, домик в горах и извилистые серпантины. Туда он перебирается вместе с дочерью Соней, где у них появился свой семейный бизнес — эко-отель. Но ещё до открытия всё идёт наперекосяк. Вначале в гостинице устраивают погром, затем Соколовский наткнётся на местного мажора и перейдёт дорогу сочинскому воротиле, который планирует снести целый жилой квартал, чтобы построить на его месте винодельню.",
                    "shortDescription": "Как изменить жизнь и защитить ребенка, если привык решать проблемы силой? Душевный экшен с Павлом Прилучным",
                    "rating": {
                        "kp": 7.057,
                        "imdb": 0,
                        "filmCritics": 0,
                        "russianFilmCritics": 0,
                        "await": 94.54
                    },
                    "votes": {
                        "kp": 526489,
                        "imdb": 0,
                        "filmCritics": 0,
                        "russianFilmCritics": 0,
                        "await": 42647
                    },
                    "poster": {
                        "url": "https://st.kp.yandex.net/images/film_big/5078983.jpg",
                        "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_5078983.jpg"
                    },
                    "genres": [
                        {
                            "name": "приключения"
                        },
                        {
                            "name": "комедия"
                        }
                    ],
                    "countries": [
                        {
                            "name": "Россия"
                        }
                    ],
                    "watchability": {
                        "items": null
                    },
                    "releaseYears": [],
                    "year": 2022,
                    "movieLength": 109
                },
                {
                    "externalId": {
                        "kpHD": "4c5829108482e28985ca11a15b9c7049",
                        "imdb": "tt0903624",
                        "tmdb": 49051
                    },
                    "rating": {
                        "kp": 8.099,
                        "imdb": 7.8,
                        "filmCritics": 6.6,
                        "russianFilmCritics": 90,
                        "await": 93.99
                    },
                    "votes": {
                        "kp": 523744,
                        "imdb": 839048,
                        "filmCritics": 307,
                        "russianFilmCritics": 30,
                        "await": 82823
                    },
                    "movieLength": 169,
                    "id": 278522,
                    "type": "movie",
                    "name": "Хоббит: Нежданное путешествие",
                    "description": "Хоббит Бильбо Бэггинс пускается в грандиозный поход, целью которого является отвоевание утраченного королевства гномов Эребор у дракона Смауга. Совершенно неожиданно с хоббитом налаживает контакт волшебник Гэндальф Серый. Так Бильбо находит себя и присоединяется к компании тринадцати гномов, возглавляемых легендарным воином Торином Дубощитом. Их путешествие пройдёт через Дикий Край, предательские земли, населенные гоблинами и орками, смертоносными варгами, гигантскими пауками, меняющим шкуры народом и волшебниками.\n\nИ хотя их цель находится на Востоке, среди пустошей Одинокой Горы, сначала им придется выбраться из туннелей гоблинов, где Бильбо встретит существо, которое изменит его жизнь навсегда - Голлума.",
                    "year": 2012,
                    "poster": {
                        "url": "https://st.kp.yandex.net/images/film_big/278522.jpg",
                        "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_278522.jpg"
                    },
                    "genres": [
                        {
                            "name": "фэнтези"
                        },
                        {
                            "name": "приключения"
                        },
                        {
                            "name": "боевик"
                        }
                    ],
                    "countries": [
                        {
                            "name": "Новая Зеландия"
                        },
                        {
                            "name": "США"
                        }
                    ],
                    "alternativeName": "The Hobbit: An Unexpected Journey",
                    "enName": null,
                    "names": [
                        {
                            "name": "Хоббит: Нежданное путешествие"
                        },
                        {
                            "name": "The Hobbit: An Unexpected Journey"
                        }
                    ],
                    "shortDescription": "Бильбо идет в поход с гномами и знакомится с Голлумом. Эпичная экранизация повести Толкина",
                    "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/223007/2a0000016e043b586890565729640d431cfc/orig"
                    },
                    "watchability": {
                        "items": [
                            {
                                "name": "Okko",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                                },
                                "url": "https://okko.tv/movie/the-hobbit-an-unexpected-journey?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                            },
                            {
                                "name": "Иви",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/2419418/0dfd1724-848f-4725-9160-abc571f41c11/orig"
                                },
                                "url": "https://www.ivi.ru/watch/96085?utm_source=yandex&utm_medium=wizard"
                            },
                            {
                                "name": "PREMIER",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/0f86e907-9531-47e9-87bd-5101a08d4e30/orig"
                                },
                                "url": "https://premier.one/show/16016?utm_source=yandex&utm_medium=yandex_feed_search&utm_campaign=yandex_feed"
                            },
                            {
                                "name": "more.tv",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/1648503/97e3cbbd-40ee-4298-888d-ed2d0f022a69/orig"
                                },
                                "url": "https://more.tv/hobbit_nezhdannoe_puteshestvie?utm_source=yandex-snippet&utm_medium=snippet&utm_campaign=hobbit_nezhdannoe_puteshestvie"
                            },
                            {
                                "name": "Wink",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/1672343/54096cbe-cc3b-41c9-8e44-990ebbca8d61/orig"
                                },
                                "url": "https://wink.ru/media_items/54978844?utm_source=yandex&utm_medium=koldunschick&utm_content=name"
                            },
                            {
                                "name": "viju",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/224348/8b10c84b-e1bb-4493-9bc4-6ee56554403a/orig"
                                },
                                "url": "https://viju.ru/filmy/khobbit-nezhdannoe-puteshestvie?utm_campaign=yandex_content_integration&utm_medium=affiliate&utm_source=yandex"
                            },
                            {
                                "name": "Смотрёшка",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/236744/c88e652e-2eb1-472d-b636-a266364dbf58/orig"
                                },
                                "url": "https://smotreshka.tv/vod/vipplay/618e055dbb003f90038998ce?utm_source=yandex_search&utm_campaign=yandex_feed&utm_term=viju&utm_content=Viju"
                            },
                            {
                                "name": "НТВ-ПЛЮС Онлайн ТВ",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/223007/c6b9b3d8-3258-4394-9cae-c86fdb56a0c6/orig"
                                },
                                "url": "https://ntvplus.tv/watch/16906-hobbit-nezhdannoe-puteshestvie?utm_source=kinopoisk"
                            },
                            {
                                "name": "24ТВ",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/2439731/85e83b8d-1159-4781-bad5-ce0a809b3843/orig"
                                },
                                "url": "https://24h.tv/contents/2012-the-hobbit-an-unexpected-j-546405269731541073"
                            }
                        ]
                    }
                },
                {
                    "id": 88198,
                    "alternativeName": "Real Steel",
                    "color": "#0C1012",
                    "countries": [
                        {
                            "name": "США"
                        },
                        {
                            "name": "Индия"
                        }
                    ],
                    "description": "События фильма происходят в будущем, где бокс запрещен за негуманностью и заменен боями 2000-фунтовых роботов, управляемых людьми. Бывший боксер, а теперь промоутер, переметнувшийся в Робобокс, решает, что наконец нашел своего чемпиона, когда ему попадается выбракованный, но очень способный робот. Одновременно на жизненном пути героя возникает 11-летний парень, оказывающийся его сыном. И по мере того, как машина пробивает свой путь к вершине, обретшие друг друга отец и сын учатся дружить.",
                    "enName": null,
                    "externalId": {
                        "kpHD": "4252f439b43045c2851192ec61d8f5d9",
                        "imdb": "tt0433035",
                        "tmdb": 39254
                    },
                    "genres": [
                        {
                            "name": "фантастика"
                        },
                        {
                            "name": "боевик"
                        },
                        {
                            "name": "семейный"
                        }
                    ],
                    "movieLength": 127,
                    "name": "Живая сталь",
                    "names": [
                        {
                            "name": "Живая сталь"
                        },
                        {
                            "name": "Real Steel"
                        }
                    ],
                    "poster": {
                        "url": "https://st.kp.yandex.net/images/film_big/88198.jpg",
                        "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_88198.jpg"
                    },
                    "rating": {
                        "kp": 7.664,
                        "imdb": 7,
                        "filmCritics": 5.9,
                        "russianFilmCritics": 71.4286,
                        "await": 89.3
                    },
                    "shortDescription": "Отец с сыном тренируют робота-боксера и строят отношения с нуля. Хью Джекман в зрелищном семейном экшене",
                    "votes": {
                        "kp": 523000,
                        "imdb": 337215,
                        "filmCritics": 236,
                        "russianFilmCritics": 7,
                        "await": 23952
                    },
                    "year": 2011,
                    "type": "movie",
                    "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/223007/2a0000016ef3ab354044647313b60d3e4393/orig"
                    },
                    "watchability": {
                        "items": [
                            {
                                "name": "Okko",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                                },
                                "url": "https://okko.tv/movie/real-steel?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                            }
                        ]
                    }
                },
                {
                    "externalId": {
                        "kpHD": "47cf35a5d38ad7b5aaf5e51fbb1e7867",
                        "imdb": "tt0208092",
                        "tmdb": 107
                    },
                    "rating": {
                        "kp": 8.549,
                        "imdb": 8.2,
                        "filmCritics": 6.4,
                        "russianFilmCritics": 100,
                        "await": 0
                    },
                    "votes": {
                        "kp": 512260,
                        "imdb": 867695,
                        "filmCritics": 143,
                        "russianFilmCritics": 3,
                        "await": 0
                    },
                    "movieLength": 104,
                    "id": 526,
                    "type": "movie",
                    "name": "Большой куш",
                    "description": "Фрэнки Четыре Пальца должен был переправить краденый алмаз из Англии в США своему боссу Эви, но, сделав ставку на подпольный боксерский поединок, он попал в круговорот весьма нежелательных событий. Вокруг него и его груза разворачивается сложная интрига с участием множества колоритных персонажей лондонского дна — русского гангстера, троих незадачливых грабителей, хитрого боксера и угрюмого громилы грозного мафиози. Каждый норовит в одиночку сорвать большой куш.",
                    "year": 2000,
                    "poster": {
                        "url": "https://st.kp.yandex.net/images/film_big/526.jpg",
                        "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_526.jpg"
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
                    "alternativeName": "Snatch",
                    "enName": null,
                    "names": [
                        {
                            "name": "Большой куш"
                        },
                        {
                            "name": "Snatch"
                        },
                        {
                            "name": "Snatch'd",
                            "language": "US",
                            "type": "working title"
                        },
                        {
                            "name": "Cerdos y Diamantes",
                            "language": "SV",
                            "type": null
                        },
                        {
                            "name": "Diamonds",
                            "language": "US",
                            "type": "working title"
                        },
                        {
                            "name": "Snatch - svinje i dijamanti",
                            "language": "RS",
                            "type": "Romanized"
                        },
                        {
                            "name": "스내치",
                            "language": "KR",
                            "type": null
                        },
                        {
                            "name": "Gepi",
                            "language": "BG",
                            "type": null
                        },
                        {
                            "name": "I Arpachtí",
                            "language": "GR",
                            "type": null
                        },
                        {
                            "name": "Bol'shoy kush",
                            "language": "RU",
                            "type": null
                        },
                        {
                            "name": "Velykyy kush",
                            "language": "UA",
                            "type": null
                        },
                        {
                            "name": "Snatch.",
                            "language": "GB",
                            "type": "On-screen title"
                        },
                        {
                            "name": "Snatch – Porcos e Diamantes",
                            "language": "BR",
                            "type": null
                        },
                        {
                            "name": "Teemandirööv",
                            "language": "EE",
                            "type": null
                        }
                    ],
                    "shortDescription": "На охоту за крупным алмазом выходят цыгане, евреи и местные головорезы. Криминальная Англия глазами Гая Ричи",
                    "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/224348/2a000001721944c81e7747c38b282ab0880e/orig"
                    },
                    "watchability": {
                        "items": [
                            {
                                "name": "Wink",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/1672343/54096cbe-cc3b-41c9-8e44-990ebbca8d61/orig"
                                },
                                "url": "https://wink.ru/media_items/2109718?utm_source=yandex&utm_medium=koldunschick&utm_content=name"
                            },
                            {
                                "name": "Смотрёшка",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/236744/c88e652e-2eb1-472d-b636-a266364dbf58/orig"
                                },
                                "url": "https://smotreshka.tv/vod/vipplay/6308630cb51ecafaef03f6e6?utm_source=yandex_search&utm_campaign=yandex_feed&utm_term=viju&utm_content=Viju"
                            }
                        ]
                    }
                },
                {
                    "id": 44168,
                    "type": "movie",
                    "externalId": {
                        "kpHD": "41b7a3248bca8b40b66079ea65f4dae3",
                        "imdb": "tt0134614",
                        "tmdb": 20975
                    },
                    "name": "Девчата",
                    "rating": {
                        "kp": 8.396,
                        "imdb": 7.9,
                        "filmCritics": 0,
                        "russianFilmCritics": 0,
                        "await": 0
                    },
                    "description": "В сибирский поселок приехала юная повариха Тося Кислицына — наивная и эксцентричная девчонка. Она сует свой нос во все дела, каждому стремится помочь. Местный красавец Илья на спор заводит с Тосей роман.",
                    "votes": {
                        "kp": 510314,
                        "imdb": 4113,
                        "filmCritics": 0,
                        "russianFilmCritics": 0,
                        "await": 0
                    },
                    "year": 1962,
                    "poster": {
                        "url": "https://st.kp.yandex.net/images/film_big/44168.jpg",
                        "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_44168.jpg"
                    },
                    "genres": [
                        {
                            "name": "мелодрама"
                        },
                        {
                            "name": "комедия"
                        }
                    ],
                    "countries": [
                        {
                            "name": "СССР"
                        }
                    ],
                    "alternativeName": null,
                    "enName": null,
                    "movieLength": 92,
                    "names": [
                        {
                            "name": "Девчата"
                        },
                        {
                            "name": "The Girls",
                            "language": "US",
                            "type": null
                        },
                        {
                            "name": "Les Filles",
                            "language": "FR",
                            "type": null
                        },
                        {
                            "name": "Mai lányok",
                            "language": "HU",
                            "type": null
                        },
                        {
                            "name": "Дівчата",
                            "language": "UA",
                            "type": null
                        },
                        {
                            "name": "Dziewczęta",
                            "language": "PL",
                            "type": null
                        },
                        {
                            "name": "Devčata",
                            "language": "IT",
                            "type": null
                        },
                        {
                            "name": "Oklada i djevojke",
                            "language": "HR",
                            "type": null
                        },
                        {
                            "name": "Taigan tyttö",
                            "language": "FI",
                            "type": null
                        },
                        {
                            "name": "Qızlar",
                            "language": "AZ",
                            "type": null
                        },
                        {
                            "name": "So ein Mädel",
                            "language": "DE",
                            "type": null
                        },
                        {
                            "name": "Las niñas",
                            "language": "ES",
                            "type": null
                        },
                        {
                            "name": "Dívky",
                            "language": "CZ",
                            "type": null
                        }
                    ],
                    "shortDescription": "Юная повариха привносит жизни в маленький сибирский поселок. Фильм-эпоха, воспитавший не одно поколение",
                    "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/2385704/2a00000173c3119002890d4f821f616e0ffb/orig"
                    },
                    "watchability": {
                        "items": [
                            {
                                "name": "Иви",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/2419418/0dfd1724-848f-4725-9160-abc571f41c11/orig"
                                },
                                "url": "https://www.ivi.ru/watch/52947?utm_source=yandex&utm_medium=wizard"
                            },
                            {
                                "name": "KION",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/daeb142e-3ecc-4bb2-9bff-4827996643ab/orig"
                                },
                                "url": "https://kion.ru/video/movie/599189088?utm_source=yandex&utm_medium=organic&utm_campaign=wizard"
                            },
                            {
                                "name": "PREMIER",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/0f86e907-9531-47e9-87bd-5101a08d4e30/orig"
                                },
                                "url": "https://premier.one/show/12365?utm_source=yandex&utm_medium=yandex_feed_search&utm_campaign=yandex_feed"
                            },
                            {
                                "name": "Триколор Кино и ТВ",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/947e777c-2f73-4cbc-b09d-6bfa3966ba13/orig"
                                },
                                "url": "https://kino.tricolor.tv/watch/devchata-1962/?utm_source=yandex&utm_medium=feed"
                            }
                        ]
                    }
                },
                {
                    "externalId": {
                        "kpHD": "49b1e56630d3dd45bd2befd5a866c5bf",
                        "imdb": "tt6723592",
                        "tmdb": 577922
                    },
                    "rating": {
                        "kp": 7.525,
                        "imdb": 7.3,
                        "filmCritics": 6.9,
                        "russianFilmCritics": 60,
                        "await": 98.23
                    },
                    "votes": {
                        "kp": 508467,
                        "imdb": 522880,
                        "filmCritics": 371,
                        "russianFilmCritics": 30,
                        "await": 43254
                    },
                    "movieLength": 150,
                    "id": 1236063,
                    "type": "movie",
                    "name": "Довод",
                    "description": "После теракта в киевском оперном театре агент ЦРУ объединяется с британской разведкой, чтобы противостоять русскому олигарху, который сколотил состояние на торговле оружием. Для этого агенты используют инверсию времени — технологию будущего, позволяющую времени идти вспять.",
                    "year": 2020,
                    "poster": {
                        "url": "https://st.kp.yandex.net/images/film_big/1236063.jpg",
                        "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_1236063.jpg"
                    },
                    "genres": [
                        {
                            "name": "фантастика"
                        },
                        {
                            "name": "боевик"
                        },
                        {
                            "name": "триллер"
                        },
                        {
                            "name": "приключения"
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
                    "alternativeName": "Tenet",
                    "enName": null,
                    "names": [
                        {
                            "name": "Довод"
                        },
                        {
                            "name": "Tenet"
                        },
                        {
                            "name": "İnanç",
                            "language": "TR",
                            "type": null
                        },
                        {
                            "name": "Verovanje",
                            "language": "BA",
                            "type": "Serbian title"
                        },
                        {
                            "name": "テネット",
                            "language": "JP",
                            "type": null
                        },
                        {
                            "name": "Merry-Go-Round",
                            "language": "US",
                            "type": "Fake working title"
                        },
                        {
                            "name": "TENET天能",
                            "language": "TW",
                            "type": null
                        },
                        {
                            "name": "Dalil",
                            "language": "UZ",
                            "type": "TV title"
                        },
                        {
                            "name": "信条",
                            "language": "CN",
                            "type": null
                        },
                        {
                            "name": "เทเน็ท",
                            "language": "TH",
                            "type": null
                        },
                        {
                            "name": "انگاشته",
                            "language": "IR",
                            "type": null
                        }
                    ],
                    "color": "#000000",
                    "shortDescription": "Протагонист пытается обезвредить террориста с помощью уникальной технологии. Блокбастер-пазл Кристофера Нолана",
                    "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/239697/2a000001806006ba05ae72483e16dd65706b/orig"
                    },
                    "watchability": {
                        "items": null
                    }
                }
            ],
            movieType: '',

        }
        this.changeInputChecked = this.changeInputChecked.bind(this);
    }

    // urlOfResponse = 'https://api.kinopoisk.dev/v1/movie?page=2&limit=40&type=movie'


    changeInputChecked(event) {
        console.log(event.target.value);
        this.setState({ movieType: event.target.value })
    }

    filterOfMovies = () => {
        try {
            console.log(this.state.movieType);
            const inputOfSearch = document.querySelector('.inputOfSearch')
            const movieTypeContainer = document.querySelector('.movieTypeContainer')
            let name = ''
            let type = ''
            const urlOfFilter = 'https://api.kinopoisk.dev/v1/movie?page=1&limit=10'
            let urlFilterResponse = ''

            if (inputOfSearch.value !== '') {name = '&name=' + encodeURI(inputOfSearch.value)}
            if (this.state.movieType !== '') {type = '&type=' + this.state.movieType} 
            else {
                inputOfSearch.placeholder = 'ВЫ НИЧЕГО НЕ ВВЕЛИ!'
                setTimeout(() => { inputOfSearch.placeholder = 'Введите название фильма...' }, 3000)
            }


            if (name !== '' || type !== '') {
                urlFilterResponse = urlOfFilter + name + type
                console.log(urlFilterResponse);
                this.importMovies(urlFilterResponse)
            }

            inputOfSearch.value = ''
        } catch (error) {
            console.log(error);
        }
    }

    importMovies = async (url) => {
        try {
            let headers = {
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-KEY': apiKinopoisk,
                }
            }

            const response = await axios.get(url, headers);
            console.log('Function response:', response.data.docs);
            this.setState({ arrOfMovieList: response.data.docs })
            console.log(this.state.arrOfMovieList);
        } catch (error) {
            console.log(error);
        }

    }





    render() {
        return (
            <div className="moviesPage first-block column">
                <h1>Смотреть фильмы онлайн на MyCinema</h1>
                <div className="filterContainer">
                    <input className="inputOfSearch" type="text" placeholder="Введите название фильма..." />
                    <div className="switchesContainer">
                        <div className="movieTypeContainer" onChange={this.changeInputChecked}>
                            <div className="radio">
                                <label className="custom-radio">
                                    <input type="radio" name="movies" value="movie" />
                                    <span>Фильмы</span>
                                </label>
                            </div>

                            <div className="radio">
                                <label className="custom-radio">
                                    <input type="radio" name="movies" value="tv-series" />
                                    <span>Сериалы</span>
                                </label>
                            </div>

                            <div className="radio">
                                <label className="custom-radio">
                                    <input type="radio" name="movies" value="cartoon " />
                                    <span>Мультфильмы</span>
                                </label>
                            </div>

                            <div className="radio">
                                <label className="custom-radio">
                                    <input type="radio" name="movies" value="anime" />
                                    <span>Аниме</span>
                                </label>
                            </div>

                            <div className="radio">
                                <label className="custom-radio">
                                    <input type="radio" name="movies" value="animated-series" />
                                    <span>Мультсериалы</span>
                                </label>
                            </div>
                            <div className="radio">
                                <label className="custom-radio">
                                    <input type="radio" name="movies" value="tv-show" />
                                    <span>ТВ Шоу</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="filterButton button" onClick={this.filterOfMovies}>Найти</div>
                </div>
                <div className="moviesListContainer">
                    {this.state.arrOfMovieList.map((obj) => {
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

export default MoviesPage