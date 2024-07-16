// NAMEEN:
// NAMERU:Целые положительные числа из массива в строку

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `stringOfPositiveIntegers` принимает массив чисел.

Функция должна возвращать строку, в которой будут записаны только целые положительные числа из массива, разделенные точками с запятой `;`.

Строка должна начинаться и заканчиваться круглыми скобками: `(` и `)` соответственно.

Чтобы проверить, является ли число целым, можно использовать тот факт, что при делении целого числа на 1 остаток от деления должен быть равен нулю.

При записи чисел в строку перед каждым числом нужно добавлять пробел, а после числа - точку с запятой.

Примеры запуска функции:

```javascript
stringOfPositiveIntegers([1, 2, 3, 4, 5]); // '( 1; 2; 3; 4; 5;)'
stringOfPositiveIntegers([-11, 2.56, 3, -4.7, 5.01, -60, 71, 0, 9, 1000]); // '( 3; 71; 9; 1000;)'
stringOfPositiveIntegers([1.01, -2.2, 3.3, 0,-5.5]); // '()'
stringOfPositiveIntegers([]); // '()'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function stringOfPositiveIntegers(arr) {
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function stringOfPositiveIntegers(arr) {
  let result = '(';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] % 1 === 0) {
      result += ' '+arr[i]+';';
    }
  }
  result += ')';
  return result;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function stringOfPositiveIntegers', () => {
  expect(stringOfPositiveIntegers).to.be.a('function');
});

it('stringOfPositiveIntegers([11, 22, 33, 44, 55]) should return "( 11; 22; 33; 44; 55;)"', () => {
  expect(stringOfPositiveIntegers([11, 22, 33, 44, 55])).to.deep.equal('( 11; 22; 33; 44; 55;)');
});

it('stringOfPositiveIntegers([-11, 2.56, 3, -4.7, 5.01, -60, 71, 0, 9, 1000]) should return "( 3; 71; 9; 1000;)"', () => {
  expect(stringOfPositiveIntegers([-11, 2.56, 3, -4.7, 5.01, -60, 71, 0, 9, 1000])).to.deep.equal('( 3; 71; 9; 1000;)');
});

it('stringOfPositiveIntegers([1.01, -2.2, 3.3, 0,-5.5]) should return "()"', () => {
  expect(stringOfPositiveIntegers([1.01, -2.2, 3.3, 0,-5.5])).to.deep.equal('()');
});

it('stringOfPositiveIntegers([]) should return "()"', () => {
  expect(stringOfPositiveIntegers([])).to.deep.equal('()');
});

it('stringOfPositiveIntegers([0, -2, 0, 4, 0]) should return "( 4;)"', () => {
  expect(stringOfPositiveIntegers([0, -2, 0, 4, 0])).to.deep.equal('( 4;)');
});

it('stringOfPositiveIntegers([0.0001, -29.11, 3.5 , 0, 5.89]) should return "()"', () => {
  expect(stringOfPositiveIntegers([0.0001, -29.11, 3.5 , 0, 5.89])).to.deep.equal('()');
});

it('stringOfPositiveIntegers([0, -1, 2,-3, 4, -5, 6]) should return "( 2; 4; 6;)"', () => {
  expect(stringOfPositiveIntegers([0, -1, 2,-3, 4, -5, 6])).to.deep.equal('( 2; 4; 6;)');
});

it('stringOfPositiveIntegers([10, 20, 30, 404, 5, 0, 6.707, 45.00001]) should return "( 10; 20; 30; 404; 5;)"', () => {
  expect(stringOfPositiveIntegers([10, 20, 30, 404, 5, 0, 6.707, 45.00001])).to.deep.equal('( 10; 20; 30; 404; 5;)');
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
