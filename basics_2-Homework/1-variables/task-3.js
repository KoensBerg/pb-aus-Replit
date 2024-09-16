let bonusBalance = 131;

let marshmallowPerKilo = 80; // стоимость кг пастилы

let moneyLeft = bonusBalance % marshmallowPerKilo; // останется денег
let moneySpent = bonusBalance - moneyLeft; // потрачено денег
let boughtMarshmallows = moneySpent / marshmallowPerKilo // куплено пастилы

console.log(`Потрачено: ${moneySpent}`);
console.log(`Осталось: ${moneyLeft}`);
console.log(`ИТОГО куплено пастилы: ${boughtMarshmallows} кг`);
