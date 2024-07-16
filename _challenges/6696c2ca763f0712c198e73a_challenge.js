// NAMEEN:
// NAMERU:Нахождение элемента в двумерном массиве

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `multiDimensional`, которая принимает один параметр - массив.

Массив является двумерным.

Пример многомерного массива:
`[['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]`

В каждом вложенном массиве находятся строки.

Функция должна вернуть последний элемент второго вложенного массива.

Например, из вышеуказанного двумерного массива должна вернуться буква `f`.

* Пробелы в начале и в конце строки должны быть удалены.
* Строка должна быть преобразована в верхний регистр.

```javascript
multiDimensional([[' Airplane', 'Airport '], ['Boardwalk', '  Bookstore '], [' Brainstorm ', ' Fisherman']])
// 'BOOKSTORE'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function multiDimensional(arr) {
    let secondElement = arr[1];
    return secondElement[secondElement.length - 1].trim().toUpperCase();
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function multiDimensional', () => {
    expect(multiDimensional).to.be.a('function');
});

it('multiDimensional([[" Airplane", "Airport "], ["Boardwalk", "  Bookstore "], [" Brainstorm ", " Fisherman"]]) should return "BOOKSTORE"', () => {
    expect(multiDimensional([[' Airplane', 'Airport '], ['Boardwalk', '  Bookstore '], [' Brainstorm ', ' Fisherman']])).to.equal('BOOKSTORE');
});

it('multiDimensional([[" Airplane", "Bookstore "], ["Boardwalk", "  Airport "], [" Brainstorm ", " Fisherman"]]) should return "AIRPORT"', () => {
    expect(multiDimensional([[' Airplane', 'Bookstore '], ['Boardwalk', '  Airport '], [' Brainstorm ', ' Fisherman']])).to.equal('AIRPORT');
});

it('multiDimensional([[" Airplane", "Airport "], ["Boardwalk", "  Fisherman "], [" Brainstorm ", " Bookstore"]]) should return "FISHERMAN"', () => {
    expect(multiDimensional([[' Airplane', 'Airport '], ['Boardwalk', '  Fisherman '], [' Brainstorm ', ' Bookstore']])).to.equal('FISHERMAN');
});

it('multiDimensional([[" Airplane", "Airport "], ["Boardwalk", "  Blueberry "], [" Brainstorm ", " Bookstore"]]) should return "BLUEBERRY"', () => {
    expect(multiDimensional([[' Airplane', 'Airport '], ['Boardwalk', '  Blueberry '], [' Brainstorm ', ' Bookstore']])).to.equal('BLUEBERRY');
});

it('multiDimensional([[" Airplane", "Airport "], ["Boardwalk", "  Brainstorm "], [" Blueberry ", " Fisherman"]]) should return "BRAINSTORM"', () => {
    expect(multiDimensional([[' Airplane', 'Airport '], ['Boardwalk', '  Brainstorm '], [' Blueberry ', ' Fisherman']])).to.equal('BRAINSTORM');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
