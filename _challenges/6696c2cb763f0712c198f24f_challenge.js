// NAMEEN:
// NAMERU:Содержит ли первый массив все элементы второго массива (с повторениями)

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `checkArrays` принимает два массива чисел. Массивы не могут быть пустыми, но элементы в массиве могут повторяться любое количество раз.

Функция должна проверить, содержит ли второй массив все элементы первого массива. Функция должна вернуть `true` или `false`.

Примеры запуска функции:
```javascript
checkArrays([1,2,3,4,5,6,20,2,2], [1,2,2]) // true
checkArrays([1,2,3,4,5,6,20,2,2], [1,2,2,7]) // false
checkArrays([0,0,0,1], [0,0]) // true
```

Алгоритм решения задачи:
* Создать объект, в котором будут храниться элементы второго массива в качестве ключей, а количество повторений в качестве значений.
Для этого надо пройтись по второму массиву и для каждого элемента проверить, есть ли он в объекте. Если нет, то добавить его в качестве ключа и присвоить значение 1. Если есть, то увеличить значение на 1.
* Пройтись по первому массиву и уменьшить значение в объекте для каждого элемента.
* Пройтись по значениям объекта циклом и если хотя бы одно значение не равно 0, вернуть `false`.
Для того чтобы проверить значения объекта, можно воспользоваться методом `Object.values(obj)`, который вернет массив значений объекта.
* Если все значения равны 0, вернуть `true`.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function checkArrays(arr1, arr2) {

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
    expect(checkArrays([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])).to.equal(true);
});

it('checkArrays([1,2,3,4,5], [1,2,3,4,6]) should return false', () => {
    expect(checkArrays([1, 2, 3, 4, 5], [1, 2, 3, 4, 6])).to.equal(false);
});

it('checkArrays([1,2,3,4,5,6,20,2,2], [1,2,2]) should return true', () => {
    expect(checkArrays([1, 2, 3, 4, 5, 6, 20, 2, 2], [1, 2, 2])).to.equal(true);
});

it('checkArrays([1,2,3,4,5,6,20,2,2], [1,2,2,7]) should return false', () => {
    expect(checkArrays([1, 2, 3, 4, 5, 6, 20, 2, 2], [1, 2, 2, 7])).to.equal(false);
});

it('checkArrays([0,0,0,1], [0,0]) should return true', () => {
    expect(checkArrays([0, 0, 0, 1], [0, 0])).to.equal(true);
});

it('checkArrays([0,0,0,1], [0,0,0,0]) should return false', () => {
    expect(checkArrays([0, 0, 0, 1], [0, 0, 0, 0])).to.equal(false);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
