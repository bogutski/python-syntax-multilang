// NAMEEN:
// NAMERU:Проверка, что хотя бы один элемент массива удовлетворяет комплексному условию

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `hasElementSatisfyingCondition`, которая принимает массив и объект с условием.

Функция должна возвращать `true`, если в массиве есть хотя бы один элемент, который удовлетворяет указанному условию, и `false` в противном случае.

Условие представляет собой объект с двумя свойствами: `type` и `value`.

* Если `type` равен `number`, то `value` содержит пороговое значение, и элемент должен быть числом, превышающим этот порог.
* Если `type` равен `string`, то `value` содержит подстроку, и элемент должен быть строкой, содержащей эту подстроку.
* Если `type` равен `object`, то `value` содержит ключ, и элемент должен быть объектом, содержащим этот ключ.


Примеры запуска функции:
```javascript
hasElementSatisfyingCondition([1, 2, 3, 4], {type: 'number', value: 3}); // true
hasElementSatisfyingCondition([1, 2, 3, 4], {type: 'number', value: 5}); // false
hasElementSatisfyingCondition(['apple', 'banana', 'cherry'], {type: 'string', value: 'an'}); // true
hasElementSatisfyingCondition(['apple', 'banana', 'cherry'], {type: 'string', value: 'xyz'}); // false
hasElementSatisfyingCondition([{a: 1}, {b: 2}, {c: 3}], {type: 'object', value: 'b'}); // true
hasElementSatisfyingCondition([{a: 1}, {b: 2}, {c: 3}], {type: 'object', value: 'd'}); // false
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function hasElementSatisfyingCondition(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function hasElementSatisfyingCondition(arr, condition) {
  return arr.some(element => {
    if(condition.type === 'number') return typeof element === 'number' && element > condition.value;
    else if(condition.type === 'string') return typeof element === 'string' && element.includes(condition.value);
    else if(condition.type === 'object') return typeof element === 'object' && Object.keys(element).includes(condition.value);
  });
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function hasElementSatisfyingCondition', () => {
  expect(hasElementSatisfyingCondition).to.be.a('function');
});

it('hasElementSatisfyingCondition([1, 2, 3, 4], {type: "number", value: 3}) should return true', function() {
  expect(hasElementSatisfyingCondition([1, 2, 3, 4], {type: "number", value: 3})).to.equal(true);
});

it('hasElementSatisfyingCondition([1, 2, 3, 4], {type: "number", value: 5}) should return false', function() {
  expect(hasElementSatisfyingCondition([1, 2, 3, 4], {type: "number", value: 5})).to.equal(false);
});

it('hasElementSatisfyingCondition(["1", "2", "3", "4"], {type: "number", value: 3}) should return false', function() {
  expect(hasElementSatisfyingCondition(['1', '2', '3', '4'], {type: "number", value: 3})).to.equal(false);
});

it('hasElementSatisfyingCondition(["apple", "banana", "cherry"], {type: "string", value: "an"}) should return true', function() {
  expect(hasElementSatisfyingCondition(["apple", "banana", "cherry"], {type: "string", value: "an"})).to.equal(true);
});

it('hasElementSatisfyingCondition([11, 21, 0, -5], {type: "string", value: "a"}) should return false', function() {
  expect(hasElementSatisfyingCondition([11, 21, 0, -5], {type: "string", value: "a"})).to.equal(false);
});

it('hasElementSatisfyingCondition(["apple", "banana", "cherry"], {type: "string", value: "xyz"}) should return false', function() {
  expect(hasElementSatisfyingCondition(["apple", "banana", "cherry"], {type: "string", value: "xyz"})).to.equal(false);
});

it('hasElementSatisfyingCondition([{a: 1}, {b: 2}, {c: 3}], {type: "object", value: "b"}) should return true', function() {
  expect(hasElementSatisfyingCondition([{a: 1}, {b: 2}, {c: 3}], {type: "object", value: "b"})).to.equal(true);
});

it('hasElementSatisfyingCondition([{ab: "a"}, {ac: "b"}, {ad: "c"}], {type: "object", value: "a"}) should return false', function() {
  expect(hasElementSatisfyingCondition([{ab: 'a'}, {ac: 'b'}, {ad: 'c'}], {type: "object", value: "a"})).to.equal(false);
});

it('hasElementSatisfyingCondition([{a: 1}, {b: 2}, {c: 3}], {type: "object", value: "d"}) should return false', function() {
  expect(hasElementSatisfyingCondition([{a: 1}, {b: 2}, {c: 3}], {type: "object", value: "d"})).to.equal(false);
});

it('hasElementSatisfyingCondition([null, undefined, "hello"], {type: "string", value: "o"}) should return true', function() {
  expect(hasElementSatisfyingCondition([null, undefined, "hello"], {type: "string", value: "o"})).to.equal(true);
});

it('hasElementSatisfyingCondition([true, false, 42], {type: "number", value: 40}) should return true', function() {
  expect(hasElementSatisfyingCondition([true, false, 42], {type: "number", value: 40})).to.equal(true);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
