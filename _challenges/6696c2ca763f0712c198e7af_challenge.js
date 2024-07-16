// NAMEEN:
// NAMERU:Изменение первых трех элементов массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `addLetter`, которая принимает один параметр - массив.

Массив содержит 4 элемента. 

Первые 3 – строки. 

Четвертый элемент - вложенный массив с тремя строками.

Вложенный массив находится в конце массива.

Каждая строка основного и вложенного массива содержит одну букву.

Пример заданного массива:
`['a', 'b', 'c', ['a', 'b', 'c']]`

Соедините первый элемент массива с первым элементом вложенного массива в верхнем регистре.

Соедините второй элемент массива со вторым элементом вложенного массива в верхнем регистре.

Соедините третий элемент массива с третим элементом вложенного массива в верхнем регистре.

Функция должна вернуть измененный массив.

Пример запуска функции:
```javascript
addLetter(['a', 'd', 'g', ['j', 'm', 'p']]) // ['aJ', 'dM', 'gP', ['j', 'm', 'p']]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function addLetter(arr){
  arr[0] += arr[arr.length - 1][0].toUpperCase();
  arr[1] += arr[arr.length - 1][1].toUpperCase();
  arr[2] += arr[arr.length - 1][2].toUpperCase();
  return arr
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function addLetter', () => {
  expect(addLetter).to.be.a('function');
});

it('addLetter([\'a\', \'d\', \'g\', [\'j\', \'m\', \'p\']]) should return [\'aJ\', \'dM\', \'gP\', [\'j\', \'m\', \'p\']]', () => {
    expect(addLetter(['a', 'd', 'g', ['j', 'm', 'p']])).to.be.deep.equal(['aJ', 'dM', 'gP', ['j', 'm', 'p']]);
});

it('addLetter([\'a\', \'b\', \'c\', [\'a\', \'b\', \'c\']]) should return [\'aA\', \'bB\', \'cC\', [\'a\', \'b\', \'c\']]', () => {
    expect(addLetter(['a', 'b', 'c', ['a', 'b', 'c']])).to.be.deep.equal(['aA', 'bB', 'cC', ['a', 'b', 'c']]);
});

it('addLetter([\'k\', \'k\', \'k\', [\'T\', \'L\', \'O\']]) should return [\'kT\', \'kL\', \'kO\', [\'T\', \'L\', \'O\']]', () => {
    expect(addLetter(['k', 'k', 'k', ['T', 'L', 'O']])).to.be.deep.equal(['kT', 'kL', 'kO', ['T', 'L', 'O']]);
});

it('addLetter([\'a\', \'b\', \'c\', [\'E\', \'k\', \'m\']]) should return [\'aE\', \'bK\', \'cM\', [\'E\', \'k\', \'m\']]', () => {
    expect(addLetter(['a', 'b', 'c', ['E', 'k', 'm']])).to.be.deep.equal(['aE', 'bK', 'cM', ['E', 'k', 'm']]);
});

it('addLetter([\'a\', \'b\', \'c\', [\'j\', \'F\', \'s\']]) should return [\'aJ\', \'bF\', \'cS\', [\'j\', \'F\', \'s\']]', () => {
    expect(addLetter(['a', 'b', 'c', ['j', 'F', 's']])).to.be.deep.equal(['aJ', 'bF', 'cS', ['j', 'F', 's']]);
});

it('addLetter([\'a\', \'b\', \'c\', [\'h\', \'v\', \'U\']]) should return [\'aH\', \'bV\', \'cU\', [\'h\', \'v\', \'U\']]', () => {
    expect(addLetter(['a', 'b', 'c', ['h', 'v', 'U']])).to.be.deep.equal(['aH', 'bV', 'cU', ['h', 'v', 'U']]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
