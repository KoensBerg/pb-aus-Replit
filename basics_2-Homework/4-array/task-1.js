// - - - - - - - - - - - -
// Задача 1 - Мессенджер
// - - - - - - - - - - - -
let messages = [];

// пушим сообщения в мессенджер
messages.push('Привет! Есть ли новости?');
messages.push(':)');
messages.push('Начал работать над заданием.');
messages.push('Ленюсь.');
messages.push('Но дело движется.');

// выводим диалог на печать (метод 1)
for (let message of messages) {
  console.log(`— ${message}`);
}
