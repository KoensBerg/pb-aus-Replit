let bonusBalance = 131;

let pointsForPurchase = 50; // баллы за каждую покупку
let pointsBurningEveryDay = 3 // ежедневно сгорают

let purhcasesPerDay = 0.5; // покупок каждый день
let totalDays = 10; // всего дней

let totalPoinstBurned = pointsBurningEveryDay * totalDays; // всего сгорело баллов
let totalPointsAdded = pointsForPurchase * purhcasesPerDay * totalDays // начислено

bonusBalance += totalPointsAdded - totalPoinstBurned;

console.log(`Итоговый баланс через ${totalDays} дней: ${bonusBalance}`);
