// - - - - - - - - - - - - - - - - -
// #2 - Вносим изменения в переписку
// - - - - - - - - - - - - - - - - -
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

// выводим диалог на печать (метод 2)
for (let position in messages) {
  console.log(`— ${messages[position]}`);
}
