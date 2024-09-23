// - - - - - - - - - - - -
// Задача 1 - Мессенджер
// - - - - - - - - - - - -
const messages = [];

// добавим сообщения в мессенджер
messages[0] = 'Привет! Есть ли новости?';
messages[1] = ':)';
messages[2] = 'Начал работать над заданием.';
messages[messages.length] = 'Ленюсь.';
messages[messages.length] = 'Но дело движется.';

// выведем диалог на печать (метод 1)
for (let message of messages) {
  console.log(`— ${message}`);
}
