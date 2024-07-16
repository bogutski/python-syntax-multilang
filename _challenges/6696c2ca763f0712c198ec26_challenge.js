// NAMEEN:
// NAMERU:Количество вхождений цифр в строку вывести в виде объекта

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `occurrencesInObject`, которая принимает строку.

Функция должна посчитать сколько раз встречаются цифры `'1'`, `'2`', `'3'` в строке и вернуть объект вида:

 * `{ one: <number>, two: <number>, three: <number> }`, где `<number>` - количество вхождений цифры в строку.

Если какая-то цифра не встречается в строке, то соответствующее свойство объекта должно быть равно нулю.


Примеры запуска функции:
```javascript
occurrencesInObject('123123123'); // { one: 3, two: 3, three: 3 }
occurrencesInObject('11112222'); // { one: 4, two: 4, three: 0 }
occurrencesInObject('3333322222'); // { one: 0, two: 5, three: 5 }
occurrencesInObject(''); // { one: 0, two: 0, three: 0 }
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function occurrencesInObject(string) {
  let obj = { one: 0, two: 0, three: 0 };
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '1') obj.one++;
    if (string[i] === '2') obj.two++;
    if (string[i] === '3') obj.three++;
  }
  return obj;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function occurrencesInObject', () => {
  expect(occurrencesInObject).to.be.a('function');
});

it("occurrencesInObject('123123123') should return { one: 3, two: 3, three: 3 }", () => {
  expect(occurrencesInObject('123123123')).to.deep.equal({ one: 3, two: 3, three: 3 });
});

it("occurrencesInObject('11112222') should return { one: 4, two: 4, three: 0 }", () => {
  expect(occurrencesInObject('11112222')).to.deep.equal({ one: 4, two: 4, three: 0 });
});

it("occurrencesInObject('3333322222') should return { one: 0, two: 5, three: 5 }", () => {
  expect(occurrencesInObject('3333322222')).to.deep.equal({ one: 0, two: 5, three: 5 });
});

it("occurrencesInObject('13') should return { one: 1, two: 0, three: 1 }", () => {
  expect(occurrencesInObject('13')).to.deep.equal({ one: 1, two: 0, three: 1 });
});

it("occurrencesInObject('asd4569870eqefadf') should return { one: 0, two: 0, three: 0 }", () => {
  expect(occurrencesInObject('asd4569870eqefadf')).to.deep.equal({ one: 0, two: 0, three: 0 });
});

it("occurrencesInObject('') should return { one: 0, two: 0, three: 0 }", () => {
  expect(occurrencesInObject('')).to.deep.equal({ one: 0, two: 0, three: 0 });
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
