// NAMEEN:
// NAMERU:Найти минимальное и максимальное положительное число

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `minAndMaxOfPositive`, которая принимает массив из чисел с типом данных `number` и `string`.

Функция должна перевести все элементы массива в тип `number` и вернуть массив из двух элементов, где:

* первый элемент - `минимальное положительное` число,
* а второй - `максимальное положительное` число.

Если массив пустой или в нем нет положительных чисел, то функция должна вернуть массив: `[undefined, undefined]`.

Методы использовать нельзя.


Примеры запуска функции:
```javascript
minAndMaxOfPositive([-1, '5', 4, -5, '3', 2, '1']) // [1, 5]
minAndMaxOfPositive([-22, '-45', -47, '2', 6, 22, '45', '47']) // [2, 47]
minAndMaxOfPositive([-75, '-55', -41, -75, '-666', -25]) // [undefined, undefined]
minAndMaxOfPositive([]) // [undefined, undefined]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function minAndMaxOfPositive(arr){
  let min;
  let max;

  for (let i = 0; i < arr.length; i++){
    if(Number(arr[i]) > 0 && min === undefined) {
      min = Number(arr[i]);
      max = Number(arr[i]);
    }
    if(Number(arr[i]) > 0 && Number(arr[i]) < min) min = Number(arr[i]);
    if(Number(arr[i]) > 0 && Number(arr[i]) > max) max = Number(arr[i]);
  }

  return [min, max];
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function minAndMaxOfPositive', () => {
  expect(minAndMaxOfPositive).to.be.a('function');
});

it('Function minAndMaxOfPositive should not include Math.min', () => {
  expect(minAndMaxOfPositive.toString()).to.not.include('Math.min');
});

it('Function minAndMaxOfPositive should not include Math.max', () => {
  expect(minAndMaxOfPositive.toString()).to.not.include('Math.max');
});

it("minAndMaxOfPositive([-1, '5', 4, -5, '3', 2, '1']) should return [1, 5]", () => {
  expect(minAndMaxOfPositive([-1, '5', 4, -5, '3', 2, '1'])).to.deep.equal([1, 5]);
});

it("minAndMaxOfPositive([-12, 55, 43, -65, 10, -33, 125, 111]) should return [10, 125]", () => {
  expect(minAndMaxOfPositive([-12, '55', 43, '-65', '10', -33, '125', '111'])).to.deep.equal([10, 125]);
});

it("minAndMaxOfPositive([-5, -36, -41, 10, -666, -452]) should return [10, 10]", () => {
  expect(minAndMaxOfPositive([-5, -36, -41, '10', -666, -452])).to.deep.equal([10, 10]);
});

it("minAndMaxOfPositive([-5, -36, -41, -666, -452]) should return [undefined, undefined]", () => {
  expect(minAndMaxOfPositive([-5, -36, -41, -666, -452])).to.deep.equal([undefined, undefined]);
});

it("minAndMaxOfPositive([]) should return [undefined, undefined]", () => {
  expect(minAndMaxOfPositive([])).to.deep.equal([undefined, undefined]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
