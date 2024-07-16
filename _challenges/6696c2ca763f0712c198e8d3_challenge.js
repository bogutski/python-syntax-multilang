// NAMEEN:
// NAMERU:Массив целых чисел от 0 до n

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `consecutiveNumbers` принимает один параметр – число `n`.

Функция должна вернуть массив целых чисел от 0 до `n` включительно.

Если переданное число `n` меньше нуля, то функция должна вернуть пустой массив.

Пример заполнения массива числами от 1 до 5:

```javascript
const arr = [];
for (let i = 1; i <= 5; i++) {
  arr.push(i);
}
console.log(arr); // [1, 2, 3, 4, 5]
```

Примеры запуска функции:

```javascript
consecutiveNumbers(5);  // [0, 1, 2, 3, 4, 5]
consecutiveNumbers(10); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
consecutiveNumbers(0);  // [0]
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function sum(num1, num2){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function consecutiveNumbers(n) {
  const arr = [];
  for (let i = 0; i <= n; i++) {
    arr.push(i);
  }
  return arr;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function consecutiveNumbers', () => {
  expect(consecutiveNumbers).to.be.a('function');
});

it('consecutiveNumbers(5) should return [0, 1, 2, 3, 4, 5]', () => {
  expect(consecutiveNumbers(5)).eql([0, 1, 2, 3, 4, 5]);
});

it('consecutiveNumbers(10) should return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', () => {
  expect(consecutiveNumbers(10)).eql([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

it('consecutiveNumbers(0) should return [0]', () => {
  expect(consecutiveNumbers(0)).eql([0]);
});

it('consecutiveNumbers(-4) should return []', () => {
  expect(consecutiveNumbers(-4)).eql([]);
});

it('consecutiveNumbers(1) should return [0, 1]', () => {
  expect(consecutiveNumbers(1)).eql([0, 1]);
});

it('consecutiveNumbers(20) should return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]', () => {
  expect(consecutiveNumbers(20)).eql([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
