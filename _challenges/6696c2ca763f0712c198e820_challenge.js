// NAMEEN:
// NAMERU:Alice последнее имя в массиве

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `names` принимает массив строк с именами.

Необходимо определить содержит ли массив строку `Alice` и если нет, то добавить ее в конец массива.

Если же массив содержит имя `Alice`, то необходимо удалить все элементы массива, после имени `Alice`.

Используйте методы `push` и `splice`.

Пример похожей задачи:
```javascript
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
const index = animals.indexOf('camel');
if (index > -1) {animals.splice(index +1);} // Если camel присутствует в массиве, то удалить все элементы после camel, сам элемент camel останется
else {animals.push('camel');} // добавит camel в конец массива
console.log(animals); // ["ant", "bison", "camel"]
```

Примеры запуска функции:
```javascript
names(['Bob', 'Alice', 'Kate']) // ['Bob', 'Alice']
names(['Bob', 'Kate']) // ['Bob', 'Kate', 'Alice']
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function names(name) {
  const nameIndex = name.indexOf('Alice')
  if (nameIndex === -1) {
    name.push('Alice')
  } else {
    name.splice(nameIndex + 1)
  }
  return name
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function names', () => {
  expect(names).to.be.a('function');
});

it('names(["Bob", "Alice", "Kate"]) should return ["Bob", "Alice"]', () => {
  expect(names(["Bob", "Alice", "Kate"])).to.deep.equal(["Bob", "Alice"]);
});

it('names(["Bob", "Kate"]) should return ["Bob", "Kate", "Alice"]', () => {
  expect(names(["Bob", "Kate"])).to.deep.equal(["Bob", "Kate", "Alice"]);
});

it('names(["Alice", "Bob", "Kate"]) should return ["Alice"]', () => {
  expect(names(["Alice", "Bob", "Kate"])).to.deep.equal(["Alice"]);
});

it('names(["Bob", "Alice"]) should return ["Bob", "Alice"]', () => {
  expect(names(["Bob", "Alice"])).to.deep.equal(["Bob", "Alice"]);
});

it('names(["Alice"]) should return ["Alice"]', () => {
  expect(names(["Alice"])).to.deep.equal(["Alice"]);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
