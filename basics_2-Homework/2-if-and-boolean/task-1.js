let userName = '';
let userBalance = 0;

userName = 'Vova';
userBalance = 90;

if (userName === 'admin') {
  console.log('администратор');
} else if (!userName) {
  console.log('гость');
} else if (userBalance > 5000) {
  console.log('Вип-клиент');
} else if (userBalance > 1000) {
  console.log('Постоянный покупатель');
} else {
  console.log('Обычный покупатель');
}
