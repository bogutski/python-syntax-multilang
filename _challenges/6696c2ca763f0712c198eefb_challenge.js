// NAMEEN:
// NAMERU:Сумма чисел в строке с использованием объекта

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `sumOnlyNumbers` принимает строку с различными символами, включая цифры.

Функция должна вернуть сумму всех цифр в строке.

Например, если строка `'1a$ 2^10*#3'`, то функция должна вернуть `16`.

Если строка пустая, то функция должна вернуть строку `'String is empty'`.

Разберите код ниже и добавьте три строки, в местах отмеченных `<code here...>`, чтобы функция работала правильно.

Перепишите функцию самостоятельно.


Примеры запуска функции:
```javascript
sumOnlyNumbers('1 2 3 4 5');                   // 15
sumOnlyNumbers('0, 1, 2, 3, 4, 5');            // 15
sumOnlyNumbers('5 a b67 c @ # $ (50)[22]{9}'); // 153
sumOnlyNumbers('a, a, a');                     // 0
sumOnlyNumbers('');                            // 'String is empty'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function sumOnlyNumbers(str){
  const numbers = { 0: true, 1: true, 2: true, 3: true, 4: true, 5: true, 6: true, 7: true, 8: true, 9: true};

  <code here...> return 'String is empty';          // if string is empty
  let sum = 0;                                      // where we will store the sum
  let acc = '';                                     // accumulator for numbers

  for (let i = 0; i < str.length; i++) {            // iterate over string
    const num = str[i];                             // current symbol
    if (numbers[num]) acc += str[i];                // if symbol is in the object, add it to the accumulator
    else {                                          // if it's not in the object
      sum += Number(acc);                           // convert accumulator to number and add it to the sum
      acc = '';                                     // reset accumulator
    }
  }
  <code here...>                                    // add the last number to the sum
  <code here...>                                    // return
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sumOnlyNumbers(str){
  const numbers = { 0: true, 1: true, 2: true, 3: true, 4: true, 5: true, 6: true, 7: true, 8: true, 9: true};

  if (str === '') return 'String is empty';
  let sum = 0;
  let acc = '';

  for (let i = 0; i < str.length; i++) {
    const num = str[i];
    if (numbers[num]) acc += str[i];
    else {
      sum += Number(acc);
      acc = '';
    }
  }
  sum += Number(acc);
  return sum;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function sumOnlyNumbers', () => {
  expect(sumOnlyNumbers).to.be.a('function');
});

it("sumOnlyNumbers('1 2 3 4 5') should return 15", () => {
  expect(sumOnlyNumbers('1 2 3 4 5')).to.equal(15);
});

it("sumOnlyNumbers('0, 1, 2, 3, 4, 5') should return 15", () => {
  expect(sumOnlyNumbers('0, 1, 2, 3, 4, 5')).to.equal(15);
});

it("sumOnlyNumbers('5 a b c @ # $ (1)[2]{3}') should return 11", () => {
  expect(sumOnlyNumbers('5 a b c @ # $ (1)[2]{3}')).to.equal(11);
});

it("sumOnlyNumbers('a12 -+4,b3><1c*/100$%^9&7*') should return 136", () => {
  expect(sumOnlyNumbers('a12 -+4,b3><1c*/100$%^9&7*')).to.equal(136);
});

it("sumOnlyNumbers('a, b, c') should return 0", () => {
  expect(sumOnlyNumbers('a, b, c')).to.equal(0);
});

it("sumOnlyNumbers('') should return 'String is empty'", () => {
  expect(sumOnlyNumbers('')).to.equal('String is empty');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
