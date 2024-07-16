// NAMEEN:
// NAMERU:Палиндром или анаграмма

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте функцию `isPalindromeOrAnagram`, которая принимает два массива в качестве аргументов.

Функция должна возвращать строку "palindrome", если `первый` массив является палиндромом, "anagram", если массивы являются анаграммами друг друга, и "none", если ни одно из условий не выполнено.

Палиндром - массив, который одинаково читается как с начала, так и с конца.
Анаграмма - массивы, содержащие одни и те же элементы, но возможно, в разном порядке.

Примеры использования функции:
```javascript
isPalindromeOrAnagram([1, 2, 3, 2, 1], [5, 4, 3]); // "palindrome"
isPalindromeOrAnagram([1, 2, 3], [3, 2, 1]); // "anagram"
isPalindromeOrAnagram([1, 2, 3], [4, 5, 6]); // "none"
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function isPalindromeOrAnagram(arr1, arr2) {
  if(!arr1.length) return 'none'
  if(arr1.join('') === arr1.slice().reverse().join('')) {
    return "palindrome";
  }
  if(arr1.slice().sort().join('') === arr2.slice().sort().join('')) {
    return "anagram";
  }
  return "none";
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function isPalindromeOrAnagram', () => {
  expect(isPalindromeOrAnagram).to.be.a('function');
});

it('Created function isPalindromeOrAnagram', () => {
  expect(isPalindromeOrAnagram([1, 2, 3, 2, 1], [5, 4, 3])).to.eql('palindrome');
});

it('isPalindromeOrAnagram([1, 2, 3], [3, 2, 1]) should return "anagram"', () => {
  expect(isPalindromeOrAnagram([1, 2, 3], [3, 2, 1])).to.eql('anagram');
});

it('isPalindromeOrAnagram([1, 2, 3], [4, 5, 6]) should return "none"', () => {
  expect(isPalindromeOrAnagram([1, 2, 3], [4, 5, 6])).to.eql('none');
});

it('isPalindromeOrAnagram should handle empty arrays correctly', () => {
  expect(isPalindromeOrAnagram([], [])).to.eql('none');
});

it('isPalindromeOrAnagram should return "none" for non-matching non-palindrome arrays', () => {
  expect(isPalindromeOrAnagram([1, 2, 3], [1, 2, 4])).to.eql('none');
});

it('isPalindromeOrAnagram should identify a single-element array as a palindrome', () => {
  expect(isPalindromeOrAnagram([1], [])).to.eql('palindrome');
});

it('isPalindromeOrAnagram should return "anagram" for arrays with identical elements in different orders', () => {
  expect(isPalindromeOrAnagram(['a', 'b', 'c'], ['c', 'b', 'a'])).to.eql('anagram');
});

it('isPalindromeOrAnagram should return "none" for arrays with different elements', () => {
  expect(isPalindromeOrAnagram(['a', 'b', 'c'], ['d', 'e', 'f'])).to.eql('none');
});

it('isPalindromeOrAnagram should return "palindrome" for a complex palindrome array', () => {
  expect(isPalindromeOrAnagram(['a', 1, 'b', 'b', 1, 'a'], [])).to.eql('palindrome');
});

it('isPalindromeOrAnagram should return "anagram" for complex arrays that are anagrams of each other', () => {
  expect(isPalindromeOrAnagram(['cat', 'dog', 'bird'], ['bird', 'dog', 'cat'])).to.eql('anagram');
});

it('isPalindromeOrAnagram should handle arrays with repeated elements correctly', () => {
  expect(isPalindromeOrAnagram([1, 2, 2, 1, 1], [2, 1, 1, 1, 2])).to.eql('anagram');
});

it('isPalindromeOrAnagram should return "none" for partially matching arrays', () => {
  expect(isPalindromeOrAnagram([1, 2, 3, 4, 5], [5, 4, 3, 2])).to.eql('none');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
