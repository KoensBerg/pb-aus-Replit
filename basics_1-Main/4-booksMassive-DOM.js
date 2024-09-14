// - - - - - - - - - - - - - - - - - - - - - -
// Создадим библиотеку в форме DOM-элемента
// - - - - - - - - - - - - - - - - - - - - - -
const showLib = document.getElementById('show-lib');

// Функция упаковывает книги в список <li>
function createLibrary(books) {
  let library = `<ul>\n`;

  books.forEach(item => {
    library += `  <li>${item[0]} – «${item[1]}»</li>\n`;
  });

  library += `</ul>`;

  return library;
}

// Пример библиотеки
const books = [
  ['Азек Азимов', 'Я, робот'],
  ['Аркадий и Борис Стругацкие', 'Трудно быть богом'],
  ['Сергей Лукьяненко', 'Дневной дозор'],
  ['Рей Бредбери', '451° по Фаренгейту'],
  ['Василий Головачёв', 'Чёрный человек'],
  ['Александр Беляев', 'Человек-амфибия'],
]

// Клик на кнопку создаёт html-библиотеку
showLib.onclick = () => {
  const libElem = document.createElement('div');
  libElem.innerHTML = createLibrary(books);
  document.body.append(libElem);

  console.log(libElem);
};
