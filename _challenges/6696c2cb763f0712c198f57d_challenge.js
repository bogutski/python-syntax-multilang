// NAMEEN:
// NAMERU:Поиск глубины массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findArrayDepth`, которая принимает один аргумент — массив.

Массив может содержать разные типы данных, включая вложенные массивы.

Функция должна возвращать максимальную глубину вложенности массива.


Примеры запуска функции:
```javascript
findArrayDepth([]); // 1
findArrayDepth([1, 2, 3]); // 1
findArrayDepth([1, [2, 3], [4, [5, 6]]]); // 3
findArrayDepth([1, [2, [3, [4, [5]]]]]);  // 5
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findArrayDepth(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findArrayDepth(arr) {
  let copy = [...arr]
  let count = 1

  let stop = false
  while(!stop){
    stop = true

    for(let el of copy){
      if(Array.isArray(el)){
        copy = copy.flat()
        stop = false
        count++
        break
      }
    }
  }

  return count;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findArrayDepth', () => {
  expect(findArrayDepth).to.be.a('function');
});

it("findArrayDepth([1, 2, 3]) should return 1", function() {
  expect(findArrayDepth([1, 2, 3])).to.equal(1);
});

it("findArrayDepth([1, [2, 3], [4, [5, 6]]]) should return 3", function() {
  expect(findArrayDepth([1, [2, 3], [4, [5, 6]]])).to.equal(3);
});

it("findArrayDepth([1, [2, [3, [4, [5]]]]]) should return 5", function() {
  expect(findArrayDepth([1, [2, [3, [4, [5]]]]])).to.equal(5);
});

it("findArrayDepth([]) should return 1", function() {
  expect(findArrayDepth([])).to.equal(1);
});

it("findArrayDepth([[], []]) should return 2", function() {
  expect(findArrayDepth([[], []])).to.equal(2);
});

it("findArrayDepth([0, [1], [2, [3]]]) should return 3", function() {
  expect(findArrayDepth([0, [1], [2, [3]]])).to.equal(3);
});

it("findArrayDepth([[1, [2, [3, [4, [5]]]]]]) should return 6", function() {
  expect(findArrayDepth([[1, [2, [3, [4, [5]]]]]])).to.equal(6);
});

it("findArrayDepth(['not', ['just', ['numbers']]]) should return 3", function() {
  expect(findArrayDepth(['not', ['just', ['numbers']]])).to.equal(3);
});

it("findArrayDepth([[[[[null]]]]]) should return 5", function() {
  expect(findArrayDepth([[[[[null]]]]])).to.equal(5);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
