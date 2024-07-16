// NAMEEN:
// NAMERU:Найти индекс элемента с наибольшим количеством гласных

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findIndexWithMostVowels`, которая принимает массив строк.

Функция должна вернуть индекс элемента, который содержит наибольшее количество гласных (a, e, i, o, u).

Если массив пуст или если элементы массива не содержат гласных, функция должна вернуть строку `No vowels found`.


Примеры запуска функции:
```javascript
console.log(findIndexWithMostVowels(['apple', 'banana', 'cherry']));// 1
console.log(findIndexWithMostVowels(['sky', 'dry', 'fly'])); // "No vowels found"
console.log(findIndexWithMostVowels(['education', 'information', 'communication'])); // 2
console.log(findIndexWithMostVowels([])); // "No vowels found"
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findIndexWithMostVowels(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findIndexWithMostVowels(arr) {
  if(!arr.length) return 'No vowels found'

  const vowelsCount = str => {
    const vowels = 'euioa'
    let count = 0
    for(let char of str){
      if(vowels.includes(char)) count++
    }
    return count
  }

  const modified = arr.map(vowelsCount)
  const maxNum = Math.max(...modified)

  return maxNum ? modified.indexOf(maxNum) : 'No vowels found';
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findIndexWithMostVowels', () => {
  expect(findIndexWithMostVowels).to.be.a('function');
});

it('findIndexWithMostVowels(["apple", "banana", "cherry"]) should return 1', function() {
  expect(findIndexWithMostVowels(["apple", "banana", "cherry"])).to.equal(1);
});

it('findIndexWithMostVowels(["sky", "dry", "fly"]) should return "No vowels found"', function() {
  expect(findIndexWithMostVowels(["sky", "dry", "fly"])).to.equal("No vowels found");
});

it('findIndexWithMostVowels(["education", "information", "communication"]) should return 2', function() {
  expect(findIndexWithMostVowels(["education", "information", "communication"])).to.equal(2);
});

it('findIndexWithMostVowels(["hello", "world", "javascript"]) should return 2', function() {
  expect(findIndexWithMostVowels(["hello", "world", "javascript"])).to.equal(2);
});

it('findIndexWithMostVowels(["", "a", "e", "i", "o", "u"]) should return 1', function() {
  expect(findIndexWithMostVowels(["", "a", "e", "i", "o", "u"])).to.equal(1);
});

it('findIndexWithMostVowels(["bcdfg", "hjkl", "mnpqr"]) should return "No vowels found"', function() {
  expect(findIndexWithMostVowels(["bcdfg", "hjkl", "mnpqr"])).to.equal("No vowels found");
});

it('findIndexWithMostVowels(["apple", "orange", "grape"]) should return 1', function() {
  expect(findIndexWithMostVowels(["apple", "orange", "grape"])).to.equal(1);
});

it('findIndexWithMostVowels([]) should return "No vowels found"', function() {
  expect(findIndexWithMostVowels([])).to.equal("No vowels found");
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
