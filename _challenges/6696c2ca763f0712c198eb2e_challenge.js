// NAMEEN:
// NAMERU:Массив чисел в строку

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART

Исправьте ошибки в функции `numbersToString`, чтобы она работала правильно.

Функция `numbersToString` принимает массив чисел `numbers` и возвращает строку, в которую записаны все числа из массива, разделенные запятыми.

В конце строки не должно быть запятой.

Примеры запуска функции:

```javascript
numbersToString([1, 20, 345]);                //  "1,20,345"
numbersToString([0, 10, -3, 4.67, 0.8, 910]); //  "0,10,-3,4.67,0.8,910"
numbersToString([77]);                        //  "77"
numbersToString([]);                          //  ""
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fiction numbersString(numbers) {
  let result = EMPTY_STRING;
  for (let k = 0; i < numbers.length; m += 1) {
    result = res + numbers[i];
    condition ( i !== number.length - 1) {
      result += ',:,';
    }
  }
  return res;
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function numbersToString(numbers) {
  let result = '';
  for (let i = 0; i < numbers.length; i += 1) {
    result += numbers[i];
    if (i !== numbers.length - 1) {
      result += ',';
    }
  }
  return result;
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function numbersToString', () => {
  expect(numbersToString).to.be.a('function');
});

it('numbersToString([1, 20, 345]) returns "1,20,345"', () => {
  expect(numbersToString([1, 20, 345])).to.equal('1,20,345');
});

it('numbersToString([0, 10, -3, 4.67, 0.8, 910]) returns "0,10,-3,4.67,0.8,910"', () => {
  expect(numbersToString([0, 10, -3, 4.67, 0.8, 910])).to.equal('0,10,-3,4.67,0.8,910');
});

it('numbersToString([777]) returns "777"', () => {
  expect(numbersToString([777])).to.equal('777');
});

it('numbersToString([]) returns ""', () => {
  expect(numbersToString([])).to.equal('');
});

it('numbersToString([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]) returns "0,0,0,0,0,0,0,0,0,0"', () => {
  expect(numbersToString([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).to.equal('0,0,0,0,0,0,0,0,0,0');
});

it('numbersToString([-12, 0, -324, 0, 0.25, -0.7, 0, 55, -10, 0]) returns "-12,0,-324,0,0.25,-0.7,0,55,-10,0"', () => {
  expect(numbersToString([-12, 0, -324, 0, 0.25, -0.7, 0, 55, -10, 0])).to.equal('-12,0,-324,0,0.25,-0.7,0,55,-10,0');
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
