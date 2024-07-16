// NAMEEN:
// NAMERU:Сколько раз встречается число в массиве

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `checkQuantity` принимает два параметра: массив чисел и число.

Необходимо проверить сколько раз встречается число в массиве и вернуть количество этих вхождений.

Число может встречаться не более трех раз.

Примеры запуска функции:
```javascript
checkQuantity([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5); // 1
checkQuantity([1, 5, 2, 4, 5, 6, 7, 5, 2, 10], 2); // 2
checkQuantity([1, 5, 2, 4, 5, 6, 7, 5, 2, 10], 5); // 3
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function checkQuantity(array, number) {
    let count = 0;
    const firstIndex = array.indexOf(number);
    const secondIndex = array.indexOf(number, firstIndex + 1);
    const thirdIndex = array.indexOf(number, secondIndex + 1);
    if (firstIndex > -1) count++;
    if (secondIndex > -1) count++;
    if (thirdIndex > firstIndex) count++;
    return count;
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function checkQuantity', () => {
    expect(checkQuantity).to.be.a('function');
});

it('checkQuantity([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5) should return 1', () => {
    expect(checkQuantity([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)).eql(1);
});

it('checkQuantity([1, 5, 2, 4, 5, 6, 7, 5, 2, 10], 2) should return 2', () => {
    expect(checkQuantity([1, 5, 2, 4, 5, 6, 7, 5, 2, 10], 2)).eql(2);
});

it('checkQuantity([1, 5, 2, 4, 5, 6, 7, 5, 2, 10], 5) should return 3', () => {
    expect(checkQuantity([1, 5, 2, 4, 5, 6, 7, 5, 2, 10], 5)).eql(3);
});

it('checkQuantity([10, 500, 2045, 40, 1000, 500, 75, 523, 204, 103], 500) should return 2', () => {
    expect(checkQuantity([10, 500, 2045, 40, 1000, 500, 75, 523, 204, 103], 500)).eql(2);
});

it('checkQuantity([10, 500, 2045, 40, 1000, 500, 75, 523, 204, 103], 2) should return 0', () => {
    expect(checkQuantity([10, 500, 2045, 40, 1000, 500, 75, 523, 204, 103], 2)).eql(0);
});

it('checkQuantity([10, 500, 2045, 40, 1000, 500, 75, 523, 204, 10], 10) should return 2', () => {
    expect(checkQuantity([10, 500, 2045, 40, 1000, 500, 75, 523, 204, 10], 10)).eql(2);
});

it('checkQuantity([10, 500, 2045, 40, 1000, 500, 75, 523, 204, 10], 2045) should return 1', () => {
    expect(checkQuantity([10, 500, 2045, 40, 1000, 500, 75, 523, 204, 10], 2045)).eql(1);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
