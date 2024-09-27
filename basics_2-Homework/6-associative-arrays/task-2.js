// - - - - - - - - - - - - - - - - - - - - - - - - - -
// #2 - Преобразуем массив массивов в массив объектов
// - - - - - - - - - - - - - - - - - - - - - - - - - -
const messages = [
  [ "zloy-zloy", "Мы с Алешей сегодня на иксбоксе рубились, потом в маке поели, потом ему новый телефон купили, и два часа с горок в Нескучном саду катались."],
  ["zloy-zloy", "У Алеши завтра день рождения."],
  ["zloy-zloy", "Он мой дед. Ему будет 81 год."],
  ["Вы", "LOL"]
];

// создадим пустой массив
const chat = [];

// преобразуем массив массивов в массив объектов
messages.forEach(item => {
  const obj = { author: item[0], text: item[1] };
  chat.push(obj);
});

// распечатаем сообщения (author: message)
chat.forEach(item => {
  console.log(`${item.author}: ${item.text}`);
});
