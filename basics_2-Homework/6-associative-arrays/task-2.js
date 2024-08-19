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
const arrOfObjects = [];

// преобразуем массив массивов в массив объектов
for (let i = 0; i < messages.length; i++) {
  const obj = {};
  obj.author = messages[i][0];
  obj.message = messages[i][1];

  arrOfObjects.push(obj);
}

// распечатаем сообщения (author: message)
arrOfObjects.forEach(elem => {
  console.log(`${elem.author}: ${elem.message}`);
});
