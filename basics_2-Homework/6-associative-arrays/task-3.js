// - - - - - - - - - - - - - -
// #3 - 
// - - - - - - - - - - - - - -
const user = {
  name: 'Лев Толстой',
  login: 'leo_tolstoy',
  reputation: 97,
  total: 900,
};

// добавим в объект 'user' список чатов
user.chats = {};

// добавим чат с мамой
user.chats.mama = [
  { author: "mama", text: "Ты покушал?" },
  { author: "mama", text: "Почему не отвечаешь?" },
  { author: "вы", text: "Покушал, мам" },
]

// добавим чат с женой
user.chats.wife = [
  {author: "вы", text: "Устал и загрустил"},
  {author: "вы", text: "Ленюсь"},
  {author: "wife", text: "zzz"},
]

// напечатаем все сообщения из чата с женой
user.chats.wife.forEach(elem => console.log(`${elem.author}: ${elem.text}`));
