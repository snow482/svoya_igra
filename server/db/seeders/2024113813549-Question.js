"use strict";
const bcrypt = require("bcrypt");
const saltRounds = 10;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Questions",
      [
        {
          description: `Вопрос: Какой фильм считается первым в истории кинематографа?
Варианты ответов:
"Прибытие поезда на вокзал Ла-Сиот" (1895)
"Гражданин Кейн" (1941)
"Бен-Гур" (1959)`,
          answer: `1`,
          category_id: 1,
          price: 100,
        },
        {
          description: `Вопрос: Кто сыграл главную роль в фильме "Титаник" (1997)?
Варианты ответов:
Брэд Питт
Леонардо ДиКаприо
Джонни Депп
`,
          answer: `2`,
          category_id: 1,
          price: 200,
        },
        {
          description: `Вопрос: Какой фильм получил "Оскар" за лучший фильм в 2020 году?
Варианты ответов:

"1917"
"Паразиты"
"Джокер"`,
          answer: `2`,
          category_id: 1,
          price: 400,
        },
        {
          description: `Вопрос: Какой режиссер снял фильм "Криминальное чтиво"?
Варианты ответов:

Стивен Спилберг
Квентин Тарантино
Кристофер Нолан`,
          answer: `2`,
          category_id: 1,
          price: 600,
        },
        {
          description: `Вопрос: Какой фильм стал первым в истории, получившим 11 "Оскаров"?
Варианты ответов:

"Титаник" (1997)
"Бен-Гур" (1959)
"Властелин колец: Возвращение короля" (2003)`,
          answer: `2`,
          category_id: 1,
          price: 800,
        },
        {
          description: `Вопрос: Какой фильм считается самым кассовым в истории кинематографа?
Варианты ответов:

"Аватар" (2009)
"Мстители: Финал" (2019)
"Титаник" (1997)`,
          answer: `1`,
          category_id: 1,
          price: 1000,
        },
        {
          description: `Вопрос: Если бы деревья могли говорить, какой бы язык они использовали?
Варианты ответов:
Шепот листьев
Язык цветов
Древесный язык
Звуки природы`,
          answer: `4`,
          category_id: 2, // New category ID
          price: 100,
        },
        {
          description: `Вопрос: Какого цвета облака на планете, где постоянно идет шоколадный дождь?
Варианты ответов:
Белые
Серые
Шоколадные
Фиолетовые`,
          answer: `3`,
          category_id: 2, // New category ID
          price: 200,
        },
        {
          description: `Вопрос: Если бы животные могли голосовать, кто бы стал президентом?
Варианты ответов:
Лев
Обезьяна
Дельфин
Пингвин`,
          answer: `1`, //Subjective, but a common association with leadership
          category_id: 2, // New category ID
          price: 400,
        },
        {
          description: `Вопрос: Что случилось бы, если бы все люди вдруг стали прозрачными?
Варианты ответов:
Мир бы рухнул
Начался бы хаос
Ничего особенного
Все бы пошли в кино`,
          answer: `2`,
          category_id: 2, // New category ID
          price: 600,
        },
        {
          description: `Вопрос:  Если бы числа могли петь, какое бы число спело бы сольную партию в опере?
Варианты ответов:
1
7
10
100`,
          answer: `2`, // 7 - often considered mystical or unique.
          category_id: 2, // New category ID
          price: 800,
        },
        {
          description: `Вопрос: Если бы эмоции имели цвета, то какой бы цвет был у скуки?
Варианты ответов:
Ярко-желтый
Темно-серый
Радужный
Неоново-розовый`,
          answer: `2`,
          category_id: 2, // New category ID
          price: 1000,
        },
        {
          description: `Вопрос: Если бы советские роботы-пылесосы могли говорить, что бы они говорили чаще всего?
Варианты ответов:
"За Родину!"
"Пролетарии всех стран, соединяйтесь!"
"Требуется замена мешка для пыли!"
"План по уборке перевыполнен!"`,
          answer: `3`,
          category_id: 3, // New category ID
          price: 100,
        },
        {
          description: `Вопрос:  Если бы "газировка" в СССР умела петь, то какой бы жанр она выбрала?
Варианты ответов:
Рок-н-ролл
Блюз
Советская эстрада
Джаз`,
          answer: `3`,
          category_id: 3, // New category ID
          price: 200,
        },
        {
          description: `Вопрос: Какая бы советская реклама лучше всего продавала бы айфон?
Варианты ответов:
"Связь с будущим, товарищи!"
"Превосходство техники, доступное каждому!"
"Вызов Америке!"
"Повышение производительности труда на 100%",`,
          answer: `2`, // Appeals to a broad audience
          category_id: 3, // New category ID
          price: 400,
        },
        {
          description: `Вопрос: Если бы советский Дед Мороз смог бы летать на чём-то кроме саней, на чём бы он летал?
Варианты ответов:
Ракете
Вертолёте Ми-8
Космическом корабле
Самолёте АН-2`,
          answer: `1`, // Symbolic of Soviet space program achievements
          category_id: 3, // New category ID
          price: 600,
        },
        {
          description: `Вопрос:  Какой советский мультфильм мог бы стать основой для блокбастера Голливуда?
Варианты ответов:
"Ну, погоди!"
"Винни-Пух"
"Ёжик в тумане"
"Простоквашино"`,
          answer: `1`, // Action-oriented cartoon
          category_id: 3, // New category ID
          price: 800,
        },
        {
          description: `Вопрос: Если бы советская система образования внедрила бы новый предмет, какой бы это был предмет?
Варианты ответов:
"Основы коммунизма"
"Научный атеизм"
"Производство сельскохозяйственных культур"
"Техника идеологической борьбы"`,
          answer: `4`, // More subversive than other choices
          category_id: 3, // New category ID
          price: 1000,
        },
        {
          description: `Вопрос:  Если бы герои "Звёздных войн" были программистами, кто бы написал самый эффективный код?
Варианты ответов:
Люк Скайуокер
Оби-Ван Кеноби
Йода
R2-D2`,
          answer: `3`, // Yoda's wisdom could translate to efficient code. Subjective, but fitting.
          category_id: 4, // New category ID
          price: 100,
        },
        {
          description: `Вопрос:  В каком фильме ужасов код стал бы главным злодеем?
Варианты ответов:
"Звонок"
"Сияние"
"Пятница, 13-е"
"Чужой"`,
          answer: `1`, // The vengeful spirit could be represented by malicious code. Subjective, but fitting.
          category_id: 4, // New category ID
          price: 200,
        },
        {
          description: `Вопрос:  Если бы герои "Властелина колец" использовали бы программирование для борьбы со злом, какой язык они бы использовали?
Варианты ответов:
Python (из-за своей универсальности)
C++ (из-за своей мощи)
Assembly (из-за своего контроля над железом)
Java (из-за своей надёжности)`,
          answer: `2`, // C++ aligns with the power needed to fight Sauron.  Subjective.
          category_id: 4, // New category ID
          price: 400,
        },
        {
          description: `Вопрос:  Если бы "Матрица" была написана на языке программирования, каким бы это был язык?
Варианты ответов:
Python
Java
Assembly
C++`,
          answer: `3`, // Assembly's low-level control fits the theme of manipulating the machine code.
          category_id: 4, // New category ID
          price: 600,
        },
        {
          description: `Вопрос:  В каком фильме супергероев программирование играло бы ключевую роль в спасении мира?
Варианты ответов:
"Мстители"
"Человек-паук"
"Супермен"
"Люди Икс"`,
          answer: `1`, // The team approach in Avengers lends itself to collaborative coding. Subjective.
          category_id: 4, // New category ID
          price: 800,
        },
        {
          description: `Вопрос:  Если бы "Титаник" затонул из-за ошибки в коде, какой бы это была ошибка?
Варианты ответов:
NullPointerException
Stack Overflow
Segmentation Fault
Infinite Loop`,
          answer: `4`, // An infinite loop could represent a continuous, unstoppable disaster.
          category_id: 4, // New category ID
          price: 1000,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Questions", null, {});
  },
};
