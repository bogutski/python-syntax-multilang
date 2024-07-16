// NAMEEN:
// NAMERU:Функция возвращает объект с одним свойством

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `createPerson`, которая принимает один параметр: `name` (строку).

Функция должна возвращать объект с одним свойством, где `userName` — это ключ, и полученная строка `name` — значение.

Примеры запуска функции:
```javascript
createPerson('Alice'); // {userName: 'Alice'}
createPerson('George'); // {userName: 'George'}
createPerson('Mary Alice'); // {userName: 'Mary Alice'}
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function createPerson(name) {
  return { userName: name };
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function createPerson', () => {
  expect(createPerson).to.be.a('function');
});

it('Function returns correct result for arguments Alice', () => {
  expect(createPerson('Alice')).eql({ userName: 'Alice' });
});

it('Function returns correct result for arguments George Smith', () => {
  expect(createPerson('George Smith')).eql({ userName: 'George Smith' });
});

it('Function returns correct result for arguments Mary Ann Brown', () => {
  expect(createPerson('Mary Ann Brown')).eql({ userName: 'Mary Ann Brown' });
});

it('The function returns the correct result for arguments Elisabeth', () => {
  expect(createPerson('Elisabeth')).eql({ userName: 'Elisabeth' });
});

it('The function returns a valid result for arguments Joe', () => {
  expect(createPerson('Joe')).eql({ userName: 'Joe' });
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
