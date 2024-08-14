// создадим объект с книгой
let book = {
  name: 'Мастер и Маргарита',
  author: 'Михаил Булгаков',
  chapters: ['Глава 1', 'Глава 2', 'Глава 3', 'Глава 4', 'Глава 5',],
  pagesCount: 600,
  price: 1200,
}

// выведем название книги и имя автора
console.log(book.author + ': «' + book.name + '»');
console.log('');

// выведем читаемые главы
for (let i = 0; i < book.chapters.length; ++i) {
  console.log('Читаем: ' + book.chapters[i]);
}
console.log('');

// выведем только чётные главы
console.log('Только чётные главы:');
for (let i = 0; i < book.chapters.length; ++i) {
  if (i % 2) {
    console.log('• ' + book.chapters[i]);
  }
}
console.log('');

// выведем только нечётные главы
console.log('Только нечётные главы:');
for (let i = 0; i < book.chapters.length; ++i) {
  if (i % 2 === 0) {
    console.log('• ' + book.chapters[i]);
  }
}
console.log('');

// главы в обратном порядке
console.log('В обратном порядке:');
for (let i = book.chapters.length; i > 0; i--) {
  console.log('• ' + book.chapters[i-1]);
}
console.log('');

// преобразуем часть объекта в массив
console.log('Преобразуем books.chapters в отдельный массив');
let chapters = book.chapters;
console.log(chapters);
console.log('');

// выведем главы
console.log('Выведем главы, используя массив chapters');
for (let i = 0; i < chapters.length; ++i) {
  console.log('• ' + chapters[i]);
}
