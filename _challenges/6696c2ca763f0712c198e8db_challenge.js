// NAMEEN:
// NAMERU:Арифметическая прогрессия

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
`Арифметической прогрессией` называется числовая последовательность, в которой каждое последующее число, начиная со второго, получается прибавлением к предыдущему числу некоторого постоянного значения, называемого `разностью` или `шагом прогрессии`.

Например, последовательность `1, 3, 5, 7, 9, 11, 13, 15, 17, 19` является арифметической прогрессией с шагом `2`.

Каждый `n`-ый член арифметической прогрессии можно вычислить по формуле: `a1 + (n - 1) * d`, где `a1` - первый член прогрессии, `d` - шаг прогрессии.

Или как `сумму` предыдущего `n-1`го члена и `шага` прогрессии.

Напишите функцию `fillProgression`, которая принимает три целых числа `a1`, `d` и `n`:

* `a1` - первый член прогрессии
* `d` - шаг прогрессии
* `n` - количество членов прогрессии

Функция должна вернуть массив, заполненный первыми `n` членами арифметической прогрессии.

Пример заполнения массива пятью элементами арифметической прогрессии с первым членом `1` и шагом `3`:

```javascript
const array = [];
const startElement = 1;
const step = 3;
let element = startElement;
for (let i = 0; i < 5; i += 1) {
  array.push(element);
  element += step;
}

console.log(array); // [1, 4, 7, 10, 13]
```

Примеры запуска функции:

```javascript

fillProgression(1, 2, 10); // [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
fillProgression(-11, 4, 6); // [-11, -7, -3, 1, 5, 9]
fillProgression(0, 0, 11); // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
fillProgression(0, 1, 3); // [0, 1, 2]
fillProgression(5, 5, 0); // []

```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function fillProgression(a1, d, n) {

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function fillProgression(a1, d, n) {
  const array = [];
  for (let i = 0; i < n; i += 1) {
    array.push(a1 + i * d);
  }
  return array;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function fillProgression', () => {
  expect(fillProgression).to.be.a('function');
});

it('fillProgression(1, 2, 10) should return [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]', () => {
  expect(fillProgression(1, 2, 10)).to.eql([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]);
});

it('fillProgression(-20, 5, 6) should return [-20, -15, -10, -5, 0, 5]', () => {
  expect(fillProgression(-20, 5, 6)).to.eql([-20, -15, -10, -5, 0, 5]);
});

it('fillProgression(0, 0, 4) should return [0, 0, 0, 0]', () => {
  expect(fillProgression(0, 0, 4)).to.eql([0, 0, 0, 0]);
});

it('fillProgression(0, 1, 15  ) should return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]', () => {
  expect(fillProgression(0, 1, 15)).to.eql([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
});

it('fillProgression(5, 1, 0) should return []', () => {
  expect(fillProgression(5, 1, 0)).to.eql([]);
});

it('fillProgression(5, 5, 0) should return []', () => {
  expect(fillProgression(5, 5, 0)).to.eql([]);
});

it('fillProgression(5, 5, 1) should return [5]', () => {
  expect(fillProgression(5, 5, 1)).to.eql([5]);
});

it('fillProgression(5, 0, 5) should return [5, 5, 5, 5, 5]', () => {
  expect(fillProgression(5, 0, 5)).to.eql([5, 5, 5, 5, 5]);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
