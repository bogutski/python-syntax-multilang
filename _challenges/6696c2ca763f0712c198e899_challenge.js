// NAMEEN:
// NAMERU:Значение элемента из середины массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `getMiddleElement`, который принимает на вход два параметра:
* `object` – объект;
* `property` – наименование интересующего свойства объекта, строка.

Объект `object` содержит в себе массивы и имеет следующую структуру (пример):
```javascript
{
  numbers: [1, 2, 3, 4, 5, 6, 7, 8],
  animals: ["cat", "dog", "bird"],
}
```

Функция должна возвращать значение элемента из середины массива.

Условия:
* Аргумент `property` чувствителен к регистру;
* Если массив имеет нечетное количество элементов, то функция должна вернуть значение элемента ровно из середины массива;
* Если массив имеет четное количество элементов, то среднего элемента нет. В это случае функция должна вернуть значение элемента, расположенного левее от середины массива;
* Если свойств с именем `property` в объекте не существует, то функция должна вернуть строку `No such property: property_name`, где `property_name` соответствует значению аргумента `property`.

Примеры запуска функции:
```javascript
getMiddleElement({ numbers: [1, 2, 3, 4, 5, 6, 7, 8] }, "numbers");  // 4
getMiddleElement({ numbers: [1, 2, 3, 4], animals: ["cat", "dog", "bird"] }, "animals");  // "dog"
```

Примечания:
* Нумерация элементов массива начинается с нуля;
* Вспомните, как выполняется проверка на четность/нечетность числа из предыдущих лекций.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function getMiddleElement(object, property) {
  if (!object.hasOwnProperty(property)) {
    return `No such property: ${property}`;
  }
  const array = object[property];
  let middleIndex = (array.length - 1) / 2;
  if (array.length % 2 === 0) {
    middleIndex = array.length / 2 - 1;
  }
  return array[middleIndex];
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function `getMiddleElement`', () => {
  expect(typeof getMiddleElement).eq('function');
});

it('getMiddleElement({ numbers1: [1, 2, 3, 4, 5, 6, 7, 8], numbers2: [1, 2, 3, 4, 5, 6, 7, 8, 9] }, "numbers1");  // 4', () => {
  expect(
    getMiddleElement(
      { numbers1: [1, 2, 3, 4, 5, 6, 7, 8], numbers2: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
      'numbers1',
    ),
  ).eq(4);
});

it('getMiddleElement(flowers: ["rose", "tulip", "daisy", "lily", "orchid"], "flowers");  // "daisy"', () => {
  expect(
    getMiddleElement(
      { flowers: ['rose', 'tulip', 'daisy', 'lily', 'orchid'] },
      'flowers',
    ),
  ).eq('daisy');
});

it('getMiddleElement({ ages: [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30] }, "ages");  // 24', () => {
  expect(
    getMiddleElement(
      { ages: [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30] },
      'ages',
    ),
  ).eq(24);
});

it('getMiddleElement({ games: ["football", "basketball", "hockey", "tennis", "volleyball", "baseball"] }, "cars");  // "No such property: cars"', () => {
  expect(
    getMiddleElement(
      { games: ['football', 'basketball', 'hockey', 'tennis', 'volleyball', 'baseball'] },
      'cars',
    ),
  ).eq('No such property: cars');
});

it('getMiddleElement({ ghost: ["", "", ""] }, "ghost");  // ""', () => {
  expect(getMiddleElement({ ghost: ['', '', ''] }, 'ghost')).eq('');
});

it('getMiddleElement({ booleans: [true, false, true, false, true, false] }, "booleans");  // true', () => {
  expect(
    getMiddleElement({ booleans: [true, false, true, false, true, false] }, 'booleans'),
  ).eq(true);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
