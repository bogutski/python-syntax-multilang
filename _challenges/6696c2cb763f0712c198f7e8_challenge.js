// NAMEEN:
// NAMERU:Найти индекс первого элемента, который начинается с заданной подстроки

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findIndexStartingWith`, которая принимает массив строк и подстроку.

Функция должна вернуть индекс первого элемента массива, который содержит данную подстроку.

* Если массив пуст, функция должна вернуть строку `Array is empty`.
* Если подстрока не задана, функция должна вернуть строку `Subarray is undefined`.
* Если такой элемент не найден, функция должна вернуть строку `No element found`.


Примеры запуска функции:
```javascript
findIndexStartingWith(['apple', 'banana', 'cherry'], 'ba'); // 1
findIndexStartingWith(['cat', 'dog', 'fish'], 'fi'); // 2
findIndexStartingWith([], 'ca'); // Вывод: "Array is empty"
findIndexStartingWith(['apple', 'banana', 'cherry'], ''); // Вывод: "Subarray is undefined"
findIndexStartingWith(['apple', 'banana', 'cherry'], 'ca'); // Вывод: "No element found"
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findIndexStartingWith(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findIndexStartingWith(arr, str) {
  if(!arr.length) return 'Array is empty'
  if(!str) return 'Subarray is undefined'

  for(let i = 0; i < arr.length; i++){
    if(arr[i].indexOf(str) !== -1) return i
  }

  return 'No element found';
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findIndexStartingWith', () => {
  expect(findIndexStartingWith).to.be.a('function');
});

it('findIndexStartingWith(["apple", "banana", "cherry"], "ba") should return 1', function() {
  expect(findIndexStartingWith(["apple", "banana", "cherry"], "ba")).to.equal(1);
});

it('findIndexStartingWith(["cat", "dog", "fish"], "do") should return 1', function() {
  expect(findIndexStartingWith(["cat", "dog", "fish"], "do")).to.equal(1);
});

it('findIndexStartingWith([], "ca") should return "Array is empty"', function() {
  expect(findIndexStartingWith([], "ca")).to.equal("Array is empty");
});

it('findIndexStartingWith(["apple", "banana", "cherry"], "") should return "Subarray is undefined"', function() {
  expect(findIndexStartingWith(["apple", "banana", "cherry"], "")).to.equal("Subarray is undefined");
});

it('findIndexStartingWith(["apple", "banana", "cherry"], "ca") should return "No element found"', function() {
  expect(findIndexStartingWith(["apple", "banana", "cherry"], "ca")).to.equal("No element found");
});

it('findIndexStartingWith(["hello", "world", "hi"], "wo") should return 1', function() {
  expect(findIndexStartingWith(["hello", "world", "hi"], "wo")).to.equal(1);
});

it('findIndexStartingWith(["javascript", "java", "typescript"], "java") should return 0', function() {
  expect(findIndexStartingWith(["javascript", "java", "typescript"], "java")).to.equal(0);
});

it('findIndexStartingWith(["python", "ruby", "perl"], "ru") should return 1', function() {
  expect(findIndexStartingWith(["python", "ruby", "perl"], "ru")).to.equal(1);
});

it('findIndexStartingWith(["a", "b", "c"], "d") should return "No element found"', function() {
  expect(findIndexStartingWith(["a", "b", "c"], "d")).to.equal("No element found");
});

it('findIndexStartingWith([], "anything") should return "Array is empty"', function() {
  expect(findIndexStartingWith([], "anything")).to.equal("Array is empty");
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
