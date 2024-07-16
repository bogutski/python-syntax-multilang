// NAMEEN:
// NAMERU:Сравнение строки и массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `stringAndArray`, которая принимает строку и массив в качестве аргументов.

Создайте цикл, который будет проходить по каждому символу строки и сравнивать его с элементами массива.

Если один из символов не совпадает, то функция должна вернуть строку `Elements are not equal`.

Если все символы совпадают, то функция должна вернуть строку `Elements are equal`.

Перед циклом проверьте, что длина строки и массива совпадают. Если нет, то функция должна вернуть строку `Elements are not equal`.

Пример запуска функции:
```javascript
stringAndArray('abc', ['A', 'b', 'c']); // 'Elements are not equal'
stringAndArray('123', ['1', '2', '3']); // 'Elements are equal'
stringAndArray('qwerty', ['a', 's', 'd']); // 'Elements are not equal'
stringAndArray('', ['']); // 'Elements are equal'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function stringAndArray (str, arr){
  if(str.length !== arr.length) return 'Elements are not equal'
  for(let i = 0; i < str.length; i++){
    if(str[i] !== arr[i]) return 'Elements are not equal'
  }
  return 'Elements are equal'
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function stringAndArray', () => {
  expect(stringAndArray).to.be.a('function');
});

it("stringAndArray('abc', ['A', 'b', 'c']) should return 'Elements are not equal'", () => {
  expect(stringAndArray('abc', ['A', 'b', 'c'])).to.be.equal('Elements are not equal');
});

it("stringAndArray('12345', ['1', '2', '3', '4', '5']) should return 'Elements are equal'", () => {
  expect(stringAndArray('12345', ['1', '2', '3', '4', '5'])).to.be.equal('Elements are equal');
});

it("stringAndArray('qwerty', ['']) should return 'Elements are not equal'", () => {
  expect(stringAndArray('qwerty', [''])).to.be.equal('Elements are not equal');
});

it("stringAndArray(' ', [' ']) should return 'Elements are equal'", () => {
  expect(stringAndArray(' ', [' '])).to.be.equal('Elements are equal');
});

it("stringAndArray('a', ['t', 'e', 's', 't']) should return 'Elements are not equal'", () => {
  expect(stringAndArray('a', ['t', 'e', 's', 't'])).to.be.equal('Elements are not equal');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
