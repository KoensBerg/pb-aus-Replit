const books = [
  'А. Азимов, «Я, робот»',
  'С. В. Лукьяненко, «Ночной дозор»',
  'А. Н. и Б. Н. Стругацкие, «Обитаемый остров»',
  'Рэй Брэдберри, «451 градус по Фаренгейту»',
  'Д. Симмонс, «Гиперион»',
  'Д. Симмонс, «Закат Гипериона»',
  'Р. Желязны, «Девять принцев Амбера»',
  'А. Зорич, «Время московское»'
];
console.log(books);
console.log('\n');

let htmlCode = `<h1>Библиотека фантастики</h1>`;
htmlCode += `\n<div class="booktitle">${books[0]}</div>`;
htmlCode += `\n<div class="booktitle">${books[1]}</div>`;
htmlCode += `\n<div class="booktitle">${books[2]}</div>`;
htmlCode += `\n<div class="booktitle">${books[3]}</div>`;
htmlCode += `\n<div class="booktitle">${books[4]}</div>`;
htmlCode += `\n<div class="booktitle">${books[5]}</div>`;
htmlCode += `\n<div class="booktitle">${books[6]}</div>`;
htmlCode += `\n<div class="booktitle">${books[7]}</div>`;

console.log(htmlCode);
