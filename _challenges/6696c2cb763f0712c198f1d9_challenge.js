// NAMEEN:
// NAMERU:Перевернуть только средний элемент массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `reverseOnlyMiddle`, которая принимает массив строк.

Функция должна вернуть новый массив:

* Все элементы, кроме среднего, должны остаться без изменений.

* Строка, находящаяся посередине массива, должна быть перевернута.

В массиве будет гарантированно нечетное количество элементов.

Для нахождения индекса элемента посередине используйте функцию `Math.floor(arr.length / 2)`.

Если массив пустой, то вернуть строку `'Array is empty'`.


Примеры запуска функции:
```javascript
reverseOnlyMiddle(['123', '456', '789']);          // ['123', '654', '789']
reverseOnlyMiddle(['123', 'abc', 'def']);          // ['123', 'cba', 'def']
reverseOnlyMiddle(['12', '34', '56', '78', '90']); // ['12', '34', '65', '78', '90']
reverseOnlyMiddle(['drow']);                       // ['word']
reverseOnlyMiddle([]);                             // 'Array is empty'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function reverseOnlyMiddle(arr){
  if(!arr.length) return 'Array is empty';
  const index = Math.floor(arr.length / 2)
  const newArr = [];

  for(let i = 0; i < arr.length; i++){
    if(i === index){
      let revWord = '';
      for(let j = arr[i].length - 1; j >= 0; j--){
        revWord += arr[i][j];
      }
      newArr.push(revWord);
    }
    else newArr.push(arr[i])
  }

  return newArr;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function reverseOnlyMiddle', () => {
  expect(reverseOnlyMiddle).to.be.a('function');
});

it("reverseOnlyMiddle(['123', 'abc', '456']) should return ['123', 'cba', '456']", () => {
  const arr = ['123', 'abc', '456'];
  expect(reverseOnlyMiddle(arr)).to.not.equal(arr);
});

it("reverseOnlyMiddle(['123', '456', '789']) should return ['123', '654', '789']", () => {
  expect(reverseOnlyMiddle(['123', '456', '789'])).to.deep.equal(['123', '654', '789']);
});

it("reverseOnlyMiddle(['123', 'qwe', '789', 'abc', '225']) should return ['123', 'qwe', '987', 'abc', '225']", () => {
  expect(reverseOnlyMiddle(['123', 'qwe', '789', 'abc', '225'])).to.deep.equal(['123', 'qwe', '987', 'abc', '225']);
});

it("reverseOnlyMiddle(['12', '34', '56', '78', '90']) should return ['12', '34', '65', '78', '90']", () => {
  expect(reverseOnlyMiddle(['12', '34', '56', '78', '90'])).to.deep.equal(['12', '34', '65', '78', '90']);
});

it("reverseOnlyMiddle(['ab', 'cd', 'ea', 'elddim', 'mnb', 'ij', 'kl']) should return ['ab', 'cd', 'ea', 'middle', 'mnb', 'ij', 'kl']", () => {
  expect(reverseOnlyMiddle(['ab', 'cd', 'ea', 'elddim', 'mnb', 'ij', 'kl'])).to.deep.equal(['ab', 'cd', 'ea', 'middle', 'mnb', 'ij', 'kl']);
});

it("reverseOnlyMiddle(['drow eno ylno']) should return ['only one word']", () => {
  expect(reverseOnlyMiddle(['drow eno ylno'])).to.deep.equal(['only one word']);
});

it("reverseOnlyMiddle([]) should return 'Array is empty'", () => {
  expect(reverseOnlyMiddle([])).to.equal('Array is empty');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
