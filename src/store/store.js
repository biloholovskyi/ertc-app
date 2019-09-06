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
      {id: "1", name: "ertc", count: "1’450.00"},
      {id: "2", name: "euro", count: "2’389.87"}
    ]
  }
];

export default store;