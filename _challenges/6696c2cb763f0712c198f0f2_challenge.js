// NAMEEN:
// NAMERU:Найти однозначные и трехзначные числа

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `only1And3LengthDigits`, которая принимает массив положительных чисел.

Функция должна вернуть новый массив, состоящий только из однозначных и трехзначных чисел.

При добавлении элементов в новый массив:
* однозначные числа должны добавляться в начало массива - метод `unshift`;
* трехзначные числа должны добавляться в конец массива - метод `push`.

Если массив пустой или в нем нет однозначных и трехзначных чисел, то функция должна вернуть `false`.


Примеры запуска функции:
```javascript
only1And3LengthDigits([54528, 78, 25, 12, 1, 0, 7, 1, 6, 2236, 7542]); // [6, 1, 7, 0, 1]
only1And3LengthDigits([0, 5, 10, 99, 100, 1000, 10000]);               // [5, 0, 100]
only1And3LengthDigits([1, 1000, 10000]);                               // false
only1And3LengthDigits([]);                                             // false
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function only1And3LengthDigits(arr){
  if(!arr.length) return false;
  const newArr = [];

  for (let i = 0; i < arr.length; i++){
    if (arr[i].toString().length === 1) newArr.unshift(arr[i]);
    else if (arr[i].toString().length === 3) newArr.push(arr[i]);
  }

  if(!newArr.length) return false;
  else return newArr;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function only1And3LengthDigits', () => {
  expect(only1And3LengthDigits).to.be.a('function');
});

it("Function only1And3LengthDigits does not include method 'filter'", () => {
  expect(only1And3LengthDigits.toString()).to.not.include('filter');
});

it("only1And3LengthDigits([1, 2, 3, 22, 44, 68, 99, 10, 222, 354, 987, 4000]) should return [3, 2, 1, 222, 354, 987]", () => {
  expect(only1And3LengthDigits([1, 2, 3, 22, 44, 68, 99, 10, 222, 354, 987, 4000])).to.deep.equal([3, 2, 1, 222, 354, 987]);
});

it("only1And3LengthDigits([55, 99, 75, 12, 0, 9, 5, 1, 7, 2236, 7854126]) should return [7, 1, 5, 9, 0]", () => {
  expect(only1And3LengthDigits([55, 99, 75, 12, 0, 9, 5, 1, 7, 2236, 7854126])).to.deep.equal([7, 1, 5, 9, 0]);
});

it("only1And3LengthDigits([0, 9, 10, 99, 100, 999, 1000, 9999, 10000]) should return [9, 0, 100, 999]", () => {
  expect(only1And3LengthDigits([0, 9, 10, 99, 100, 999, 1000, 9999, 10000])).to.deep.equal([9, 0, 100, 999]);
});

it("only1And3LengthDigits([51, 64, 4569, 21478, 21, 36, 9654, 87415]) should return false", () => {
  expect(only1And3LengthDigits([51, 64, 4569, 21478, 21, 36, 9654, 87415])).to.equal(false);
});

it("only1And3LengthDigits([9, 786, 1, 442, 365, 1, 852, 6, 147]) should return [6, 1, 1, 9, 786, 442, 365, 852, 147]", () => {
  expect(only1And3LengthDigits([9, 786, 1, 442, 365, 1, 852, 6, 147])).to.deep.equal([6, 1, 1, 9, 786, 442, 365, 852, 147]);
});

it("only1And3LengthDigits([]) should return false", () => {
  expect(only1And3LengthDigits([])).to.equal(false);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
