// NAMEEN:
// NAMERU:Разделите массив строк на подмассивы по длине строки

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `splitStringArray` принимает массив строк и число.
Функция должна разделить массив на 3 подмассива, отфильтровав строки по длине, и вернуть массив из полученных подмассивов.

В первый подмассив должны попасть строки, длина которых меньше числа, переданного в функцию.

Во второй подмассив должны попасть строки, длина которых равна числу, переданному в функцию.

В третий подмассив должны попасть строки, длина которых больше числа, переданного в функцию.

Любой из подмассивов может быть пустым, если в исходном массиве не было строк, подходящих под соответствующее условие.

Если массив пустой, то функция должна вернуть сообщение "Array is empty".

Если второй аргумент - число меньше или равно 0, то функция должна вернуть исходный массив.

Задача должна быть решена с помощью цикла 'for' и последовательности операторов `if ... else`.

Примеры вызова функции:
```javascript
splitStringArray(['a', 'bb', 'ccc', 'dddd'], 3); // [['a', 'bb'], ['ccc'], ['dddd']]
splitStringArray(['a', 'cat', 'is', 'furry'], 6); // [['a', 'cat', 'is', 'furry'], [], []]
'splitStringArray(['They','ate', 'all', 'the', 'pie'], 3); // [[], ['ate', 'all', 'the', 'pie'], ['They']]
splitStringArray(['I', '', 'am', 'a', '', 'student'], 2); // [['I', 'a'], ['am'], ['student']]
splitStringArray(['Game', 'is', 'on'], 0); // ['Game', 'is', 'on']
splitStringArray([], 2); // 'Array is empty'
splitStringArray(['', ''], 3); // [[],[],[]]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function splitStringArray(array, number) {
  if (array.length === 0) {
    return 'Array is empty';
  }

  if(number <= 0) return array;

  const result = [[], [], []];

  for (const item of array) {
    if (item.length === 0) continue;
    if (item.length < number) {
      result[0].push(item);
    } else if (item.length === number) {
      result[1].push(item);
    } else {
      result[2].push(item);
    }
  }

  return result;
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function splitStringArray', () => {
  expect(splitStringArray).to.be.a('function');
});

it('Function splitStringArray should not use Array.prototype.filter', () => {
  expect(splitStringArray.toString()).to.not.include('.filter(');
});

it('splitStringArray(["a", "bb", "ccc", "dddd"], 3) should return [["a", "bb"], ["ccc"], ["dddd"]]', () => {
  expect(splitStringArray(['a', 'bb', 'ccc', 'dddd'], 3)).to.deep.equal([['a', 'bb'], ['ccc'], ['dddd']]);
});

it('splitStringArray(["a", "cat", "is", "furry"], 6) should return [["a", "cat", "is", "furry"], [], []]', () => {
  expect(splitStringArray(['a', 'cat', 'is', 'furry'], 6)).to.deep.equal([['a', 'cat', 'is', 'furry'], [], []]);
});

it('splitStringArray(["a", "cat", "is", "furry"], 1) should return [[], ["a"], ["cat", "is", "furry"]]', () => {
  expect(splitStringArray(['a', 'cat', 'is', 'furry'], 1)).to.deep.equal([[], ['a'], ['cat', 'is', 'furry']]);
});

it('splitStringArray(["a", "cat", "is", "furry"], 2) should return [["a"], ["is"], ["cat", "furry"]]', () => {
  expect(splitStringArray(['a', 'cat', 'is', 'furry'], 2)).to.deep.equal([['a'], ['is'], ['cat', 'furry']]);
});

it('splitStringArray(["a", "", "cat", "", "is", "furry", ""], 2) should return [["a"], ["is"], ["cat", "furry"]]', () => {
  expect(splitStringArray(['a', 'cat', 'is', 'furry'], 2)).to.deep.equal([['a'], ['is'], ['cat', 'furry']]);
});

it('splitStringArray(["a", "cat", "is", "furry"], 3) should return [["a", "is"], ["cat"], ["furry"]]', () => {
  expect(splitStringArray(['a', 'cat', 'is', 'furry'], 3)).to.deep.equal([['a', 'is'], ['cat'], ['furry']]);
});

it('splitStringArray(["a", "cat", "is", "furry"], 4) should return [["a", "cat", "is"], [], ["furry"]]', () => {
  expect(splitStringArray(['a', 'cat', 'is', 'furry'], 4)).to.deep.equal([['a', 'cat', 'is'], [], ['furry']]);
});

it('splitStringArray(["a", "cat", "is", "furry"], 5) should return [["a", "cat", "is", "furry"], [], []]', () => {
  expect(splitStringArray(['a', 'cat', 'is', 'furry'], 5)).to.deep.equal([['a', 'cat', 'is'], ['furry'], []]);
});

it('splitStringArray(["I", "am", "a", "student"], 2) should return [["I", "a"], ["am"], ["student"]]', () => {
  expect(splitStringArray(['I', 'am', 'a', 'student'], 2)).to.deep.equal([['I', 'a'], ['am'], ['student']]);
});

it('splitStringArray(["They", "ate", "all", "the", "pie"], 3) should return [[], ["ate", "all", "the", "pie"], ["They"]]', () => {
  expect(splitStringArray(['They', 'ate', 'all', 'the', 'pie'], 3)).to.deep.equal([[], ['ate', 'all', 'the', 'pie'], ['They']]);
});

it('splitStringArray(["They", "ate", "all", "the", "pie"], 0) should return ["They", "ate", "all", "the", "pie"]', () => {
  expect(splitStringArray(['They', 'ate', 'all', 'the', 'pie'], 0)).to.deep.equal(['They', 'ate', 'all', 'the', 'pie']);
});

it('splitStringArray([""], 0) should return [""]', () => {
  expect(splitStringArray([''], 0)).to.deep.equal(['']);
});

it('splitStringArray([""], 1) should return [[],[],[]]', () => {
  expect(splitStringArray([''], 1)).to.deep.equal([[],[],[]]);
});

it('splitStringArray(["","",""], 2) should return [[],[],[]]', () => {
  expect(splitStringArray(['','',''], 2)).to.deep.equal([[],[],[]]);
});

it('splitStringArray([], 2) should return "Array is empty"', () => {
  expect(splitStringArray([], 2)).to.equal('Array is empty');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
