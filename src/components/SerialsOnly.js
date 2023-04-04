import React, { Component } from "react";
import axios from "axios";
import apiKinopoisk from "./API";

class SerialsOnly extends React.Component {
    constructor() {
        super()
        this.state = {
            arrOfSerialsOnly: [
                {
                  "id": 464963,
                  "alternativeName": "Game of Thrones",
                  "countries": [
                    {
                      "name": "США"
                    },
                    {
                      "name": "Великобритания"
                    }
                  ],
                  "description": "К концу подходит время благоденствия, и лето, длившееся почти десятилетие, угасает. Вокруг средоточия власти Семи королевств, Железного трона, зреет заговор, и в это непростое время король решает искать поддержки у друга юности Эддарда Старка. В мире, где все — от короля до наемника — рвутся к власти, плетут интриги и готовы вонзить нож в спину, есть место и благородству, состраданию и любви. Между тем никто не замечает пробуждение тьмы из легенд далеко на Севере — и лишь Стена защищает живых к югу от нее.",
                  "enName": "Game of Thrones",
                  "externalId": {
                    "kpHD": "47bab88d43ac0a82ad62bfbbaf302e07",
                    "imdb": "tt0944947",
                    "tmdb": 1399
                  },
                  "genres": [
                    {
                      "name": "фэнтези"
                    },
                    {
                      "name": "драма"
                    },
                    {
                      "name": "боевик"
                    },
                    {
                      "name": "мелодрама"
                    },
                    {
                      "name": "приключения"
                    }
                  ],
                  "movieLength": 55,
                  "name": "Игра престолов",
                  "names": [
                    {
                      "name": "Игра престолов"
                    },
                    {
                      "name": "Game of Thrones"
                    },
                    {
                      "name": "Froni i shpatave",
                      "language": "AL",
                      "type": null
                    },
                    {
                      "name": "El Juego de Tronos",
                      "language": "AR",
                      "type": null
                    },
                    {
                      "name": "A Guerra dos Tronos",
                      "language": "BR",
                      "type": null
                    },
                    {
                      "name": "权利的游戏",
                      "language": "CN",
                      "type": null
                    },
                    {
                      "name": "權力的遊戲",
                      "language": "CN",
                      "type": null
                    },
                    {
                      "name": "Game of Thrones: Das Lied von Eis und Feuer",
                      "language": "DE",
                      "type": null
                    },
                    {
                      "name": "Paihnidi tou stemmatos",
                      "language": "DE",
                      "type": null
                    },
                    {
                      "name": "Le Throne de fer",
                      "language": "FR",
                      "type": null
                    },
                    {
                      "name": "Game of Thrones - Le trône de fer",
                      "language": "FR",
                      "type": null
                    },
                    {
                      "name": "სატახტოთა თამაში",
                      "language": "GE",
                      "type": null
                    },
                    {
                      "name": "Παιχνίδι Του Στέμματος",
                      "language": "GR",
                      "type": null
                    },
                    {
                      "name": "權力遊戲",
                      "language": "HK",
                      "type": null
                    },
                    {
                      "name": "Baziye tajo takht",
                      "language": "IR",
                      "type": "romanization"
                    },
                    {
                      "name": "بازی تاج و تخت",
                      "language": "IR",
                      "type": null
                    },
                    {
                      "name": "گیم آف ترونز",
                      "language": "IR",
                      "type": null
                    },
                    {
                      "name": "왕좌의 게임",
                      "language": "KR",
                      "type": null
                    },
                    {
                      "name": "Sostų žaidimas",
                      "language": "LT",
                      "type": null
                    },
                    {
                      "name": "Troņu spēle",
                      "language": "LV",
                      "type": null
                    },
                    {
                      "name": "Игра на тронови",
                      "language": "MK",
                      "type": null
                    },
                    {
                      "name": "Gra o tron",
                      "language": "PL",
                      "type": null
                    },
                    {
                      "name": "Igra prestolov",
                      "language": "SI",
                      "type": null
                    },
                    {
                      "name": "มหาศึกชิงบัลลังก์",
                      "language": "TH",
                      "type": null
                    },
                    {
                      "name": "Taht Oyunları",
                      "language": "TR",
                      "type": null
                    },
                    {
                      "name": "A Song of Ice and Fire",
                      "language": "US",
                      "type": "working title"
                    },
                    {
                      "name": "GoT",
                      "language": "US",
                      "type": "common abbreviation"
                    },
                    {
                      "name": "Taxtlar o'yini",
                      "language": "UZ",
                      "type": null
                    },
                    {
                      "name": "Taxt o'yinlari",
                      "language": "UZ",
                      "type": null
                    }
                  ],
                  "poster": {
                    "url": "https://st.kp.yandex.net/images/film_big/464963.jpg",
                    "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_464963.jpg"
                  },
                  "rating": {
                    "kp": 8.98,
                    "imdb": 9.2,
                    "filmCritics": 0,
                    "russianFilmCritics": 90,
                    "await": 90.77
                  },
                  "shortDescription": "Рыцари, мертвецы и драконы — в эпической битве за судьбы мира. Сериал, который навсегда изменил телевидение",
                  "type": "tv-series",
                  "votes": {
                    "kp": 865391,
                    "imdb": 2142235,
                    "filmCritics": 0,
                    "russianFilmCritics": 20,
                    "await": 1970
                  },
                  "year": 2011,
                  "logo": {
                    "url": "https://avatars.mds.yandex.net/get-ott/239697/2a00000170b077ba4dca5c9303185c5e8003/orig"
                  },
                  "watchability": {
                    "items": [
                      {
                        "name": "Okko",
                        "logo": {
                          "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                        },
                        "url": "https://okko.tv/serial/game-of-thrones?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                      },
                      {
                        "name": "Иви",
                        "logo": {
                          "url": "https://avatars.mds.yandex.net/get-ott/2419418/0dfd1724-848f-4725-9160-abc571f41c11/orig"
                        },
                        "url": "https://www.ivi.ru/watch/igra-prestolov-amedia?utm_source=yandex&utm_medium=wizard"
                      },
                      {
                        "name": "KION",
                        "logo": {
                          "url": "https://avatars.mds.yandex.net/get-ott/239697/daeb142e-3ecc-4bb2-9bff-4827996643ab/orig"
                        },
                        "url": "https://kion.ru/video/serial/127267213/season/127268028/episode/643084837?utm_source=yandex&utm_medium=organic&utm_campaign=wizard"
                      },
                      {
                        "name": "Триколор Кино и ТВ",
                        "logo": {
                          "url": "https://avatars.mds.yandex.net/get-ott/239697/947e777c-2f73-4cbc-b09d-6bfa3966ba13/orig"
                        },
                        "url": "https://kino.tricolor.tv/series/watch/igra-prestolov-2011/?utm_source=yandex&utm_medium=feed"
                      },
                      {
                        "name": "AMEDIATEKA",
                        "logo": {
                          "url": "https://avatars.mds.yandex.net/get-ott/1672343/eae327fe-4d7b-4ea2-899a-6aaa54300784/orig"
                        },
                        "url": "https://amediateka.ru/watch/series_11223_finaligra-prestolov?utm_medium=referral&utm_source=yandex_search&utm_campaign=yandex_feed"
                      },
                      {
                        "name": "Кино1ТВ",
                        "logo": {
                          "url": "https://avatars.mds.yandex.net/get-ott/1672343/4e5f7a8e-d5ac-4904-9fc0-208753ccf520/orig"
                        },
                        "url": "https://kino.1tv.ru/serials/igra-prestolov?utm_source=yandex&utm_medium=wizard"
                      },
                      {
                        "name": "НТВ-ПЛЮС Онлайн ТВ",
                        "logo": {
                          "url": "https://avatars.mds.yandex.net/get-ott/223007/c6b9b3d8-3258-4394-9cae-c86fdb56a0c6/orig"
                        },
                        "url": "https://ntvplus.tv/watch/198-igra-prestolov?utm_source=kinopoisk"
                      },
                      {
                        "name": "24ТВ",
                        "logo": {
                          "url": "https://avatars.mds.yandex.net/get-ott/2439731/85e83b8d-1159-4781-bad5-ce0a809b3843/orig"
                        },
                        "url": "https://24h.tv/contents/2011-game-of-thrones-546309178684080329"
                      }
                    ]
                  },
                  "releaseYears": [
                    {
                      "start": 2011,
                      "end": 2019
                    }
                  ]
                },
                {
                  "id": 1100777,
                  "type": "tv-series",
                  "externalId": {
                    "kpHD": "4f3c027cbce13606b74124a9d5b140c7",
                    "imdb": "tt9011124",
                    "tmdb": 99671
                  },
                  "name": "Триггер",
                  "rating": {
                    "kp": 8.476,
                    "imdb": 7.4,
                    "filmCritics": 0,
                    "russianFilmCritics": 71.4286,
                    "await": 93.68
                  },
                  "description": "Психолог Артём Стрелецкий — сторонник шоковой терапии в лечении больных. Он считает, что единственный способ для человека решить свои проблемы — это понять себя и перестать себе врать. Если большинство психологов нянчатся с клиентами, по полгода выслушивают жалобы на жизнь, сочувствуют и получают при этом немалые деньги за цикл сеансов, то Артём постоянно провоцирует клиентов: оскорбляет их, смеется над ними, намеренно выталкивает из зоны комфорта. Практика Артема процветает, пока один из его пациентов не кончает жизнь самоубийством.",
                  "votes": {
                    "kp": 751620,
                    "imdb": 728,
                    "filmCritics": 0,
                    "russianFilmCritics": 7,
                    "await": 307
                  },
                  "year": 2018,
                  "poster": {
                    "url": "https://st.kp.yandex.net/images/film_big/1100777.jpg",
                    "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_1100777.jpg"
                  },
                  "genres": [
                    {
                      "name": "драма"
                    }
                  ],
                  "countries": [
                    {
                      "name": "Россия"
                    }
                  ],
                  "alternativeName": null,
                  "enName": null,
                  "movieLength": 52,
                  "names": [
                    {
                      "name": "Триггер"
                    }
                  ],
                  "shortDescription": "Страшная трагедия вынуждает психолога-провокатора вернуться к практике. Напряженная драма с Максимом Матвеевым",
                  "logo": {
                    "url": "https://avatars.mds.yandex.net/get-ott/236744/2a00000180bf38e7506037453dd1e1c11cc2/orig"
                  },
                  "watchability": {
                    "items": [
                      {
                        "name": "Кино1ТВ",
                        "logo": {
                          "url": "https://avatars.mds.yandex.net/get-ott/1672343/4e5f7a8e-d5ac-4904-9fc0-208753ccf520/orig"
                        },
                        "url": "https://kino.1tv.ru/serials/trigger-2?utm_source=yandex&utm_medium=wizard"
                      }
                    ]
                  },
                  "releaseYears": [
                    {
                      "start": 2018,
                      "end": null
                    }
                  ]
                },
                {
                  "id": 820638,
                  "type": "tv-series",
                  "externalId": {
                    "kpHD": "4bb2756fc4f689b4a10f3eb9e7b21145",
                    "imdb": "tt4426042",
                    "tmdb": 63435
                  },
                  "name": "Мажор",
                  "rating": {
                    "kp": 8.227,
                    "imdb": 7.6,
                    "filmCritics": 0,
                    "russianFilmCritics": 0,
                    "await": 81.25
                  },
                  "description": "Таких, как наш главный герой Игорь Соколовский, то есть детей высокопоставленных, богатых родителей, называют мажорами. Наш герой имеет юридическое образование, но ни одного дня не проработал. Безответственный прожигатель жизни. В один из загулов ночью он вступился за приятеля, подрался с полицейскими, выбил табельное оружие у офицера... В итоге отец лишает героя всего и отправляет работать в отделение полиции - то самое, в котором служат ночные полицейские. Его, мажора, там не ждут. Его презирают. Но именно там он начнет становиться мужчиной, встретит свою любовь и найдет убийцу мамы.",
                  "votes": {
                    "kp": 724020,
                    "imdb": 1724,
                    "filmCritics": 0,
                    "russianFilmCritics": 2,
                    "await": 406
                  },
                  "year": 2014,
                  "poster": {
                    "url": "https://st.kp.yandex.net/images/film_big/820638.jpg",
                    "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_820638.jpg"
                  },
                  "genres": [
                    {
                      "name": "драма"
                    },
                    {
                      "name": "криминал"
                    }
                  ],
                  "countries": [
                    {
                      "name": "Россия"
                    }
                  ],
                  "alternativeName": null,
                  "enName": null,
                  "movieLength": 52,
                  "names": [
                    {
                      "name": "Мажор"
                    }
                  ],
                  "shortDescription": "Расследуя серию убийств, Мажор сам оказывается под подозрением. Продолжение экшен-сериала с Павлом Прилучным",
                  "logo": {
                    "url": "https://avatars.mds.yandex.net/get-ott/374297/2a00000176fc5571eb16df590c77886ccab0/orig"
                  },
                  "watchability": {
                    "items": [
                      {
                        "name": "Кино1ТВ",
                        "logo": {
                          "url": "https://avatars.mds.yandex.net/get-ott/1672343/4e5f7a8e-d5ac-4904-9fc0-208753ccf520/orig"
                        },
                        "url": "https://kino.1tv.ru/serials/mazhor-chetvertyy-sezon?utm_source=yandex&utm_medium=wizard"
                      }
                    ]
                  },
                  "releaseYears": [
                    {
                      "start": 2014,
                      "end": null
                    }
                  ]
                },
                {
                  "id": 5079093,
                  "externalId": {
                    "kpHD": "16658f1fdc3f4506bf4687639275c5c3"
                  },
                  "name": "Монастырь",
                  "alternativeName": null,
                  "names": [
                    {
                      "name": "Монастырь"
                    }
                  ],
                  "type": "tv-series",
                  "description": "Мария — обаятельная тусовщица, которая живёт за чужой счёт. Однажды в Эмиратах она едет в ночной клуб вместе с женой миллиардера, вечеринка выходит из-под контроля, и теперь Марии грозит тюрьма, её преследуют опасные люди, а счета оказываются заблокированы. Приходится бежать в Россию, но и дома она не в безопасности — и девушка укрывается в стенах монастыря.",
                  "shortDescription": "Московская оторва попадает в монастырь. Завораживающая трансформация Насти Ивлеевой в руках Филиппа Янковского",
                  "rating": {
                    "kp": 7.428,
                    "imdb": 0,
                    "filmCritics": 0,
                    "russianFilmCritics": 78.5714,
                    "await": 88.74
                  },
                  "votes": {
                    "kp": 716410,
                    "imdb": 0,
                    "filmCritics": 0,
                    "russianFilmCritics": 14,
                    "await": 21670
                  },
                  "movieLength": 50,
                  "poster": {
                    "url": "https://st.kp.yandex.net/images/film_big/5079093.jpg",
                    "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_5079093.jpg"
                  },
                  "genres": [
                    {
                      "name": "драма"
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
                  "releaseYears": [
                    {
                      "start": 2022,
                      "end": 2022
                    }
                  ],
                  "year": 2022
                },
                {
                  "id": 1355059,
                  "type": "tv-series",
                  "externalId": {
                    "kpHD": "4b63db58ab27e92b90a457e533b00007",
                    "imdb": "tt12112298",
                    "tmdb": 105276
                  },
                  "name": "Беспринципные",
                  "rating": {
                    "kp": 7.662,
                    "imdb": 6.4,
                    "filmCritics": 0,
                    "russianFilmCritics": 50,
                    "await": 94.9
                  },
                  "description": "Добро пожаловать на Патриаршие. Смешные и волнующие подробности личной жизни богатых москвичей, которые, как и все, попадают в неловкие ситуации. Правда, ситуации у них не самые обычные... Жена чувствует себя виноватой, познакомившись с любовницей мужа. Муж прикрывается выдуманной дочерью друга. А друг толкает помощника на измену, потому что так хочет жена. И это только начало. Одним словом, неприличные истории о приличных, казалось бы, людях. ",
                  "votes": {
                    "kp": 603746,
                    "imdb": 434,
                    "filmCritics": 0,
                    "russianFilmCritics": 6,
                    "await": 1504
                  },
                  "year": 2020,
                  "poster": {
                    "url": "https://st.kp.yandex.net/images/film_big/1355059.jpg",
                    "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_1355059.jpg"
                  },
                  "genres": [
                    {
                      "name": "комедия"
                    }
                  ],
                  "countries": [
                    {
                      "name": "Россия"
                    }
                  ],
                  "alternativeName": null,
                  "enName": null,
                  "movieLength": 47,
                  "names": [
                    {
                      "name": "Беспринципные"
                    }
                  ],
                  "shortDescription": "Смешные истории из жизни очень богатых москвичей. Продолжение комедии по мотивам рассказов Александра Цыпкина\n",
                  "logo": {
                    "url": "https://avatars.mds.yandex.net/get-ott/223007/2a0000017e6cfdc1ef7c20c1ab738be817f3/orig"
                  },
                  "watchability": {
                    "items": [
                      {
                        "name": "Иви",
                        "logo": {
                          "url": "https://avatars.mds.yandex.net/get-ott/2419418/0dfd1724-848f-4725-9160-abc571f41c11/orig"
                        },
                        "url": "https://www.ivi.ru/watch/besprintsipnyie-2020?utm_source=yandex&utm_medium=wizard"
                      },
                      {
                        "name": "START",
                        "logo": {
                          "url": "https://avatars.mds.yandex.net/get-ott/239697/1a632675-0d99-4268-bd5e-d5f3dd800174/orig"
                        },
                        "url": "https://start.ru/watch/besprincipnye?utm_source=kinopoisk&utm_medium=feed_watch&utm_campaign=besprincipnye"
                      },
                      {
                        "name": "Wink",
                        "logo": {
                          "url": "https://avatars.mds.yandex.net/get-ott/1672343/54096cbe-cc3b-41c9-8e44-990ebbca8d61/orig"
                        },
                        "url": "https://wink.ru/media_items/122118692?utm_source=yandex&utm_medium=koldunschick&utm_content=name"
                      }
                    ]
                  },
                  "releaseYears": [
                    {
                      "start": 2020,
                      "end": null
                    }
                  ]
                },
                {
                  "id": 502838,
                  "type": "tv-series",
                  "externalId": {
                    "kpHD": "4b94994d2cfce2eda1181debca01d1ba",
                    "imdb": "tt1475582",
                    "tmdb": 19885
                  },
                  "name": "Шерлок",
                  "rating": {
                    "kp": 8.861,
                    "imdb": 9.1,
                    "filmCritics": 0,
                    "russianFilmCritics": 75,
                    "await": 0
                  },
                  "description": "События разворачиваются в наши дни. Он прошел Афганистан, остался инвалидом. По возвращении в родные края встречается с загадочным, но своеобразным гениальным человеком. Тот в поиске соседа по квартире. Лондон, 2010 год. Происходят необъяснимые убийства. Скотланд-Ярд без понятия, за что хвататься. Существует лишь один человек, который в силах разрешить проблемы и найти ответы на сложные вопросы.",
                  "votes": {
                    "kp": 575379,
                    "imdb": 942682,
                    "filmCritics": 0,
                    "russianFilmCritics": 12,
                    "await": 12
                  },
                  "year": 2010,
                  "poster": {
                    "url": "https://st.kp.yandex.net/images/film_big/502838.jpg",
                    "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_502838.jpg"
                  },
                  "genres": [
                    {
                      "name": "детектив"
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
                      "name": "Великобритания"
                    },
                    {
                      "name": "США"
                    }
                  ],
                  "alternativeName": "Sherlock",
                  "enName": "Sherlock",
                  "movieLength": 90,
                  "names": [
                    {
                      "name": "Шерлок"
                    },
                    {
                      "name": "Sherlock"
                    },
                    {
                      "name": "神探夏洛克",
                      "language": "CN",
                      "type": null
                    },
                    {
                      "name": "新福尔摩斯",
                      "language": "CN",
                      "type": null
                    },
                    {
                      "name": "Σέρλοκ",
                      "language": "GR",
                      "type": null
                    },
                    {
                      "name": "新福尔摩斯",
                      "language": "HK",
                      "type": null
                    },
                    {
                      "name": "شرلوک هلمز",
                      "language": "IR",
                      "type": null
                    },
                    {
                      "name": "Šerlokas",
                      "language": "LT",
                      "type": null
                    },
                    {
                      "name": "新世紀福爾摩斯",
                      "language": "TW",
                      "type": null
                    },
                    {
                      "name": "Sherlok Xolms",
                      "language": "UZ",
                      "type": null
                    }
                  ],
                  "shortDescription": "Гений-социопат знакомит соседа с миром частного сыска. Бенедикт Камбербэтч в одном из лучших шоу XXI века",
                  "logo": {
                    "url": "https://avatars.mds.yandex.net/get-ott/1534341/2a00000176f14b4a1e2a3f40dd652de59d6e/orig"
                  },
                  "watchability": {
                    "items": null
                  },
                  "releaseYears": [
                    {
                      "start": 2010,
                      "end": 2017
                    }
                  ]
                },
                {
                  "id": 404900,
                  "type": "tv-series",
                  "externalId": {
                    "kpHD": "49c681d107948f2ebdf7dd6b46f6ebca",
                    "imdb": "tt0903747",
                    "tmdb": 1396
                  },
                  "name": "Во все тяжкие",
                  "rating": {
                    "kp": 8.882,
                    "imdb": 9.5,
                    "filmCritics": 0,
                    "russianFilmCritics": 100,
                    "await": 0
                  },
                  "description": "Школьный учитель химии Уолтер Уайт узнаёт, что болен раком лёгких. Учитывая сложное финансовое состояние дел семьи, а также перспективы, Уолтер решает заняться изготовлением метамфетамина. Для этого он привлекает своего бывшего ученика Джесси Пинкмана, когда-то исключённого из школы при активном содействии Уайта. Пинкман сам занимался варкой мета, но накануне, в ходе рейда УБН, он лишился подельника и лаборатории.",
                  "votes": {
                    "kp": 530235,
                    "imdb": 1947652,
                    "filmCritics": 0,
                    "russianFilmCritics": 9,
                    "await": 0
                  },
                  "year": 2008,
                  "poster": {
                    "url": "https://st.kp.yandex.net/images/film_big/404900.jpg",
                    "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_404900.jpg"
                  },
                  "genres": [
                    {
                      "name": "криминал"
                    },
                    {
                      "name": "драма"
                    },
                    {
                      "name": "триллер"
                    }
                  ],
                  "countries": [
                    {
                      "name": "США"
                    }
                  ],
                  "alternativeName": "Breaking Bad",
                  "enName": "Breaking Bad",
                  "movieLength": 47,
                  "names": [
                    {
                      "name": "Во все тяжкие"
                    },
                    {
                      "name": "Breaking Bad"
                    },
                    {
                      "name": "В обувките на Сатаната",
                      "language": "BG",
                      "type": null
                    },
                    {
                      "name": "Breaking Bad: A Química do Mal",
                      "language": "BR",
                      "type": null
                    },
                    {
                      "name": "绝命毒师",
                      "language": "CN",
                      "type": null
                    },
                    {
                      "name": "绝命毒师 2008",
                      "language": "CN",
                      "type": null
                    },
                    {
                      "name": "Perníkový táta",
                      "language": "CZ",
                      "type": null
                    },
                    {
                      "name": "Halvale teele",
                      "language": "EE",
                      "type": null
                    },
                    {
                      "name": "Rompiendo Tus Límites Morales",
                      "language": "ES",
                      "type": null
                    },
                    {
                      "name": "Σπάζοντας τα ηθικά σου όρια",
                      "language": "GR",
                      "type": null
                    },
                    {
                      "name": "Na putu prema dolje",
                      "language": "HR",
                      "type": null
                    },
                    {
                      "name": "Totál szívás",
                      "language": "HU",
                      "type": null
                    },
                    {
                      "name": "Shover shurot",
                      "language": "IL",
                      "type": "romanization"
                    },
                    {
                      "name": "افسار گسیخته",
                      "language": "IR",
                      "type": null
                    },
                    {
                      "name": "Breaking Bad - Reazioni collaterali",
                      "language": "IT",
                      "type": null
                    },
                    {
                      "name": "Bureikingu baddo",
                      "language": "JP",
                      "type": "romaji"
                    },
                    {
                      "name": "ブレイキング・バッド",
                      "language": "JP",
                      "type": null
                    },
                    {
                      "name": "Bręstantis blogis",
                      "language": "LT",
                      "type": null
                    },
                    {
                      "name": "Pārkāpt robežu",
                      "language": "LV",
                      "type": null
                    },
                    {
                      "name": "Breaking Bad: Ruptura Total",
                      "language": "PT",
                      "type": null
                    },
                    {
                      "name": "Чиста хемија",
                      "language": "RS",
                      "type": null
                    },
                    {
                      "name": "بريكنق باد",
                      "language": "SA",
                      "type": "دراما"
                    },
                    {
                      "name": "Kriva pota",
                      "language": "SI",
                      "type": null
                    },
                    {
                      "name": "Perníkový tatko",
                      "language": "SK",
                      "type": null
                    },
                    {
                      "name": "絕命毒師",
                      "language": "TW",
                      "type": null
                    },
                    {
                      "name": "Пуститися берега",
                      "language": "UA",
                      "type": null
                    },
                    {
                      "name": "BrBa",
                      "language": "US",
                      "type": "Abbreviation"
                    },
                    {
                      "name": "Egrilik sari",
                      "language": "UZ",
                      "type": null
                    },
                    {
                      "name": "Tập Làm Người Xấu",
                      "language": "VN",
                      "type": null
                    }
                  ],
                  "shortDescription": "Умирающий учитель химии начинает варить мет ради благополучия семьи. Выдающийся драматический сериал 2010-х",
                  "logo": {
                    "url": "https://avatars.mds.yandex.net/get-ott/200035/2a0000017802c0dff697971233b0e9def244/orig"
                  },
                  "watchability": {
                    "items": null
                  },
                  "releaseYears": [
                    {
                      "start": 2008,
                      "end": 2013
                    }
                  ]
                },
                {
                  "id": 1224067,
                  "type": "tv-series",
                  "externalId": {
                    "kpHD": "4a17728ba661e477b7523a5e0a832ad1",
                    "imdb": "tt10922010",
                    "tmdb": 105136
                  },
                  "name": "Вампиры средней полосы",
                  "rating": {
                    "kp": 8.338,
                    "imdb": 7.6,
                    "filmCritics": 0,
                    "russianFilmCritics": 84.6154,
                    "await": 95.5
                  },
                  "description": "Смоленск — среднестатистический город средней полосы России. Но не совсем. Много веков тут живут вампиры, которые хоть и позволяют себе охотиться на людей, но всё же свято чтут договор, по которому за каждое убийство нужно отдать хранителям на казнь одного из своих. Когда в березовой роще под Смоленском находят обескровленных парней, их мирная жизнь оказывается под угрозой. Теперь местной вампирской ячейке общества под руководством самого старого вампира деда Славы, он же — Святослав Вернидубович, предстоит в кратчайшие сроки найти нарушителя спокойствия.",
                  "votes": {
                    "kp": 527158,
                    "imdb": 1560,
                    "filmCritics": 0,
                    "russianFilmCritics": 13,
                    "await": 1887
                  },
                  "year": 2021,
                  "poster": {
                    "url": "https://st.kp.yandex.net/images/film_big/1224067.jpg",
                    "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_1224067.jpg"
                  },
                  "genres": [
                    {
                      "name": "детектив"
                    },
                    {
                      "name": "комедия"
                    },
                    {
                      "name": "фэнтези"
                    }
                  ],
                  "countries": [
                    {
                      "name": "Россия"
                    }
                  ],
                  "alternativeName": null,
                  "enName": null,
                  "movieLength": 50,
                  "names": [
                    {
                      "name": "Вампиры средней полосы"
                    }
                  ],
                  "shortDescription": "Упыри-гуманисты берутся за новое расследование. Продолжение обаятельной комедии с элегантным Артемом Ткаченко",
                  "logo": {
                    "url": "https://avatars.mds.yandex.net/get-ott/2419418/2a00000179a80f9cdb4b5e89947fc8ab0404/orig"
                  },
                  "watchability": {
                    "items": [
                      {
                        "name": "Okko",
                        "logo": {
                          "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                        },
                        "url": "https://okko.tv/serial/vampiry-srednejj-polosy?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                      },
                      {
                        "name": "START",
                        "logo": {
                          "url": "https://avatars.mds.yandex.net/get-ott/239697/1a632675-0d99-4268-bd5e-d5f3dd800174/orig"
                        },
                        "url": "https://start.ru/watch/vampiry-sredney-polosy?utm_source=kinopoisk&utm_medium=feed_watch&utm_campaign=vampiry-sredney-polosy"
                      },
                      {
                        "name": "PREMIER",
                        "logo": {
                          "url": "https://avatars.mds.yandex.net/get-ott/239697/0f86e907-9531-47e9-87bd-5101a08d4e30/orig"
                        },
                        "url": "https://premier.one/show/15795?utm_source=yandex&utm_medium=yandex_feed_search&utm_campaign=yandex_feed"
                      },
                      {
                        "name": "Wink",
                        "logo": {
                          "url": "https://avatars.mds.yandex.net/get-ott/1672343/54096cbe-cc3b-41c9-8e44-990ebbca8d61/orig"
                        },
                        "url": "https://wink.ru/media_items/112879912?utm_source=yandex&utm_medium=koldunschick&utm_content=name"
                      },
                      {
                        "name": "Смотрёшка",
                        "logo": {
                          "url": "https://avatars.mds.yandex.net/get-ott/236744/c88e652e-2eb1-472d-b636-a266364dbf58/orig"
                        },
                        "url": "https://smotreshka.tv/vod/start/L3R2L3Nlcmllcy92YW1waXJ5LXNyZWRuZXktcG9sb3N5?utm_source=yandex_search&utm_campaign=yandex_feed&utm_term=start&utm_content=Start"
                      },
                      {
                        "name": "Большое ТВ",
                        "logo": {
                          "url": "https://avatars.mds.yandex.net/get-ott/2439731/17c7ebcf-41aa-48b6-9366-621a85f1307a/orig"
                        },
                        "url": "https://bolshoe.tv/promo/web/movie/28814?segment=yandex_feed&group=peoples&utm_campaign=ya_feed&utm_medium=ya_feed"
                      },
                      {
                        "name": "24ТВ",
                        "logo": {
                          "url": "https://avatars.mds.yandex.net/get-ott/2439731/85e83b8d-1159-4781-bad5-ce0a809b3843/orig"
                        },
                        "url": "https://24h.tv/contents/2021-vampiry-srednej-polosy-557096214361801004"
                      }
                    ]
                  },
                  "releaseYears": [
                    {
                      "start": 2021,
                      "end": null
                    }
                  ]
                },
                {
                  "id": 1392743,
                  "alternativeName": "Sen Çal Kapımı",
                  "color": "#202020",
                  "countries": [
                    {
                      "name": "Турция"
                    }
                  ],
                  "description": "Эда живёт вместе со своей тётей и работает в семейном цветочном магазине. Она мечтает уехать на стажировку в Италию, но лишается стипендии, которую местное архитектурное бюро Art Life выделяет для талантливых студентов. Обидевшись, девушка решает отомстить его владельцу, молодому и талантливому архитектору Серкану Болату. Но их знакомство оборачивается неожиданным договором — Эда получит полностью оплаченную поездку в Италию, если 2 месяца будет притворяться девушкой Серкана, чтобы он смог вернуть свою бывшую.",
                  "enName": null,
                  "externalId": {
                    "kpHD": "4606e64c5c87cb359fc31d785d5ab7fc",
                    "imdb": "tt12439466",
                    "tmdb": 104877
                  },
                  "genres": [
                    {
                      "name": "мелодрама"
                    },
                    {
                      "name": "комедия"
                    }
                  ],
                  "name": "Постучись в мою дверь",
                  "names": [
                    {
                      "name": "Постучись в мою дверь"
                    },
                    {
                      "name": "Sen Çal Kapımı"
                    }
                  ],
                  "poster": {
                    "url": "https://st.kp.yandex.net/images/film_big/1392743.jpg",
                    "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_1392743.jpg"
                  },
                  "rating": {
                    "kp": 8.117,
                    "imdb": 7.2,
                    "filmCritics": 0,
                    "russianFilmCritics": 0,
                    "await": 0
                  },
                  "shortDescription": "Флористка и бизнесмен изображают пару. После этой роли Керем Бюрсин стал крашем миллионов зрителей",
                  "votes": {
                    "kp": 520526,
                    "imdb": 11755,
                    "filmCritics": 0,
                    "russianFilmCritics": 0,
                    "await": 1
                  },
                  "year": 2020,
                  "movieLength": 45,
                  "type": "tv-series",
                  "logo": {
                    "url": "https://avatars.mds.yandex.net/get-ott/223007/2a0000017f31ec5eb0a9a2db7adadc02a7b1/orig"
                  },
                  "watchability": {
                    "items": [
                      {
                        "name": "Okko",
                        "logo": {
                          "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                        },
                        "url": "https://okko.tv/serial/love-is-in-the-air?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                      },
                      {
                        "name": "Иви",
                        "logo": {
                          "url": "https://avatars.mds.yandex.net/get-ott/2419418/0dfd1724-848f-4725-9160-abc571f41c11/orig"
                        },
                        "url": "https://www.ivi.ru/watch/love-is-in-the-air?utm_source=yandex&utm_medium=wizard"
                      },
                      {
                        "name": "START",
                        "logo": {
                          "url": "https://avatars.mds.yandex.net/get-ott/239697/1a632675-0d99-4268-bd5e-d5f3dd800174/orig"
                        },
                        "url": "https://start.ru/watch/postuchis-v-moyu-dver?utm_source=kinopoisk&utm_medium=feed_watch&utm_campaign=postuchis-v-moyu-dver"
                      },
                      {
                        "name": "KION",
                        "logo": {
                          "url": "https://avatars.mds.yandex.net/get-ott/239697/daeb142e-3ecc-4bb2-9bff-4827996643ab/orig"
                        },
                        "url": "https://kion.ru/video/serial/576737481/season/576737554/episode/576737308?utm_source=yandex&utm_medium=organic&utm_campaign=wizard"
                      },
                      {
                        "name": "PREMIER",
                        "logo": {
                          "url": "https://avatars.mds.yandex.net/get-ott/239697/0f86e907-9531-47e9-87bd-5101a08d4e30/orig"
                        },
                        "url": "https://premier.one/show/19302?utm_source=yandex&utm_medium=yandex_feed_search&utm_campaign=yandex_feed"
                      },
                      {
                        "name": "more.tv",
                        "logo": {
                          "url": "https://avatars.mds.yandex.net/get-ott/1648503/97e3cbbd-40ee-4298-888d-ed2d0f022a69/orig"
                        },
                        "url": "https://more.tv/postuchis_v_moyu_dver?utm_source=yandex-snippet&utm_medium=snippet&utm_campaign=postuchis_v_moyu_dver"
                      },
                      {
                        "name": "Wink",
                        "logo": {
                          "url": "https://avatars.mds.yandex.net/get-ott/1672343/54096cbe-cc3b-41c9-8e44-990ebbca8d61/orig"
                        },
                        "url": "https://wink.ru/media_items/106998387?utm_source=yandex&utm_medium=koldunschick&utm_content=name"
                      },
                      {
                        "name": "24ТВ",
                        "logo": {
                          "url": "https://avatars.mds.yandex.net/get-ott/2439731/85e83b8d-1159-4781-bad5-ce0a809b3843/orig"
                        },
                        "url": "https://24h.tv/contents/2020-postuchis-v-moju-dver-608438848459899350"
                      }
                    ]
                  },
                  "releaseYears": [
                    {
                      "start": 2020,
                      "end": 2021
                    }
                  ]
                },
                {
                  "id": 571335,
                  "type": "tv-series",
                  "externalId": {
                    "kpHD": "42136048353b48cfa4225742c71e341e",
                    "imdb": "tt1586680",
                    "tmdb": 34307
                  },
                  "name": "Бесстыжие",
                  "rating": {
                    "kp": 8.666,
                    "imdb": 8.6,
                    "filmCritics": 0,
                    "russianFilmCritics": 0,
                    "await": 0
                  },
                  "description": "О взбалмошной многодетной семье Галлагеров и их соседях, которые веселятся, попадают в самые невероятные ситуации и пытаются выжить в этом мире всеми возможными средствами, но при этом как можно меньше работая.",
                  "votes": {
                    "kp": 495753,
                    "imdb": 250143,
                    "filmCritics": 0,
                    "russianFilmCritics": 0,
                    "await": 45
                  },
                  "year": 2011,
                  "poster": {
                    "url": "https://st.kp.yandex.net/images/film_big/571335.jpg",
                    "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_571335.jpg"
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
                    }
                  ],
                  "alternativeName": "Shameless",
                  "color": "#F8F0E0",
                  "enName": "Shameless",
                  "movieLength": 55,
                  "names": [
                    {
                      "name": "Бесстыжие"
                    },
                    {
                      "name": "Shameless"
                    },
                    {
                      "name": "无耻家庭",
                      "language": "CN",
                      "type": null
                    },
                    {
                      "name": "无耻堂",
                      "language": "CN",
                      "type": "特别篇"
                    },
                    {
                      "name": "无耻家庭之无耻堂",
                      "language": "CN",
                      "type": "特别篇"
                    },
                    {
                      "name": "Häbitu",
                      "language": "EE",
                      "type": null
                    },
                    {
                      "name": "Shameless - Szégyentelenek",
                      "language": "HU",
                      "type": null
                    },
                    {
                      "name": "שיימלס",
                      "language": "IL",
                      "type": null
                    },
                    {
                      "name": "Shameless: Niepokorni",
                      "language": "PL",
                      "type": null
                    },
                    {
                      "name": "Fara rusine",
                      "language": "RO",
                      "type": null
                    },
                    {
                      "name": "Бесстыдники",
                      "language": "RU",
                      "type": null
                    },
                    {
                      "name": "Brez sramu",
                      "language": "SI",
                      "type": null
                    },
                    {
                      "name": "Nehanební",
                      "language": "SK",
                      "type": null
                    },
                    {
                      "name": "Utanmaz",
                      "language": "TR",
                      "type": "translate"
                    },
                    {
                      "name": "Shameless (US)",
                      "language": "US",
                      "type": null
                    },
                    {
                      "name": "Shameless Hall of Shame",
                      "language": "US",
                      "type": "special episodes"
                    },
                    {
                      "name": "Mat Day",
                      "language": "VN",
                      "type": null
                    }
                  ],
                  "shortDescription": "Жизнь непутевого папаши и его шестерых детей. Микс суровой реальности и абсурда в драмеди о неидеальной семье",
                  "logo": {
                    "url": "https://avatars.mds.yandex.net/get-ott/2439731/2a0000017a456c49ee88b780d9dae9a3eb3d/orig"
                  },
                  "watchability": {
                    "items": null
                  },
                  "releaseYears": [
                    {
                      "start": 2011,
                      "end": 2021
                    }
                  ]
                }
              ],
        }
    }

    componentDidMount = async () => {
        // await this.importSerialsOnly()
    }

    importSerialsOnly = async () => {

        let headers = {
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': apiKinopoisk,
            }
        }

        const response = await axios.get('https://api.kinopoisk.dev/v1/movie?page=1&limit=10&type=tv-series', headers);
        console.log('Function response:', response.data.docs);
        this.setState({ arrOfSerialsOnly: response.data.docs })
        console.log(this.state.arrOfSerialsOnly);
    }




    render() {
        // console.log(this.state.arrOfSerialsOnly);
        return (
            <div className="serialsOnly">
                <h2>Сериалы</h2>
                <div className="serials-only-container">

                    <div className="slider-inner">
                        <div className="slides">
                            {this.state.arrOfSerialsOnly.map((obj, index) => {
                                if (index <= 9) {
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

export default SerialsOnly