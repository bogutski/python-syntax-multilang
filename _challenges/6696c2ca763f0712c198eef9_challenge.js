// NAMEEN:
// NAMERU:Простая сумма цифр

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `sum`, которая принимает строку, состоящую только из цифр, и возвращает сумму этих цифр.

В строке не будет пробелов, либо других символов, только цифры от 0 до 9.

Hint: для преобразования строки в число можно использовать `Number()` или унарный плюс `+`.


Примеры запуска функции:
```javascript
sum(''); // 0
sum('1234'); // 10
sum('1234567890'); // 45
sum('12345678901234567890'); // 90
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sum(str){
  let sum = 0;
  for(let i = 0; i < str.length; i++){
    sum += Number(str[i]);
  }
  return sum;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function sum', () => {
  expect(sum).to.be.a('function');
});

it("sum('1234') should return 10", () => {
  expect(sum('1234')).to.be.equal(10);
});

it("sum('1234567890') should return 45", () => {
  expect(sum('1234567890')).to.be.equal(45);
});

it("sum('12345678901234567890') should return 90", () => {
  expect(sum('12345678901234567890')).to.be.equal(90);
});

it("sum('9543810') should return 30", () => {
  expect(sum('9543810')).to.be.equal(30);
});

it("sum('') should return 0", () => {
  expect(sum('')).to.be.equal(0);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
