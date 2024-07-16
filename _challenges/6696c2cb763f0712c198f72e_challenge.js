// NAMEEN:
// NAMERU:Поиск уникального целого числа

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findUniqueInteger`, которая принимает массив целых чисел.

Функция должна вернуть первое уникальное целое число из массива, то есть такое число, которое не имеет своего отрицательного эквивалента в массиве.

Если такого числа нет, функция должна вернуть `No unique integers`.


Пример запуска функции:
```javascript
findUniqueInteger([-3, 1, 2, 3, -1, -4, -2]); // Вывод: -4
findUniqueInteger([1, -1, 2, -2, 3, 3]); // Вывод: 3
findUniqueInteger([5, -5, 8, -8]); // Вывод: "No unique integers"
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findUniqueInteger(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findUniqueInteger(numbers) {
  for(let n of numbers){
    if(numbers.find(el => el === -n) === undefined) return n
  }

  return 'No unique integers';
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findUniqueInteger', () => {
  expect(findUniqueInteger).to.be.a('function');
});

it("findUniqueInteger([-3, 1, 2, 3, -1, -4, -2]) should return -4", () => {
  expect(findUniqueInteger([-3, 1, 2, 3, -1, -4, -2])).to.equal(-4);
});

it("findUniqueInteger([1, -1, 2, -2, 3, 3]) should return 3", () => {
  expect(findUniqueInteger([1, -1, 2, -2, 3, 3])).to.equal(3);
});

it("findUniqueInteger([5, -5, 8, -8]) should return 'No unique integers'", () => {
  expect(findUniqueInteger([5, -5, 8, -8])).to.equal("No unique integers");
});

it("findUniqueInteger([-1, -2, -3, -4, -5]) should return -1", () => {
  expect(findUniqueInteger([-1, -2, -3, -4, -5])).to.equal(-1);
});

it("findUniqueInteger([1, 2, 3, 4, 5]) should return 1", () => {
  expect(findUniqueInteger([1, 2, 3, 4, 5])).to.equal(1);
});

it("findUniqueInteger([5, 1, -1, 2, -2, 3, -3, 4, -4]) should return 5", () => {
  expect(findUniqueInteger([5, 1, -1, 2, -2, 3, -3, 4, -4])).to.equal(5);
});

it("findUniqueInteger([1, -1, 2, -2, 3, 3, 4, 4, 5, 5]) should return 3", () => {
  expect(findUniqueInteger([1, -1, 2, -2, 3, 3, 4, 4, 5, 5])).to.equal(3);
});

it("findUniqueInteger([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]) should return 'No unique integers'", () => {
  expect(findUniqueInteger([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).to.equal('No unique integers');
});

it("findUniqueInteger([1, 2, 3, 4, 5, -1, -2, -3, -4, -5]) should return 'No unique integers'", () => {
  expect(findUniqueInteger([1, 2, 3, 4, 5, -1, -2, -3, -4, -5])).to.equal('No unique integers');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
