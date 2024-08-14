// используем rest-оператор
function printElements(a, b, c, ...elements) {
  console.log(a, b, c, elements);
  console.log(elements);
  console.log(...elements);
}

printElements(11, 33, 74, 210, 440, 4550);
