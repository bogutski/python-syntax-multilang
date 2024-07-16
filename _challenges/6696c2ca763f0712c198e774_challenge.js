// NAMEEN:
// NAMERU:Если в массиве число и его квадрат?

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `searchDouble` принимает два параметра:
* `arr` - массив чисел
* `number` - число

Необходимо определить содержится ли в массиве число `number` и его квадрат.

Если содержится оба числа, то функция должна вернуть `true`, иначе `false`.

```javascript
searchDouble([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2); // true
searchDouble([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5); // false
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function searchDouble(arr, number) {
    const el1 = arr.indexOf(number);
    const el2 = arr.indexOf(number ** 2);
    if (el1 !== -1 && el2 !== -1) {
        return true;
    } return false;


}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function searchDouble', () => {
    expect(searchDouble).to.be.a('function');
});


it(`searchDouble([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2) should return true`, () => {
    expect(searchDouble([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)).to.be.true;
});

it(`searchDouble([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5) should return false`, () => {
    expect(searchDouble([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)).to.be.false;
});

it(`searchDouble([10, 20, 30, 40, 50, 40, 30, 20, 10, 100], 10) should return true`, () => {
    expect(searchDouble([10, 20, 30, 40, 50, 40, 30, 20, 10, 100], 10)).to.be.true;
});

it(`searchDouble([10, 20, 30, 40, 50, 40, 30, 20, 10, 100], 100) should return false`, () => {
    expect(searchDouble([10, 20, 30, 40, 50, 40, 30, 20, 10, 100], 100)).to.be.false;
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
