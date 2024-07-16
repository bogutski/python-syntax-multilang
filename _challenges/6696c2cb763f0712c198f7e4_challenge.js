// NAMEEN:
// NAMERU:Найти индекс элемента, содержащего подстроку, с учетом регистра и нескольких подстрок

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findSubstringIndices`, которая принимает массив строк и массив подстрок.

Функция должна вернуть массив индексов, где каждый индекс соответствует первому элементу массива, который содержит каждую подстроку из массива подстрок, с учетом регистра.

Если подстрока не найдена, вместо индекса должно быть значение `Substring not found`.


Примеры запуска функции:
```javascript
console.log(findSubstringIndices(['apple pie', 'banana split', 'cherry tart'], ['split', 'apple', 'cake']));
// [1, 0, "Substring not found"]

console.log(findSubstringIndices(['apple pie', 'banana split', 'cherry tart'], ['tart', 'pie']));
// [2, 0]

console.log(findSubstringIndices(['cat', 'dog', 'fish'], ['bird', 'dog', 'cat']));
// ['Substring not found', 1, 0]

console.log(findSubstringIndices(["abc", "def", "ghi"], ["gh", "ab", "de"]))
// [2, 0, 1]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findSubstringIndices(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findSubstringIndices(arr1, arr2) {
  let result = []

  for(let str of arr2){
    let index = -1

    for(let i = 0; i < arr1.length; i++){
      if(arr1[i].indexOf(str) !== -1){
        index = i
        break
      }
    }

    result.push(index !== -1 ? index : 'Substring not found')
  }

  return result;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findSubstringIndices', () => {
  expect(findSubstringIndices).to.be.a('function');
});

it("Function findSubstringIndices should include indexOf method", () => {
  const result = findSubstringIndices.toString();
  expect(result).to.include('.indexOf(');
});

it('findSubstringIndices(["apple pie", "banana split", "cherry tart"], ["split", "apple", "cake"]) should return [1, 0, "Substring not found"]', function() {
  expect(findSubstringIndices(["apple pie", "banana split", "cherry tart"], ["split", "apple", "cake"])).to.deep.equal([1, 0, "Substring not found"]);
});

it('findSubstringIndices(["apple pie", "banana split", "cherry tart"], ["tart", "pie"]) should return [2, 0]', function() {
  expect(findSubstringIndices(["apple pie", "banana split", "cherry tart"], ["tart", "pie"])).to.deep.equal([2, 0]);
});

it('findSubstringIndices(["cat", "dog", "fish"], ["dog", "cat", "bird"]) should return [1, 0, "Substring not found"]', function() {
  expect(findSubstringIndices(["cat", "dog", "fish"], ["dog", "cat", "bird"])).to.deep.equal([1, 0, "Substring not found"]);
});

it('findSubstringIndices(["hello world", "hi there", "hey"], ["world", "hi", "nope"]) should return [0, 1, "Substring not found"]', function() {
  expect(findSubstringIndices(["hello world", "hi there", "hey"], ["world", "hi", "nope"])).to.deep.equal([0, 1, "Substring not found"]);
});

it('findSubstringIndices(["one", "two", "three"], ["four", "two", "three"]) should return ["Substring not found", 1, 2]', function() {
  expect(findSubstringIndices(["one", "two", "three"], ["four", "two", "three"])).to.deep.equal(["Substring not found", 1, 2]);
});

it('findSubstringIndices([], ["anything", "nothing"]) should return ["Substring not found", "Substring not found"]', function() {
  expect(findSubstringIndices([], ["anything", "nothing"])).to.deep.equal(["Substring not found", "Substring not found"]);
});

it('findSubstringIndices(["abc", "def", "ghi"], ["gh", "ab", "de"]) should return [2, 0, 1]', function() {
  expect(findSubstringIndices(["abc", "def", "ghi"], ["gh", "ab", "de"])).to.deep.equal([2, 0, 1]);
});

it('findSubstringIndices(["abc", "def", "ghi"], ["xy", "yz", "kl"]) should return ["Substring not found", "Substring not found", "Substring not found"]', function() {
  expect(findSubstringIndices(["abc", "def", "ghi"], ["xy", "yz", "kl"])).to.deep.equal(["Substring not found", "Substring not found", "Substring not found"]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
