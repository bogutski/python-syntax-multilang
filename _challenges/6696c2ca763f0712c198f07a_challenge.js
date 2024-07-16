// NAMEEN:
// NAMERU:Найти максимальную длину строк

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `firstAndSecondMax`, которая принимает массив строк разной длины.

Функция должна вернуть массив из двух элементов:

* первый элемент - это длина самой длинной строки
* второй элемент - это длина второй по длине строки

Если массив пустой, то верните строку 'Array is empty'.

Если все строки в массиве имеют одинаковую длину, то верните строку 'Strings are equal'.


Примеры запуска функции:
```javascript
firstAndSecondMax(['a', 'aa', 'abcd']);      // [4, 2]
firstAndSecondMax(['qwert', 'abc', 'a', 'a); // [5, 3]
firstAndSecondMax(['aaa', 'aaa', 'aaa']);    // 'Strings are equal'
firstAndSecondMax(['', '', '']);             // 'Strings are equal'
firstAndSecondMax([]);                       // 'Array is empty'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function firstAndSecondMax(arr){
  if(!arr.length) return 'Array is empty';
  let max = arr[0].length;
  let secondMax = arr[0].length;

  for(let i = 1; i < arr.length; i++){
    if(arr[i].length > max) max = arr[i].length;
  }
  for(let i = 1; i < arr.length; i++){
    if((secondMax === max || arr[i].length > secondMax) && arr[i].length !== max) secondMax = arr[i].length;
  }

  if(secondMax === max) return 'Strings are equal';
  else return [max, secondMax];
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function firstAndSecondMax', () => {
  expect(firstAndSecondMax).to.be.a('function');
});

it('Function firstAndSecondMax does not include method sort', () => {
  expect(firstAndSecondMax.toString()).to.not.include('sort');
});

it('Function firstAndSecondMax does not include method Math.max', () => {
  expect(firstAndSecondMax.toString()).to.not.include('Math.max');
});

it("firstAndSecondMax(['a', 'ab', 'abc', 'abcd']) should return [4, 3]", () => {
  expect(firstAndSecondMax(['a', 'ab', 'abc', 'abcd'])).to.eql([4, 3]);
});

it("firstAndSecondMax(['abcde', 'abc', 'abcd', 'aa']) should return [5, 4]", () => {
  expect(firstAndSecondMax(['abcde', 'abc', 'abcd', 'aa'])).to.eql([5, 4]);
});

it("firstAndSecondMax(['abcde', 'abcsdw', 'abcad', 'awesa', 'aa']) should return [6, 5]", () => {
  expect(firstAndSecondMax(['abcde', 'abcsdw', 'abcad', 'awesa', 'aa'])).to.eql([6, 5]);
});

it("firstAndSecondMax(['', '', '']) should return 'Strings are equal'", () => {
  expect(firstAndSecondMax(['', '', ''])).to.eql('Strings are equal');
});

it("firstAndSecondMax(['aaa', 'aaa', 'aaa', 'aaa', 'aaa']) should return 'Strings are equal'", () => {
  expect(firstAndSecondMax(['aaa', 'aaa', 'aaa', 'aaa', 'aaa'])).to.eql('Strings are equal');
});

it("firstAndSecondMax([]) should return 'Array is empty'", () => {
  expect(firstAndSecondMax([])).to.eql('Array is empty');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
