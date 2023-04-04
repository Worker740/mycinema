import React, { Component } from "react";
import axios from "axios";
import apiKinopoisk from "./API";

class CartoonsOnly extends React.Component {
    constructor() {
        super()
        this.state = {
            arrOfCartoonsOnly: [
                {
                  "externalId": {
                    "kpHD": "415fe4a19e98cd349eec8733bdd26c2c",
                    "imdb": "tt2948356",
                    "tmdb": 269149
                  },
                  "rating": {
                    "kp": 8.317,
                    "imdb": 8,
                    "filmCritics": 8.1,
                    "russianFilmCritics": 100,
                    "await": 95.49
                  },
                  "votes": {
                    "kp": 870994,
                    "imdb": 510433,
                    "filmCritics": 298,
                    "russianFilmCritics": 14,
                    "await": 18811
                  },
                  "movieLength": 108,
                  "id": 775276,
                  "type": "cartoon",
                  "name": "Зверополис",
                  "description": "Добро пожаловать в Зверополис – современный город, населенный самыми разными животными, от огромных слонов до крошечных мышек. Зверополис разделен на районы, полностью повторяющие естественную среду обитания разных жителей – здесь есть и элитный район Площадь Сахары и неприветливый Тундратаун. В этом городе появляется новый офицер полиции, жизнерадостная зайчиха Джуди Хоппс, которая с первых дней работы понимает, как сложно быть маленькой и пушистой среди больших и сильных полицейских. Джуди хватается за первую же возможность проявить себя, несмотря на то, что ее партнером будет болтливый хитрый лис Ник Уайлд. Вдвоем им предстоит раскрыть сложное дело, от которого будет зависеть судьба всех обитателей Зверополиса.",
                  "year": 2016,
                  "poster": {
                    "url": "https://st.kp.yandex.net/images/film_big/775276.jpg",
                    "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_775276.jpg"
                  },
                  "genres": [
                    {
                      "name": "мультфильм"
                    },
                    {
                      "name": "комедия"
                    },
                    {
                      "name": "криминал"
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
                      "name": "США"
                    }
                  ],
                  "alternativeName": "Zootopia",
                  "enName": null,
                  "names": [
                    {
                      "name": "Зверополис"
                    },
                    {
                      "name": "Zootopia"
                    }
                  ],
                  "shortDescription": "Отважная крольчиха делает карьеру в полиции звериного города. Оскароносная комедия с серьезным подтекстом",
                  "logo": {
                    "url": "https://avatars.mds.yandex.net/get-ott/2439731/2a00000178cab3087920b10e48325211c178/orig"
                  },
                  "watchability": {
                    "items": [
                      {
                        "name": "Okko",
                        "logo": {
                          "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                        },
                        "url": "https://okko.tv/movie/zootopia?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                      },
                      {
                        "name": "24ТВ",
                        "logo": {
                          "url": "https://avatars.mds.yandex.net/get-ott/2439731/85e83b8d-1159-4781-bad5-ce0a809b3843/orig"
                        },
                        "url": "https://24h.tv/contents/2016-zootopia-546319907436889022"
                      }
                    ]
                  }
                },
                {
                  "externalId": {
                    "kpHD": "49aabf28ca2dbb07abfbad036dcdbff0",
                    "imdb": "tt0382932",
                    "tmdb": 2062
                  },
                  "rating": {
                    "kp": 8.043,
                    "imdb": 8.1,
                    "filmCritics": 8.5,
                    "russianFilmCritics": 100,
                    "await": 0
                  },
                  "votes": {
                    "kp": 664517,
                    "imdb": 755811,
                    "filmCritics": 253,
                    "russianFilmCritics": 6,
                    "await": 0
                  },
                  "movieLength": 111,
                  "id": 89514,
                  "type": "cartoon",
                  "name": "Рататуй",
                  "description": "Крыс Реми обладает уникальным вкусом. Он готов рисковать собственной жизнью, чтобы посмотреть любимое кулинарное шоу и раздобыть какую-нибудь приправку или просто свежий продукт. Реми живет со своими сородичами, которые его не понимают и не принимают его увлечения кулинарией. Когда Реми случайно попадает на кухню шикарного ресторана, он решает воспользоваться выпавшим ему шансом и проверить свои навыки. \n\nНа эту же кухню попадает и юный Лингвини. Всё, на что он может рассчитывать — это должность уборщика. Но он тоже получает свой шанс.",
                  "year": 2007,
                  "poster": {
                    "url": "https://st.kp.yandex.net/images/film_big/89514.jpg",
                    "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_89514.jpg"
                  },
                  "genres": [
                    {
                      "name": "мультфильм"
                    },
                    {
                      "name": "приключения"
                    },
                    {
                      "name": "комедия"
                    },
                    {
                      "name": "семейный"
                    },
                    {
                      "name": "фэнтези"
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
                  "alternativeName": "Ratatouille",
                  "enName": null,
                  "names": [
                    {
                      "name": "Рататуй"
                    },
                    {
                      "name": "Ratatouille"
                    }
                  ],
                  "shortDescription": "Крысенок-кулинар попадает на кухню ресторана. Аппетитная комедия с «Оскаром» за лучший анимационный фильм",
                  "logo": {
                    "url": "https://avatars.mds.yandex.net/get-ott/212840/2a00000178cad05913b4b6c6377bc8405c47/orig"
                  },
                  "watchability": {
                    "items": [
                      {
                        "name": "Okko",
                        "logo": {
                          "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                        },
                        "url": "https://okko.tv/movie/ratatouille?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                      },
                      {
                        "name": "24ТВ",
                        "logo": {
                          "url": "https://avatars.mds.yandex.net/get-ott/2439731/85e83b8d-1159-4781-bad5-ce0a809b3843/orig"
                        },
                        "url": "https://24h.tv/contents/2007-ratatouille-546320607227150574"
                      }
                    ]
                  }
                },
                {
                  "externalId": {
                    "kpHD": "4ad80bb0eadac154a255cbd395e093e9",
                    "imdb": "tt0126029",
                    "tmdb": 808
                  },
                  "rating": {
                    "kp": 8.113,
                    "imdb": 7.9,
                    "filmCritics": 7.8,
                    "russianFilmCritics": 0,
                    "await": 0
                  },
                  "votes": {
                    "kp": 631469,
                    "imdb": 692675,
                    "filmCritics": 211,
                    "russianFilmCritics": 0,
                    "await": 0
                  },
                  "movieLength": 90,
                  "id": 430,
                  "type": "cartoon",
                  "name": "Шрэк",
                  "description": "Жил да был в сказочном государстве большой зеленый великан по имени Шрэк. Жил он в гордом одиночестве в лесу, на болоте, которое считал своим. Но однажды злобный коротышка — лорд Фаркуад, правитель волшебного королевства, безжалостно согнал на Шрэково болото всех сказочных обитателей.\n\nИ беспечной жизни зеленого великана пришел конец. Но лорд Фаркуад пообещал вернуть Шрэку болото, если великан добудет ему прекрасную принцессу Фиону, которая томится в неприступной башне, охраняемой огнедышащим драконом.",
                  "year": 2001,
                  "poster": {
                    "url": "https://st.kp.yandex.net/images/film_big/430.jpg",
                    "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_430.jpg"
                  },
                  "genres": [
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
                      "name": "комедия"
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
                      "name": "США"
                    }
                  ],
                  "alternativeName": "Shrek",
                  "enName": null,
                  "names": [
                    {
                      "name": "Шрэк"
                    },
                    {
                      "name": "Shrek"
                    },
                    {
                      "name": "Шрэк 1",
                      "language": "RU",
                      "type": null
                    },
                    {
                      "name": "Sreka",
                      "language": "IN",
                      "type": null
                    },
                    {
                      "name": "Šrek",
                      "language": "RS",
                      "type": null
                    },
                    {
                      "name": "슈렉 1",
                      "language": "KR",
                      "type": null
                    },
                    {
                      "name": "Srek",
                      "language": "GR",
                      "type": null
                    },
                    {
                      "name": "Схрек",
                      "language": "UA",
                      "type": null
                    },
                    {
                      "name": "怪物史瑞克",
                      "language": "CN",
                      "type": null
                    },
                    {
                      "name": "怪物史瑞克1",
                      "language": "CN",
                      "type": null
                    }
                  ],
                  "shortDescription": "Огр-мизантроп спасает принцессу, чтобы вернуть свое болото. Революционная анимация о том, что красота — внутри",
                  "logo": {
                    "url": "https://avatars.mds.yandex.net/get-ott/1672343/2a000001706322b7aab311a80769a58e93d4/orig"
                  },
                  "watchability": {
                    "items": [
                      {
                        "name": "Okko",
                        "logo": {
                          "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                        },
                        "url": "https://okko.tv/movie/shrek?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                      },
                      {
                        "name": "Иви",
                        "logo": {
                          "url": "https://avatars.mds.yandex.net/get-ott/2419418/0dfd1724-848f-4725-9160-abc571f41c11/orig"
                        },
                        "url": "https://www.ivi.ru/watch/99983?utm_source=yandex&utm_medium=wizard"
                      },
                      {
                        "name": "PREMIER",
                        "logo": {
                          "url": "https://avatars.mds.yandex.net/get-ott/239697/0f86e907-9531-47e9-87bd-5101a08d4e30/orig"
                        },
                        "url": "https://premier.one/show/16507?utm_source=yandex&utm_medium=yandex_feed_search&utm_campaign=yandex_feed"
                      },
                      {
                        "name": "Wink",
                        "logo": {
                          "url": "https://avatars.mds.yandex.net/get-ott/1672343/54096cbe-cc3b-41c9-8e44-990ebbca8d61/orig"
                        },
                        "url": "https://wink.ru/media_items/74302696?utm_source=yandex&utm_medium=koldunschick&utm_content=name"
                      },
                      {
                        "name": "viju",
                        "logo": {
                          "url": "https://avatars.mds.yandex.net/get-ott/224348/8b10c84b-e1bb-4493-9bc4-6ee56554403a/orig"
                        },
                        "url": "https://viju.ru/filmy/shrek?utm_campaign=yandex_content_integration&utm_medium=affiliate&utm_source=yandex"
                      },
                      {
                        "name": "Смотрёшка",
                        "logo": {
                          "url": "https://avatars.mds.yandex.net/get-ott/236744/c88e652e-2eb1-472d-b636-a266364dbf58/orig"
                        },
                        "url": "https://smotreshka.tv/vod/vipplay/618e0564bb003f90038b39c1?utm_source=yandex_search&utm_campaign=yandex_feed&utm_term=viju&utm_content=Viju"
                      },
                      {
                        "name": "НТВ-ПЛЮС Онлайн ТВ",
                        "logo": {
                          "url": "https://avatars.mds.yandex.net/get-ott/223007/c6b9b3d8-3258-4394-9cae-c86fdb56a0c6/orig"
                        },
                        "url": "https://ntvplus.tv/watch/17575-shrek?utm_source=kinopoisk"
                      },
                      {
                        "name": "24ТВ",
                        "logo": {
                          "url": "https://avatars.mds.yandex.net/get-ott/2439731/85e83b8d-1159-4781-bad5-ce0a809b3843/orig"
                        },
                        "url": "https://24h.tv/contents/2001-shrek-547484359217643716"
                      }
                    ]
                  }
                },
                {
                  "externalId": {
                    "kpHD": "4eac76d69bdb21d9aa2945deb6ba8d7f",
                    "imdb": "tt0110357",
                    "tmdb": 8587
                  },
                  "rating": {
                    "kp": 8.775,
                    "imdb": 8.5,
                    "filmCritics": 8.5,
                    "russianFilmCritics": 0,
                    "await": 0
                  },
                  "votes": {
                    "kp": 630001,
                    "imdb": 1074668,
                    "filmCritics": 136,
                    "russianFilmCritics": 2,
                    "await": 0
                  },
                  "movieLength": 88,
                  "id": 2360,
                  "type": "cartoon",
                  "name": "Король Лев",
                  "description": "У величественного Короля-Льва Муфасы рождается наследник по имени Симба. Уже в детстве любознательный малыш становится жертвой интриг своего завистливого дяди Шрама, мечтающего о власти.\n\nСимба познаёт горе утраты, предательство и изгнание, но в конце концов обретает верных друзей и находит любимую. Закалённый испытаниями, он в нелёгкой борьбе отвоёвывает своё законное место в «Круге жизни», осознав, что значит быть настоящим Королём. ",
                  "year": 1994,
                  "poster": {
                    "url": "https://st.kp.yandex.net/images/film_big/2360.jpg",
                    "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_2360.jpg"
                  },
                  "genres": [
                    {
                      "name": "мультфильм"
                    },
                    {
                      "name": "мюзикл"
                    },
                    {
                      "name": "драма"
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
                      "name": "США"
                    }
                  ],
                  "alternativeName": "The Lion King",
                  "enName": null,
                  "names": [
                    {
                      "name": "Король Лев"
                    },
                    {
                      "name": "The Lion King"
                    },
                    {
                      "name": "Der König der Löwen",
                      "language": "DE",
                      "type": null
                    }
                  ],
                  "shortDescription": "Львенок Симба бросает вызов дяде-убийце. Величественный саундтрек, рисованная анимация и шекспировский размах",
                  "logo": {
                    "url": "https://avatars.mds.yandex.net/get-ott/1672343/2a0000016e044a3db74ffde3e15fc9a558cc/orig"
                  },
                  "watchability": {
                    "items": [
                      {
                        "name": "Okko",
                        "logo": {
                          "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                        },
                        "url": "https://okko.tv/movie/the-lion-king?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                      }
                    ]
                  }
                },
                {
                  "externalId": {
                    "kpHD": "49e57db5137c7ed0829715a09db575f6",
                    "imdb": "tt2380307",
                    "tmdb": 354912
                  },
                  "rating": {
                    "kp": 8.721,
                    "imdb": 8.4,
                    "filmCritics": 8.3,
                    "russianFilmCritics": 94.1176,
                    "await": 97.51
                  },
                  "votes": {
                    "kp": 619348,
                    "imdb": 524413,
                    "filmCritics": 356,
                    "russianFilmCritics": 17,
                    "await": 2830
                  },
                  "movieLength": 105,
                  "id": 679486,
                  "type": "cartoon",
                  "name": "Тайна Коко",
                  "description": "12-летний Мигель живёт в мексиканской деревушке в семье сапожников и тайно мечтает стать музыкантом. Тайно, потому что в его семье музыка считается проклятием. Когда-то его прапрадед оставил жену, прапрабабку Мигеля, ради мечты, которая теперь не даёт спокойно жить и его праправнуку. С тех пор музыкальная тема в семье стала табу. Мигель обнаруживает, что между ним и его любимым певцом Эрнесто де ла Крусом, ныне покойным, существует некая связь. Паренёк отправляется к своему кумиру в Страну Мёртвых, где встречает души предков. Мигель знакомится там с духом-скелетом по имени Гектор, который становится его проводником. Вдвоём они отправляются на поиски де ла Круса.",
                  "year": 2017,
                  "poster": {
                    "url": "https://st.kp.yandex.net/images/film_big/679486.jpg",
                    "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_679486.jpg"
                  },
                  "genres": [
                    {
                      "name": "мультфильм"
                    },
                    {
                      "name": "фэнтези"
                    },
                    {
                      "name": "комедия"
                    },
                    {
                      "name": "приключения"
                    },
                    {
                      "name": "семейный"
                    },
                    {
                      "name": "музыка"
                    }
                  ],
                  "countries": [
                    {
                      "name": "США"
                    }
                  ],
                  "alternativeName": "Coco",
                  "enName": null,
                  "names": [
                    {
                      "name": "Тайна Коко"
                    },
                    {
                      "name": "Coco"
                    },
                    {
                      "name": "โคโค่: วันอลวน วิญญาณอลเวง",
                      "language": "TH",
                      "type": null
                    },
                    {
                      "name": "Coco: Το Γεύμα του Δάντη",
                      "language": "GR",
                      "type": null
                    },
                    {
                      "name": "ΚΟΚΟ: ΤΟ ΓΕΥΜΑ ΤΟΥ ΔΑΝΤΗ",
                      "language": "GR",
                      "type": null
                    },
                    {
                      "name": "COCO: ΤΟ ΓΕΥΜΑ ΤΟΥ ΔΑΝΤΗ",
                      "language": "GR",
                      "type": null
                    },
                    {
                      "name": "寻梦环游记",
                      "language": "CN",
                      "type": null
                    },
                    {
                      "name": "Viva: A Vida é uma Festa",
                      "language": "BR",
                      "type": null
                    },
                    {
                      "name": "玩轉極樂園",
                      "language": "HK",
                      "type": null
                    },
                    {
                      "name": "リメンバー・ミー",
                      "language": "JP",
                      "type": null
                    }
                  ],
                  "shortDescription": "Юный музыкант Мигель попадает в мир мертвых. Трогательная история о любви без границ, получившая два «Оскара»",
                  "logo": {
                    "url": "https://avatars.mds.yandex.net/get-ott/2419418/2a0000016e043a226253ed309d7a01d84b6f/orig"
                  },
                  "watchability": {
                    "items": [
                      {
                        "name": "Okko",
                        "logo": {
                          "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                        },
                        "url": "https://okko.tv/movie/coco?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                      }
                    ]
                  }
                },
                {
                  "externalId": {
                    "kpHD": "471181c2383a244a97fd843cee0f044a",
                    "imdb": "tt0910970",
                    "tmdb": 10681
                  },
                  "rating": {
                    "kp": 8.36,
                    "imdb": 8.4,
                    "filmCritics": 8.6,
                    "russianFilmCritics": 93.3333,
                    "await": 0
                  },
                  "votes": {
                    "kp": 607691,
                    "imdb": 1132401,
                    "filmCritics": 262,
                    "russianFilmCritics": 15,
                    "await": 0
                  },
                  "movieLength": 98,
                  "id": 279102,
                  "type": "cartoon",
                  "name": "ВАЛЛ·И",
                  "description": "Робот ВАЛЛ·И из года в год прилежно трудится на опустевшей Земле, очищая нашу планету от гор мусора, которые оставили после себя улетевшие в космос люди. Он и не представляет, что совсем скоро произойдут невероятные события, благодаря которым он встретит друзей, поднимется к звездам и даже сумеет изменить к лучшему своих бывших хозяев, совсем позабывших родную Землю.",
                  "year": 2008,
                  "poster": {
                    "url": "https://st.kp.yandex.net/images/film_big/279102.jpg",
                    "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_279102.jpg"
                  },
                  "genres": [
                    {
                      "name": "мультфильм"
                    },
                    {
                      "name": "фантастика"
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
                      "name": "США"
                    }
                  ],
                  "alternativeName": "WALL·E",
                  "enName": null,
                  "names": [
                    {
                      "name": "ВАЛЛ·И"
                    },
                    {
                      "name": "WALL·E"
                    },
                    {
                      "name": "월-E",
                      "language": "KR",
                      "type": null
                    },
                    {
                      "name": "ВАЛЛ-И",
                      "language": "RU",
                      "type": null
                    },
                    {
                      "name": "WALL-E",
                      "language": "US",
                      "type": null
                    },
                    {
                      "name": "wall-e",
                      "language": "FR",
                      "type": null
                    },
                    {
                      "name": "VALL-I",
                      "language": "UZ",
                      "type": null
                    },
                    {
                      "name": "Wall-E",
                      "language": "EE",
                      "type": null
                    },
                    {
                      "name": "WALL-E",
                      "language": "BR",
                      "type": null
                    },
                    {
                      "name": "Wall-E",
                      "language": "PT",
                      "type": null
                    },
                    {
                      "name": "וול-E",
                      "language": "IL",
                      "type": null
                    },
                    {
                      "name": "瓦力",
                      "language": "TW",
                      "type": null
                    },
                    {
                      "name": "太空奇兵·威E",
                      "language": "HK",
                      "type": null
                    },
                    {
                      "name": "Wall E",
                      "language": "US",
                      "type": null
                    },
                    {
                      "name": "ვოლ·ი",
                      "language": "GE",
                      "type": null
                    },
                    {
                      "name": "WALL-E",
                      "language": "PL",
                      "type": null
                    },
                    {
                      "name": "WALL•E",
                      "language": "ES",
                      "type": null
                    }
                  ],
                  "shortDescription": "Люди покинули Землю и оставили робота собирать за ними мусор. Экологический шедевр Pixar",
                  "logo": {
                    "url": "https://avatars.mds.yandex.net/get-ott/1672343/2a0000016e4af2e7c9f986c307f1feb96141/orig"
                  },
                  "watchability": {
                    "items": [
                      {
                        "name": "Okko",
                        "logo": {
                          "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                        },
                        "url": "https://okko.tv/movie/walle?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                      }
                    ]
                  }
                },
                {
                  "externalId": {
                    "kpHD": "4bcd6b4c0361350b9fdae16789d4cb36",
                    "imdb": "tt0892769",
                    "tmdb": 10191
                  },
                  "rating": {
                    "kp": 8.222,
                    "imdb": 8.1,
                    "filmCritics": 7.9,
                    "russianFilmCritics": 100,
                    "await": 68.42
                  },
                  "votes": {
                    "kp": 557148,
                    "imdb": 753445,
                    "filmCritics": 214,
                    "russianFilmCritics": 9,
                    "await": 7398
                  },
                  "movieLength": 98,
                  "id": 280172,
                  "type": "cartoon",
                  "name": "Как приручить дракона",
                  "description": "Вы узнаете историю подростка Иккинга, которому не слишком близки традиции его героического племени, много лет ведущего войну с драконами. Мир Иккинга переворачивается с ног на голову, когда он неожиданно встречает дракона Беззубика, который поможет ему и другим викингам увидеть привычный мир с совершенно другой стороны…",
                  "year": 2010,
                  "poster": {
                    "url": "https://st.kp.yandex.net/images/film_big/280172.jpg",
                    "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_280172.jpg"
                  },
                  "genres": [
                    {
                      "name": "мультфильм"
                    },
                    {
                      "name": "фэнтези"
                    },
                    {
                      "name": "комедия"
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
                      "name": "США"
                    }
                  ],
                  "alternativeName": "How to Train Your Dragon",
                  "enName": null,
                  "names": [
                    {
                      "name": "Как приручить дракона"
                    },
                    {
                      "name": "How to Train Your Dragon"
                    }
                  ],
                  "shortDescription": "Сын вождя заводит дружбу с драконом — врагом его племени. История о том, что ум и сочувствие куда важнее силы",
                  "logo": {
                    "url": "https://avatars.mds.yandex.net/get-ott/239697/2a0000017d72bff6884076340156ac462530/orig"
                  },
                  "watchability": {
                    "items": [
                      {
                        "name": "Okko",
                        "logo": {
                          "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                        },
                        "url": "https://okko.tv/movie/how-to-train-your-dragon?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                      },
                      {
                        "name": "Иви",
                        "logo": {
                          "url": "https://avatars.mds.yandex.net/get-ott/2419418/0dfd1724-848f-4725-9160-abc571f41c11/orig"
                        },
                        "url": "https://www.ivi.ru/watch/87203?utm_source=yandex&utm_medium=wizard"
                      },
                      {
                        "name": "PREMIER",
                        "logo": {
                          "url": "https://avatars.mds.yandex.net/get-ott/239697/0f86e907-9531-47e9-87bd-5101a08d4e30/orig"
                        },
                        "url": "https://premier.one/show/17294?utm_source=yandex&utm_medium=yandex_feed_search&utm_campaign=yandex_feed"
                      },
                      {
                        "name": "Wink",
                        "logo": {
                          "url": "https://avatars.mds.yandex.net/get-ott/1672343/54096cbe-cc3b-41c9-8e44-990ebbca8d61/orig"
                        },
                        "url": "https://wink.ru/media_items/100586095?utm_source=yandex&utm_medium=koldunschick&utm_content=name"
                      },
                      {
                        "name": "viju",
                        "logo": {
                          "url": "https://avatars.mds.yandex.net/get-ott/224348/8b10c84b-e1bb-4493-9bc4-6ee56554403a/orig"
                        },
                        "url": "https://viju.ru/filmy/kak-priruchit-drakona?utm_campaign=yandex_content_integration&utm_medium=affiliate&utm_source=yandex"
                      },
                      {
                        "name": "Смотрёшка",
                        "logo": {
                          "url": "https://avatars.mds.yandex.net/get-ott/236744/c88e652e-2eb1-472d-b636-a266364dbf58/orig"
                        },
                        "url": "https://smotreshka.tv/vod/vipplay/619c836cbb003f90030b6698?utm_source=yandex_search&utm_campaign=yandex_feed&utm_term=viju&utm_content=Viju"
                      }
                    ]
                  }
                },
                {
                  "id": 775273,
                  "type": "cartoon",
                  "externalId": {
                    "kpHD": "4c842cbb3f1bc0d7815766097aa88366",
                    "imdb": "tt2948372",
                    "tmdb": 508442
                  },
                  "name": "Душа",
                  "rating": {
                    "kp": 8.377,
                    "imdb": 8,
                    "filmCritics": 8.3,
                    "russianFilmCritics": 77.2727,
                    "await": 96.86
                  },
                  "description": "Уже немолодой школьный учитель музыки Джо Гарднер всю жизнь мечтал выступать на сцене в составе джазового ансамбля. Однажды он успешно проходит прослушивание у легендарной саксофонистки и, возвращаясь домой вне себя от счастья, падает в люк и умирает. Теперь у Джо одна дорога — в Великое После, но он сбегает с идущего в вечность эскалатора и случайно попадает в Великое До. Тут новенькие души обретают себя, и у будущих людей зарождаются увлечения, мечты и интересы. Джо становится наставником упрямой души 22, которая уже много веков не может найти свою искру и отправиться на Землю.",
                  "votes": {
                    "kp": 555469,
                    "imdb": 340493,
                    "filmCritics": 354,
                    "russianFilmCritics": 22,
                    "await": 10942
                  },
                  "year": 2020,
                  "poster": {
                    "url": "https://st.kp.yandex.net/images/film_big/775273.jpg",
                    "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_775273.jpg"
                  },
                  "genres": [
                    {
                      "name": "мультфильм"
                    },
                    {
                      "name": "фэнтези"
                    },
                    {
                      "name": "комедия"
                    },
                    {
                      "name": "приключения"
                    },
                    {
                      "name": "семейный"
                    },
                    {
                      "name": "музыка"
                    }
                  ],
                  "countries": [
                    {
                      "name": "США"
                    }
                  ],
                  "alternativeName": "Soul",
                  "enName": null,
                  "names": [
                    {
                      "name": "Душа"
                    },
                    {
                      "name": "Soul"
                    },
                    {
                      "name": "Själen",
                      "language": "SE",
                      "type": null
                    },
                    {
                      "name": "Sjæl",
                      "language": "DK",
                      "type": null
                    },
                    {
                      "name": "Soul: Uma Aventura com Alma",
                      "language": "BR",
                      "type": null
                    },
                    {
                      "name": "Jiwa",
                      "language": "ID",
                      "type": null
                    },
                    {
                      "name": "روح",
                      "language": "IR",
                      "type": null
                    },
                    {
                      "name": "靈魂奇遇記",
                      "language": "HK",
                      "type": null
                    },
                    {
                      "name": "سول مغامرة ذاتية",
                      "language": "SA",
                      "type": null
                    },
                    {
                      "name": "Disney and Pixar's Soul",
                      "language": "US",
                      "type": "promotional title"
                    }
                  ],
                  "color": "#101010",
                  "movieLength": 106,
                  "shortDescription": "Джазмен хочет сбежать с того света на концерт. Фантазия о призвании и важных мелочах жизни от автора «Вверх»",
                  "logo": {
                    "url": "https://avatars.mds.yandex.net/get-ott/223007/2a00000179e695b1277b8740b5bfcf77a6bf/orig"
                  },
                  "watchability": {
                    "items": [
                      {
                        "name": "Okko",
                        "logo": {
                          "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                        },
                        "url": "https://okko.tv/movie/soul?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                      }
                    ]
                  }
                },
                {
                  "externalId": {
                    "kpHD": "429c63a2e1be0919892f20e72a890bdd",
                    "imdb": "tt2096673",
                    "tmdb": 150540
                  },
                  "rating": {
                    "kp": 8.074,
                    "imdb": 8.1,
                    "filmCritics": 8.9,
                    "russianFilmCritics": 87.5,
                    "await": 94.95
                  },
                  "votes": {
                    "kp": 552964,
                    "imdb": 727906,
                    "filmCritics": 382,
                    "russianFilmCritics": 8,
                    "await": 19067
                  },
                  "movieLength": 95,
                  "id": 645118,
                  "type": "cartoon",
                  "name": "Головоломка",
                  "description": "Райли — обычная 11-летняя школьница, и, как у каждого из нас, ее поведение определяют пять базовых эмоций: Радость, Печаль, Страх, Гнев и Брезгливость. Эмоции живут в сознании девочки и каждый день помогают ей справляться с проблемами, руководя всеми ее поступками. До поры до времени эмоции живут дружно, но вдруг оказывается, что Райли и ее родителям предстоит переезд из небольшого уютного городка в шумный и людный мегаполис. Каждая из эмоций считает, что именно она лучше прочих знает, что нужно делать в этой непростой ситуации, и в голове у девочки наступает полная неразбериха. Чтобы наладить жизнь в большом городе, освоиться в новой школе и подружиться с одноклассниками, эмоциям Райли предстоит снова научиться работать сообща.",
                  "year": 2015,
                  "poster": {
                    "url": "https://st.kp.yandex.net/images/film_big/645118.jpg",
                    "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_645118.jpg"
                  },
                  "genres": [
                    {
                      "name": "мультфильм"
                    },
                    {
                      "name": "семейный"
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
                  "alternativeName": "Inside Out",
                  "enName": null,
                  "names": [
                    {
                      "name": "Головоломка"
                    },
                    {
                      "name": "Inside Out"
                    }
                  ],
                  "shortDescription": "Пять человеческих эмоций должны договориться и помочь девочке справиться с собой. «Оскар» за лучший мультфильм",
                  "logo": {
                    "url": "https://avatars.mds.yandex.net/get-ott/224348/2a00000178cac49aa0c6e467653242bb4da5/orig"
                  },
                  "watchability": {
                    "items": [
                      {
                        "name": "Okko",
                        "logo": {
                          "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                        },
                        "url": "https://okko.tv/movie/inside-out-60097?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                      }
                    ]
                  }
                },
                {
                  "externalId": {
                    "kpHD": "41ed3fb933ffec588508c40b6297d6a4",
                    "imdb": "tt0216434",
                    "tmdb": 72215
                  },
                  "rating": {
                    "kp": 9.196,
                    "imdb": 8.4,
                    "filmCritics": 0,
                    "russianFilmCritics": 0,
                    "await": 0
                  },
                  "votes": {
                    "kp": 519086,
                    "imdb": 3836,
                    "filmCritics": 0,
                    "russianFilmCritics": 0,
                    "await": 0
                  },
                  "movieLength": 10,
                  "id": 45319,
                  "type": "cartoon",
                  "name": "Жил-был пёс",
                  "description": "Жил-был пёс. Верно служил, но выгнали его по старости. И решил он повеситься, да повстречал в лесу такого же старого волка...",
                  "year": 1982,
                  "poster": {
                    "url": "https://st.kp.yandex.net/images/film_big/45319.jpg",
                    "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_45319.jpg"
                  },
                  "genres": [
                    {
                      "name": "мультфильм"
                    },
                    {
                      "name": "комедия"
                    },
                    {
                      "name": "короткометражка"
                    },
                    {
                      "name": "семейный"
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
                      "name": "Жил-был пёс"
                    },
                    {
                      "name": "Zhil-Byl Pyos",
                      "language": "RU",
                      "type": "Translit"
                    },
                    {
                      "name": "Once Upon a Dog",
                      "language": "US",
                      "type": null
                    },
                    {
                      "name": "Жил был пёс",
                      "language": "RU",
                      "type": null
                    },
                    {
                      "name": "Жил был пес",
                      "language": "RU",
                      "type": null
                    },
                    {
                      "name": "There Once Was a Dog",
                      "language": "GB",
                      "type": null
                    }
                  ],
                  "shortDescription": "Волк помогает старому псу вернуться к людям. Душевный мультфильм, подаривший народу крылатую фразу «Щас спою»",
                  "logo": {
                    "url": "https://avatars.mds.yandex.net/get-ott/212840/2a000001771afbbd3a3348a0dca0adbf9945/orig"
                  },
                  "watchability": {
                    "items": [
                      {
                        "name": "PREMIER",
                        "logo": {
                          "url": "https://avatars.mds.yandex.net/get-ott/239697/0f86e907-9531-47e9-87bd-5101a08d4e30/orig"
                        },
                        "url": "https://premier.one/show/11128?utm_source=yandex&utm_medium=yandex_feed_search&utm_campaign=yandex_feed"
                      },
                      {
                        "name": "24ТВ",
                        "logo": {
                          "url": "https://avatars.mds.yandex.net/get-ott/2439731/85e83b8d-1159-4781-bad5-ce0a809b3843/orig"
                        },
                        "url": "https://24h.tv/contents/1982-zhil-byl-pes-546388376450761303"
                      }
                    ]
                  }
                }
              ],
        }
    }

    componentDidMount = async () => {
        // await this.importCartoonsOnly()
    }

    importCartoonsOnly = async () => {

        let headers = {
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': apiKinopoisk,
            }
        }

        const response = await axios.get('https://api.kinopoisk.dev/v1/movie?page=1&limit=10&type=cartoon', headers);
        console.log('Function response:', response.data.docs);
        this.setState({ arrOfCartoonsOnly: response.data.docs })
        console.log(this.state.arrOfCartoonsOnly);
    }




    render() {
        // console.log(this.state.arrOfCartoonsOnly);
        return (
            <div className="cartoonsOnly">
                <h2>Мультфильмы</h2>
                <div className="cartoons-only-container">

                    <div className="slider-inner">
                        <div className="slides">
                            {this.state.arrOfCartoonsOnly.map((obj, index) => {
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

export default CartoonsOnly