// NAMEEN:
// NAMERU:Определение типа данных первого элемента массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `typeofArr`, которая принимает один параметр - массив.

Функция должна вернуть тип данных первого элемента массива.

Пример запуска функции:
```javascript
typeofArr([1, 2, 3]) // 'number'
typeofArr(["1", "2", 3]) // 'string'
typeofArr([true, "2", 3]) // 'boolean'
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function typeofArr(mixArr){
  return typeof mixArr[0];
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function typeofArr', () => {
  expect(typeofArr).to.be.a('function');
});

it('typeofArr([1, 2, 3]) should return "number"', () => {
    expect(typeofArr([1, 2, 3])).to.be.equal('number');
} );

it('typeofArr(["1", "2", 3]) should return "string"', () => {
    expect(typeofArr(["1", "2", 3])).to.be.equal('string');
});

it('typeofArr([true, "2", 3]) should return "boolean"', () => {
    expect(typeofArr([true, "2", 3])).to.be.equal('boolean');
});

it('typeofArr([null, "2", 3]) should return "object"', () => {
    expect(typeofArr([null, "2", 3])).to.be.equal('object');
});

it('typeofArr([-5, "2", 3]) should return "number"', () => {
    expect(typeofArr([-5, "2", 3])).to.be.equal('number');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
