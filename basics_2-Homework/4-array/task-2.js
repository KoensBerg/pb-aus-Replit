// исходный мессенджер
let messages = [
  'Привет! Есть ли новости?',
  ':)',
  'Начал работать над заданием.',
  'Ленюсь.',
  'Но дело движется.',
];

// вносим изменения
messages.push('Готово!');
let idx = messages.indexOf('Ленюсь.');
messages[idx] = 'Стараюсь.';
messages.splice(1, 1);

// выводим диалог на печать
for (let message of messages) {
  console.log(`— ${message}`);
}
