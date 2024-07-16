// NAMEEN:
// NAMERU:Сумма и количество всех чисел в массиве

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
В этом решении мы улучшим нашу прошлую функцию по суммированию чисел.

Напишите функцию `sumAndCount`, которая принимает массив из строковых и числовых значений.

Числа могут быть строкового типа, например, `['1', '2', '-30']`.

Функция должна пройтись по массиву и найти все числа, не зависимо от типа данных, и посчитать сумму и количество найденных чисел.

 * Если массив пустой, то функция должна вернуть строку `'Array is empty'`.
 * Если в массиве нет чисел, то функция должна вернуть строку `'No numbers were found'`.
 * Если в массиве есть числа, то функция должна вернуть строку: `'Count of numbers: 3, sum of numbers: 6'`, где `3` - количество найденных чисел, а `6` - сумма найденных чисел.


Примеры запуска функции:
```javascript
sumAndCount([]) // 'Array is empty'
sumAndCount(['a', 'b', 'c']) // 'No numbers were found'
sumAndCount(['1', '2', '3']) // 'Count of numbers: 3, sum of numbers: 6'
sumAndCount(['1', '2', '3', 'a', 'b', 'c', 10]) // 'Count of numbers: 4, sum of numbers: 16'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sumAndCount(arr){
  if(!arr.length) return 'Array is empty'
  let sum = 0;
  let numCount = 0;
  for(let i = 0; i < arr.length; i++){
    if(!isNaN(Number(arr[i]))){
      sum += Number(arr[i]);
      numCount++;
    }
  }
  if(!numCount) return 'No numbers were found in array'
  return `Count of numbers: ${numCount}, sum of numbers: ${sum}`
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function sumAndCount', () => {
  expect(sumAndCount).to.be.a('function');
});

it("sumAndCount(['a', 'b', 'c']) should return 'No numbers were found in array'", () => {
  expect(sumAndCount(['a', 'b', 'c'])).to.equal('No numbers were found in array');
});

it("sumAndCount(['1', '2', '3']) should return 'Count of numbers: 3, sum of numbers: 6'", () => {
  expect(sumAndCount(['1', '2', '3'])).to.equal('Count of numbers: 3, sum of numbers: 6');
});

it("sumAndCount(['1', '2', '3', 'a', 'b', 'c', 10]) should return 'Count of numbers: 4, sum of numbers: 16'", () => {
  expect(sumAndCount(['1', '2', '3', 'a', 'b', 'c', 10])).to.equal('Count of numbers: 4, sum of numbers: 16');
});

it("sumAndCount([10, 20, 100, 5000]) should return 'Count of numbers: 4, sum of numbers: 5130'", () => {
  expect(sumAndCount([10, 20, 100, 5000])).to.equal('Count of numbers: 4, sum of numbers: 5130');
});

it("sumAndCount([-5, -16, '55', 'test', 0, '-4', -74, '100']) should return 'Count of numbers: 7, sum of numbers: 56'", () => {
  expect(sumAndCount([-5, -16, '55', 'test', 0, '-4', -74, '100'])).to.equal('Count of numbers: 7, sum of numbers: 56');
});

it("sumAndCount([]) should return 'Array is empty'", () => {
  expect(sumAndCount([])).to.equal('Array is empty');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
