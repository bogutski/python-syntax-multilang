// NAMEEN:
// NAMERU:Найди сумму, разницу и произведение длин массивов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `operationLength`, которая принимает два параметра:
* `arr1` - массив элементов,
* `arr2` - массив элементов.

Функция должна возвращать массив, в котором первым элементом будет сумма длин массивов,
вторым - разница длин массивов, третьим - произведение длин массивов.

Пример запуска функции:
```javascript
operationLength([14, 12, 35], [12, 22, 23, 43]);
// [7, -1, 12]
```

Похожий пример со строками:
```javascript
function operationLength(str1, str2) {
  const sum = str1.length + str2.length;
  const difference = str1.length - str2.length;
  const multiplication = str1.length * str2.length;
  return [sum, difference, multiplication];
}
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function operationLength(arr1, arr2) {
  const sum = arr1.length + arr2.length;
  const difference = arr1.length - arr2.length;
  const multiplication = arr1.length * arr2.length;
  return [sum, difference, multiplication];
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function operationLength', () => {
  expect(operationLength).to.be.a('function');
});

it('Function operationLength([14, 12, 35], [12, 22, 23, 43]) returns [7, -1, 12]', () => {
  expect(operationLength([14, 12, 35], [12, 22, 23, 43])).to.deep.equal([7, -1, 12]);
});

it('Function operationLength(["w", "fg", null, 1, 2, 3, 4], ["u", 0, "hello"]) returns [10, 4, 21]', () => {
  expect(operationLength(['w', 'fg', null, 1, 2, 3, 4], ['u', 0, 'hello'])).to.deep.equal(
    [10, 4, 21],
  );
});

it('Function operationLength([], ["u", 0, "hello", 3, 4]) returns [5, -5, 0]', () => {
  expect(operationLength([], ['u', 0, 'hello', 3, 4])).to.deep.equal([5, -5, 0]);
});

it('Function operationLength([], []) returns [0, 0, 0]', () => {
  expect(operationLength([], [])).to.deep.equal([0, 0, 0]);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
