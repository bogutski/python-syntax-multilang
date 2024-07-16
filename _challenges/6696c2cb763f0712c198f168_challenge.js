// NAMEEN:
// NAMERU:Проверить, являются ли все подмассивы анаграммами первого

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `areAllArraysAnagrams` должна принимать массив массивов и возвращать true, если все подмассивы являются анаграммами первого подмассива, и false, если нет.

Подмассивы могут содержать элементы разных примитивных типов и быть любой длины. Количество подмассивов больше или равно 2.

В этой задаче используйте метод `sort` для сортировки массивов перед сравнением, затем метод `join` для преобразования в строки.

Сначала создайте строку, в которой будет храниться отсортированный первый подмассив.

В цикле сравнивайте строки, полученные из остальных подмассивов с первой. Если строки равны, то подмассивы являются анаграммами.

Примеры использования функции:
```javascript
areAllArraysAnagrams([[1, 2, 3], [3, 2, 1], [2, 1, 3]]); // true
areAllArraysAnagrams([['abc', 'def', true, false], [true, false, 'abc', 'def'], [false, 'abc', true, 'def'], ['def', false, 'abc', true]]); // true
areAllArraysAnagrams([[1, true, 3], [3, 2, 1]]); // false
areAllArraysAnagrams([[1, 2, 3, 4], [2, 3, 10, 1], [2, 1, 3, 4]]); // false
areAllArraysAnagrams([[], []]); // true
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function areAllArraysAnagrams(arr) {
  const first = arr[0].sort().join('');
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].sort().join('') !== first) {
      return false;
    }
  }
  return true;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function areAllArraysAnagrams', () => {
  expect(areAllArraysAnagrams).to.be.a('function');
});

it('Function areAllArraysAnagrams should use sort() and join() methods', () => {
  const funcStr = areAllArraysAnagrams.toString();
  expect(funcStr).to.include('.sort(');
  expect(funcStr).to.include('.join(');
});

it('areAllArraysAnagrams([[1, 2, 3], [3, 2, 1], [2, 1, 3] , [3, 1, 2]]) should return true', () => {
  expect(areAllArraysAnagrams([[1, 2, 3], [3, 2, 1], [2, 1, 3], [3, 1, 2]])).to.be.true;
});

it('areAllArraysAnagrams([[1, 2, 3, 4, 5], [3, 4, 2, 1, 5]]) should return true', () => {
  expect(areAllArraysAnagrams([[1, 2, 3, 4, 5], [3, 4, 2, 1, 5]])).to.be.true;
});

it('areAllArraysAnagrams([[1, true, 3], [3, 2, 1]]) should return false', () => {
  expect(areAllArraysAnagrams([[1, true, 3], [3, 2, 1]])).to.be.false;
});

it('areAllArraysAnagrams([[1, 2, 3], [3, 0, 1], [2, 1, 3] , [3, 1, 2]]) should return false', () => {
  expect(areAllArraysAnagrams([[1, 2, 3], [3, 0, 1], [2, 1, 3], [3, 1, 2]])).to.be.false;
});

it('areAllArraysAnagrams([[1, 2, 3], [3, 2, 1], [2, 1, 3] , [3, 1]]) should return false', () => {
  expect(areAllArraysAnagrams([[1, 2, 3], [3, 2, 1], [2, 1, 3], [3, 1]])).to.be.false;
});

it('areAllArraysAnagrams([[1, 2, 3], [3, 2, 1], [2, 1, 3] , [3, 3, 2], [3, 1, 2]]) should return false', () => {
  expect(areAllArraysAnagrams([[1, 2, 3], [3, 2, 1], [2, 1, 3], [3, 3, 2], [3, 1, 2]])).to.be.false;
});

it('areAllArraysAnagrams([["abc", "def", true, false], [true, false, "abc", "def"], [false, "abc", true, "def"], ["def", false, "abc", true]]) should return true', () => {
  expect(areAllArraysAnagrams([['abc', 'def', true, false], [true, false, 'abc', 'def'], [false, 'abc', true, 'def'], ['def', false, 'abc', true]])).to.be.true;
});

it('areAllArraysAnagrams([["abc", "def", true, false], [true, false, "abc", "def"], [false, "abc", true, "def"], ["def", false, "abc", true], ["def", false, "abc", true] , ["abc", true, "def", false]]) should return true', () => {
  expect(areAllArraysAnagrams([['abc', 'def', true, false], [true, false, 'abc', 'def'], [false, 'abc', true, 'def'], ['def', false, 'abc', true], ['def', false, 'abc', true], ['abc', true, 'def', false]])).to.be.true;
});

it('areAllArraysAnagrams([["abc", "dff", true, false], [true, false, "abc", "def"], [false, "abc", true, "def"], ["def", false, "abc", true]]) should return false', () => {
  expect(areAllArraysAnagrams([['abc', 'dff', true, false], [true, false, 'abc', 'def'], [false, 'abc', true, 'def'], ['def', false, 'abc', true]])).to.be.false;
});

it('areAllArraysAnagrams([["a", "01"], [true, "false"]]) should return false', () => {
  expect(areAllArraysAnagrams([['a', '01'], [true, 'false']])).to.be.false;
});

it('areAllArraysAnagrams([["a", "01"], ["a", "01", "a"]]) should return false', () => {
  expect(areAllArraysAnagrams([['a', '01'], ['a', '01', 'a']])).to.be.false;
});

it('areAllArraysAnagrams([["a", "01"], ["a", "01"], ["01", "a"]]) should return true', () => {
  expect(areAllArraysAnagrams([['a', '01'], ['a', '01'], ['01', 'a']])).to.be.true;
});

it('areAllArraysAnagrams([["a"], ["a"], ["a"]]) should return true', () => {
  expect(areAllArraysAnagrams([['a'], ['a'], ['a']])).to.be.true;
});

it('areAllArraysAnagrams([["a"], ["a"], ["b"], ["a"]]) should return false', () => {
  expect(areAllArraysAnagrams([['a'], ['a'], ['b'], ['a']])).to.be.false;
});

it('areAllArraysAnagrams([["a"], ["b"]]) should return false', () => {
  expect(areAllArraysAnagrams([['a'], ['b']])).to.be.false;
});

it('areAllArraysAnagrams([["a"], ["a", "b"]]) should return false', () => {
  expect(areAllArraysAnagrams([['a'], ['a', 'b']])).to.be.false;
});

it('areAllArraysAnagrams([["a"], ["ab"]]) should return false', () => {
  expect(areAllArraysAnagrams([['a'], ['ab']])).to.be.false;
});

it('areAllArraysAnagrams([["a", "01"], [], [], ["01"]]) should return false', () => {
  expect(areAllArraysAnagrams([['a', '01'], [], [], ['01']])).to.be.false;
});

it('areAllArraysAnagrams([["a", "01"], [], ["01", "a"]]) should return false', () => {
  expect(areAllArraysAnagrams([['a', '01'], [], ['01', 'a']])).to.be.false;
});

it('areAllArraysAnagrams([[], [], [], []]) should return true', () => {
  expect(areAllArraysAnagrams([[], [], [], []])).to.be.true;
});

it('areAllArraysAnagrams([[], ["01", "a"]]) should return false', () => {
  expect(areAllArraysAnagrams([[], ['01', 'a']])).to.be.false;
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
