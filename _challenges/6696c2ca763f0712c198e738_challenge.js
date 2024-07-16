// NAMEEN:
// NAMERU:Среднее арифметическое некоторых чисел из массивов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `average`, которая принимает три параметра - массивы с числами.

В каждом массиве находится не менее 3 чисел, которые могут быть как положительными, так и отрицательными.

Найдите сумму определенных элементов массивов и `разделите ее на 3`:
* Первый элемент первого массива
* Второй элемент второго массива
* Последний элемент третьего массива

Для округления результата используйте функцию `Math.round()`

Пример запуска функции:
```javascript
average([1, 2, 3], [4, 5, 6], [7, 8, 9]) // 5
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function average(arr1, arr2, arr3) {
    return Math.round((arr1[0] + arr2[1] + arr3[arr3.length - 1]) / 3)
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function average', () => {
    expect(average).to.be.a('function');
});

it('average `[-1, 2, 3], [4, 5, 6], [7, 8, 9]` should return 4', () => {
    expect(average([-1, 2, 3], [4, 5, 6], [7, 8, 9])).to.be.equal(4);
});

it('average `[11, 2, 3], [4, 5, 6], [7, 8, 9]` should return 8', () => {
    expect(average([11, 2, 3], [4, 5, 6], [7, 8, 9])).to.be.equal(8);
});

it('average `[17, 30, 48], [140, 10, 0, 1], [126, 138, 17]` should return 15', () => {
    expect(average([17, 30, 48], [140, 10, 0, 1], [126, 138, 17])).to.be.equal(15);
});

it('average `[115, 2, 3], [4, -57, 6], [7, 8, 19]` should return 26', () => {
    expect(average([115, 2, 3], [4, -57, 6], [7, 8, 19])).to.be.equal(26);
});

it('average `[23, 2, 3], [4, 3, 6], [7, 8, 16]` should return 14', () => {
    expect(average([23, 2, 3], [4, 3, 6], [7, 8, 16])).to.be.equal(14);
});

it('average `[100, 2, 3], [4, 7, 6], [7, 8, -9]` should return 33', () => {
    expect(average([100, 2, 3], [4, 7, 6], [7, 8, -9])).to.be.equal(33);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
