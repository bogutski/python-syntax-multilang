// NAMEEN:
// NAMERU:Объединение и сглаживание массивов с фильтрацией

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `combineFlattenFilter`, которая принимает три аргумента: два массива `array1` и `array2` с возможными подмассивами, и функцию `predicate` для фильтрации.

Функция должна сначала объединить два массива, затем "выпрямить" их на один уровень, и после этого отфильтровать результат, используя заданную функцию `predicate`.

Возвращаемый массив должен содержать только те элементы, которые удовлетворяют условию функции `predicate`.


Примеры Запуска Функции:
```javascript
combineFlattenFilter([1, 2, [3]], [4, [5, 6]], x => x > 3); // [4, 5, 6]
combineFlattenFilter([null, undefined], [NaN, 0], x => x !== null); // [undefined, NaN, 0]
combineFlattenFilter([[10], 20], [[30], [40, 50]], x => x % 10 === 0); // [10, 20, 30, 40, 50]
combineFlattenFilter(['apple', ['banana']], ['cherry', ['date']], x => x.startsWith('b')); // ['banana']
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function combineFlattenFilter(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function combineFlattenFilter(arr1, arr2, isTrue) {
  const combinedAndFlatten = [...arr1, ...arr2].flat(Infinity)
  let result = []

  for(let el of combinedAndFlatten){
    if(isTrue(el)) result.push(el)
  }

  return result;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function combineFlattenFilter', () => {
  expect(combineFlattenFilter).to.be.a('function');
});

it('Function combineFlattenFilter should include method flat()', () => {
  const res = combineFlattenFilter.toString()
  expect(res).to.include('.flat(')
});

it("combineFlattenFilter([1, 2, [3]], [4, [5, 6]], x => x > 3) should return [4, 5, 6]", function() {
  expect(combineFlattenFilter([1, 2, [3]], [4, [5, 6]], x => x > 3)).to.deep.equal([4, 5, 6]);
});

it("combineFlattenFilter(['apple', ['banana']], ['cherry', ['date']], x => x.startsWith('b')) should return ['banana']", function() {
  expect(combineFlattenFilter(['apple', ['banana']], ['cherry', ['date']], x => x.startsWith('b'))).to.deep.equal(['banana']);
});

it("combineFlattenFilter([[10], 20], [[30], [40, 50]], x => x % 10 === 0) should return [10, 20, 30, 40, 50]", function() {
  expect(combineFlattenFilter([[10], 20], [[30], [40, 50]], x => x % 10 === 0)).to.deep.equal([10, 20, 30, 40, 50]);
});

it("combineFlattenFilter([], [], x => x !== undefined) should return an empty array", function() {
  expect(combineFlattenFilter([], [], x => x !== undefined)).to.deep.equal([]);
});

it("combineFlattenFilter([null, undefined], [NaN, 0], x => x !== null) should return [undefined, NaN, 0]", function() {
  expect(combineFlattenFilter([null, undefined], [NaN, 0], x => x !== null)).to.deep.equal([undefined, NaN, 0]);
});

it("combineFlattenFilter(['one', ['two']], [['three']], x => typeof x === 'string') should return ['one', 'two', 'three']", function() {
  expect(combineFlattenFilter(['one', ['two']], [['three']], x => typeof x === 'string')).to.deep.equal(['one', 'two', 'three']);
});

it("combineFlattenFilter([['yes', 'no'], ['maybe']], [['always']], x => x.length > 2) should return ['yes', 'maybe', 'always']", function() {
  expect(combineFlattenFilter([['yes', 'no'], ['maybe']], [['always']], x => x.length > 2)).to.deep.equal(['yes', 'maybe', 'always']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
