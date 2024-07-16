// NAMEEN:
// NAMERU:Сделать массив симметричным

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
В данной задаче нужно исправить функцию `keepOnlyPairs', которая убирает все непарные элементы из массива.

После удаления всех непарных элементов, массив гарантировано будет симметричным.

Количество повторений каждого элемента не будет больше двух.

В функции четыре ошибки, которые нужно исправить, все они до первого цикла.


Примеры запуска функции:
```javascript
keepOnlyPairs([1, 'a', 2, 8, 2, 'abc', 1]); // [1, 2, 2, 1]
keepOnlyPairs([1, 2, 3, 4, 5, 6, 7, 8, 9]); // []
keepOnlyPairs([]);                          // 'Array is empty'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
Function keepOnlyPairs([arr]){
  if(arr.length !== 0) return 'Array is empty';
  const obj = [];

  for(let i = 0; i < arr.length; i++){
    if ( !obj[arr[i]] ) obj[arr[i]] = 1;   // if object does not have a key, create it and set value to 1
    else obj[arr[i]]++;                    // if object has a key, increment value by 1
  }

  for(let i = 0; i < arr.length; i++){
    if ( obj[arr[i]] === 1 ) {            // if object value is 1, remove element from array
      arr.splice(i, 1)                    // use splice method to remove element from array
      i--;                                // decrement i to avoid skipping element
    }
  }

  return arr;
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function keepOnlyPairs(arr){
  if(!arr.length) return 'Array is empty';
  const obj = {};

  for(let i = 0; i < arr.length; i++){
    if(!obj[arr[i]]) obj[arr[i]] = 1;
    else obj[arr[i]]++;
  }

  for(let i = 0; i < arr.length; i++){
    if(obj[arr[i]] === 1) {
      arr.splice(i, 1)
      i--;
    }
  }

  return arr;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function keepOnlyPairs', () => {
  expect(keepOnlyPairs).to.be.a('function');
});

it("Function keepOnlyPairs does not include 'reverse' method", () => {
  expect(keepOnlyPairs.toString()).to.not.include('reverse');
});

it("Function keepOnlyPairs does not include 'join' method", () => {
  expect(keepOnlyPairs.toString()).to.not.include('join');
});

it("keepOnlyPairs([1, 5, 2, 3, 7, 3, 2, 9, 1]) should return [1, 2, 3, 3, 2, 1]", () => {
  expect(keepOnlyPairs([1, 5, 2, 3, 7, 3, 2, 9, 1])).to.deep.equal([1, 2, 3, 3, 2, 1]);
});

it("keepOnlyPairs(['a', 1, 2, 4, 'B', 3, 'C', 2, 'b', 1, 'A']) should return [1, 2, 2, 1]", () => {
  expect(keepOnlyPairs(['a', 1, 2, 4, 'B', 3, 'C', 2, 'b', 1, 'A'])).to.deep.equal([1, 2, 2, 1]);
});

it("keepOnlyPairs([23, 55, 'a', 74, 'b', 55, 23]) should return [23, 55, 55, 23]", () => {
  expect(keepOnlyPairs([23, 55, 'a', 74, 'b', 55, 23])).to.deep.equal([23, 55, 55, 23]);
});

it("keepOnlyPairs(['a', 'b', 'c', 'test', 'c', true, 'b', false, 'a']) should return ['a', 'b', 'c', 'c', 'b', 'a']", () => {
  expect(keepOnlyPairs(['a', 'b', 'c', 'test', 'c', true, 'b', false, 'a'])).to.deep.equal(['a', 'b', 'c', 'c', 'b', 'a']);
});

it("keepOnlyPairs([1, 2, 3, 4, 5, 6, 7, 8, 9]) should return []", () => {
  expect(keepOnlyPairs([1, 2, 3, 4, 5, 6, 7, 8, 9])).to.deep.equal([]);
});

it("keepOnlyPairs([]) should return 'Array is empty'", () => {
  expect(keepOnlyPairs([])).to.equal('Array is empty');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
