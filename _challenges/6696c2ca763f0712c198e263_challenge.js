// NAMEEN:
// NAMERU:Определяем тип данных и возвращаем его

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `defineDataType`, которая принимает один параметр.

Пусть функция возвращает строку вида:
`This is string.`, если переданная строка – строка,
`This is number.`, если переданная строка – число,
`This is boolean.`, если переданная строка – булево значение,

Примеры запуска функции:
```javascript
defineDataType('Hello'); // 'This is string.'
defineDataType(10); // 'This is number.'
defineDataType(true); // 'This is boolean.'
```

Обратите внимание, что в конце возвращаемой строки есть точка.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function defineDataType(value) {
  const type = typeof value;
  return 'This is ' + type + '.';
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function defineDataType', () => {
  expect(defineDataType).to.be.a('function');
});

it('defineDataType("Hello") returns "This is string."', () => {
  expect(defineDataType('Hello')).to.be.equal('This is string.');
});

it('defineDataType(10) returns "This is number."', () => {
  expect(defineDataType(10)).to.be.equal('This is number.');
});

it('defineDataType(true) returns "This is boolean."', () => {
  expect(defineDataType(true)).to.be.equal('This is boolean.');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
