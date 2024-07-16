// NAMEEN:
// NAMERU:Средняя оценка по экзаменам

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `averageScore`, которая принимает параметры:
* `exam1` - объект с оценкой по первому экзамену
* `exam2` - объект с оценкой по второму экзамену
* `exam3` - объект с оценкой по третьему экзамену
* `exam4` - объект с оценкой по четвертому экзамену
* `exam5` - объект с оценкой по пятому экзамену
* `userName` - имя пользователя

Каждый объект экзамена имеет следующую структуру:
```js
{
  score: 5,
  name: 'John Doe'
}
```

Функция должна найти среднюю оценку по всем экзаменам переданного пользователя и вернуть её.

Сравнивайте шестой параметр функции с именем пользователя в объекте экзамена.

Если они совпадают, то используйте оценку из этого объекта.

Среди экзаменов может не быть экзаменов, которые сдавал пользователь. В этом случае функция должна вернуть `0`.

Пример вызова функции:
```javascript
averageScore(
  { score: 5, name: 'John Doe' },
  { score: 4, name: 'John Doe' },
  { score: 3, name: 'John Doe' },
  { score: 2, name: 'John Doe' },
  { score: 1, name: 'John Doe' },
  'John Doe'
); // 3

averageScore(
  { score: 5, name: 'John Doe' },
  { score: 4, name: 'John Lee' },
  { score: 3, name: 'John Dough' },
  { score: 2, name: 'John Derek' },
  { score: 1, name: 'John Book' },
  'John Doe'
); // 5

averageScore(
  { score: 5, name: 'John Doe' },
  { score: 4, name: 'John Lee' },
  { score: 3, name: 'John Doe' },
  { score: 2, name: 'John Derek' },
  { score: 1, name: 'John Doe' },
  'John Doe'
); // 3

averageScore(
  { score: 5, name: 'John Doe' },
  { score: 4, name: 'John Lee' },
  { score: 3, name: 'John Doe' },
  { score: 2, name: 'John Derek' },
  { score: 1, name: 'John Doe' },
  'John Smith'
); // 0
```

Алгоритм решения:
* Создайте переменную `sum` и присвойте ей значение `0`. В неё будет записываться сумма оценок.
* Создайте переменную `count` и присвойте ей значение `0`. В неё будет записываться количество оценок.
* Проверьте, что имя пользователя совпадает с именем в объекте `exam1`. Если совпадает, то прибавьте к `sum` значение свойства `score` объекта `exam1` и прибавьте `1` к `count`.
* Проверьте, что имя пользователя совпадает с именем в объекте `exam2`. Если совпадает, то прибавьте к `sum` значение свойства `score` объекта `exam2` и прибавьте `1` к `count`.
* Проверьте, что имя пользователя совпадает с именем в объекте `exam3`. Если совпадает, то прибавьте к `sum` значение свойства `score` объекта `exam3` и прибавьте `1` к `count`.
* Проверьте, что имя пользователя совпадает с именем в объекте `exam4`. Если совпадает, то прибавьте к `sum` значение свойства `score` объекта `exam4` и прибавьте `1` к `count`.
* Проверьте, что имя пользователя совпадает с именем в объекте `exam5`. Если совпадает, то прибавьте к `sum` значение свойства `score` объекта `exam5` и прибавьте `1` к `count`.
* Если `count` больше `0`, то верните результат деления `sum` на `count`. Иначе верните `0`.


INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function averageScore(exam1, exam2, exam3, exam4, exam5, userName) {
  let sum = 0;
  let count = 0;

  if (exam1.name === userName) {
    sum += exam1.score;
    count++;
  }

  if (exam2.name === userName) {
    sum += exam2.score;
    count++;
  }

  if (exam3.name === userName) {
    sum += exam3.score;
    count++;
  }

  if (exam4.name === userName) {
    sum += exam4.score;
    count++;
  }

  if (exam5.name === userName) {
    sum += exam5.score;
    count++;
  }

  return count ? sum / count : 0;
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function averageScore', () => {
  expect(averageScore).to.be.a('function');
});

it('averageScore({ score: 5, name: "John Doe" }, { score: 4, name: "John Doe" }, { score: 3, name: "John Doe" }, { score: 2, name: "John Doe" }, { score: 1, name: "John Doe" }, "John Doe") should return 3', () => {
  expect(
    averageScore(
      { score: 5, name: 'John Doe' },
      { score: 4, name: 'John Doe' },
      { score: 3, name: 'John Doe' },
      { score: 2, name: 'John Doe' },
      { score: 1, name: 'John Doe' },
      'John Doe',
    ),
  ).to.equal(3);
});

it('averageScore({ score: 5, name: "John Doe" }, { score: 4, name: "John Lee" }, { score: 3, name: "John Dough" }, { score: 2, name: "John Derek" }, { score: 1, name: "John Book" }, "John Doe") should return 5', () => {
  expect(
    averageScore(
      { score: 5, name: 'John Doe' },
      { score: 4, name: 'John Lee' },
      { score: 3, name: 'John Dough' },
      { score: 2, name: 'John Derek' },
      { score: 1, name: 'John Book' },
      'John Doe',
    ),
  ).to.equal(5);
});

it('averageScore({ score: 5, name: "John Doe" }, { score: 4, name: "John Lee" }, { score: 3, name: "John Doe" }, { score: 2, name: "John Derek" }, { score: 1, name: "John Doe" }, "John Doe") should return 3', () => {
  expect(
    averageScore(
      { score: 5, name: 'John Doe' },
      { score: 4, name: 'John Lee' },
      { score: 3, name: 'John Doe' },
      { score: 2, name: 'John Derek' },
      { score: 1, name: 'John Doe' },
      'John Doe',
    ),
  ).to.equal(3);
})

it('averageScore({ score: 5, name: "John Doe" }, { score: 4, name: "John Lee" }, { score: 3, name: "John Doe" }, { score: 2, name: "John Derek" }, { score: 1, name: "John Doe" }, "John Smith") should return 0', () => {
  expect(
    averageScore(
      { score: 5, name: 'John Doe' },
      { score: 4, name: 'John Lee' },
      { score: 3, name: 'John Doe' },
      { score: 2, name: 'John Derek' },
      { score: 1, name: 'John Doe' },
      'John Smith',
    ),
  ).to.equal(0);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
