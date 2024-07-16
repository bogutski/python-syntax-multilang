// NAMEEN:
// NAMERU:Сумма четных и нечетных цифр в строке

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `sumOfEvenAndOdd`, которая принимает строку с цифрами.

В строке нет пробелов или других символов, только цифры от 0 до 9.

Функция должна посчитать сумму четных и нечетных цифр и вернуть строку вида:

* `Sum of even numbers is <sumOfEven>, sum of odd numbers is <sumOfOdd>`, где <sumOfEven> и <sumOfOdd> - это суммы четных и нечетных цифр соответственно.

* `String is empty` - если строка пустая


Примеры запуска функции:
```javascript
sumOfEvenAndOdd('') // 'String is empty'
sumOfEvenAndOdd('1234') // 'Sum of even numbers is 6, sum of odd numbers is 4'
sumOfEvenAndOdd('02468') // 'Sum of even numbers is 20, sum of odd numbers is 0'
sumOfEvenAndOdd('13579') // 'Sum of even numbers is 0, sum of odd numbers is 25'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sumOfEvenAndOdd(str){
  if (!str) return 'String is empty';
  let sumEven = 0;
  let sumOdd = 0;
  for (let i = 0; i < str.length; i++) {
    if (Number(str[i]) % 2) sumOdd += Number(str[i]);
    else sumEven += Number(str[i]);
  }
  return `Sum of even numbers is ${sumEven}, sum of odd numbers is ${sumOdd}`;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function sumOfEvenAndOdd', () => {
  expect(sumOfEvenAndOdd).to.be.a('function');
});

it("sumOfEvenAndOdd('1234') should return 'Sum of even numbers is 6, sum of odd numbers is 4'", () => {
  expect(sumOfEvenAndOdd('1234')).to.equal('Sum of even numbers is 6, sum of odd numbers is 4');
});

it("sumOfEvenAndOdd('1234567890') should return 'Sum of even numbers is 20, sum of odd numbers is 25'", () => {
  expect(sumOfEvenAndOdd('1234567890')).to.equal('Sum of even numbers is 20, sum of odd numbers is 25');
});

it("sumOfEvenAndOdd('02468') should return 'Sum of even numbers is 20, sum of odd numbers is 0'", () => {
  expect(sumOfEvenAndOdd('02468')).to.equal('Sum of even numbers is 20, sum of odd numbers is 0');
});

it("sumOfEvenAndOdd('13579') should return 'Sum of even numbers is 0, sum of odd numbers is 25'", () => {
  expect(sumOfEvenAndOdd('13579')).to.equal('Sum of even numbers is 0, sum of odd numbers is 25');
});

it("sumOfEvenAndOdd('') should return 'String is empty'", () => {
  expect(sumOfEvenAndOdd('')).to.equal('String is empty');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
