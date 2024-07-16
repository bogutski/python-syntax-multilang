// NAMEEN:
// NAMERU:Количество вхождений двух элементов в строку

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `numberOfOccurrencesBothEl`, которая принимает строку и два элемента: `el1`, `el2`.

Функция должна вернуть строку, в которой будет указано количество вхождений каждого элемента в строку.

Например, если передать в функцию строку `Hello` и элементы `l` и `o`, то функция должна вернуть строку `First element: 2, second element: 1`.

Если элементов нет в строке, то функция должна вернуть строку `First element: 0, second element: 0`.

Строка и элементы могут быть в любом регистре. Перед циклом приведите строку и элементы к одному регистру.


Примеры запуска функции:
```javascript
numberOfOccurrencesBothEl('Hello World', 'l', 'o'); // 'First element: 3, second element: 2'
numberOfOccurrencesBothEl('AbC', 't', 'y'); // 'First element: 0, second element: 0'
numberOfOccurrencesBothEl('LOCAL coding', 'l', 'c'); // 'First element: 2, second element: 2'
numberOfOccurrencesBothEl('blue red', 'R', 'G'); // 'First element: 1, second element: 0'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function numberOfOccurrencesBothEl(str, el1, el2) {
  let countEl1 = 0;
  let countEl2 = 0;
  str = str.toLowerCase();
  el1 = el1.toLowerCase();
  el2 = el2.toLowerCase();
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === el1) countEl1++;
    if (str[i] === el2) countEl2++;
  }
  return `First element: ${countEl1}, second element: ${countEl2}`;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function numberOfOccurrencesBothEl', () => {
  expect(numberOfOccurrencesBothEl).to.be.a('function');
});

it("numberOfOccurrencesBothEl('Hello World', 'l', 'o') should return 'First element: 3, second element: 2'", () => {
  expect(numberOfOccurrencesBothEl('Hello World', 'l', 'o')).to.equal('First element: 3, second element: 2');
});

it("numberOfOccurrencesBothEl('AbC ABC abc aBc', 'a', 'b') should return 'First element: 4, second element: 4'", () => {
  expect(numberOfOccurrencesBothEl('AbC ABC abc aBc', 'a', 'b')).to.equal('First element: 4, second element: 4');
});

it("numberOfOccurrencesBothEl('LOCAL coding', 'l', 'c') should return 'First element: 2, second element: 2'", () => {
  expect(numberOfOccurrencesBothEl('LOCAL coding', 'l', 'c')).to.equal('First element: 2, second element: 2');
});

it("numberOfOccurrencesBothEl('blue red green', 'R', 'G') should return 'First element: 2, second element: 1'", () => {
  expect(numberOfOccurrencesBothEl('blue red green', 'R', 'G')).to.equal('First element: 2, second element: 1');
});

it("numberOfOccurrencesBothEl('PASV', 'a', 'a') should return 'First element: 1, second element: 1'", () => {
  expect(numberOfOccurrencesBothEl('PASV', 'a', 'a')).to.equal('First element: 1, second element: 1');
});

it("numberOfOccurrencesBothEl('PASV', 'b', 'c') should return 'First element: 0, second element: 0'", () => {
  expect(numberOfOccurrencesBothEl('PASV', 'b', 'c')).to.equal('First element: 0, second element: 0');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
