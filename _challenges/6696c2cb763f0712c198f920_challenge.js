// NAMEEN:
// NAMERU:Проверка количества элементов разных типов в массивах

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `hasArrayWithMinTypesCount`, которая принимает несколько массивов и одно число.

Функция должна возвращать `true`, если хотя бы один массив содержит элементы одного типа в количестве, равном или превышающем указанное число, и `false` в противном случае.


Примеры запуска функции:
```javascript
hasArrayWithMinTypesCount(['a', 'b', 'c', 'd'], 4); // true
hasArrayWithMinTypesCount([0, '1', true], [false, NaN], [undefined, true, 'hello'], 2); // false
hasArrayWithMinTypesCount(['a', 'b'], [false, undefined, true], [1, 2, undefined, true, 3], 3); // true
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function hasArrayWithMinTypesCount(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function hasArrayWithMinTypesCount(...arrays) {
  const result = [...arrays]
  const min= result.pop()

  return result.some(array => {
    let object = {}
    for(let el of array){
      if(!object.hasOwnProperty(typeof el)) object[typeof el] = 1
      else object[typeof el] += 1;
    }

    return Object.values(object).some(el => el >= min)
  });
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function hasArrayWithMinTypesCount', () => {
  expect(hasArrayWithMinTypesCount).to.be.a('function');
});

it('hasArrayWithMinTypesCount([0, "1", true], [false, NaN], [undefined, true, "hello"], 2) should return false', function() {
  expect(hasArrayWithMinTypesCount([0, "1", true], [false, NaN], [undefined, true, "hello"], 2)).to.equal(false);
});

it('hasArrayWithMinTypesCount(["a", "b"], [false, undefined, true], [1, 2, undefined, true, 3], 3) should return true', function() {
  expect(hasArrayWithMinTypesCount(["a", "b"], [false, undefined, true], [1, 2, undefined, true, 3], 3)).to.equal(true);
});

it('hasArrayWithMinTypesCount([0, 1, 2], [true, true, true], ["a", "b", "c"], 3) should return true', function() {
  expect(hasArrayWithMinTypesCount([0, 1, 2], [true, true, true], ["a", "b", "c"], 3)).to.equal(true);
});

it('hasArrayWithMinTypesCount([0, 1, 2], [true, "true", true], ["a", "b", "c"], 3) should return true', function() {
  expect(hasArrayWithMinTypesCount([0, 1, 2], [true, "true", true], ["a", "b", "c"], 3)).to.equal(true);
});

it('hasArrayWithMinTypesCount([null, undefined], [NaN, "NaN"], [false, 0], 2) should return false', function() {
  expect(hasArrayWithMinTypesCount([null, undefined], [NaN, "NaN"], [false, 0], 2)).to.equal(false);
});

it('hasArrayWithMinTypesCount([false, "false"], [1, 2, 3, 4], [null, undefined, null], 3) should return true', function() {
  expect(hasArrayWithMinTypesCount([false, "false"], [1, 2, 3, 4], [null, undefined, null], 3)).to.equal(true);
});

it('hasArrayWithMinTypesCount([0, 1], [true], ["a"], 1) should return true', function() {
  expect(hasArrayWithMinTypesCount([0, 1], [true], ["a"], 1)).to.equal(true);
});

it('hasArrayWithMinTypesCount([0], [true], ["a"], 2) should return false', function() {
  expect(hasArrayWithMinTypesCount([0], [true], ["a"], 2)).to.equal(false);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
