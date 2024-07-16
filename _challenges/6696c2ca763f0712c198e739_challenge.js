// NAMEEN:
// NAMERU:Массив с "дыркой"

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `arrWithHole`, которая принимает один параметр - массив.

Массив состоит из чисел, в котором второй элемент может быть равен `undefined`.

Функция возвращает значение второго элемента массива.

Если второй элемент массива равен `undefined` - присвойте ему значение суммы первого и последнего элемента массива.

В противном случае возведите второй элемент массива в степень третьего элемента массива.

Пример запуска функции:
```javascript
arrWithHole([11, 2, 5, 13, 3]) // 2 ** 5 = 32
arrWithHole([13, undefined, 3, 51, 87]) // 13 + 87 = 100
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function arrWithHole(arr) {
    if (arr[1] === undefined) {
        return arr[1] = arr[0] + arr[arr.length - 1]
    } else {
        return arr[1] ** arr[2]
    }
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function arrWithHole', () => {
    expect(arrWithHole).to.be.a('function');
});

it('arrWithHole([11, 2, 5, 13, 3]) should return 32', () => {
    expect(arrWithHole([11, 2, 5, 13, 3])).to.be.equal(32);
});

it('arrWithHole([13, undefined, 3, 51, 87]) should return 87', () => {
    expect(arrWithHole([13, undefined, 3, 51, 87])).to.be.equal(100);
});

it('arrWithHole([13, 2, 3, 51, 87]) should return 8', () => {
    expect(arrWithHole([13, 2, 3, 51, 87])).to.be.equal(8);
});

it('arrWithHole([13, undefined, 5, 51, 87, 7, 90, 132]) should return 132', () => {
    expect(arrWithHole([13, undefined, 5, 51, 87, 7, 90, 132])).to.be.equal(145);
});

it('arrWithHole([13, 12, 3, 51, 87, 7, 90, 132]) should return 1728', () => {
    expect(arrWithHole([13, 12, 3, 51, 87, 7, 90, 132])).to.be.equal(1728);
});

it('arrWithHole([13, undefined, 3, 51, 87, 7, 90]) should return 90', () => {
    expect(arrWithHole([13, undefined, 3, 51, 87, 7, 90])).to.be.equal(103);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
