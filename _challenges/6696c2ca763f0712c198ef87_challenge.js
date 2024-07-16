// NAMEEN:
// NAMERU:Найти в массиве числа и вернуть разницу между ними

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Данная задача похожа на предыдущую, но условия немного усложнены.

Функция `findNumbersAndDifference` принимает массив, который может содержать разные типы данных.

Необходимо найти в массиве последнее число и вернуть разницу между ним и всеми остальными числами.

Для того чтобы найти последнее число, вам необходимо перебрать массив с конца и найти элемент, у которого тип данных `number`.

Это будет отправная точка - число, из которого мы будем вычитать все остальные попадающиеся числа в массиве.

Примеры запуска функции:
```javascript
findNumbersAndDifference([1, true, 2, {age: 34}, 3, 10, "hello"]) // 10 - 3 - 2 - 1 = 4
findNumbersAndDifference([true, "JS", {age: 34},"hello", false]) // 0
```
Подсказка! Эту задачу можно решить длинным путем с двумя циклами. Или с одним.

Попробуйте найти решение и так и так.

Если вы находите эту задачу сложной, ниже подсказка для решения с двумя циклами:

* создайте переменную `lastNumber` и присвойте ей значение `0`
* переберите массив с конца и найдите элемент, у которого тип данных `number`
* присвойте значение этого элемента переменной `lastNumber`
* создайте переменную `difference` и присвойте ей значение `lastNumber`
* переберите массив с конца и найдите элемент, у которого тип данных `number`
* вычтите из переменной `difference` значение этого элемента
* верните значение переменной `difference` + `lastNumber`

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findNumbersAndDifference
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findNumbersAndDifference(arr) {
  let lastNumber = 0;
  for (let i = arr.length-1; i >= 0; i--) {
    if (typeof arr[i] === 'number') {
      lastNumber = arr[i]; break
    }
    }
  let difference = lastNumber;
   for (let i = arr.length-1; i >= 0; i--) {
    if (typeof arr[i] === 'number') {
      difference -= arr[i]
    }
    }
   return difference + lastNumber;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findNumbersAndDifference', () => {
  expect(findNumbersAndDifference).to.be.a('function');
});

it('fundNumbersAndDifference([1, true, 2, {age: 34}, 3, 10, "hello"]) should return 4', () => {
  expect(findNumbersAndDifference([1, true, 2, {age: 34}, 3, 10, "hello"])).to.equal(4);
});

it('fundNumbersAndDifference([1, true, 2, {age: 34}, 3, 10, "hello", 5, 6, 7, 8, 9, 10]) should return -41', () => {
  expect(findNumbersAndDifference([1, true, 2, {age: 34}, 3, 10, "hello", 5, 6, 7, 8, 9, 10])).to.equal(-41);
});

it('fundNumbersAndDifference([true, "JS", {age: 34},"hello", false]) should return 0', () => {
  expect(findNumbersAndDifference([true, "JS", {age: 34},"hello", false])).to.equal(0);
});

it('fundNumbersAndDifference([true, "JS", {age: 34},"hello", false, 1]) should return 1', () => {
  expect(findNumbersAndDifference([true, "JS", {age: 34},"hello", false, 1])).to.equal(1);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
