// NAMEEN:
// NAMERU:Посчитать количество цифр и записать в объект

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `countOfNumbers`, которая принимает строку и возвращает объект с количеством цифр в строке.

В строку могут передаваться только цифры `0, 1, 2`.

Например, строка `011222` должна вернуть объект `{zero: 1, one: 2, two: 3}`.


Пример запуска функции:
```javascript
countOfNumbers('');        // {zero: 0, one: 0, two: 0}
countOfNumbers('012');     // {zero: 1, one: 1, two: 1}
countOfNumbers('2112000'); // {zero: 3, one: 2, two: 2}
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function countOfNumbers(str){
  let countZero = 0;
  let countOne = 0;
  let countTwo = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '0') countZero++;
    else if (str[i] === '1') countOne++;
    else if (str[i] === '2') countTwo++;
  }
  return {
    'zero': countZero,
    'one': countOne,
    'two': countTwo
  }
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function countOfNumbers', () => {
  expect(countOfNumbers).to.be.a('function');
});

it("countOfNumbers('012') returns {zero: 1, one: 1, two: 1}", () => {
  expect(countOfNumbers('012')).to.deep.equal({zero: 1, one: 1, two: 1});
});

it("countOfNumbers('211200') returns {zero: 2, one: 2, two: 2}", () => {
  expect(countOfNumbers('211200')).to.deep.equal({zero: 2, one: 2, two: 2});
});

it("countOfNumbers('111') returns {zero: 0, one: 3, two: 0}", () => {
  expect(countOfNumbers('111')).to.deep.equal({zero: 0, one: 3, two: 0});
});

it("countOfNumbers('22222') returns {zero: 0, one: 0, two: 5}", () => {
  expect(countOfNumbers('22222')).to.deep.equal({zero: 0, one: 0, two: 5});
});

it("countOfNumbers('0000000000') returns {zero: 10, one: 0, two: 0}", () => {
  expect(countOfNumbers('0000000000')).to.deep.equal({zero: 10, one: 0, two: 0});
});

it("countOfNumbers('') returns {zero: 0, one: 0, two: 0}", () => {
  expect(countOfNumbers('')).to.deep.equal({zero: 0, one: 0, two: 0});
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
