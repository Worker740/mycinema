import React, { Component } from "react";
import axios from "axios";
import apiKinopoisk from "./API";

class AnimeOnly extends React.Component {
    constructor() {
        super()
        this.state = {
            arrOfAnimeOnly: [
              {
                "externalId": {
                  "kpHD": "4726854ee2be6d928a2d852281fa18f9",
                  "imdb": "tt0245429",
                  "tmdb": 129
                },
                "rating": {
                  "kp": 8.479,
                  "imdb": 8.6,
                  "filmCritics": 8.6,
                  "russianFilmCritics": 100,
                  "await": 0
                },
                "votes": {
                  "kp": 505064,
                  "imdb": 779458,
                  "filmCritics": 195,
                  "russianFilmCritics": 5,
                  "await": 0
                },
                "movieLength": 125,
                "id": 370,
                "type": "anime",
                "name": "Унесённые призраками",
                "description": "Тихиро с мамой и папой переезжает в новый дом. Заблудившись по дороге, они оказываются в странном пустынном городе, где их ждет великолепный пир. Родители с жадностью набрасываются на еду и к ужасу девочки превращаются в свиней, став пленниками злой колдуньи Юбабы. Теперь, оказавшись одна среди волшебных существ и загадочных видений, Тихиро должна придумать, как избавить своих родителей от чар коварной старухи.",
                "year": 2001,
                "poster": {
                  "url": "https://st.kp.yandex.net/images/film_big/370.jpg",
                  "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_370.jpg"
                },
                "genres": [
                  {
                    "name": "аниме"
                  },
                  {
                    "name": "мультфильм"
                  },
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
                    "name": "Япония"
                  }
                ],
                "alternativeName": "Sen to Chihiro no kamikakushi",
                "enName": null,
                "names": [
                  {
                    "name": "Унесённые призраками"
                  },
                  {
                    "name": "Sen to Chihiro no kamikakushi"
                  },
                  {
                    "name": "Sen to Chihiro no Kamikakushi",
                    "language": "JP",
                    "type": "Romaji"
                  },
                  {
                    "name": "Unesenniye prizrakami",
                    "language": "RU",
                    "type": "Romanization"
                  },
                  {
                    "name": "Sen gwa Chihiro ui Haengbang Bulmyeong",
                    "language": "KR",
                    "type": "Romanization"
                  },
                  {
                    "name": "Chihiro ilmmiid gaskkas",
                    "language": "FI",
                    "type": null
                  },
                  {
                    "name": "El viatge de Chihiro",
                    "language": "AD",
                    "type": null
                  },
                  {
                    "name": "Shahre Ashbah",
                    "language": "IR",
                    "type": "Romanization"
                  },
                  {
                    "name": "Shahr-e Ashbah",
                    "language": "IR",
                    "type": "Romanization"
                  },
                  {
                    "name": "Shahr Ashbah",
                    "language": "IR",
                    "type": "Romanization"
                  },
                  {
                    "name": "Sen and Chihiro's Spiriting Away",
                    "language": "US",
                    "type": null
                  },
                  {
                    "name": "The Spiriting Away of Sen and Chihiro",
                    "language": "US",
                    "type": null
                  },
                  {
                    "name": "A Viagem de Chihiro",
                    "language": "BR",
                    "type": null
                  },
                  {
                    "name": "Spirited Away",
                    "language": "US",
                    "type": null
                  },
                  {
                    "name": "Le voyage de Chihiro",
                    "language": "FR",
                    "type": null
                  },
                  {
                    "name": "千與千尋",
                    "language": "HK",
                    "type": null
                  },
                  {
                    "name": "El viaje de Chihiro",
                    "language": "ES",
                    "type": null
                  },
                  {
                    "name": "Chihiros Reise ins Zauberland",
                    "language": "DE",
                    "type": null
                  },
                  {
                    "name": "센과 치히로의 행방불명",
                    "language": "KR",
                    "type": "korean title"
                  },
                  {
                    "name": "Chihiro og heksene",
                    "language": "NO",
                    "type": null
                  }
                ],
                "shortDescription": "Девочка должна спасти своих родителей в мире духов. Шедевр Хаяо Миядзаки, фаворит анимационных рейтингов мира",
                "logo": {
                  "url": "https://avatars.mds.yandex.net/get-ott/1531675/2a00000173947e70f5a7e9d4ab80cf554ade/orig"
                },
                "watchability": {
                  "items": [
                    {
                      "name": "Okko",
                      "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                      },
                      "url": "https://okko.tv/movie/sen-to-chihiro-no-kamikakushi?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                    },
                    {
                      "name": "Иви",
                      "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/2419418/0dfd1724-848f-4725-9160-abc571f41c11/orig"
                      },
                      "url": "https://www.ivi.ru/watch/100076?utm_source=yandex&utm_medium=wizard"
                    },
                    {
                      "name": "KION",
                      "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/239697/daeb142e-3ecc-4bb2-9bff-4827996643ab/orig"
                      },
                      "url": "https://kion.ru/video/movie/601879570?utm_source=yandex&utm_medium=organic&utm_campaign=wizard"
                    },
                    {
                      "name": "Wink",
                      "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/1672343/54096cbe-cc3b-41c9-8e44-990ebbca8d61/orig"
                      },
                      "url": "https://wink.ru/media_items/146708518?utm_source=yandex&utm_medium=koldunschick&utm_content=name"
                    }
                  ]
                }
              },
              {
                "id": 749374,
                "type": "anime",
                "externalId": {
                  "kpHD": "4e408995ea402cafb36eaab1d1b9ba0a",
                  "imdb": "tt0307901",
                  "tmdb": 1429
                },
                "name": "Атака титанов",
                "rating": {
                  "kp": 8.666,
                  "imdb": 9,
                  "filmCritics": 0,
                  "russianFilmCritics": 100,
                  "await": 0
                },
                "description": "Уже многие годы человечество ведёт борьбу с титанами — огромными существами, которые не обладают особым интеллектом, зато едят людей и получают от этого удовольствие. После продолжительной борьбы остатки человечества построили высокую стену, окружившую страну людей, через которую титаны пройти не могли. С тех пор прошло сто лет, люди мирно живут под защитой стены. Но однажды подросток Эрэн и его сводная сестра Микаса становятся свидетелями страшного события — участок стены разрушается супертитаном, появившимся прямо из воздуха. Титаны нападают на город, и дети в ужасе видят, как один из монстров заживо съедает их мать. Эрэн клянётся, что убьёт всех титанов и отомстит за человечество.",
                "votes": {
                  "kp": 375388,
                  "imdb": 400736,
                  "filmCritics": 0,
                  "russianFilmCritics": 4,
                  "await": 13
                },
                "year": 2013,
                "poster": {
                  "url": "https://st.kp.yandex.net/images/film_big/749374.jpg",
                  "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_749374.jpg"
                },
                "genres": [
                  {
                    "name": "аниме"
                  },
                  {
                    "name": "мультфильм"
                  },
                  {
                    "name": "фантастика"
                  },
                  {
                    "name": "драма"
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
                    "name": "Япония"
                  }
                ],
                "alternativeName": "Shingeki no kyojin",
                "enName": null,
                "movieLength": 24,
                "names": [
                  {
                    "name": "Атака титанов"
                  },
                  {
                    "name": "Shingeki no kyojin"
                  },
                  {
                    "name": "La 25a ora",
                    "language": "IT",
                    "type": null
                  },
                  {
                    "name": "La 25ème Heure",
                    "language": "FR",
                    "type": null
                  },
                  {
                    "name": "La hora 25",
                    "language": "AR",
                    "type": null
                  },
                  {
                    "name": "La venticinquesima ora",
                    "language": "IT",
                    "type": null
                  },
                  {
                    "name": "转折一刻",
                    "language": "CN",
                    "type": null
                  },
                  {
                    "name": "一线曙光",
                    "language": "CN",
                    "type": null
                  },
                  {
                    "name": "La 25e heure",
                    "language": "FR",
                    "type": null
                  },
                  {
                    "name": "La 25eme Heure",
                    "language": "FR",
                    "type": null
                  },
                  {
                    "name": "La 25ima ora",
                    "language": "IT",
                    "type": null
                  },
                  {
                    "name": "24 heures avant la nuit",
                    "language": "FR",
                    "type": null
                  }
                ],
                "shortDescription": "Люди сражаются с великанами, которые мечтают их съесть. Самое эпичное и обсуждаемое аниме современности",
                "logo": {
                  "url": "https://avatars.mds.yandex.net/get-ott/224348/2a00000180c1eed0533fb1a60aacaa399403/orig"
                },
                "watchability": {
                  "items": [
                    {
                      "name": "24ТВ",
                      "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/2439731/85e83b8d-1159-4781-bad5-ce0a809b3843/orig"
                      },
                      "url": "https://24h.tv/contents/2013-shingeki-no-kyojin-818644104557278609"
                    }
                  ]
                },
                "releaseYears": [
                  {
                    "start": 2013,
                    "end": null
                  }
                ]
              },
              {
                "externalId": {
                  "kpHD": "4c4086bb916d4d01b984e2d5a8a63005",
                  "imdb": "tt0347149",
                  "tmdb": 4935
                },
                "rating": {
                  "kp": 8.319,
                  "imdb": 8.2,
                  "filmCritics": 7.5,
                  "russianFilmCritics": 100,
                  "await": 0
                },
                "votes": {
                  "kp": 362649,
                  "imdb": 405652,
                  "filmCritics": 182,
                  "russianFilmCritics": 6,
                  "await": 0
                },
                "movieLength": 119,
                "id": 49684,
                "type": "anime",
                "name": "Ходячий замок",
                "description": "Злая ведьма заточила 18-летнюю Софи в тело старухи. Девушка-бабушка бежит из города куда глаза глядят и встречает удивительный дом на ножках, где знакомится с могущественным волшебником Хаулом и демоном Кальцифером. Кальцифер должен служить Хаулу по договору, условия которого он не может разглашать. Девушка и демон решают помочь друг другу избавиться от злых чар.",
                "year": 2004,
                "poster": {
                  "url": "https://st.kp.yandex.net/images/film_big/49684.jpg",
                  "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_49684.jpg"
                },
                "genres": [
                  {
                    "name": "аниме"
                  },
                  {
                    "name": "мультфильм"
                  },
                  {
                    "name": "фэнтези"
                  },
                  {
                    "name": "мелодрама"
                  },
                  {
                    "name": "приключения"
                  }
                ],
                "countries": [
                  {
                    "name": "Япония"
                  }
                ],
                "alternativeName": "Howl no Ugoku Shiro",
                "enName": null,
                "names": [
                  {
                    "name": "Ходячий замок"
                  },
                  {
                    "name": "Howl no Ugoku Shiro"
                  }
                ],
                "shortDescription": "Злая колдунья превращает юную Софи в старушку. Волшебная сказка о силе любви по мотивам книги Дианы Уинн Джонс",
                "logo": {
                  "url": "https://avatars.mds.yandex.net/get-ott/223007/2a000001739479cbe711a4bd9dbe4e816ae7/orig"
                },
                "watchability": {
                  "items": [
                    {
                      "name": "Okko",
                      "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                      },
                      "url": "https://okko.tv/movie/hauru-no-ugoku-shiro?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                    },
                    {
                      "name": "Иви",
                      "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/2419418/0dfd1724-848f-4725-9160-abc571f41c11/orig"
                      },
                      "url": "https://www.ivi.ru/watch/100072?utm_source=yandex&utm_medium=wizard"
                    },
                    {
                      "name": "KION",
                      "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/239697/daeb142e-3ecc-4bb2-9bff-4827996643ab/orig"
                      },
                      "url": "https://kion.ru/video/movie/601634946?utm_source=yandex&utm_medium=organic&utm_campaign=wizard"
                    },
                    {
                      "name": "Wink",
                      "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/1672343/54096cbe-cc3b-41c9-8e44-990ebbca8d61/orig"
                      },
                      "url": "https://wink.ru/media_items/146708270?utm_source=yandex&utm_medium=koldunschick&utm_content=name"
                    }
                  ]
                }
              },
              {
                "id": 958722,
                "type": "anime",
                "externalId": {
                  "kpHD": "4274a6e34cc5c6fd8beb9de557d327be",
                  "imdb": "tt5311514",
                  "tmdb": 372058
                },
                "name": "Твоё имя",
                "rating": {
                  "kp": 8.373,
                  "imdb": 8.4,
                  "filmCritics": 8.2,
                  "russianFilmCritics": 75,
                  "await": 100
                },
                "description": "Токийский парень Таки и провинциальная девушка Мицуха обнаруживают, что между ними существует странная связь. Во сне они меняются телами и проживают жизни друг друга. Но однажды эта способность исчезает так же внезапно, как появилась. Таки решает во что бы то ни стало отыскать Мицуху.",
                "votes": {
                  "kp": 240109,
                  "imdb": 279233,
                  "filmCritics": 116,
                  "russianFilmCritics": 4,
                  "await": 335
                },
                "year": 2016,
                "poster": {
                  "url": "https://st.kp.yandex.net/images/film_big/958722.jpg",
                  "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_958722.jpg"
                },
                "genres": [
                  {
                    "name": "аниме"
                  },
                  {
                    "name": "мультфильм"
                  },
                  {
                    "name": "фэнтези"
                  },
                  {
                    "name": "драма"
                  },
                  {
                    "name": "мелодрама"
                  }
                ],
                "countries": [
                  {
                    "name": "Япония"
                  }
                ],
                "alternativeName": "Kimi no na wa.",
                "enName": null,
                "movieLength": 110,
                "names": [
                  {
                    "name": "Твоё имя"
                  },
                  {
                    "name": "Kimi no na wa."
                  },
                  {
                    "name": "Numele tau e ...",
                    "language": "RO",
                    "type": null
                  },
                  {
                    "name": "Seu Nome",
                    "language": "BR",
                    "type": null
                  },
                  {
                    "name": "Твое имя",
                    "language": "RU",
                    "type": null
                  },
                  {
                    "name": "Ton Nom",
                    "language": "FR",
                    "type": null
                  },
                  {
                    "name": "너의 이름은.",
                    "language": "KR",
                    "type": null
                  },
                  {
                    "name": "Comment Tu T'Appelles?",
                    "language": "FR",
                    "type": null
                  },
                  {
                    "name": "你的名字",
                    "language": "CN",
                    "type": null
                  },
                  {
                    "name": "君之名",
                    "language": "CN",
                    "type": null
                  },
                  {
                    "name": "หลับตาฝัน ถึงชื่อเธอ",
                    "language": "TH",
                    "type": null
                  },
                  {
                    "name": "Your Name.",
                    "language": "US",
                    "type": null
                  },
                  {
                    "name": "你的名字",
                    "language": "HK",
                    "type": null
                  },
                  {
                    "name": "Kimi no Na wa. -your name.",
                    "language": "US",
                    "type": null
                  },
                  {
                    "name": "Twoje imię.",
                    "language": "PL",
                    "type": null
                  },
                  {
                    "name": "君の名は.",
                    "language": "JP",
                    "type": null
                  },
                  {
                    "name": "君の名は。",
                    "language": "JP",
                    "type": null
                  },
                  {
                    "name": "Kimi no Na wa.",
                    "language": "JP",
                    "type": null
                  },
                  {
                    "name": "Twoje imię",
                    "language": "PL",
                    "type": null
                  },
                  {
                    "name": "君の名は",
                    "language": "JP",
                    "type": null
                  },
                  {
                    "name": "Your Name",
                    "language": "US",
                    "type": null
                  },
                  {
                    "name": "तुम्हारा  नाम",
                    "language": "IN",
                    "type": null
                  }
                ],
                "shortDescription": "Нежная сказка о первой любви, которая преодолевает пространство и время. Аниме — рекордсмен бокс-офиса",
                "logo": {
                  "url": "https://avatars.mds.yandex.net/get-ott/224348/2a000001722748afd22b6cd005ea5059c8a4/orig"
                },
                "watchability": {
                  "items": null
                }
              },
              {
                "externalId": {
                  "kpHD": "430d58d3b063b340824ff7ec7df330b8",
                  "imdb": "tt0096283",
                  "tmdb": 8392
                },
                "rating": {
                  "kp": 8.218,
                  "imdb": 8.1,
                  "filmCritics": 8.4,
                  "russianFilmCritics": 0,
                  "await": 0
                },
                "votes": {
                  "kp": 189241,
                  "imdb": 348039,
                  "filmCritics": 56,
                  "russianFilmCritics": 2,
                  "await": 0
                },
                "movieLength": 86,
                "id": 8221,
                "type": "anime",
                "name": "Мой сосед Тоторо",
                "description": "Сестры Сацуки и Мэй переезжают вместе с папой в деревенский дом. Однажды девочки обнаруживают, что по соседству с ними живут лесные духи — хранители леса во главе со своим могущественным и добрым повелителем Тоторо. Постепенно Тоторо становится другом девочек, помогая им в их повседневных приключениях.",
                "year": 1988,
                "poster": {
                  "url": "https://st.kp.yandex.net/images/film_big/8221.jpg",
                  "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_8221.jpg"
                },
                "genres": [
                  {
                    "name": "аниме"
                  },
                  {
                    "name": "мультфильм"
                  },
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
                    "name": "Япония"
                  }
                ],
                "alternativeName": "Tonari no Totoro",
                "enName": null,
                "names": [
                  {
                    "name": "Мой сосед Тоторо"
                  },
                  {
                    "name": "Tonari no Totoro"
                  },
                  {
                    "name": "Tonari No Totoro",
                    "language": "JP",
                    "type": "Hepburn Spelling"
                  },
                  {
                    "name": "Magiska äventyr med Totoro",
                    "language": "SE",
                    "type": "Tv title"
                  },
                  {
                    "name": "Näkymätön ystävä",
                    "language": "FI",
                    "type": "tv title"
                  },
                  {
                    "name": "Totoro",
                    "language": "FI",
                    "type": "Swedish title"
                  },
                  {
                    "name": "My Neighbor Totoro",
                    "language": "US",
                    "type": null
                  },
                  {
                    "name": "Totoro auzokidea",
                    "language": "ES",
                    "type": "Euskera"
                  },
                  {
                    "name": "Mon Voisin Totoro",
                    "language": "FR",
                    "type": null
                  },
                  {
                    "name": "Komşum Totoro",
                    "language": "TR",
                    "type": null
                  },
                  {
                    "name": "Mein Nachbar Totoro",
                    "language": "DE",
                    "type": null
                  },
                  {
                    "name": "龍貓",
                    "language": "HK",
                    "type": null
                  },
                  {
                    "name": "이웃집 토토로",
                    "language": "KR",
                    "type": null
                  },
                  {
                    "name": "My Neighbour Totoro",
                    "language": "GB",
                    "type": null
                  },
                  {
                    "name": "Min nabo Totoro",
                    "language": "NO",
                    "type": null
                  }
                ],
                "shortDescription": "Сестренки знакомятся с обаятельным духом леса. История о вере в чудо, ставшая визитной карточкой студии Ghibli",
                "logo": {
                  "url": "https://avatars.mds.yandex.net/get-ott/1672343/2a00000173947a879571090c7ef4e5e197de/orig"
                },
                "watchability": {
                  "items": [
                    {
                      "name": "Okko",
                      "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                      },
                      "url": "https://okko.tv/movie/tonari-no-totoro?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                    },
                    {
                      "name": "Иви",
                      "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/2419418/0dfd1724-848f-4725-9160-abc571f41c11/orig"
                      },
                      "url": "https://www.ivi.ru/watch/100075?utm_source=yandex&utm_medium=wizard"
                    },
                    {
                      "name": "KION",
                      "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/239697/daeb142e-3ecc-4bb2-9bff-4827996643ab/orig"
                      },
                      "url": "https://kion.ru/video/movie/601879520?utm_source=yandex&utm_medium=organic&utm_campaign=wizard"
                    },
                    {
                      "name": "Wink",
                      "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/1672343/54096cbe-cc3b-41c9-8e44-990ebbca8d61/orig"
                      },
                      "url": "https://wink.ru/media_items/146684950?utm_source=yandex&utm_medium=koldunschick&utm_content=name"
                    }
                  ]
                }
              },
              {
                "id": 406148,
                "type": "anime",
                "externalId": {
                  "kpHD": null,
                  "imdb": "tt0339526",
                  "tmdb": 13916
                },
                "name": "Тетрадь смерти",
                "rating": {
                  "kp": 8.589,
                  "imdb": 9,
                  "filmCritics": 0,
                  "russianFilmCritics": 0,
                  "await": 0
                },
                "description": "Старшекласснику Лайту Ягами в руки попадает тетрадь синигами Рюка. Каждый человек, чьё имя записать в эту тетрадку, умрёт, поэтому Лайт решает бороться со злом на земле.",
                "votes": {
                  "kp": 163688,
                  "imdb": 336907,
                  "filmCritics": 0,
                  "russianFilmCritics": 0,
                  "await": 0
                },
                "year": 2006,
                "poster": {
                  "url": "https://st.kp.yandex.net/images/film_big/406148.jpg",
                  "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_406148.jpg"
                },
                "genres": [
                  {
                    "name": "аниме"
                  },
                  {
                    "name": "мультфильм"
                  },
                  {
                    "name": "фэнтези"
                  },
                  {
                    "name": "триллер"
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
                    "name": "Япония"
                  }
                ],
                "alternativeName": "Desu noto",
                "enName": null,
                "movieLength": 22,
                "names": [
                  {
                    "name": "Тетрадь смерти"
                  },
                  {
                    "name": "Desu noto"
                  },
                  {
                    "name": "Poolhall Prophets",
                    "language": "GB",
                    "type": "International"
                  }
                ],
                "shortDescription": null,
                "logo": {
                  "url": null
                },
                "watchability": {
                  "items": null
                },
                "releaseYears": [
                  {
                    "start": 2006,
                    "end": 2007
                  }
                ]
              },
              {
                "externalId": {
                  "kpHD": "47c92cded6e021d28f0ec1cbe1ca6ff8",
                  "imdb": "tt0119698",
                  "tmdb": 128
                },
                "rating": {
                  "kp": 8.198,
                  "imdb": 8.3,
                  "filmCritics": 8,
                  "russianFilmCritics": 0,
                  "await": 0
                },
                "votes": {
                  "kp": 152079,
                  "imdb": 402331,
                  "filmCritics": 114,
                  "russianFilmCritics": 2,
                  "await": 0
                },
                "movieLength": 134,
                "id": 441,
                "type": "anime",
                "name": "Принцесса Мононоке",
                "description": "Убив вепря, юный принц Аситака навлек на себя смертельное проклятие. Старая знахарка предсказала, что только он сам способен изменить свою судьбу, и отважный воин отправился в опасное путешествие. Так он оказался в загадочной стране, где люди под предводительством злой госпожи Эбоси воевали с обитателями леса: духами, демонами и гигантскими существами, каких Аситака раньше никогда не видел. \n\nИ была с ними принцесса Мононоке - повелительница зверей и дочь волчицы. Теперь судьба всех зависит только от одного воина - принца Аситаки.",
                "year": 1997,
                "poster": {
                  "url": "https://st.kp.yandex.net/images/film_big/441.jpg",
                  "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_441.jpg"
                },
                "genres": [
                  {
                    "name": "аниме"
                  },
                  {
                    "name": "мультфильм"
                  },
                  {
                    "name": "фэнтези"
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
                    "name": "Япония"
                  }
                ],
                "alternativeName": "Mononoke-hime",
                "enName": null,
                "names": [
                  {
                    "name": "Принцесса Мононоке"
                  },
                  {
                    "name": "Mononoke-hime"
                  },
                  {
                    "name": "Mononoke Hime",
                    "language": "JP",
                    "type": "Romaji"
                  },
                  {
                    "name": "원령공주",
                    "language": "KR",
                    "type": "korean title"
                  },
                  {
                    "name": "Princeza Mononoke",
                    "language": "RS",
                    "type": null
                  },
                  {
                    "name": "Princesa Mononoke",
                    "language": "BR",
                    "type": null
                  },
                  {
                    "name": "A Princesa Mononoke",
                    "language": "PT",
                    "type": null
                  },
                  {
                    "name": "幽灵公主",
                    "language": "CN",
                    "type": "动画 / 奇幻 / 冒险"
                  },
                  {
                    "name": "Prenses Mononoke",
                    "language": "TR",
                    "type": null
                  },
                  {
                    "name": "Princess Mononoke",
                    "language": "IT",
                    "type": null
                  },
                  {
                    "name": "Mononoke Hime",
                    "language": "ES",
                    "type": "Romaji"
                  },
                  {
                    "name": "幽靈公主",
                    "language": "HK",
                    "type": null
                  },
                  {
                    "name": "The Princess Mononoke",
                    "language": "JP",
                    "type": "Older official translations"
                  },
                  {
                    "name": "Principessa Mononoke",
                    "language": "IT",
                    "type": null
                  },
                  {
                    "name": "Księżniczka Mononoke",
                    "language": "PL",
                    "type": null
                  },
                  {
                    "name": "Prinzessin Mononoke",
                    "language": "DE",
                    "type": null
                  },
                  {
                    "name": "모노노케 히메",
                    "language": "KR",
                    "type": "alternative korean title"
                  }
                ],
                "shortDescription": "Заколдованный принц и лесная принцесса борются с древним демоном и его рабами. Аниме-блокбастер Хаяо Миядзаки",
                "logo": {
                  "url": "https://avatars.mds.yandex.net/get-ott/236744/2a00000173947daba25a2156e8af43dbb41b/orig"
                },
                "watchability": {
                  "items": [
                    {
                      "name": "Okko",
                      "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                      },
                      "url": "https://okko.tv/movie/mononoke-hime?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                    },
                    {
                      "name": "Иви",
                      "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/2419418/0dfd1724-848f-4725-9160-abc571f41c11/orig"
                      },
                      "url": "https://www.ivi.ru/watch/100073?utm_source=yandex&utm_medium=wizard"
                    },
                    {
                      "name": "KION",
                      "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/239697/daeb142e-3ecc-4bb2-9bff-4827996643ab/orig"
                      },
                      "url": "https://kion.ru/video/movie/601635018?utm_source=yandex&utm_medium=organic&utm_campaign=wizard"
                    },
                    {
                      "name": "Wink",
                      "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/1672343/54096cbe-cc3b-41c9-8e44-990ebbca8d61/orig"
                      },
                      "url": "https://wink.ru/media_items/146709111?utm_source=yandex&utm_medium=koldunschick&utm_content=name"
                    }
                  ]
                }
              },
              {
                "externalId": {
                  "kpHD": "4243bce9cf1b5a1dbfe23dcef25d2e5e",
                  "imdb": "tt0983213",
                  "tmdb": 38142
                },
                "rating": {
                  "kp": 7.89,
                  "imdb": 7.5,
                  "filmCritics": 0,
                  "russianFilmCritics": 0,
                  "await": 0
                },
                "votes": {
                  "kp": 122059,
                  "imdb": 59827,
                  "filmCritics": 0,
                  "russianFilmCritics": 0,
                  "await": 0
                },
                "movieLength": 63,
                "id": 280961,
                "type": "anime",
                "name": "5 сантиметров в секунду",
                "description": "Три истории из жизни Такаки Тоно, которые начинаются в Японии в середине 1990-х годов.",
                "year": 2007,
                "poster": {
                  "url": "https://st.kp.yandex.net/images/film_big/280961.jpg",
                  "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_280961.jpg"
                },
                "genres": [
                  {
                    "name": "аниме"
                  },
                  {
                    "name": "мультфильм"
                  },
                  {
                    "name": "драма"
                  },
                  {
                    "name": "мелодрама"
                  }
                ],
                "countries": [
                  {
                    "name": "Япония"
                  }
                ],
                "alternativeName": "Byousoku 5 Centimeter",
                "enName": null,
                "names": [
                  {
                    "name": "5 сантиметров в секунду"
                  },
                  {
                    "name": "Byousoku 5 Centimeter"
                  }
                ],
                "shortDescription": "Три истории о первой любви, красоте и неумолимой повседневности. Медитативное, щемящее аниме Макото Синкая",
                "logo": {
                  "url": "https://avatars.mds.yandex.net/get-ott/1672343/2a00000174c0509b3823f969558437f6aa45/orig"
                },
                "watchability": {
                  "items": [
                    {
                      "name": "Okko",
                      "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                      },
                      "url": "https://okko.tv/movie/byosoku-5-senchimetoru?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                    },
                    {
                      "name": "Иви",
                      "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/2419418/0dfd1724-848f-4725-9160-abc571f41c11/orig"
                      },
                      "url": "https://www.ivi.ru/watch/131494?utm_source=yandex&utm_medium=wizard"
                    },
                    {
                      "name": "KION",
                      "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/239697/daeb142e-3ecc-4bb2-9bff-4827996643ab/orig"
                      },
                      "url": "https://kion.ru/video/movie/274477616?utm_source=yandex&utm_medium=organic&utm_campaign=wizard"
                    },
                    {
                      "name": "PREMIER",
                      "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/239697/0f86e907-9531-47e9-87bd-5101a08d4e30/orig"
                      },
                      "url": "https://premier.one/show/19569?utm_source=yandex&utm_medium=yandex_feed_search&utm_campaign=yandex_feed"
                    },
                    {
                      "name": "Wink",
                      "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/1672343/54096cbe-cc3b-41c9-8e44-990ebbca8d61/orig"
                      },
                      "url": "https://wink.ru/media_items/109637539?utm_source=yandex&utm_medium=koldunschick&utm_content=name"
                    }
                  ]
                }
              },
              {
                "externalId": {
                  "kpHD": "420582e59b0ad54caeb47d0273e6f93d",
                  "imdb": "tt9426210",
                  "tmdb": 568160
                },
                "rating": {
                  "kp": 7.951,
                  "imdb": 7.5,
                  "filmCritics": 7.4,
                  "russianFilmCritics": 87.5,
                  "await": 99.13
                },
                "votes": {
                  "kp": 117600,
                  "imdb": 44994,
                  "filmCritics": 96,
                  "russianFilmCritics": 8,
                  "await": 1220
                },
                "movieLength": 112,
                "id": 1219417,
                "type": "anime",
                "name": "Дитя погоды",
                "description": "16-летний Ходака Морисима убегает из дома в Токио, где у него сразу кончаются деньги. Мало того, что без документов он не может найти работу, так ещё на улице идёт бесконечный дождь, и небо постоянно затянуто тучами. В отчаянии парень обращается к бывшему попутчику, а тот не только берёт его в свой журнал, пишущий о сверхъестественном, но и предоставляет жильё. Однажды Ходака знакомится с девушкой по имени Хина Амано, которая обладает удивительной способностью разгонять тучи и останавливать дождь.",
                "year": 2019,
                "poster": {
                  "url": "https://st.kp.yandex.net/images/film_big/1219417.jpg",
                  "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_1219417.jpg"
                },
                "genres": [
                  {
                    "name": "аниме"
                  },
                  {
                    "name": "мультфильм"
                  },
                  {
                    "name": "мелодрама"
                  },
                  {
                    "name": "фэнтези"
                  }
                ],
                "countries": [
                  {
                    "name": "Япония"
                  }
                ],
                "alternativeName": "Tenki no ko",
                "enName": null,
                "names": [
                  {
                    "name": "Дитя погоды"
                  },
                  {
                    "name": "Tenki no ko"
                  }
                ],
                "shortDescription": "Любовь и древняя магия в мегаполисе. Аниме-шедевр о ценности солнечного света от автора хита «Твое имя»",
                "logo": {
                  "url": "https://avatars.mds.yandex.net/get-ott/1672343/2a00000172508c8ded8db7400beb99d4e45c/orig"
                },
                "watchability": {
                  "items": [
                    {
                      "name": "Okko",
                      "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                      },
                      "url": "https://okko.tv/movie/tenki-no-ko?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                    },
                    {
                      "name": "Иви",
                      "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/2419418/0dfd1724-848f-4725-9160-abc571f41c11/orig"
                      },
                      "url": "https://www.ivi.ru/watch/411299?utm_source=yandex&utm_medium=wizard"
                    },
                    {
                      "name": "START",
                      "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/239697/1a632675-0d99-4268-bd5e-d5f3dd800174/orig"
                      },
                      "url": "https://start.ru/watch/ditya-pogody?utm_source=kinopoisk&utm_medium=feed_watch&utm_campaign=ditya-pogody"
                    },
                    {
                      "name": "KION",
                      "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/239697/daeb142e-3ecc-4bb2-9bff-4827996643ab/orig"
                      },
                      "url": "https://kion.ru/video/movie/188544591?utm_source=yandex&utm_medium=organic&utm_campaign=wizard"
                    },
                    {
                      "name": "PREMIER",
                      "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/239697/0f86e907-9531-47e9-87bd-5101a08d4e30/orig"
                      },
                      "url": "https://premier.one/show/18727?utm_source=yandex&utm_medium=yandex_feed_search&utm_campaign=yandex_feed"
                    },
                    {
                      "name": "Wink",
                      "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/1672343/54096cbe-cc3b-41c9-8e44-990ebbca8d61/orig"
                      },
                      "url": "https://wink.ru/media_items/98995897?utm_source=yandex&utm_medium=koldunschick&utm_content=name"
                    }
                  ]
                }
              },
              {
                "externalId": {
                  "kpHD": "4bf7b53f70c3b3a8819cd8733195bece",
                  "imdb": "tt5323662",
                  "tmdb": 378064
                },
                "rating": {
                  "kp": 8.177,
                  "imdb": 8.1,
                  "filmCritics": 7.6,
                  "russianFilmCritics": 0,
                  "await": 0
                },
                "votes": {
                  "kp": 113671,
                  "imdb": 86920,
                  "filmCritics": 37,
                  "russianFilmCritics": 0,
                  "await": 54
                },
                "movieLength": 130,
                "id": 963343,
                "type": "anime",
                "name": "Форма голоса",
                "description": "Молодой человек Сёя Исида внезапно осознаёт, что в школе умудрился превратить жизнь одноклассницы Сёко в ад только потому, что та была глухая. И теперь, хоть и запоздало, парень понимает — чтобы сказать нечто важное тому, кто не может тебя услышать, вовсе не обязательно использовать голос.",
                "year": 2016,
                "poster": {
                  "url": "https://st.kp.yandex.net/images/film_big/963343.jpg",
                  "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_963343.jpg"
                },
                "genres": [
                  {
                    "name": "аниме"
                  },
                  {
                    "name": "мультфильм"
                  },
                  {
                    "name": "драма"
                  },
                  {
                    "name": "мелодрама"
                  }
                ],
                "countries": [
                  {
                    "name": "Япония"
                  }
                ],
                "alternativeName": "Koe no katachi",
                "enName": null,
                "names": [
                  {
                    "name": "Форма голоса"
                  },
                  {
                    "name": "Koe no katachi"
                  }
                ],
                "shortDescription": "Девочка с проблемами со слухом подвергается травле в школе. Аниме о запоздалом раскаянии и шансе на прощение",
                "logo": {
                  "url": "https://avatars.mds.yandex.net/get-ott/2439731/2a00000171bfe7e1d5ddaba36e9a6b94e89e/orig"
                },
                "watchability": {
                  "items": [
                    {
                      "name": "KION",
                      "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/239697/daeb142e-3ecc-4bb2-9bff-4827996643ab/orig"
                      },
                      "url": "https://kion.ru/video/movie/180209372?utm_source=yandex&utm_medium=organic&utm_campaign=wizard"
                    }
                  ]
                }
              }
            ],
        }
    }

    componentDidMount = async () => {
        // await this.importAnimeOnly()
    }

    importAnimeOnly = async () => {

        let headers = {
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': apiKinopoisk,
            }
        }

        const response = await axios.get('https://api.kinopoisk.dev/v1/movie?page=1&limit=10&type=anime', headers);
        console.log('Function response:', response.data.docs);
        this.setState({ arrOfAnimeOnly: response.data.docs })
        console.log(this.state.arrOfAnimeOnly);
    }




    render() {
        // console.log(this.state.arrOfAnimeOnly);
        return (
            <div className="animeOnly">
                <h2>Аниме</h2>
                <div className="anime-only-container">

                    <div className="slider-inner">
                        <div className="slides">
                            {this.state.arrOfAnimeOnly.map((obj, index) => {
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

export default AnimeOnly