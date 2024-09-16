// - - - - - - - - - - - - - - -
// Все три задачи (сент. 2024)
// - - - - - - - - - - - - - - -
let username;
let bonusBalance;

username = 'Leo Tolstoy';
bonusBalance = 131;

console.log('Пользователь: ' + username);
console.log('Начальный баланс: ' + bonusBalance);

// - - - - - - - - - - - - - - - - - - - -

let pointsForPurchase = 50; // баллы за каждую покупку
let pointsBurningEveryDay = 3 // ежедневно сгорают

let purhcasesPerDay = 0.5; // покупок каждый день
let totalDays = 10; // всего дней

let totalPoinstBurned = pointsBurningEveryDay * totalDays; // всего сгорело баллов
let totalPointsAdded = pointsForPurchase * purhcasesPerDay * totalDays // начислено

bonusBalance += totalPointsAdded - totalPoinstBurned;

console.log(`Итоговый баланс через ${totalDays} дней: ${bonusBalance}`);


// - - - - - - - - - - - - - - - - - - - -

let marshmallowPerKilo = 80; // стоимость кг пастилы

let moneyLeft = bonusBalance % marshmallowPerKilo; // останется денег
let moneySpent = bonusBalance - moneyLeft; // потрачено денег
let boughtMarshmallows = moneySpent / marshmallowPerKilo // куплено пастилы

console.log(`Потрачено на пастилу: ${moneySpent}`);
console.log(`Осталось на балансе: ${moneyLeft}`);
console.log(`ИТОГО куплено пастилы: ${boughtMarshmallows} кг`);

// - - - - - - - - - - - - - - - - - - - -
