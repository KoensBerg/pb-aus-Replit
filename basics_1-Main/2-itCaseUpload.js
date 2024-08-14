let uTorrent = 222.5;
let transmission = 187.65;
let sum = uTorrent + transmission;

let commentFirst = 'Скачали it-кейс: ';
let commentSecond = ' GB';
console.log(commentFirst + sum + commentSecond);

if (sum > 400) {
  console.log('Крутая раздача :)');
} else {
  console.log('Ты лузер :-/');
}
