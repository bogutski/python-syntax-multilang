// NAMEEN:
// NAMERU:Составление трехмерного массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Массив, элементами которого являются другие массивы, называется многомерным (вложенным) массивом.
Наиболее часто встречающимися многомерными массивами являются массивы с двумя уровнями вложенности - двумерные массивы.
Если в двумерный массив вложить еще один массив, то получится трехмерный массив, и так далее.

Обращение к элементам многомерного массива происходит так же, как и к свойствам вложенных объектов.
Только вместо точки всегда используется квадратные скобки, и вместо имени свойства - индекс элемента.

Пример:
```javascript
const array = [1, 2, [3, 4, 5, [6, 7, 8]]];
array[1];  // 2
array[2][0];  // 3
array[2][3][1];  // 7
```

Напишите функцию `makeTripleArray`, которая принимает три параметра:
* `array1` – массив;
* `array2` – массив;
* `array3` – массив.

Функция должна возвращать массив с тремя уровнями вложенности, полученный следующим образом:
* В конец содержимого первого массива `array1` должен быть добавлен массив `array2`;
* В конец содержимого второго массива `array2` должен быть добавлен массив `array3`;
* Возвращается измененный массив `array1`.

Пример выполнения функции:
```javascript
makeTripleArray([1, 2, 3], [4, 5, 6], [7, 8, 9]);  // [1, 2, 3, [4, 5, 6, [7, 8, 9]]]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function makeTripleArray(array1, array2, array3) {
  array2.push(array3);
  array1.push(array2);
  return array1;
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function `makeTripleArray`', () => {
  expect(makeTripleArray).to.be.a('function');
});

it('makeTripleArray([1, 2], [3, 4], [5, 6]);  // [1, 2, [3, 4, [5, 6]]]', () => {
  expect(makeTripleArray([1, 2], [3, 4], [5, 6])).to.deep.equal([1, 2, [3, 4, [5, 6]]]);
});

it('makeTripleArray([0, 0, 0, 0, 0], [1, 1, 1, 1, 1], [2, 2, 2, 2, 2]);  // [0, 0, 0, 0, 0, [1, 1, 1, 1, 1, [2, 2, 2, 2, 2]]]', () => {
  expect(makeTripleArray([0, 0, 0, 0, 0], [1, 1, 1, 1, 1], [2, 2, 2, 2, 2])).to.deep.equal([0, 0, 0, 0, 0, [1, 1, 1, 1, 1, [2, 2, 2, 2, 2]]]);
});

it('makeTripleArray([" "], [" " , " "], [" " , " " , " "]);  // [" ", [" ", " ", [" ", " ", " "]]]', () => {
  expect(makeTripleArray([" "], [" " , " "], [" " , " " , " "])).to.deep.equal([" ", [" ", " ", [" ", " ", " "]]]);
});

it('makeTripleArray(["Mercury", "Venus", "Earth", "Mars"], ["Jupiter", "Saturn", "Uranus", "Neptune"], ["Pluto"]);  // ["Mercury", "Venus", "Earth", "Mars", ["Jupiter", "Saturn", "Uranus", "Neptune", ["Pluto"]]]', () => {
  expect(makeTripleArray(["Mercury", "Venus", "Earth", "Mars"], ["Jupiter", "Saturn", "Uranus", "Neptune"], ["Pluto"])).to.deep.equal(["Mercury", "Venus", "Earth", "Mars", ["Jupiter", "Saturn", "Uranus", "Neptune", ["Pluto"]]]);
});

it('makeTripleArray(["*"], ["*"], ["*"]);  // ["*", ["*", ["*"]]]', () => {
  expect(makeTripleArray(["*"], ["*"], ["*"])).to.deep.equal(["*", ["*", ["*"]]]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
