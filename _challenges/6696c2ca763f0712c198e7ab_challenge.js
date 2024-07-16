// NAMEEN:
// NAMERU:Изменение первого или последнего элемента массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `changeElement`, которая принимает один параметр - массив из чисел.

Если длина массива четная, прибавьте к значению последнего элемента значение предпоследнего.
Если длина массива нечетная, возведите в куб значение первого элемента.

Функция должна вернуть обновленный массив.

Пример запуска функции:
```javascript
changeElement([1, 2, 3, 4, 5, 6]); // [1, 2, 3, 4, 5, 11]
changeElement([2, 3, 4, 5, 6]); // [8, 3, 4, 5, 6]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function changeElement(arr){
  if(arr.length % 2 === 0){
    arr[arr.length - 1] = arr[arr.length - 1] + arr[arr.length - 2];
  }else{
    arr[0] = arr[0] ** 3;
  }
  return arr;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function changeElement', () => {
  expect(changeElement).to.be.a('function');
});

it('changeElement([1, 2, 3, 4, 5, 6]) should return [1, 2, 3, 4, 5, 11]', () => {
    expect(changeElement([1, 2, 3, 4, 5, 6])).to.deep.equal([1, 2, 3, 4, 5, 11]);
});

it('changeElement([2, 3, 4, 5, 6]) should return [8, 3, 4, 5, 6]', () => {
    expect(changeElement([2, 3, 4, 5, 6])).to.deep.equal([8, 3, 4, 5, 6]);
});

it('changeElement([3, 2, 3, 4, 5, 6, 7]) should return [27, 2, 3, 4, 5, 6, 7]', () => {
    expect(changeElement([3, 2, 3, 4, 5, 6, 7])).to.deep.equal([27, 2, 3, 4, 5, 6, 7]);
});

it('changeElement([2, 3, 4, 5, 6, 7]) should return [2, 3, 4, 5, 6, 13]', () => {
    expect(changeElement([2, 3, 4, 5, 6, 7])).to.deep.equal([2, 3, 4, 5, 6, 13]);
});

it('changeElement([1, 2, 3, 4, 5, 6, 7, -8]) should return [1, 2, 3, 4, 5, 6, 7, -1]', () => {
    expect(changeElement([1, 2, 3, 4, 5, 6, 7, -8])).to.deep.equal([1, 2, 3, 4, 5, 6, 7, -1]);
});

it('changeElement([-4, 4, 5, 6, 7, -8, 9]) should return [-64, 4, 5, 6, 7, -8, 9]', () => {
    expect(changeElement([-4, 4, 5, 6, 7, -8, 9])).to.deep.equal([-64, 4, 5, 6, 7, -8, 9]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
