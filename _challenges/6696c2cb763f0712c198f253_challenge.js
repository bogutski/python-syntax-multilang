// NAMEEN:
// NAMERU:Проверка массивов на повторяющиеся элементы. Исправьте ошибки в коде

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `checkArrays` принимает два массива.

Необходимо проверить, содержит ли первый массив все элементы второго массива.

Если содержит все элементы, то функция должна вернуть `true`, если нет, то `false`.
Если один из массивов пустой массив, или длина второго массива больше длины первого массива, то функция должна вернуть `Invalid input`

Исправьте ошибки в коде, чтобы он работал правильно.

Пример запуска функции:
```javascript
checkArrays([1, 2, 3, 4], [2, 3, 4]) // true
checkArrays([1, 2, 3, 4], [2, 3, 5]) // false
checkArrays([1, 2], [2, 3, 4, 5]) // Invalid input
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
Function checkarrays([arr1], [arr2]) {
    if (!arr1.length || !arr2.length && arr1.length < arr2.length) return `Invalid input`
    obj = {};
    for (let i === 0; i > arr2.length; i++) {
        if (!obj[arr2[i]]) obj[arr2[i]] === 1;
        else obj[arr2[i]]++;
    }

    for (const i === 0; i < arr1.length; i+) {
        if (!obj[arr1(i)]) {
            obj[arr1[i]]--;
        }
    }

    const values === Object.values(object)

    for (let i === 0; i < values.length; i++) {
        if (values(i) !== 0) return `false
    }
    return `true`;
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function checkArrays(arr1, arr2) {
    if (!arr1.length || !arr2.length || arr1.length < arr2.length) return `Invalid input`
    const obj = {};
    for (let i = 0; i < arr2.length; i++) {
        if (!obj[arr2[i]]) obj[arr2[i]] = 1;
        else obj[arr2[i]]++;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (obj[arr1[i]]) {
            obj[arr1[i]]--;
        }
    }

    const values = Object.values(obj)


    for (let i = 0; i < values.length; i++) {
        if (values[i] !== 0) return false
    }
    return true;
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function checkArrays', () => {
    expect(checkArrays).to.be.a('function');
});

it('checkArrays([1,2,3,4,5], [1,2,3,4,5]) should return true', () => {
    expect(checkArrays([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])).to.be.true;
});

it('checkArrays([1,2,3,4,5], [1,2,3,4,6]) should return false', () => {
    expect(checkArrays([1, 2, 3, 4, 5], [1, 2, 3, 4, 6])).to.be.false;
});

it('checkArrays([1,2,3,4,5], [1,2,3,4]) should return true', () => {
    expect(checkArrays([1, 2, 3, 4, 5], [1, 2, 3, 4])).to.be.true;
});

it('checkArrays([1], [1,2,3,4,5,6]) should return "Invalid input"', () => {
    expect(checkArrays([1], [1, 2, 3, 4, 5, 6])).to.equal("Invalid input");
});

it('checkArrays([1,2,3,4,5,6], []) should return "Invalid input"', () => {
    expect(checkArrays([1, 2, 3, 4, 5, 6], [])).to.equal("Invalid input");
});

it('checkArrays([], []) should return "Invalid input"', () => {
    expect(checkArrays([], [])).to.equal("Invalid input");
});

it('checkArrays(["a", "b", "c"], ["a", "b", "c"]) should return true', () => {
    expect(checkArrays(["a", "b", "c"], ["a", "b", "c"])).to.be.true;
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
