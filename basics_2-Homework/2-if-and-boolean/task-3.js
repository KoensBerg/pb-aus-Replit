// Объявим переменные
let bonusBalance = 0; // бонусный баланс
let orderAmount = 0; // сумма заказа
let purсhasesPerThisMonth = 0; // количество покупок в этом месяце

let standartPercentage = 10; // стандартное начисление процентов
let increasedPercentage = 20; // повышенное начисление процентов
let additionalPercentage = 5; // добавка за частые покупки в процентах
let totalPercentage = 0; // итоговое начисление в процентах

// Тестовые значения
bonusBalance = 500;
orderAmount = 3000;
purсhasesPerThisMonth = 2; // вторая покупка в этом месяце

// Рассчитаем итоговый процент
if (bonusBalance > 5000) {
  totalPercentage = increasedPercentage;
} else {
  totalPercentage = standartPercentage;
}

if (purсhasesPerThisMonth > 1) {
  totalPercentage += additionalPercentage;
}

console.log(`Процент от покупки: ${totalPercentage}`);
