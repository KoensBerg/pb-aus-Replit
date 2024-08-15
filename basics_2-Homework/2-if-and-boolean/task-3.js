let bonusBalance, orderAmount, purchasesPerMonth;

let standartPercent = 10; // стандартное начисление процентов
let elevatedPercent = 20; // повышенное начисление процентов
let bonusForFrequentPurchases = 5; // добавка за частые покупки

bonusBalance = 600; // на балансе
orderAmount = 3000; // сумма заказа
purchasesPerMonth = 2; // покупка за месяц

let percent = standartPercent; // процент за текущую покупку

if (bonusBalance > 5000) {
  percent = elevatedPercent;
}

if (purchasesPerMonth > 1) {
  percent += bonusForFrequentPurchases;
}

console.log(`Процент от покупки: ${percent}`);
