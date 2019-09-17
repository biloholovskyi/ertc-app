const store = [
  {
    name: "notifanction",
    arr: [
      {id: "1", icon: "import", title: "Обновления условий валидации", message: "Уважаемая Carlos, ознакомтесь с обновл..."},
      {id: "2", icon: "warning", title: "Валидация 125m^2^ прошла успешно", message: "Уважаемая Carlos, ваша валидция прошл ..."},
      {id: "3", icon: "downloud", title: "Зачисление 240.00 ERTC", message: "Вы получили перевод"},
      {id: "4", icon: "import", title: "Обновления условий валидации", message: "Уважаемая Carlos, ознакомтесь с обновл..."},
      {id: "5", icon: "downloud", title: "Зачисление 240.00 ERTC", message: "Вы получили перевод"},
      {id: "6", icon: "confirm", title: "Перевод 100.00 ERTC", message: "Ваш перевод пользователю Tina Laurence..."}
    ]
  },
  {
    name: "more",
    arr: [
      {id: "1", icon: "pen", title: "Редактировать профиль"},
      {id: "2", icon: "notifanction", title: "Настройка уведомлений"},
      {id: "3", icon: "import", title: "О ERTC"},
      {id: "4", icon: "shild", title: "Политика конфиденциальности"},
      {id: "5", icon: "man", title: "Пользовательское соглашение"}
    ]
  },
  {
    name: "validation",
    month: [
      {
        id: "1",
        number: 9,
        name: "Сентябрь",
        list: [
          {id: "1", count: "45m^2^", date: "12 Сентября 2019, 20:28", status: "moderation", message: "Lorem ipsum dolor sit amet, consectetur adipiscing"},
          {id: "2", count: "18m^2^", date: "10 Сентября 2019, 18:31", status: "confirmed", message: "Lorem ipsum dolor sit amet, consectetur adipiscing"},
          {id: "3", count: "115m^2^", date: "8 Сентября 2019, 16:19", status: "rejected", message: "Lorem ipsum dolor sit amet, consectetur adipiscing"}
        ]
      },
      {
        id: "2",
        number: 8,
        name: "Июль",
        list: [
          {id: "1", count: "125m^2^", date: "29 Июля 2019, 22:38", status: "confirmed", message: "Lorem ipsum dolor sit amet, consectetur adipiscing"},
          {id: "2", count: "118m^2^", date: "18 Июля 2019, 10:35", status: "confirmed", message: "Lorem ipsum dolor sit amet, consectetur adipiscing"},
          {id: "3", count: "11m^2^", date: "17 Июля 2019, 15:49", status: "rejected", message: "Lorem ipsum dolor sit amet, consectetur adipiscing"}
        ]
      },
      {
        id: "3",
        number: 7,
        name: "Июнь",
        list: [
          {id: "1", count: "12m^2^", date: "20 Июня 2019, 16:33", status: "confirmed", message: "Lorem ipsum dolor sit amet, consectetur adipiscing"},
          {id: "2", count: "128m^2^", date: "16 Июня 2019, 11:27", status: "confirmed", message: "Lorem ipsum dolor sit amet, consectetur adipiscing"},
          {id: "3", count: "111m^2^", date: "17 Июня 2019, 10:35", status: "confirmed", message: "Lorem ipsum dolor sit amet, consectetur adipiscing"}
        ]
      }
    ]
  },
  {
    name: "wallet",
    arr: [
      {
        id: "1",
        name: "ERTCoin",
        count: "1’450",
        actions: [
          {
            id: "1",
            name: "Tina Laurence",
            desc: "Перевод средств",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR581YPwylOoqQ15f6o1Nfk2prdMbmyJvnbMg77zeMznv5ofvIYnQ",
            count: "-80.00"
          },
          {
            id: "2",
            name: "ebay.com",
            desc: "Оплата товаров",
            avatar: "http://www.pngnames.com/files/4/EBay-Logo-PNG-Free-Background.png",
            count: "-280.00"
          },
          {
            id: "3",
            name: "Starbucks",
            desc: "Оплата услуг",
            avatar: "https://qph.fs.quoracdn.net/main-qimg-111af2681975b2df999afa985218bee1-c",
            count: "-80.00"
          },
          {
            id: "4",
            name: "Райффайзенбанк",
            desc: "Вывод средств",
            avatar: "https://www.fantastika-nn.ru/upload/iblock/ebb/raif.jpg",
            count: "-10.00"
          },
          {
            id: "5",
            name: "Takeshi Ito",
            desc: "Перевод средств",
            avatar: "https://www.kinonews.ru/insimgs/2018/persimg/persimg35375.jpg",
            count: "+240.00"
          },
          {
            id: "6",
            name: "Takeshi Kovacs",
            desc: "Оплата товаров",
            avatar: "https://66.media.tumblr.com/eebd0deab9f058ee413cefc6fe5b7854/tumblr_pd02djBpUe1v24kv4o8_250.png",
            count: "-150.00"
          },
          {
            id: "7",
            name: "сбербанк",
            desc: "Вывод Средств",
            avatar: "https://is2-ssl.mzstatic.com/image/thumb/Purple113/v4/b5/40/ae/b540ae01-e3df-46ac-285b-0607edf74aa2/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-7.png/246x0w.jpg",
            count: "-1500.00"
          },
          {
            id: "8",
            name: "Starbucks",
            desc: "Оплата услуг",
            avatar: "https://qph.fs.quoracdn.net/main-qimg-111af2681975b2df999afa985218bee1-c",
            count: "-60.00"
          },
          {
            id: "9",
            name: "Райффайзенбанк",
            desc: "Вывод средств",
            avatar: "https://www.fantastika-nn.ru/upload/iblock/ebb/raif.jpg",
            count: "-100.00"
          },
          {
            id: "10",
            name: "Takeshi Ito",
            desc: "Перевод средств",
            avatar: "https://www.kinonews.ru/insimgs/2018/persimg/persimg35375.jpg",
            count: "+2400.00"
          }
        ],
        coin: [
          {id: "198731", idValid: "15.05.2019", coordination: "46.484380,30.739433"},
          {id: "198732", idValid: "18.05.2019", coordination: "46.484370,30.739433"},
          {id: "198733", idValid: "18.05.2019", coordination: "46.484360,30.739433"},
          {id: "198734", idValid: "20.05.2019", coordination: "46.484350,30.739433"},
          {id: "198735", idValid: "21.05.2019", coordination: "46.484350,30.739433"},
          {id: "198736", idValid: "21.05.2019", coordination: "46.484350,30.739433"},
          {id: "198737", idValid: "22.05.2019", coordination: "46.484350,30.739433"},
          {id: "198738", idValid: "24.05.2019", coordination: "46.484350,30.739433"},
          {id: "198739", idValid: "25.05.2019", coordination: "46.484350,30.739433"},
          {id: "198740", idValid: "26.05.2019", coordination: "46.484350,30.739433"},
          {id: "198741", idValid: "26.05.2019", coordination: "46.484350,30.739433"},
          {id: "198742", idValid: "27.05.2019", coordination: "46.484350,30.739433"},
          {id: "198743", idValid: "28.05.2019", coordination: "46.484350,30.739433"},
          {id: "198744", idValid: "01.06.2019", coordination: "46.484350,30.739433"},
          {id: "198745", idValid: "08.06.2019", coordination: "46.484350,30.739433"},
          {id: "198746", idValid: "10.06.2019", coordination: "46.484350,30.739433"},
          {id: "198747", idValid: "15.06.2019", coordination: "46.484350,30.739433"},
          {id: "198748", idValid: "15.06.2019", coordination: "46.484350,30.739433"},
          {id: "198749", idValid: "20.06.2019", coordination: "46.484350,30.739433"},
          {id: "198750", idValid: "23.06.2019", coordination: "46.484350,30.739433"},
          {id: "198751", idValid: "24.06.2019", coordination: "46.484350,30.739433"},
          {id: "198752", idValid: "25.06.2019", coordination: "46.484350,30.739433"},
          {id: "198753", idValid: "28.06.2019", coordination: "46.484350,30.739433"},
          {id: "198754", idValid: "30.06.2019", coordination: "46.484350,30.739433"},
          {id: "198755", idValid: "04.07.2019", coordination: "46.484350,30.739433"},
          {id: "198756", idValid: "05.07.2019", coordination: "46.484350,30.739433"},
          {id: "198757", idValid: "07.07.2019", coordination: "46.484350,30.739433"},
          {id: "198758", idValid: "08.07.2019", coordination: "46.484350,30.739433"},
          {id: "198759", idValid: "10.07.2019", coordination: "46.484350,30.739433"},
          {id: "198760", idValid: "11.07.2019", coordination: "46.484350,30.739433"},
          {id: "198761", idValid: "12.07.2019", coordination: "46.484350,30.739433"},
          {id: "198762", idValid: "13.07.2019", coordination: "46.484350,30.739433"},
          {id: "198763", idValid: "15.07.2019", coordination: "46.484350,30.739433"},
          {id: "198764", idValid: "15.07.2019", coordination: "46.484350,30.739433"},
          {id: "198765", idValid: "15.07.2019", coordination: "46.484350,30.739433"},
          {id: "198766", idValid: "15.07.2019", coordination: "46.484350,30.739433"},
          {id: "198767", idValid: "16.07.2019", coordination: "46.484350,30.739433"},
          {id: "198768", idValid: "19.07.2019", coordination: "46.484350,30.739433"},
          {id: "198769", idValid: "20.07.2019", coordination: "46.484350,30.739433"},
          {id: "198770", idValid: "22.07.2019", coordination: "46.484350,30.739433"},
          {id: "198771", idValid: "22.07.2019", coordination: "46.484350,30.739433"},
          {id: "198772", idValid: "23.07.2019", coordination: "46.484350,30.739433"}
        ]
      },
      {
        id: "2",
        name: "EURO",
        count: "2’389.87",
        actions: [
          {
            id: "1",
            name: "Takeshi Kovacs",
            desc: "Оплата товаров",
            avatar: "https://66.media.tumblr.com/eebd0deab9f058ee413cefc6fe5b7854/tumblr_pd02djBpUe1v24kv4o8_250.png",
            count: "-120.00"
          },
          {
            id: "2",
            name: "сбербанк",
            desc: "Вывод Средств",
            avatar: "https://is2-ssl.mzstatic.com/image/thumb/Purple113/v4/b5/40/ae/b540ae01-e3df-46ac-285b-0607edf74aa2/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-7.png/246x0w.jpg",
            count: "-500.00"
          },
          {
            id: "3",
            name: "Starbucks",
            desc: "Оплата услуг",
            avatar: "https://qph.fs.quoracdn.net/main-qimg-111af2681975b2df999afa985218bee1-c",
            count: "-60.00"
          },
          {
            id: "4",
            name: "Райффайзенбанк",
            desc: "Вывод средств",
            avatar: "https://www.fantastika-nn.ru/upload/iblock/ebb/raif.jpg",
            count: "-10.00"
          },
          {
            id: "5",
            name: "Takeshi Ito",
            desc: "Перевод средств",
            avatar: "https://www.kinonews.ru/insimgs/2018/persimg/persimg35375.jpg",
            count: "+240.00"
          },
          {
            id: "6",
            name: "Takeshi Ito",
            desc: "Перевод средств",
            avatar: "https://www.kinonews.ru/insimgs/2018/persimg/persimg35375.jpg",
            count: "+240.00"
          },
          {
            id: "7",
            name: "Takeshi Ito",
            desc: "Перевод средств",
            avatar: "https://www.kinonews.ru/insimgs/2018/persimg/persimg35375.jpg",
            count: "+240.00"
          },
          {
            id: "8",
            name: "Takeshi Ito",
            desc: "Перевод средств",
            avatar: "https://www.kinonews.ru/insimgs/2018/persimg/persimg35375.jpg",
            count: "+240.00"
          },
          {
            id: "9",
            name: "Takeshi Ito",
            desc: "Перевод средств",
            avatar: "https://www.kinonews.ru/insimgs/2018/persimg/persimg35375.jpg",
            count: "+240.00"
          },
          {
            id: "10",
            name: "Takeshi Ito",
            desc: "Перевод средств",
            avatar: "https://www.kinonews.ru/insimgs/2018/persimg/persimg35375.jpg",
            count: "+240.00"
          }
        ],
        coin: [
          {id: "198773", idValid: "24.07.2019", coordination: "46.484380,30.739433"},
          {id: "198774", idValid: "25.07.2019", coordination: "46.484370,30.739433"},
          {id: "198775", idValid: "03.08.2019", coordination: "46.484360,30.739433"},
          {id: "198776", idValid: "05.08.2019", coordination: "46.484350,30.739433"},
          {id: "198777", idValid: "05.08.2019", coordination: "46.484350,30.739433"},
          {id: "198778", idValid: "06.08.2019", coordination: "46.484350,30.739433"},
          {id: "198779", idValid: "07.08.2019", coordination: "46.484350,30.739433"},
          {id: "198780", idValid: "08.08.2019", coordination: "46.484350,30.739433"},
          {id: "198781", idValid: "10.08.2019", coordination: "46.484350,30.739433"},
          {id: "198782", idValid: "11.08.2019", coordination: "46.484350,30.739433"},
          {id: "198783", idValid: "13.08.2019", coordination: "46.484350,30.739433"},
          {id: "198784", idValid: "13.08.2019", coordination: "46.484350,30.739433"},
          {id: "198785", idValid: "14.08.2019", coordination: "46.484350,30.739433"},
          {id: "198786", idValid: "14.08.2019", coordination: "46.484350,30.739433"},
          {id: "198787", idValid: "15.08.2019", coordination: "46.484350,30.739433"},
          {id: "198788", idValid: "15.08.2019", coordination: "46.484350,30.739433"},
          {id: "198789", idValid: "21.08.2019", coordination: "46.484350,30.739433"},
          {id: "198790", idValid: "21.08.2019", coordination: "46.484350,30.739433"},
          {id: "198791", idValid: "21.08.2019", coordination: "46.484350,30.739433"},
          {id: "198792", idValid: "21.08.2019", coordination: "46.484350,30.739433"},
          {id: "198793", idValid: "21.08.2019", coordination: "46.484350,30.739433"},
          {id: "198794", idValid: "23.08.2019", coordination: "46.484350,30.739433"},
          {id: "198795", idValid: "24.08.2019", coordination: "46.484350,30.739433"},
          {id: "198796", idValid: "25.08.2019", coordination: "46.484350,30.739433"},
          {id: "198797", idValid: "25.08.2019", coordination: "46.484350,30.739433"},
          {id: "198798", idValid: "25.08.2019", coordination: "46.484350,30.739433"},
          {id: "198799", idValid: "27.08.2019", coordination: "46.484350,30.739433"},
          {id: "198100", idValid: "29.08.2019", coordination: "46.484350,30.739433"},
          {id: "198101", idValid: "29.08.2019", coordination: "46.484350,30.739433"},
          {id: "198102", idValid: "29.08.2019", coordination: "46.484350,30.739433"},
          {id: "198103", idValid: "01.09.2019", coordination: "46.484350,30.739433"},
          {id: "198104", idValid: "05.09.2019", coordination: "46.484350,30.739433"},
          {id: "198105", idValid: "05.09.2019", coordination: "46.484350,30.739433"},
          {id: "198106", idValid: "09.09.2019", coordination: "46.484350,30.739433"},
          {id: "198107", idValid: "10.09.2019", coordination: "46.484350,30.739433"},
          {id: "198108", idValid: "13.09.2019", coordination: "46.484350,30.739433"},
          {id: "198109", idValid: "13.09.2019", coordination: "46.484350,30.739433"},
          {id: "198110", idValid: "15.09.2019", coordination: "46.484350,30.739433"},
          {id: "198111", idValid: "15.09.2019", coordination: "46.484350,30.739433"},
          {id: "198112", idValid: "15.09.2019", coordination: "46.484350,30.739433"},
          {id: "198113", idValid: "16.09.2019", coordination: "46.484350,30.739433"},
          {id: "198114", idValid: "17.09.2019", coordination: "46.484350,30.739433"}
        ]
      }
    ]
  }
];

export default store;