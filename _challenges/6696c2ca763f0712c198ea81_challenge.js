// NAMEEN:
// NAMERU:Добавить свойство sum в объект

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Исправьте ошибки в коде.

Функция `addSumToObj` принимает объект и два числа:

* `obj` - объект, в который нужно добавить свойство `sum`
* `n1` - первое число
* `n2` - второе число

Сначала нужно проверить, какое из чисел больше, а какое меньше.

После этого нужно сложить все числа между `n1` и `n2` включительно и записать сумму в свойство `sum` объекта `obj`.

Верните объект `obj`.

Примеры запуска функции:
```javascript
addSumToObj({}, 1, 4) // {sum: 10}
addSumToObj({}, 5, -2) // {sum: 12}
addSumToObj({}, 50, 37) // {sum: 609}
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function addSumToObj(obj, n1, n2) {
  sum = 0;
  start = n1;
  end = n2;
  if (n1 (><) n2) {
    start = n2;
    end = n1;
  }
  for (let i > start; i <=> end; i += 2) {
    sum + i;
  }
  obj.sum = sum;
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function addSumToObj(obj, n1, n2) {
  let sum = 0;
  let start = n1;
  let end = n2;
  if (n1 > n2) {
    start = n2;
    end = n1;
  }
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  obj.sum = sum;
  return obj;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function addSumToObj', () => {
  expect(addSumToObj).to.be.a('function');
});

it('addSumToObj({}, 0, 0) returns an object', () => {
  expect(addSumToObj({}, 0, 0)).to.be.an('object');
});

it('addSumToObj({}, 5, -2) returns {sum: 12}', () => {
  expect(addSumToObj({}, 5, -2)).to.eql({ sum: 12 });
});

it('addSumToObj({}, 50, 37) returns {sum: 609}', () => {
  expect(addSumToObj({}, 50, 37)).to.eql({ sum: 609 });
});

it('addSumToObj({}, 14, 27) returns {sum: 287}', () => {
  expect(addSumToObj({}, 14, 27)).to.eql({ sum: 287 });
});

it('addSumToObj({}, -100, -75) returns {sum: -2275}', () => {
  expect(addSumToObj({}, -100, -75)).to.eql({ sum: -2275 });
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
