// NAMEEN:
// NAMERU:Проверка массива строк на симметричность

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `isArraySymmetrical`, которая принимает массив строк.

Строки передаются в разном регистре, для правильной проверки на симметричность, регистр не должен учитываться.

Для этого, перед проверкой, преобразуйте строку к одному регистру.

Функция должна вернуть `true`, если массив симметричный и `false` если не симметричный.

Если массив пустой, то функция должна вернуть строку `Array is empty`.


Примеры запуска функции:
```javascript
isArraySymmetrical(['a', 'B', 'C', 'b', 'A']);         // true
isArraySymmetrical(['ONE', 'two', 'A', 'Two', 'ONE']); // true
isArraySymmetrical(['FALSE', 'true', 'false']);        // true
isArraySymmetrical(['a', 'B', 'c', 't', 'A']);         // false
isArraySymmetrical([]);                                // 'Array is empty'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function isArraySymmetrical(arr){
  if(!arr.length) return 'Array is empty';

  for(let i = 0; i < arr.length / 2; i++){
    if(arr[i].toLowerCase() !== arr[arr.length - 1 - i].toLowerCase()){
      return false
    }
  }

  return true;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function isArraySymmetrical', () => {
  expect(isArraySymmetrical).to.be.a('function');
});

it("Function isArraySymmetrical does not include 'reverse' method", () => {
  expect(isArraySymmetrical.toString()).to.not.include('reverse');
});

it("Function isArraySymmetrical does not include 'join' method", () => {
  expect(isArraySymmetrical.toString()).to.not.include('join');
});

it("isArraySymmetrical(['oNE', 'twO', 'three', 'Two', 'ONE']) should return true", () => {
  expect(isArraySymmetrical(['oNE', 'twO', 'three', 'Two', 'ONE'])).to.be.true;
});

it("isArraySymmetrical(['test', 'should', 'BE', 'FALSE']) should return false", () => {
  expect(isArraySymmetrical(['test', 'should', 'BE', 'FALSE'])).to.be.false;
});

it("isArraySymmetrical(['hELLO', 'JavaScript', 'WORLD', 'JAVASCRIPT', 'hello']) should return true", () => {
  expect(isArraySymmetrical(['hELLO', 'JavaScript', 'WORLD', 'JAVASCRIPT', 'hello'])).to.be.true;
});

it("isArraySymmetrical(['trUE', 'false', 'TRue']) should return true", () => {
  expect(isArraySymmetrical(['trUE', 'false', 'TRue'])).to.be.true;
});

it("isArraySymmetrical(['A', 'b', 'C', 'E', 'b', 'A']) should return false", () => {
  expect(isArraySymmetrical(['A', 'b', 'C', 'E', 'b', 'A'])).to.be.false;
});

it("isArraySymmetrical([]) should return 'Array is empty'", () => {
  expect(isArraySymmetrical([])).to.equal('Array is empty');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
