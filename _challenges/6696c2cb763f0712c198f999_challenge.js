// NAMEEN:
// NAMERU:Сумма чисел в строке

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `sumNumbersInString`, которая принимает строку, содержащую числа, разделенные запятыми и пробелами, и возвращает сумму этих чисел.

В этой задаче нельзя использовать методы массивов.


Примеры запуска функции:
```javascript
console.log(sumNumbersInString('1, 2, 3')); // 6
console.log(sumNumbersInString('2.5, -3.719, 84.36')); // 83.141
console.log(sumNumbersInString('-11, 28, 39, -7, 63')); // 112
console.log(sumNumbersInString('0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144')); // 376
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function sumNumbersInString(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sumNumbersInString(str) {
  let result = 0
  let chunk = ''

  for(let i = 0; i < str.length; i++) {

    if(str[i] !== ',' && str[i] !== ' ') chunk += str[i]
    else if(str[i] === ','){
      result += Number(chunk)
      chunk = ''
    }

  }

  if(chunk) result += Number(chunk)

  return result;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function sumNumbersInString', () => {
  expect(sumNumbersInString).to.be.a('function');
});

it("Function sumNumbersInString should not include methods", () => {
  const result = sumNumbersInString.toString();
  const forbiddenMethods = ['.split(', '.map(', '.filter(', '.reduce(', '.forEach(', '.slice(', '.join(', '.concat('];

  forbiddenMethods.forEach(method => {
    expect(result).to.not.include(method);
  });
});

it('sumNumbersInString("1, 2, 3") should return 6', function() {
  expect(sumNumbersInString('1, 2, 3')).to.equal(6);
});

it('sumNumbersInString("-11, 28, 39, -7") should return 49', function() {
  expect(sumNumbersInString('-11, 28, 39, -7')).to.equal(49);
});

it('sumNumbersInString("0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144") should return 376', function() {
  expect(sumNumbersInString('0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144')).to.equal(376);
});

it('sumNumbersInString("10, 20, 30, 40, 50") should return 150', function() {
  expect(sumNumbersInString('10, 20, 30, 40, 50')).to.equal(150);
});

it('sumNumbersInString("100, 200, 300") should return 600', function() {
  expect(sumNumbersInString('100, 200, 300')).to.equal(600);
});

it('sumNumbersInString("-1, -2, -3") should return -6', function() {
  expect(sumNumbersInString('-1, -2, -3')).to.equal(-6);
});

it('sumNumbersInString("2.5, -3.719, 84.36") should return 83.141', function() {
  expect(sumNumbersInString('2.5, -3.719, 84.36')).to.equal(83.141);
});

it('sumNumbersInString("1, 0.5, 0.9, -0.7, -1, 0.3") should return 1', function() {
  expect(sumNumbersInString('1, 0.5, 0.9, -0.7, -1, 0.3')).to.equal(1);
});

it('sumNumbersInString("0") should return 0', function() {
  expect(sumNumbersInString('0')).to.equal(0);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
