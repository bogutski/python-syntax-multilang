// NAMEEN:
// NAMERU:Разница между копированием массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `copyDifference`, которая принимает массив и возвращает другой массив из двух элементов.

* Первый элемент - это поверхностная копия первого массива. Используйте метод `slice`.
* Второй элемент - это глубокая копия первого массива. Используйте метод `JSON.parse` и `JSON.stringify`.

Вернуть оригинальный массив нельзя, ссылки на массивы будут проверяться на равенство.

Пример запуска функции:
```javascript
copyDifference([ 1, 2, 3 ]) // [ [ 1, 2, 3 ], [ 1, 2, 3 ] ]
copyDifference([ [true], [false] ]) // [ [[ true ], [ false ]], [[ true ], [ false ]] ]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function copyDifference(array){
  const shallowCopy = array.slice();
  const deepCopy = JSON.parse(JSON.stringify(array));
  return [shallowCopy, deepCopy]
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function copyDifference', () => {
  expect(copyDifference).to.be.a('function');
});

it('copyDifference([ 1, 2, 3 ]) should return [ [ 1, 2, 3 ], [ 1, 2, 3 ] ]', () => {
  expect(copyDifference([ 1, 2, 3 ])).to.eql([ [ 1, 2, 3 ], [ 1, 2, 3 ] ]);
});

it("copyDifference([ ['Java'], ['Script'] ]) should return [ [['Java'], ['Script']], [['Java'], ['Script']] ]", () => {
  expect(copyDifference([ ['Java'], ['Script'] ])).to.eql([ [['Java'], ['Script']], [['Java'], ['Script']] ]);
});

it("copyDifference([ true, false ]) should return [ [true, false], [true, false] ]", () => {
  expect(copyDifference([ true, false ])).to.eql([ [true, false], [true, false] ]);
});

it("copyDifference([ 123, 'abc' ]) should return different arrays", () => {
  const array = [ 123, 'abc' ]
  const result = copyDifference(array);
  expect(result[0] === array).to.be.false;
  expect(result[1] === array).to.be.false;
  expect(result[0] === result[1]).to.be.false;
});

it("copyDifference([ 'a', 'b', 'c' ]) should include slice and JSON.parse/stringify", () => {
  const result = copyDifference.toString();
  expect(result).to.include('slice');
  expect(result).to.include('JSON.parse');
  expect(result).to.include('JSON.stringify');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
