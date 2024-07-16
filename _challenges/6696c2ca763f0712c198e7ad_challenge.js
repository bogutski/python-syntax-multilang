// NAMEEN:
// NAMERU:Изменение во втором вложенном массиве первого элемента

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `innerArrChangeFirstEl`, которая принимает один параметр - массив.

В массиве находится 2 вложенных массива с произвольными данными.

Если первый элемент (индекс 0) второго вложенного массива - строка,
то измените его значение на верхний регистр.

Если первый элемент (индекс 0) второго вложенного массива - число,
то возведите его в степень 2.

Функция должна вернуть измененный массив.


```javascript
innerArrChangeFirstEl([[1, 2, 3], ['hello', 'umbrella', 'phone']]) // [ [ 1, 2, 3 ], [ 'HELLO', 'umbrella', 'phone' ] ]
innerArrChangeFirstEl([[1, 2, 3], [4, 5, 2]])   // [ [ 1, 2, 3 ], [ 16, 5, 2 ] ]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function innerArrChangeFirstEl(arr){
  if(typeof arr[1][0] === 'string'){
    arr[1][0] = arr[1][0].toUpperCase()
  }else if(typeof arr[1][0] === 'number'){
    arr[1][0] = arr[1][0] ** 2
  }
  return arr
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function innerArrChangeFirstEl', () => {
  expect(innerArrChangeFirstEl).to.be.a('function');
});

it('innerArrChangeFirstEl([[1, 2, 3], [4, 5, 2]]) should return [[ 1, 2, 3 ], [ 16, 5, 2 ]]', () => {
    expect(innerArrChangeFirstEl([[1, 2, 3], [4, 5, 2]])).to.deep.equal([[ 1, 2, 3 ], [ 16, 5, 2 ]]);
});

it('innerArrChangeFirstEl([[1, 2, 3], ["hello", "umbrella", "phone"]]) should return [[1, 2, 3], ["HELLO", "umbrella", "phone"]]', () => {
    expect(innerArrChangeFirstEl([[1, 2, 3], ["hello", "umbrella", "phone"]])).to.deep.equal([[1, 2, 3], ["HELLO", "umbrella", "phone"]]);
});

it('innerArrChangeFirstEl([[1, 2, 3, true, "cherry"], ["red", "green", "blue"]]) should return [[1, 2, 3, true, "cherry"], ["RED", "green", "blue"]]', () => {
    expect(innerArrChangeFirstEl([[1, 2, 3, true, "cherry"], ["red", "green", "blue"]])).to.deep.equal([[1, 2, 3, true, "cherry"], ["RED", "green", "blue"]]);
});

it('innerArrChangeFirstEl([[1, 2, 3], ["grape", 5, "banana"]]) should return [[1, 2, 3], ["GRAPE", 5, "banana"]]', () => {
    expect(innerArrChangeFirstEl([[1, 2, 3], ["grape", 5, "banana"]])).to.deep.equal([[1, 2, 3], ["GRAPE", 5, "banana"]]);
});

it('innerArrChangeFirstEl([[1, 2, 3], [4, "apple", "banana"]]) should return [[ 1, 2, 3 ], [ 16, "apple", "banana" ]]', () => {
    expect(innerArrChangeFirstEl([[1, 2, 3], [4, "apple", "banana"]])).to.deep.equal([[ 1, 2, 3 ], [ 16, 'apple', 'banana' ]]);
});

it('innerArrChangeFirstEl([[1, 2, 3], [-3, 2, "banana"]]) should return [[ 1, 2, 3 ], [ 9, 2, "banana" ]]', () => {
    expect(innerArrChangeFirstEl([[1, 2, 3], [-3, 2, "banana"]])).to.deep.equal([[ 1, 2, 3 ], [ 9, 2, 'banana' ]]);
});

it('innerArrChangeFirstEl([[1, 2, 3], [-2, -2, "banana"]]) should return [[ 1, 2, 3 ], [ 4, -2, "banana" ]]', () => {
    expect(innerArrChangeFirstEl([[1, 2, 3], [-2, -2, "banana"]])).to.deep.equal([[ 1, 2, 3 ], [ 4, -2, 'banana' ]]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
