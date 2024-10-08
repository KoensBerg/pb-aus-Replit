# ДЗ к занятию 1 «Базовые понятия. Переменные и числа»

Вы работаете над разработкой интернет-магазина с бонусной системой. Выполните задачи для реализации различных функций.

## [Задача 1](./task-1.js)
В интернет-магазине у зарегистрированного пользователя есть имя и бонусный баланс. Интернет-магазином давно пользуется Лев Толстой. Отобразите ему информацию об успешном входе и его балансе.

### Процесс реализации

1. Создайте две переменные `username` и `bonusBalance`.
2. Присвойте переменным значения `LeoTolstoy` и `131` соответственно.
3. Выведите информацию о пользователе в консоль двумя строками. Значения X и Y возьмите из переменных:
    * в первой — «Пользователь Х»;
    * во второй — «Баланс Y».

## [Задача 2](./task-2.js)

За каждую покупку мы добавляем на баланс фиксированную сумму в 50 бонусных баллов. Баллы сгорают со временем — каждый день сгорает 3 балла.

Посчитайте, какой баланс будет у Льва Толстого через 10 дней, если обычно он делает покупку раз в два дня.

### Процесс реализации

1. Используйте переменную `bonusBalance` со значением бонусного баланса из задачи 1.
2. Создайте переменные:
   * для хранения баллов, которые добавляются после каждой покупки;
   * для количества баллов, которые сгорают каждый день.
3. Посчитайте, какая сумма будет на балансе через 10 дней.
4. Выведите баланс пользователя на экран.

## [Задача 3](./task-3.js)

Сегодня мы объявили акцию — можно потратить все бонусные баллы на покупку пастилы, килограмм которой стоит 80 рублей. Покупать можно только целые килограммы пастилы. Какое максимальное количество килограммов может купить Лев Толстой на свои бонусы?

### Процесс реализации
1. Используйте переменную `bonusBalance` со значением бонусного баланса из задачи 1.
2. Создайте переменную, которая будет хранить стоимость килограмма пастилы. Инициализируйте её значением.
3. С помощью оператора взятия остатка посчитайте, сколько баллов останется у Льва Толстого после покупки максимального количества пастилы.
4. Вычислите разность между балансом и остатком.
5. Из п. 3 рассчитайте максимальное количество килограммов, которое можно купить.
6. Выведите результат на экран.

## [Все три задачи](./three_tasks.js)
Объединил три решения в рамках одного файла.

***

При выполнении задания придерживайтесь [правил оформления кода на JavaScript](https://github.com/netology-code/pb-homeworks/blob/master/codestyle.md)).