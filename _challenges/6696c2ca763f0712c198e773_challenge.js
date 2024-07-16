// NAMEEN:
// NAMERU:Найти ключ объекта в массиве.

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `findKey` принимает 3 параметра:
* `array` - массив
* `object` - объект
* `key` - ключ объекта

Необходимо найти `value` по ключу `key` в объекте `object` и проверить есть ли оно в массиве `array`.

Если есть, то вернуть строку `There is ${value} in array`.

Если нет, то вернуть строку `There is no ${value} in array`.

Примеры запуска функции:
```javascript
findKey(['lemon', 'apple', 'banana'], {fruit: 'apple'}, 'fruit') // 'There is apple in array'
findKey(['lemon', 'apple', 'banana'], {fruit: 'orange'}, 'fruit') // 'There is no orange in array'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findKey(array, object, key) {
    const result = object[key];
    if (array.includes(result)) {
        return `There is ${result} in array`
    } else {
        return `There is no ${result} in array`
    }
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function findKey', () => {
    expect(findKey).to.be.a('function');
});

it('findKey([1, 2, 3, 4, 5], {key: 3}, "key") should return "There is 3 in array"', () => {
    expect(findKey([1, 2, 3, 4, 5], {key: 3}, "key")).eql
    ("There is 3 in array");
});

it('findKey([1, 2, 3, 4, 5], {key: 6}, "key") should return "There is no 6 in array"', () => {
    expect(findKey([1, 2, 3, 4, 5], {key: 6}, "key")).eql
    ("There is no 6 in array");
});
it('findKey([1, 2, 3, 4, 5], {sum: 6}, "sum") should return "There is no 6 in array"', () => {
    expect(findKey([1, 2, 3, 4, 5], {sum: 6}, "sum")).eql
    ("There is no 6 in array");
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
