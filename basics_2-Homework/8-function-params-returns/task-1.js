// - - - - - - - - - - - - - - - - - - - - -
// Задача 1 - Написать функцию с параметрами
// - - - - - - - - - - - - - - - - - - - - -
function getReputation(likes, dislikes, edited, total) {
  // если некорректные параметры
  if (edited > total || likes < 0 || dislikes < 0 || edited < 0 || total < 0) {
    return false;
  }

  if (total === 0) { // если у пользователя нет сообщений
    return 0;
  }

  let K = 1; // коэффициент
  if (likes > dislikes) { // если лайков больше, чем дизлайков
    K = (total - edited) / total;
    // K = доля неотредактированных сообщений пользователя
  }

  // вычислим значение репутации
  return ((likes - dislikes) * K).toFixed(2);
}

// подставим тестовые значения
let reputation = getReputation(15, 3, 13, 23);
console.log(`reputation: ${reputation}`);
