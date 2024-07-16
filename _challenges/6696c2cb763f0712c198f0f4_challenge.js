// NAMEEN:
// NAMERU:Найти только положительные четные числа

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `onlyPositiveAndEven`, которая принимает массив положительных и отрицательных чисел.

Функция должна вернуть новый массив, в котором будут только положительные четные числа из исходного массива.

* Если в исходном массиве нет подходящих чисел, то функция должна вернуть строку 'No matches found'.

* Если передан пустой массив, то функция должна вернуть строку 'Array is empty'.


Примеры запуска функции:
```javascript
onlyPositiveAndEven([1, 2, -3, -4, -5, -6, 7, 8, 9, 10]); // [2, 8, 10]
onlyPositiveAndEven([-56, 40, 8, 693, 142, 46, -74, 0]);  // [40, 8, 142, 46]
onlyPositiveAndEven([-47, -34, 59, -72, -90]);            // 'No matches found'
onlyPositiveAndEven([1, 3, 5, 7, 9]);                     // 'No matches found'
onlyPositiveAndEven([]);                                  // 'Array is empty'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function onlyPositiveAndEven(arr){
  if(!arr.length) return 'Array is empty';
  const newArr = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0 && arr[i] % 2 === 0) newArr.push(arr[i]);
  }
  if(!newArr.length) return 'No matches found';
  else return newArr;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function onlyPositiveAndEven', () => {
  expect(onlyPositiveAndEven).to.be.a('function');
});

it("Function onlyPositiveAndEven doesn't include method filter", () => {
  expect(onlyPositiveAndEven.toString()).to.not.include('filter');
});

it("onlyPositiveAndEven([1, 2, -3, -4, -5, -6, 7, 8, 9, 10]) should return [2, 8, 10]", () => {
  expect(onlyPositiveAndEven([1, 2, -3, -4, -5, -6, 7, 8, 9, 10])).to.deep.equal([2, 8, 10]);
});

it("onlyPositiveAndEven([-56, 400, 88, 693, 142, 46, -74, 0]) should return [400, 88, 142, 46]", () => {
  expect(onlyPositiveAndEven([-56, 400, 88, 693, 142, 46, -74, 0])).to.deep.equal([400, 88, 142, 46]);
});

it("onlyPositiveAndEven([-47, -34, 5-6, -78, -900]) should return 'No matches found'", () => {
  expect(onlyPositiveAndEven([-47, -34, 5-6, -78, -900])).to.equal('No matches found');
});

it("onlyPositiveAndEven([1, 3, 5, 7, 9]) should return 'No matches found'", () => {
  expect(onlyPositiveAndEven([1, 3, 5, 7, 9])).to.equal('No matches found');
});

it("onlyPositiveAndEven([]) should return 'Array is empty'", () => {
  expect(onlyPositiveAndEven([])).to.equal('Array is empty');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
