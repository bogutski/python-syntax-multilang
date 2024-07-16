// NAMEEN:
// NAMERU:Проверка массива на наличие строки

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `isString`, которая принимает массив и возвращает:

 * `true`, если в массиве есть хотя бы один элемент типа `string`,
 * `false`, если в массиве нет ни одной строки.

Пример запуска функции:
```javascript
isString([1,2,3,4,5,'6',7,8,9,10]) // true
isString([10,20,30,40,50]) // false
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function isString(array){
  for(let i = 0; i < array.length; i++){
    if(typeof array[i] === 'string') return true
  }
  return false
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function isString', () => {
  expect(isString).to.be.a('function');
});

it("isString([1,2,3,'4',5]) should return true", () => {
  expect(isString([1,2,3,'4',5])).to.equal(true);
});

it("isString([100,200,300,400,500]) should return false", () => {
  expect(isString([100,200,300,400,500])).to.equal(false);
});

it("isString([true, false, true]) should return false", () => {
  expect(isString([true, false, true])).to.equal(false);
});

it("isString(['1', '2', '3']) should return true", () => {
  expect(isString(['1', '2', '3'])).to.equal(true);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
