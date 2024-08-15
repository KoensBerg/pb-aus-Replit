let userName, userBalance;

userName = 'Vova';
userBalance = 20;

if (userName === 'admin') {
  console.log('Администратор');
} else if (userName === '') {
  console.log('Гость');
} else if (userBalance > 5000) {
  console.log('ВИП-клиент');
} else if (userBalance > 1000) {
  console.log('Постоянный покупатель');
} else {
  console.log('Конь в пальто');
}
