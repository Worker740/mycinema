import React, { Component } from "react";
import axios from "axios";
import apiKinopoisk from "./API";

class MoviesOnly extends React.Component {
    constructor() {
        super()
        this.state = {
            arrOfMoviesOnly: [
                {
                    "id": 45146,
                    "type": "movie",
                    "externalId": {
                        "kpHD": "4592133f6f3e90e3811d0e202dbcba0c",
                        "imdb": "tt0087650",
                        "tmdb": 32334
                    },
                    "name": "Любовь и голуби",
                    "rating": {
                        "kp": 8.286,
                        "imdb": 8,
                        "filmCritics": 0,
                        "russianFilmCritics": 0,
                        "await": 0
                    },
                    "description": "Ликвидируя неисправность лебедки, Василий Кузякин получил травму и путевку на юг. Там он встретил роковую женщину Раису Захаровну и… вернулся Вася с курорта не к себе в деревню, а в дом Раисы Захаровны. Началась для него новая жизнь, в которой было много непонятного и интересного, но не было дома, где остались Надя, дети и голуби.",
                    "votes": {
                        "kp": 783086,
                        "imdb": 5143,
                        "filmCritics": 0,
                        "russianFilmCritics": 0,
                        "await": 0
                    },
                    "year": 1984,
                    "poster": {
                        "url": "https://st.kp.yandex.net/images/film_big/45146.jpg",
                        "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_45146.jpg"
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
                    "names": [
                        {
                            "name": "Любовь и голуби"
                        },
                        {
                            "name": "Lyubov i golubi",
                            "language": "RU",
                            "type": null
                        },
                        {
                            "name": "Love and Doves",
                            "language": "US",
                            "type": null
                        },
                        {
                            "name": "Любов і голуби",
                            "language": "UA",
                            "type": null
                        }
                    ],
                    "movieLength": 107,
                    "shortDescription": "Вася пытается заслужить прощения у семьи. Мощнейший актерский состав под руководством Владимира Меньшова",
                    "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/2385704/2a000001720d95c11088788d9e2be6562e66/orig"
                    },
                    "watchability": {
                        "items": [
                            {
                                "name": "Okko",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                                },
                                "url": "https://okko.tv/movie/ljubov-i-golubi?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                            },
                            {
                                "name": "Иви",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/2419418/0dfd1724-848f-4725-9160-abc571f41c11/orig"
                                },
                                "url": "https://www.ivi.ru/watch/53119?utm_source=yandex&utm_medium=wizard"
                            },
                            {
                                "name": "KION",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/daeb142e-3ecc-4bb2-9bff-4827996643ab/orig"
                                },
                                "url": "https://kion.ru/video/movie/599189160?utm_source=yandex&utm_medium=organic&utm_campaign=wizard"
                            },
                            {
                                "name": "PREMIER",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/0f86e907-9531-47e9-87bd-5101a08d4e30/orig"
                                },
                                "url": "https://premier.one/show/14584?utm_source=yandex&utm_medium=yandex_feed_search&utm_campaign=yandex_feed"
                            },
                            {
                                "name": "Триколор Кино и ТВ",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/947e777c-2f73-4cbc-b09d-6bfa3966ba13/orig"
                                },
                                "url": "https://kino.tricolor.tv/watch/lyubov-i-golubi-1984/?utm_source=yandex&utm_medium=feed"
                            }
                        ]
                    }
                },
                {
                    "id": 397667,
                    "type": "movie",
                    "externalId": {
                        "kpHD": "443c9a2dee446db0b8d3a6d7f930528e",
                        "imdb": "tt1130884",
                        "tmdb": 11324
                    },
                    "name": "Остров проклятых",
                    "rating": {
                        "kp": 8.512,
                        "imdb": 8.2,
                        "filmCritics": 6.7,
                        "russianFilmCritics": 85.7143,
                        "await": 78.65
                    },
                    "description": "Два американских судебных пристава отправляются на один из островов в штате Массачусетс, чтобы расследовать исчезновение пациентки клиники для умалишенных преступников. При проведении расследования им придется столкнуться с паутиной лжи, обрушившимся ураганом и смертельным бунтом обитателей клиники.",
                    "votes": {
                        "kp": 781666,
                        "imdb": 1343889,
                        "filmCritics": 261,
                        "russianFilmCritics": 7,
                        "await": 22948
                    },
                    "year": 2009,
                    "poster": {
                        "url": "https://st.kp.yandex.net/images/film_big/397667.jpg",
                        "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_397667.jpg"
                    },
                    "genres": [
                        {
                            "name": "триллер"
                        },
                        {
                            "name": "детектив"
                        },
                        {
                            "name": "драма"
                        }
                    ],
                    "countries": [
                        {
                            "name": "США"
                        }
                    ],
                    "alternativeName": "Shutter Island",
                    "color": "#BC7E6C",
                    "enName": null,
                    "names": [
                        {
                            "name": "Остров проклятых"
                        },
                        {
                            "name": "Shutter Island"
                        },
                        {
                            "name": "Ashecliffe",
                            "language": "US",
                            "type": "Working Title"
                        }
                    ],
                    "shortDescription": "Пристав оказывается заложником клиники для умалишенных. Сложносочиненный детектив с Леонардо ДиКаприо",
                    "movieLength": 138,
                    "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/2419418/2a0000016eadd14d677a2285a8ffa7e27974/orig"
                    },
                    "watchability": {
                        "items": [
                            {
                                "name": "Okko",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                                },
                                "url": "https://okko.tv/movie/shutter-island?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                            },
                            {
                                "name": "Иви",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/2419418/0dfd1724-848f-4725-9160-abc571f41c11/orig"
                                },
                                "url": "https://www.ivi.ru/watch/89599?utm_source=yandex&utm_medium=wizard"
                            },
                            {
                                "name": "START",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/1a632675-0d99-4268-bd5e-d5f3dd800174/orig"
                                },
                                "url": "https://start.ru/watch/ostrov-proklyatyh?utm_source=kinopoisk&utm_medium=feed_watch&utm_campaign=ostrov-proklyatyh"
                            },
                            {
                                "name": "KION",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/daeb142e-3ecc-4bb2-9bff-4827996643ab/orig"
                                },
                                "url": "https://kion.ru/video/movie/213924851?utm_source=yandex&utm_medium=organic&utm_campaign=wizard"
                            },
                            {
                                "name": "PREMIER",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/0f86e907-9531-47e9-87bd-5101a08d4e30/orig"
                                },
                                "url": "https://premier.one/show/10167?utm_source=yandex&utm_medium=yandex_feed_search&utm_campaign=yandex_feed"
                            },
                            {
                                "name": "more.tv",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/1648503/97e3cbbd-40ee-4298-888d-ed2d0f022a69/orig"
                                },
                                "url": "https://more.tv/ostrov_proklyatyh?utm_source=yandex-snippet&utm_medium=snippet&utm_campaign=ostrov_proklyatyh"
                            },
                            {
                                "name": "Триколор Кино и ТВ",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/947e777c-2f73-4cbc-b09d-6bfa3966ba13/orig"
                                },
                                "url": "https://kino.tricolor.tv/watch/ostrov-proklyatykh-2009/?utm_source=yandex&utm_medium=feed"
                            },
                            {
                                "name": "Кино1ТВ",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/1672343/4e5f7a8e-d5ac-4904-9fc0-208753ccf520/orig"
                                },
                                "url": "https://kino.1tv.ru/serials/ostrov-proklyatyh?utm_source=yandex&utm_medium=wizard"
                            },
                            {
                                "name": "Wink",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/1672343/54096cbe-cc3b-41c9-8e44-990ebbca8d61/orig"
                                },
                                "url": "https://wink.ru/media_items/76282127?utm_source=yandex&utm_medium=koldunschick&utm_content=name"
                            },
                            {
                                "name": "viju",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/224348/8b10c84b-e1bb-4493-9bc4-6ee56554403a/orig"
                                },
                                "url": "https://viju.ru/filmy/ostrov-proklyatykh?utm_campaign=yandex_content_integration&utm_medium=affiliate&utm_source=yandex"
                            }
                        ]
                    }
                },
                {
                    "externalId": {
                        "kpHD": "45ec35086bb46573803551f378c69b73",
                        "imdb": "tt4154756",
                        "tmdb": 299536
                    },
                    "rating": {
                        "kp": 8.06,
                        "imdb": 8.4,
                        "filmCritics": 7.6,
                        "russianFilmCritics": 86.3636,
                        "await": 92.37
                    },
                    "votes": {
                        "kp": 772706,
                        "imdb": 1106226,
                        "filmCritics": 490,
                        "russianFilmCritics": 22,
                        "await": 77954
                    },
                    "movieLength": 149,
                    "id": 843649,
                    "type": "movie",
                    "name": "Мстители: Война бесконечности",
                    "description": "Пока Мстители и их союзники продолжают защищать мир от различных опасностей, с которыми не смог бы справиться один супергерой, новая угроза возникает из космоса: Танос. Межгалактический тиран преследует цель собрать все шесть Камней Бесконечности - артефакты невероятной силы, с помощью которых можно менять реальность по своему желанию. Всё, с чем Мстители сталкивались ранее, вело к этому моменту – судьба Земли никогда ещё не была столь неопределённой.",
                    "year": 2018,
                    "poster": {
                        "url": "https://st.kp.yandex.net/images/film_big/843649.jpg",
                        "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_843649.jpg"
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
                        }
                    ],
                    "alternativeName": "Avengers: Infinity War",
                    "enName": null,
                    "names": [
                        {
                            "name": "Мстители: Война бесконечности"
                        },
                        {
                            "name": "Avengers: Infinity War"
                        }
                    ],
                    "shortDescription": "Титан Танос вынашивает страшный план — угрозу всей Вселенной. Предпоследний фильм о суперкоманде Marvel",
                    "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/2439731/2a00000178c586374cd541732e2109769c2d/orig"
                    },
                    "watchability": {
                        "items": [
                            {
                                "name": "Okko",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                                },
                                "url": "https://okko.tv/movie/avengers-infinity-war?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                            },
                            {
                                "name": "24ТВ",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/2439731/85e83b8d-1159-4781-bad5-ce0a809b3843/orig"
                                },
                                "url": "https://24h.tv/contents/2018-avengers-infinity-war-550019195409007206"
                            }
                        ]
                    }
                },
                {
                    "externalId": {
                        "kpHD": "467e936285361ab78c3ed4061d3cc363",
                        "imdb": "tt0120338",
                        "tmdb": 597
                    },
                    "rating": {
                        "kp": 8.383,
                        "imdb": 7.9,
                        "filmCritics": 8,
                        "russianFilmCritics": 0,
                        "await": 0
                    },
                    "votes": {
                        "kp": 761267,
                        "imdb": 1209219,
                        "filmCritics": 250,
                        "russianFilmCritics": 0,
                        "await": 0
                    },
                    "movieLength": 194,
                    "id": 2213,
                    "type": "movie",
                    "name": "Титаник",
                    "description": "В первом и последнем плавании шикарного «Титаника» встречаются двое. Пассажир нижней палубы Джек выиграл билет в карты, а богатая наследница Роза отправляется в Америку, чтобы выйти замуж по расчёту. Чувства молодых людей только успевают расцвести, и даже не классовые различия создадут испытания влюблённым, а айсберг, вставший на пути считавшегося непотопляемым лайнера.",
                    "year": 1997,
                    "poster": {
                        "url": "https://st.kp.yandex.net/images/film_big/2213.jpg",
                        "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_2213.jpg"
                    },
                    "genres": [
                        {
                            "name": "мелодрама"
                        },
                        {
                            "name": "история"
                        },
                        {
                            "name": "триллер"
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
                            "name": "Мексика"
                        }
                    ],
                    "alternativeName": "Titanic",
                    "enName": null,
                    "names": [
                        {
                            "name": "Титаник"
                        },
                        {
                            "name": "Titanic"
                        },
                        {
                            "name": "The Ship of Dreams",
                            "language": "US",
                            "type": "working title"
                        },
                        {
                            "name": "טיטאניק",
                            "language": "IL",
                            "type": null
                        },
                        {
                            "name": "Titanic 3D",
                            "language": "US",
                            "type": "3D version"
                        },
                        {
                            "name": "泰坦尼克号",
                            "language": "CN",
                            "type": null
                        },
                        {
                            "name": "Titanikas",
                            "language": "LT",
                            "type": null
                        },
                        {
                            "name": "타이타닉",
                            "language": "KR",
                            "type": null
                        },
                        {
                            "name": "Titanic: 25 výročí",
                            "language": "CZ",
                            "type": "2023 re-release"
                        },
                        {
                            "name": "Titāniks",
                            "language": "LV",
                            "type": null
                        },
                        {
                            "name": "Titanic 25th Anniversary",
                            "language": "US",
                            "type": null
                        },
                        {
                            "name": "Titanic 25º aniversario",
                            "language": "ES",
                            "type": null
                        },
                        {
                            "name": "タイタニック：ジェームズ・キャメロン25周年3Dリマスター",
                            "language": "JP",
                            "type": null
                        },
                        {
                            "name": "鐵達尼號：25週年紀念",
                            "language": "HK",
                            "type": null
                        },
                        {
                            "name": "טיטניק: 25 שנה - תלת מימד",
                            "language": "IL",
                            "type": null
                        }
                    ],
                    "shortDescription": "Запретная любовь на фоне гибели легендарного лайнера. Великий фильм-катастрофа — в отреставрированной версии",
                    "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/223007/2a000001729e8bc06ab8fbd24ff28cf4e297/orig"
                    },
                    "watchability": {
                        "items": [
                            {
                                "name": "Okko",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                                },
                                "url": "https://okko.tv/movie/titanic?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                            }
                        ]
                    }
                },
                {
                    "externalId": {
                        "kpHD": "43832bafade7d88db79c61317e3a60b0",
                        "imdb": "tt1270797",
                        "tmdb": 335983
                    },
                    "rating": {
                        "kp": 6.9,
                        "imdb": 6.6,
                        "filmCritics": 4.5,
                        "russianFilmCritics": 38.8889,
                        "await": 94.6
                    },
                    "votes": {
                        "kp": 752369,
                        "imdb": 498002,
                        "filmCritics": 364,
                        "russianFilmCritics": 18,
                        "await": 59983
                    },
                    "movieLength": 112,
                    "id": 463634,
                    "type": "movie",
                    "name": "Веном",
                    "description": "Что, если в один прекрасный день в тебя вселится симбиот, который наделит тебя сверхчеловеческими способностями? Вот только Веном — симбиот совсем недобрый, и договориться с ним невозможно. А нужно ли договариваться? Ведь в какой-то момент ты понимаешь, что быть плохим вовсе не так уж и плохо, так даже веселее. А в мире и так слишком много супергероев.",
                    "year": 2018,
                    "poster": {
                        "url": "https://st.kp.yandex.net/images/film_big/463634.jpg",
                        "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_463634.jpg"
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
                            "name": "ужасы"
                        }
                    ],
                    "countries": [
                        {
                            "name": "США"
                        },
                        {
                            "name": "Китай"
                        }
                    ],
                    "alternativeName": "Venom",
                    "enName": null,
                    "names": [
                        {
                            "name": "Веном"
                        },
                        {
                            "name": "Venom"
                        }
                    ],
                    "shortDescription": "В настырного журналиста вселяется симбиот. Том Харди в образе обаятельного суперзлодея из комиксов Marvel",
                    "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/2419418/2a0000016ff9c596afa217a90031b3ed8750/orig"
                    },
                    "watchability": {
                        "items": [
                            {
                                "name": "Иви",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/2419418/0dfd1724-848f-4725-9160-abc571f41c11/orig"
                                },
                                "url": "https://www.ivi.ru/watch/138358?utm_source=yandex&utm_medium=wizard"
                            },
                            {
                                "name": "Триколор Кино и ТВ",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/947e777c-2f73-4cbc-b09d-6bfa3966ba13/orig"
                                },
                                "url": "https://kino.tricolor.tv/watch/venom-2018/?utm_source=yandex&utm_medium=feed"
                            },
                            {
                                "name": "Wink",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/1672343/54096cbe-cc3b-41c9-8e44-990ebbca8d61/orig"
                                },
                                "url": "https://wink.ru/media_items/73761260?utm_source=yandex&utm_medium=koldunschick&utm_content=name"
                            }
                        ]
                    }
                },
                {
                    "externalId": {
                        "kpHD": "4e7c6d933dff14428eaa7b1522a00c7f",
                        "imdb": "tt4154796",
                        "tmdb": 299534
                    },
                    "rating": {
                        "kp": 7.846,
                        "imdb": 8.4,
                        "filmCritics": 8.2,
                        "russianFilmCritics": 70.5882,
                        "await": 92.33
                    },
                    "votes": {
                        "kp": 728303,
                        "imdb": 1160690,
                        "filmCritics": 555,
                        "russianFilmCritics": 17,
                        "await": 96317
                    },
                    "movieLength": 181,
                    "id": 843650,
                    "type": "movie",
                    "name": "Мстители: Финал",
                    "description": "Оставшиеся в живых члены команды Мстителей и их союзники должны разработать новый план, который поможет противостоять разрушительным действиям могущественного титана Таноса. После наиболее масштабной и трагической битвы в истории они не могут допустить ошибку.",
                    "year": 2019,
                    "poster": {
                        "url": "https://st.kp.yandex.net/images/film_big/843650.jpg",
                        "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_843650.jpg"
                    },
                    "genres": [
                        {
                            "name": "фантастика"
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
                        }
                    ],
                    "alternativeName": "Avengers: Endgame",
                    "enName": null,
                    "names": [
                        {
                            "name": "Мстители: Финал"
                        },
                        {
                            "name": "Avengers: Endgame"
                        }
                    ],
                    "shortDescription": "Железный человек, Тор и другие пытаются переиграть Таноса. Эпохальное завершение супергеройской франшизы",
                    "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/1534341/2a00000176f208a7a61cc08d59dec87c9876/orig"
                    },
                    "watchability": {
                        "items": [
                            {
                                "name": "Okko",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                                },
                                "url": "https://okko.tv/movie/avengers-endgame?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                            },
                            {
                                "name": "24ТВ",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/2439731/85e83b8d-1159-4781-bad5-ce0a809b3843/orig"
                                },
                                "url": "https://24h.tv/contents/2019-avengers-endgame-546332052690043125"
                            }
                        ]
                    }
                },
                {
                    "externalId": {
                        "kpHD": "45e8f29f25fe31a59be88301baa5caa1",
                        "imdb": "tt0110912",
                        "tmdb": 680
                    },
                    "rating": {
                        "kp": 8.642,
                        "imdb": 8.9,
                        "filmCritics": 9.2,
                        "russianFilmCritics": 100,
                        "await": 0
                    },
                    "votes": {
                        "kp": 691113,
                        "imdb": 2088677,
                        "filmCritics": 115,
                        "russianFilmCritics": 7,
                        "await": 1
                    },
                    "movieLength": 154,
                    "id": 342,
                    "type": "movie",
                    "name": "Криминальное чтиво",
                    "description": "Двое бандитов Винсент Вега и Джулс Винфилд ведут философские беседы в перерывах между разборками и решением проблем с должниками криминального босса Марселласа Уоллеса.\n\nВ первой истории Винсент проводит незабываемый вечер с женой Марселласа Мией. Во второй рассказывается о боксёре Бутче Кулидже, купленном Уоллесом, чтобы сдать бой. В третьей истории Винсент и Джулс по нелепой случайности попадают в неприятности.",
                    "year": 1994,
                    "poster": {
                        "url": "https://st.kp.yandex.net/images/film_big/342.jpg",
                        "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_342.jpg"
                    },
                    "genres": [
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
                        }
                    ],
                    "alternativeName": "Pulp Fiction",
                    "enName": null,
                    "names": [
                        {
                            "name": "Криминальное чтиво"
                        },
                        {
                            "name": "Pulp Fiction"
                        },
                        {
                            "name": "Makulatura",
                            "language": "GE",
                            "type": null
                        },
                        {
                            "name": "Pulp Fiction: Historky z podsvetia",
                            "language": "SK",
                            "type": null
                        },
                        {
                            "name": "Кримiнальне чтиво",
                            "language": "UA",
                            "type": null
                        },
                        {
                            "name": "Pulp Fiction - Chronological Cut",
                            "language": "US",
                            "type": null
                        },
                        {
                            "name": "Sund",
                            "language": "SI",
                            "type": null
                        },
                        {
                            "name": "parup fikusyon",
                            "language": "JP",
                            "type": "Romaji"
                        },
                        {
                            "name": "पल्प फिक्शन",
                            "language": "IN",
                            "type": null
                        },
                        {
                            "name": "Евтини приказни",
                            "language": "MK",
                            "type": null
                        },
                        {
                            "name": "μυθοπλασία πολτού",
                            "language": "GR",
                            "type": null
                        },
                        {
                            "name": "Sifrut Zolla",
                            "language": "IL",
                            "type": null
                        },
                        {
                            "name": "Pulp Fiction - Tarinoita väkivallasta",
                            "language": "FI",
                            "type": null
                        },
                        {
                            "name": "Lubene",
                            "language": "LV",
                            "type": null
                        },
                        {
                            "name": "Fiction pulpeuse",
                            "language": "CA",
                            "type": null
                        },
                        {
                            "name": "黑色追緝令",
                            "language": "TW",
                            "type": null
                        },
                        {
                            "name": "危險人物",
                            "language": "HK",
                            "type": null
                        },
                        {
                            "name": "Петпарачке приче",
                            "language": "RS",
                            "type": null
                        },
                        {
                            "name": "펄프 픽션",
                            "language": "KR",
                            "type": null
                        }
                    ],
                    "shortDescription": "Несколько связанных историй из жизни бандитов. Шедевр Квентина Тарантино, который изменил мировое кино",
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
                                "url": "https://okko.tv/movie/pulp-fiction?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                            },
                            {
                                "name": "PREMIER",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/0f86e907-9531-47e9-87bd-5101a08d4e30/orig"
                                },
                                "url": "https://premier.one/show/16647?utm_source=yandex&utm_medium=yandex_feed_search&utm_campaign=yandex_feed"
                            },
                            {
                                "name": "Wink",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/1672343/54096cbe-cc3b-41c9-8e44-990ebbca8d61/orig"
                                },
                                "url": "https://wink.ru/media_items/81237818?utm_source=yandex&utm_medium=koldunschick&utm_content=name"
                            },
                            {
                                "name": "viju",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/224348/8b10c84b-e1bb-4493-9bc4-6ee56554403a/orig"
                                },
                                "url": "https://viju.ru/filmy/kriminalnoe-chtivo?utm_campaign=yandex_content_integration&utm_medium=affiliate&utm_source=yandex"
                            },
                            {
                                "name": "Смотрёшка",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/236744/c88e652e-2eb1-472d-b636-a266364dbf58/orig"
                                },
                                "url": "https://smotreshka.tv/vod/vipplay/618e0567bb003f90038be6f8?utm_source=yandex_search&utm_campaign=yandex_feed&utm_term=viju&utm_content=Viju"
                            },
                            {
                                "name": "НТВ-ПЛЮС Онлайн ТВ",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/223007/c6b9b3d8-3258-4394-9cae-c86fdb56a0c6/orig"
                                },
                                "url": "https://ntvplus.tv/watch/17792-kriminalnoe-chtivo?utm_source=kinopoisk"
                            },
                            {
                                "name": "24ТВ",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/2439731/85e83b8d-1159-4781-bad5-ce0a809b3843/orig"
                                },
                                "url": "https://24h.tv/contents/1994-pulp-fiction-546398773102772887"
                            }
                        ]
                    }
                },
                {
                    "externalId": {
                        "kpHD": "444c5bfed612531184dd86785e799f58",
                        "imdb": "tt1211837",
                        "tmdb": 284052
                    },
                    "rating": {
                        "kp": 7.516,
                        "imdb": 7.5,
                        "filmCritics": 7.3,
                        "russianFilmCritics": 94.7368,
                        "await": 95.79
                    },
                    "votes": {
                        "kp": 682551,
                        "imdb": 757427,
                        "filmCritics": 387,
                        "russianFilmCritics": 19,
                        "await": 69982
                    },
                    "movieLength": 115,
                    "id": 409600,
                    "type": "movie",
                    "name": "Доктор Стрэндж",
                    "description": "Страшная автокатастрофа поставила крест на карьере успешного нейрохирурга Доктора Стрэнджа. Отчаявшись, он отправляется в путешествие в поисках исцеления и открывает в себе невероятные способности к трансформации пространства и времени. Теперь он — связующее звено между параллельными измерениями, а его миссия — защищать жителей Земли и противодействовать злу, какое бы обличие оно ни принимало.",
                    "year": 2016,
                    "poster": {
                        "url": "https://st.kp.yandex.net/images/film_big/409600.jpg",
                        "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_409600.jpg"
                    },
                    "genres": [
                        {
                            "name": "фантастика"
                        },
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
                    "alternativeName": "Doctor Strange",
                    "enName": null,
                    "names": [
                        {
                            "name": "Доктор Стрэндж"
                        },
                        {
                            "name": "Doctor Strange"
                        }
                    ],
                    "shortDescription": "После автокатастрофы хирург становится верховным защитником Земли. В роли супергероя — Бенедикт Камбербэтч",
                    "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/2419418/2a0000016e043b6ca119c3a776483a7d95f8/orig"
                    },
                    "watchability": {
                        "items": [
                            {
                                "name": "Okko",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                                },
                                "url": "https://okko.tv/movie/doctor-strange?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                            }
                        ]
                    }
                },
                {
                    "externalId": {
                        "kpHD": "4ba2562d337ca9548d398f4a80509f08",
                        "imdb": "tt1160419",
                        "tmdb": 438631
                    },
                    "rating": {
                        "kp": 7.672,
                        "imdb": 8,
                        "filmCritics": 7.6,
                        "russianFilmCritics": 72,
                        "await": 96.96
                    },
                    "votes": {
                        "kp": 682205,
                        "imdb": 659460,
                        "filmCritics": 497,
                        "russianFilmCritics": 25,
                        "await": 89736
                    },
                    "movieLength": 155,
                    "id": 409424,
                    "type": "movie",
                    "name": "Дюна",
                    "description": "Наследник знаменитого дома Атрейдесов Пол отправляется вместе с семьей на одну из самых опасных планет во Вселенной — Арракис. Здесь нет ничего, кроме песка, палящего солнца, гигантских чудовищ и основной причины межгалактических конфликтов — невероятно ценного ресурса, который называется меланж. В результате захвата власти Пол вынужден бежать и скрываться, и это становится началом его эпического путешествия. Враждебный мир Арракиса приготовил для него множество тяжелых испытаний, но только тот, кто готов взглянуть в глаза своему страху, достоин стать избранным.",
                    "year": 2021,
                    "poster": {
                        "url": "https://st.kp.yandex.net/images/film_big/409424.jpg",
                        "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_409424.jpg"
                    },
                    "genres": [
                        {
                            "name": "фантастика"
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
                            "name": "Канада"
                        },
                        {
                            "name": "Венгрия"
                        }
                    ],
                    "alternativeName": "Dune: Part One",
                    "enName": null,
                    "names": [
                        {
                            "name": "Дюна"
                        },
                        {
                            "name": "Dune: Part One"
                        }
                    ],
                    "shortDescription": "Атрейдесы прибывают на планету, где им никто не рад. Фантастический эпос Дени Вильнёва с шестью «Оскарами»",
                    "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/1534341/2a0000017ede1a0d9f8bae88b8f757431b94/orig"
                    },
                    "watchability": {
                        "items": null
                    }
                },
                {
                    "externalId": {
                        "kpHD": "4a297ba39cb704fa9a81855f76ab1d73",
                        "imdb": "tt2015381",
                        "tmdb": 118340
                    },
                    "rating": {
                        "kp": 7.841,
                        "imdb": 8,
                        "filmCritics": 7.8,
                        "russianFilmCritics": 83.3333,
                        "await": 95.04
                    },
                    "votes": {
                        "kp": 681152,
                        "imdb": 1196476,
                        "filmCritics": 338,
                        "russianFilmCritics": 18,
                        "await": 46217
                    },
                    "movieLength": 121,
                    "id": 689066,
                    "type": "movie",
                    "name": "Стражи Галактики",
                    "description": "Отважному путешественнику Питеру Квиллу попадает в руки таинственный артефакт, принадлежащий могущественному и безжалостному злодею Ронану, строящему коварные планы по захвату Вселенной. Питер оказывается в центре межгалактической охоты, где жертва — он сам.\n\nЕдинственный способ спасти свою жизнь — объединиться с четверкой нелюдимых изгоев: воинственным енотом по кличке Ракета, человекоподобным деревом Грутом, смертельно опасной Гаморой и одержимым жаждой мести Драксом, также известным как Разрушитель. Когда Квилл понимает, какой силой обладает украденный артефакт и какую опасность он представляет для вселенной, одиночка пойдет на все, чтобы сплотить случайных союзников для решающей битвы за судьбу галактики.",
                    "year": 2014,
                    "poster": {
                        "url": "https://st.kp.yandex.net/images/film_big/689066.jpg",
                        "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_689066.jpg"
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
                    "alternativeName": "Guardians of the Galaxy",
                    "enName": null,
                    "names": [
                        {
                            "name": "Стражи Галактики"
                        },
                        {
                            "name": "Guardians of the Galaxy"
                        }
                    ],
                    "shortDescription": "Питер Квилл и горстка неземных лузеров спасают артефакт. Крис Пратт в фильме Джеймса Ганна по комиксу Marvel",
                    "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/2385704/2a0000016e11e92154e4c2189debbfb0af18/orig"
                    },
                    "watchability": {
                        "items": [
                            {
                                "name": "Okko",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                                },
                                "url": "https://okko.tv/movie/guardians-of-the-galaxy?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                            }
                        ]
                    }
                },
                {
                    "externalId": {
                        "kpHD": "4824a95e60a7db7e86f14137516ba590",
                        "imdb": "tt0133093",
                        "tmdb": 603
                    },
                    "rating": {
                        "kp": 8.497,
                        "imdb": 8.7,
                        "filmCritics": 7.8,
                        "russianFilmCritics": 60,
                        "await": 0
                    },
                    "votes": {
                        "kp": 675984,
                        "imdb": 1939489,
                        "filmCritics": 161,
                        "russianFilmCritics": 5,
                        "await": 0
                    },
                    "movieLength": 136,
                    "id": 301,
                    "type": "movie",
                    "name": "Матрица",
                    "description": "Жизнь Томаса Андерсона разделена на две части: днём он — самый обычный офисный работник, получающий нагоняи от начальства, а ночью превращается в хакера по имени Нео, и нет места в сети, куда он бы не смог проникнуть. Но однажды всё меняется. Томас узнаёт ужасающую правду о реальности.",
                    "year": 1999,
                    "poster": {
                        "url": "https://st.kp.yandex.net/images/film_big/301.jpg",
                        "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_301.jpg"
                    },
                    "genres": [
                        {
                            "name": "фантастика"
                        },
                        {
                            "name": "боевик"
                        }
                    ],
                    "countries": [
                        {
                            "name": "США"
                        },
                        {
                            "name": "Австралия"
                        }
                    ],
                    "alternativeName": "The Matrix",
                    "enName": null,
                    "names": [
                        {
                            "name": "Матрица"
                        },
                        {
                            "name": "The Matrix"
                        },
                        {
                            "name": "เพาะพันธุ์มนุษย์เหนือโลก",
                            "language": "TH",
                            "type": null
                        },
                        {
                            "name": "黑客帝国1",
                            "language": "CN",
                            "type": null
                        },
                        {
                            "name": "Μάτριξ",
                            "language": "GR",
                            "type": null
                        },
                        {
                            "name": "黑客帝国1：骇客任务",
                            "language": "CN",
                            "type": null
                        },
                        {
                            "name": "매트릭스",
                            "language": "KR",
                            "type": null
                        },
                        {
                            "name": "Matrix 1",
                            "language": "DE",
                            "type": null
                        }
                    ],
                    "shortDescription": "Хакер Нео узнает, что его мир — виртуальный. Выдающийся экшен, доказавший, что зрелищное кино может быть умным",
                    "logo": {
                        "url": null
                    },
                    "watchability": {
                        "items": null
                    }
                },
                {
                    "externalId": {
                        "kpHD": "4279c3b744c498bbb5beedf09a8debcf",
                        "imdb": "tt1219289",
                        "tmdb": 51876
                    },
                    "rating": {
                        "kp": 7.989,
                        "imdb": 7.4,
                        "filmCritics": 6.4,
                        "russianFilmCritics": 75,
                        "await": 85.59
                    },
                    "votes": {
                        "kp": 674118,
                        "imdb": 584523,
                        "filmCritics": 202,
                        "russianFilmCritics": 8,
                        "await": 19262
                    },
                    "movieLength": 105,
                    "id": 462606,
                    "type": "movie",
                    "name": "Области тьмы",
                    "description": "Нью-йоркский писатель Эдди, желая преодолеть чёрную полосу в жизни, принимает засекреченный препарат под названием NZT. Таблетка выводит мозг парня на работу в нереальной мощности. Этот творческий наркотик меняет всю жизнь Эдди, за короткий срок он зарабатывает кучу денег, но скоро начинает страдать от зловещих побочных эффектов препарата. А когда пытается найти других NZT-гениев, чтобы понять, как можно справиться с этим пристрастием, он узнает страшную правду…",
                    "year": 2011,
                    "poster": {
                        "url": "https://st.kp.yandex.net/images/film_big/462606.jpg",
                        "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_462606.jpg"
                    },
                    "genres": [
                        {
                            "name": "триллер"
                        },
                        {
                            "name": "драма"
                        },
                        {
                            "name": "фантастика"
                        }
                    ],
                    "countries": [
                        {
                            "name": "США"
                        }
                    ],
                    "alternativeName": "Limitless",
                    "enName": null,
                    "names": [
                        {
                            "name": "Области тьмы"
                        },
                        {
                            "name": "Limitless"
                        }
                    ],
                    "shortDescription": "Чудодейственные таблетки выводят писателя из кризиса. Триллер о том, что сверхсила не обходится без побочек",
                    "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/2385704/2a0000016e4af6c2eb6d8d847857255fe628/orig"
                    },
                    "watchability": {
                        "items": [
                            {
                                "name": "Okko",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                                },
                                "url": "https://okko.tv/movie/limitless?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                            },
                            {
                                "name": "Иви",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/2419418/0dfd1724-848f-4725-9160-abc571f41c11/orig"
                                },
                                "url": "https://www.ivi.ru/watch/52652?utm_source=yandex&utm_medium=wizard"
                            },
                            {
                                "name": "KION",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/daeb142e-3ecc-4bb2-9bff-4827996643ab/orig"
                                },
                                "url": "https://kion.ru/video/movie/229169927?utm_source=yandex&utm_medium=organic&utm_campaign=wizard"
                            },
                            {
                                "name": "viju",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/224348/8b10c84b-e1bb-4493-9bc4-6ee56554403a/orig"
                                },
                                "url": "https://viju.ru/filmy/oblasti-tmy?utm_campaign=yandex_content_integration&utm_medium=affiliate&utm_source=yandex"
                            },
                            {
                                "name": "НТВ-ПЛЮС Онлайн ТВ",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/223007/c6b9b3d8-3258-4394-9cae-c86fdb56a0c6/orig"
                                },
                                "url": "https://ntvplus.tv/watch/17331-oblasti-tmy?utm_source=kinopoisk"
                            },
                            {
                                "name": "24ТВ",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/2439731/85e83b8d-1159-4781-bad5-ce0a809b3843/orig"
                                },
                                "url": "https://24h.tv/contents/2011-limitless-546314195637895952"
                            }
                        ]
                    }
                },
                {
                    "externalId": {
                        "kpHD": "4426da496a131d27a6546e16128f2080",
                        "imdb": "tt0468569",
                        "tmdb": 155
                    },
                    "rating": {
                        "kp": 8.52,
                        "imdb": 9,
                        "filmCritics": 8.6,
                        "russianFilmCritics": 45.4545,
                        "await": 0
                    },
                    "votes": {
                        "kp": 668398,
                        "imdb": 2692455,
                        "filmCritics": 345,
                        "russianFilmCritics": 11,
                        "await": 1
                    },
                    "movieLength": 152,
                    "id": 111543,
                    "type": "movie",
                    "name": "Темный рыцарь",
                    "description": "Бэтмен поднимает ставки в войне с криминалом. С помощью лейтенанта Джима Гордона и прокурора Харви Дента он намерен очистить улицы Готэма от преступности. Сотрудничество оказывается эффективным, но скоро они обнаружат себя посреди хаоса, развязанного восходящим криминальным гением, известным напуганным горожанам под именем Джокер.",
                    "year": 2008,
                    "poster": {
                        "url": "https://st.kp.yandex.net/images/film_big/111543.jpg",
                        "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_111543.jpg"
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
                    "alternativeName": "The Dark Knight",
                    "enName": null,
                    "names": [
                        {
                            "name": "Темный рыцарь"
                        },
                        {
                            "name": "The Dark Knight"
                        },
                        {
                            "name": "黑暗骑士",
                            "language": "CN",
                            "type": "short name"
                        },
                        {
                            "name": "Batman: The Dark Knight",
                            "language": "US",
                            "type": null
                        },
                        {
                            "name": "배트맨 다크 나이트",
                            "language": "KR",
                            "type": null
                        },
                        {
                            "name": "Batman, Le Chevalier Noir",
                            "language": "FR",
                            "type": null
                        },
                        {
                            "name": "蝙蝠侠2：黑暗骑士",
                            "language": "CN",
                            "type": "chronological naming convention"
                        },
                        {
                            "name": "蝙蝠俠：黑夜之神",
                            "language": "HK",
                            "type": "punctuation conversion"
                        },
                        {
                            "name": "Mroczny Rycerz",
                            "language": "PL",
                            "type": null
                        },
                        {
                            "name": "Batman II: The Dark Knight",
                            "language": "US",
                            "type": "Alternative Title"
                        },
                        {
                            "name": "Batman - The Dark Knight",
                            "language": "DE",
                            "type": null
                        }
                    ],
                    "shortDescription": "У Бэтмена появляется новый враг — философ-террорист Джокер. Кинокомикс, который вывел жанр на новый уровень",
                    "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/224348/2a00000176f159505eff31a41fe3e4ccf723/orig"
                    },
                    "watchability": {
                        "items": null
                    }
                },
                {
                    "id": 263531,
                    "type": "movie",
                    "externalId": {
                        "kpHD": "4e58356164af1f1e8c640621b4760b6c",
                        "imdb": "tt0848228",
                        "tmdb": 24428
                    },
                    "name": "Мстители",
                    "rating": {
                        "kp": 7.893,
                        "imdb": 8,
                        "filmCritics": 8.1,
                        "russianFilmCritics": 83.3333,
                        "await": 93.78
                    },
                    "description": "Локи, сводный брат Тора, возвращается, и в этот раз он не один. Земля оказывается на грани порабощения, и только лучшие из лучших могут спасти человечество. Глава международной организации Щ.И.Т. Ник Фьюри собирает выдающихся поборников справедливости и добра, чтобы отразить атаку. Под предводительством Капитана Америки Железный Человек, Тор, Невероятный Халк, Соколиный Глаз и Чёрная Вдова вступают в войну с захватчиком.",
                    "votes": {
                        "kp": 664777,
                        "imdb": 1406465,
                        "filmCritics": 367,
                        "russianFilmCritics": 18,
                        "await": 54435
                    },
                    "year": 2012,
                    "poster": {
                        "url": "https://st.kp.yandex.net/images/film_big/263531.jpg",
                        "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_263531.jpg"
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
                    "alternativeName": "The Avengers",
                    "enName": null,
                    "movieLength": 137,
                    "names": [
                        {
                            "name": "Мстители"
                        },
                        {
                            "name": "The Avengers"
                        },
                        {
                            "name": "Tasujad",
                            "language": "EE",
                            "type": null
                        },
                        {
                            "name": "Avengers 3D",
                            "language": "SE",
                            "type": "3D-title"
                        },
                        {
                            "name": "The Avengers 3D",
                            "language": "US",
                            "type": "3D title"
                        },
                        {
                            "name": "Avengers Assemble",
                            "language": "GB",
                            "type": null
                        },
                        {
                            "name": "De Wrekers",
                            "language": "NL",
                            "type": "literal"
                        },
                        {
                            "name": "The Avengers: An IMAX 3D Experience",
                            "language": "US",
                            "type": "World-wide IMAX version"
                        },
                        {
                            "name": "Marvel Avengers Assemble",
                            "language": "GB",
                            "type": "complete title"
                        },
                        {
                            "name": "ดิ อเวนเจอร์ส 1",
                            "language": "TH",
                            "type": null
                        },
                        {
                            "name": "Marvel Studios' The Avengers",
                            "language": "US",
                            "type": null
                        },
                        {
                            "name": "Vengadores",
                            "language": "MX",
                            "type": null
                        },
                        {
                            "name": "Os Vingadores",
                            "language": "BR",
                            "type": null
                        },
                        {
                            "name": "Marvel: Los Vengadores",
                            "language": "ES",
                            "type": null
                        },
                        {
                            "name": "어벤져스",
                            "language": "KR",
                            "type": null
                        },
                        {
                            "name": "마블 어벤져스",
                            "language": "KR",
                            "type": null
                        },
                        {
                            "name": "Мститeли",
                            "language": "RU",
                            "type": null
                        },
                        {
                            "name": "复仇者联盟1",
                            "language": "CN",
                            "type": null
                        },
                        {
                            "name": "復仇者聯盟",
                            "language": "TW",
                            "type": null
                        },
                        {
                            "name": "復仇者聯盟",
                            "language": "HK",
                            "type": null
                        },
                        {
                            "name": "The Avengers: Biệt Đội Siêu Anh Hùng",
                            "language": "VN",
                            "type": null
                        },
                        {
                            "name": "复仇者联盟",
                            "language": "CN",
                            "type": null
                        },
                        {
                            "name": "Marvel Film 06 - Avengers",
                            "language": "FR",
                            "type": null
                        },
                        {
                            "name": "Avengers",
                            "language": "US",
                            "type": null
                        }
                    ],
                    "shortDescription": "Команда супергероев дает отпор скандинавскому богу Локи. Начало фантастической саги в киновселенной Marvel",
                    "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/2439731/2a0000016e043b52e8a10c1fb3f0a134a986/orig"
                    },
                    "watchability": {
                        "items": [
                            {
                                "name": "Okko",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                                },
                                "url": "https://okko.tv/movie/the-avengers-31078?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                            },
                            {
                                "name": "24ТВ",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/2439731/85e83b8d-1159-4781-bad5-ce0a809b3843/orig"
                                },
                                "url": "https://24h.tv/contents/2012-the-avengers-546330235914682491"
                            }
                        ]
                    }
                },
                {
                    "id": 839954,
                    "type": "movie",
                    "externalId": {
                        "kpHD": "4e618e9ed093491eb17650097198c56e",
                        "imdb": "tt3569230",
                        "tmdb": 276907
                    },
                    "name": "Легенда",
                    "rating": {
                        "kp": 7.186,
                        "imdb": 6.9,
                        "filmCritics": 5.9,
                        "russianFilmCritics": 76.9231,
                        "await": 96.09
                    },
                    "description": "Близнецы Реджи и Ронни Крэй — культовые фигуры преступного мира Великобритании 1960-х. Братья возглавляли самую влиятельную бандитскую группировку Ист-Энда. В их послужном списке были вооруженные грабежи, рэкет, поджоги, покушения, убийства и собственный ночной клуб, куда доезжали даже голливудские знаменитости. Среди их жертв — криминальные авторитеты Джек МакВитти и Джордж Корнелл.",
                    "votes": {
                        "kp": 658003,
                        "imdb": 188733,
                        "filmCritics": 171,
                        "russianFilmCritics": 13,
                        "await": 16065
                    },
                    "year": 2015,
                    "poster": {
                        "url": "https://st.kp.yandex.net/images/film_big/839954.jpg",
                        "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_839954.jpg"
                    },
                    "genres": [
                        {
                            "name": "криминал"
                        },
                        {
                            "name": "триллер"
                        },
                        {
                            "name": "драма"
                        }
                    ],
                    "countries": [
                        {
                            "name": "Великобритания"
                        },
                        {
                            "name": "Франция"
                        },
                        {
                            "name": "США"
                        }
                    ],
                    "alternativeName": "Legend",
                    "enName": null,
                    "movieLength": 131,
                    "names": [
                        {
                            "name": "Легенда"
                        },
                        {
                            "name": "Legend"
                        }
                    ],
                    "shortDescription": "Гангстеры-близнецы завоевывают Лондон 1960-х. Драма о знаменитых преступниках с двойной ролью Тома Харди",
                    "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/1534341/2a0000016ef58845361034a2fa24360fdc21/orig"
                    },
                    "watchability": {
                        "items": [
                            {
                                "name": "Иви",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/2419418/0dfd1724-848f-4725-9160-abc571f41c11/orig"
                                },
                                "url": "https://www.ivi.ru/watch/128104?utm_source=yandex&utm_medium=wizard"
                            },
                            {
                                "name": "viju",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/224348/8b10c84b-e1bb-4493-9bc4-6ee56554403a/orig"
                                },
                                "url": "https://viju.ru/filmy/legenda?utm_campaign=yandex_content_integration&utm_medium=affiliate&utm_source=yandex"
                            },
                            {
                                "name": "24ТВ",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/2439731/85e83b8d-1159-4781-bad5-ce0a809b3843/orig"
                                },
                                "url": "https://24h.tv/contents/2015-legend-546310979743383582"
                            }
                        ]
                    }
                },
                {
                    "externalId": {
                        "kpHD": "4ba3dd505807f37b9644e902e4c5a9f6",
                        "imdb": "tt0264464",
                        "tmdb": 640
                    },
                    "rating": {
                        "kp": 8.526,
                        "imdb": 8.1,
                        "filmCritics": 7.9,
                        "russianFilmCritics": 80,
                        "await": 0
                    },
                    "votes": {
                        "kp": 651191,
                        "imdb": 1007573,
                        "filmCritics": 202,
                        "russianFilmCritics": 5,
                        "await": 0
                    },
                    "movieLength": 141,
                    "id": 324,
                    "type": "movie",
                    "name": "Поймай меня, если сможешь",
                    "description": "Фрэнк Эбегнейл успел поработать врачом, адвокатом и пилотом на пассажирской авиалинии – и все это до достижения полного совершеннолетия в 21 год. Мастер в обмане и жульничестве, он также обладал искусством подделки документов, что в конечном счете принесло ему миллионы долларов, которые он получил по фальшивым чекам.\n\nАгент ФБР Карл Хэнрэтти отдал бы все, чтобы схватить Фрэнка и привлечь к ответственности за свои деяния, но Фрэнк всегда опережает его на шаг, заставляя продолжать погоню.",
                    "year": 2002,
                    "poster": {
                        "url": "https://st.kp.yandex.net/images/film_big/324.jpg",
                        "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_324.jpg"
                    },
                    "genres": [
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
                        },
                        {
                            "name": "Канада"
                        }
                    ],
                    "alternativeName": "Catch Me If You Can",
                    "enName": null,
                    "names": [
                        {
                            "name": "Поймай меня, если сможешь"
                        },
                        {
                            "name": "Catch Me If You Can"
                        },
                        {
                            "name": "Catch Me If You Can - Mein Leben auf der Flucht",
                            "language": "DE",
                            "type": "TV title"
                        },
                        {
                            "name": "Впіймай мене, якщо зможеш",
                            "language": "UA",
                            "type": null
                        },
                        {
                            "name": "Спіймай мене, якщо зможеш",
                            "language": "UA",
                            "type": null
                        },
                        {
                            "name": "逍遥法外",
                            "language": "CN",
                            "type": null
                        },
                        {
                            "name": "我知道你是谁",
                            "language": "CN",
                            "type": null
                        },
                        {
                            "name": "捉智双雄",
                            "language": "HK",
                            "type": null
                        },
                        {
                            "name": "神鬼交锋",
                            "language": "TW",
                            "type": null
                        },
                        {
                            "name": "有种来抓我",
                            "language": "CN",
                            "type": null
                        },
                        {
                            "name": "Prenda-Me se For Capaz",
                            "language": "BR",
                            "type": null
                        },
                        {
                            "name": "Arrête-moi si tu peux",
                            "language": "FR",
                            "type": null
                        }
                    ],
                    "shortDescription": "Виртуозный аферист годами водит за нос ФБР. А вы помните, что здесь играет Эми Адамс?",
                    "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/1648503/2a00000170ed493266088fc0739ab3c58d12/orig"
                    },
                    "watchability": {
                        "items": [
                            {
                                "name": "Okko",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                                },
                                "url": "https://okko.tv/movie/catch-me-if-you-can?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                            },
                            {
                                "name": "Иви",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/2419418/0dfd1724-848f-4725-9160-abc571f41c11/orig"
                                },
                                "url": "https://www.ivi.ru/watch/99165?utm_source=yandex&utm_medium=wizard"
                            },
                            {
                                "name": "PREMIER",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/0f86e907-9531-47e9-87bd-5101a08d4e30/orig"
                                },
                                "url": "https://premier.one/show/16908?utm_source=yandex&utm_medium=yandex_feed_search&utm_campaign=yandex_feed"
                            },
                            {
                                "name": "Wink",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/1672343/54096cbe-cc3b-41c9-8e44-990ebbca8d61/orig"
                                },
                                "url": "https://wink.ru/media_items/2190124?utm_source=yandex&utm_medium=koldunschick&utm_content=name"
                            },
                            {
                                "name": "viju",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/224348/8b10c84b-e1bb-4493-9bc4-6ee56554403a/orig"
                                },
                                "url": "https://viju.ru/filmy/poymay-menya-esli-smozhesh?utm_campaign=yandex_content_integration&utm_medium=affiliate&utm_source=yandex"
                            },
                            {
                                "name": "НТВ-ПЛЮС Онлайн ТВ",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/223007/c6b9b3d8-3258-4394-9cae-c86fdb56a0c6/orig"
                                },
                                "url": "https://ntvplus.tv/watch/22422-pojmaj-menya-esli-smozhesh?utm_source=kinopoisk"
                            },
                            {
                                "name": "24ТВ",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/2439731/85e83b8d-1159-4781-bad5-ce0a809b3843/orig"
                                },
                                "url": "https://24h.tv/contents/2002-catch-me-if-you-can-546310056887452229"
                            }
                        ]
                    }
                },
                {
                    "externalId": {
                        "kpHD": "4d757e043db71463a2014d864138a5ff",
                        "imdb": "tt1853728",
                        "tmdb": 68718
                    },
                    "rating": {
                        "kp": 8.232,
                        "imdb": 8.4,
                        "filmCritics": 8,
                        "russianFilmCritics": 88.2353,
                        "await": 92.92
                    },
                    "votes": {
                        "kp": 648616,
                        "imdb": 1582452,
                        "filmCritics": 298,
                        "russianFilmCritics": 34,
                        "await": 37999
                    },
                    "movieLength": 165,
                    "id": 586397,
                    "type": "movie",
                    "name": "Джанго освобожденный",
                    "description": "Шульц — эксцентричный охотник за головами, который выслеживает и отстреливает самых опасных преступников. Он освобождает раба по имени Джанго, поскольку тот может помочь ему в поисках трёх бандитов. Джанго знает этих парней в лицо, ведь у него с ними свои счёты.",
                    "year": 2012,
                    "poster": {
                        "url": "https://st.kp.yandex.net/images/film_big/586397.jpg",
                        "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_586397.jpg"
                    },
                    "genres": [
                        {
                            "name": "вестерн"
                        },
                        {
                            "name": "боевик"
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
                            "name": "США"
                        }
                    ],
                    "alternativeName": "Django Unchained",
                    "enName": null,
                    "names": [
                        {
                            "name": "Джанго освобожденный"
                        },
                        {
                            "name": "Django Unchained"
                        }
                    ],
                    "shortDescription": "Метко шутя и стреляя, охотники за головами уничтожают негодяев. Квентин Тарантино пробует силы в вестерне",
                    "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/1672343/2a00000170cfa903c504effbb48cb6d55881/orig"
                    },
                    "watchability": {
                        "items": [
                            {
                                "name": "Иви",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/2419418/0dfd1724-848f-4725-9160-abc571f41c11/orig"
                                },
                                "url": "https://www.ivi.ru/watch/98382?utm_source=yandex&utm_medium=wizard"
                            },
                            {
                                "name": "Триколор Кино и ТВ",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/947e777c-2f73-4cbc-b09d-6bfa3966ba13/orig"
                                },
                                "url": "https://kino.tricolor.tv/watch/dzhango-osvobozhdyennyy-2012/?utm_source=yandex&utm_medium=feed"
                            },
                            {
                                "name": "Wink",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/1672343/54096cbe-cc3b-41c9-8e44-990ebbca8d61/orig"
                                },
                                "url": "https://wink.ru/media_items/54981043?utm_source=yandex&utm_medium=koldunschick&utm_content=name"
                            },
                            {
                                "name": "24ТВ",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/2439731/85e83b8d-1159-4781-bad5-ce0a809b3843/orig"
                                },
                                "url": "https://24h.tv/contents/2012-django-unchained-551466305518043322"
                            }
                        ]
                    }
                },
                {
                    "id": 44386,
                    "type": "movie",
                    "externalId": {
                        "kpHD": "4e674f4389d244b185ee6c8f13794bc2",
                        "imdb": "tt0068519",
                        "tmdb": 20871
                    },
                    "name": "Джентльмены удачи",
                    "rating": {
                        "kp": 8.542,
                        "imdb": 8.4,
                        "filmCritics": 0,
                        "russianFilmCritics": 0,
                        "await": 0
                    },
                    "description": "Заведующему детсадом Трошкину фатально не повезло: он оказался как две капли воды похож на бандита по кличке «Доцент», похитившего уникальный шлем Александра Македонского.\n\nМилиция внедряет добряка Трошкина в воровскую среду - и ему ничего не остается, кроме как старательно изображать своего двойника-злодея, путая всех окружающих. Со временем он настолько блестяще входит в роль, что сам начинает порой приходить в ужас. Между тем, жизни его угрожает смертельная опасность...",
                    "votes": {
                        "kp": 646926,
                        "imdb": 12083,
                        "filmCritics": 0,
                        "russianFilmCritics": 1,
                        "await": 0
                    },
                    "year": 1971,
                    "poster": {
                        "url": "https://st.kp.yandex.net/images/film_big/44386.jpg",
                        "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_44386.jpg"
                    },
                    "genres": [
                        {
                            "name": "комедия"
                        },
                        {
                            "name": "драма"
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
                            "name": "СССР"
                        }
                    ],
                    "alternativeName": null,
                    "enName": null,
                    "movieLength": 84,
                    "names": [
                        {
                            "name": "Джентльмены удачи"
                        },
                        {
                            "name": "Dzhentlmeny udachi",
                            "language": "US",
                            "type": null
                        },
                        {
                            "name": "Hełm Aleksandra Macedońskiego",
                            "language": "PL",
                            "type": null
                        }
                    ],
                    "shortDescription": "Воспитатель детсада внедряется в банду матерых рецидивистов. Евгений Леонов в разошедшейся на цитаты комедии",
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
                                "url": "https://okko.tv/movie/dzhentlmeny-udachi-74424?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                            },
                            {
                                "name": "Иви",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/2419418/0dfd1724-848f-4725-9160-abc571f41c11/orig"
                                },
                                "url": "https://www.ivi.ru/watch/53016?utm_source=yandex&utm_medium=wizard"
                            },
                            {
                                "name": "KION",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/daeb142e-3ecc-4bb2-9bff-4827996643ab/orig"
                                },
                                "url": "https://kion.ru/video/movie/599188992?utm_source=yandex&utm_medium=organic&utm_campaign=wizard"
                            },
                            {
                                "name": "PREMIER",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/0f86e907-9531-47e9-87bd-5101a08d4e30/orig"
                                },
                                "url": "https://premier.one/show/12366?utm_source=yandex&utm_medium=yandex_feed_search&utm_campaign=yandex_feed"
                            }
                        ]
                    }
                },
                {
                    "externalId": {
                        "kpHD": "47a38f03dce381358fa79811f98e8e9e",
                        "imdb": "tt1431045",
                        "tmdb": 293660
                    },
                    "rating": {
                        "kp": 7.559,
                        "imdb": 8,
                        "filmCritics": 7.1,
                        "russianFilmCritics": 100,
                        "await": 95.11
                    },
                    "votes": {
                        "kp": 622671,
                        "imdb": 1056008,
                        "filmCritics": 349,
                        "russianFilmCritics": 16,
                        "await": 84884
                    },
                    "movieLength": 108,
                    "id": 462360,
                    "type": "movie",
                    "name": "Дэдпул",
                    "description": "Уэйд Уилсон — наёмник. Будучи побочным продуктом программы вооружённых сил под названием «Оружие X», Уилсон приобрёл невероятную силу, проворство и способность к исцелению. Но страшной ценой: его клеточная структура постоянно меняется, а здравомыслие сомнительно. Всё, чего хочет Уилсон, — держаться на плаву в социальной выгребной яме. Но течение в ней слишком быстрое.",
                    "year": 2016,
                    "poster": {
                        "url": "https://st.kp.yandex.net/images/film_big/462360.jpg",
                        "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_462360.jpg"
                    },
                    "genres": [
                        {
                            "name": "боевик"
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
                    "alternativeName": "Deadpool",
                    "enName": null,
                    "names": [
                        {
                            "name": "Дэдпул"
                        },
                        {
                            "name": "Deadpool"
                        }
                    ],
                    "shortDescription": "Бывший наемник становится сверхчеловеком поневоле. Безбашенный блокбастер о самом дерзком супергерое Marvel",
                    "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/2439731/2a000001725520dbcd79e1c66b058176b54b/orig"
                    },
                    "watchability": {
                        "items": [
                            {
                                "name": "Okko",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                                },
                                "url": "https://okko.tv/movie/deadpool?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                            }
                        ]
                    }
                },
                {
                    "id": 46225,
                    "type": "movie",
                    "externalId": {
                        "imdb": null,
                        "kpHD": "4fd4720e46d437b28d753e86808c8fb6"
                    },
                    "name": "Бриллиантовая рука",
                    "rating": {
                        "kp": 8.513,
                        "imdb": 8.3,
                        "filmCritics": 0,
                        "russianFilmCritics": 0,
                        "await": 0
                    },
                    "description": "В южном городке орудует шайка валютчиков, возглавляемая Шефом и его помощником Графом (в быту — Геной Козодоевым). Скромный советский служащий и примерный семьянин Семен Семенович Горбунков отправляется в зарубежный круиз на теплоходе, где также плывет Граф, который должен забрать бриллианты в одном из восточных городов и провезти их в загипсованной руке. Но из-за недоразумения вместо жулика на условленном месте падает ничего не подозревающий Семен Семенович, и драгоценный гипс накладывают ему.",
                    "votes": {
                        "kp": 621320,
                        "imdb": 15284,
                        "filmCritics": 0,
                        "russianFilmCritics": 1,
                        "await": 0
                    },
                    "year": 1968,
                    "poster": {
                        "url": "https://st.kp.yandex.net/images/film_big/46225.jpg",
                        "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_46225.jpg"
                    },
                    "genres": [
                        {
                            "name": "комедия"
                        },
                        {
                            "name": "криминал"
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
                            "name": "Бриллиантовая рука"
                        }
                    ],
                    "movieLength": 94,
                    "shortDescription": "Контрабандисты гоняются за примерным семьянином. Народная комедия с элементами абсурда от Леонида Гайдая ",
                    "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/2385704/2a000001720d06c1ac4d4ec0e3c0c53f10ea/orig"
                    },
                    "watchability": {
                        "items": [
                            {
                                "name": "Okko",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                                },
                                "url": "https://okko.tv/movie/brilliantovaja-ruka?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                            },
                            {
                                "name": "Иви",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/2419418/0dfd1724-848f-4725-9160-abc571f41c11/orig"
                                },
                                "url": "https://www.ivi.ru/watch/52922?utm_source=yandex&utm_medium=wizard"
                            },
                            {
                                "name": "KION",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/daeb142e-3ecc-4bb2-9bff-4827996643ab/orig"
                                },
                                "url": "https://kion.ru/video/movie/599188988?utm_source=yandex&utm_medium=organic&utm_campaign=wizard"
                            },
                            {
                                "name": "PREMIER",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/0f86e907-9531-47e9-87bd-5101a08d4e30/orig"
                                },
                                "url": "https://premier.one/show/9543?utm_source=yandex&utm_medium=yandex_feed_search&utm_campaign=yandex_feed"
                            },
                            {
                                "name": "Триколор Кино и ТВ",
                                "logo": {
                                    "url": "https://avatars.mds.yandex.net/get-ott/239697/947e777c-2f73-4cbc-b09d-6bfa3966ba13/orig"
                                },
                                "url": "https://kino.tricolor.tv/watch/brilliantovaya-ruka-1968/?utm_source=yandex&utm_medium=feed"
                            }
                        ]
                    }
                }
            ],
        }
    }

    componentDidMount = async () => {
        // await this.importMoviesOnly()
    }

    importMoviesOnly = async () => {

        let headers = {
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': apiKinopoisk,
            }
        }

        const response = await axios.get('https://api.kinopoisk.dev/v1/movie?page=2&limit=20&type=movie', headers);
        console.log('Function response:', response.data.docs);
        this.setState({ arrOfMoviesOnly: response.data.docs })
        console.log(this.state.arrOfMoviesOnly);
    }




    render() {
        // console.log(this.state.arrOfMoviesOnly);
        return (
            <div className="moviesOnly">
                <h2>Фильмы</h2>
                <div className="movies-only-container">

                    <div className="slider-inner">
                        <div className="slides">
                            {this.state.arrOfMoviesOnly.map((obj, index) => {
                                if (index <= 9) {
                                    return (
                                        <img key={obj.id} src={`${obj.poster.url}`} />
                                    )
                                }
                            })}
                        </div>
                        <div className="slides">
                            {this.state.arrOfMoviesOnly.map((obj, index) => {
                                if (index > 9) {
                                    return (
                                        <img key={obj.id} src={`${obj.poster.url}`} />
                                    )
                                }
                            })}
                        </div>
                    </div>




                </div>
            </div>
        )


    }


}

export default MoviesOnly