// NAMEEN:
// NAMERU:Удвоить элементы массива, кроме единицы

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `twiceExceptOne` принимает массив чисел и возвращает массив, в котором каждое число умножено на 2, кроме единицы.

Используйте иструкцию `continue` для решения этой задачи.

Задача будет проверяться на применение инструкции `continue`.

```javascript
twiceExceptOne([1, 2, 3, 4, 5]) // [1, 4, 6, 8, 10]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function twiceExceptOne(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) continue;
    arr[i] *= 2;
  }
  return arr;
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function twiceExceptOne', () => {
  expect(twiceExceptOne).to.be.a('function');
});

it('twiceExceptOne should include statement continue', () => {
  expect(twiceExceptOne.toString().includes('continue')).to.be.true;
});

it('twiceExceptOne([1, 2, 3, 4, 5]) should return [1, 4, 6, 8, 10]', () => {
  expect(twiceExceptOne([1, 2, 3, 4, 5])).to.eql([1, 4, 6, 8, 10]);
});

it('twiceExceptOne([0, 1, 2, 3, 4, 5]) should return [0, 1, 4, 6, 8, 10]', () => {
  expect(twiceExceptOne([0, 1, 2, 3, 4, 5])).to.eql([0, 1, 4, 6, 8, 10]);
});

it('twiceExceptOne([1, 2, 3, 4, 5, 0]) should return [1, 4, 6, 8, 10, 0]', () => {
  expect(twiceExceptOne([1, 2, 3, 4, 5, 0])).to.eql([1, 4, 6, 8, 10, 0]);
});

it('twiceExceptOne([1, 1, 1, 1]) should return [1, 1, 1, 1]', () => {
  expect(twiceExceptOne([1, 1, 1, 1])).to.eql([1, 1, 1, 1]);
});


// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
