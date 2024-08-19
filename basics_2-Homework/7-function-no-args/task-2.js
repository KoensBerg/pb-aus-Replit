// - - - - - - - - - - - - - - - - -
// #2 - Функция для печати сообщений
// - - - - - - - - - - - - - - - - -
const user = {
  name: "Иван Иванов",
  login: "killer504",
  reputation: 97,
  messages: [
    {from: "administrator", text: "Вы получили предупреждение за публикацию рекламы на форуме"},
    {from: "Петр", text: "Собираем встречу в субботу в 19:00. Придёшь?"},
    {from: "administrator", text: "Ваш рейтинг был повышен пользователем DonkeyKong"},
    {from: "administrator", text: "Ваш рейтинг был повышен пользователем Netologist"},
    {from: "Brian Kerninghan", text: "hello, world"}
  ]
};

// Функция для печати сообщений
function printMessages() {
  console.log(`Всего сообщений: ${user.messages.length}`);

  user.messages.forEach(elem => {
    console.log(`${elem.from}: ${elem.text}`);
  });
}

// печатаем сообщения
printMessages();
