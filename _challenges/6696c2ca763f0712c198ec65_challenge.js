// NAMEEN:
// NAMERU:Вернуть массив свойств объекта, в формате [key, value]

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `objectEntries` принимает один параметр - строку `str`.

Строка произвольной длины, может содержать любые символы.

Перед созданием цикла for необходимо создать объект.

Объект будет наполняться свойствами, состоящими из ключей и значений.

Ключи - это буквы из строки, а значения - это количество вхождений буквы в строку.

Функция возвращает массив, состоящий из свойств объекта, в формате [key, value].

* `Key` - это буква, которая встречается в строке `str`.

* `Value` - это количество повторений этой буквы в строке `str`.

Поиск не чувствителен к регистру.

Для решения задачи используйте метод `Object.entries()`.

Исправьте ошибки в коде, чтобы функция работала правильно.

Пример запуска функции:
```javascript
objectEntries('minimumMAXIMUM'); // [['m', 6], ['i', 3], ['n', 1], ['u', 2], ['a', 1], ['x', 1]]
objectEntries('Reactor'); // [['r', 2], ['e', 1], ['a', 1], ['c', 1], ['t', 1], ['o', 1]]
objectEntries('hOroscOpe'); // [['h', 1], ['o', 3], ['r', 1], ['s', 1], ['c', 1], ['p', 1], ['e', 1]]
objectEntries(''); // []
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function objectEntries(str) {
  str === str.toLowerCase;
  const obj = {};
  for (let i = 0; i < str.length -1; i--) {
    if (obj[str[i]]) obj[str[i]]++
    else obj[str[i]] = 1;
  }
  return Object.Entries(obj);
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function objectEntries(str) {
  str = str.toLowerCase();
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) obj[str[i]]++
    else obj[str[i]] = 1;
  }
  return Object.entries(obj);
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function objectEntries', () => {
  expect(objectEntries).to.be.a('function');
});

it("objectEntries('minimumMAXIMUM') should return [['m', 6], ['i', 3], ['n', 1], ['u', 2], ['a', 1], ['x', 1]]", () => {
  expect(objectEntries('minimumMAXIMUM')).to.deep.equal([['m', 6], ['i', 3], ['n', 1], ['u', 2], ['a', 1], ['x', 1]]);
});

it("objectEntries('Chocolate') should return [['c', 2], ['h', 1], ['o', 2], ['l', 1], ['a', 1], ['t', 1], ['e', 1]]", () => {
  expect(objectEntries('Chocolate')).to.deep.equal([['c', 2], ['h', 1], ['o', 2], ['l', 1], ['a', 1], ['t', 1], ['e', 1]]);
});

it("objectEntries('Reactor') should return [['r', 2], ['e', 1], ['a', 1], ['c', 1], ['t', 1], ['o', 1]]", () => {
  expect(objectEntries('Reactor')).to.deep.equal([['r', 2], ['e', 1], ['a', 1], ['c', 1], ['t', 1], ['o', 1]]);
});

it("objectEntries('hOroscOpe') should return [['h', 1], ['o', 3], ['r', 1], ['s', 1], ['c', 1], ['p', 1], ['e', 1]]", () => {
  expect(objectEntries('hOroscOpe')).to.deep.equal([['h', 1], ['o', 3], ['r', 1], ['s', 1], ['c', 1], ['p', 1], ['e', 1]]);
});

it("objectEntries('wheel') should return [['w', 1], ['h', 1], ['e', 2], ['l', 1]]", () => {
  expect(objectEntries('wheel')).to.deep.equal([['w', 1], ['h', 1], ['e', 2], ['l', 1]]);
});

it("objectEntries('cunning') should return [['c', 1], ['u', 1], ['n', 3], ['i', 1], ['g', 1]]", () => {
  expect(objectEntries('cunning')).to.deep.equal([['c', 1], ['u', 1], ['n', 3], ['i', 1], ['g', 1]]);
});

it("objectEntries('') should return []", () => {
  expect(objectEntries('')).to.deep.equal([]);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
