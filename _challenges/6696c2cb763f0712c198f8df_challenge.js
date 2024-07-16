// NAMEEN:
// NAMERU:Проверка объектов на наличие числовых значений выше определенного порога

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `areAllObjectValuesAboveThreshold`, которая принимает массив объектов и число.

Функция должна возвращать `true`, если все числовые значения в каждом объекте выше заданного порога, и `false` в противном случае.


Примеры запуска функции:
```javascript
areAllObjectValuesAboveThreshold([{a: 10, b: 20}, {c: 30, d: 40}], 5); // true
areAllObjectValuesAboveThreshold([{a: 10, b: 20}, {c: 3, d: 40}], 5); // false
areAllObjectValuesAboveThreshold([{a: 10, b: -20}, {c: 30, d: 40}], 5); // false
areAllObjectValuesAboveThreshold([{a: 10, b: '20'}, {c: '2', d: 40}], 5); // true
areAllObjectValuesAboveThreshold([{a: 10, b: 'abc'}, {c: 30, d: 40}], 5); // true
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function areAllObjectValuesAboveThreshold(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function areAllObjectValuesAboveThreshold(arr, target) {
  return arr.every(obj => {
    return Object.values(obj).every(el => typeof el === 'number' ? el > target : true);
  });
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function areAllObjectValuesAboveThreshold', () => {
  expect(areAllObjectValuesAboveThreshold).to.be.a('function');
});

it('areAllObjectValuesAboveThreshold([{a: 10, b: 20}, {c: 30, d: 40}], 5) should return true', function() {
  expect(areAllObjectValuesAboveThreshold([{a: 10, b: 20}, {c: 30, d: 40}], 5)).to.equal(true);
});

it('areAllObjectValuesAboveThreshold([{a: 10, b: 20}, {c: 3, d: 40}], 5) should return false', function() {
  expect(areAllObjectValuesAboveThreshold([{a: 10, b: 20}, {c: 3, d: 40}], 5)).to.equal(false);
});

it('areAllObjectValuesAboveThreshold([{a: 10, b: "20"}, {c: 30, d: 40}], 5) should return true', function() {
  expect(areAllObjectValuesAboveThreshold([{a: 10, b: "20"}, {c: 30, d: 40}], 5)).to.equal(true);
});

it('areAllObjectValuesAboveThreshold([{a: 10, b: "abc"}, {c: 30, d: 40}, {e: "1", f: "2", g: "3"}], 5) should return true', function() {
  expect(areAllObjectValuesAboveThreshold([{a: 10, b: "abc"}, {c: 30, d: 40}, {e: '1', f: '2', g: '3'}], 5)).to.equal(true);
});

it('areAllObjectValuesAboveThreshold([{a: 10, b: -20}, {c: 30, d: 40}], 5) should return false', function() {
  expect(areAllObjectValuesAboveThreshold([{a: 10, b: -20}, {c: 30, d: 40}], 5)).to.equal(false);
});

it('areAllObjectValuesAboveThreshold([{x: 100, y: 200}, {z: 300}], 50) should return true', function() {
  expect(areAllObjectValuesAboveThreshold([{x: 100, y: 200}, {z: 300}], 50)).to.equal(true);
});

it('areAllObjectValuesAboveThreshold([{t: 5.5, g: 9.9, o: 0.1}, {x: 100.58, y: 20.13, z: 15.8}, {a: 130, b: 200, c: 250, d: 300}], 0) should return true', function() {
  expect(areAllObjectValuesAboveThreshold([{t: 5.5, g: 9.9, o: 0.1}, {x: 100.58, y: 20.13, z: 15.8}, {a: 130, b: 200, c: 250, d: 300}], 0)).to.equal(true);
});

it('areAllObjectValuesAboveThreshold([{score: 99, level: 2}, {score: 100, level: 3}], 50) should return false', function() {
  expect(areAllObjectValuesAboveThreshold([{score: 99, level: 2}, {score: 100, level: 3}], 50)).to.equal(false);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
