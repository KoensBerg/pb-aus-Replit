// исходный мессенджер
let messages = [
  'Привет! Есть ли новости?',
  ':)',
  'Начал работать над заданием.',
  'Ленюсь.',
  'Но дело движется.'
];

// автоматизируем поиск и замену
let searching = 'Ленюсь.';
let replacement = 'Стараюсь.';

let idx = messages.indexOf(searching);
messages[idx] = replacement;

// выводим диалог на печать
for (let message of messages) {
  console.log(`— ${message}`);
}
