// - - - - - - - - - - - - - - - - - - - - -
// Задача 1 - Написать функцию с параметрами
// - - - - - - - - - - - - - - - - - - - - -
function getReputation(likes, dislikes, edited, total) {
  let k = 0;
  let reputation = 0;

  if (total === 0) { // если у пользователя нет сообщений
    return reputation;
  }

  if (dislikes > likes) { // если лайков больше чем дизлайков
    k = 1;
  } else {
    k = (total - edited) / total;
    // k = доля неотредактированных сообщений пользователя
  }

  reputation = (likes - dislikes) * k;

  return +reputation.toFixed(1);
}

let result = getReputation(15, 12, 3, 10);
console.log(result);
