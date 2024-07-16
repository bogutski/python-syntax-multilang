// NAMEEN:
// NAMERU:Развернуть массивы в строку

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `toString`, которая принимает три аргумента: два массива и строку.

Функция должна вернуть строку, состоящую из элементов массивов и строки.

Между элементами добавьте пробел.

Пример: `arr1 + ' ' + arr2 + ' ' + str`

Используйте `spread` оператор, чтобы развернуть массивы.

Пример запуска функции:
```javascript
toString(['hello'], ['world'], '!!!' ); // 'hello world!!!'
toString(['Hi'], ['there'], '!' ); // 'Hi there!'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function toString(arr1, arr2, str){
  return [...arr1] + ' ' + [...arr2] + ' ' + str
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function toString', () => {
  expect(toString).to.be.a('function');
});

it("toString(['HELLO'], ['WORLD'], '!!!' ) should return 'HELLO WORLD !!!'", () => {
  expect(toString(['HELLO'], ['WORLD'], '!!!' )).to.be.equal('HELLO WORLD !!!');
});

it("toString(['Hi'], ['there'], '!' ) should return 'Hi there !'", () => {
  expect(toString(['Hi'], ['there'], '!' )).to.be.equal('Hi there !');
});

it("toString(['Java'], ['Script'], 'is fun!' ) should return 'Java Script is fun!'", () => {
  expect(toString(['Java'], ['Script'], 'is fun!' )).to.be.equal('Java Script is fun!');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
