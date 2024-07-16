// NAMEEN:
// NAMERU:Фильтрация анаграмм

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `filterAnagrams`, которая принимает массив строк.

Функция возвращает массив, содержащий только те строки, которые являются анаграммами хотя бы одной другой строки из исходного массива.


Примеры запуска функции:
```javascript
console.log(justTest(['span', 'naps', 'snap'])); // [ 'span', 'naps', 'snap' ]
console.log(justTest(['brag', 'garb', 'brad', 'grab', 'bred'])); // [ 'brag', 'garb', 'grab' ]
console.log(justTest(['stressed', 'street ', 'desserts'])); // [ 'stressed', 'desserts' ]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function filterAnagrams(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function filterAnagrams(words) {
  const modified = words.map(word => word.split('').sort().join(''))

  let notAnagrams = []

  for(let i = 0; i < modified.length; i++) {
    if(!modified.some((str, index) => index !== i && str === modified[i])) notAnagrams.push(i)
  }

  if(!notAnagrams.length) return words
  else return words.filter((_, i) => !notAnagrams.includes(i))
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function filterAnagrams', () => {
  expect(filterAnagrams).to.be.a('function');
});

it('filterAnagrams(["span", "naps", "snap"]) should return [ "span", "naps", "snap" ]', function() {
  expect(filterAnagrams(['span', 'naps', 'snap'])).to.deep.equal(['span', 'naps', 'snap']);
});

it('filterAnagrams(["brag", "garb", "brad", "grab", "bred"]) should return [ "brag", "garb", "grab" ]', function() {
  expect(filterAnagrams(['brag', 'garb', 'brad', 'grab', 'bred'])).to.deep.equal(['brag', 'garb', 'grab']);
});

it('filterAnagrams(["stressed", "street", "desserts"]) should return [ "stressed", "desserts" ]', function() {
  expect(filterAnagrams(['stressed', 'street', 'desserts'])).to.deep.equal(['stressed', 'desserts']);
});

it('filterAnagrams(["abc", "bca", "cab", "cba"]) should return [ "abc", "bca", "cab", "cba" ]', function() {
  expect(filterAnagrams(['abc', 'bca', 'cab', 'cba'])).to.deep.equal(['abc', 'bca', 'cab', 'cba']);
});

it('filterAnagrams(["a", "b", "c"]) should return []', function() {
  expect(filterAnagrams(['a', 'b', 'c'])).to.deep.equal([]);
});

it('filterAnagrams(["hello", "world", "drowl", "olhel"]) should return [ "hello", "world", "drowl", "olhel" ]', function() {
  expect(filterAnagrams(['hello', 'world', 'drowl', 'olhel'])).to.deep.equal(['hello', 'world', 'drowl', 'olhel']);
});

it('filterAnagrams(["aaa", "aaa", "aaa"]) should return [ "aaa", "aaa", "aaa" ]', function() {
  expect(filterAnagrams(['aaa', 'aaa', 'aaa'])).to.deep.equal(['aaa', 'aaa', 'aaa']);
});

it('filterAnagrams(["one", "two", "three", "noe"]) should return [ "one", "noe" ]', function() {
  expect(filterAnagrams(['one', 'two', 'three', 'noe'])).to.deep.equal(['one', 'noe']);
});

it('filterAnagrams(["xyz", "yxz", "zyx", "zxy", "yxz"]) should return [ "xyz", "yxz", "zyx", "zxy", "yxz" ]', function() {
  expect(filterAnagrams(['xyz', 'yxz', 'zyx', 'zxy', 'yxz'])).to.deep.equal(['xyz', 'yxz', 'zyx', 'zxy', 'yxz']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
