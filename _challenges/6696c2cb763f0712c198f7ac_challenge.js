// NAMEEN:
// NAMERU:Поиск элементов по типам

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findElementsByType`, которая принимает массив и произвольное количество элементов.

Функция должна проверить, какие из переданных элементов присутствуют в массиве, и создать объект, где:
 * ключами будут типы найденных элементов,
 * значениями — массивы всех элементов из исходного массива соответствующего типа.

Если ни один из переданных элементов не найден, функция должна вернуть пустой объект.


Примеры запуска функции:
```javascript
console.log(findElementsByType([true, 'hello', NaN, undefined, 'world', 5, 0, false], 'hello', true));
// Вывод: { string: ['hello', 'world'], boolean: [true, false] }

console.log(findElementsByType(['true', 'hello JS', 1, 2, 3, 0, false, 'a', 'b', 'c'], 'true', 'b'));
// Вывод: { string: ['true', 'hello JS', 'a', 'b', 'c'] }

console.log(findElementsByType([100, 'apple', 'Alice', NaN], false));
// Вывод: {}
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findElementsByType(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findElementsByType(arr, ...elements) {
  let result = {}
  const toCheck = [...elements]

  for(let el of toCheck){
    if(arr.includes(el)) result[typeof el] = []
  }

  const toFind = Object.keys(result)
  for(let el of arr){
    const typeOfEl = typeof el
    if(toFind.includes(typeOfEl)) result[typeOfEl].push(el)
  }

  return result;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findElementsByType', () => {
  expect(findElementsByType).to.be.a('function');
});

it('findElementsByType([true, "hello", NaN, undefined, "world", 5, 0, false], "hello", true) should return {string: ["hello", "world"], boolean: [true, false]}', function() {
  expect(findElementsByType([true, "hello", NaN, undefined, "world", 5, 0, false], "hello", true)).to.deep.equal({
    string: ["hello", "world"],
    boolean: [true, false]
  });
});

it('findElementsByType(["true", "hello JS", 1, 2, 3, 0, false, "a", "b", "c"], "true", "b") should return {string: ["true", "hello JS", "a", "b", "c"]}', function() {
  expect(findElementsByType(["true", "hello JS", 1, 2, 3, 0, false, "a", "b", "c"], "true", "b")).to.deep.equal({
    string: ["true", "hello JS", "a", "b", "c"]
  });
});

it('findElementsByType([100, "apple", "Alice", NaN], false) should return {}', function() {
  expect(findElementsByType([100, "apple", "Alice", NaN], false)).to.deep.equal({});
});

it('findElementsByType([1, 2, "a", "b", true, false], "a", 2) should return {string: ["a", "b"], number: [1, 2]}', function() {
  expect(findElementsByType([1, 2, "a", "b", true, false], "a", 2)).to.deep.equal({
    string: ["a", "b"],
    number: [1, 2]
  });
});

it('findElementsByType(["x", "y", "z"], "y", "x") should return {string: ["x", "y", "z"]}', function() {
  expect(findElementsByType(["x", "y", "z"], "y", "x")).to.deep.equal({
    string: ["x", "y", "z"]
  });
});

it('findElementsByType([true, false, true, false], false) should return {boolean: [true, false, true, false]}', function() {
  expect(findElementsByType([true, false, true, false], false)).to.deep.equal({
    boolean: [true, false, true, false]
  });
});

it('findElementsByType([null, undefined, null], null, undefined) should return {object: [null, null], undefined: [undefined]}', function() {
  expect(findElementsByType([null, undefined, null], null, undefined)).to.deep.equal({
    object: [null, null],
    undefined: [undefined]
  });
});

it('findElementsByType([1, "a", true], 1, "a", true) should return {number: [1], string: ["a"], boolean: [true]}', function() {
  expect(findElementsByType([1, "a", true], 1, "a", true)).to.deep.equal({
    number: [1],
    string: ["a"],
    boolean: [true]
  });
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
