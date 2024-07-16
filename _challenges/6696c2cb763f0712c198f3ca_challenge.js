// NAMEEN:
// NAMERU:Определение наличия и удаление специального элемента

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `removeFirstSpecial`, которая принимает массив и специальное значение (`specialValue`) в качестве аргументов.

Функция должна пройти через массив и с помощью удаления (`shift()`) и проверки каждого элемента, перенести все элементы кроме первого вхождения `specialValue` в новый массив.

Если `specialValue` не найден, новый массив остается неизменным.

Функция должна возвращать новый массив.

Пример запуска функции:
```javascript
removeFirstSpecial([1, 2, 3, 4, 3, 2, 1], 3);   // [ 1, 2, 4, 3, 2, 1 ]
removeFirstSpecial(['a', 'b', 'c', 'b'], 'b');  // [ 'a', 'c', 'b' ]
removeFirstSpecial([true, false, true], false); // [ true, true ]
removeFirstSpecial([1, 2, 3], 4); // [ 1, 2, 3 ]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function removeFirstSpecial(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function removeFirstSpecial(arr, specialElement) {
  let res = []
  let isDeleted = false

  while(arr.length){
    const el = arr.shift()

    if(el === specialElement && !isDeleted) isDeleted = true
    else if(el !== specialElement || el === specialElement && isDeleted) res.push(el)
  }

  return res;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function removeFirstSpecial', () => {
  expect(removeFirstSpecial).to.be.a('function');
});

it('Function removeFirstSpecial should include methods shift()', () => {
  const res = removeFirstSpecial.toString()
  expect(res).to.include('.shift()')
});

it("removeFirstSpecial([1, 2, 3, 4, 3, 2, 1], 3) should return [1, 2, 4, 3, 2, 1]", () => {
  expect(removeFirstSpecial([1, 2, 3, 4, 3, 2, 1], 3)).to.deep.equal([1, 2, 4, 3, 2, 1]);
});

it("removeFirstSpecial(['a', 'b', 'c', 'b'], 'b') should return ['a', 'c', 'b']", () => {
  expect(removeFirstSpecial(['a', 'b', 'c', 'b'], 'b')).to.deep.equal(['a', 'c', 'b']);
});

it("removeFirstSpecial([true, false, true], false) should return [true, true]", () => {
  expect(removeFirstSpecial([true, false, true], false)).to.deep.equal([true, true]);
});

it("removeFirstSpecial([1, 2, 3], 4) should return [1, 2, 3] when the special value is not found", () => {
  expect(removeFirstSpecial([1, 2, 3], 4)).to.deep.equal([1, 2, 3]);
});

it("removeFirstSpecial([], 'a') should return an empty array if the input array is initially empty", () => {
  expect(removeFirstSpecial([], 'a')).to.deep.equal([]);
});

it("removeFirstSpecial(['x'], 'x') should return an empty array when the only element is the special value", () => {
  expect(removeFirstSpecial(['x'], 'x')).to.deep.equal([]);
});

it("removeFirstSpecial(['apple', 'banana', 'apple', 'cherry', 'banana'], 'banana') should return ['apple', 'apple', 'cherry', 'banana']", () => {
  expect(removeFirstSpecial(['apple', 'banana', 'apple', 'cherry', 'banana'], 'banana')).to.deep.equal(['apple', 'apple', 'cherry', 'banana']);
});

it("removeFirstSpecial([10, 20, 30, 10, 20, 30], 20) should return [10, 30, 10, 20, 30] and the original array should be empty", () => {
  let originalArray = [10, 20, 30, 10, 20, 30];
  let resultArray = removeFirstSpecial(originalArray, 20);
  expect(resultArray).to.deep.equal([10, 30, 10, 20, 30]);
  expect(originalArray).to.be.empty;
});

it("removeFirstSpecial([1, 2, 3, 4, 5], 6) should return a new array [1, 2, 3, 4, 5] and the original array should be empty (specialValue not found)", () => {
  let originalArray = [1, 2, 3, 4, 5];
  let resultArray = removeFirstSpecial(originalArray, 6);
  expect(resultArray).to.deep.equal([1, 2, 3, 4, 5]);
  expect(originalArray).to.be.empty;
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
