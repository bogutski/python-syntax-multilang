// NAMEEN:
// NAMERU:Посчитать количество вхождений каждого элемента в массиве строк

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `objectEntries`, принимает один параметр - массив строк.

В массиве содержится произвольное количество строк, состоящих из букв и/или символов.

Строки произвольной длины и не содержат пробелов.

Функция производит поиск количества вхождений каждого символа во всех строках массива.

Функция возвращает массив, состоящий из свойств объекта, в формате [key, value].

Поиск не должен быть чувствителен к регистру.

Исправьте ошибки в коде, чтобы функция работала правильно.

Пример запуска функции:
```javascript
objectEntries(['hOnOr', 'arena']); // [['h', 1], ['o', 2], ['n', 2], ['r', 2], ['a', 2], ['e', 1]]
objectEntries(['bow', 'row', 'sow']); // [['b', 1], ['o', 3], ['w', 3], ['r', 1], ['s', 1]]
objectEntries(['pooL', '']); // [['p', 1], ['o', 2], ['l', 1]]
objectEntries(['', '']); // []
``
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function objectEntries(arr){
  const obj = [];
  for (let i = 0; i < arr.length - 1; i++){
  for (let j = 0; j < arr[i].length - 1; j++) {
  arr[i] === arr[i].toLowerCase();
  if (obj[arr[i][j]]) obj[arr[i][j]]++
  else obj[arr[i][j]] = 1;
    }
  }
  return Object.Entries(obj);
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function objectEntries(arr) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i] = arr[i].toLowerCase();
      if (obj[arr[i][j]]) obj[arr[i][j]]++
      else obj[arr[i][j]] = 1;
    }
  }
  return Object.entries(obj);
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function objectEntries', () => {
  expect(objectEntries).to.be.a('function');
});

it("objectEntries(['pooL', 'loud']) should return [['p', 1], ['o', 3], ['l', 2], ['u', 1], ['d', 1]]", () => {
  expect(objectEntries(['pooL', 'loud'])).to.deep.equal([['p', 1], ['o', 3], ['l', 2], ['u', 1], ['d', 1]]);
});

it("objectEntries(['clock', 'clerk', 'cup']) should return [['c', 4], ['l', 2], ['o', 1], ['k', 2], ['e', 1], ['r', 1], ['u', 1], ['p', 1]]", () => {
  expect(objectEntries(['clock', 'clerk', 'cup'])).to.deep.equal([['c', 4], ['l', 2], ['o', 1], ['k', 2], ['e', 1], ['r', 1], ['u', 1], ['p', 1]]);
});

it("objectEntries(['hOnOr', 'arena']) should return [['h', 1], ['o', 2], ['n', 2], ['r', 2], ['a', 2], ['e', 1]]", () => {
  expect(objectEntries(['hOnOr', 'arena'])).to.deep.equal([['h', 1], ['o', 2], ['n', 2], ['r', 2], ['a', 2], ['e', 1]]);
});

it("objectEntries(['loose', 'lip']) should return [['l', 2], ['o', 2], ['s', 1], ['e', 1], ['i', 1], ['p', 1]]", () => {
  expect(objectEntries(['loose', 'lip'])).to.deep.equal([['l', 2], ['o', 2], ['s', 1], ['e', 1], ['i', 1], ['p', 1]]);
});

it("objectEntries(['bow', 'row', 'sow']) should return [['b', 1], ['o', 3], ['w', 3], ['r', 1], ['s', 1]]", () => {
  expect(objectEntries(['bow', 'row', 'sow'])).to.deep.equal([['b', 1], ['o', 3], ['w', 3], ['r', 1], ['s', 1]]);
});

it("objectEntries(['kid', 'aid', 'bee', 'see']) should return [['k', 1], ['i', 2], ['d', 2], ['a', 1], ['b', 1], ['e', 4], ['s', 1]]", () => {
  expect(objectEntries(['kid', 'aid', 'bee', 'see'])).to.deep.equal([['k', 1], ['i', 2], ['d', 2], ['a', 1], ['b', 1], ['e', 4], ['s', 1]]);
});

it("objectEntries(['', 'loud']) should return [['l', 1], ['o', 1], ['u', 1], ['d', 1]]", () => {
  expect(objectEntries(['', 'loud'])).to.deep.equal([['l', 1], ['o', 1], ['u', 1], ['d', 1]]);
});

it("objectEntries(['pooL', '']) should return [['p', 1], ['o', 2], ['l', 1]]", () => {
  expect(objectEntries(['pooL', ''])).to.deep.equal([['p', 1], ['o', 2], ['l', 1]]);
});

it("objectEntries(['', '']) should return []", () => {
  expect(objectEntries(['', ''])).to.deep.equal([]);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
