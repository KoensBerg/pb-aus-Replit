// Исходный мессенджер
let messages = [
  'Привет! Есть ли новости?',
  ':)',
  'Начал работать над заданием.',
  'Ленюсь.',
  'Но дело движется.'
];

// Искомое сообщение и замена
let searching = 'Ленюсь.';
let replacement = 'Стараюсь.';

// Находим сообщение и заменяем его
let idx = messages.indexOf(searching);
messages[idx] = replacement;

// Выводим диалог на печать
for (let message of messages) {
  console.log(`— ${message}`);
}
