# ДЗ к занятию 5 «Циклы»

## [Задача 1](./task-1.js)

Пользователь обменивается сообщениями в чате с Мисс Марпл. Первое сообщение отправляет она, второе — пользователь, и так далее. Выведите беседу таким образом, чтобы сверху были самые старые сообщения, а ниже — новые.

*Пример переписки:*

==Вы: «Привет!»

Мисс Марпл: «Здорово, коль не шутишь!»==

### Что нужно повторить

1. Инициализация массива.
2. Создание цикла.
3. Обход массива с помощью цикла.
4. Заполнение массива с помощью цикла.

### Этапы выполнения задания

1. Инициализируйте массив сообщений.
2. Заполните его данными:

    — «Я принесла тебе утренний чай. Обычно ты ещё спишь».
    
    — «Вы приносите мне чай по утрам?»
    
    — «А ты как думаешь, откуда он берётся?»
    
    — «Не знаю. Я думал, это само собой разумеющееся».
    
3. Напишите цикл для вывода сообщений.
4. В зависимости от номера сообщения нужно подставлять в начало сообщения либо «Мисс Марпл», либо «Вы».

***

## [Задача 2](./task-2.js)

Нужно добавить функцию поиска по тексту сообщений в вашем мессенджере. 

**Например**, пользователь ищет слово «думаешь», и ему отображаются все сообщения с этим текстом.

### Что нужно повторить

Инициализация и использование переменных.

### Этапы выполнения задания

1. Инициализируйте переменную, в которой будет храниться искомый текст. Например, слово «чай».
2. Для поиска используйте метод `includes` для строки. 

Пример использования метода для поиска слова «зелёный» в строке «чёрный чай»:

```
«Чёрный чай».includes(«зелёный»); // вернёт false
```

Метод возвращает `true`, если слово есть в строке, и `false`, если нет.

3. Напечатайте списком все сообщения, в которых есть искомая строка.

***

## [Задача 3](./task-3.js)

Пользователи не всегда пишут друг другу сообщения по порядку. Но наш мессенджер пока не умеет обрабатывать ситуации, когда один пользователь прислал вам несколько сообщений подряд.

Для этого массив сообщений **messages** придётся расширить. 

Вместо строк в этом массиве вы будете хранить маленькие вложенные массивы. На первом месте в этих массивах будет автор, а на втором — сообщение: [автор, сообщение].

### Что нужно повторить

1. Инициализация массива.
2. Обход массива с помощью цикла.

### Этапы выполнения задания

1. Создайте новый массив **messages**.
2. Заполните его новой структурой:

    [ "zloy-zloy", "Мы с Алешей сегодня на иксбоксе рубились, потом в маке поели, потом ему новый телефон купили, и два часа с горок в Нескучном саду катались"],
    
    ["zloy-zloy", "У Алеши завтра день рождения"],
    
    ["zloy-zloy", "Он мой дед. Ему будет 81 год"],
    
    ["Вы", "LOL"]
    
3. Создайте цикл для печати сообщения. В результате в консоль должен быть выведен чат, каждая строка которого соответствует шаблону `автор: сообщение`.

---

При выполнении задания придерживайтесь [правил оформления кода на JavaScript](https://github.com/netology-code/pb-homeworks/blob/master/codestyle.md)).