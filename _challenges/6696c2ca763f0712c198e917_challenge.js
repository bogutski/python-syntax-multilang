// NAMEEN:
// NAMERU:Найти все строки в массиве

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `getAllStr`, которая принимает массив и возвращает строку, состоящую из всех строковых элементов массива, разделенных пробелом.

Последний элемент строки не должен содержать пробела.

Примеры запуска функции:
```javascript
getAllStr(["a", "b", "c"]) // "a b c"
getAllStr(["a", "b", "c", 1, 2, 3]) // "a b c"
getAllStr([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) // ""
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function getAllStr(arr){
  let str = '';
  for (let i = 0; i < arr.length; i++){
    if (typeof arr[i] === 'string') str += arr[i] + ' ';
  }
  return str.trim();
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function getAllStr', () => {
  expect(getAllStr).to.be.a('function');
});

it('getAllStr(["a", "b", "c"]) should return "a b c"', () => {
  expect(getAllStr(["a", "b", "c"])).to.be.equal("a b c");
});

it('getAllStr(["a", "b", "c", 1, 2, 3]) should return "a b c"', () => {
  expect(getAllStr(["a", "b", "c", 1, 2, 3])).to.be.equal("a b c");
});

it("getAllStr([1, 'j', 's', 2, 3, 'b', 'a', 0, 9, 'c']) should return 'j s b a c'", () => {
  expect(getAllStr([1, 'j', 's', 2, 3, 'b', 'a', 0, 9, 'c'])).to.be.equal('j s b a c');
});

it("getAllStr([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) should return ''", () => {
  expect(getAllStr([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).to.be.equal('');
});

it("getAllStr([undefined]) should return ''", () => {
  expect(getAllStr([undefined])).to.be.equal('');
});

it("getAllStr([null, 'true', 'or', 'false', NaN]) should return 'true or false'", () => {
  expect(getAllStr([null, 'true', 'or', 'false', NaN])).to.be.equal('true or false');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
