// NAMEEN:
// NAMERU:Конкатенация элементов массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `compoundWord`, которая принимает один параметр - массив.

Массив содержит 2 элемента - строки.
Например: `['foot', 'ball']`

Функция должна вернуть объединение элементов массива.

Пример запуска функции:
```javascript
compoundWord(['make', 'up']); // 'makeup'
```

Похожий пример c числами:
```javascript
function addNum(numbers) {
  return numbers[0] + numbers[1] + numbers[2];
}

console.log(addNum([1, 12, 23])); // 36
console.log(addNum([10, 20, 30])); // 60
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function compoundWord(merger) {
  return merger[0] + merger[1];
}

// SOLUTIONEND

// OPENTESTSSTART
it('Created function compoundWord', () => {
  expect(compoundWord).to.be.a('function');
});

it('Function compoundWord returns correct value', () => {
  expect(compoundWord(['make', 'up'])).to.be.equal('makeup');
});

it('Function compoundWord returns correct value', () => {
  expect(compoundWord(['brain', 'storm'])).to.be.equal('brainstorm');
});

it('Function compoundWord returns correct value', () => {
  expect(compoundWord(['air', 'plane'])).to.be.equal('airplane');
});

it('Function compoundWord returns correct value', () => {
  expect(compoundWord(['foot', 'ball'])).to.be.equal('football');
});

it('Function compoundWord returns correct value', () => {
  expect(compoundWord(['dragon', 'fly'])).to.be.equal('dragonfly');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
