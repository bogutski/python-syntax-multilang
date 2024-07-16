// NAMEEN:
// NAMERU:Порядковый номер элемента. Массивы

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `elementNumber` должна принимать два параметра:
* `arr` - массив строк
* `str` - строка

Строку `str` привезти к нижнему регистру и удалить все пробелы.

Необходимо определить содержится ли данная строка в массиве и вернуть ее порядковый номер элемента. Порядковый номер не равен индексу элемента.

Если строка не содержится в массиве, то вернуть строку `Not found`.

```javascript
elementNumber(['one', 'two', 'three'], 'Two'); // 2
elementNumber(['one', 'two', 'three'], '  four'); // 'Not found'
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function elementNumber(arr, str) {
    str = str.trim().toLowerCase();
    if (arr.includes(str)) {
        return arr.indexOf(str) + 1;
    }
    return 'Not found';
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function elementNumber', () => {
    expect(elementNumber).to.be.a('function');
});

it(`elementNumber(['one', 'two', 'three'], 'Two') should return 2`, () => {
    expect(elementNumber(['one', 'two', 'three'], 'Two')).eql(2);
});

it(`elementNumber(['bedroom', 'living room', 'kitchen'], 'Living Room ') should return 2`, () => {
    expect(elementNumber(['bedroom', 'living room', 'kitchen'], 'Living Room ')).eql(2);
});

it(`elementNumber(['bedroom', 'living room', 'kitchen'], 'bedroom') should return 1`, () => {
    expect(elementNumber(['bedroom', 'living room', 'kitchen'], 'bedroom')).eql(1);
});

it(`elementNumber(['dog', 'rabbit', 'cat'], 'horse') should return "Not found"`, () => {
    expect(elementNumber(['dog', 'rabbit', 'cat'], 'horse')).eql('Not found');
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
