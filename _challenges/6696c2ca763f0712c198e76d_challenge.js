// NAMEEN:
// NAMERU:Проверка наличия элемента в массиве. Фрукты

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `list` принимает два параметра:
* `fruits` - массив строк
* `key` - строка

Функция должна вернуть `true`, если `key` есть в массиве `fruits`, и `false` в противном случае.

Пример запуска функции:
``` javascript
list(['apple', 'banana', 'orange'], 'apple') // true

list(['apple', 'banana', 'orange'], 'pear') // false
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function list(fruits, key) {
  return fruits.includes(key)
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function list', () => {
  expect(list).to.be.a('function');
});

it('list([\'apple\', \'banana\', \'orange\'], \'apple\') should return true', () => {
    expect(list(['apple', 'banana', 'orange'], 'apple')).to.equal(true);
});

it('list([\'apple\', \'banana\', \'orange\'], \'pear\') should return false', () => {
    expect(list(['apple', 'banana', 'orange'], 'pear')).to.equal(false);
});

it('list([\'mango\', \'apricot\', \'grape\'], \'mango\') should return true', () => {
    expect(list(['mango', 'apricot', 'grape'], 'mango')).to.equal(true);
});

it('list([\'mango\', \'apricot\', \'grape\'], \'pear\') should return false', () => {
    expect(list(['mango', 'apricot', 'grape'], 'pear')).to.equal(false);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
