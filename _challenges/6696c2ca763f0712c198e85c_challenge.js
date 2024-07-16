// NAMEEN:
// NAMERU:Перевод массива в строку

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `stringify`, которая принимает массив и возвращает строку, содержащую JSON-представление массива.

Используйте метод `JSON.stringify` для решения этой задачи.

Пример запуска функции:
```javascript
stringify([555, 666, 777]); // '[555,666,777]'
stringify([true, true, true]); // '[true,true,true]'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function stringify(arr){
  return JSON.stringify(arr)
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function stringify', () => {
  expect(stringify).to.be.a('function');
});

it("stringify([1,2,3]) should return '[1,2,3]'", () => {
  expect(stringify([1,2,3])).to.equal('[1,2,3]');
});

it("stringify([true,false,true]) should return '[true,false,true]'", () => {
  expect(stringify([true,false,true])).to.equal('[true,false,true]');
});

it("stringify([1,2,[3,4]]) should return a string '[1,2,[3,4]]'", () => {
  expect(stringify([1,2,[3,4]])).to.be.a('string');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
