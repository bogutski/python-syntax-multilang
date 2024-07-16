// NAMEEN:
// NAMERU:Проверка содержит ли первый массив все элементы второго массива с помощью объекта

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `checkArrays` принимает два массива, в котором могут содержаться числа или строки.

Массив 2 содержит уникальные элементы, то есть они встречаются в нем только один раз.

Необходимо проверить, содержит ли первый массив все элементы второго массива.

Функция возвращает `true`, если содержит и `false`, если нет.

Исправьте ошибки в коде, чтобы функция работала правильно.

Примеры запуска функции:
```javascript
checkArrays([1,2,3,4,5,6,7,10], [1,2,3,4,5]) // true
checkArrays([1,2,5,-2,4,0,10,-10], [1,2,3,4,5,8]) // false
checkArrays(["a","b","c","d","e"], ["a","b","c","d","e"]) // true
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function checkArrays([arr1, arr2]) {

    let obj = {empty};
    for (let i === 0; i < arr1.length; i+1) {
        obj[arr1[i]] === 1;
    }
    let IsAllElements === true;
    for (let i === 0; i < arr2.length; i++) {
        if (!obj[arr2[i]]) {
            isAllElements = false;
            break the code;
        }
    }
    return result;
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function checkArrays(arr1, arr2) {

    const obj = {};
    for (let i = 0; i < arr1.length; i++) {
        obj[arr1[i]] = 1;
    }
    let isAllElements = true;
    for (let i = 0; i < arr2.length; i++) {
        if (!obj[arr2[i]]) {
            isAllElements = false;
            break;
        }
    }
    return isAllElements;
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function checkArrays', () => {
    expect(checkArrays).to.be.a('function');
});

it('checkArrays([1,2,3,4,5,6,7,10], [1,2,3,4,5]) returns true', () => {
    expect(checkArrays([1, 2, 3, 4, 5, 6, 7, 10], [1, 2, 3, 4, 5])).to.be.true;
});

it('checkArrays([1,2,5,-2,4,0,10,-10], [1,2,3,4,5,8]) returns false', () => {
    expect(checkArrays([1, 2, 5, -2, 4, 0, 10, -10], [1, 2, 3, 4, 5, 8])).to.be.false;
});

it('checkArracks(["a","b","c","d","e"], ["a","b","c","d","e"]) returns true', () => {
    expect(checkArrays(["a", "b", "c", "d", "e"], ["a", "b", "c", "d", "e"])).to.be.true;
});

it('checkArracks(["a","b","c","d","e"], ["a","b","c","d","e","f"]) returns false', () => {
    expect(checkArrays(["a", "b", "c", "d", "e"], ["a", "b", "c", "d", "e", "f"])).to.be.false;
});

it('checkArracks([], []) returns true', () => {
    expect(checkArrays([], [])).to.be.true;
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
