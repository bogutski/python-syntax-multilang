// NAMEEN:
// NAMERU:Умножение элементов массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `mult`, которая принимает один параметр - массив.

Массив содержит только целые положительные или отрицательные числа.

Функция должна вернуть произведение первого и последнего элемента массива.

Пример запуска функции:
```javascript
mult([1, 2, 3, 4, 5]); // 5
mult([1, 2, 3, 4, 5, 6]); // 6
```

Для получения последнего элемента массива используйте пример `arr[arr.length - 1]`
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function mult(numbers){
  return numbers[0] * numbers[numbers.length - 1];
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function mult', () => {
    expect(mult).to.be.a('function');
});

it('mult([1, 2, 3, 4, 5]) should return 5', () => {
    expect(mult([1, 2, 3, 4, 5])).to.be.equal(5);
});

it('mult([10, 2, 3, 4, 5, -6]) should return -60', () => {
    expect(mult([10, 2, 3, 4, 5, -6])).to.be.equal(-60);
});

it('mult([3, 4, 5, 6, 7]) should return 21', () => {
    expect(mult([3, 4, 5, 6, 7])).to.be.equal(21);
});

it('mult([2, 3, 4, 5, 6, 7, 8]) should return 16', () => {
    expect(mult([2, 3, 4, 5, 6, 7, 8])).to.be.equal(16);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
