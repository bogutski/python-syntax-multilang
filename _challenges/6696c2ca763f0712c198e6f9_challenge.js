// NAMEEN:
// NAMERU:Определи, как расположены массивы

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `arrayOrder`, которая принимает три параметра:
* `arr1` - массив элементов,
* `arr2` - массив элементов,
* `arr3` - массив элементов.

Функция должна сравнить длины массивов и вернуть строку:
* `Arrays are in ascending order` - если длина второго массива больше, чем длина первого массива,
и длина третьего массива больше, чем длина второго, т.е. массивы расположены по возрастанию,

* `Arrays are in descending order` - если длина второго массива меньше, чем длина первого массива,
и длина третьего массива меньше, чем длина второго, т.е. массивы расположены по убыванию,

* `Not sure` - если длины массивов не соответствуют условиям выше.

Пример запуска функции:
```javascript
arrayOrder([5, 'e'], [111, 2, 34, 4], ['fgh', 2, 35, 4, '54', 0, null]);
//'Arrays are in ascending order'
```

Похожий пример со строками:
```javascript
function strOrder(str1, str2) {
  if (str2.length > str1.length) {
    return 'Strings are in up order';
  } else if (str2.length < str1.length) {
    return 'Strings are in down order';
  } else {
    return 'Not sure';
  }
}
```

 INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function sum(num1, num2){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function arrayOrder(arr1, arr2, arr3){
  if(arr2.length>arr1.length && arr3.length>arr2.length){
    return 'Arrays are in ascending order'
  }
  else if(arr2.length<arr1.length && arr3.length<arr2.length){
    return 'Arrays are in descending order'
  }
  else {
    return 'Not sure'
  }
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function arrayOrder', () => {
  expect(arrayOrder).to.be.a('function');
});

it('Function arrayOrder([5, "e"], [111, 2, 34, 4], ["fgh", 2, 35, 4, "54", 0, null]) returns "Arrays are in ascending order"', () => {
  expect(arrayOrder([5, 'e'], [111, 2, 34, 4], ['fgh', 2, 35, 4, '54', 0, null])).to.equal('Arrays are in ascending order');
});

it('Function arrayOrder([5, "e"], [111], []) returns "Arrays are in descending order"', () => {
  expect(arrayOrder([5, 'e'], [111], [])).to.equal('Arrays are in descending order');
});

it('Function arrayOrder([5, "e"], [111, 2, 34, 4], ["fgh", 2, 35, 4]) returns "Not sure"', () => {
  expect(arrayOrder([5, 'e'], [111, 2, 34, 4], ['fgh', 2, 35, 4])).to.equal('Not sure');
});

it('Function arrayOrder([], [111, 2, 34, 4], []) returns "Not sure"', () => {
  expect(arrayOrder([], [111, 2, 34, 4], [])).to.equal('Not sure');
});

it('Function arrayOrder([5, "e"], [111, 2], ["fgh", 2]) returns "Not sure"', () => {
  expect(arrayOrder([5, 'e'], [111, 2], ['fgh', 2])).to.equal('Not sure');
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
