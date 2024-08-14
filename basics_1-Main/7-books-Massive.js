let books = [
  ['b1', 'История земли', 'Филип Фрай', 946, 16],
  ['b2', 'Моя жизнь...', 'Доктор Джон Зоидберг', 731, 2],
  /* ... */
];

for (let i = 0; i < books.length; ++i) {
  console.log('ID: ' + books[i][0]);     // ID: b1
  console.log('Автор: ' + books[i][2]);  // Автор: Филип Фрай
  console.log('Книга: ' + books[i][1]);  // Книга: История земли
  console.log('Цена: ' + books[i][3]);   // Цена: 946
  console.log('');
}
