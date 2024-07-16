// NAMEEN:
// NAMERU:Индекс первого 'null' в массиве

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Найдите и исправьте ошибки в коде.

Функция `findNull` должна принимать массив `arr` и возвращать индекс первого `null` или строку `'null not
 found'` если `null` не найден.

Примеры запуска функции:
```javascript
findNull([1,2,3,null,5,6,7,8,9]); // 3
findNull([1,2,3,4,5,6,7,8,9]); // 'null not found'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findNull(){
  for(let i = 0; i < arr.length; i--){
    if(arr[i] = null) return arr[i];
  }
  return null not found;
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findNull(arr){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === null) return i;
  }
  return 'null not found';
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findNull', () => {
  expect(findNull).to.be.a('function');
});

it('findNull([1, 2, 3, 4, 5, null, 7, 8, 9]) should return 5', () => {
  expect(findNull([1, 2, 3, 4, 5, null, 7, 8, 9])).to.be.equal(5);
});

it('findNull([null, null, null]) should return 0', () => {
  expect(findNull([null, null, null])).to.be.equal(0);
});

it('findNull([10, 20, 30, 40, 50, 60, 70, 80, null]) should return 8', () => {
  expect(findNull([10, 20, 30, 40, 50, 60, 70, 80, null])).to.be.equal(8);
});

it("findNull([100, 200, 300, 400, 500, 600, 700, 800, 900]) should return 'null not found'", () => {
  expect(findNull([100, 200, 300, 400, 500, 600, 700, 800, 900])).to.be.equal('null not found');
});

it("findNull([]) should return 'null not found'", () => {
  expect(findNull([])).to.be.equal('null not found');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
