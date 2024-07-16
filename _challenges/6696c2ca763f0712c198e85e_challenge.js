// NAMEEN:
// NAMERU:'Deep Copy' массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `deepCopy`, которая принимает массив и возвращает его копию.

Используйте `JSON.stringify` и `JSON.parse` для решения этой задачи.

Пример запуска:
```javascript
deepCopy([1, 2, 3]); // [1, 2, 3]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function deepCopy(arr){
  const arrToStr = JSON.stringify(arr);
  return JSON.parse(arrToStr)
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function deepCopy', () => {
  expect(deepCopy).to.be.a('function');
});

it('deepCopy([1, 2, 3]) should return [1, 2, 3]', () => {
  expect(deepCopy([1, 2, 3])).to.eql([1, 2, 3]);
});

it('deepCopy([25, 50, 75]) should return [25, 50, 75]', () => {
  expect(deepCopy([25, 50, 75])).to.eql([25, 50, 75]);
});

it('deepCopy([1, 2, 3, 5, 8, 13, 21]) should return [1, 2, 3, 5, 8, 13, 21]', () => {
  expect(deepCopy([1, 2, 3, 5, 8, 13, 21])).to.eql([1, 2, 3, 5, 8, 13, 21]);
});

it('deepCopy([55, 66, 77]) should include JSON.stringify', () => {
  expect(deepCopy.toString()).to.include('JSON.stringify');
});

it('deepCopy([55, 66, 77]) should include JSON.parse', () => {
  expect(deepCopy.toString()).to.include('JSON.parse');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
