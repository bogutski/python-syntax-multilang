// NAMEEN:
// NAMERU:Нахождение строк в массиве

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `getAllSmallOnes`, которая принимает массив строк разной длины.

Функция должна пройтись по массиву и все строки, длина которых меньше или равна `3`, объединить в одну строку.

Все остальные строки должны добавиться в новый массив.

По окончанию цикла, сформированная строка должна добавиться в начало нового массива.

Если массив пустой, то функция должна вернуть строку `'Array has no elements'`.


Примеры запуска функции:
```javascript
getAllSmallOnes(['1', '12', '123', '1234', '12345'])     // ['112123', '1234', '12345']
getAllSmallOnes(['hello', 'check', 'aaa', 'text', 'a'])  // ['aaaa', 'hello', 'check', 'text']
getAllSmallOnes(['1', '2', '3'])                         // ['123']
getAllSmallOnes(['', '', '', ''])                        // ['']
getAllSmallOnes([])                                      // 'Array has no elements'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function getAllSmallOnes(arr){
  if (!arr.length) return 'Array has no elements';
  const newArr = [];
  let str = '';
  for (let i = 0; i < arr.length; i++){
    if (arr[i].length <= 3) str += arr[i];
    else newArr.push(arr[i]);
  }
  newArr.unshift(str)
  return newArr;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function getAllSmallOnes', () => {
  expect(getAllSmallOnes).to.be.a('function');
});

it("getAllSmallOnes(['1', '12', '123', '1234', '12345', '12346']) should return ['112123', '1234', '12345', '12346']", () => {
  expect(getAllSmallOnes(['1', '12', '123', '1234', '12345', '12346'])).to.deep.equal(['112123', '1234', '12345', '12346']);
});

it("getAllSmallOnes(['apple', 'hello', 'check', 'aaa', 'text', 'a']) should return ['aaaa', 'apple', 'hello', 'check', 'text']", () => {
  expect(getAllSmallOnes(['apple', 'hello', 'check', 'aaa', 'text', 'a'])).to.deep.equal(['aaaa', 'apple', 'hello', 'check', 'text']);
});

it("getAllSmallOnes(['one', 'two', 'three', 'four', 'five']) should return ['onetwo', 'three', 'four', 'five']", () => {
  expect(getAllSmallOnes(['one', 'two', 'three', 'four', 'five'])).to.deep.equal(['onetwo', 'three', 'four', 'five']);
});

it("getAllSmallOnes(['1', '2', '3', '4', '5']) should return ['12345']", () => {
  expect(getAllSmallOnes(['1', '2', '3', '4', '5'])).to.deep.equal(['12345']);
});

it("getAllSmallOnes['', '', '', '', '']) should return ['']", () => {
  expect(getAllSmallOnes(['', '', '', '', ''])).to.deep.equal(['']);
});

it("getAllSmallOnes([]) should return 'Array has no elements'", () => {
  expect(getAllSmallOnes([])).to.deep.equal('Array has no elements');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
