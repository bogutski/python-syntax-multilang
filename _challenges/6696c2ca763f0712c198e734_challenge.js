// NAMEEN:
// NAMERU:Нахождение первого элемента вложенного массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `innerArray`, которая принимает один параметр - массив.

Массив содержит в себе вложенный массив, который находится в конце.

Например: `[1, 2, 3, [4, 5, 6]]`

Функция должна вернуть первый элемент вложенного массива.

Пример запуска функции:
```javascript
nestedArray([1, 2, 3, [4, 5, 6]]); // 4
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function innerArray(firstElement) {
    return firstElement[firstElement.length - 1][0];
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function innerArray', () => {
    expect(innerArray).to.be.a('function');
});

it('Function innerArray returns first element of nested array', () => {
    expect(innerArray([1, 2, 3, [4, 5, 6]])).to.be.equal(4);
});

it('Function innerArray returns first element of nested array', () => {
    expect(innerArray(['a', 'b', 'c', 'd', ['f', 'g', 'h']])).to.be.equal('f');
});

it('Function innerArray returns first element of nested array', () => {
    expect(innerArray([true, false, false, true, 10, 'a', [7, true]])).to.be.equal(7);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
