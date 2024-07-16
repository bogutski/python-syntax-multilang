// NAMEEN:
// NAMERU:Сумма нечетных положительных чисел

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `sum`, которая принимает массив чисел и возвращает сумму всех нечетных положительных чисел в массиве.

Если в массиве нет нечетных положительных чисел, функция должна вернуть 0.

Примеры запуска функции:
```javascript
console.log(sum([1, 2, 3])); // 4
console.log(sum([2, 8, -7, 3])); // 3
console.log(sum([-1, -3, -5, -7, -9])); // 0
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sum(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        if(arr[i] > 0 && arr[i] % 2) sum += arr[i];
    }
    return sum;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function sum', () => {
  expect(sum).to.be.a('function');
});

it('sum([-1, 2, 3, -9, 11, -8, -2, 1]) should return 15', () => {
  expect(sum([-1, 2, 3, -9, 11, -8, -2, 1])).to.be.equal(15);
});

it('sum([1, 8, -7, 3]) should return 4', () => {
  expect(sum([1, 8, -7, 3])).to.be.equal(4);
});

it('sum([-1, -3, -5, -7, -9]) should return 0', () => {
  expect(sum([-1, -3, -5, -7, -9])).to.be.equal(0);
});

it('sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) should return 25', () => {
  expect(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).to.be.equal(25);
});

it('sum([100, 756, -987, 258, 455, -369]) should return 455', () => {
  expect(sum([100, 756, -987, 258, 455, -369])).to.be.equal(455);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
