// NAMEEN:
// NAMERU:Нахождение последнего элемента массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `lastElement`, которая принимает один параметр - массив.

Функция должна вернуть последний элемент массива.

Пример запуска функции:
```javascript
last([1, 2, 3, 4, 5]); // 5
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function lastElement(arr) {
    return arr[arr.length - 1];
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function lastElement', () => {
    expect(lastElement).to.be.a('function');
});

it('lastElement([1, 2, 3, 4, 5]) should return 5', () => {
    expect(lastElement([1, 2, 3, 4, 5])).to.equal(5);
});

it('lastElement([1, 2, 3, 4, 5, \'one\', \'two\', \'three\']) should return \'three\'', () => {
    expect(lastElement([1, 2, 3, 4, 5, 'one', 'two', 'three'])).to.equal('three');
});

it('lastElement([1, 2, 3, 4, 5, \'one\', \'two\', \'three\', 6, 7, 8, 9, 10]) should return 10', () => {
    expect(lastElement([1, 2, 3, 4, 5, 'one', 'two', 'three', 6, 7, 8, 9, 10])).to.equal(10);
});

it('lastElement([1, 2, 3, 4, 5, \'one\', \'two\', \'three\', 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]) should return 15', () => {
    expect(lastElement([1, 2, 3, 4, 5, 'one', 'two', 'three', 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])).to.equal(15);
});


// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
