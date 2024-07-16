// NAMEEN:
// NAMERU:Проверка элемента массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `searchStr` принимает два параметра - массив `arr` и строку `str`.

Функция должна вернуть строку, в которой будет указано, находится ли элемент `str` в массиве `arr`:
* Если элемент `str` является последним в массиве, то функция должна вернуть строку `Element str is last in array`
* Если элемент `str` является первым в массиве, то функция должна вернуть строку `Element str is first in array`
* Если элемент `str` не является ни первым, ни последним в массиве, то функция должна вернуть строку `Element str is in the middle of array`
* Если элемент `str` не найден в массиве, то функция должна вернуть строку `Element str is not in array`

где `str` - это значение параметра `str`.

Пример запуска функции:
```javascript
searchStr(['a', 'b', 'c'], 'c'); // 'Element c is last in array'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function searchStr(arr, str) {
    if (arr.indexOf(str) === arr.length - 1) {
        return `Element ${str} is last in array`
    } else if (arr.indexOf(str) === 0) {
        return `Element ${str} is first in array`
    } else if (arr.indexOf(str) === -1) {
        return `Element ${str} is not in array`
    } else {
        return `Element ${str} is in the middle of array`
    }
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function searchStr', () => {
    expect(searchStr).to.be.a('function');
});

it(`searchStr(['a', 'b', 'c'], 'c') should return 'Element c is last in array'`, () => {
    expect(searchStr(['a', 'b', 'c'], 'c')).eql('Element c is last in array');
});

it(`searchStr(['a', 'b', 'c'], 'a') should return 'Element a is first in array'`, () => {
    expect(searchStr(['a', 'b', 'c'], 'a')).eql('Element a is first in array');
});

it(`searchStr(['a', 'b', 'c'], 'd') should return 'Element d is not in array'`, () => {
    expect(searchStr(['a', 'b', 'c'], 'd')).eql('Element d is not in array');
});

it(`searchStr(['a', 'b', 'c'], 'b') should return 'Element b is in the middle of array'`, () => {
    expect(searchStr(['a', 'b', 'c'], 'b')).eql('Element b is in the middle of array');
});

it(`searchStr(['34', '45', '56'], '67') should return 'Element 67 is not in array'`, () => {
    expect(searchStr(['34', '45', '56'], '67')).eql('Element 67 is not in array');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
