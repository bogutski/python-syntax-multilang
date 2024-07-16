// NAMEEN:
// NAMERU:Индексы первого и последнего вхождения. Массивы

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `search` принимает следующие параметры:
* `array` - массив строк
* `str` - строка

Необходимо найти в массиве `array` первое и последнее вхождение строки `str`.

Если вхождение одно, то вернуть индекс этого вхождения.

Если вхождений два, то вернуть массив из двух индексов `[indexFirst, indexLast]`.

Если строка не встречается в данном массиве, то вернуть `str is not found`, где `str` - это строка, которую мы искали.

Примеры запуска функции:
```javascript
search(['one', 'two', 'three', 'two', 'one'], 'two'); // [1, 3]
search(['one', 'two', 'three', 'two', 'one'], 'three'); // 2
search(['one', 'two', 'three', 'two', 'one'], 'four'); // 'four is not found'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function search(array, str) {
    const indexFirst = array.indexOf(str);
    const indexLast = array.lastIndexOf(str);
    if (indexFirst === -1) {
        return `${str} is not found`;
    }
    return indexFirst === indexLast ? indexFirst : [indexFirst, indexLast];
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function search', () => {
    expect(search).to.be.a('function');
});

it('search(["one", "two", "three", "two", "one"], "two") should return [1, 3]', () => {
    expect(search(['one', 'two', 'three', 'two', 'one'], 'two')).to.be.eql([1, 3]);
});

it('search(["apple", "banana", "apple", "apple", "banana", "orange"], "apple") should return [0, 3]', () => {
    expect(search(["apple", "banana", "apple", "apple", "banana", "orange"], "apple")).to.be.eql([0, 3]);
});

it('search(["apple", "banana", "apple", "apple", "banana", "orange"], "lemon") should return "lemon is not found"', () => {
    expect(search(["apple", "banana", "apple", "apple", "banana", "orange"], "lemon")).to.be.eql("lemon is not found");
});

it('search(["apple", "banana", "apple", "apple", "banana", "orange"], "orange") should return 5', () => {
    expect(search(["apple", "banana", "apple", "apple", "banana", "orange"], "orange")).to.be.eql(5);
});

it('search(["Paris", "New York", "Deli", "Deli", "Milan", "London"], "Paris") should return 0', () => {
    expect(search(["Paris", "New York", "Deli", "Deli", "Milan", "London"], "Paris")).to.be.eql(0);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
