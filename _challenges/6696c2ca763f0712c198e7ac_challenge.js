// NAMEEN:
// NAMERU:Изменение 1-го и 4-го элемента массива или последнего элемента

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `changeArr`, которая принимает один параметр - массив из чисел.

Если длина массива больше или равна 5, измените значение первого элемента массива на значение 5-го элемента,
а значение 4-го элемента массива измените на значение 2-го элемента.

Если длина массива меньше или равна 4, измените значение первого элемента массива на квадрат последнего элемента.

Функция должна вернуть измененный массив.

Пример запуска функции:
```javascript
changeArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) // [5, 2, 3, 2, 5, 6, 7, 8, 9, 10]
changeArr([5, 6, 7, 8]) // [64, 6, 7, 8]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function changeArr(arr){
    if(arr.length >= 5){
        arr[0] = arr[4];
        arr[3] = arr[1];
    }else{
        arr[0] = arr[arr.length - 1] ** 2;
    }
    return arr
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function changeArr', () => {
  expect(changeArr).to.be.a('function');
});

it('changeArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) should return [5, 2, 3, 2, 5, 6, 7, 8, 9, 10]', () => {
    expect(changeArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).to.deep.equal([5, 2, 3, 2, 5, 6, 7, 8, 9, 10]);
});

it('changeArr([5, 6, 7, 8]) should return [64, 6, 7, 8]', () => {
    expect(changeArr([5, 6, 7, 8])).to.deep.equal([64, 6, 7, 8]);
});

it('changeArr([5, 100, 7, 8, 90, 7]) should return [90, 6, 7, 100, 90, 7]', () => {
    expect(changeArr([5, 100, 7, 8, 90, 7])).to.deep.equal([90, 100, 7, 100, 90, 7]);
});

it('changeArr([5, 100]) should return [10000, 100]', () => {
    expect(changeArr([5, 100])).to.deep.equal([10000, 100]);
});

it('changeArr([9, 10, 11, 12, -13, 14, 15, 16]) should return [-13, 10, 11, 10, -13, 14, 15, 16]', () => {
    expect(changeArr([9, 10, 11, 12, -13, 14, 15, 16])).to.deep.equal([-13, 10, 11, 10, -13, 14, 15, 16]);
});

it('changeArr([13, 14, -5]) should return [13, 14, 25]', () => {
    expect(changeArr([13, 14, -5])).to.deep.equal([25, 14, -5]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
