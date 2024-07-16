// NAMEEN:
// NAMERU:Проверка имени. Массивы

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `list` принимает два параметра:
* `names` - массив строк
* `key` - строка

Необходимо проверить, содержится ли `key` в массиве `names`. При этом необходимо удалить пробелы в начале и в конце строки `key` и привести ее к нижнему регистру.

Функция должна вернуть `true`, если `key` содержится в массиве `names`, иначе `false`.

Пример запуска функции:
```javascript
list(["john", "alice", "tom", "eric", "helga"], " Helga") // true
list(["alice", "john", "eric", "tom", "helga"], "nathan  ") // false
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function 
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function list(names, key) {
  key = key.trim().toLowerCase()
  return names.includes(key)
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function list', () => {
  expect(list).to.be.a('function');
});

it('list(["john", "alice", "tom", "eric", "helga"], " Helga") // true', () => {
    expect(list(["john", "alice", "tom", "eric", "helga"], " Helga")).to.equal(true);
});

it('list(["alice", "john", "eric", "tom", "helga"], "nathan  ") // false', () => {
    expect(list(["alice", "john", "eric", "tom", "helga"], "nathan  ")).to.equal(false);
});

it('list(["john", "alice", "tom", "eric", "helga"], "  tom") // true', () => {
    expect(list(["john", "alice", "tom", "eric", "helga"], "  tom")).to.equal(true);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
