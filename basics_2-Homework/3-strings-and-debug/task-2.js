// определим переменные
let username = '';
let accountStatus = '';
let accountStatusRu = '';
let cashbackPercentage = 0;

// подставим тестовые значения
username = 'Leo_Tolstoy';
accountStatus = '';

// вычислим статус и размер кэшбэка
switch (accountStatus) {
  case 'extended':
    accountStatusRu = 'улучшенный';
    cashbackPercentage = 15;
    break;
  case 'premium':
    accountStatusRu = 'премиум';
    cashbackPercentage = 20;
    break;
  case 'vip':
    accountStatusRu = 'вип';
    cashbackPercentage = 30;
    break;
  default:
    accountStatus = 'regular';
    accountStatusRu = 'обычный';
    cashbackPercentage = 10;
    break;
}

console.log(`${username} | ${accountStatusRu} аккаунт`);
console.log(`Вы получаете ${cashbackPercentage}% с покупок на бонусный счёт`);
