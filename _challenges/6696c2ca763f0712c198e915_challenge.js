// NAMEEN:
// NAMERU:Найти четное положительное число

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findEvenAndPositive`, которая принимает массив чисел и возвращает первое с конца четное положительное число в массиве.

Создайте цикл, который будет проходить массив с конца и возвращать первое найденное четное положительное число.

Если такого числа нет, то функция должна вернуть строку: `No even and positive numbers found`.

```javascript
findEvenAndPositive([4, 2, -6, -8, 5, 7]) // 2
findEvenAndPositive([5, 7, 4, 1, -8, 0]) // 4
findEvenAndPositive([1, 3, 5, 7, -8, -10]) // "No even and positive numbers found"
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findEvenAndPositive(arr) {
  for(let i = arr.length -1; i >= 0; i--) {
    if(arr[i] % 2 === 0 && arr[i] > 0) return arr[i];
  }
  return 'No even and positive numbers found';
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findEvenAndPositive', () => {
  expect(findEvenAndPositive).to.be.a('function');
});

it('findEvenAndPositive([4, -2, -6, -8, 5, 7]) should return 4', () => {
  expect(findEvenAndPositive([4, -2, -6, -8, 5, 7])).to.equal(4);
});

it('findEvenAndPositive([5, 7, 3, 1, -8, 10]) should return 10', () => {
  expect(findEvenAndPositive([5, 7, 3, 1, -8, 10])).to.equal(10);
});

it('findEvenAndPositive([1, 3, 5, 7, -8, -10, 0]) should return "No even and positive numbers found"', () => {
  expect(findEvenAndPositive([1, 3, 5, 7, -8, -10, 0])).to.equal('No even and positive numbers found');
});

it('findEvenAndPositive([-6, -2, 3, -4, 55, 63]) should return "No even and positive numbers found"', () => {
  expect(findEvenAndPositive([-6, -2, 3, -4, 55, 63])).to.equal('No even and positive numbers found');
});

it('findEvenAndPositive([-100, 200, -300, 400, -500, -600]) should return 400', () => {
  expect(findEvenAndPositive([-100, 200, -300, 400, -500, -600])).to.equal(400);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
