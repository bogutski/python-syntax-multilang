// NAMEEN:
// NAMERU:Среднее арифметическое четных чисел массива. Метод continue

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `evenAvr` принимает массив чисел `arr` в качестве параметра и возвращает среднее арифметическое четных чисел массива.

Эту задачу можно решить с помощью `if`, но используйте метод `continue` для пропуска нечетных чисел.

Решение будет проверяться на использование метода `continue`.

Пример запуска функции:
```javascript
evenAvr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) // 6
evenAvr([1, 3, 5, 7, 9]) // 0
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function evenAvr(arr) {
  let sum = 0;
  let avr = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) continue;
    sum += arr[i];
    count++
    avr = sum / count
  }
  return avr
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function evenAvr', () => {
  expect(evenAvr).to.be.a('function');
});

it('funciton evenAvr should include continue', () => {
  expect(evenAvr.toString()).to.include('continue');
});

it('evenAvr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) should return 6', () => {
  expect(evenAvr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).to.be.equal(6);
});

it('evenAvr([1, 3, 5, 7, 9]) should return 0', () => {
  expect(evenAvr([1, 3, 5, 7, 9])).to.be.equal(0);
});

it('evenAvr([2, 4, 6, 8, 10]) should return 6', () => {
  expect(evenAvr([2, 4, 6, 8, 10])).to.be.equal(6);
});

it('evenAvr([]) should return 0', () => {
  expect(evenAvr([])).to.be.equal(0);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
