// NAMEEN:
// NAMERU:Проверка массива на симметричность с помощью цикла

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `isArraySymmetrical`, которая принимает массив с различными элементами.

Функция должна вернуть `true`, если массив симметричный и `false` если не симметричный.

Если массив пустой, то функция должна вернуть строку `Array is empty`.

Hint:
* Для решения задачи используйте цикл `for`.
* Сравните первый и последний элементы массива, второй и предпоследний и т.д.
* Если хоть одна пара элементов не равна, то массив не симметричный.
* Если по окончанию цикла все пары элементов равны, то массив симметричный.
* Для оптимизации решения задачи используйте цикл `for` с условием `i < arr.length / 2`.


Примеры запуска функции:
```javascript
isArraySymmetrical([1, 2, 3, 2, 1]);           // true
isArraySymmetrical([1, 2, 3, 2, 2]);           // false
isArraySymmetrical([false, true, false]);      // true
isArraySymmetrical(['a', 'b', 'c', 't', 'a']); // false
isArraySymmetrical([]);                        // 'Array is empty'
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
    if(arr[i] !== arr[arr.length - 1 - i]){
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

it("isArraySymmetrical([1,2,3,4,4,3,2,1]) should return true", () => {
  expect(isArraySymmetrical([1,2,3,4,4,3,2,1])).to.be.true;
});

it("isArraySymmetrical([1,2,3,2,1]) should return true", () => {
  expect(isArraySymmetrical([1,2,3,2,1])).to.be.true;
});

it("isArraySymmetrical([1,2,3,2,2]) should return false", () => {
  expect(isArraySymmetrical([1,2,3,2,2])).to.be.false;
});

it("isArraySymmetrical([true, false, true]) should return true", () => {
  expect(isArraySymmetrical([true, false, true])).to.be.true;
});

it("isArraySymmetrical(['a', 'b', 'c', 'b', 'a']) should return true", () => {
  expect(isArraySymmetrical(['a', 'b', 'c', 'b', 'a'])).to.be.true;
});

it("isArraySymmetrical(['a', 'bb', 'c', 'b', 'a', 'a']) should return false", () => {
  expect(isArraySymmetrical(['a', 'bb', 'c', 'b', 'a', 'a'])).to.be.false;
});

it("isArraySymmetrical([]) should return 'Array is empty'", () => {
  expect(isArraySymmetrical([])).to.equal('Array is empty');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
